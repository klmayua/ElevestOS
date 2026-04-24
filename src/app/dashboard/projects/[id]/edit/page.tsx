import { getCurrentUser } from "@/features/auth/auth.actions";
import { getProjectById, updateProject } from "@/features/projects/project.service";
import { redirect } from "next/navigation";

interface EditProjectPageProps {
  params: { id: string };
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
          <form action={async (formData) => {
            "use server";
            // TODO: Implement update
          }}>
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
                <a href={`/dashboard/projects/${project.id}` className="btn-secondary">Cancel</a>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}