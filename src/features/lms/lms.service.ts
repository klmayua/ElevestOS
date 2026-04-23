import { prisma } from "@/lib/db";

export async function getLMSStats() {
  const totalCourses = await prisma.training.count();
  const completedCourses = 0; // Would need user progress
  const inProgressCourses = 0;

  return {
    totalCourses,
    completedCourses,
    inProgressCourses,
  };
}

export async function getAvailableCourses() {
  return prisma.training.findMany({
    where: { published: true },
    orderBy: { createdAt: "desc" },
    take: 10,
    select: {
      id: true,
      title: true,
      description: true,
      type: true,
      category: true,
      difficulty: true,
      duration: true,
      published: true,
    },
  });
}
