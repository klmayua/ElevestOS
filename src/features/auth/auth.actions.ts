"use server";

import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import { registerUser, loginUser, getUserById, updateUserProfile, changePassword, verifyToken } from "./auth.service";
import { loginSchema, registerSchema, updateProfileSchema, changePasswordSchema } from "./schemas";
import { prisma } from "@/lib/db";

const TOKEN_COOKIE_NAME = "elevestos_token";

/**
 * Register a new user
 */
export async function registerAction(formData: FormData) {
  try {
    const data = registerSchema.parse({
      firstName: formData.get("firstName"),
      lastName: formData.get("lastName"),
      email: formData.get("email"),
      password: formData.get("password"),
      role: formData.get("role") || "USER",
    });

    const { user, token } = await registerUser(data);

    // Set cookie
    cookies().set(TOKEN_COOKIE_NAME, token, {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      sameSite: "lax",
      maxAge: 60 * 60 * 24 * 7, // 7 days
      path: "/",
    });

    redirect("/dashboard");
  } catch (error: any) {
    throw new Error(error.message);
  }
}

/**
 * Login a user
 */
export async function loginAction(formData: FormData) {
  try {
    const data = loginSchema.parse({
      email: formData.get("email"),
      password: formData.get("password"),
    });

    const { user, token } = await loginUser(data);

    // Set cookie
    cookies().set(TOKEN_COOKIE_NAME, token, {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      sameSite: "lax",
      maxAge: 60 * 60 * 24 * 7, // 7 days
      path: "/",
    });

    redirect("/dashboard");
  } catch (error: any) {
    throw new Error(error.message);
  }
}

/**
 * Logout user
 */
export async function logoutAction() {
  cookies().delete(TOKEN_COOKIE_NAME);
  redirect("/auth/login");
}

/**
 * Get current user from token
 */
export async function getCurrentUser() {
  const token = cookies().get(TOKEN_COOKIE_NAME)?.value;

  if (!token) {
    return null;
  }

  // Verify token using proper JWT verification
  try {
    const payload = verifyToken(token);
    if (!payload || !payload.userId) {
      return null;
    }
    const user = await getUserById(payload.userId);
    return user;
  } catch {
    return null;
  }
}

/**
 * Update profile action
 */
export async function updateProfileAction(formData: FormData) {
  try {
    const user = await getCurrentUser();
    if (!user) {
      throw new Error("Not authenticated");
    }

    const data = updateProfileSchema.parse({
      firstName: formData.get("firstName"),
      lastName: formData.get("lastName"),
      phone: formData.get("phone"),
    });

    await updateUserProfile(user.id, data);
  } catch (error: any) {
    throw new Error(error.message);
  }
}

/**
 * Change password action
 */
export async function changePasswordAction(formData: FormData) {
  try {
    const user = await getCurrentUser();
    if (!user) {
      throw new Error("Not authenticated");
    }

    const data = changePasswordSchema.parse({
      currentPassword: formData.get("currentPassword"),
      newPassword: formData.get("newPassword"),
    });

    await changePassword(user.id, data.currentPassword, data.newPassword);
  } catch (error: any) {
    throw new Error(error.message);
  }
}

/**
 * Protect a route - redirect to login if not authenticated
 */
export async function requireAuth() {
  const user = await getCurrentUser();
  if (!user) {
    redirect("/auth/login");
  }
  return user;
}

/**
 * Check if user has required role
 */
export async function requireRole(roles: string[]) {
  const user = await requireAuth();
  if (!roles.includes(user.role)) {
    throw new Error("Insufficient permissions");
  }
  return user;
}
