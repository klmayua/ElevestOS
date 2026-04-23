import { getCurrentUser } from "@/features/auth/auth.actions";
import { prisma } from "@/lib/db";
import { redirect } from "next/navigation";
import Link from "next/link";
import { Badge } from "@/components/ui/badge";

export default async function OrganisationProfilePage() {
  const user = await getCurrentUser();
  if (!user || !user.organisationId) redirect("/auth/login");

  const organisation = await prisma.organisation.findUnique({
    where: { id: user.organisationId },
    include: {
      users: {
        select: { firstName: true, lastName: true, role: true },
      },
      projects: {
        where: { status: "ACTIVE" },
        select: { id: true, title: true, status: true, beneficiaries: true },
      },
    },
  });

  if (!organisation) redirect("/dashboard");

  return (
    <div className="space-y-8">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-display-sm font-heading font-bold text-primary">
            {organisation.name}
          </h1>
          <div className="flex items-center gap-3 mt-2">
            {organisation.verified && (
              <Badge variant="success">Verified</Badge>
            )}
            <span className="text-body-md text-gray-600">{organisation.country}</span>
          </div>
        </div>
        <Link href="/dashboard/settings" className="btn-secondary">
          Edit Profile
        </Link>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2 space-y-6">
          <div className="card">
            <div className="card-header">
              <h2 className="text-h4 font-heading font-semibold text-primary">About</h2>
            </div>
            <div className="card-body">
              <p className="text-body-md text-gray-700">{organisation.description}</p>
            </div>
          </div>

          <div className="card">
            <div className="card-header">
              <h2 className="text-h4 font-heading font-semibold text-primary">Active Projects</h2>
            </div>
            <div className="card-body">
              {organisation.projects.length === 0 ? (
                <p className="text-body-md text-gray-500">No active projects</p>
              ) : (
                <div className="space-y-4">
                  {organisation.projects.map(project => (
                    <div key={project.id} className="flex items-center justify-between p-4 rounded-md border border-border">
                      <div>
                        <p className="text-body-md font-medium text-primary">{project.title}</p>
                        <p className="text-body-sm text-gray-500">{project.beneficiaries?.toLocaleString()} beneficiaries</p>
                      </div>
                      <Badge variant="success">{project.status}</Badge>
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>

        <div className="space-y-6">
          <div className="card">
            <div className="card-header">
              <h2 className="text-h4 font-heading font-semibold text-primary">Details</h2>
            </div>
            <div className="card-body space-y-4">
              <div>
                <p className="text-label-md text-gray-600">Registration</p>
                <p className="text-body-md font-medium text-primary">{organisation.registrationNumber}</p>
              </div>
              <div>
                <p className="text-label-md text-gray-600">Sector</p>
                <p className="text-body-md font-medium text-primary">{organisation.sector}</p>
              </div>
              <div>
                <p className="text-label-md text-gray-600">Year Founded</p>
                <p className="text-body-md font-medium text-primary">{organisation.yearFounded}</p>
              </div>
              <div>
                <p className="text-label-md text-gray-600">Staff Count</p>
                <p className="text-body-md font-medium text-primary">{organisation.staffCount}</p>
              </div>
              <div>
                <p className="text-label-md text-gray-600">Budget Range</p>
                <p className="text-body-md font-medium text-primary">{organisation.budgetRange}</p>
              </div>
            </div>
          </div>

          <div className="card">
            <div className="card-header">
              <h2 className="text-h4 font-heading font-semibold text-primary">Team</h2>
            </div>
            <div className="card-body">
              <div className="space-y-3">
                {organisation.users.map((member, i) => (
                  <div key={i} className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                      <span className="text-primary font-semibold">
                        {member.firstName[0]}{member.lastName[0]}
                      </span>
                    </div>
                    <div>
                      <p className="text-body-md font-medium text-primary">
                        {member.firstName} {member.lastName}
                      </p>
                      <p className="text-body-sm text-gray-500">{member.role}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}