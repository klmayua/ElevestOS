import { getCurrentUser } from "@/features/auth/auth.actions";
import { getGrantById } from "@/features/grants/grant.service";
import { notFound } from "next/navigation";
import Link from "next/link";
import { Badge } from "@/components/ui/badge";
import { createGrantApplication } from "@/features/grants/grant.service";

export default async function GrantDetailPage({
  params,
}: {
  params: { grantId: string };
}) {
  const user = await getCurrentUser();
  const grant = await getGrantById(params.grantId);

  if (!grant) notFound();

  const isPastDeadline = new Date(grant.deadline) < new Date();
  const daysUntilDeadline = Math.ceil(
    (new Date(grant.deadline).getTime() - Date.now()) / (1000 * 60 * 60 * 24)
  );

  const handleApply = async () => {
    "use server";
    if (!user) return;
    await createGrantApplication(user.id, grant.id);
  };

  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="flex items-start justify-between">
        <div className="flex-1">
          <div className="flex items-center gap-3 mb-3">
            <Badge variant={grant.isFeatured ? "primary" : "secondary"}>
              {grant.isFeatured ? "Featured Opportunity" : grant.status}
            </Badge>
            <Badge variant="default">{grant.funderType.replace("_", " ")}</Badge>
          </div>
          <h1 className="text-display-sm font-heading font-bold text-primary">
            {grant.title}
          </h1>
          <p className="text-body-lg text-gray-600 mt-2">{grant.funderName}</p>
        </div>
        <div className="flex gap-3">
          <Link href="/dashboard/grants" className="btn-secondary">
            ← Back
          </Link>
          {!isPastDeadline && user && (
            <form action={handleApply}>
              <button type="submit" className="btn-primary">
                Apply Now
              </button>
            </form>
          )}
        </div>
      </div>

      {/* Key Info Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <div className="card p-6">
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 rounded-md bg-secondary/10 flex items-center justify-center">
              <svg className="w-6 h-6 text-secondary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <div>
              <p className="text-label-md text-gray-600">Funding Amount</p>
              <p className="text-display-md font-bold text-primary">
                {grant.currency} {(grant.amountMin || 0) / 100} - {(grant.amountMax || 0) / 100}
              </p>
            </div>
          </div>
        </div>

        <div className="card p-6">
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 rounded-md bg-tertiary/10 flex items-center justify-center">
              <svg className="w-6 h-6 text-tertiary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
              </svg>
            </div>
            <div>
              <p className="text-label-md text-gray-600">Deadline</p>
              <p className="text-display-md font-bold text-primary">
                {new Date(grant.deadline).toLocaleDateString()}
              </p>
            </div>
          </div>
          {daysUntilDeadline > 0 && (
            <p className={`text-body-sm mt-2 ${daysUntilDeadline < 7 ? "text-error" : "text-gray-600"}`}>
              {daysUntilDeadline} days remaining
            </p>
          )}
        </div>

        <div className="card p-6">
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 rounded-md bg-primary/10 flex items-center justify-center">
              <svg className="w-6 h-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <div>
              <p className="text-label-md text-gray-600">Duration</p>
              <p className="text-display-md font-bold text-primary">
                {grant.durationMin || "N/A"} - {grant.durationMax || "N/A"} months
              </p>
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
              <p className="text-label-md text-gray-600">Status</p>
              <p className="text-display-md font-bold text-success">
                {isPastDeadline ? "Closed" : "Open"}
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Description */}
        <div className="lg:col-span-2 space-y-6">
          <div className="card">
            <div className="card-header">
              <h2 className="text-h4 font-heading font-semibold text-primary">
                About This Grant
              </h2>
            </div>
            <div className="card-body">
              <p className="text-body-md text-gray-700 leading-relaxed">
                {grant.description}
              </p>
            </div>
          </div>

          {/* Requirements */}
          <div className="card">
            <div className="card-header">
              <h2 className="text-h4 font-heading font-semibold text-primary">
                Requirements
              </h2>
            </div>
            <div className="card-body">
              <ul className="space-y-3">
                {grant.requirements.map((req, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <svg className="w-5 h-5 text-tertiary mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <span className="text-body-md text-gray-700">{req}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Documents */}
          <div className="card">
            <div className="card-header">
              <h2 className="text-h4 font-heading font-semibold text-primary">
                Required Documents
              </h2>
            </div>
            <div className="card-body">
              <div className="space-y-3">
                <div className="flex items-center justify-between p-4 rounded-md bg-surface-container-low">
                  <div className="flex items-center gap-3">
                    <svg className="w-8 h-8 text-secondary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                    </svg>
                    <div>
                      <p className="text-body-md font-medium text-primary">Project Proposal</p>
                      <p className="text-body-sm text-gray-600">PDF, Max 10MB</p>
                    </div>
                  </div>
                  <Badge variant="error">Required</Badge>
                </div>
                <div className="flex items-center justify-between p-4 rounded-md bg-surface-container-low">
                  <div className="flex items-center gap-3">
                    <svg className="w-8 h-8 text-secondary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 14h.01M12 14h.01M15 11h.01M12 11h.01M9 11h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
                    </svg>
                    <div>
                      <p className="text-body-md font-medium text-primary">Budget Breakdown</p>
                      <p className="text-body-sm text-gray-600">Excel or PDF, Max 5MB</p>
                    </div>
                  </div>
                  <Badge variant="error">Required</Badge>
                </div>
                <div className="flex items-center justify-between p-4 rounded-md bg-surface-container-low">
                  <div className="flex items-center gap-3">
                    <svg className="w-8 h-8 text-secondary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                    </svg>
                    <div>
                      <p className="text-body-md font-medium text-primary">Organisation Registration</p>
                      <p className="text-body-sm text-gray-600">PDF, Max 5MB</p>
                    </div>
                  </div>
                  <Badge variant="warning">Optional</Badge>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Sidebar */}
        <div className="space-y-6">
          {/* Eligibility */}
          <div className="card">
            <div className="card-header">
              <h2 className="text-h4 font-heading font-semibold text-primary">
                Eligibility
              </h2>
            </div>
            <div className="card-body space-y-4">
              <div>
                <p className="text-label-md text-gray-600 mb-2">Sectors</p>
                <div className="flex flex-wrap gap-2">
                  {grant.eligibleSectors.map((sector) => (
                    <Badge key={sector} variant="default">{sector}</Badge>
                  ))}
                </div>
              </div>
              <div>
                <p className="text-label-md text-gray-600 mb-2">Countries</p>
                <div className="flex flex-wrap gap-2">
                  {grant.eligibleCountries.map((country) => (
                    <Badge key={country} variant="default">{country}</Badge>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Action Card */}
          <div className="card bg-gradient-to-br from-secondary to-secondary/90 text-white">
            <div className="card-body text-center">
              <h3 className="text-h4 font-heading font-semibold mb-2">
                Ready to Apply?
              </h3>
              <p className="text-body-md opacity-90 mb-4">
                Start your application now. You can save and complete it later.
              </p>
              {!isPastDeadline ? (
                <form>
                  <button type="submit" className="w-full bg-white text-secondary font-semibold py-3 rounded-md hover:bg-gray-50 transition-colors">
                    Start Application
                  </button>
                </form>
              ) : (
                <button disabled className="w-full bg-gray-300 text-gray-500 font-semibold py-3 rounded-md cursor-not-allowed">
                  Application Closed
                </button>
              )}
            </div>
          </div>

          {/* Contact */}
          <div className="card">
            <div className="card-body">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                  <svg className="w-5 h-5 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <div>
                  <p className="text-body-md font-medium text-primary">Questions?</p>
                  <p className="text-body-sm text-gray-600">Contact the funder</p>
                </div>
              </div>
              <button className="w-full btn-secondary">
                Send Message
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
