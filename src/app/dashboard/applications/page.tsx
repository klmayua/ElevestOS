import { getCurrentUser } from "@/features/auth/auth.actions";
import { getUserApplications } from "@/features/grants/grant.service";
import { redirect } from "next/navigation";
import Link from "next/link";
import { Badge } from "@/components/ui/badge";

const APPLICATION_STATUS_CONFIG: any = {
  DRAFT: { label: "Draft", color: "gray" },
  SUBMITTED: { label: "Submitted", color: "info" },
  UNDER_REVIEW: { label: "Under Review", color: "warning" },
  INTERVIEW: { label: "Interview", color: "primary" },
  FINAL_REVIEW: { label: "Final Review", color: "primary" },
  APPROVED: { label: "Approved", color: "success" },
  REJECTED: { label: "Rejected", color: "error" },
  WITHDRAWN: { label: "Withdrawn", color: "gray" },
};

export default async function ApplicationsPage() {
  const user = await getCurrentUser();
  if (!user) redirect("/auth/login");

  const applications = await getUserApplications(user.id);

  const stats = {
    total: applications.length,
    draft: applications.filter((a) => a.status === "DRAFT").length,
    submitted: applications.filter((a) => a.status === "SUBMITTED").length,
    approved: applications.filter((a) => a.status === "APPROVED").length,
  };

  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-display-sm font-heading font-bold text-primary">
            My Applications
          </h1>
          <p className="text-body-lg text-gray-600 mt-2">
            Track and manage your grant applications
          </p>
        </div>
        <Link href="/dashboard/grants" className="btn-primary">
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
          </svg>
          New Application
        </Link>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <div className="card p-6">
          <p className="text-label-md text-gray-600">Total</p>
          <p className="text-display-md font-bold text-primary mt-1">{stats.total}</p>
        </div>
        <div className="card p-6">
          <p className="text-label-md text-gray-600">Draft</p>
          <p className="text-display-md font-bold text-gray-500 mt-1">{stats.draft}</p>
        </div>
        <div className="card p-6">
          <p className="text-label-md text-gray-600">Submitted</p>
          <p className="text-display-md font-bold text-info mt-1">{stats.submitted}</p>
        </div>
        <div className="card p-6">
          <p className="text-label-md text-gray-600">Approved</p>
          <p className="text-display-md font-bold text-success mt-1">{stats.approved}</p>
        </div>
      </div>

      {/* Applications List */}
      <div className="card">
        <div className="card-header">
          <h2 className="text-h4 font-heading font-semibold text-primary">
            All Applications
          </h2>
        </div>
        <div className="card-body">
          {applications.length === 0 ? (
            <div className="text-center py-12">
              <svg className="w-16 h-16 text-gray-300 mx-auto mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
              </svg>
              <h3 className="text-body-lg font-semibold text-gray-700">No applications yet</h3>
              <p className="text-body-md text-gray-500 mt-1 mb-4">
                Start by browsing available grants
              </p>
              <Link href="/dashboard/grants" className="btn-primary">
                Browse Grants
              </Link>
            </div>
          ) : (
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="border-b border-border">
                    <th className="text-left py-3 px-4 text-label-md text-gray-700">Application</th>
                    <th className="text-left py-3 px-4 text-label-md text-gray-700">Funder</th>
                    <th className="text-left py-3 px-4 text-label-md text-gray-700">Status</th>
                    <th className="text-left py-3 px-4 text-label-md text-gray-700">Submitted</th>
                    <th className="text-left py-3 px-4 text-label-md text-gray-700">Decision</th>
                    <th className="text-right py-3 px-4 text-label-md text-gray-700">Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {applications.map((app) => (
                    <tr key={app.id} className="border-b border-border hover:bg-surface-container-low">
                      <td className="py-4 px-4">
                        <div>
                          <p className="text-body-md font-medium text-primary">{app.grant.title}</p>
                          <p className="text-body-sm text-gray-500">{app.applicationNumber}</p>
                        </div>
                      </td>
                      <td className="py-4 px-4">
                        <p className="text-body-md text-gray-700">{app.grant.funderName}</p>
                      </td>
                      <td className="py-4 px-4">
                        <Badge variant={APPLICATION_STATUS_CONFIG[app.status]?.color || "default"}>
                          {APPLICATION_STATUS_CONFIG[app.status]?.label}
                        </Badge>
                      </td>
                      <td className="py-4 px-4">
                        <p className="text-body-sm text-gray-600">
                          {app.submittedAt ? new Date(app.submittedAt).toLocaleDateString() : "-"}
                        </p>
                      </td>
                      <td className="py-4 px-4">
                        <p className="text-body-sm text-gray-600">
                          {app.decisionAt ? new Date(app.decisionAt).toLocaleDateString() : "-"}
                        </p>
                      </td>
                      <td className="py-4 px-4 text-right">
                        <div className="flex items-center justify-end gap-2">
                          {app.status === "DRAFT" && (
                            <Link
                              href={`/dashboard/grants/${app.grantId}/apply`}
                              className="text-body-sm text-secondary hover:underline"
                            >
                              Continue
                            </Link>
                          )}
                          <Link
                            href={`/dashboard/applications/${app.id}`}
                            className="text-body-sm text-primary hover:underline"
                          >
                            View
                          </Link>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
