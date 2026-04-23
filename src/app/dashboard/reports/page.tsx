import { getCurrentUser } from "@/features/auth/auth.actions";
import { getComplianceStats } from "@/features/compliance/compliance.service";
import { redirect } from "next/navigation";
import Link from "next/link";
import { Badge } from "@/components/ui/badge";

export default async function CompliancePage() {
  const user = await getCurrentUser();
  if (!user || !user.organisationId) redirect("/auth/login");

  const stats = await getComplianceStats(user.organisationId);

  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-display-sm font-heading font-bold text-primary">
            Compliance & Reporting
          </h1>
          <p className="text-body-lg text-gray-600 mt-2">
            Track and manage compliance requirements
          </p>
        </div>
        <Link href="/dashboard/reports/new" className="btn-primary">
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
          </svg>
          New Report
        </Link>
      </div>

      {/* Compliance Score */}
      <div className="card p-6 bg-gradient-to-br from-primary to-primary/90 text-white">
        <div className="flex items-center justify-between">
          <div>
            <p className="text-body-lg opacity-90">Overall Compliance Rate</p>
            <p className="text-display-lg font-bold mt-1">{stats.complianceRate}%</p>
            <div className="flex items-center gap-2 mt-2">
              <Badge variant="success" className="bg-white/20 text-white">
                On Track
              </Badge>
              <span className="text-body-sm opacity-90">
                {stats.approvedReports} of {stats.totalReports} reports approved
              </span>
            </div>
          </div>
          <div className="w-32 h-32 relative">
            <svg className="w-full h-full transform -rotate-90">
              <circle
                cx="64"
                cy="64"
                r="56"
                stroke="rgba(255,255,255,0.2)"
                strokeWidth="16"
                fill="none"
              />
              <circle
                cx="64"
                cy="64"
                r="56"
                stroke="white"
                strokeWidth="16"
                fill="none"
                strokeDasharray={`${(stats.complianceRate / 100) * 352} 352`}
                strokeLinecap="round"
              />
            </svg>
          </div>
        </div>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="card p-6">
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 rounded-md bg-warning/10 flex items-center justify-center">
              <svg className="w-6 h-6 text-warning" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <div>
              <p className="text-label-md text-gray-600">Pending</p>
              <p className="text-display-md font-bold text-warning">{stats.pendingReports}</p>
            </div>
          </div>
        </div>

        <div className="card p-6">
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 rounded-md bg-info/10 flex items-center justify-center">
              <svg className="w-6 h-6 text-info" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
              </svg>
            </div>
            <div>
              <p className="text-label-md text-gray-600">Submitted</p>
              <p className="text-display-md font-bold text-info">{stats.submittedReports}</p>
            </div>
          </div>
        </div>

        <div className="card p-6">
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 rounded-md bg-success/10 flex items-center justify-center">
              <svg className="w-6 h-6 text-success" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <div>
              <p className="text-label-md text-gray-600">Approved</p>
              <p className="text-display-md font-bold text-success">{stats.approvedReports}</p>
            </div>
          </div>
        </div>
      </div>

      {/* Upcoming Deadlines */}
      <div className="card">
        <div className="card-header">
          <h2 className="text-h4 font-heading font-semibold text-primary">
            Upcoming Deadlines
          </h2>
        </div>
        <div className="card-body">
          {stats.upcomingDeadlines.length === 0 ? (
            <div className="text-center py-8">
              <svg className="w-12 h-12 text-gray-300 mx-auto mb-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
              </svg>
              <p className="text-body-md text-gray-600">No upcoming deadlines</p>
            </div>
          ) : (
            <div className="space-y-3">
              {stats.upcomingDeadlines.map((deadline) => (
                <div
                  key={deadline.reportId}
                  className="flex items-center justify-between p-4 rounded-md border border-border hover:border-warning transition-colors"
                >
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-1">
                      <Badge variant="warning">Draft</Badge>
                      <span className="text-body-sm text-gray-600">{deadline.reportType}</span>
                    </div>
                    <h3 className="text-body-md font-medium text-primary">{deadline.projectTitle}</h3>
                  </div>
                  <div className="text-right">
                    <p className="text-body-sm font-medium text-warning">
                      Due {deadline.periodEnd.toLocaleDateString()}
                    </p>
                    <Link
                      href={`/dashboard/reports/${deadline.reportId}/edit`}
                      className="text-body-sm text-secondary hover:underline"
                    >
                      Complete →
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
