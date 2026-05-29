import { prisma } from "@/lib/db";
import { Prisma } from "@prisma/client";

export async function getProjects(organisationId: string) {
  return prisma.project.findMany({
    where: { organisationId },
    orderBy: { createdAt: "desc" },
    include: {
      lead: {
        select: {
          firstName: true,
          lastName: true,
          email: true,
        },
      },
      grantApplication: {
        select: {
          grant: {
            select: {
              title: true,
              funderName: true,
            },
          },
        },
      },
    },
  });
}

export async function getProjectById(projectId: string, organisationId: string) {
  return prisma.project.findFirst({
    where: { id: projectId, organisationId },
    include: {
      lead: {
        select: {
          id: true,
          firstName: true,
          lastName: true,
          email: true,
          avatarUrl: true,
        },
      },
      grantApplication: {
        include: {
          grant: {
            select: {
              title: true,
              funderName: true,
              amountMax: true,
              currency: true,
            },
          },
        },
      },
    },
  });
}

export async function createProject(data: {
  title: string;
  description: string;
  summary: string;
  organisationId: string;
  leadId?: string;
  startDate: Date;
  endDate: Date;
  budgetTotal: number;
  currency: string;
  beneficiaries?: number;
  beneficiariesUnit?: string;
  countries?: string[];
  outcomes?: string[];
}) {
  const slug = data.title.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/^-|-$/g, "") + "-" + Date.now().toString(36);

  return prisma.project.create({
    data: {
      title: data.title,
      description: data.description,
      summary: data.summary,
      slug,
      organisationId: data.organisationId,
      leadId: data.leadId,
      startDate: data.startDate,
      endDate: data.endDate,
      budgetTotal: data.budgetTotal,
      currency: data.currency,
      beneficiaries: data.beneficiaries,
      beneficiariesUnit: data.beneficiariesUnit,
      countries: data.countries || [],
      outcomes: data.outcomes || [],
      status: "PLANNING",
      budgetSpent: 0,
    },
  });
}

export async function updateProjectStatus(projectId: string, status: string) {
  return prisma.project.update({
    where: { id: projectId },
    data: { status: status as Prisma.EnumProjectStatusFieldUpdateOperationsInput },
  });
}

export async function getProjectStats(organisationId: string) {
  const projects = await prisma.project.findMany({
    where: { organisationId },
    select: {
      status: true,
      budgetTotal: true,
      budgetSpent: true,
      beneficiaries: true,
    },
  });

  const stats = {
    total: projects.length,
    byStatus: {
      PLANNING: projects.filter((p) => p.status === "PLANNING").length,
      ACTIVE: projects.filter((p) => p.status === "ACTIVE").length,
      ON_HOLD: projects.filter((p) => p.status === "ON_HOLD").length,
      COMPLETED: projects.filter((p) => p.status === "COMPLETED").length,
      CANCELLED: projects.filter((p) => p.status === "CANCELLED").length,
    },
    totalBudget: projects.reduce((sum: number, p) => sum + p.budgetTotal, 0),
    totalSpent: projects.reduce((sum: number, p) => sum + p.budgetSpent, 0),
    totalBeneficiaries: projects.reduce((sum: number, p) => sum + (p.beneficiaries || 0), 0),
  };

  return stats;
}
