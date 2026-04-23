import { prisma } from "@/lib/db";
import { type GrantFilters } from "./schemas";

/**
 * Get all published grants with filters
 */
export async function getGrants(filters: GrantFilters) {
  const { search, sector, country, minAmount, maxAmount, status, page = 1, pageSize = 20 } = filters;

  const where: any = {
    status: "PUBLISHED",
  };

  if (search) {
    where.OR = [
      { title: { contains: search, mode: "insensitive" } },
      { description: { contains: search, mode: "insensitive" } },
      { funderName: { contains: search, mode: "insensitive" } },
    ];
  }

  if (sector) {
    where.eligibleSectors = { has: sector };
  }

  if (country) {
    where.eligibleCountries = { has: country };
  }

  if (minAmount || maxAmount) {
    where.AND = [];
    if (minAmount) where.AND.push({ amountMax: { gte: minAmount * 100 } });
    if (maxAmount) where.AND.push({ amountMin: { lte: maxAmount * 100 } });
  }

  const [grants, total] = await Promise.all([
    prisma.grant.findMany({
      where,
      orderBy: { deadline: "asc" },
      skip: (page - 1) * pageSize,
      take: pageSize,
      select: {
        id: true,
        title: true,
        summary: true,
        funderName: true,
        funderType: true,
        amountMin: true,
        amountMax: true,
        currency: true,
        deadline: true,
        eligibleSectors: true,
        eligibleCountries: true,
        isFeatured: true,
        createdAt: true,
      },
    }),
    prisma.grant.count({ where }),
  ]);

  return {
    grants,
    pagination: {
      page,
      pageSize,
      total,
      totalPages: Math.ceil(total / pageSize),
    },
  };
}

/**
 * Get grant by ID
 */
export async function getGrantById(grantId: string) {
  return prisma.grant.findUnique({
    where: { id: grantId },
    include: {
      organisation: {
        select: {
          name: true,
          slug: true,
          verified: true,
        },
      },
    },
  });
}

/**
 * Get recommended grants for an organisation (AI matching simulation)
 */
export async function getRecommendedGrants(organisationId: string, limit = 10) {
  const org = await prisma.organisation.findUnique({
    where: { id: organisationId },
    select: {
      sector: true,
      subSector: true,
      country: true,
      budgetRange: true,
    },
  });

  if (!org) return [];

  const sectors = org.sector ? [org.sector] : [];
  const countries = org.country ? [org.country] : [];

  return prisma.grant.findMany({
    where: {
      status: "PUBLISHED",
      deadline: { gt: new Date() },
      OR: sectors.map((sector) => ({
        eligibleSectors: { has: sector },
      })),
      ...(countries.length > 0 && {
        eligibleCountries: { hasSome: countries },
      }),
    },
    orderBy: { isFeatured: "desc" },
    take: limit,
    select: {
      id: true,
      title: true,
      funderName: true,
      amountMax: true,
      currency: true,
      deadline: true,
      isFeatured: true,
    },
  });
}

/**
 * Create a grant application
 */
export async function createGrantApplication(userId: string, grantId: string) {
  // Check if already applied
  const existing = await prisma.grantApplication.findUnique({
    where: {
      grantId_applicantId: {
        grantId,
        applicantId: userId,
      },
    },
  });

  if (existing) {
    throw new Error("You have already applied to this grant");
  }

  // Get next application number
  const count = await prisma.grantApplication.count();
  const applicationNumber = `APP-${new Date().getFullYear()}-${String(count + 1).padStart(5, "0")}`;

  return prisma.grantApplication.create({
    data: {
      applicationNumber,
      grantId,
      applicantId: userId,
      status: "DRAFT",
    },
    select: {
      id: true,
      applicationNumber: true,
      status: true,
      createdAt: true,
    },
  });
}

/**
 * Get user's grant applications
 */
export async function getUserApplications(userId: string) {
  return prisma.grantApplication.findMany({
    where: { applicantId: userId },
    include: {
      grant: {
        select: {
          title: true,
          funderName: true,
          deadline: true,
        },
      },
    },
    orderBy: { createdAt: "desc" },
  });
}

/**
 * Update grant application
 */
export async function updateGrantApplication(
  applicationId: string,
  userId: string,
  data: {
    proposalUrl?: string;
    budgetUrl?: string;
    supportingDocs?: string[];
  }
) {
  const application = await prisma.grantApplication.findUnique({
    where: { id: applicationId },
  });

  if (!application || application.applicantId !== userId) {
    throw new Error("Application not found");
  }

  return prisma.grantApplication.update({
    where: { id: applicationId },
    data: {
      ...data,
      updatedAt: new Date(),
    },
  });
}

/**
 * Get user's grant application by ID
 */
export async function getUserApplicationById(applicationId: string, userId: string) {
  return prisma.grantApplication.findFirst({
    where: { id: applicationId, applicantId: userId },
    include: {
      grant: {
        select: {
          title: true,
          funderName: true,
          amountMax: true,
          currency: true,
          deadline: true,
        },
      },
    },
  });
}

/**
 * Submit grant application
 */
export async function submitGrantApplication(applicationId: string, userId: string) {
  const application = await prisma.grantApplication.findUnique({
    where: { id: applicationId },
    include: {
      grant: {
        select: { deadline: true },
      },
    },
  });

  if (!application || application.applicantId !== userId) {
    throw new Error("Application not found");
  }

  if (application.status !== "DRAFT") {
    throw new Error("Application has already been submitted");
  }

  if (new Date() > application.grant.deadline) {
    throw new Error("Grant deadline has passed");
  }

  return prisma.grantApplication.update({
    where: { id: applicationId },
    data: {
      status: "SUBMITTED",
      submittedAt: new Date(),
    },
  });
}
