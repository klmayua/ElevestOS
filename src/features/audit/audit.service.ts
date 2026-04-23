import { prisma } from "@/lib/db";

export interface AuditLogInput {
  userId?: string;
  action: string;
  entityType: string;
  entityId?: string;
  metadata?: any;
  ipAddress?: string;
  userAgent?: string;
}

export async function createAuditLog(data: AuditLogInput) {
  return prisma.auditLog.create({
    data: {
      userId: data.userId,
      action: data.action,
      entityType: data.entityType,
      entityId: data.entityId,
      metadata: data.metadata,
      ipAddress: data.ipAddress,
      userAgent: data.userAgent,
    },
  });
}

export async function getOrganisationAuditLogs(organisationId: string, options?: {
  action?: string;
  entityType?: string;
  limit?: number;
  page?: number;
}) {
  const { action, entityType, limit = 50, page = 1 } = options || {};

  const userIds = await prisma.user.findMany({
    where: { organisationId },
    select: { id: true },
  }).then(users => users.map(u => u.id));

  const where: any = {
    userId: { in: userIds },
  };

  if (action) where.action = action;
  if (entityType) where.entityType = entityType;

  return prisma.auditLog.findMany({
    where,
    orderBy: { createdAt: "desc" },
    take: limit,
    skip: (page - 1) * limit,
  });
}

export async function getEntityAuditHistory(entityType: string, entityId: string) {
  return prisma.auditLog.findMany({
    where: { entityType, entityId },
    orderBy: { createdAt: "desc" },
  });
}