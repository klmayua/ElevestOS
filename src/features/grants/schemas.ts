import { z } from "zod";

export const grantFiltersSchema = z.object({
  search: z.string().optional(),
  sector: z.string().optional(),
  country: z.string().optional(),
  minAmount: z.number().optional(),
  maxAmount: z.number().optional(),
  status: z.enum(["DRAFT", "PUBLISHED", "CLOSED", "CANCELLED"]).optional(),
  page: z.number().default(1),
  pageSize: z.number().default(20),
});

export const createGrantSchema = z.object({
  title: z.string().min(5, "Title must be at least 5 characters"),
  description: z.string().min(50, "Description must be at least 50 characters"),
  summary: z.string().min(20, "Summary must be at least 20 characters"),
  funderName: z.string().min(2),
  funderType: z.enum([
    "FOUNDATION",
    "GOVERNMENT",
    "CORPORATE",
    "INTERNATIONAL_NGO",
    "MULTILATERAL",
    "INDIVIDUAL",
  ]),
  amountMin: z.number().optional(),
  amountMax: z.number().optional(),
  currency: z.string().default("USD"),
  durationMin: z.number().optional(),
  durationMax: z.number().optional(),
  openDate: z.string(),
  deadline: z.string(),
  eligibleSectors: z.array(z.string()).default([]),
  eligibleCountries: z.array(z.string()).default([]),
  eligibleOrgTypes: z.array(z.string()).default([]),
  requirements: z.array(z.string()).default([]),
});

export const updateGrantSchema = createGrantSchema.partial();

export const submitApplicationSchema = z.object({
  grantId: z.string().uuid(),
  proposalUrl: z.string().url().optional(),
  budgetUrl: z.string().url().optional(),
  supportingDocs: z.array(z.string().url()).optional(),
});

export type GrantFilters = z.infer<typeof grantFiltersSchema>;
export type CreateGrantInput = z.infer<typeof createGrantSchema>;
export type UpdateGrantInput = z.infer<typeof updateGrantSchema>;
export type SubmitApplicationInput = z.infer<typeof submitApplicationSchema>;
