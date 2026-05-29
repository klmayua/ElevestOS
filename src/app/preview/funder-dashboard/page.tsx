"use client";

import React from "react";
import { PublicNavbar } from "@/components/layout/public-navbar";
import { PublicFooter } from "@/components/layout/public-footer";
import {
  Building2,
  Users,
  FolderKanban,
  Shield,
  AlertTriangle,
  Clock,
  ArrowUpRight,
  Eye,
  ChevronRight,
  TrendingUp,
  TrendingDown,
  CheckCircle2,
  FileText,
  Calendar,
  DollarSign,
  ExternalLink,
  MoreHorizontal,
  Bell,
  BarChart3,
  Target,
  Search,
} from "lucide-react";
import { cn } from "@/lib/utils";

const stats = [
  { label: "Active Portfolio", value: "$4.2M", icon: DollarSign, color: "text-brand-trust", bg: "bg-brand-trust/10" },
  { label: "NGOs Funded", value: "28", icon: Building2, color: "text-emerald-600", bg: "bg-emerald-50" },
  { label: "Projects Active", value: "41", icon: FolderKanban, color: "text-brand-operational", bg: "bg-teal-50" },
  { label: "Avg. Compliance", value: "94%", icon: Shield, color: "text-brand-governance", bg: "bg-amber-50" },
];

const portfolio = [
  { ngo: "Community Health Initiative Uganda", projects: 6, funding: "$1,280,000", compliance: 98, status: "On Track" },
  { ngo: "Education Forward Kenya", projects: 4, funding: "$850,000", compliance: 95, status: "On Track" },
  { ngo: "Climate Action Tanzania", projects: 5, funding: "$1,100,000", compliance: 92, status: "At Risk" },
  { ngo: "Water for All Ethiopia", projects: 3, funding: "$620,000", compliance: 89, status: "On Track" },
  { ngo: "Women's Empowerment Rwanda", projects: 4, funding: "$350,000", compliance: 97, status: "On Track" },
];

const fundingCalls = [
  { title: "Health Systems Strengthening 2026", applications: 47, qualified: 18, deadline: "2026-07-31", budget: "$2,000,000" },
  { title: "Digital Education Innovation Fund", applications: 32, qualified: 12, deadline: "2026-08-15", budget: "$1,500,000" },
  { title: "Climate Resilience Small Grants", applications: 89, qualified: 34, deadline: "2026-06-30", budget: "$500,000" },
];

const recentSubmissions = [
  { ngo: "Community Health Initiative Uganda", project: "Q1 2026 Progress Report", date: "2026-04-10", status: "Approved" },
  { ngo: "Education Forward Kenya", project: "Annual Financial Statement", date: "2026-04-08", status: "Under Review" },
  { ngo: "Climate Action Tanzania", project: "Mid-term Narrative Report", date: "2026-04-05", status: "Approved" },
  { ngo: "Water for All Ethiopia", project: "Equipment Procurement Request", date: "2026-04-03", status: "Pending" },
  { ngo: "Women's Empowerment Rwanda", project: "Q1 Beneficiary Report", date: "2026-04-01", status: "Approved" },
];

const alerts = [
  { project: "Water Access Initiative", type: "Project Delay Detected", detail: "Milestone missed by 14 days. Review required.", urgency: "high", icon: TrendingDown },
  { project: "Education for All", type: "Report Overdue", detail: "Q1 progress report is 12 days past deadline.", urgency: "high", icon: AlertTriangle },
  { project: "Health Outreach", type: "Budget Variance >15%", detail: "Actual spend ($48K) exceeds planned ($38K) by 26%.", urgency: "medium", icon: TrendingUp },
];

export default function FunderDashboardPreview() {
  const statusColor = (status: string) => {
    const map: Record<string, string> = {
      "On Track": "bg-emerald-100 text-emerald-700",
      "At Risk": "bg-amber-100 text-amber-700",
      Critical: "bg-red-100 text-red-700",
    };
    return map[status] || "bg-gray-100 text-gray-600";
  };

  const submissionStatusColor = (status: string) => {
    const map: Record<string, string> = {
      Approved: "bg-emerald-100 text-emerald-700 border-emerald-200",
      "Under Review": "bg-brand-trust/10 text-brand-trust border-brand-trust/20",
      Pending: "bg-amber-100 text-amber-700 border-amber-200",
    };
    return map[status] || "bg-gray-100 text-gray-600 border-gray-200";
  };

  const formatDate = (d: string) =>
    new Date(d).toLocaleDateString("en-US", { month: "short", day: "numeric", year: "numeric" });

  const complianceBar = (score: number) => {
    if (score >= 95) return "bg-emerald-500";
    if (score >= 90) return "bg-brand-trust";
    return "bg-amber-500";
  };

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
              Funder Oversight Dashboard
            </h1>
            <p className="mt-3 text-body-lg text-gray-500 max-w-2xl">
              A preview of what funders see inside ElevestOS. Monitor your entire portfolio, track compliance, review submissions, and discover aligned NGOs — all from one place.
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
            {/* Main Content */}
            <div className="lg:col-span-2 space-y-6">
              {/* Portfolio Overview */}
              <div className="bg-white rounded-xl border border-gray-200 shadow-card overflow-hidden">
                <div className="flex items-center justify-between p-6 pb-4">
                  <h2 className="text-heading-md font-semibold text-gray-900 flex items-center gap-2">
                    <BarChart3 className="h-5 w-5 text-brand-trust" />
                    Portfolio Overview
                  </h2>
                  <button className="text-body-sm text-brand-trust hover:text-brand-trust/80 font-medium flex items-center gap-1 transition-colors">
                    View All <ChevronRight className="h-4 w-4" />
                  </button>
                </div>
                <div className="overflow-x-auto">
                  <table className="w-full">
                    <thead>
                      <tr className="border-t border-b border-gray-100 bg-gray-50/50">
                        <th className="text-left py-3 px-6 text-body-xs font-semibold text-gray-500 uppercase tracking-wider">NGO</th>
                        <th className="text-center py-3 px-6 text-body-xs font-semibold text-gray-500 uppercase tracking-wider">Projects</th>
                        <th className="text-right py-3 px-6 text-body-xs font-semibold text-gray-500 uppercase tracking-wider">Total Funding</th>
                        <th className="text-center py-3 px-6 text-body-xs font-semibold text-gray-500 uppercase tracking-wider hidden md:table-cell">Compliance</th>
                        <th className="text-center py-3 px-6 text-body-xs font-semibold text-gray-500 uppercase tracking-wider">Status</th>
                      </tr>
                    </thead>
                    <tbody>
                      {portfolio.map((row, i) => (
                        <tr key={i} className="border-b border-gray-50 hover:bg-gray-50/50 transition-colors cursor-pointer">
                          <td className="py-3.5 px-6 text-body-sm font-medium text-gray-900">{row.ngo}</td>
                          <td className="py-3.5 px-6 text-body-sm text-gray-700 text-center font-mono">{row.projects}</td>
                          <td className="py-3.5 px-6 text-body-sm text-gray-700 text-right font-mono">{row.funding}</td>
                          <td className="py-3.5 px-6 hidden md:table-cell">
                            <div className="flex items-center justify-center gap-2">
                              <div className="w-16 h-1.5 rounded-full bg-gray-100 overflow-hidden">
                                <div className={cn("h-full rounded-full", complianceBar(row.compliance))} style={{ width: `${row.compliance}%` }} />
                              </div>
                              <span className="text-body-xs font-mono text-gray-600">{row.compliance}%</span>
                            </div>
                          </td>
                          <td className="py-3.5 px-6 text-center">
                            <span className={cn("inline-flex items-center px-2.5 py-0.5 rounded-full text-body-xs font-medium", statusColor(row.status))}>
                              {row.status}
                            </span>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>

              {/* Funding Call Performance */}
              <div>
                <h2 className="text-heading-md font-semibold text-gray-900 flex items-center gap-2 mb-4">
                  <Target className="h-5 w-5 text-brand-trust" />
                  Funding Call Performance
                </h2>
                <div className="grid sm:grid-cols-3 gap-4">
                  {fundingCalls.map((call, i) => (
                    <div key={i} className="bg-white rounded-xl border border-gray-200 p-5 hover:shadow-elevated hover:border-gray-300 transition-all">
                      <h3 className="text-body-sm font-semibold text-gray-900 mb-3 line-clamp-2 min-h-[2.5rem]">{call.title}</h3>
                      <div className="space-y-2.5 mb-4">
                        <div className="flex justify-between text-body-xs">
                          <span className="text-gray-500">Applications</span>
                          <span className="font-mono font-semibold text-gray-700">{call.applications}</span>
                        </div>
                        <div className="flex justify-between text-body-xs">
                          <span className="text-gray-500">Qualified</span>
                          <span className="font-mono font-semibold text-emerald-600">{call.qualified}</span>
                        </div>
                        <div className="flex justify-between text-body-xs">
                          <span className="text-gray-500">Budget</span>
                          <span className="font-mono font-semibold text-brand-trust">{call.budget}</span>
                        </div>
                        <div className="flex justify-between text-body-xs">
                          <span className="text-gray-500">Deadline</span>
                          <span className="font-mono text-gray-700">{formatDate(call.deadline)}</span>
                        </div>
                      </div>
                      <div className="w-full h-1.5 rounded-full bg-gray-100 mb-2 overflow-hidden">
                        <div className="h-full rounded-full bg-brand-trust" style={{ width: `${Math.round((call.qualified / call.applications) * 100)}%` }} />
                      </div>
                      <p className="text-body-xs text-gray-400">
                        {Math.round((call.qualified / call.applications) * 100)}% qualification rate
                      </p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Recent Submissions */}
              <div className="bg-white rounded-xl border border-gray-200 shadow-card overflow-hidden">
                <div className="flex items-center justify-between p-6 pb-4">
                  <h2 className="text-heading-md font-semibold text-gray-900 flex items-center gap-2">
                    <FileText className="h-5 w-5 text-brand-trust" />
                    Recent Submissions
                  </h2>
                </div>
                <div className="divide-y divide-gray-50">
                  {recentSubmissions.map((sub, i) => (
                    <div key={i} className="flex items-center justify-between px-6 py-3.5 hover:bg-gray-50/50 transition-colors cursor-pointer">
                      <div className="min-w-0 flex-1">
                        <p className="text-body-sm font-medium text-gray-900">{sub.ngo}</p>
                        <p className="text-body-xs text-gray-500 mt-0.5">{sub.project}</p>
                      </div>
                      <div className="flex items-center gap-4 shrink-0">
                        <span className="text-body-xs text-gray-400 font-mono">{formatDate(sub.date)}</span>
                        <span className={cn("inline-flex items-center px-2.5 py-0.5 rounded-full text-body-xs font-medium border", submissionStatusColor(sub.status))}>
                          {sub.status === "Approved" && <CheckCircle2 className="h-3 w-3 mr-1" />}
                          {sub.status === "Under Review" && <Clock className="h-3 w-3 mr-1" />}
                          {sub.status === "Pending" && <Clock className="h-3 w-3 mr-1" />}
                          {sub.status}
                        </span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Sidebar */}
            <aside className="space-y-6">
              <div className="bg-white rounded-xl border border-red-200 p-6 shadow-card">
                <div className="flex items-center gap-2 mb-4">
                  <Bell className="h-4 w-4 text-red-600" />
                  <h3 className="text-body-sm font-semibold text-gray-700 uppercase tracking-wider">Alerts</h3>
                  <span className="inline-flex items-center justify-center w-5 h-5 text-body-xs font-bold bg-red-100 text-red-600 rounded-full ml-auto">
                    {alerts.length}
                  </span>
                </div>
                <div className="space-y-3">
                  {alerts.map((alert, i) => {
                    const Icon = alert.icon;
                    return (
                      <div
                        key={i}
                        className={cn(
                          "p-4 rounded-lg border",
                          alert.urgency === "high" ? "border-red-200 bg-red-50/50" : "border-amber-200 bg-amber-50/50"
                        )}
                      >
                        <div className="flex items-start gap-2.5">
                          <Icon className={cn("h-4 w-4 mt-0.5 shrink-0", alert.urgency === "high" ? "text-red-600" : "text-amber-600")} />
                          <div>
                            <p className="text-body-sm font-semibold text-gray-900 mb-0.5">{alert.type}</p>
                            <p className="text-body-xs text-gray-600 mb-1">{alert.project}</p>
                            <p className="text-body-xs text-gray-500">{alert.detail}</p>
                          </div>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>

              <div className="bg-white rounded-xl border border-gray-200 p-6 shadow-card">
                <div className="flex items-center gap-2 mb-4">
                  <Calendar className="h-4 w-4 text-brand-trust" />
                  <h3 className="text-body-sm font-semibold text-gray-700 uppercase tracking-wider">Upcoming Deadlines</h3>
                </div>
                <div className="space-y-3">
                  {[
                    { label: "Health Systems Call Closes", date: "2026-07-31", days: 62 },
                    { label: "Q2 Reports Due from NGOs", date: "2026-07-15", days: 46 },
                    { label: "Annual Portfolio Review", date: "2026-08-01", days: 63 },
                    { label: "Board Meeting Materials", date: "2026-06-15", days: 16 },
                  ].map((item, i) => (
                    <div key={i} className="flex items-center justify-between py-2.5 border-b border-gray-50 last:border-0">
                      <div>
                        <p className="text-body-sm font-medium text-gray-700">{item.label}</p>
                        <p className="text-body-xs text-gray-400">{formatDate(item.date)}</p>
                      </div>
                      <span className={cn(
                        "text-body-xs font-mono px-2 py-0.5 rounded-full",
                        item.days <= 30 ? "bg-red-100 text-red-700" : "bg-gray-100 text-gray-600"
                      )}>
                        {item.days}d
                      </span>
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
