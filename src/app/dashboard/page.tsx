import { getCurrentUser } from "@/features/auth/auth.actions";
import { redirect } from "next/navigation";
import Link from "next/link";
import { prisma } from "@/lib/db";
import { Badge } from "@/components/ui/badge";

export default async function DashboardPage() {
  const user = await getCurrentUser();

  if (!user) {
    redirect("/auth/login");
  }

  // Get stats (in production, use proper queries with date ranges)
  const [grantCount, projectCount, applicationCount] = await Promise.all([
    prisma.grant.count({
      where: { status: "PUBLISHED" },
    }),
    prisma.project.count({
      where: { organisationId: user.organisationId || undefined },
    }),
    prisma.grantApplication.count({
      where: { applicantId: user.id },
    }),
  ]);

  // Get recent grants
  const recentGrants = await prisma.grant.findMany({
    where: { status: "PUBLISHED" },
    orderBy: { createdAt: "desc" },
    take: 5,
    select: {
      id: true,
      title: true,
      funderName: true,
      deadline: true,
      amountMax: true,
      currency: true,
    },
  });

  return (
    <div className="space-y-8">
      {/* Welcome Section */}
      <div>
        <h1 className="text-display-sm font-heading font-bold text-primary">
          Welcome back, {user.firstName}!
        </h1>
        <p className="text-body-lg text-gray-600 mt-2">
          Here's what's happening with your NGO today.
        </p>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {/* Active Grants */}
        <div className="card p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-label-md text-gray-600">Active Grants</p>
              <p className="text-display-md font-bold text-primary mt-1">
                {grantCount}
              </p>
            </div>
            <div className="w-12 h-12 rounded-md bg-secondary/10 flex items-center justify-center">
              <svg className="w-6 h-6 text-secondary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
              </svg>
            </div>
          </div>
          <div className="mt-4">
            <Link href="/dashboard/grants" className="text-body-sm text-secondary hover:underline">
              View all grants →
            </Link>
          </div>
        </div>

        {/* Projects */}
        <div className="card p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-label-md text-gray-600">Projects</p>
              <p className="text-display-md font-bold text-primary mt-1">
                {projectCount}
              </p>
            </div>
            <div className="w-12 h-12 rounded-md bg-tertiary/10 flex items-center justify-center">
              <svg className="w-6 h-6 text-tertiary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
              </svg>
            </div>
          </div>
          <div className="mt-4">
            <Link href="/dashboard/projects" className="text-body-sm text-secondary hover:underline">
              View projects →
            </Link>
          </div>
        </div>

        {/* Applications */}
        <div className="card p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-label-md text-gray-600">Applications</p>
              <p className="text-display-md font-bold text-primary mt-1">
                {applicationCount}
              </p>
            </div>
            <div className="w-12 h-12 rounded-md bg-primary/10 flex items-center justify-center">
              <svg className="w-6 h-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
            </div>
          </div>
          <div className="mt-4">
            <Link href="/dashboard/applications" className="text-body-sm text-secondary hover:underline">
              View applications →
            </Link>
          </div>
        </div>

        {/* Compliance */}
        <div className="card p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-label-md text-gray-600">Compliance</p>
              <div className="flex items-center gap-2 mt-1">
                <p className="text-display-md font-bold text-success">98%</p>
                <Badge variant="success">On Track</Badge>
              </div>
            </div>
            <div className="w-12 h-12 rounded-md bg-success/10 flex items-center justify-center">
              <svg className="w-6 h-6 text-success" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
          </div>
          <div className="mt-4">
            <Link href="/dashboard/compliance" className="text-body-sm text-secondary hover:underline">
              View compliance →
            </Link>
          </div>
        </div>
      </div>

      {/* Main Content Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Recent Grants */}
        <div className="lg:col-span-2 card">
          <div className="card-header flex items-center justify-between">
            <h2 className="text-h4 font-heading font-semibold text-primary">
              Recent Grant Opportunities
            </h2>
            <Link href="/dashboard/grants" className="text-body-sm text-secondary hover:underline">
              View all
            </Link>
          </div>
          <div className="card-body">
            <div className="space-y-4">
              {recentGrants.length === 0 ? (
                <p className="text-body-md text-gray-500 text-center py-8">
                  No grants available yet.
                </p>
              ) : (
                recentGrants.map((grant) => (
                  <div
                    key={grant.id}
                    className="flex items-center justify-between p-4 rounded-md bg-surface-container-low hover:bg-surface-container transition-colors"
                  >
                    <div className="flex-1">
                      <h3 className="text-body-md font-semibold text-primary">
                        {grant.title}
                      </h3>
                      <p className="text-body-sm text-gray-600 mt-1">
                        {grant.funderName}
                      </p>
                    </div>
                    <div className="text-right">
                      <p className="text-body-md font-semibold text-secondary">
                        {grant.currency} {grant.amountMax?.toLocaleString() || "N/A"}
                      </p>
                      <p className="text-body-sm text-gray-500">
                        Due {new Date(grant.deadline).toLocaleDateString()}
                      </p>
                    </div>
                  </div>
                ))
              )}
            </div>
          </div>
        </div>

        {/* Quick Actions */}
        <div className="card">
          <div className="card-header">
            <h2 className="text-h4 font-heading font-semibold text-primary">
              Quick Actions
            </h2>
          </div>
          <div className="card-body space-y-3">
            <Link
              href="/dashboard/grants?tab=matching"
              className="flex items-center gap-3 p-3 rounded-md hover:bg-surface-container-low transition-colors"
            >
              <div className="w-10 h-10 rounded-md bg-secondary/10 flex items-center justify-center flex-shrink-0">
                <svg className="w-5 h-5 text-secondary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
              </div>
              <div>
                <p className="text-body-md font-medium text-primary">Find Grants</p>
                <p className="text-body-sm text-gray-600">Discover funding opportunities</p>
              </div>
            </Link>

            <Link
              href="/dashboard/projects/new"
              className="flex items-center gap-3 p-3 rounded-md hover:bg-surface-container-low transition-colors"
            >
              <div className="w-10 h-10 rounded-md bg-tertiary/10 flex items-center justify-center flex-shrink-0">
                <svg className="w-5 h-5 text-tertiary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
                </svg>
              </div>
              <div>
                <p className="text-body-md font-medium text-primary">New Project</p>
                <p className="text-body-sm text-gray-600">Create a new project</p>
              </div>
            </Link>

            <Link
              href="/dashboard/reports"
              className="flex items-center gap-3 p-3 rounded-md hover:bg-surface-container-low transition-colors"
            >
              <div className="w-10 h-10 rounded-md bg-primary/10 flex items-center justify-center flex-shrink-0">
                <svg className="w-5 h-5 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 17v-2m3 2v-4m3 4v-6m2 10H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
              </div>
              <div>
                <p className="text-body-md font-medium text-primary">Generate Report</p>
                <p className="text-body-sm text-gray-600">Create compliance report</p>
              </div>
            </Link>

            <Link
              href="/dashboard/training"
              className="flex items-center gap-3 p-3 rounded-md hover:bg-surface-container-low transition-colors"
            >
              <div className="w-10 h-10 rounded-md bg-warning/10 flex items-center justify-center flex-shrink-0">
                <svg className="w-5 h-5 text-warning" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                </svg>
              </div>
              <div>
                <p className="text-body-md font-medium text-primary">Training</p>
                <p className="text-body-sm text-gray-600">Access learning resources</p>
              </div>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
