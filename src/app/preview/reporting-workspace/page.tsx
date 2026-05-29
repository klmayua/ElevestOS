"use client";

import React, { useState } from "react";
import { PublicNavbar } from "@/components/layout/public-navbar";
import { PublicFooter } from "@/components/layout/public-footer";
import {
  BarChart3,
  FileText,
  CheckCircle2,
  Clock,
  AlertCircle,
  Calendar,
  ChevronDown,
  Download,
  Eye,
  Sparkles,
  TrendingUp,
  FileCheck,
  Send,
  ArrowRight,
  Plus,
  Search,
  Filter,
} from "lucide-react";
import { cn } from "@/lib/utils";

const reportStatusCards = [
  { label: "Reports Due", value: "2", icon: AlertCircle, color: "text-amber-600", bg: "bg-amber-50", border: "border-amber-200" },
  { label: "In Review", value: "1", icon: Clock, color: "text-brand-trust", bg: "bg-brand-trust/10", border: "border-brand-trust/20" },
  { label: "Submitted", value: "8", icon: CheckCircle2, color: "text-emerald-600", bg: "bg-emerald-50", border: "border-emerald-200" },
];

const reports = [
  { name: "Q1 2026 Progress Report", project: "Community Health Access Expansion", period: "Jan - Mar 2026", status: "Approved", dueDate: "2026-04-15" },
  { name: "Q1 2026 Financial Report", project: "Community Health Access Expansion", period: "Jan - Mar 2026", status: "Approved", dueDate: "2026-04-15" },
  { name: "Q1 2026 Narrative Report", project: "Water Access & Sanitation Initiative", period: "Jan - Mar 2026", status: "Submitted", dueDate: "2026-04-15" },
  { name: "Q2 2026 Progress Report", project: "Digital Learning for Rural Schools", period: "Apr - Jun 2026", status: "Draft", dueDate: "2026-07-15" },
  { name: "Q2 2026 Financial Report", project: "Climate Resilience for Smallholders", period: "Apr - Jun 2026", status: "Draft", dueDate: "2026-07-15" },
];

const narrativePreview = `During this reporting period (January to March 2026), the Community Health Initiative Uganda continued to advance its mission of expanding access to primary healthcare across underserved regions of Northern Uganda.

Key Achievements:
- Reached 4,500 beneficiaries across 12 communities through mobile health clinics
- Trained 85 community health workers on maternal and child health protocols
- Distributed 2,300 insecticide-treated bed nets in malaria-endemic areas
- Established 4 new community health committees to ensure local ownership

The project is on track to meet its 18-month targets, with beneficiary reach at 89% of the period target and budget expenditure at 94% of the planned amount. The team has identified additional communities in Agago District for expansion in Q2.`;

export default function ReportingWorkspacePreview() {
  const [reportType, setReportType] = useState("Quarterly");

  const statusBadge = (status: string) => {
    const styles: Record<string, string> = {
      Approved: "bg-emerald-100 text-emerald-700 border-emerald-200",
      Submitted: "bg-brand-trust/10 text-brand-trust border-brand-trust/20",
      Draft: "bg-amber-100 text-amber-700 border-amber-200",
    };
    return cn("inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-body-xs font-medium border", styles[status] || "bg-gray-100 text-gray-600");
  };

  const statusIcon = (status: string) => {
    if (status === "Approved") return <CheckCircle2 className="h-3 w-3" />;
    if (status === "Submitted") return <Send className="h-3 w-3" />;
    return <Clock className="h-3 w-3" />;
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
              Reporting Workspace
            </h1>
            <p className="mt-3 text-body-lg text-gray-500 max-w-2xl">
              A preview of automated reporting that emerges from daily work. Reports write themselves as your team logs activities, updates milestones, and tracks spending.
            </p>
          </div>
        </section>

        <div className="max-w-7xl mx-auto px-6 py-10">
          {/* Report Status */}
          <div className="grid sm:grid-cols-3 gap-4 mb-10">
            {reportStatusCards.map((card) => {
              const Icon = card.icon;
              return (
                <div key={card.label} className={cn("bg-white rounded-xl border p-5 shadow-card hover:shadow-elevated transition-shadow", card.border)}>
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-body-xs text-gray-500 font-medium uppercase tracking-wider">{card.label}</span>
                    <div className={cn("p-2 rounded-lg", card.bg)}>
                      <Icon className={cn("h-5 w-5", card.color)} />
                    </div>
                  </div>
                  <p className={cn("text-heading-xl font-bold", card.color === "text-amber-600" ? "text-amber-600" : card.color)}>
                    {card.value}
                  </p>
                </div>
              );
            })}
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {/* Main Content */}
            <div className="lg:col-span-2 space-y-6">
              {/* Reports Table */}
              <div className="bg-white rounded-xl border border-gray-200 shadow-card overflow-hidden">
                <div className="flex items-center justify-between p-6 pb-4">
                  <h2 className="text-heading-md font-semibold text-gray-900 flex items-center gap-2">
                    <BarChart3 className="h-5 w-5 text-brand-trust" />
                    Reports
                  </h2>
                  <div className="flex items-center gap-2">
                    <div className="relative">
                      <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-400" />
                      <input
                        type="text"
                        placeholder="Search reports..."
                        className="pl-9 pr-3 py-1.5 text-body-sm border border-gray-200 rounded-lg bg-white placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-brand-trust/20"
                      />
                    </div>
                  </div>
                </div>
                <div className="overflow-x-auto">
                  <table className="w-full">
                    <thead>
                      <tr className="border-t border-b border-gray-100 bg-gray-50/50">
                        <th className="text-left py-3 px-6 text-body-xs font-semibold text-gray-500 uppercase tracking-wider">Report Name</th>
                        <th className="text-left py-3 px-6 text-body-xs font-semibold text-gray-500 uppercase tracking-wider">Project</th>
                        <th className="text-left py-3 px-6 text-body-xs font-semibold text-gray-500 uppercase tracking-wider hidden md:table-cell">Period</th>
                        <th className="text-left py-3 px-6 text-body-xs font-semibold text-gray-500 uppercase tracking-wider">Status</th>
                        <th className="text-left py-3 px-6 text-body-xs font-semibold text-gray-500 uppercase tracking-wider hidden lg:table-cell">Due Date</th>
                        <th className="text-right py-3 px-6 text-body-xs font-semibold text-gray-500 uppercase tracking-wider">Actions</th>
                      </tr>
                    </thead>
                    <tbody>
                      {reports.map((report, i) => (
                        <tr key={i} className="border-b border-gray-50 hover:bg-gray-50/50 transition-colors">
                          <td className="py-3.5 px-6 text-body-sm font-medium text-gray-900">{report.name}</td>
                          <td className="py-3.5 px-6 text-body-sm text-gray-600">{report.project}</td>
                          <td className="py-3.5 px-6 text-body-sm text-gray-500 hidden md:table-cell">{report.period}</td>
                          <td className="py-3.5 px-6">
                            <span className={statusBadge(report.status)}>
                              {statusIcon(report.status)}
                              {report.status}
                            </span>
                          </td>
                          <td className="py-3.5 px-6 text-body-sm text-gray-500 hidden lg:table-cell">
                            {new Date(report.dueDate).toLocaleDateString("en-US", { month: "short", day: "numeric", year: "numeric" })}
                          </td>
                          <td className="py-3.5 px-6 text-right">
                            <button className="inline-flex items-center gap-1 px-3 py-1.5 text-body-xs font-medium text-gray-600 hover:text-brand-trust hover:bg-brand-trust/5 rounded-lg transition-colors">
                              <Eye className="h-3.5 w-3.5" />
                              View
                            </button>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>

              {/* Generate Report Panel */}
              <div className="bg-white rounded-xl border border-gray-200 p-6 shadow-card">
                <div className="flex items-center gap-2 mb-5">
                  <Sparkles className="h-5 w-5 text-brand-trust" />
                  <h2 className="text-heading-md font-semibold text-gray-900">Generate New Report</h2>
                </div>

                <div className="grid sm:grid-cols-3 gap-4 mb-4">
                  <div>
                    <label className="block text-body-sm font-medium text-gray-700 mb-1.5">Report Type</label>
                    <div className="relative">
                      <select
                        value={reportType}
                        onChange={(e) => setReportType(e.target.value)}
                        className="w-full px-3 py-2.5 text-body-sm border border-gray-200 rounded-lg bg-white appearance-none focus:outline-none focus:ring-2 focus:ring-brand-trust/20 focus:border-brand-trust"
                      >
                        <option>Quarterly</option>
                        <option>Annual</option>
                        <option>Final</option>
                        <option>Narrative</option>
                        <option>Financial</option>
                      </select>
                      <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-400 pointer-events-none" />
                    </div>
                  </div>

                  <div>
                    <label className="block text-body-sm font-medium text-gray-700 mb-1.5">Project</label>
                    <div className="relative">
                      <select className="w-full px-3 py-2.5 text-body-sm border border-gray-200 rounded-lg bg-white appearance-none focus:outline-none focus:ring-2 focus:ring-brand-trust/20 focus:border-brand-trust">
                        <option>All Active Projects</option>
                        <option>Community Health Access Expansion</option>
                        <option>Digital Learning for Rural Schools</option>
                        <option>Climate Resilience for Smallholders</option>
                        <option>Water Access & Sanitation Initiative</option>
                      </select>
                      <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-400 pointer-events-none" />
                    </div>
                  </div>

                  <div>
                    <label className="block text-body-sm font-medium text-gray-700 mb-1.5">Date Range</label>
                    <div className="flex items-center gap-2 px-3 py-2.5 text-body-sm border border-gray-200 rounded-lg bg-white text-gray-700">
                      <Calendar className="h-4 w-4 text-gray-400 shrink-0" />
                      <span className="text-gray-500">Jan 1 - Mar 31, 2026</span>
                    </div>
                  </div>
                </div>

                <button className="flex items-center gap-2 px-5 py-2.5 text-body-sm font-medium bg-brand-trust text-white rounded-lg hover:bg-brand-trust/90 transition-colors">
                  <Sparkles className="h-4 w-4" />
                  Generate Report
                </button>
              </div>
            </div>

            {/* Narrative Summary Sidebar */}
            <aside className="space-y-6">
              <div className="bg-white rounded-xl border border-gray-200 p-6 shadow-card">
                <div className="flex items-center gap-2 mb-4">
                  <FileText className="h-4 w-4 text-brand-trust" />
                  <h3 className="text-body-sm font-semibold text-gray-700 uppercase tracking-wider">Narrative Summary</h3>
                </div>
                <div className="relative">
                  <div className="absolute -top-1 -right-1">
                    <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full bg-brand-trust/10 text-brand-trust text-body-xs font-medium">
                      <Sparkles className="h-3 w-3" /> Auto-generated
                    </span>
                  </div>
                  <div className="prose prose-sm max-w-none text-body-sm text-gray-600 leading-relaxed whitespace-pre-line mt-2">
                    {narrativePreview}
                  </div>
                </div>
                <div className="flex items-center gap-2 mt-4 pt-4 border-t border-gray-100">
                  <button className="flex items-center gap-1.5 px-3 py-1.5 text-body-xs font-medium text-brand-trust hover:bg-brand-trust/5 rounded-lg transition-colors">
                    <Download className="h-3.5 w-3.5" />
                    Download PDF
                  </button>
                  <button className="flex items-center gap-1.5 px-3 py-1.5 text-body-xs font-medium text-gray-600 hover:bg-gray-50 rounded-lg transition-colors">
                    <FileText className="h-3.5 w-3.5" />
                    Export DOCX
                  </button>
                </div>
              </div>

              <div className="bg-white rounded-xl border border-gray-200 p-6 shadow-card">
                <div className="flex items-center gap-2 mb-4">
                  <TrendingUp className="h-4 w-4 text-emerald-600" />
                  <h3 className="text-body-sm font-semibold text-gray-700 uppercase tracking-wider">Report Insights</h3>
                </div>
                <div className="space-y-3">
                  {[
                    { icon: CheckCircle2, color: "text-emerald-600", text: "100% of Q1 reports submitted on time" },
                    { icon: TrendingUp, color: "text-brand-trust", text: "Beneficiary reach 12% above target" },
                    { icon: Clock, color: "text-amber-600", text: "2 Q2 reports still in draft" },
                    { icon: FileCheck, color: "text-gray-600", text: "8 reports approved by funders" },
                  ].map((insight, i) => {
                    const Icon = insight.icon;
                    return (
                      <div key={i} className="flex items-start gap-2.5">
                        <Icon className={cn("h-4 w-4 mt-0.5 shrink-0", insight.color)} />
                        <span className="text-body-sm text-gray-700">{insight.text}</span>
                      </div>
                    );
                  })}
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
