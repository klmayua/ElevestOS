import { PublicNavbar } from "@/components/layout/public-navbar";
import { PublicFooter } from "@/components/layout/public-footer";
import Link from "next/link";
import { ArrowRight, BookOpen, FileText, Clock, Download, Video, Globe } from "lucide-react";

const articles = [
  {
    title: "Why Good Proposals Still Get Rejected",
    excerpt:
      "It is rarely the idea. Most rejections trace back to gaps in organisational data, inconsistent reporting history, and compliance documentation that does not match the narrative.",
    category: "Strategy",
    href: "/resources/why-good-proposals-still-get-rejected",
  },
  {
    title: "Reporting Without Panic: A Practical Approach",
    excerpt:
      "When reporting is built into daily operations instead of assembled under deadline pressure, it stops being a quarterly crisis and becomes a quiet, continuous output of organised work.",
    category: "Operations",
    href: "/resources/reporting-without-panic",
  },
  {
    title: "What Funders Actually Assess in Applications",
    excerpt:
      "Beyond the proposal narrative, funders look at institutional capacity markers: governance structure, financial controls, past audit results, and evidence of delivery competence.",
    category: "Funding",
    href: "/resources/what-funders-actually-assess",
  },
  {
    title: "Building Institutional Memory That Survives Staff Turnover",
    excerpt:
      "When key staff leave, they take relationships, context, and undocumented processes with them. Organisations that survive turnover are the ones that embed knowledge into systems, not individuals.",
    category: "Operations",
    href: "/resources/institutional-memory-staff-turnover",
  },
];

const guides = [
  {
    title: "The Grant Application Checklist",
    description:
      "A step-by-step checklist covering organisational profile preparation, narrative development, budget structuring, and compliance documentation for competitive grant applications.",
    icon: FileText,
  },
  {
    title: "Compliance Record Keeping for NGOs",
    description:
      "What to keep, how long to keep it, and how to structure records so they are inspection-ready. Covers financial records, governance minutes, procurement documentation, and programme evidence.",
    icon: BookOpen,
  },
  {
    title: "Reporting Templates & Best Practices",
    description:
      "Narrative and financial reporting structures that meet the requirements of the most common funder formats. Designed to be populated from operational data rather than written from scratch.",
    icon: FileText,
  },
];

const workshops = [
  {
    title: "Funding Readiness Accelerator",
    duration: "2-day programme",
    description:
      "Intensive preparation covering organisational profiling, grant identification strategy, proposal structuring, and compliance positioning. Delivered on-site or virtually for NGO teams.",
  },
  {
    title: "Reporting & Compliance Bootcamp",
    duration: "1-day programme",
    description:
      "Practical training on building reporting workflows, structuring compliance records, preparing for audits, and managing funder information requests without disrupting programme delivery.",
  },
  {
    title: "Executive Operations Seminar",
    duration: "Half-day programme",
    description:
      "Designed for senior leadership and board members. Covers strategic operational architecture, institutional memory systems, and the organisational conditions that attract sustained funding.",
  },
];

export default function ResourcesPage() {
  return (
    <>
      <PublicNavbar />
      <main className="min-h-screen">
        <section className="pt-28 pb-12 px-6">
          <div className="max-w-7xl mx-auto text-center">
            <h1 className="text-display-lg font-bold text-on-surface tracking-tight mb-4">
              Knowledge &amp; Resources
            </h1>
            <p className="text-body-lg text-on-surface-variant max-w-3xl mx-auto">
              Practical guidance drawn from years of work alongside NGOs, funders, and
              development programmes. No theory without application, no advice without evidence.
            </p>
          </div>
        </section>

        <section className="px-6 pb-20">
          <div className="max-w-7xl mx-auto">
            <div className="flex items-center justify-between mb-8">
              <h2 className="text-headline-lg font-bold text-on-surface">Knowledge Hub</h2>
              <Link
                href="#"
                className="text-body-md font-medium text-primary hover:text-primary/80 transition-colors inline-flex items-center gap-1"
              >
                View all articles
                <ArrowRight className="h-3.5 w-3.5" />
              </Link>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              {articles.map((article) => (
                <Link
                  key={article.title}
                  href={article.href}
                  className="group bg-white border border-[#E2E8F0] rounded-lg p-6 hover:border-primary/30 hover:shadow-elevated transition-all duration-200"
                >
                  <span className="inline-block text-caption font-semibold uppercase tracking-wider text-primary mb-3">
                    {article.category}
                  </span>
                  <h3 className="text-heading-md font-semibold text-on-surface mb-2 group-hover:text-primary transition-colors">
                    {article.title}
                  </h3>
                  <p className="text-body-md text-on-surface-variant leading-relaxed mb-4">{article.excerpt}</p>
                  <span className="text-body-md font-medium text-primary inline-flex items-center gap-1 group-hover:gap-2 transition-all">
                    Read article
                    <ArrowRight className="h-3.5 w-3.5" />
                  </span>
                </Link>
              ))}
            </div>
          </div>
        </section>

        <section className="px-6 pb-20">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-headline-lg font-bold text-on-surface mb-8">Practical Guides</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
              {guides.map((guide) => (
                <div
                  key={guide.title}
                  className="bg-white border border-[#E2E8F0] rounded-lg p-6 hover:shadow-elevated transition-all duration-200"
                >
                  <div className="w-10 h-10 rounded bg-primary/10 flex items-center justify-center mb-4">
                    <guide.icon className="h-5 w-5 text-primary" />
                  </div>
                  <h3 className="text-heading-md font-semibold text-on-surface mb-2">{guide.title}</h3>
                  <p className="text-body-md text-on-surface-variant leading-relaxed">{guide.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="px-6 pb-20">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-headline-lg font-bold text-on-surface mb-8">Workshop Programmes</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
              {workshops.map((workshop) => (
                <div
                  key={workshop.title}
                  className="bg-white border border-[#E2E8F0] rounded-lg p-6 hover:shadow-elevated transition-all duration-200 flex flex-col"
                >
                  <div className="flex items-center gap-2 mb-3">
                    <Clock className="h-4 w-4 text-on-surface-variant/70" />
                    <span className="text-caption font-medium text-on-surface-variant uppercase tracking-wider">
                      {workshop.duration}
                    </span>
                  </div>
                  <h3 className="text-heading-md font-semibold text-on-surface mb-2">{workshop.title}</h3>
                  <p className="text-body-md text-on-surface-variant leading-relaxed flex-1">{workshop.description}</p>
                  <a
                    href="/contact"
                    className="mt-4 inline-flex items-center gap-1 text-body-md font-medium text-primary hover:text-primary/80 transition-colors"
                  >
                    Enquire about this workshop
                    <ArrowRight className="h-3.5 w-3.5" />
                  </a>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="px-6 pb-20">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-headline-lg font-bold text-on-surface mb-8">
              Downloadable Tools &amp; Templates
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
              <div className="bg-white border border-[#E2E8F0] rounded-lg p-6 hover:shadow-elevated transition-all duration-200">
                <div className="w-10 h-10 rounded bg-secondary/10 flex items-center justify-center mb-4">
                  <Download className="h-5 w-5 text-secondary" />
                </div>
                <h3 className="text-heading-md font-semibold text-on-surface mb-2">
                  Budget Template Suite
                </h3>
                <p className="text-body-md text-on-surface-variant leading-relaxed mb-4">
                  Standardised budget templates aligned with common funder formats. Activity-based
                  costing sheets, procurement trackers, and financial narrative templates.
                </p>
                <a
                  href="#"
                  className="text-body-md font-medium text-primary hover:text-primary/80 inline-flex items-center gap-1 transition-colors"
                >
                  Download
                  <ArrowRight className="h-3.5 w-3.5" />
                </a>
              </div>
              <div className="bg-white border border-[#E2E8F0] rounded-lg p-6 hover:shadow-elevated transition-all duration-200">
                <div className="w-10 h-10 rounded bg-secondary/10 flex items-center justify-center mb-4">
                  <Download className="h-5 w-5 text-secondary" />
                </div>
                <h3 className="text-heading-md font-semibold text-on-surface mb-2">
                  M&E Framework Toolkit
                </h3>
                <p className="text-body-md text-on-surface-variant leading-relaxed mb-4">
                  Monitoring and evaluation templates including logical frameworks, indicator
                  tracking sheets, data collection tools, and evaluation report structures.
                </p>
                <a
                  href="#"
                  className="text-body-md font-medium text-primary hover:text-primary/80 inline-flex items-center gap-1 transition-colors"
                >
                  Download
                  <ArrowRight className="h-3.5 w-3.5" />
                </a>
              </div>
              <div className="bg-white border border-[#E2E8F0] rounded-lg p-6 hover:shadow-elevated transition-all duration-200">
                <div className="w-10 h-10 rounded bg-secondary/10 flex items-center justify-center mb-4">
                  <Download className="h-5 w-5 text-secondary" />
                </div>
                <h3 className="text-heading-md font-semibold text-on-surface mb-2">
                  Governance Document Pack
                </h3>
                <p className="text-body-md text-on-surface-variant leading-relaxed mb-4">
                  Board meeting minute templates, conflict of interest policies, document
                  retention schedules, and compliance calendar frameworks.
                </p>
                <a
                  href="#"
                  className="text-body-md font-medium text-primary hover:text-primary/80 inline-flex items-center gap-1 transition-colors"
                >
                  Download
                  <ArrowRight className="h-3.5 w-3.5" />
                </a>
              </div>
            </div>
          </div>
        </section>

        <section className="px-6 pb-20">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-headline-lg font-bold text-on-surface mb-8">
              Webinars &amp; Recordings
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              <div className="bg-white border border-[#E2E8F0] rounded-lg p-6 hover:shadow-elevated transition-all duration-200">
                <div className="w-10 h-10 rounded bg-primary/10 flex items-center justify-center mb-4">
                  <Video className="h-5 w-5 text-primary" />
                </div>
                <h3 className="text-heading-md font-semibold text-on-surface mb-2">
                  The Operational Infrastructure Gap
                </h3>
                <p className="text-body-md text-on-surface-variant leading-relaxed mb-4">
                  A recorded discussion with sector practitioners on why NGOs struggle with
                  funding in spite of strong programmes, and what the operational data tells us
                  about the root causes.
                </p>
                <a
                  href="#"
                  className="text-body-md font-medium text-primary hover:text-primary/80 inline-flex items-center gap-1 transition-colors"
                >
                  Watch recording
                  <ArrowRight className="h-3.5 w-3.5" />
                </a>
              </div>
              <div className="bg-white border border-[#E2E8F0] rounded-lg p-6 hover:shadow-elevated transition-all duration-200">
                <div className="w-10 h-10 rounded bg-primary/10 flex items-center justify-center mb-4">
                  <Video className="h-5 w-5 text-primary" />
                </div>
                <h3 className="text-heading-md font-semibold text-on-surface mb-2">
                  Funders on What They Wish NGOs Knew
                </h3>
                <p className="text-body-md text-on-surface-variant leading-relaxed mb-4">
                  Foundation and bilateral programme officers discuss what they look for beyond
                  the proposal, the most common avoidable rejection reasons, and what organised
                  NGOs do differently.
                </p>
                <a
                  href="#"
                  className="text-body-md font-medium text-primary hover:text-primary/80 inline-flex items-center gap-1 transition-colors"
                >
                  Watch recording
                  <ArrowRight className="h-3.5 w-3.5" />
                </a>
              </div>
            </div>
          </div>
        </section>

        <section className="px-6 pb-28">
          <div className="max-w-3xl mx-auto bg-surface-container-low border border-[#E2E8F0] rounded-lg p-10 text-center">
            <div className="w-12 h-12 rounded bg-primary/10 flex items-center justify-center mx-auto mb-4">
              <Globe className="h-6 w-6 text-primary" />
            </div>
            <h2 className="text-heading-lg font-semibold text-on-surface mb-3">
              Stay Informed
            </h2>
            <p className="text-body-md text-on-surface-variant max-w-xl mx-auto mb-6">
              We publish practical guidance, operational research, and sector analysis. No
              marketing newsletters. No startup bravado. Just substantive content for people
              who run development programmes.
            </p>
            <a
              href="#"
              className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-white font-medium rounded hover:bg-primary/90 transition-colors"
            >
              Subscribe for Updates
              <ArrowRight className="h-4 w-4" />
            </a>
          </div>
        </section>
      </main>
      <PublicFooter />
    </>
  );
}
