"use server";

import { redirect } from "next/navigation";
import { createProject } from "@/features/projects/project.service";
import { getCurrentUser } from "@/features/auth/auth.actions";

export async function createProjectAction(formData: FormData) {
  try {
    const user = await getCurrentUser();
    if (!user || !user.organisationId) {
      throw new Error("Not authenticated or no organisation");
    }

    const data = {
      title: formData.get("title") as string,
      summary: formData.get("summary") as string,
      description: formData.get("description") as string,
      startDate: new Date(formData.get("startDate") as string),
      endDate: new Date(formData.get("endDate") as string),
      budgetTotal: parseInt(formData.get("budgetTotal") as string) || 0,
      currency: (formData.get("currency") as string) || "USD",
      beneficiaries: parseInt(formData.get("beneficiaries") as string) || undefined,
      beneficiariesUnit: formData.get("beneficiariesUnit") as string || undefined,
      countries: (formData.get("countries") as string)?.split(",").map((c) => c.trim()).filter(Boolean) || [],
      outcomes: (formData.get("outcomes") as string)?.split("\n").filter(Boolean) || [],
      organisationId: user.organisationId,
      leadId: user.id,
    };

    await createProject(data);

    return { success: true };
  } catch (error: any) {
    return { success: false, error: error.message };
  }
}

export async function updateProjectStatusAction(projectId: string, status: string) {
  try {
    await updateProjectStatus(projectId, status);
    return { success: true };
  } catch (error: any) {
    return { success: false, error: error.message };
  }
}

import { updateProjectStatus } from "@/features/projects/project.service";

export async function deleteProjectAction(projectId: string) {
  try {
    await deleteProject(projectId);
    return { success: true };
  } catch (error: any) {
    return { success: false, error: error.message };
  }
}

import { prisma } from "@/lib/db";

async function deleteProject(projectId: string) {
  return prisma.project.delete({
    where: { id: projectId },
  });
}