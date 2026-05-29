"use client";

import React from "react";
import { PublicNavbar } from "@/components/layout/public-navbar";
import { PublicFooter } from "@/components/layout/public-footer";
import {
  CheckCircle2,
  Circle,
  FileText,
  Upload,
  Calculator,
  FileCheck,
  AlertCircle,
  ChevronRight,
  Building2,
  Target,
  Eye,
  Lock,
  Paperclip,
  Download,
  ArrowRight,
  ShieldCheck,
} from "lucide-react";
import { cn } from "@/lib/utils";

const steps = [
  { label: "Basic Info", status: "complete" },
  { label: "Project Details", status: "complete" },
  { label: "Budget", status: "current" },
  { label: "Documents", status: "upcoming" },
  { label: "Review", status: "upcoming" },
];

const budgetRows = [
  { category: "Personnel", amount: 45000, note: "Project Manager, Field Officers (4), M&E Specialist" },
  { category: "Equipment", amount: 12000, note: "Laptops, medical supplies, vehicles" },
  { category: "Operations", amount: 23000, note: "Office rent, utilities, communications" },
  { category: "Travel", amount: 8000, note: "Field visits, stakeholder meetings, training" },
  { category: "Total", amount: 88000, isTotal: true },
];

const documents = [
  { name: "proposal.pdf", type: "Project Proposal", uploaded: true, size: "1.2 MB" },
  { name: "budget.xlsx", type: "Detailed Budget", uploaded: true, size: "340 KB" },
  { name: "org_registration.pdf", type: "Registration Certificate", uploaded: true, size: "620 KB" },
  { name: "board_resolution.docx", type: "Board Resolution", uploaded: false, size: "—" },
  { name: "audit_report.pdf", type: "Latest Audit Report", uploaded: false, size: "—" },
];

export default function ApplicationWorkspacePreview() {
  return (
    <>
      <PublicNavbar />
      <main className="bg-gray-50 min-h-screen">
        <section className="border-b border-gray-200 bg-white">
          <div className="max-w-7xl mx-auto px-6 py-16 lg:py-20">
            <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-4">
              <div>
                <div className="inline-flex items-center gap-2 rounded-full border border-brand-trust/20 bg-brand-trust/5 px-4 py-1.5 text-body-sm font-medium text-brand-trust mb-5">
                  <Eye size={14} /> Preview Mode
                </div>
                <h1 className="text-display-sm text-gray-900 font-heading tracking-tight">
                  Grant Application Workspace
                </h1>
                <p className="mt-3 text-body-lg text-gray-500 max-w-2xl">
                  A preview of the step-by-step application workflow. Reuse verified organisational data, build institutional memory, and never retype your registration number again.
                </p>
              </div>
              <div className="flex items-center gap-3 px-5 py-3 bg-emerald-50 border border-emerald-200 rounded-xl shrink-0">
                <ShieldCheck className="h-5 w-5 text-emerald-600" />
                <div>
                  <p className="text-body-xs text-emerald-700 font-medium uppercase tracking-wider">Application Readiness Score</p>
                  <p className="text-heading-xl font-bold text-emerald-700">87%</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <div className="max-w-7xl mx-auto px-6 py-10">
          {/* Progress Stepper */}
          <div className="bg-white rounded-xl border border-gray-200 p-6 shadow-card mb-8">
            <div className="flex items-center justify-between">
              {steps.map((step, i) => (
                <React.Fragment key={step.label}>
                  <div className="flex items-center gap-3">
                    <div
                      className={cn(
                        "flex items-center justify-center w-10 h-10 rounded-full shrink-0 transition-colors",
                        step.status === "complete"
                          ? "bg-emerald-100 text-emerald-600"
                          : step.status === "current"
                          ? "bg-brand-trust text-white shadow-md shadow-brand-trust/20"
                          : "bg-gray-100 text-gray-400"
                      )}
                    >
                      {step.status === "complete" ? (
                        <CheckCircle2 className="h-5 w-5" />
                      ) : step.status === "current" ? (
                        <Circle className="h-5 w-5 fill-white" />
                      ) : (
                        <Circle className="h-5 w-5" />
                      )}
                    </div>
                    <span
                      className={cn(
                        "text-body-sm font-medium hidden sm:inline",
                        step.status === "complete"
                          ? "text-emerald-700"
                          : step.status === "current"
                          ? "text-brand-trust font-semibold"
                          : "text-gray-400"
                      )}
                    >
                      {step.label}
                    </span>
                  </div>
                  {i < steps.length - 1 && (
                    <div
                      className={cn(
                        "flex-1 h-0.5 mx-4",
                        step.status === "complete" ? "bg-emerald-200" : "bg-gray-200"
                      )}
                    />
                  )}
                </React.Fragment>
              ))}
            </div>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {/* Main Application Panel */}
            <div className="lg:col-span-2 space-y-6">
              <div className="bg-white rounded-xl border border-gray-200 p-6 shadow-card">
                <div className="flex items-center gap-2 mb-5">
                  <Target className="h-4 w-4 text-brand-trust" />
                  <h2 className="text-heading-md font-semibold text-gray-900">Project Details</h2>
                </div>

                <div className="space-y-4">
                  <div>
                    <label className="block text-body-sm font-medium text-gray-700 mb-1.5">Organisation Name</label>
                    <input
                      type="text"
                      value="Community Health Initiative Uganda"
                      disabled
                      className="w-full px-3 py-2.5 text-body-sm border border-gray-200 rounded-lg bg-gray-50 text-gray-500 cursor-not-allowed"
                    />
                    <p className="text-body-xs text-gray-400 mt-1">Verified from organisation profile</p>
                  </div>

                  <div>
                    <label className="block text-body-sm font-medium text-gray-700 mb-1.5">Project Title</label>
                    <input
                      type="text"
                      defaultValue="Expanding Community Health Access in Northern Uganda"
                      className="w-full px-3 py-2.5 text-body-sm border border-brand-trust rounded-lg bg-white focus:outline-none focus:ring-2 focus:ring-brand-trust/20"
                    />
                  </div>

                  <div>
                    <label className="block text-body-sm font-medium text-gray-700 mb-1.5">Project Description</label>
                    <textarea
                      rows={4}
                      defaultValue="This project aims to expand access to primary healthcare services in four underserved districts of Northern Uganda. Through mobile clinics, community health worker training, and health education campaigns, we will reach an estimated 45,000 beneficiaries over 18 months."
                      className="w-full px-3 py-2.5 text-body-sm border border-gray-200 rounded-lg bg-white focus:outline-none focus:ring-2 focus:ring-brand-trust/20 focus:border-brand-trust resize-none"
                    />
                  </div>
                </div>
              </div>

              {/* Budget Section */}
              <div className="bg-white rounded-xl border border-gray-200 p-6 shadow-card">
                <div className="flex items-center gap-2 mb-5">
                  <Calculator className="h-4 w-4 text-brand-trust" />
                  <h2 className="text-heading-md font-semibold text-gray-900">Budget</h2>
                </div>

                <div className="overflow-x-auto">
                  <table className="w-full">
                    <thead>
                      <tr className="border-b border-gray-200">
                        <th className="text-left py-3 text-body-xs font-semibold text-gray-500 uppercase tracking-wider">Category</th>
                        <th className="text-right py-3 text-body-xs font-semibold text-gray-500 uppercase tracking-wider">Amount (USD)</th>
                        <th className="text-left py-3 text-body-xs font-semibold text-gray-500 uppercase tracking-wider hidden md:table-cell">Notes</th>
                      </tr>
                    </thead>
                    <tbody>
                      {budgetRows.map((row, i) => (
                        <tr
                          key={row.category}
                          className={cn(
                            "border-b border-gray-100",
                            row.isTotal && "bg-brand-trust/5"
                          )}
                        >
                          <td className={cn("py-3 text-body-sm", row.isTotal ? "font-bold text-brand-trust" : "text-gray-700")}>
                            {row.category}
                          </td>
                          <td className={cn("py-3 text-body-sm text-right font-mono", row.isTotal ? "font-bold text-brand-trust" : "text-gray-700")}>
                            ${row.amount.toLocaleString()}
                          </td>
                          <td className="py-3 text-body-sm text-gray-400 hidden md:table-cell">{row.note}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>

              {/* Documents */}
              <div className="bg-white rounded-xl border border-gray-200 p-6 shadow-card">
                <div className="flex items-center gap-2 mb-5">
                  <Paperclip className="h-4 w-4 text-brand-trust" />
                  <h2 className="text-heading-md font-semibold text-gray-900">Documents</h2>
                </div>

                <div className="space-y-3">
                  {documents.map((doc) => (
                    <div
                      key={doc.name}
                      className={cn(
                        "flex items-center justify-between p-4 rounded-lg border transition-colors",
                        doc.uploaded
                          ? "border-emerald-200 bg-emerald-50/50"
                          : "border-gray-200 bg-gray-50"
                      )}
                    >
                      <div className="flex items-center gap-3">
                        <div className={cn(
                          "p-2 rounded-lg",
                          doc.uploaded ? "bg-emerald-100" : "bg-gray-200"
                        )}>
                          {doc.uploaded ? (
                            <FileCheck className="h-4 w-4 text-emerald-600" />
                          ) : (
                            <Upload className="h-4 w-4 text-gray-400" />
                          )}
                        </div>
                        <div>
                          <p className={cn("text-body-sm font-medium", doc.uploaded ? "text-gray-900" : "text-gray-500")}>
                            {doc.name}
                          </p>
                          <p className="text-body-xs text-gray-400">
                            {doc.type} {doc.uploaded && `— ${doc.size}`}
                          </p>
                        </div>
                      </div>
                      <div className="flex items-center gap-2">
                        {doc.uploaded ? (
                          <>
                            <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full bg-emerald-100 text-emerald-700 text-body-xs font-medium">
                              <CheckCircle2 className="h-3 w-3" />
                              Uploaded
                            </span>
                          </>
                        ) : (
                          <button className="flex items-center gap-1 px-3 py-1.5 text-body-xs font-medium text-gray-500 border border-gray-300 rounded-lg hover:bg-gray-100 transition-colors">
                            <Upload className="h-3 w-3" />
                            Upload
                          </button>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="flex items-center justify-between">
                <button className="flex items-center gap-2 px-4 py-2.5 text-body-sm font-medium text-gray-600 border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors">
                  Save Draft
                </button>
                <button
                  disabled
                  className="flex items-center gap-2 px-6 py-2.5 text-body-sm font-medium bg-gray-300 text-gray-500 rounded-lg cursor-not-allowed"
                >
                  <Lock className="h-4 w-4" />
                  Submit Application
                </button>
              </div>
            </div>

            {/* Sidebar */}
            <aside className="space-y-6">
              <div className="bg-white rounded-xl border border-gray-200 p-6 shadow-card">
                <div className="flex items-center gap-2 mb-4">
                  <AlertCircle className="h-4 w-4 text-amber-500" />
                  <h3 className="text-body-sm font-semibold text-gray-700 uppercase tracking-wider">Checklist</h3>
                </div>
                <div className="space-y-3">
                  {[
                    { label: "Organisation profile verified", done: true },
                    { label: "Project description complete", done: true },
                    { label: "Budget breakdown submitted", done: true },
                    { label: "All required documents uploaded", done: false },
                    { label: "Narrative reviewed by team lead", done: false },
                    { label: "Final submission reviewed", done: false },
                  ].map((item) => (
                    <div key={item.label} className="flex items-start gap-2.5">
                      {item.done ? (
                        <CheckCircle2 className="h-4 w-4 text-emerald-500 mt-0.5 shrink-0" />
                      ) : (
                        <Circle className="h-4 w-4 text-gray-300 mt-0.5 shrink-0" />
                      )}
                      <span className={cn("text-body-sm", item.done ? "text-gray-400 line-through" : "text-gray-700")}>
                        {item.label}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="bg-white rounded-xl border border-gray-200 p-6 shadow-card">
                <div className="flex items-center gap-2 mb-4">
                  <Building2 className="h-4 w-4 text-brand-trust" />
                  <h3 className="text-body-sm font-semibold text-gray-700 uppercase tracking-wider">Organisation Profile</h3>
                </div>
                <div className="space-y-2 text-body-sm">
                  <p className="text-gray-900 font-medium">Community Health Initiative Uganda</p>
                  <p className="text-gray-500">Registered: 2012</p>
                  <p className="text-gray-500">HQ: Gulu, Uganda</p>
                  <p className="text-gray-500">Staff: 42</p>
                  <p className="text-gray-500">Active Grants: 7</p>
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
