import { getCurrentUser } from "@/features/auth/auth.actions";
import { getUserApplicationById } from "@/features/grants/grant.service";
import { redirect } from "next/navigation";
import Link from "next/link";
import { Badge } from "@/components/ui/badge";

interface ApplicationPageProps {
  params: { id: string };
}

const STATUS_CONFIG: any = {
  DRAFT: { label: "Draft", color: "gray" },
  SUBMITTED: { label: "Submitted", color: "info" },
  UNDER_REVIEW: { label: "Under Review", color: "warning" },
  INTERVIEW: { label: "Interview", color: "primary" },
  FINAL_REVIEW: { label: "Final Review", color: "primary" },
  APPROVED: { label: "Approved", color: "success" },
  REJECTED: { label: "Rejected", color: "error" },
  WITHDRAWN: { label: "Withdrawn", color: "gray" },
};

export default async function ApplicationDetailPage({ params }: ApplicationPageProps) {
  const user = await getCurrentUser();
  if (!user) redirect("/auth/login");

  const application = await getUserApplicationById(params.id, user.id);
  if (!application) redirect("/dashboard/applications");

  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="flex items-start justify-between">
        <div>
          <div className="flex items-center gap-2 text-body-sm text-gray-600 mb-2">
            <Link href="/dashboard/applications" className="hover:text-primary">Applications</Link>
            <span>/</span>
            <span>{application.applicationNumber}</span>
          </div>
          <h1 className="text-display-sm font-heading font-bold text-primary">
            {application.grant.title}
          </h1>
          <p className="text-body-lg text-gray-600 mt-2">{application.grant.funderName}</p>
        </div>
        <div className="flex gap-3">
          <Badge variant={STATUS_CONFIG[application.status]?.color || "default"}>
            {STATUS_CONFIG[application.status]?.label}
          </Badge>
        </div>
      </div>

      {/* Timeline */}
      <div className="card p-6">
        <h2 className="text-h4 font-heading font-semibold text-primary mb-4">Application Timeline</h2>
        <div className="flex items-center justify-between">
          <div className="flex flex-col items-center">
            <div className="w-10 h-10 rounded-full bg-success flex items-center justify-center">
              <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
            </div>
            <p className="text-body-sm text-gray-600 mt-2">Created</p>
            <p className="text-body-xs text-gray-500">{new Date(application.createdAt).toLocaleDateString()}</p>
          </div>
          {application.submittedAt && (
            <div className="flex flex-col items-center">
              <div className="w-10 h-10 rounded-full bg-info flex items-center justify-center">
                <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <p className="text-body-sm text-gray-600 mt-2">Submitted</p>
              <p className="text-body-xs text-gray-500">{new Date(application.submittedAt).toLocaleDateString()}</p>
            </div>
          )}
          {application.reviewedAt && (
            <div className="flex flex-col items-center">
              <div className="w-10 h-10 rounded-full bg-warning flex items-center justify-center">
                <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <p className="text-body-sm text-gray-600 mt-2">Under Review</p>
              <p className="text-body-xs text-gray-500">{new Date(application.reviewedAt).toLocaleDateString()}</p>
            </div>
          )}
          {application.decisionAt && (
            <div className="flex flex-col items-center">
              <div className={`w-10 h-10 rounded-full flex items-center justify-center ${
                application.decision === "AWARDED" ? "bg-success" : "bg-error"
              }`}>
                <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <p className="text-body-sm text-gray-600 mt-2">
                {application.decision === "AWARDED" ? "Awarded" : "Decision"}
              </p>
              <p className="text-body-xs text-gray-500">{new Date(application.decisionAt).toLocaleDateString()}</p>
            </div>
          )}
        </div>
      </div>

      {/* Documents */}
      <div className="card">
        <div className="card-header">
          <h2 className="text-h4 font-heading font-semibold text-primary">Submitted Documents</h2>
        </div>
        <div className="card-body">
          {application.proposalUrl || application.budgetUrl ? (
            <div className="space-y-4">
              {application.proposalUrl && (
                <div className="flex items-center justify-between p-4 rounded-md border border-border">
                  <div>
                    <p className="text-body-md font-medium text-primary">Project Proposal</p>
                    <p className="text-body-sm text-gray-500">{application.proposalUrl}</p>
                  </div>
                  <a href={application.proposalUrl} target="_blank" rel="noopener noreferrer" className="btn-secondary">
                    View
                  </a>
                </div>
              )}
              {application.budgetUrl && (
                <div className="flex items-center justify-between p-4 rounded-md border border-border">
                  <div>
                    <p className="text-body-md font-medium text-primary">Budget Document</p>
                    <p className="text-body-sm text-gray-500">{application.budgetUrl}</p>
                  </div>
                  <a href={application.budgetUrl} target="_blank" rel="noopener noreferrer" className="btn-secondary">
                    View
                  </a>
                </div>
              )}
            </div>
          ) : (
            <div className="text-center py-8">
              <p className="text-body-md text-gray-500">No documents submitted</p>
            </div>
          )}
        </div>
      </div>

      {/* Grant Info */}
      <div className="card">
        <div className="card-header">
          <h2 className="text-h4 font-heading font-semibold text-primary">Grant Information</h2>
        </div>
        <div className="card-body">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <p className="text-label-md text-gray-600">Funding Amount</p>
              <p className="text-body-lg font-medium text-primary">
                {application.grant.currency} {(application.grant.amountMax || 0) / 100}
              </p>
            </div>
            <div>
              <p className="text-label-md text-gray-600">Deadline</p>
              <p className="text-body-lg font-medium text-primary">
                {new Date(application.grant.deadline).toLocaleDateString()}
              </p>
            </div>
          </div>
          <div className="mt-4">
            <Link href={`/dashboard/grants/${application.grantId}`} className="text-secondary hover:underline">
              View Grant Details →
            </Link>
          </div>
        </div>
      </div>

      {/* Decision Notes */}
      {(application.decision === "AWARDED" || application.decision === "REJECTED") && application.decisionNotes && (
        <div className={`card border-${application.decision === "AWARDED" ? "success" : "error"}/50`}>
          <div className="card-header">
            <h2 className={`text-h4 font-heading font-semibold text-${application.decision === "AWARDED" ? "success" : "error"}`}>
              {application.decision === "AWARDED" ? "Congratulations!" : "Application Status"}
            </h2>
          </div>
          <div className="card-body">
            <p className="text-body-md text-gray-700">{application.decisionNotes}</p>
            {application.awardedAmount && (
              <p className="text-body-lg font-bold text-primary mt-4">
                Awarded Amount: {application.grant.currency} {(application.awardedAmount / 100).toLocaleString()}
              </p>
            )}
          </div>
        </div>
      )}
    </div>
  );
}