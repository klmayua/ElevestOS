import { prisma } from "@/lib/db";

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
  return prisma.project.create({
    data: {
      ...data,
      status: "PLANNING",
      budgetSpent: 0,
    },
  });
}

export async function updateProjectStatus(projectId: string, status: string) {
  return prisma.project.update({
    where: { id: projectId },
    data: { status },
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
    totalBudget: projects.reduce((sum, p) => sum + p.budgetTotal, 0),
    totalSpent: projects.reduce((sum, p) => sum + p.budgetSpent, 0),
    totalBeneficiaries: projects.reduce((sum, p) => sum + (p.beneficiaries || 0), 0),
  };

  return stats;
}
