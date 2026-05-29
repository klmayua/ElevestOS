import type { Metadata } from "next";
import Link from "next/link";
import {
  ArrowRight,
  Check,
  Shield,
  TrendingUp,
  BarChart3,
  FileText,
  Search,
  Users,
  Building2,
  Globe,
  Zap,
  Clock,
  HeartHandshake,
  GraduationCap,
  Briefcase,
  Target,
  Lock,
  LayoutDashboard,
  ChevronDown,
} from "lucide-react";
import { PublicNavbar } from "@/components/layout/public-navbar";
import { PublicFooter } from "@/components/layout/public-footer";

export const metadata: Metadata = {
  title: "ElevestOS — The Operating System for NGOs & Development Programs",
};

export default function Home() {
  return (
    <>
      <PublicNavbar />
      <main>
        {/* ================================================================
            1. HERO SECTION
            ================================================================ */}
        <section className="bg-gray-900 py-24 md:py-36">
          <div className="max-w-7xl mx-auto px-6">
            <div className="max-w-4xl">
              <p className="text-xs font-mono uppercase tracking-widest text-brand-trust mb-6">
                ELEVESTOS
              </p>
              <h1 className="text-display-lg md:text-display-xl lg:text-display-2xl font-bold text-white leading-tight">
                The Operating System for NGOs, Foundations &amp; Development
                Programs
              </h1>
              <p className="text-body-lg md:text-heading-lg text-gray-300 max-w-2xl mt-6">
                ElevestOS brings grants, projects, reporting, compliance,
                partnerships, institutional memory and operational workflows
                into a single operating environment.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 mt-10">
                <Link
                  href="/demo"
                  className="inline-flex items-center gap-2 bg-brand-trust text-white font-semibold px-6 py-3 rounded-md hover:bg-brand-trust/90 transition-colors text-body-md"
                >
                  Request Demo
                  <ArrowRight className="h-4 w-4" />
                </Link>
                <Link
                  href="/platform"
                  className="inline-flex items-center gap-2 border border-gray-500 text-gray-300 font-semibold px-6 py-3 rounded-md hover:border-white hover:text-white transition-colors text-body-md"
                >
                  Explore Platform
                </Link>
              </div>
            </div>

            {/* Mock Dashboard Preview */}
            <div className="max-w-5xl mx-auto mt-16">
              <div className="bg-gray-800 rounded-xl border border-gray-700 p-6 shadow-2xl">
                {/* Dashboard nav bar */}
                <div className="flex items-center justify-between pb-4 border-b border-gray-700 mb-6">
                  <div className="flex items-center gap-3">
                    <div className="flex gap-1.5">
                      <div className="w-2 h-2 rounded-full bg-gray-600" />
                      <div className="w-2 h-2 rounded-full bg-gray-600" />
                      <div className="w-2 h-2 rounded-full bg-gray-600" />
                    </div>
                    <span className="text-xs text-gray-500 ml-3 font-mono">
                      dashboard.elevestos.com
                    </span>
                  </div>
                  <div className="flex items-center gap-4">
                    <Search className="h-3.5 w-3.5 text-gray-500" />
                    <div className="w-5 h-5 rounded-full bg-brand-trust/20 border border-brand-trust/30" />
                  </div>
                </div>

                {/* Stats row */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
                  {[
                    { label: "Active Grants", value: "28", color: "bg-brand-trust/20 text-brand-trust border-brand-trust/30" },
                    { label: "Projects", value: "14", color: "bg-accent/20 text-accent border-accent/30" },
                    { label: "Compliance", value: "98%", color: "bg-success/20 text-success border-success/30" },
                    { label: "Funding Pipeline", value: "$4.2M", color: "bg-warning/20 text-warning border-warning/30" },
                  ].map((stat) => (
                    <div
                      key={stat.label}
                      className="bg-gray-800/50 border border-gray-700 rounded-lg p-4"
                    >
                      <p className="text-xs text-gray-500 mb-1 font-mono uppercase tracking-wider">
                        {stat.label}
                      </p>
                      <p className="text-heading-xl font-bold text-white">
                        {stat.value}
                      </p>
                    </div>
                  ))}
                </div>

                {/* Table-like row */}
                <div className="bg-gray-800/50 border border-gray-700 rounded-lg p-4 overflow-hidden">
                  <div className="flex items-center justify-between mb-3">
                    <p className="text-xs text-gray-500 font-mono uppercase tracking-wider">
                      Recent Applications
                    </p>
                    <ChevronDown className="h-3 w-3 text-gray-500" />
                  </div>
                  <div className="space-y-2">
                    {[
                      { grant: "Climate Resilience Fund", status: "Under Review", color: "bg-warning/20 text-warning" },
                      { grant: "Education Equity Initiative", status: "Submitted", color: "bg-brand-trust/20 text-brand-trust" },
                      { grant: "WASH Program Phase II", status: "Awarded", color: "bg-success/20 text-success" },
                    ].map((row, i) => (
                      <div
                        key={i}
                        className="flex items-center justify-between py-2 border-b border-gray-700/50 last:border-0"
                      >
                        <div className="flex items-center gap-3">
                          <div className="w-6 h-6 rounded bg-gray-700 flex items-center justify-center">
                            <FileText className="h-3 w-3 text-gray-400" />
                          </div>
                          <span className="text-sm text-gray-300">{row.grant}</span>
                        </div>
                        <span
                          className={`text-xs font-semibold px-2 py-0.5 rounded-full ${row.color}`}
                        >
                          {row.status}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Trusted by bar */}
            <div className="max-w-5xl mx-auto mt-12 pt-8 border-t border-gray-800 text-center">
              <p className="text-sm text-gray-500 mb-6">
                Trusted by NGOs across 12 countries
              </p>
              <div className="flex flex-wrap items-center justify-center gap-6">
                {Array.from({ length: 6 }).map((_, i) => (
                  <div
                    key={i}
                    className="w-16 h-10 rounded-md bg-gray-800 border border-gray-700 flex items-center justify-center"
                  >
                    <span className="text-xs text-gray-600 font-mono font-bold">
                      NGO
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* ================================================================
            2. PROBLEM SECTION
            ================================================================ */}
        <section className="bg-white py-24 md:py-32">
          <div className="max-w-7xl mx-auto px-6">
            <p className="text-xs font-semibold uppercase tracking-widest text-brand-trust mb-4">
              The Problem
            </p>
            <h2 className="text-display-md font-bold text-gray-900 max-w-3xl">
              Why NGO Operations Break Down
            </h2>
            <p className="text-body-lg text-gray-600 max-w-2xl mt-4">
              Funding failure is rarely about the quality of the mission. It is
              a downstream symptom of operational disorder — scattered tools,
              lost institutional knowledge, and misaligned processes that
              accumulate silently until they surface in a crisis.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-14">
              {[
                {
                  icon: Search,
                  title: "Grant Fragmentation",
                  desc: "NGOs hunt across scattered platforms, networks, and forwarded links, applying without knowing if they are a fit.",
                },
                {
                  icon: FileText,
                  title: "Reporting Complexity",
                  desc: "Each funder requires different formats. Reports are reconstructed after the fact under deadline pressure.",
                },
                {
                  icon: Shield,
                  title: "Compliance Burden",
                  desc: "Approvals, governance records, and financial decisions live in email threads and shared drives, creating audit anxiety.",
                },
                {
                  icon: Clock,
                  title: "Institutional Memory Loss",
                  desc: "When staff leave, processes, context, and hard-earned lessons disappear. Organisations reset with every turnover.",
                },
                {
                  icon: Users,
                  title: "Team Coordination Gaps",
                  desc: "Budgets in spreadsheets, governance in documents, approvals in email. Nothing speaks to anything else.",
                },
                {
                  icon: Building2,
                  title: "Funder Visibility Challenges",
                  desc: "Funders see fragments, never the whole picture. Due diligence is repeated endlessly without persistence.",
                },
              ].map((item) => (
                <div
                  key={item.title}
                  className="bg-white border border-gray-200 rounded-xl p-6 hover:border-gray-300 transition-colors"
                >
                  <div className="w-10 h-10 rounded-full bg-brand-trust/10 flex items-center justify-center mb-4">
                    <item.icon className="h-5 w-5 text-brand-trust" />
                  </div>
                  <h3 className="text-heading-md font-semibold text-gray-900 mb-2">
                    {item.title}
                  </h3>
                  <p className="text-body-sm text-gray-600">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ================================================================
            3. SOLUTION SECTION
            ================================================================ */}
        <section className="bg-white py-24 md:py-32 border-t border-gray-100">
          <div className="max-w-7xl mx-auto px-6">
            <p className="text-xs font-semibold uppercase tracking-widest text-brand-trust mb-4">
              The Solution
            </p>
            <h2 className="text-display-md font-bold text-gray-900 max-w-3xl">
              One Operational Backbone
            </h2>
            <p className="text-body-lg text-gray-600 max-w-3xl mt-4 leading-relaxed">
              ElevestOS consolidates operations into a structured operating
              environment that sits beneath your existing tools and above daily
              work. It does not replace your applications — it coordinates how
              work flows across them. Grants, projects, reporting, compliance,
              and institutional knowledge become a single, searchable,
              auditable substrate that compounds in value the longer you use it.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-14">
              {[
                {
                  icon: HeartHandshake,
                  title: "For NGOs",
                  desc: "Continuous funding preparation, reporting from daily work, compliance without panic, institutional memory preserved.",
                },
                {
                  icon: TrendingUp,
                  title: "For Funders",
                  desc: "Clear visibility into operations, comparable applications, reduced oversight costs, faster assessment.",
                },
                {
                  icon: Globe,
                  title: "Shared Ecosystem",
                  desc: "Two-way matching, partnership discovery, talent marketplace, capacity tracking. One shared backbone.",
                },
              ].map((item) => (
                <div key={item.title} className="text-center">
                  <div className="w-14 h-14 rounded-full bg-brand-trust/10 flex items-center justify-center mx-auto mb-5">
                    <item.icon className="h-7 w-7 text-brand-trust" />
                  </div>
                  <h3 className="text-heading-lg font-semibold text-gray-900 mb-3">
                    {item.title}
                  </h3>
                  <p className="text-body-md text-gray-600">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ================================================================
            4. ECOSYSTEM MAP
            ================================================================ */}
        <section className="bg-gray-50 py-24 md:py-32">
          <div className="max-w-7xl mx-auto px-6">
            <h2 className="text-display-md font-bold text-gray-900 text-center max-w-3xl mx-auto">
              The ElevestOS Ecosystem
            </h2>
            <p className="text-body-lg text-gray-600 text-center max-w-2xl mx-auto mt-4">
              A three-sided network connecting NGOs, funders, and development
              partners through a shared operational backbone that grows stronger
              with every user.
            </p>

            {/* Flow diagram */}
            <div className="flex flex-col lg:flex-row items-center justify-center gap-6 mt-14">
              <div className="bg-white border border-gray-200 rounded-xl px-8 py-6 text-center min-w-[200px]">
                <Building2 className="h-8 w-8 text-brand-trust mx-auto mb-3" />
                <p className="text-heading-md font-semibold text-gray-900">
                  NGOs
                </p>
                <p className="text-sm text-gray-500 mt-1">
                  Foundations &amp; Programs
                </p>
              </div>

              <div className="flex items-center text-gray-400 lg:flex-col">
                <ArrowRight className="h-5 w-5 rotate-0 lg:rotate-0 hidden lg:block" />
                <span className="text-2xl lg:text-sm mx-3 lg:mx-0 lg:my-1">
                  ↔
                </span>
              </div>

              <div className="bg-brand-trust rounded-xl px-8 py-6 text-center min-w-[200px] shadow-lg">
                <LayoutDashboard className="h-8 w-8 text-white mx-auto mb-3" />
                <p className="text-heading-md font-semibold text-white">
                  ElevestOS
                </p>
                <p className="text-sm text-white/70 mt-1">
                  Shared Operating Backbone
                </p>
              </div>

              <div className="flex items-center text-gray-400 lg:flex-col">
                <span className="text-2xl lg:text-sm mx-3 lg:mx-0 lg:my-1">
                  ↔
                </span>
              </div>

              <div className="bg-white border border-gray-200 rounded-xl px-8 py-6 text-center min-w-[200px]">
                <Globe className="h-8 w-8 text-brand-trust mx-auto mb-3" />
                <p className="text-heading-md font-semibold text-gray-900">
                  Funders &amp; Governments
                </p>
                <p className="text-sm text-gray-500 mt-1">
                  Foundations &amp; Agencies
                </p>
              </div>
            </div>

            {/* Module badges */}
            <div className="flex flex-wrap justify-center gap-3 mt-12">
              {[
                "Grants",
                "Projects",
                "Reporting",
                "Compliance",
                "Partnerships",
                "Training",
                "Talent",
              ].map((badge) => (
                <span
                  key={badge}
                  className="px-4 py-2 rounded-full bg-brand-trust/10 text-brand-trust text-sm font-semibold"
                >
                  {badge}
                </span>
              ))}
            </div>
          </div>
        </section>

        {/* ================================================================
            5. PLATFORM MODULES GRID
            ================================================================ */}
        <section className="bg-white py-24 md:py-32">
          <div className="max-w-7xl mx-auto px-6">
            <h2 className="text-display-md font-bold text-gray-900 text-center max-w-3xl mx-auto">
              Everything Your Organisation Needs
            </h2>
            <p className="text-body-lg text-gray-600 text-center max-w-2xl mx-auto mt-4">
              Ten integrated modules that cover the full lifecycle of
              development work — from funding discovery to impact evaluation.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-4 mt-14">
              {[
                { icon: Search, title: "Grant Discovery", desc: "AI-matched funding opportunities tailored to your mission and capacity." },
                { icon: FileText, title: "Application Workspace", desc: "Collaborative tools for building compelling, compliant applications." },
                { icon: Zap, title: "Project Execution", desc: "Track deliverables, milestones, budgets, and team assignments in one place." },
                { icon: BarChart3, title: "Reporting", desc: "Auto-generated reports from daily work. One click, any format, any funder." },
                { icon: Shield, title: "Compliance", desc: "Governance records, approvals, and audit trails built into every workflow." },
                { icon: GraduationCap, title: "Capacity Building", desc: "Training modules, certification tracking, and organisational development." },
                { icon: HeartHandshake, title: "Partnerships", desc: "Discover collaborators, manage MOUs, and track joint initiatives." },
                { icon: Users, title: "Talent Marketplace", desc: "Connect with skilled professionals across the development sector." },
                { icon: Building2, title: "Organisation Management", desc: "Staff directories, role-based access, and institutional settings." },
                { icon: Target, title: "Funder Monitoring", desc: "Live portfolio dashboards, risk alerts, and outcome tracking for funders." },
              ].map((module) => (
                <div
                  key={module.title}
                  className="group bg-white border border-gray-200 rounded-xl p-5 hover:border-brand-trust/40 hover:shadow-card transition-all"
                >
                  <div className="w-9 h-9 rounded-lg bg-brand-trust/10 flex items-center justify-center mb-3 group-hover:bg-brand-trust/15 transition-colors">
                    <module.icon className="h-4.5 w-4.5 text-brand-trust" />
                  </div>
                  <h3 className="text-heading-md font-semibold text-gray-900 mb-1.5">
                    {module.title}
                  </h3>
                  <p className="text-body-sm text-gray-500">{module.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ================================================================
            6. WORKFLOW VISUALIZATION
            ================================================================ */}
        <section className="bg-gray-900 py-24 md:py-32">
          <div className="max-w-7xl mx-auto px-6">
            <h2 className="text-display-md font-bold text-white text-center max-w-3xl mx-auto">
              How Work Flows on ElevestOS
            </h2>
            <p className="text-body-lg text-gray-300 text-center max-w-2xl mx-auto mt-4">
              Two parallel journeys, one shared backbone. Every interaction is
              recorded, searchable, and compounds into institutional value.
            </p>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 mt-14">
              {/* NGO Journey */}
              <div>
                <h3 className="text-heading-lg font-semibold text-white mb-6 flex items-center gap-2">
                  <Building2 className="h-5 w-5 text-brand-trust" />
                  NGO Journey
                </h3>
                <div className="space-y-3">
                  {[
                    { step: 1, title: "Discover Funding", desc: "AI-matched opportunities appear in your dashboard. No more hunting." },
                    { step: 2, title: "Apply", desc: "Pre-filled templates, collaborative editing, and compliance checks built in." },
                    { step: 3, title: "Execute", desc: "Projects, budgets, and tasks tracked against grant milestones automatically." },
                    { step: 4, title: "Report", desc: "Reports generated from daily work. One click, any funder format." },
                    { step: 5, title: "Scale", desc: "Institutional knowledge compounds. Each cycle makes the next one faster." },
                  ].map((item) => (
                    <div
                      key={item.step}
                      className="bg-gray-800 border border-gray-700 rounded-lg p-4 flex gap-4"
                    >
                      <div className="w-7 h-7 rounded-full bg-brand-trust flex items-center justify-center shrink-0 mt-0.5">
                        <span className="text-xs font-bold text-white">
                          {item.step}
                        </span>
                      </div>
                      <div>
                        <h4 className="text-sm font-semibold text-white">
                          {item.title}
                        </h4>
                        <p className="text-sm text-gray-400 mt-0.5">
                          {item.desc}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Funder Journey */}
              <div>
                <h3 className="text-heading-lg font-semibold text-white mb-6 flex items-center gap-2">
                  <Globe className="h-5 w-5 text-brand-trust" />
                  Funder Journey
                </h3>
                <div className="space-y-3">
                  {[
                    { step: 1, title: "Publish Opportunity", desc: "Create and distribute funding calls with structured, comparable formats." },
                    { step: 2, title: "Receive Applications", desc: "Standardised applications arrive pre-validated, ready for assessment." },
                    { step: 3, title: "Assess", desc: "Side-by-side comparison with scoring rubrics, team reviews, and audit trails." },
                    { step: 4, title: "Monitor", desc: "Live portfolio dashboards with milestone tracking, risk alerts, and financial oversight." },
                    { step: 5, title: "Evaluate", desc: "Impact metrics aggregated across grantees. Evidence-based portfolio decisions." },
                  ].map((item) => (
                    <div
                      key={item.step}
                      className="bg-gray-800 border border-gray-700 rounded-lg p-4 flex gap-4"
                    >
                      <div className="w-7 h-7 rounded-full bg-brand-trust flex items-center justify-center shrink-0 mt-0.5">
                        <span className="text-xs font-bold text-white">
                          {item.step}
                        </span>
                      </div>
                      <div>
                        <h4 className="text-sm font-semibold text-white">
                          {item.title}
                        </h4>
                        <p className="text-sm text-gray-400 mt-0.5">
                          {item.desc}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ================================================================
            7. PRICING PREVIEW
            ================================================================ */}
        <section className="bg-white py-24 md:py-32">
          <div className="max-w-7xl mx-auto px-6">
            <p className="text-xs font-semibold uppercase tracking-widest text-brand-trust text-center mb-4">
              Pricing
            </p>
            <h2 className="text-display-md font-bold text-gray-900 text-center max-w-3xl mx-auto">
              Built for Organisational Reality, Not Per-Seat Pricing
            </h2>
            <p className="text-body-lg text-gray-600 text-center max-w-2xl mx-auto mt-4">
              Pricing scales with your operational complexity, not the number of
              people on your team. Every plan includes the full platform.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-14 max-w-5xl mx-auto">
              {[
                {
                  name: "Foundation Stage",
                  desc: "For early-stage NGOs finding their footing",
                  price: "$149/mo",
                  features: [
                    "Full platform access",
                    "Grant discovery & matching",
                    "Application workspace",
                    "Basic reporting",
                    "Up to 5 active projects",
                    "Email support",
                  ],
                  recommended: false,
                },
                {
                  name: "Institutional Stage",
                  desc: "For established NGOs managing multiple grants",
                  price: "$399/mo",
                  features: [
                    "Everything in Foundation",
                    "Unlimited projects",
                    "Advanced reporting",
                    "Compliance automation",
                    "Capacity building modules",
                    "Partnership discovery",
                    "Priority support",
                  ],
                  recommended: true,
                },
                {
                  name: "Scale Stage",
                  desc: "For large organisations with complex operations",
                  price: "Custom",
                  features: [
                    "Everything in Institutional",
                    "Dedicated onboarding",
                    "Custom workflows",
                    "API access",
                    "SSO & advanced permissions",
                    "Dedicated account manager",
                    "SLA guarantees",
                  ],
                  recommended: false,
                },
              ].map((tier) => (
                <div
                  key={tier.name}
                  className={`relative rounded-xl border-2 p-8 ${
                    tier.recommended
                      ? "border-brand-trust bg-brand-trust/[0.02] shadow-elevated"
                      : "border-gray-200 bg-white"
                  }`}
                >
                  {tier.recommended && (
                    <span className="absolute -top-3 left-1/2 -translate-x-1/2 bg-brand-trust text-white text-xs font-semibold px-3 py-1 rounded-full">
                      RECOMMENDED
                    </span>
                  )}
                  <h3 className="text-heading-lg font-semibold text-gray-900">
                    {tier.name}
                  </h3>
                  <p className="text-sm text-gray-500 mt-1">{tier.desc}</p>
                  <p className="text-display-sm font-bold text-gray-900 mt-5 mb-6">
                    {tier.price}
                  </p>
                  <ul className="space-y-3 mb-8">
                    {tier.features.map((feat) => (
                      <li
                        key={feat}
                        className="flex items-start gap-2.5 text-sm text-gray-600"
                      >
                        <Check className="h-4 w-4 text-brand-trust shrink-0 mt-0.5" />
                        {feat}
                      </li>
                    ))}
                  </ul>
                  <Link
                    href="/pricing"
                    className={`block text-center py-2.5 rounded-md text-sm font-semibold transition-colors ${
                      tier.recommended
                        ? "bg-brand-trust text-white hover:bg-brand-trust/90"
                        : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                    }`}
                  >
                    Get Started
                  </Link>
                </div>
              ))}
            </div>

            <div className="text-center mt-10">
              <Link
                href="/pricing"
                className="inline-flex items-center gap-1.5 text-brand-trust hover:text-brand-trust/80 font-semibold text-body-md transition-colors"
              >
                View full pricing
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
            <p className="text-center text-sm text-gray-500 mt-6">
              All plans include a 14-day free trial. No credit card required.
            </p>
          </div>
        </section>

        {/* ================================================================
            8. TESTIMONIALS PREVIEW
            ================================================================ */}
        <section className="bg-gray-50 py-24 md:py-32">
          <div className="max-w-7xl mx-auto px-6">
            <div className="flex items-center gap-3 mb-4">
              <p className="text-xs font-semibold uppercase tracking-widest text-brand-trust">
                Testimonials
              </p>
              <span className="text-[10px] font-semibold uppercase tracking-wider bg-gray-200 text-gray-600 px-2 py-0.5 rounded-full">
                Preview
              </span>
            </div>
            <h2 className="text-display-md font-bold text-gray-900 max-w-3xl">
              Trusted by Organisations That Deliver Impact
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-14">
              {[
                {
                  quote:
                    "ElevestOS gave us the structure we didn't know we were missing. Our grant applications are stronger, and reporting no longer keeps me up at night.",
                  name: "Sarah M.",
                  role: "Executive Director",
                  org: "Hope Foundation Kenya",
                },
                {
                  quote:
                    "As a funder, I can finally see what's happening across our portfolio without chasing reports. The visibility is transformative.",
                  name: "James K.",
                  role: "Program Officer",
                  org: "African Development Trust",
                },
                {
                  quote:
                    "We stopped guessing which grants to apply for. The matching dashboard alone has saved us hundreds of hours.",
                  name: "Amara O.",
                  role: "Grants Manager",
                  org: "Women Empower Network",
                },
              ].map((t, i) => (
                <div
                  key={i}
                  className="bg-white border border-gray-200 rounded-xl p-6"
                >
                  <p className="text-body-md text-gray-700 italic leading-relaxed mb-6">
                    &ldquo;{t.quote}&rdquo;
                  </p>
                  <div className="border-t border-gray-100 pt-4">
                    <p className="text-sm font-semibold text-gray-900">
                      {t.name}
                    </p>
                    <p className="text-sm text-gray-500">
                      {t.role}, {t.org}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ================================================================
            9. FAQ ACCORDION
            ================================================================ */}
        <section className="bg-white py-24 md:py-32">
          <div className="max-w-3xl mx-auto px-6">
            <h2 className="text-display-md font-bold text-gray-900 text-center mb-14">
              Frequently Asked Questions
            </h2>
            <div className="space-y-3">
              {[
                {
                  q: "What is ElevestOS?",
                  a: "It is the operating system NGOs use to run their work — grants, projects, reporting, compliance — in one structured environment.",
                },
                {
                  q: "Who is ElevestOS for?",
                  a: "NGOs of all sizes, funders, foundations, government agencies, and multilateral institutions.",
                },
                {
                  q: "Is it only for NGOs?",
                  a: "No. Funders use it for oversight, discovery, and portfolio management. Governments use it for visibility and program coordination.",
                },
                {
                  q: "Can funders use it?",
                  a: "Yes. Funders get NGO discovery, live monitoring, portfolio overview, and audit workspaces.",
                },
                {
                  q: "How does onboarding work?",
                  a: "We onboard through practical workshops where you work on real tasks. You leave with an active account and your data already in the system.",
                },
                {
                  q: "What makes ElevestOS different?",
                  a: "It is not a tool — it is infrastructure. It sits beneath your existing tools and coordinates how work flows across them. It compounds value over time.",
                },
              ].map((faq, i) => (
                <details
                  key={i}
                  className="group border border-gray-200 rounded-lg"
                >
                  <summary className="flex items-center justify-between px-6 py-4 cursor-pointer list-none">
                    <span className="text-heading-md font-semibold text-gray-900">
                      {faq.q}
                    </span>
                    <ChevronDown className="h-4 w-4 text-gray-400 transition-transform duration-200 group-open:rotate-180 shrink-0 ml-4" />
                  </summary>
                  <div className="px-6 pb-5">
                    <p className="text-body-md text-gray-600">{faq.a}</p>
                  </div>
                </details>
              ))}
            </div>
          </div>
        </section>

        {/* ================================================================
            10. CLOSING CTA
            ================================================================ */}
        <section className="bg-gray-900 py-24 md:py-32">
          <div className="max-w-4xl mx-auto px-6 text-center">
            <h2 className="text-display-md md:text-display-lg font-bold text-white max-w-3xl mx-auto">
              Ready to Transform How Your Organisation Operates?
            </h2>
            <p className="text-body-lg text-gray-300 mt-6 max-w-xl mx-auto">
              Start your 14-day free trial. No credit card required.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center mt-10">
              <Link
                href="/demo"
                className="inline-flex items-center gap-2 bg-brand-trust text-white font-semibold px-6 py-3 rounded-md hover:bg-brand-trust/90 transition-colors text-body-md"
              >
                Request Demo
                <ArrowRight className="h-4 w-4" />
              </Link>
              <Link
                href="/platform"
                className="inline-flex items-center gap-2 border border-gray-500 text-gray-300 font-semibold px-6 py-3 rounded-md hover:border-white hover:text-white transition-colors text-body-md"
              >
                Explore Platform
              </Link>
            </div>
          </div>
        </section>
      </main>
      <PublicFooter />
    </>
  );
}
