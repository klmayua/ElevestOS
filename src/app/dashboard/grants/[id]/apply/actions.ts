"use server";

import { redirect } from "next/navigation";
import { createGrantApplication, submitGrantApplication } from "@/features/grants/grant.service";
import { getCurrentUser } from "@/features/auth/auth.actions";

export async function startGrantApplicationAction(grantId: string) {
  try {
    const user = await getCurrentUser();
    if (!user) {
      throw new Error("Not authenticated");
    }

    const application = await createGrantApplication(user.id, grantId);
    return { success: true, applicationId: application.id };
  } catch (error: any) {
    return { success: false, error: error.message };
  }
}

export async function submitGrantApplicationAction(applicationId: string) {
  try {
    const user = await getCurrentUser();
    if (!user) {
      throw new Error("Not authenticated");
    }

    const application = await submitGrantApplication(applicationId, user.id);
    return { success: true };
  } catch (error: any) {
    return { success: false, error: error.message };
  }
}

export async function saveApplicationDraftAction(
  applicationId: string,
  data: {
    proposalUrl?: string;
    budgetUrl?: string;
    supportingDocs?: string[];
  }
) {
  try {
    const user = await getCurrentUser();
    if (!user) {
      throw new Error("Not authenticated");
    }

    const { updateGrantApplication } = await import("@/features/grants/grant.service");
    await updateGrantApplication(applicationId, user.id, data);
    return { success: true };
  } catch (error: any) {
    return { success: false, error: error.message };
  }
}