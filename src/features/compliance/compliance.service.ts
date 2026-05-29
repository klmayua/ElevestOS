import { prisma } from "@/lib/db";

export async function getComplianceReports(projectId: string) {
  return prisma.complianceReport.findMany({
    where: { projectId },
    orderBy: { periodEnd: "desc" },
    include: {
      project: {
        select: {
          title: true,
          status: true,
        },
      },
    },
  });
}

export async function getComplianceStats(organisationId: string) {
  const projects = await prisma.project.findMany({
    where: { organisationId },
    include: {
      complianceReports: {
        select: {
          id: true,
          status: true,
          periodEnd: true,
          reportType: true,
        },
      },
    },
  });

  const totalReports = projects.reduce((sum: number, p) => sum + p.complianceReports.length, 0);
  const pendingReports = projects.reduce(
    (sum: number, p) => sum + p.complianceReports.filter((r) => r.status === "DRAFT").length,
    0
  );
  const submittedReports = projects.reduce(
    (sum: number, p) => sum + p.complianceReports.filter((r) => r.status === "SUBMITTED").length,
    0
  );
  const approvedReports = projects.reduce(
    (sum: number, p) => sum + p.complianceReports.filter((r) => r.status === "APPROVED").length,
    0
  );

  // Calculate compliance rate
  const complianceRate = totalReports > 0 ? Math.round((approvedReports / totalReports) * 100) : 100;

  // Upcoming deadlines (reports due in next 30 days)
  const thirtyDaysFromNow = new Date();
  thirtyDaysFromNow.setDate(thirtyDaysFromNow.getDate() + 30);

  const upcomingDeadlines = projects
    .flatMap((p) =>
      p.complianceReports
        .filter((r) => r.status === "DRAFT" && r.periodEnd <= thirtyDaysFromNow)
        .map((r) => ({
          projectId: p.id,
          projectTitle: p.title,
          reportId: r.id,
          periodEnd: r.periodEnd,
          reportType: r.reportType,
        }))
    )
    .sort((a, b) => a.periodEnd.getTime() - b.periodEnd.getTime());

  return {
    totalReports,
    pendingReports,
    submittedReports,
    approvedReports,
    complianceRate,
    upcomingDeadlines,
  };
}

export async function createComplianceReport(data: {
  projectId: string;
  reportType: string;
  periodStart: Date;
  periodEnd: Date;
  activities: string[];
  achievements: string[];
  challenges: string[];
  budgetUtilization: number;
  beneficiariesReached?: number;
}) {
  return prisma.complianceReport.create({
    data: {
      ...data,
      status: "DRAFT",
    },
  });
}

export async function submitComplianceReport(reportId: string) {
  return prisma.complianceReport.update({
    where: { id: reportId },
    data: {
      status: "SUBMITTED",
      submittedAt: new Date(),
    },
  });
}
