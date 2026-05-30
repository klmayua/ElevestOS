import {
  Search,
  FileText,
  FolderKanban,
  BarChart3,
  Shield,
  Users,
  Database,
  ArrowRight,
  Check,
} from "lucide-react";
import PublicNavbar from "@/components/layout/public-navbar";
import PublicFooter from "@/components/layout/public-footer";

const benefitCards = [
  {
    icon: Search,
    title: "Grant Discovery",
    desc: "Find aligned funding opportunities based on your organisation's verified capacity, sector expertise, and geographic presence. No more scrolling through endless calls for proposals and hoping one fits your profile.",
  },
  {
    icon: FileText,
    title: "Application Workspace",
    desc: "Build applications from verified organisational data. Budgets, team qualifications, past results, and compliance documents are pre-loaded and ready to assemble. Every application is stronger because it rests on a foundation of evidence.",
  },
  {
    icon: FolderKanban,
    title: "Project Management",
    desc: "Run funded work with complete visibility. Track milestones against timelines, monitor spending against budgets, and manage deliverables against approved scopes. Everyone on the team sees the same picture.",
  },
  {
    icon: BarChart3,
    title: "Reporting",
    desc: "Reports emerge from daily work, not from last-minute data collection marathons. Narrative, financial, and impact reports assemble themselves from the activity already recorded in the system.",
  },
  {
    icon: Shield,
    title: "Compliance",
    desc: "Compliance is recorded as work happens. Approvals, verifications, policy checks, and supporting evidence are captured at the moment of action. Audit readiness is continuous, not periodic.",
  },
  {
    icon: Users,
    title: "Team Coordination",
    desc: "A single workspace for approvals, document sharing, budget tracking, and team communication. No more scattered spreadsheets, forwarded email threads, or version-control chaos on shared drives.",
  },
  {
    icon: Database,
    title: "Historical Records",
    desc: "Organisational memory that survives staff turnover. Every grant, project, report, and decision is permanently recorded and searchable. When people leave, the knowledge stays.",
  },
];

const workflowSteps = [
  {
    step: "01",
    title: "Discover Funding",
    desc: "Browse and match with grant opportunities aligned to your mission, capacity, and track record. The system surfaces relevant calls based on verified organisational data, not keyword searches.",
  },
  {
    step: "02",
    title: "Apply with Confidence",
    desc: "Assemble applications using pre-verified organisational profiles, budgets, and past performance data. Every claim is backed by evidence already in the system.",
  },
  {
    step: "03",
    title: "Execute with Visibility",
    desc: "Manage funded projects with real-time dashboards. Activities, milestones, budgets, and deliverables are tracked against approved plans. Deviations are flagged before they become crises.",
  },
  {
    step: "04",
    title: "Report Without Panic",
    desc: "Generate narrative, financial, and impact reports from live operational data. No end-of-period scramble. No reconstructing timelines from memory. Reports assemble themselves.",
  },
  {
    step: "05",
    title: "Scale Sustainably",
    desc: "Build institutional capability with every project cycle. Past performance strengthens future applications. Accumulated data improves matching, budgeting, and planning. Growth becomes methodical.",
  },
];

const ngoTiers = [
  {
    label: "Early-Stage NGOs",
    desc: "Organisations establishing their first programmes and building fundraising capacity. ElevestOS provides structure from day zero — ensuring that as you grow, your institutional memory grows with you.",
  },
  {
    label: "Established NGOs",
    desc: "Organisations managing multiple active grants across different funders and geographies. ElevestOS brings coherence to complexity, replacing fragmented tools with a unified operational backbone.",
  },
  {
    label: "Large / Multi-Programme NGOs",
    desc: "Organisations running complex portfolios across countries, sectors, and funding streams. ElevestOS provides the infrastructure layer that makes multi-programme management feasible — visibility, compliance, and coordination at scale.",
  },
];

export default function ForNGOsPage() {
  return (
    <>
      <PublicNavbar />

      <main className="bg-white text-on-surface">
        {/* Hero */}
        <section className="border-b border-[#E2E8F0] px-6 py-28 lg:px-24 lg:py-40">
          <div className="mx-auto max-w-4xl">
            <div className="mb-6 inline-block rounded border border-primary-container/30 bg-primary-container/10 px-4 py-1.5 text-body-md font-medium text-primary-container">
              For Non-Governmental Organisations
            </div>
            <h1 className="text-display-lg leading-tight tracking-tight text-on-surface">
              Run Your NGO with Operational Clarity
            </h1>
            <p className="mt-8 max-w-2xl text-body-lg leading-relaxed text-on-surface-variant">
              Replace the chaos of scattered spreadsheets, forgotten email
              threads, and last-minute report scrambles with a single operating
              system designed for how NGOs actually work. From grant discovery
              through project close-out, ElevestOS keeps your team aligned,
              your funders informed, and your institutional knowledge intact.
            </p>
          </div>
        </section>

        {/* Key Benefits */}
        <section className="border-b border-[#E2E8F0] px-6 py-24 lg:px-24">
          <div className="mx-auto max-w-4xl">
            <p className="text-body-md font-medium uppercase tracking-widest text-primary-container">
              Key Benefits
            </p>
            <h2 className="mt-4 text-display-md leading-tight tracking-tight text-on-surface">
              Seven Capabilities. One System.
            </h2>
            <p className="mt-6 max-w-2xl text-body-md leading-relaxed text-on-surface-variant">
              Each capability in ElevestOS addresses a specific operational
              pain point. Together, they form a complete infrastructure for
              running a modern, accountable, and effective NGO.
            </p>

            <div className="mt-12 grid gap-5 sm:grid-cols-2">
              {benefitCards.map((card, i) => {
                const Icon = card.icon;
                return (
                  <div
                    key={card.title}
                    className="flex gap-5 rounded-lg border border-[#E2E8F0] bg-white p-7"
                  >
                    <div className="flex h-11 w-11 flex-shrink-0 items-center justify-center rounded-lg bg-primary-container/10 text-primary-container">
                      <Icon className="h-5 w-5" />
                    </div>
                    <div>
                      <div className="flex items-baseline gap-2">
                        <span className="text-body-md font-medium text-on-surface-variant/70">
                          {String(i + 1).padStart(2, "0")}
                        </span>
                        <h3 className="text-heading-lg font-semibold text-on-surface">
                          {card.title}
                        </h3>
                      </div>
                      <p className="mt-2 text-body-md leading-relaxed text-on-surface-variant">
                        {card.desc}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* How It Works */}
        <section className="border-b border-[#E2E8F0] bg-surface-container-low px-6 py-24 lg:px-24">
          <div className="mx-auto max-w-4xl">
            <p className="text-body-md font-medium uppercase tracking-widest text-primary-container">
              How It Works
            </p>
            <h2 className="mt-4 text-display-md leading-tight tracking-tight text-on-surface">
              From Search to Scale
            </h2>
            <p className="mt-6 max-w-2xl text-body-md leading-relaxed text-on-surface-variant">
              ElevestOS follows the natural lifecycle of an NGO&apos;s
              relationship with funding. Each stage builds on the last, and the
              data captured at every step strengthens the ones that follow.
            </p>

            <div className="mt-12">
              {workflowSteps.map((step, i) => (
                <div key={step.step} className="group flex gap-6">
                  {/* Connector line + step circle */}
                  <div className="flex flex-col items-center">
                    <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded border-2 border-primary-container bg-primary-container text-body-md font-semibold text-white">
                      {step.step}
                    </div>
                    {i < workflowSteps.length - 1 && (
                      <div className="mt-2 h-full min-h-[40px] w-px bg-gray-200" />
                    )}
                  </div>

                  <div className={i < workflowSteps.length - 1 ? "pb-12" : ""}>
                    <h3 className="text-headline-lg font-semibold text-on-surface">
                      {step.title}
                    </h3>
                    <p className="mt-2 max-w-lg text-body-md leading-relaxed text-on-surface-variant">
                      {step.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Who It's For */}
        <section className="border-b border-[#E2E8F0] px-6 py-24 lg:px-24">
          <div className="mx-auto max-w-4xl">
            <p className="text-body-md font-medium uppercase tracking-widest text-primary-container">
              Who It&apos;s For
            </p>
            <h2 className="mt-4 text-display-md leading-tight tracking-tight text-on-surface">
              NGOs at Every Stage of Maturity
            </h2>
            <p className="mt-6 max-w-2xl text-body-md leading-relaxed text-on-surface-variant">
              ElevestOS is not reserved for large, well-resourced organisations.
              It is designed to be valuable from the moment an NGO writes its
              first proposal and continues to deliver compounding value as the
              organisation grows.
            </p>

            <div className="mt-12 grid gap-5 sm:grid-cols-3">
              {ngoTiers.map((tier) => (
                <div
                  key={tier.label}
                  className="flex flex-col rounded-lg border border-[#E2E8F0] bg-white p-7"
                >
                  <div className="mb-6 flex h-10 w-10 items-center justify-center rounded-lg bg-primary-container/10">
                    <Check className="h-5 w-5 text-primary-container" />
                  </div>
                  <h3 className="text-heading-lg font-semibold text-on-surface">
                    {tier.label}
                  </h3>
                  <p className="mt-3 flex-1 text-body-md leading-relaxed text-on-surface-variant">
                    {tier.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="border-b border-[#E2E8F0] bg-surface-container-low px-6 py-24 lg:px-24">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="text-display-md leading-tight tracking-tight text-on-surface">
              Ready to bring clarity to your operations?
            </h2>
            <p className="mx-auto mt-6 max-w-xl text-body-lg leading-relaxed text-on-surface-variant">
              Schedule a demonstration tailored to your organisation&apos;s
              size, sector, and operational complexity. See how ElevestOS can
              coordinate your grants, projects, reporting, and compliance in a
              single, unified system.
            </p>

            <div className="mt-10 flex items-center justify-center gap-4">
              <a
                href="/contact"
                className="inline-flex items-center gap-2 rounded-lg bg-primary-container px-8 py-4 text-body-md font-semibold text-white transition-colors hover:bg-primary-container/90"
              >
                Request a Demo
                <ArrowRight className="h-4 w-4" />
              </a>
              <a
                href="/platform"
                className="inline-flex items-center gap-2 rounded-lg border border-outline-variant bg-white px-8 py-4 text-body-md font-semibold text-on-surface transition-colors hover:bg-surface-container"
              >
                Explore the Platform
              </a>
            </div>
          </div>
        </section>
      </main>

      <PublicFooter />
    </>
  );
}
