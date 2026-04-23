import { getCurrentUser } from "@/features/auth/auth.actions";
import { getProjects, getProjectStats } from "@/features/projects/project.service";
import { redirect } from "next/navigation";
import Link from "next/link";
import { Badge } from "@/components/ui/badge";

const PROJECT_STATUS_CONFIG: any = {
  PLANNING: { label: "Planning", color: "gray" },
  ACTIVE: { label: "Active", color: "success" },
  ON_HOLD: { label: "On Hold", color: "warning" },
  COMPLETED: { label: "Completed", color: "primary" },
  CANCELLED: { label: "Cancelled", color: "error" },
};

export default async function ProjectsPage() {
  const user = await getCurrentUser();
  if (!user || !user.organisationId) redirect("/auth/login");

  const [projects, stats] = await Promise.all([
    getProjects(user.organisationId),
    getProjectStats(user.organisationId),
  ]);

  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-display-sm font-heading font-bold text-primary">
            Projects
          </h1>
          <p className="text-body-lg text-gray-600 mt-2">
            Manage and track your NGO's projects
          </p>
        </div>
        <Link href="/dashboard/projects/new" className="btn-primary">
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
          </svg>
          New Project
        </Link>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <div className="card p-6">
          <p className="text-label-md text-gray-600">Total Projects</p>
          <p className="text-display-md font-bold text-primary mt-1">{stats.total}</p>
        </div>
        <div className="card p-6">
          <p className="text-label-md text-gray-600">Active</p>
          <p className="text-display-md font-bold text-success mt-1">{stats.byStatus.ACTIVE}</p>
        </div>
        <div className="card p-6">
          <p className="text-label-md text-gray-600">Total Budget</p>
          <p className="text-display-md font-bold text-primary mt-1">
            ${stats.totalBudget.toLocaleString()}
          </p>
        </div>
        <div className="card p-6">
          <p className="text-label-md text-gray-600">Beneficiaries</p>
          <p className="text-display-md font-bold text-tertiary mt-1">
            {stats.totalBeneficiaries.toLocaleString()}
          </p>
        </div>
      </div>

      {/* Projects List */}
      <div className="card">
        <div className="card-header flex items-center justify-between">
          <h2 className="text-h4 font-heading font-semibold text-primary">
            All Projects
          </h2>
          <div className="flex gap-2">
            <select className="px-4 py-2 rounded-md border border-input bg-surface-container-lowest text-foreground text-sm">
              <option value="">All Statuses</option>
              <option value="PLANNING">Planning</option>
              <option value="ACTIVE">Active</option>
              <option value="ON_HOLD">On Hold</option>
              <option value="COMPLETED">Completed</option>
            </select>
          </div>
        </div>
        <div className="card-body">
          {projects.length === 0 ? (
            <div className="text-center py-12">
              <svg className="w-16 h-16 text-gray-300 mx-auto mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-6l-2-2H5a2 2 0 00-2 2z" />
              </svg>
              <h3 className="text-body-lg font-semibold text-gray-700">No projects yet</h3>
              <p className="text-body-md text-gray-500 mt-1 mb-4">
                Create your first project to start tracking progress
              </p>
              <Link href="/dashboard/projects/new" className="btn-primary">
                Create Project
              </Link>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {projects.map((project) => (
                <Link
                  key={project.id}
                  href={`/dashboard/projects/${project.id}`}
                  className="card p-6 hover:shadow-card-hover transition-all"
                >
                  <div className="flex items-start justify-between mb-4">
                    <Badge variant={PROJECT_STATUS_CONFIG[project.status]?.color || "default"}>
                      {PROJECT_STATUS_CONFIG[project.status]?.label}
                    </Badge>
                    {project.grantApplication && (
                      <svg className="w-5 h-5 text-tertiary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    )}
                  </div>
                  <h3 className="text-body-lg font-semibold text-primary line-clamp-2">
                    {project.title}
                  </h3>
                  <p className="text-body-sm text-gray-600 mt-2 line-clamp-2">
                    {project.summary}
                  </p>
                  <div className="mt-4 space-y-2">
                    <div className="flex items-center justify-between text-body-sm">
                      <span className="text-gray-600">Budget</span>
                      <span className="font-medium text-primary">
                        {project.currency} {project.budgetTotal.toLocaleString()}
                      </span>
                    </div>
                    <div className="flex items-center justify-between text-body-sm">
                      <span className="text-gray-600">Spent</span>
                      <span className="font-medium">
                        {project.currency} {project.budgetSpent.toLocaleString()}
                      </span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <div
                        className="bg-secondary h-2 rounded-full transition-all"
                        style={{
                          width: `${Math.min((project.budgetSpent / project.budgetTotal) * 100, 100)}%`,
                        }}
                      />
                    </div>
                    {project.beneficiaries && (
                      <div className="flex items-center gap-2 text-body-sm text-gray-600 pt-2 border-t border-border">
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                        </svg>
                        {project.beneficiaries.toLocaleString()} beneficiaries
                      </div>
                    )}
                  </div>
                  <div className="flex items-center justify-between mt-4 pt-4 border-t border-border">
                    <div className="flex items-center gap-2">
                      <div className="w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center">
                        <span className="text-primary font-semibold text-xs">
                          {project.lead?.firstName?.charAt(0) || "?"}
                        </span>
                      </div>
                      <span className="text-body-sm text-gray-600">
                        {project.lead ? `${project.lead.firstName} ${project.lead.lastName}` : "Unassigned"}
                      </span>
                    </div>
                    <span className="text-body-xs text-gray-500">
                      {new Date(project.startDate).toLocaleDateString()}
                    </span>
                  </div>
                </Link>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
