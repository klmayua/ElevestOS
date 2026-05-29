import { prisma } from "@/lib/db";

export interface TransactionInput {
  projectId: string;
  category: string;
  amount: number;
  description: string;
  type: "INCOME" | "EXPENSE";
  paymentMethod?: string;
  referenceNumber?: string;
}

export async function getProjectTransactions(projectId: string) {
  return prisma.transaction.findMany({
    where: { projectId },
    orderBy: { createdAt: "desc" },
  });
}

export async function getProjectFinancialSummary(projectId: string) {
  const transactions = await prisma.transaction.findMany({
    where: { projectId },
  });

  const totalIncome = transactions
    .filter(t => t.type === "INCOME")
    .reduce((sum: number, t) => sum + t.amount, 0);

  const totalExpense = transactions
    .filter(t => t.type === "EXPENSE")
    .reduce((sum: number, t) => sum + t.amount, 0);

  return {
    totalIncome,
    totalExpense,
    balance: totalIncome - totalExpense,
    transactionCount: transactions.length,
  };
}

export async function createTransaction(data: TransactionInput) {
  return prisma.transaction.create({
    data: {
      projectId: data.projectId,
      category: data.category,
      amount: data.amount,
      description: data.description,
      type: data.type,
      paymentMethod: data.paymentMethod,
      referenceNumber: data.referenceNumber,
    },
  });
}

export async function getOrganisationFinancials(organisationId: string) {
  const projects = await prisma.project.findMany({
    where: { organisationId },
    select: {
      id: true,
      title: true,
      budgetTotal: true,
      budgetSpent: true,
      currency: true,
    },
  });

  const totalBudget = projects.reduce((sum, p) => sum + p.budgetTotal, 0);
  const totalSpent = projects.reduce((sum, p) => sum + p.budgetSpent, 0);

  return {
    projects,
    totalBudget,
    totalSpent,
    totalAvailable: totalBudget - totalSpent,
    projectCount: projects.length,
  };
}