import type { Metadata } from "next";
import Link from "next/link";
import {
  ArrowRight,
  Check,
  Shield,
  TrendingUp,
  FileText,
  Search,
  Users,
  Building2,
  Globe,
  Clock,
  HeartHandshake,
  GraduationCap,
  BookOpen,
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
            HERO
            ================================================================ */}
        <section className="bg-gray-900 py-24 md:py-32">
          <div className="max-w-7xl mx-auto px-6">
            <div className="max-w-4xl">
              <p className="text-xs font-mono uppercase tracking-[0.2em] text-brand-trust mb-6">
                THE NGO OPERATING CRISIS
              </p>
              <h1 className="text-display-lg md:text-display-xl lg:text-display-2xl font-bold text-white leading-[1.08] tracking-tight">
                Great Missions Fail Every Day.
                <br />
                <span className="text-gray-400">
                  Not Because They Lack Impact.
                </span>
                <br />
                <span className="text-gray-500">
                  Because Operations Break First.
                </span>
              </h1>
              <p className="text-body-lg text-gray-300 max-w-2xl mt-8 leading-relaxed">
                Funding opportunities are missed. Reports are rebuilt from
                scratch. Institutional knowledge disappears with staff turnover.
                Compliance becomes reactive. Teams operate across spreadsheets,
                emails, drives and disconnected tools.
              </p>
              <p className="text-body-md text-gray-400 max-w-2xl mt-4">
                ElevestOS brings funding, projects, reporting, compliance,
                partnerships and organisational memory into a single operational
                environment.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 mt-10">
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 bg-brand-trust text-white font-semibold px-6 py-3 rounded-md hover:bg-brand-trust/90 transition-colors text-body-md"
                >
                  Request Institutional Demo
                  <ArrowRight className="h-4 w-4" />
                </Link>
                <Link
                  href="/platform"
                  className="inline-flex items-center gap-2 border border-gray-500 text-gray-300 font-semibold px-6 py-3 rounded-md hover:border-white hover:text-white transition-colors text-body-md"
                >
                  Explore The Platform
                </Link>
              </div>
            </div>

            {/* Operational Dashboard Preview */}
            <div className="max-w-5xl mx-auto mt-20">
              <div className="bg-gray-800/80 rounded-xl border border-gray-700/60 p-6">
                {/* Top bar */}
                <div className="flex items-center justify-between pb-4 border-b border-gray-700/50 mb-5">
                  <span className="text-[11px] text-gray-500 font-mono uppercase tracking-wider">
                    OPERATIONAL OVERVIEW
                  </span>
                  <div className="flex items-center gap-2">
                    <span className="text-[10px] text-gray-600 font-mono uppercase tracking-wider">
                      elevestos
                    </span>
                    <div className="w-5 h-5 rounded-full bg-brand-trust/20 border border-brand-trust/30" />
                  </div>
                </div>

                {/* Key metrics */}
                <div className="grid grid-cols-3 md:grid-cols-6 gap-3 mb-5">
                  {[
                    { label: "Pipeline", value: "$12.8M", color: "text-white" },
                    { label: "Opportunities", value: "142", color: "text-brand-trust" },
                    { label: "Reporting Due", value: "8", color: "text-warning" },
                    { label: "Compliance", value: "97%", color: "text-success" },
                    { label: "Deadlines", value: "14", color: "text-gray-400" },
                    { label: "Partners", value: "23", color: "text-accent" },
                  ].map((m) => (
                    <div key={m.label} className="bg-gray-800 rounded-lg border border-gray-700/50 p-3">
                      <p className="text-[10px] text-gray-500 font-mono uppercase tracking-wider mb-1">
                        {m.label}
                      </p>
                      <p className={`text-base font-bold font-mono ${m.color}`}>
                        {m.value}
                      </p>
                    </div>
                  ))}
                </div>

                {/* Activity feed */}
                <div className="bg-gray-800 rounded-lg border border-gray-700/50 p-4">
                  <p className="text-[10px] text-gray-500 font-mono uppercase tracking-wider mb-3">
                    RECENT PROGRAMME ACTIVITY
                  </p>
                  <div className="space-y-2">
                    {[
                      { action: "Grant application submitted", programme: "Climate Resilience Fund", status: "Under Review", color: "text-warning" },
                      { action: "Milestone completed", programme: "Education Equity Initiative", status: "On Track", color: "text-brand-trust" },
                      { action: "Compliance report approved", programme: "WASH Programme Phase II", status: "Approved", color: "text-success" },
                    ].map((row, i) => (
                      <div key={i} className="flex items-center justify-between py-1.5 border-b border-gray-700/30 last:border-0">
                        <div className="flex items-center gap-3 min-w-0">
                          <FileText className="h-3 w-3 text-gray-500 shrink-0" />
                          <span className="text-[12px] text-gray-300 truncate">{row.action}</span>
                          <span className="text-[11px] text-gray-600 truncate hidden sm:inline">
                            &mdash; {row.programme}
                          </span>
                        </div>
                        <span className={`text-[10px] font-semibold font-mono uppercase tracking-wider shrink-0 ml-3 ${row.color}`}>
                          {row.status}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Trust bar */}
            <div className="max-w-5xl mx-auto mt-14 pt-10 border-t border-gray-800">
              <p className="text-[11px] text-gray-500 font-mono uppercase tracking-[0.15em] text-center mb-8">
                Built For Organisations Managing Real Programmes, Real Funding and Real Accountability
              </p>
              <div className="flex flex-wrap items-center justify-center gap-x-8 gap-y-4">
                {["NGOs", "Foundations", "Development Programmes", "Capacity Building Organisations", "Grant Managers", "Portfolio Managers"].map(
                  (label) => (
                    <span key={label} className="text-sm text-gray-400 font-medium">
                      {label}
                    </span>
                  )
                )}
              </div>
            </div>
          </div>
        </section>

        {/* ================================================================
            SECTION 01: OPERATIONAL FAILURE
            ================================================================ */}
        <section className="bg-white py-24 md:py-32">
          <div className="max-w-7xl mx-auto px-6">
            <p className="text-xs font-mono uppercase tracking-[0.2em] text-brand-trust mb-4">
              THE REAL PROBLEM
            </p>
            <h2 className="text-display-md font-bold text-gray-900 max-w-4xl leading-tight">
              Funding Failure Is Usually A Symptom.
              <br />
              <span className="text-gray-500">Not The Cause.</span>
            </h2>
            <p className="text-body-lg text-gray-600 max-w-3xl mt-6 leading-relaxed">
              Most NGOs do not struggle because their missions lack value.
              They struggle because critical operational processes become
              fragmented over time. Opportunities live in one place. Reports
              live somewhere else. Compliance records live somewhere else.
              Decisions live in email chains. Knowledge disappears when staff
              leave. Eventually the organisation becomes slower, less visible
              and harder to fund.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mt-14">
              {[
                {
                  icon: Search,
                  title: "Grant Fragmentation",
                  desc: "Teams search dozens of websites, networks and forwarded links without a reliable way to identify opportunities that actually fit.",
                },
                {
                  icon: FileText,
                  title: "Reporting Pressure",
                  desc: "Reports are recreated under deadline pressure because information was never structured properly from the start.",
                },
                {
                  icon: Shield,
                  title: "Compliance Risk",
                  desc: "Approvals, supporting documents and governance records become scattered across systems. Audits become disruptive.",
                },
                {
                  icon: Clock,
                  title: "Institutional Memory Loss",
                  desc: "When key staff leave, organisational knowledge leaves with them. Processes, context and hard-earned lessons disappear.",
                },
                {
                  icon: Users,
                  title: "Team Coordination Breakdown",
                  desc: "Critical activities become dependent on individuals rather than systems. Handovers introduce risk and delay.",
                },
                {
                  icon: Building2,
                  title: "Funder Visibility Challenges",
                  desc: "Funders often struggle to understand what is happening across portfolios until issues become visible too late.",
                },
              ].map((item) => (
                <div
                  key={item.title}
                  className="bg-gray-50 border border-gray-100 rounded-lg p-6"
                >
                  <div className="w-9 h-9 rounded-md bg-brand-trust/10 flex items-center justify-center mb-4">
                    <item.icon className="h-4.5 w-4.5 text-brand-trust" />
                  </div>
                  <h3 className="text-heading-md font-semibold text-gray-900 mb-2">
                    {item.title}
                  </h3>
                  <p className="text-body-sm text-gray-600 leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ================================================================
            SECTION 02: WHY THIS PERSISTS
            ================================================================ */}
        <section className="bg-gray-50 py-24 md:py-32 border-t border-gray-100">
          <div className="max-w-7xl mx-auto px-6">
            <p className="text-xs font-mono uppercase tracking-[0.2em] text-brand-trust mb-4">
              WHY THIS PERSISTS
            </p>
            <h2 className="text-display-md font-bold text-gray-900 max-w-3xl leading-tight">
              More Tools Usually Create More Complexity.
            </h2>
            <p className="text-body-lg text-gray-600 max-w-3xl mt-6 leading-relaxed">
              NGOs rarely suffer from a lack of software. They suffer from
              software fragmentation. One tool manages projects. Another
              stores documents. Another tracks finances. Another handles
              reporting. The work becomes disconnected. Every reporting cycle
              requires reconstruction. Every audit becomes a scramble. Every
              new staff member starts from uncertainty.
            </p>

            {/* Fragment visualization */}
            <div className="mt-14 grid grid-cols-2 md:grid-cols-4 gap-4">
              {[
                { label: "Projects", tool: "Spreadsheets" },
                { label: "Documents", tool: "Shared Drives" },
                { label: "Finances", tool: "Accounting Software" },
                { label: "Reporting", tool: "Manual Reconstruction" },
                { label: "Approvals", tool: "Email Chains" },
                { label: "Applications", tool: "Word Processors" },
                { label: "Partners", tool: "Informal Networks" },
                { label: "Memory", tool: "Individual Staff" },
              ].map((item) => (
                <div
                  key={item.label}
                  className="bg-white border border-gray-200 rounded-lg p-4 text-center"
                >
                  <p className="text-[11px] font-mono uppercase tracking-wider text-gray-400 mb-1">
                    {item.label}
                  </p>
                  <p className="text-sm font-semibold text-gray-700">
                    {item.tool}
                  </p>
                </div>
              ))}
            </div>

            <p className="text-body-md text-gray-500 text-center mt-8 max-w-2xl mx-auto leading-relaxed">
              Each tool works. Together, they create the fragmentation that
              makes operations fragile, reporting stressful and funding harder
              to sustain.
            </p>
          </div>
        </section>

        {/* ================================================================
            SECTION 03: THE OPERATING MODEL
            ================================================================ */}
        <section className="bg-white py-24 md:py-32">
          <div className="max-w-7xl mx-auto px-6">
            <p className="text-xs font-mono uppercase tracking-[0.2em] text-brand-trust mb-4">
              THE OPERATING MODEL
            </p>
            <h2 className="text-display-md font-bold text-gray-900 max-w-4xl leading-tight">
              One Operational Backbone.
              <br />
              <span className="text-gray-500">Every Critical Workflow.</span>
            </h2>
            <p className="text-body-lg text-gray-600 max-w-3xl mt-6 leading-relaxed">
              ElevestOS is not another NGO tool. It is the operational
              environment where funding, execution, reporting, compliance and
              organisational memory work together. It sits beneath your
              existing applications and above daily work. It does not replace
              your tools — it coordinates how work flows across them.
            </p>

            {/* Ecosystem visual */}
            <div className="flex flex-col lg:flex-row items-center justify-center gap-6 mt-14">
              <div className="bg-gray-50 border border-gray-200 rounded-xl px-8 py-6 text-center min-w-[180px]">
                <Building2 className="h-7 w-7 text-brand-trust mx-auto mb-3" />
                <p className="text-heading-md font-semibold text-gray-900">NGOs</p>
                <p className="text-[11px] text-gray-500 mt-1 font-mono uppercase tracking-wider">
                  Foundations &amp; Programmes
                </p>
              </div>

              <div className="flex items-center gap-2 text-gray-400 lg:flex-col">
                <div className="h-px w-8 bg-gray-300 lg:w-px lg:h-8" />
                <ArrowRight className="h-4 w-4 lg:rotate-90" />
              </div>

              <div className="bg-gray-900 rounded-xl px-8 py-6 text-center min-w-[180px] shadow-lg">
                <LayoutDashboard className="h-7 w-7 text-brand-trust mx-auto mb-3" />
                <p className="text-heading-md font-semibold text-white">ElevestOS</p>
                <p className="text-[11px] text-gray-400 mt-1 font-mono uppercase tracking-wider">
                  Operating Backbone
                </p>
              </div>

              <div className="flex items-center gap-2 text-gray-400 lg:flex-col">
                <div className="h-px w-8 bg-gray-300 lg:w-px lg:h-8" />
                <ArrowRight className="h-4 w-4 lg:rotate-90" />
              </div>

              <div className="bg-gray-50 border border-gray-200 rounded-xl px-8 py-6 text-center min-w-[180px]">
                <Globe className="h-7 w-7 text-brand-trust mx-auto mb-3" />
                <p className="text-heading-md font-semibold text-gray-900">Funders</p>
                <p className="text-[11px] text-gray-500 mt-1 font-mono uppercase tracking-wider">
                  Foundations &amp; Agencies
                </p>
              </div>
            </div>

            {/* Flow labels */}
            <div className="flex flex-wrap justify-center gap-3 mt-10">
              {["Opportunities", "Applications", "Projects", "Reporting", "Compliance", "Monitoring", "Partnerships"].map(
                (flow) => (
                  <span
                    key={flow}
                    className="px-4 py-2 rounded-full bg-brand-trust/10 text-brand-trust text-sm font-semibold"
                  >
                    {flow}
                  </span>
                )
              )}
            </div>
          </div>
        </section>

        {/* ================================================================
            SECTION 04: PLATFORM MODULES
            ================================================================ */}
        <section className="bg-gray-50 py-24 md:py-32 border-t border-gray-100">
          <div className="max-w-7xl mx-auto px-6">
            <p className="text-xs font-mono uppercase tracking-[0.2em] text-brand-trust mb-4">
              PLATFORM MODULES
            </p>
            <h2 className="text-display-md font-bold text-gray-900 max-w-3xl leading-tight">
              Everything Required To Run Serious Programmes.
            </h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mt-14">
              {[
                { icon: Search, title: "Grant Discovery", desc: "Identify funding opportunities aligned with organisational goals." },
                { icon: FileText, title: "Application Workspace", desc: "Structure, prepare and manage applications from one environment." },
                { icon: LayoutDashboard, title: "Project Execution", desc: "Manage delivery, milestones, timelines and accountability." },
                { icon: TrendingUp, title: "Reporting", desc: "Turn operational activity into structured donor reporting." },
                { icon: Shield, title: "Compliance", desc: "Maintain visibility over governance, approvals and operational readiness." },
                { icon: BookOpen, title: "Institutional Memory", desc: "Preserve organisational knowledge beyond individual staff members." },
                { icon: HeartHandshake, title: "Partnership Management", desc: "Coordinate consortiums, collaborators and delivery partners." },
                { icon: Building2, title: "Funder Visibility", desc: "Give funders a clearer view of programme execution." },
              ].map((m) => (
                <div
                  key={m.title}
                  className="bg-white border border-gray-200 rounded-xl p-5 hover:border-gray-300 transition-colors"
                >
                  <div className="w-9 h-9 rounded-md bg-brand-trust/10 flex items-center justify-center mb-3">
                    <m.icon className="h-4.5 w-4.5 text-brand-trust" />
                  </div>
                  <h3 className="text-heading-md font-semibold text-gray-900 mb-1.5">
                    {m.title}
                  </h3>
                  <p className="text-body-sm text-gray-600">{m.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ================================================================
            SECTION 05: NGO JOURNEY
            ================================================================ */}
        <section className="bg-white py-24 md:py-32">
          <div className="max-w-7xl mx-auto px-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-14">
              {/* NGO Side */}
              <div>
                <p className="text-xs font-mono uppercase tracking-[0.2em] text-brand-trust mb-4">
                  FOR NGOs
                </p>
                <h2 className="text-display-sm font-bold text-gray-900 leading-tight mb-8">
                  From Funding Discovery
                  <br />
                  To Programme Delivery.
                </h2>
                <div className="space-y-3">
                  {[
                    "Discover Opportunities",
                    "Evaluate Fit",
                    "Build Applications",
                    "Manage Projects",
                    "Generate Reports",
                    "Maintain Compliance",
                    "Build Institutional Memory",
                  ].map((step, i) => (
                    <div
                      key={step}
                      className="flex items-center gap-4 bg-gray-50 border border-gray-100 rounded-lg px-5 py-3.5"
                    >
                      <div className="w-6 h-6 rounded-full bg-brand-trust flex items-center justify-center shrink-0">
                        <span className="text-[11px] font-bold text-white">
                          {i + 1}
                        </span>
                      </div>
                      <span className="text-body-md text-gray-800 font-medium">
                        {step}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Funder Side */}
              <div>
                <p className="text-xs font-mono uppercase tracking-[0.2em] text-brand-trust mb-4">
                  FOR FUNDERS
                </p>
                <h2 className="text-display-sm font-bold text-gray-900 leading-tight mb-8">
                  From Application Review
                  <br />
                  To Portfolio Oversight.
                </h2>
                <div className="space-y-3">
                  {[
                    "Publish Opportunities",
                    "Review Applications",
                    "Monitor Projects",
                    "Track Performance",
                    "Improve Visibility",
                    "Reduce Administrative Burden",
                  ].map((step, i) => (
                    <div
                      key={step}
                      className="flex items-center gap-4 bg-gray-50 border border-gray-100 rounded-lg px-5 py-3.5"
                    >
                      <div className="w-6 h-6 rounded-full bg-gray-900 flex items-center justify-center shrink-0">
                        <span className="text-[11px] font-bold text-white">
                          {i + 1}
                        </span>
                      </div>
                      <span className="text-body-md text-gray-800 font-medium">
                        {step}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ================================================================
            SECTION 06: INSTITUTIONAL MEMORY
            ================================================================ */}
        <section className="bg-gray-900 py-24 md:py-32">
          <div className="max-w-4xl mx-auto px-6">
            <p className="text-xs font-mono uppercase tracking-[0.2em] text-brand-trust mb-4">
              THE INVISIBLE ADVANTAGE
            </p>
            <h2 className="text-display-sm md:text-display-md font-bold text-white leading-tight">
              Organisations Should Not Have To Start Over Every Time Someone
              Leaves.
            </h2>
            <p className="text-body-lg text-gray-300 mt-6 leading-relaxed">
              High staff turnover creates operational instability. ElevestOS
              captures historical decisions, reports, processes, approvals and
              context so new teams inherit structure instead of confusion.
            </p>
            <blockquote className="border-l-2 border-brand-trust/40 pl-6 mt-10">
              <p className="text-body-lg text-gray-400 italic leading-relaxed">
                Organisational memory should be an asset, not a risk.
              </p>
            </blockquote>
          </div>
        </section>

        {/* ================================================================
            SECTION 07: TRUST LAYER
            ================================================================ */}
        <section className="bg-white py-24 md:py-32">
          <div className="max-w-7xl mx-auto px-6">
            <p className="text-xs font-mono uppercase tracking-[0.2em] text-brand-trust mb-4">
              WHY ADOPTION COMPOUNDS
            </p>
            <h2 className="text-display-md font-bold text-gray-900 max-w-3xl leading-tight">
              Trust Is Built Before Software Is Adopted.
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-14">
              {[
                {
                  title: "Knowledge",
                  desc: "Educational content and practical guidance reduce uncertainty before implementation.",
                },
                {
                  title: "Capacity Building",
                  desc: "Workshops and training transform onboarding into practical execution.",
                },
                {
                  title: "Institutional Alignment",
                  desc: "Funders and programmes benefit from clearer reporting and visibility.",
                },
                {
                  title: "Daily Use",
                  desc: "Once workflows become structured, usage becomes habitual.",
                },
              ].map((pillar, i) => (
                <div key={i} className="bg-gray-50 border border-gray-100 rounded-xl p-6">
                  <div className="w-8 h-8 rounded-md bg-brand-trust/10 flex items-center justify-center mb-4">
                    <span className="text-sm font-bold text-brand-trust">{i + 1}</span>
                  </div>
                  <h3 className="text-heading-md font-semibold text-gray-900 mb-2">
                    {pillar.title}
                  </h3>
                  <p className="text-body-sm text-gray-600 leading-relaxed">
                    {pillar.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ================================================================
            SECTION 08: PRICING PREVIEW
            ================================================================ */}
        <section className="bg-gray-50 py-24 md:py-32 border-t border-gray-100">
          <div className="max-w-7xl mx-auto px-6">
            <p className="text-xs font-mono uppercase tracking-[0.2em] text-brand-trust text-center mb-4">
              PRICING
            </p>
            <h2 className="text-display-md font-bold text-gray-900 text-center max-w-3xl mx-auto leading-tight">
              Built for Organisational Reality, Not Per-Seat Pricing.
            </h2>
            <p className="text-body-lg text-gray-600 text-center max-w-2xl mx-auto mt-4">
              Pricing scales with operational complexity, not the number of
              people on your team.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-14 max-w-5xl mx-auto">
              {[
                {
                  name: "Foundation",
                  desc: "For early-stage organisations building operational discipline.",
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
                  name: "Institutional",
                  desc: "For established organisations managing multiple programmes.",
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
                  name: "Scale",
                  desc: "For large organisations with complex operations.",
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
                    Learn More
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
          </div>
        </section>

        {/* ================================================================
            SECTION 08B: TESTIMONIALS
            ================================================================ */}
        <section className="bg-white py-24 md:py-32">
          <div className="max-w-7xl mx-auto px-6">
            <p className="text-xs font-mono uppercase tracking-[0.2em] text-brand-trust text-center mb-4">
              WHAT ORGANISATIONS SAY
            </p>
            <h2 className="text-display-md font-bold text-gray-900 text-center max-w-3xl mx-auto leading-tight">
              Real Organisations. Real Operational Improvement.
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-14">
              {[
                {
                  quote:
                    "ElevestOS gave us the structure we did not know we were missing. Our grant applications are stronger, and reporting no longer keeps me up at night.",
                  name: "Sarah M.",
                  role: "Executive Director",
                  org: "Hope Foundation Kenya",
                },
                {
                  quote:
                    "As a funder, I can finally see what is happening across our portfolio without chasing reports. The visibility is transformative.",
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
                <div key={i} className="bg-gray-50 border border-gray-100 rounded-xl p-7">
                  <p className="text-body-md text-gray-700 leading-relaxed mb-6">
                    &ldquo;{t.quote}&rdquo;
                  </p>
                  <div className="border-t border-gray-200 pt-4">
                    <p className="text-sm font-semibold text-gray-900">{t.name}</p>
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
            SECTION 09: THE OUTCOME
            ================================================================ */}
        <section className="bg-gray-50 py-24 md:py-32 border-t border-gray-100">
          <div className="max-w-4xl mx-auto px-6">
            <p className="text-xs font-mono uppercase tracking-[0.2em] text-brand-trust mb-4">
              THE OUTCOME
            </p>
            <h2 className="text-display-sm md:text-display-md font-bold text-gray-900 leading-tight">
              Less Operational Chaos.
              <br />
              More Funding Readiness.
              <br />
              <span className="text-gray-500">
                Better Programme Execution.
              </span>
            </h2>
            <p className="text-body-lg text-gray-600 mt-6 leading-relaxed">
              ElevestOS helps organisations move from fragmented operations to
              structured execution. The result is better visibility, stronger
              reporting, improved accountability, preserved institutional
              knowledge, and greater confidence across teams and funders.
            </p>
          </div>
        </section>

        {/* ================================================================
            SECTION 10: FAQ
            ================================================================ */}
        <section className="bg-white py-24 md:py-32">
          <div className="max-w-3xl mx-auto px-6">
            <h2 className="text-display-sm font-bold text-gray-900 text-center mb-14">
              Frequently Asked Questions
            </h2>
            <div className="space-y-3">
              {[
                {
                  q: "What is ElevestOS?",
                  a: "It is the operating environment NGOs use to run their work — grants, projects, reporting, compliance — in one structured system. It sits beneath your existing tools and coordinates how work flows across them.",
                },
                {
                  q: "Who is it for?",
                  a: "NGOs of all sizes, foundations, government agencies, development programmes and multilateral institutions.",
                },
                {
                  q: "Is it only for NGOs?",
                  a: "No. Funders use it for oversight, discovery and portfolio management. Governments use it for visibility and programme coordination. The platform serves the entire ecosystem.",
                },
                {
                  q: "Can funders use it?",
                  a: "Yes. Funders get NGO discovery, live monitoring, portfolio overview and audit workspaces built on real operational data, not retrospective reports.",
                },
                {
                  q: "How does onboarding work?",
                  a: "We onboard through practical workshops where you work on real tasks. You leave with an active account and your data already inside the system. No abstract onboarding, no months of setup.",
                },
                {
                  q: "What makes ElevestOS different?",
                  a: "It is not a tool — it is infrastructure. It does not replace your existing applications. It coordinates them. And unlike tools that reset every funding cycle, ElevestOS compounds: each grant application improves the next, each report strengthens future compliance, each project adds to organisational memory.",
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
                    <p className="text-body-md text-gray-600 leading-relaxed">
                      {faq.a}
                    </p>
                  </div>
                </details>
              ))}
            </div>
          </div>
        </section>

        {/* ================================================================
            CLOSING CTA
            ================================================================ */}
        <section className="bg-gray-900 py-24 md:py-32">
          <div className="max-w-4xl mx-auto px-6 text-center">
            <h2 className="text-display-sm md:text-display-md font-bold text-white max-w-3xl mx-auto leading-tight">
              Infrastructure For Organisations That Cannot Afford Operational
              Failure.
            </h2>
            <p className="text-body-lg text-gray-300 mt-6 max-w-2xl mx-auto leading-relaxed">
              See how ElevestOS helps NGOs, foundations and development
              programmes manage funding, delivery, reporting and compliance
              from a single operational environment.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center mt-10">
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 bg-brand-trust text-white font-semibold px-6 py-3 rounded-md hover:bg-brand-trust/90 transition-colors text-body-md"
              >
                Request Institutional Demo
                <ArrowRight className="h-4 w-4" />
              </Link>
              <Link
                href="/platform"
                className="inline-flex items-center gap-2 border border-gray-500 text-gray-300 font-semibold px-6 py-3 rounded-md hover:border-white hover:text-white transition-colors text-body-md"
              >
                Explore The Platform
              </Link>
            </div>
          </div>
        </section>
      </main>
      <PublicFooter />
    </>
  );
}
