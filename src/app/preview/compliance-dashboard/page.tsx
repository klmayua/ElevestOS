"use client";

import React from "react";
import { PublicNavbar } from "@/components/layout/public-navbar";
import { PublicFooter } from "@/components/layout/public-footer";
import {
  Shield,
  ShieldCheck,
  ShieldAlert,
  ShieldOff,
  AlertTriangle,
  Clock,
  FileCheck,
  FileWarning,
  FileX,
  Calendar,
  Search,
  Eye,
  Download,
  ChevronRight,
  CheckCircle2,
  XCircle,
  MoreHorizontal,
  Building2,
  UserCheck,
  FileText,
} from "lucide-react";
import { cn } from "@/lib/utils";

const stats = [
  { label: "Pending Approvals", value: "2", icon: Clock, color: "text-amber-600", bg: "bg-amber-50" },
  { label: "Documents Expiring", value: "1", icon: FileWarning, color: "text-red-600", bg: "bg-red-50" },
  { label: "Audit-Ready Records", value: "47", icon: FileCheck, color: "text-emerald-600", bg: "bg-emerald-50" },
];

const auditLog = [
  { date: "2026-05-28 14:32", action: "Project Created", entity: "Community Health Access Expansion", user: "Grace Akello", status: "Complete" },
  { date: "2026-05-27 09:15", action: "Budget Approved", entity: "Equipment Procurement - $12,000", user: "David Okello", status: "Complete" },
  { date: "2026-05-26 16:45", action: "Report Submitted", entity: "Q1 2026 Progress Report", user: "Sarah Nabwire", status: "Pending Review" },
  { date: "2026-05-25 11:20", action: "Document Verified", entity: "Org Registration Certificate", user: "James Otieno", status: "Complete" },
  { date: "2026-05-24 15:08", action: "Milestone Completed", entity: "Community Training Phase 1", user: "Grace Akello", status: "Complete" },
];

const requiredDocs = [
  { name: "Organisation Registration Certificate", expiry: "2027-12-31", status: "valid" },
  { name: "Tax Compliance Certificate", expiry: "2026-08-15", status: "expiring" },
  { name: "Annual Audit Report 2025", expiry: "2026-12-31", status: "valid" },
  { name: "Board of Directors Resolution", expiry: "2026-06-01", status: "expired" },
  { name: "NGO Coordination Board Certificate", expiry: "2027-03-15", status: "valid" },
];

const upcomingAudits = [
  { project: "Community Health Access Expansion", scheduled: "2026-08-15", type: "Internal Audit", auditor: "External Firm - PwC" },
  { project: "Water Access & Sanitation Initiative", scheduled: "2026-09-01", type: "Funder Audit", auditor: "Global Health Foundation" },
];

export default function ComplianceDashboardPreview() {
  const docStatusStyles = {
    valid: { badge: "bg-emerald-100 text-emerald-700", icon: CheckCircle2, iconColor: "text-emerald-500" },
    expiring: { badge: "bg-amber-100 text-amber-700", icon: AlertTriangle, iconColor: "text-amber-500" },
    expired: { badge: "bg-red-100 text-red-700", icon: XCircle, iconColor: "text-red-500" },
  };

  const formatDate = (d: string) =>
    new Date(d).toLocaleDateString("en-US", { month: "short", day: "numeric", year: "numeric" });

  const daysUntil = (d: string) => {
    const diff = Math.ceil((new Date(d).getTime() - Date.now()) / (1000 * 60 * 60 * 24));
    if (diff < 0) return `${Math.abs(diff)} days ago`;
    return `${diff} days`;
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
              Compliance Dashboard
            </h1>
            <p className="mt-3 text-body-lg text-gray-500 max-w-2xl">
              A preview of compliance management that happens during normal work. Every action is logged, every document is tracked, and audit trails build themselves without extra effort.
            </p>
          </div>
        </section>

        <div className="max-w-7xl mx-auto px-6 py-10">
          {/* Compliance Score + Stats Row */}
          <div className="grid lg:grid-cols-4 gap-4 mb-10">
            {/* Compliance Score Ring */}
            <div className="lg:row-span-1 bg-white rounded-xl border border-gray-200 p-6 shadow-card flex flex-col items-center justify-center">
              <div className="relative w-36 h-36 mb-4">
                <svg className="w-full h-full -rotate-90" viewBox="0 0 120 120">
                  <circle cx="60" cy="60" r="52" fill="none" stroke="#E5E7EB" strokeWidth="8" />
                  <circle
                    cx="60" cy="60" r="52"
                    fill="none"
                    stroke="#10B981"
                    strokeWidth="8"
                    strokeLinecap="round"
                    strokeDasharray={`${(98 / 100) * 2 * Math.PI * 52} ${2 * Math.PI * 52}`}
                  />
                </svg>
                <div className="absolute inset-0 flex flex-col items-center justify-center">
                  <span className="text-heading-xl font-bold text-emerald-600">98%</span>
                  <span className="text-body-xs text-gray-400">Compliant</span>
                </div>
              </div>
              <p className="text-body-sm font-medium text-gray-700 text-center">Overall Compliance Rate</p>
              <p className="text-body-xs text-gray-400 mt-1 text-center">Across all active projects</p>
            </div>

            {stats.map((stat) => {
              const Icon = stat.icon;
              return (
                <div key={stat.label} className="bg-white rounded-xl border border-gray-200 p-6 shadow-card hover:shadow-elevated transition-shadow">
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-body-xs text-gray-500 font-medium uppercase tracking-wider">{stat.label}</span>
                    <div className={cn("p-2 rounded-lg", stat.bg)}>
                      <Icon className={cn("h-5 w-5", stat.color)} />
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
              {/* Audit Log */}
              <div className="bg-white rounded-xl border border-gray-200 shadow-card overflow-hidden">
                <div className="flex items-center justify-between p-6 pb-4">
                  <h2 className="text-heading-md font-semibold text-gray-900 flex items-center gap-2">
                    <Search className="h-5 w-5 text-brand-trust" />
                    Audit Log
                  </h2>
                  <button className="text-body-sm text-brand-trust hover:text-brand-trust/80 font-medium flex items-center gap-1 transition-colors">
                    View All <ChevronRight className="h-4 w-4" />
                  </button>
                </div>
                <div className="overflow-x-auto">
                  <table className="w-full">
                    <thead>
                      <tr className="border-t border-b border-gray-100 bg-gray-50/50">
                        <th className="text-left py-3 px-6 text-body-xs font-semibold text-gray-500 uppercase tracking-wider">Date</th>
                        <th className="text-left py-3 px-6 text-body-xs font-semibold text-gray-500 uppercase tracking-wider">Action</th>
                        <th className="text-left py-3 px-6 text-body-xs font-semibold text-gray-500 uppercase tracking-wider hidden md:table-cell">Entity</th>
                        <th className="text-left py-3 px-6 text-body-xs font-semibold text-gray-500 uppercase tracking-wider hidden lg:table-cell">User</th>
                        <th className="text-left py-3 px-6 text-body-xs font-semibold text-gray-500 uppercase tracking-wider">Status</th>
                      </tr>
                    </thead>
                    <tbody>
                      {auditLog.map((entry, i) => (
                        <tr key={i} className="border-b border-gray-50 hover:bg-gray-50/50 transition-colors">
                          <td className="py-3.5 px-6 text-body-sm text-gray-500 font-mono whitespace-nowrap">
                            {entry.date}
                          </td>
                          <td className="py-3.5 px-6 text-body-sm font-medium text-gray-900">{entry.action}</td>
                          <td className="py-3.5 px-6 text-body-sm text-gray-600 hidden md:table-cell max-w-[200px] truncate">{entry.entity}</td>
                          <td className="py-3.5 px-6 text-body-sm text-gray-500 hidden lg:table-cell">{entry.user}</td>
                          <td className="py-3.5 px-6">
                            <span className={cn(
                              "inline-flex items-center px-2 py-0.5 rounded-full text-body-xs font-medium border",
                              entry.status === "Complete" ? "bg-emerald-100 text-emerald-700 border-emerald-200" : "bg-amber-100 text-amber-700 border-amber-200"
                            )}>
                              {entry.status}
                            </span>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>

              {/* Required Documents */}
              <div className="bg-white rounded-xl border border-gray-200 p-6 shadow-card">
                <h2 className="text-heading-md font-semibold text-gray-900 flex items-center gap-2 mb-5">
                  <FileText className="h-5 w-5 text-brand-trust" />
                  Required Documents
                </h2>
                <div className="grid sm:grid-cols-2 gap-3">
                  {requiredDocs.map((doc, i) => {
                    const style = docStatusStyles[doc.status as keyof typeof docStatusStyles];
                    const Icon = style.icon;
                    return (
                      <div
                        key={i}
                        className={cn(
                          "flex items-start gap-3 p-4 rounded-lg border",
                          doc.status === "valid" ? "border-emerald-200 bg-emerald-50/50" :
                          doc.status === "expiring" ? "border-amber-200 bg-amber-50/50" :
                          "border-red-200 bg-red-50/50"
                        )}
                      >
                        <Icon className={cn("h-4 w-4 mt-0.5 shrink-0", style.iconColor)} />
                        <div className="min-w-0 flex-1">
                          <p className="text-body-sm font-medium text-gray-900 mb-1">{doc.name}</p>
                          <div className="flex items-center gap-2">
                            <span className="text-body-xs text-gray-500 flex items-center gap-1">
                              <Calendar className="h-3 w-3" />
                              Expires: {formatDate(doc.expiry)}
                            </span>
                          </div>
                        </div>
                        <span className={cn("inline-flex items-center px-2 py-0.5 rounded-full text-body-xs font-medium shrink-0", style.badge)}>
                          {doc.status === "valid" ? "Valid" : doc.status === "expiring" ? "Expiring" : "Expired"}
                        </span>
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
                  <Calendar className="h-4 w-4 text-brand-trust" />
                  <h3 className="text-body-sm font-semibold text-gray-700 uppercase tracking-wider">Upcoming Audits</h3>
                </div>
                <div className="space-y-3">
                  {upcomingAudits.map((audit, i) => (
                    <div key={i} className="p-4 rounded-lg border border-gray-200 bg-gray-50/50">
                      <p className="text-body-sm font-medium text-gray-900 mb-2">{audit.project}</p>
                      <div className="space-y-1.5">
                        <div className="flex items-center justify-between">
                          <span className="text-body-xs text-gray-500">Type</span>
                          <span className="text-body-xs font-medium text-gray-700">{audit.type}</span>
                        </div>
                        <div className="flex items-center justify-between">
                          <span className="text-body-xs text-gray-500">Scheduled</span>
                          <span className="text-body-xs font-mono text-gray-700">{formatDate(audit.scheduled)}</span>
                        </div>
                        <div className="flex items-center justify-between">
                          <span className="text-body-xs text-gray-500">Auditor</span>
                          <span className="text-body-xs text-gray-700">{audit.auditor}</span>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="bg-white rounded-xl border border-gray-200 p-6 shadow-card">
                <div className="flex items-center gap-2 mb-4">
                  <Shield className="h-4 w-4 text-brand-trust" />
                  <h3 className="text-body-sm font-semibold text-gray-700 uppercase tracking-wider">Compliance Health</h3>
                </div>
                <div className="space-y-3">
                  {[
                    { label: "Documentation", value: "100%", color: "bg-emerald-500" },
                    { label: "Reporting Timeliness", value: "95%", color: "bg-emerald-500" },
                    { label: "Audit Readiness", value: "98%", color: "bg-emerald-500" },
                    { label: "Financial Controls", value: "100%", color: "bg-emerald-500" },
                    { label: "Data Protection", value: "97%", color: "bg-brand-trust" },
                  ].map((item) => (
                    <div key={item.label} className="space-y-1">
                      <div className="flex justify-between text-body-xs">
                        <span className="text-gray-600">{item.label}</span>
                        <span className="font-mono font-medium text-gray-700">{item.value}</span>
                      </div>
                      <div className="w-full h-1.5 rounded-full bg-gray-100">
                        <div
                          className={cn("h-full rounded-full", item.color)}
                          style={{ width: item.value }}
                        />
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
