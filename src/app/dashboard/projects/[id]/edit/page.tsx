import { getCurrentUser } from "@/features/auth/auth.actions";
import { getProjectById } from "@/features/projects/project.service";
import { redirect } from "next/navigation";
import { prisma } from "@/lib/db";

interface EditProjectPageProps {
  params: { id: string };
}

async function updateProjectAction(formData: FormData) {
  "use server";
  const user = await getCurrentUser();
  if (!user) redirect("/auth/login");

  const projectId = formData.get("projectId") as string;
  const title = formData.get("title") as string;
  const summary = formData.get("summary") as string;
  const description = formData.get("description") as string;

  await prisma.project.update({
    where: { id: projectId },
    data: { title, summary, description },
  });

  redirect(`/dashboard/projects/${projectId}`);
}

export default async function EditProjectPage({ params }: EditProjectPageProps) {
  const user = await getCurrentUser();
  if (!user || !user.organisationId) redirect("/auth/login");

  const project = await getProjectById(params.id, user.organisationId);
  if (!project) redirect("/dashboard/projects");

  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-display-sm font-heading font-bold text-primary">
          Edit Project
        </h1>
        <p className="text-body-lg text-gray-600 mt-2">
          Update project details for {project.title}
        </p>
      </div>

      <div className="card">
        <div className="card-body">
          <form action={updateProjectAction}>
            <input type="hidden" name="projectId" value={project.id} />
            <div className="space-y-6">
              <div>
                <label className="block text-label-md text-gray-700 mb-2">Project Title</label>
                <input
                  defaultValue={project.title}
                  name="title"
                  className="w-full px-4 py-3 rounded-md border border-input bg-surface-container-lowest"
                />
              </div>

              <div>
                <label className="block text-label-md text-gray-700 mb-2">Summary</label>
                <textarea
                  defaultValue={project.summary}
                  name="summary"
                  rows={3}
                  className="w-full px-4 py-3 rounded-md border border-input bg-surface-container-lowest"
                />
              </div>

              <div>
                <label className="block text-label-md text-gray-700 mb-2">Description</label>
                <textarea
                  defaultValue={project.description}
                  name="description"
                  rows={6}
                  className="w-full px-4 py-3 rounded-md border border-input bg-surface-container-lowest"
                />
              </div>

              <div className="flex gap-4">
                <button type="submit" className="btn-primary">Save Changes</button>
                <a href={`/dashboard/projects/${project.id}`} className="btn-secondary">Cancel</a>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
