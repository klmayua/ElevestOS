import { prisma } from "@/lib/db";

export interface CreateStaffInput {
  email: string;
  firstName: string;
  lastName: string;
  phone?: string;
  role: string;
  organisationId: string;
}

export async function getOrganisationStaff(organisationId: string) {
  return prisma.user.findMany({
    where: { organisationId },
    orderBy: { createdAt: "desc" },
    select: {
      id: true,
      email: true,
      firstName: true,
      lastName: true,
      phone: true,
      role: true,
      avatarUrl: true,
      createdAt: true,
      updatedAt: true,
    },
  });
}

export async function getStaffMember(staffId: string, organisationId: string) {
  return prisma.user.findFirst({
    where: { id: staffId, organisationId },
  });
}

export async function inviteStaffMember(data: CreateStaffInput, inviterId: string) {
  const existing = await prisma.user.findUnique({
    where: { email: data.email },
  });

  if (existing) {
    if (existing.organisationId) {
      throw new Error("User already belongs to another organisation");
    }
    return prisma.user.update({
      where: { id: existing.id },
      data: {
        organisationId: data.organisationId,
        role: data.role as any,
      },
    });
  }

  const tempPassword = Math.random().toString(36).slice(-8);
  const bcrypt = require("bcryptjs");
  const passwordHash = await bcrypt.hash(tempPassword, 12);

  return prisma.user.create({
    data: {
      email: data.email,
      firstName: data.firstName,
      lastName: data.lastName,
      phone: data.phone,
      role: data.role as any,
      organisationId: data.organisationId,
      passwordHash,
    },
  });
}

export async function updateStaffRole(staffId: string, organisationId: string, role: string) {
  const staff = await prisma.user.findFirst({
    where: { id: staffId, organisationId },
  });

  if (!staff) {
    throw new Error("Staff member not found");
  }

  return prisma.user.update({
    where: { id: staffId },
    data: { role: role as any },
  });
}

export async function removeStaffMember(staffId: string, organisationId: string) {
  const staff = await prisma.user.findFirst({
    where: { id: staffId, organisationId },
  });

  if (!staff) {
    throw new Error("Staff member not found");
  }

  return prisma.user.update({
    where: { id: staffId },
    data: { organisationId: null },
  });
}