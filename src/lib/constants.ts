/**
 * Application-wide constants
 */

export const APP_NAME = "ElevestOS";
export const APP_DESCRIPTION = "The operating system for NGOs";

// Pagination
export const DEFAULT_PAGE_SIZE = 20;
export const MAX_PAGE_SIZE = 100;

// File uploads
export const MAX_FILE_SIZE = 10 * 1024 * 1024; // 10MB
export const ALLOWED_FILE_TYPES = [
  "application/pdf",
  "application/msword",
  "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
  "application/vnd.ms-excel",
  "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet",
  "image/jpeg",
  "image/png",
];

// Grant application statuses
export const APPLICATION_STATUSES = {
  DRAFT: { label: "Draft", color: "gray" },
  SUBMITTED: { label: "Submitted", color: "blue" },
  UNDER_REVIEW: { label: "Under Review", color: "yellow" },
  INTERVIEW: { label: "Interview", color: "purple" },
  FINAL_REVIEW: { label: "Final Review", color: "indigo" },
  APPROVED: { label: "Approved", color: "green" },
  REJECTED: { label: "Rejected", color: "red" },
  WITHDRAWN: { label: "Withdrawn", color: "gray" },
} as const;

// Project statuses
export const PROJECT_STATUSES = {
  PLANNING: { label: "Planning", color: "gray" },
  ACTIVE: { label: "Active", color: "green" },
  ON_HOLD: { label: "On Hold", color: "yellow" },
  COMPLETED: { label: "Completed", color: "blue" },
  CANCELLED: { label: "Cancelled", color: "red" },
} as const;

// Grant statuses
export const GRANT_STATUSES = {
  DRAFT: { label: "Draft", color: "gray" },
  PUBLISHED: { label: "Published", color: "green" },
  CLOSED: { label: "Closed", color: "blue" },
  CANCELLED: { label: "Cancelled", color: "red" },
} as const;

// NGO Sectors
export const NGO_SECTORS = [
  "Education",
  "Health",
  "Environment",
  "Human Rights",
  "Economic Development",
  "Humanitarian Aid",
  "Governance",
  "Technology",
  "Arts & Culture",
  "Animal Welfare",
  "Other",
] as const;

// Budget ranges
export const BUDGET_RANGES = [
  "0-100K",
  "100K-500K",
  "500K-1M",
  "1M-5M",
  "5M+",
] as const;

// Currencies
export const CURRENCIES = [
  { code: "USD", symbol: "$", name: "US Dollar" },
  { code: "EUR", symbol: "€", name: "Euro" },
  { code: "GBP", symbol: "£", name: "British Pound" },
  { code: "KES", symbol: "KSh", name: "Kenyan Shilling" },
  { code: "NGN", symbol: "₦", name: "Nigerian Naira" },
  { code: "ZAR", symbol: "R", name: "South African Rand" },
  { code: "GHS", symbol: "GH₵", name: "Ghanaian Cedi" },
] as const;

// Notification types
export const NOTIFICATION_TYPES = {
  GRANT_MATCH: { title: "New Grant Match", priority: "high" },
  APPLICATION_UPDATE: { title: "Application Update", priority: "high" },
  PROJECT_REMINDER: { title: "Project Reminder", priority: "medium" },
  DEADLINE_REMINDER: { title: "Deadline Reminder", priority: "high" },
  SYSTEM: { title: "System Notification", priority: "low" },
} as const;

// Dashboard date ranges
export const DATE_RANGES = {
  TODAY: "today",
  THIS_WEEK: "this_week",
  THIS_MONTH: "this_month",
  THIS_QUARTER: "this_quarter",
  THIS_YEAR: "this_year",
  CUSTOM: "custom",
} as const;
