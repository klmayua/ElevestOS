import { getCurrentUser } from "@/features/auth/auth.actions";
import { getProjectById } from "@/features/projects/project.service";
import { redirect } from "next/navigation";
import Link from "next/link";
import { Badge } from "@/components/ui/badge";

interface ProjectPageProps {
  params: { id: string };
}

const STATUS_CONFIG: any = {
  PLANNING: { label: "Planning", color: "gray" },
  ACTIVE: { label: "Active", color: "success" },
  ON_HOLD: { label: "On Hold", color: "warning" },
  COMPLETED: { label: "Completed", color: "primary" },
  CANCELLED: { label: "Cancelled", color: "error" },
};

export default async function ProjectDetailPage({ params }: ProjectPageProps) {
  const user = await getCurrentUser();
  if (!user || !user.organisationId) redirect("/auth/login");

  const project = await getProjectById(params.id, user.organisationId);
  if (!project) redirect("/dashboard/projects");

  const budgetProgress = project.budgetTotal > 0 
    ? Math.min((project.budgetSpent / project.budgetTotal) * 100, 100) 
    : 0;

  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="flex items-start justify-between">
        <div>
          <div className="flex items-center gap-2 text-body-sm text-gray-600 mb-2">
            <Link href="/dashboard/projects" className="hover:text-primary">Projects</Link>
            <span>/</span>
            <span>{project.title}</span>
          </div>
          <h1 className="text-display-sm font-heading font-bold text-primary">
            {project.title}
          </h1>
          <p className="text-body-lg text-gray-600 mt-2">{project.summary}</p>
        </div>
        <div className="flex gap-3">
          <Link href={`/dashboard/projects/${project.id}/edit`} className="btn-secondary">
            Edit Project
          </Link>
          <Badge variant={STATUS_CONFIG[project.status]?.color || "default"}>
            {STATUS_CONFIG[project.status]?.label}
          </Badge>
        </div>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <div className="card p-6">
          <p className="text-label-md text-gray-600">Total Budget</p>
          <p className="text-display-md font-bold text-primary mt-1">
            {project.currency} {project.budgetTotal.toLocaleString()}
          </p>
        </div>
        <div className="card p-6">
          <p className="text-label-md text-gray-600">Spent</p>
          <p className="text-display-md font-bold text-warning mt-1">
            {project.currency} {project.budgetSpent.toLocaleString()}
          </p>
        </div>
        <div className="card p-6">
          <p className="text-label-md text-gray-600">Budget Used</p>
          <p className="text-display-md font-bold text-primary mt-1">{budgetProgress.toFixed(0)}%</p>
        </div>
        <div className="card p-6">
          <p className="text-label-md text-gray-600">Beneficiaries</p>
          <p className="text-display-md font-bold text-tertiary mt-1">
            {project.beneficiaries?.toLocaleString() || 0}
          </p>
        </div>
      </div>

      {/* Budget Progress */}
      <div className="card p-6">
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-h4 font-heading font-semibold text-primary">Budget Utilization</h2>
          <span className="text-body-sm text-gray-600">
            {project.currency} {project.budgetSpent.toLocaleString()} of {project.currency} {project.budgetTotal.toLocaleString()}
          </span>
        </div>
        <div className="w-full bg-gray-200 rounded-full h-4">
          <div
            className="bg-secondary h-4 rounded-full transition-all"
            style={{ width: `${budgetProgress}%` }}
          />
        </div>
      </div>

      {/* Main Content */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2 space-y-6">
          <div className="card">
            <div className="card-header">
              <h2 className="text-h4 font-heading font-semibold text-primary">Description</h2>
            </div>
            <div className="card-body">
              <p className="text-body-md text-gray-700 whitespace-pre-line">
                {project.description}
              </p>
            </div>
          </div>

          <div className="card">
            <div className="card-header">
              <h2 className="text-h4 font-heading font-semibold text-primary">Key Outcomes</h2>
            </div>
            <div className="card-body">
              {project.outcomes && project.outcomes.length > 0 ? (
                <ul className="space-y-3">
                  {project.outcomes.map((outcome, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <svg className="w-5 h-5 text-tertiary mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span className="text-body-md text-gray-700">{outcome}</span>
                    </li>
                  ))}
                </ul>
              ) : (
                <p className="text-body-md text-gray-500">No outcomes defined yet</p>
              )}
            </div>
          </div>
        </div>

        <div className="space-y-6">
          <div className="card">
            <div className="card-header">
              <h2 className="text-h4 font-heading font-semibold text-primary">Project Details</h2>
            </div>
            <div className="card-body space-y-4">
              <div>
                <p className="text-label-md text-gray-600">Duration</p>
                <p className="text-body-md font-medium text-primary">
                  {new Date(project.startDate).toLocaleDateString()} - {new Date(project.endDate).toLocaleDateString()}
                </p>
              </div>
              <div>
                <p className="text-label-md text-gray-600">Countries</p>
                <div className="flex flex-wrap gap-2 mt-1">
                  {project.countries?.map((country) => (
                    <Badge key={country} variant="default">{country}</Badge>
                  ))}
                </div>
              </div>
              <div>
                <p className="text-label-md text-gray-600">Project Lead</p>
                <p className="text-body-md font-medium text-primary">
                  {project.lead ? `${project.lead.firstName} ${project.lead.lastName}` : "Unassigned"}
                </p>
              </div>
              {project.grantApplication && (
                <div>
                  <p className="text-label-md text-gray-600">Funded By</p>
                  <p className="text-body-md font-medium text-primary">
                    {project.grantApplication.grant?.title}
                  </p>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}