import { PublicNavbar } from "@/components/layout/public-navbar";
import { PublicFooter } from "@/components/layout/public-footer";
import {
  Search,
  FileText,
  Target,
  FolderKanban,
  Users,
  BarChart3,
  Shield,
  FileCheck,
  Lock,
  LayoutDashboard,
  Eye,
  TrendingUp,
  GraduationCap,
  Briefcase,
  BookOpen,
} from "lucide-react";

const fundingFeatures = [
  {
    icon: Search,
    title: "Grant Discovery & Matching",
    description:
      "Curated opportunities filtered by your organisation's profile, past work, and sector focus. The system learns what you do best and surfaces grants with genuine fit, not just keyword overlap.",
  },
  {
    icon: FileText,
    title: "Application Workspace",
    description:
      "Step-by-step preparation that reuses verified organisational data so you never retype your registration number, board composition, or past audit results. Every application builds on institutional memory.",
  },
  {
    icon: Target,
    title: "Funder Discovery",
    description:
      "NGOs see aligned funders ranked by mission fit and historical success rates. Funders discover credible NGOs with verified track records and audit-ready histories without chasing paperwork.",
  },
];

const operationsFeatures = [
  {
    icon: FolderKanban,
    title: "Project Execution Dashboard",
    description:
      "Track activities, milestones, approvals, and spending in real-time across all active grants. Know what is on track, what needs attention, and why, before a funder asks.",
  },
  {
    icon: Users,
    title: "Team Coordination",
    description:
      "A single workspace for approvals, document collaboration, budget reviews, and task assignment. Your team operates from one source of truth instead of scattered emails and spreadsheets.",
  },
  {
    icon: BarChart3,
    title: "Partnership Finder",
    description:
      "Discover qualified partners by skills, sector expertise, and delivery history. Build consortia with confidence, backed by data on each organisation's past performance and compliance standing.",
  },
];

const complianceFeatures = [
  {
    icon: Shield,
    title: "Compliance & Audit Workspace",
    description:
      "Every approval, financial decision, and governance action is captured with full history. When a funder or regulator requests evidence, you produce it in minutes, not weeks.",
  },
  {
    icon: FileCheck,
    title: "Automated Reporting",
    description:
      "Reports are generated from daily work, not reconstructed after the fact. Your project updates, spending logs, and activity records feed into structured reports that meet funder formatting requirements.",
  },
  {
    icon: Lock,
    title: "Audit-Ready Records",
    description:
      "Time-stamped, inspection-ready records with no hard deletes and full version history. Every change is attributed and preserved, so audit trails are automatic, not assembled under pressure.",
  },
];

const monitoringFeatures = [
  {
    icon: LayoutDashboard,
    title: "Live Grant Monitoring",
    description:
      "A real-time view of every funded project with early warning signs for spending deviations, milestone delays, and compliance gaps. Address issues before they become crises.",
  },
  {
    icon: Eye,
    title: "Portfolio Overview",
    description:
      "A single screen showing all projects, their performance metrics, risk indicators, and funder reporting deadlines. Your entire portfolio at a glance, updated continuously from project activity.",
  },
  {
    icon: TrendingUp,
    title: "Capacity Progress",
    description:
      "Track how NGOs improve over time across funding readiness, reporting quality, compliance posture, and delivery capacity. Use objective data to guide development and demonstrate growth to funders.",
  },
];

const capacityFeatures = [
  {
    icon: GraduationCap,
    title: "Training & LMS",
    description:
      "Structured learning mapped to real NGO workflows, not generic management theory. Courses on grant preparation, financial management, M&E frameworks, and compliance are embedded into the platform.",
  },
  {
    icon: Briefcase,
    title: "Talent Marketplace",
    description:
      "Find experienced sector staff filtered by geography, role, and verified delivery history. Connect with M&E specialists, grant writers, financial controllers, and programme managers who understand the sector.",
  },
  {
    icon: BookOpen,
    title: "Knowledge Hub",
    description:
      "Practical guides on grant preparation, reporting standards, compliance frameworks, and operational best practice. Resources built from field experience, not desk research.",
  },
];

const categories = [
  { label: "FUNDING", features: fundingFeatures },
  { label: "OPERATIONS", features: operationsFeatures },
  { label: "COMPLIANCE", features: complianceFeatures },
  { label: "MONITORING", features: monitoringFeatures },
  { label: "CAPACITY BUILDING", features: capacityFeatures },
];

function FeatureCard({
  icon: Icon,
  title,
  description,
}: {
  icon: React.ElementType;
  title: string;
  description: string;
}) {
  return (
    <div className="bg-white border border-gray-200 rounded-lg p-6 hover:border-brand-trust/30 hover:shadow-elevated transition-all duration-200">
      <div className="w-10 h-10 rounded-md bg-brand-trust/10 flex items-center justify-center mb-4">
        <Icon className="h-5 w-5 text-brand-trust" />
      </div>
      <h3 className="text-heading-md font-semibold text-gray-900 mb-2">{title}</h3>
      <p className="text-body-sm text-gray-600 leading-relaxed">{description}</p>
    </div>
  );
}

export default function FeaturesPage() {
  return (
    <>
      <PublicNavbar />
      <main className="min-h-screen">
        <section className="pt-28 pb-16 px-6">
          <div className="max-w-7xl mx-auto text-center">
            <h1 className="text-display-lg font-bold text-gray-900 tracking-tight mb-4">
              Built for How NGOs and Funders Actually Work
            </h1>
            <p className="text-body-lg text-gray-600 max-w-3xl mx-auto">
              Every feature is designed to reduce the operational friction that separates
              promising organisations from reliable funding. No vanity dashboards, no
              startup aesthetics &mdash; just tools that make the work visible, auditable, and fundable.
            </p>
          </div>
        </section>

        {categories.map((category) => (
          <section key={category.label} className="px-6 pb-20">
            <div className="max-w-7xl mx-auto">
              <h2 className="text-heading-xl font-bold text-gray-900 mb-8">{category.label}</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
                {category.features.map((feature) => (
                  <FeatureCard
                    key={feature.title}
                    icon={feature.icon}
                    title={feature.title}
                    description={feature.description}
                  />
                ))}
              </div>
            </div>
          </section>
        ))}

        <section className="px-6 pb-28">
          <div className="max-w-7xl mx-auto bg-gray-900 rounded-xl p-10 lg:p-14 text-center">
            <h2 className="text-display-md font-bold text-white mb-4">
              Ready to see the platform?
            </h2>
            <p className="text-body-lg text-gray-400 max-w-2xl mx-auto mb-8">
              A member of our team will walk you through the features relevant to your
              organisation&apos;s stage and sector in under 30 minutes.
            </p>
            <a
              href="/contact"
              className="inline-flex items-center gap-2 px-6 py-3 bg-brand-trust text-white font-medium rounded-md hover:bg-brand-trust/90 transition-colors"
            >
              Request a Demo
            </a>
          </div>
        </section>
      </main>
      <PublicFooter />
    </>
  );
}
