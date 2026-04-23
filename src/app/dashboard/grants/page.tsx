import { getCurrentUser } from "@/features/auth/auth.actions";
import { getGrants, getRecommendedGrants } from "@/features/grants/grant.service";
import { redirect } from "next/navigation";
import Link from "next/link";
import { Badge } from "@/components/ui/badge";

interface GrantsPageProps {
  searchParams: Promise<{
    search?: string;
    sector?: string;
    country?: string;
    page?: string;
  }>;
}

export default async function GrantsPage({ searchParams }: GrantsPageProps) {
  const user = await getCurrentUser();
  if (!user) redirect("/auth/login");

  const params = await searchParams;
  const page = parseInt(params.page || "1");
  
  const filters = {
    search: params.search || undefined,
    sector: params.sector || undefined,
    country: params.country || undefined,
    page,
    pageSize: 10,
  };

  const { grants, pagination } = await getGrants(filters);
  const recommendedGrants = user.organisationId
    ? await getRecommendedGrants(user.organisationId, 5)
    : [];

  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-display-sm font-heading font-bold text-primary">
            Grant Opportunities
          </h1>
          <p className="text-body-lg text-gray-600 mt-2">
            Discover and apply for funding opportunities
          </p>
        </div>
        <div className="flex gap-3">
          <button className="btn-secondary">
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 4a1 1 0 011-1h16a1 1 0 011 1v2.586a1 1 0 01-.293.707l-6.414 6.414a1 1 0 00-.293.707V17l-4 4v-6.586a1 1 0 00-.293-.707L3.293 7.293A1 1 0 013 6.586V4z" />
            </svg>
            Filter
          </button>
          <button className="btn-primary">
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
            </svg>
            Create Grant
          </button>
        </div>
      </div>

      {/* Recommended Grants */}
      {recommendedGrants.length > 0 && (
        <div className="card">
          <div className="card-header">
            <div className="flex items-center gap-2">
              <svg className="w-5 h-5 text-secondary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
              <h2 className="text-h4 font-heading font-semibold text-primary">
                Recommended for You
              </h2>
            </div>
          </div>
          <div className="card-body">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {recommendedGrants.map((grant) => (
                <Link
                  key={grant.id}
                  href={`/dashboard/grants/${grant.id}`}
                  className="p-4 rounded-md border border-border hover:border-secondary hover:shadow-card-hover transition-all"
                >
                  <div className="flex items-start justify-between mb-2">
                    <Badge variant={grant.isFeatured ? "primary" : "default"}>
                      {grant.isFeatured ? "Featured" : "Grant"}
                    </Badge>
                  </div>
                  <h3 className="text-body-md font-semibold text-primary line-clamp-2">
                    {grant.title}
                  </h3>
                  <p className="text-body-sm text-gray-600 mt-1">{grant.funderName}</p>
                  <div className="flex items-center justify-between mt-3">
                    <span className="text-body-sm font-medium text-secondary">
                      {grant.currency} {grant.amountMax?.toLocaleString() || "N/A"}
                    </span>
                    <span className="text-body-xs text-gray-500">
                      Due {new Date(grant.deadline).toLocaleDateString()}
                    </span>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* All Grants */}
      <div className="card">
        <div className="card-header flex items-center justify-between">
          <h2 className="text-h4 font-heading font-semibold text-primary">
            All Opportunities
          </h2>
          <div className="flex items-center gap-4">
            <input
              type="text"
              placeholder="Search grants..."
              className="px-4 py-2 rounded-md border border-input bg-surface-container-lowest text-foreground focus:outline-none focus:ring-2 focus:ring-secondary text-sm"
            />
            <select className="px-4 py-2 rounded-md border border-input bg-surface-container-lowest text-foreground focus:outline-none focus:ring-2 focus:ring-secondary text-sm">
              <option value="">All Sectors</option>
              <option value="Education">Education</option>
              <option value="Health">Health</option>
              <option value="Environment">Environment</option>
              <option value="Human Rights">Human Rights</option>
              <option value="Economic Development">Economic Development</option>
            </select>
          </div>
        </div>
        <div className="card-body">
          <div className="space-y-4">
            {grants.length === 0 ? (
              <div className="text-center py-12">
                <svg className="w-16 h-16 text-gray-300 mx-auto mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
                <h3 className="text-body-lg font-semibold text-gray-700">No grants found</h3>
                <p className="text-body-md text-gray-500 mt-1">
                  Try adjusting your search or filters
                </p>
              </div>
            ) : (
              grants.map((grant) => (
                <div
                  key={grant.id}
                  className="flex items-start justify-between p-4 rounded-md border border-border hover:border-secondary hover:shadow-card-hover transition-all"
                >
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-2">
                      {grant.isFeatured && (
                        <Badge variant="primary">Featured</Badge>
                      )}
                      <Badge variant="secondary">{grant.funderType.replace("_", " ")}</Badge>
                    </div>
                    <h3 className="text-body-lg font-semibold text-primary">
                      {grant.title}
                    </h3>
                    <p className="text-body-md text-gray-600 mt-1 line-clamp-2">
                      {grant.summary}
                    </p>
                    <div className="flex items-center gap-4 mt-3">
                      <div className="flex items-center gap-1 text-body-sm text-gray-600">
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                        </svg>
                        {grant.funderName}
                      </div>
                      <div className="flex items-center gap-1 text-body-sm text-gray-600">
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v8l-4-4m6-4a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                        Deadline: {new Date(grant.deadline).toLocaleDateString()}
                      </div>
                    </div>
                    <div className="flex flex-wrap gap-2 mt-3">
                      {grant.eligibleSectors.slice(0, 3).map((sector) => (
                        <Badge key={sector} variant="default">{sector}</Badge>
                      ))}
                      {grant.eligibleSectors.length > 3 && (
                        <Badge variant="default">+{grant.eligibleSectors.length - 3}</Badge>
                      )}
                    </div>
                  </div>
                  <div className="text-right ml-6 flex-shrink-0">
                    <p className="text-body-lg font-bold text-secondary">
                      {grant.currency} {(grant.amountMax || 0) / 100}
                    </p>
                    {grant.amountMin && (
                      <p className="text-body-sm text-gray-500">
                        Min: {grant.currency} {grant.amountMin / 100}
                      </p>
                    )}
                    <Link
                      href={`/dashboard/grants/${grant.id}`}
                      className="btn-primary mt-4 inline-flex"
                    >
                      View Details
                    </Link>
                  </div>
                </div>
              ))
            )}
          </div>

          {/* Pagination */}
          {pagination.totalPages > 1 && (
            <div className="flex items-center justify-between mt-6 pt-6 border-t border-border">
              <p className="text-body-sm text-gray-600">
                Showing {((pagination.page - 1) * pagination.pageSize) + 1} to{" "}
                {Math.min(pagination.page * pagination.pageSize, pagination.total)} of{" "}
                {pagination.total} grants
              </p>
              <div className="flex gap-2">
                <button
                  disabled={pagination.page === 1}
                  className="px-4 py-2 rounded-md border border-input disabled:opacity-50 hover:bg-gray-50"
                >
                  Previous
                </button>
                {Array.from({ length: pagination.totalPages }, (_, i) => i + 1).map((page) => (
                  <button
                    key={page}
                    className={`px-4 py-2 rounded-md ${
                      page === pagination.page
                        ? "bg-secondary text-white"
                        : "border border-input hover:bg-gray-50"
                    }`}
                  >
                    {page}
                  </button>
                ))}
                <button
                  disabled={pagination.page === pagination.totalPages}
                  className="px-4 py-2 rounded-md border border-input disabled:opacity-50 hover:bg-gray-50"
                >
                  Next
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
