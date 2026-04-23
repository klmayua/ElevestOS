import { getCurrentUser } from "@/features/auth/auth.actions";
import { getGrantById } from "@/features/grants/grant.service";
import { notFound, redirect } from "next/navigation";
import Link from "next/link";
import { Badge } from "@/components/ui/badge";

interface GrantPageProps {
  params: { id: string };
}

export default async function GrantDetailPage({ params }: GrantPageProps) {
  const user = await getCurrentUser();
  if (!user) redirect("/auth/login");

  const grant = await getGrantById(params.id);
  if (!grant) notFound();

  const isPastDeadline = new Date(grant.deadline) < new Date();
  const daysUntilDeadline = Math.ceil(
    (new Date(grant.deadline).getTime() - new Date().getTime()) / (1000 * 60 * 60 * 24)
  );

  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="flex items-start justify-between">
        <div className="flex-1">
          <div className="flex items-center gap-3 mb-4">
            <Badge variant={grant.isFeatured ? "primary" : "secondary"}>
              {grant.isFeatured ? "Featured Opportunity" : grant.status}
            </Badge>
            <Badge variant="default">{grant.funderType.replace("_", " ")}</Badge>
            {isPastDeadline && <Badge variant="error">Closed</Badge>}
          </div>
          <h1 className="text-display-sm font-heading font-bold text-primary">
            {grant.title}
          </h1>
          <p className="text-body-lg text-gray-600 mt-2">{grant.funderName}</p>
        </div>
        <div className="flex gap-3">
          <Link href="/dashboard/grants" className="btn-secondary">
            Back to Grants
          </Link>
          {!isPastDeadline && (
            <Link href={`/dashboard/grants/${grant.id}/apply`} className="btn-primary">
              Apply Now
            </Link>
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
            <div className="w-12 h-12 rounded-md bg-warning/10 flex items-center justify-center">
              <svg className="w-6 h-6 text-warning" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
              </svg>
            </div>
            <div>
              <p className="text-label-md text-gray-600">Deadline</p>
              <p className="text-display-md font-bold text-primary">
                {new Date(grant.deadline).toLocaleDateString()}
              </p>
              {!isPastDeadline && (
                <p className={`text-body-sm ${daysUntilDeadline < 7 ? "text-error" : "text-gray-600"}`}>
                  {daysUntilDeadline} days remaining
                </p>
              )}
            </div>
          </div>
        </div>

        <div className="card p-6">
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 rounded-md bg-tertiary/10 flex items-center justify-center">
              <svg className="w-6 h-6 text-tertiary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <div>
              <p className="text-label-md text-gray-600">Duration</p>
              <p className="text-display-md font-bold text-primary">
                {grant.durationMin}-{grant.durationMax} months
              </p>
            </div>
          </div>
        </div>

        <div className="card p-6">
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 rounded-md bg-primary/10 flex items-center justify-center">
              <svg className="w-6 h-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
              </svg>
            </div>
            <div>
              <p className="text-label-md text-gray-600">Eligibility</p>
              <p className="text-body-lg font-bold text-primary">
                {grant.eligibleSectors.length} sectors
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Left Content */}
        <div className="lg:col-span-2 space-y-6">
          {/* Description */}
          <div className="card">
            <div className="card-header">
              <h2 className="text-h4 font-heading font-semibold text-primary">
                About This Grant
              </h2>
            </div>
            <div className="card-body">
              <p className="text-body-md text-gray-700 whitespace-pre-line">
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
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-body-md text-gray-700">{req}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Eligibility */}
          <div className="card">
            <div className="card-header">
              <h2 className="text-h4 font-heading font-semibold text-primary">
                Eligibility Criteria
              </h2>
            </div>
            <div className="card-body">
              <div className="space-y-4">
                <div>
                  <h3 className="text-body-md font-semibold text-primary mb-2">Sectors</h3>
                  <div className="flex flex-wrap gap-2">
                    {grant.eligibleSectors.map((sector) => (
                      <Badge key={sector} variant="default">{sector}</Badge>
                    ))}
                  </div>
                </div>
                <div>
                  <h3 className="text-body-md font-semibold text-primary mb-2">Countries</h3>
                  <div className="flex flex-wrap gap-2">
                    {grant.eligibleCountries.map((country) => (
                      <Badge key={country} variant="default">{country}</Badge>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Right Sidebar */}
        <div className="space-y-6">
          {/* Apply Card */}
          <div className="card sticky top-24">
            <div className="card-body space-y-4">
              <div>
                <p className="text-label-md text-gray-600">Application Deadline</p>
                <p className={`text-body-lg font-bold ${daysUntilDeadline < 7 ? "text-error" : "text-primary"}`}>
                  {new Date(grant.deadline).toLocaleDateString(undefined, {
                    weekday: "long",
                    year: "numeric",
                    month: "long",
                    day: "numeric",
                  })}
                </p>
              </div>

              {!isPastDeadline ? (
                <Link href={`/dashboard/grants/${grant.id}/apply`} className="btn-primary w-full justify-center">
                  Start Application
                </Link>
              ) : (
                <button disabled className="btn-secondary w-full justify-center opacity-50 cursor-not-allowed">
                  Applications Closed
                </button>
              )}

              <div className="pt-4 border-t border-border space-y-3">
                <div className="flex items-center gap-2 text-body-sm text-gray-600">
                  <svg className="w-5 h-5 text-success" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <span>Free to apply</span>
                </div>
                <div className="flex items-center gap-2 text-body-sm text-gray-600">
                  <svg className="w-5 h-5 text-success" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                  </svg>
                  <span>Secure application</span>
                </div>
                <div className="flex items-center gap-2 text-body-sm text-gray-600">
                  <svg className="w-5 h-5 text-success" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                  </svg>
                  <span>Save progress</span>
                </div>
              </div>
            </div>
          </div>

          {/* Funder Info */}
          <div className="card">
            <div className="card-header">
              <h2 className="text-h4 font-heading font-semibold text-primary">
                Funder Information
              </h2>
            </div>
            <div className="card-body space-y-4">
              <div>
                <p className="text-label-md text-gray-600">Organisation</p>
                <p className="text-body-md font-medium text-primary">
                  {grant.organisation?.name || grant.funderName}
                </p>
              </div>
              {grant.organisation && (
                <div className="flex items-center gap-2">
                  <Badge variant={grant.organisation.verified ? "success" : "default"}>
                    {grant.organisation.verified ? "Verified" : "Unverified"}
                  </Badge>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
