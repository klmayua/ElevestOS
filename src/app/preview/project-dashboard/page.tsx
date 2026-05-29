"use client";

import React from "react";
import { PublicNavbar } from "@/components/layout/public-navbar";
import { PublicFooter } from "@/components/layout/public-footer";
import {
  FolderKanban,
  Flag,
  PiggyBank,
  Users,
  Clock,
  Calendar,
  AlertTriangle,
  ChevronRight,
  TrendingUp,
  CheckCircle2,
  MoreHorizontal,
  ArrowUpRight,
  Eye,
  UserCircle2,
  DollarSign,
  FileText,
} from "lucide-react";
import { cn } from "@/lib/utils";

const stats = [
  { label: "Active Projects", value: "6", icon: FolderKanban, color: "text-brand-trust", bg: "bg-brand-trust/10" },
  { label: "Milestones Completed", value: "24", icon: Flag, color: "text-emerald-600", bg: "bg-emerald-50" },
  { label: "Budget Utilised", value: "62%", icon: PiggyBank, color: "text-brand-operational", bg: "bg-teal-50" },
  { label: "Beneficiaries", value: "12,450", icon: Users, color: "text-brand-governance", bg: "bg-amber-50" },
];

const projects = [
  {
    id: 1,
    title: "Community Health Access Expansion",
    status: "Active",
    progress: 68,
    budgetSpent: 52000,
    budgetTotal: 88000,
    startDate: "2026-01-15",
    endDate: "2027-07-15",
    teamLead: "Grace Akello",
    teamLeadInitials: "GA",
    statusColor: "bg-emerald-100 text-emerald-700",
  },
  {
    id: 2,
    title: "Digital Learning for Rural Schools",
    status: "Active",
    progress: 42,
    budgetSpent: 31000,
    budgetTotal: 75000,
    startDate: "2026-03-01",
    endDate: "2027-03-01",
    teamLead: "David Okello",
    teamLeadInitials: "DO",
    statusColor: "bg-emerald-100 text-emerald-700",
  },
  {
    id: 3,
    title: "Climate Resilience for Smallholders",
    status: "Planning",
    progress: 15,
    budgetSpent: 18000,
    budgetTotal: 200000,
    startDate: "2026-06-01",
    endDate: "2028-06-01",
    teamLead: "Sarah Nabwire",
    teamLeadInitials: "SN",
    statusColor: "bg-brand-trust/10 text-brand-trust",
  },
  {
    id: 4,
    title: "Water Access & Sanitation Initiative",
    status: "On Hold",
    progress: 78,
    budgetSpent: 142000,
    budgetTotal: 200000,
    startDate: "2025-09-01",
    endDate: "2027-03-01",
    teamLead: "James Otieno",
    teamLeadInitials: "JO",
    statusColor: "bg-amber-100 text-amber-700",
  },
];

const activities = [
  { text: "Milestone completed: Community Training Phase 1", time: "2 hours ago", project: "Community Health Access Expansion", icon: CheckCircle2, color: "text-emerald-600 bg-emerald-50" },
  { text: "Budget approved: $15,000 for equipment", time: "Yesterday", project: "Digital Learning for Rural Schools", icon: DollarSign, color: "text-brand-trust bg-brand-trust/10" },
  { text: "Field report submitted by Grace Akello", time: "2 days ago", project: "Community Health Access Expansion", icon: FileText, color: "text-gray-600 bg-gray-100" },
  { text: "Stakeholder meeting scheduled with district officials", time: "3 days ago", project: "Water Access & Sanitation Initiative", icon: Calendar, color: "text-gray-600 bg-gray-100" },
  { text: "Beneficiary data update: 1,200 new registrations", time: "4 days ago", project: "Climate Resilience for Smallholders", icon: Users, color: "text-gray-600 bg-gray-100" },
];

const deadlines = [
  { project: "Community Health Access Expansion", type: "Mid-term Report", due: "2026-06-30", urgency: "medium" },
  { project: "Digital Learning for Rural Schools", type: "Equipment Procurement", due: "2026-05-15", urgency: "high" },
  { project: "Water Access & Sanitation Initiative", type: "Annual Audit", due: "2026-08-01", urgency: "low" },
];

export default function ProjectDashboardPreview() {
  const progressColor = (pct: number) => {
    if (pct >= 70) return "bg-emerald-500";
    if (pct >= 40) return "bg-brand-trust";
    return "bg-amber-500";
  };

  const urgencyStyles = {
    high: "bg-red-100 text-red-700 border-red-200",
    medium: "bg-amber-100 text-amber-700 border-amber-200",
    low: "bg-gray-100 text-gray-600 border-gray-200",
  };

  const formatDate = (d: string) =>
    new Date(d).toLocaleDateString("en-US", { month: "short", day: "numeric", year: "numeric" });

  const formatCurrency = (n: number) =>
    n >= 1000000 ? `$${(n / 1000000).toFixed(1)}M` : `$${(n / 1000).toFixed(0)}K`;

  return (
    <>
      <PublicNavbar />
      <main className="bg-gray-50 min-h-screen">
        <section className="border-b border-gray-200 bg-white">
          <div className="max-w-7xl mx-auto px-6 py-16 lg:py-20">
            <div className="inline-flex items-center gap-2 rounded-full border border-brand-trust/20 bg-brand-trust/5 px-4 py-1.5 text-body-sm font-medium text-brand-trust mb-5">
              <Eye size={14} /> Preview Mode
            </div>
            <h1 className="text-display-sm text-gray-900 font-heading tracking-tight">
              Project Execution Dashboard
            </h1>
            <p className="mt-3 text-body-lg text-gray-500 max-w-2xl">
              A preview of day-to-day project management. Track activities, milestones, approvals, and spending across all active grants — all in real time.
            </p>
          </div>
        </section>

        <div className="max-w-7xl mx-auto px-6 py-10">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-10">
            {stats.map((stat) => {
              const Icon = stat.icon;
              return (
                <div key={stat.label} className="bg-white rounded-xl border border-gray-200 p-5 shadow-card hover:shadow-elevated transition-shadow">
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-body-xs text-gray-500 font-medium uppercase tracking-wider">{stat.label}</span>
                    <div className={cn("p-2 rounded-lg", stat.bg)}>
                      <Icon className={cn("h-4 w-4", stat.color)} />
                    </div>
                  </div>
                  <p className="text-heading-xl font-bold text-gray-900">{stat.value}</p>
                </div>
              );
            })}
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2 space-y-6">
              <h2 className="text-heading-lg font-semibold text-gray-900 flex items-center gap-2">
                <FolderKanban className="h-5 w-5 text-brand-trust" />
                Active Projects
              </h2>

              <div className="grid sm:grid-cols-2 gap-4">
                {projects.map((project) => (
                  <div key={project.id} className="bg-white rounded-xl border border-gray-200 p-5 hover:shadow-elevated hover:border-gray-300 transition-all">
                    <div className="flex items-start justify-between mb-3">
                      <div className="flex items-center gap-2.5">
                        <div className="w-9 h-9 rounded-lg bg-brand-trust/10 flex items-center justify-center shrink-0">
                          <span className="text-body-sm font-bold text-brand-trust">{project.teamLeadInitials}</span>
                        </div>
                        <span className="text-body-xs text-gray-500">{project.teamLead}</span>
                      </div>
                      <span className={cn("inline-flex items-center px-2 py-0.5 rounded-full text-body-xs font-semibold", project.statusColor)}>
                        {project.status}
                      </span>
                    </div>

                    <h3 className="text-heading-md font-semibold text-gray-900 mb-3 pr-2">
                      {project.title}
                    </h3>

                    <div className="mb-3">
                      <div className="flex justify-between text-body-xs text-gray-500 mb-1.5">
                        <span>Progress</span>
                        <span className="font-mono font-medium">{project.progress}%</span>
                      </div>
                      <div className="w-full h-2 rounded-full bg-gray-100 overflow-hidden">
                        <div
                          className={cn("h-full rounded-full transition-all", progressColor(project.progress))}
                          style={{ width: `${project.progress}%` }}
                        />
                      </div>
                    </div>

                    <div className="space-y-2 text-body-sm text-gray-500">
                      <div className="flex justify-between">
                        <span>Budget</span>
                        <span className="font-mono text-gray-700">
                          {formatCurrency(project.budgetSpent)} / {formatCurrency(project.budgetTotal)}
                        </span>
                      </div>
                      <div className="flex justify-between text-body-xs">
                        <span className="flex items-center gap-1">
                          <Calendar className="h-3 w-3" />
                          {formatDate(project.startDate)}
                        </span>
                        <span className="text-gray-400">—</span>
                        <span className="flex items-center gap-1">
                          <Calendar className="h-3 w-3" />
                          {formatDate(project.endDate)}
                        </span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Recent Activity */}
              <div className="bg-white rounded-xl border border-gray-200 p-6 shadow-card">
                <div className="flex items-center gap-2 mb-5">
                  <Clock className="h-4 w-4 text-brand-trust" />
                  <h2 className="text-heading-md font-semibold text-gray-900">Recent Activity</h2>
                </div>

                <div className="space-y-1">
                  {activities.map((activity, i) => {
                    const Icon = activity.icon;
                    return (
                      <div key={i} className="flex items-start gap-4 py-3">
                        <div className={cn("p-2 rounded-lg mt-0.5 shrink-0", activity.color.replace(/^text-\S+\s?/, ""))}>
                          <Icon className={cn("h-4 w-4", activity.color.match(/^text-\S+/)?.[0])} />
                        </div>
                        <div className="min-w-0 flex-1">
                          <p className="text-body-sm text-gray-700">{activity.text}</p>
                          <div className="flex items-center gap-2 mt-0.5">
                            <span className="text-body-xs text-gray-500">{activity.project}</span>
                            <span className="text-body-xs text-gray-300">•</span>
                            <span className="text-body-xs text-gray-400">{activity.time}</span>
                          </div>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>

            {/* Sidebar */}
            <aside className="space-y-6">
              <div className="bg-white rounded-xl border border-gray-200 p-6 shadow-card">
                <div className="flex items-center gap-2 mb-4">
                  <AlertTriangle className="h-4 w-4 text-amber-500" />
                  <h3 className="text-body-sm font-semibold text-gray-700 uppercase tracking-wider">Upcoming Deadlines</h3>
                </div>
                <div className="space-y-3">
                  {deadlines.map((d, i) => (
                    <div
                      key={i}
                      className={cn(
                        "p-4 rounded-lg border",
                        d.urgency === "high" ? "border-red-200 bg-red-50/50" : d.urgency === "medium" ? "border-amber-200 bg-amber-50/50" : "border-gray-200 bg-gray-50"
                      )}
                    >
                      <p className="text-body-sm font-medium text-gray-900 mb-1">{d.project}</p>
                      <div className="flex items-center justify-between">
                        <span
                          className={cn(
                            "inline-flex items-center px-2 py-0.5 rounded-full text-body-xs font-medium",
                            d.urgency === "high" ? "bg-red-100 text-red-700" : d.urgency === "medium" ? "bg-amber-100 text-amber-700" : "bg-gray-100 text-gray-600"
                          )}
                        >
                          {d.type}
                        </span>
                        <span className="text-body-xs text-gray-500 font-mono">{formatDate(d.due)}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="bg-white rounded-xl border border-gray-200 p-6 shadow-card">
                <div className="flex items-center gap-2 mb-4">
                  <TrendingUp className="h-4 w-4 text-brand-trust" />
                  <h3 className="text-body-sm font-semibold text-gray-700 uppercase tracking-wider">Team Overview</h3>
                </div>
                <div className="space-y-3">
                  {[
                    { name: "Grace Akello", role: "Project Manager", initials: "GA" },
                    { name: "David Okello", role: "Field Coordinator", initials: "DO" },
                    { name: "Sarah Nabwire", role: "M&E Officer", initials: "SN" },
                    { name: "James Otieno", role: "Finance Officer", initials: "JO" },
                    { name: "Mary Achieng", role: "Community Liaison", initials: "MA" },
                  ].map((person) => (
                    <div key={person.initials} className="flex items-center gap-3">
                      <div className="w-8 h-8 rounded-full bg-gray-100 flex items-center justify-center shrink-0">
                        <span className="text-body-xs font-bold text-gray-600">{person.initials}</span>
                      </div>
                      <div>
                        <p className="text-body-sm font-medium text-gray-700">{person.name}</p>
                        <p className="text-body-xs text-gray-400">{person.role}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </aside>
          </div>
        </div>
      </main>
      <PublicFooter />
    </>
  );
}
