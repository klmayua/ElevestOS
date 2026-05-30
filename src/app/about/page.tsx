import { PublicNavbar } from "@/components/layout/public-navbar";
import { PublicFooter } from "@/components/layout/public-footer";
import Link from "next/link";
import { ArrowRight, Shield, RefreshCw, Database } from "lucide-react";

const beliefs = [
  {
    title: "Funding failure is a downstream symptom. The root cause is operational disorder.",
    description:
      "When an NGO is repeatedly rejected, the instinct is to rewrite the proposal. But funders usually reject the organisation, not the idea. Weak financial controls, inconsistent reporting, undocumented governance, and fragmented data are what lose trust.",
  },
  {
    title: "NGOs are not disorganised. They lack the infrastructure to appear organised.",
    description:
      "Most NGOs manage complex programmes in difficult conditions. The problem is not capability; it is that their operational reality lives in emails, spreadsheets, and individual memory. Without a system that captures and structures that work, it remains invisible to funders.",
  },
  {
    title: "Trust should compound, not reset with every new funder.",
    description:
      "An NGO that has been audited six times and delivered on seventeen grants should not have to prove itself from scratch with each new application. A shared, verified institutional record should accumulate and travel with the organisation.",
  },
  {
    title: "Standardisation should emerge from daily use, not enforcement.",
    description:
      "Compliance frameworks that are imposed from above become checkbox exercises. When reporting, record-keeping, and approval workflows are embedded in the tools people already use, standardisation becomes a natural byproduct of getting work done.",
  },
];

export default function AboutPage() {
  return (
    <>
      <PublicNavbar />
      <main className="min-h-screen">
        <section className="pt-28 pb-12 px-6">
          <div className="max-w-7xl mx-auto text-center">
            <h1 className="text-display-lg font-bold text-gray-900 tracking-tight mb-6">
              About Elevest Labs
            </h1>
          </div>
        </section>

        <section className="px-6 pb-20">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-heading-xl font-bold text-gray-900 mb-6">Our Mission</h2>
            <p className="text-body-lg text-gray-700 leading-relaxed">
              Elevest Development &amp; Labs exists to fix the infrastructure gap that makes
              NGO operations fragile, funding uncertain, and oversight reactive. We build the
              operating system that development organisations need to convert their programme
              expertise into fundable, auditable, and sustainable institutional capacity.
            </p>
            <p className="text-body-md text-gray-600 leading-relaxed mt-4">
              We are not a grant marketplace, a CRM, or a generic project management tool
              relabelled for the sector. We are a purpose-built platform that addresses the
              specific operational realities of NGOs, foundations, and development programmes:
              the funding cycle, the compliance burden, the reporting treadmill, and the
              institutional knowledge that evaporates when key staff move on.
            </p>
          </div>
        </section>

        <section className="px-6 pb-20">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-heading-xl font-bold text-gray-900 mb-6">The Problem We Address</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mb-12">
              <div className="border border-gray-200 rounded-lg p-6">
                <div className="w-10 h-10 rounded-md bg-gray-100 flex items-center justify-center mb-4">
                  <Shield className="h-5 w-5 text-gray-700" />
                </div>
                <h3 className="text-heading-md font-semibold text-gray-900 mb-2">Fragile Operations</h3>
                <p className="text-body-sm text-gray-600 leading-relaxed">
                  NGOs operate on fragmented tools: email for approvals, spreadsheets for budgets,
                  shared drives for documents. When a funder asks for evidence, finding it becomes a
                  crisis rather than a query.
                </p>
              </div>
              <div className="border border-gray-200 rounded-lg p-6">
                <div className="w-10 h-10 rounded-md bg-gray-100 flex items-center justify-center mb-4">
                  <RefreshCw className="h-5 w-5 text-gray-700" />
                </div>
                <h3 className="text-heading-md font-semibold text-gray-900 mb-2">Uncertain Funding</h3>
                <p className="text-body-sm text-gray-600 leading-relaxed">
                  Each funding cycle forces NGOs to repackage the same institutional information
                  into different formats. Funders review applications without access to verified
                  operational history. Both sides repeat work that a system could eliminate.
                </p>
              </div>
              <div className="border border-gray-200 rounded-lg p-6">
                <div className="w-10 h-10 rounded-md bg-gray-100 flex items-center justify-center mb-4">
                  <Database className="h-5 w-5 text-gray-700" />
                </div>
                <h3 className="text-heading-md font-semibold text-gray-900 mb-2">Reactive Oversight</h3>
                <p className="text-body-sm text-gray-600 leading-relaxed">
                  Funders discover problems after they have compounded. Without real-time operational
                  data, oversight is retrospective and punitive rather than preventive and
                  supportive.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="px-6 pb-20">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-heading-xl font-bold text-gray-900 mb-8">What We Believe</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              {beliefs.map((belief, i) => (
                <div
                  key={i}
                  className="bg-white border border-gray-200 rounded-lg p-6 hover:shadow-elevated transition-all duration-200"
                >
                  <h3 className="text-heading-md font-semibold text-gray-900 mb-3">
                    {belief.title}
                  </h3>
                  <p className="text-body-sm text-gray-600 leading-relaxed">
                    {belief.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="px-6 pb-20">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-heading-xl font-bold text-gray-900 mb-6">How We Work</h2>
            <p className="text-body-md text-gray-600 leading-relaxed mb-4">
              We build the platform alongside the organisations that use it. Our approach
              combines software engineering with structured capacity-building: as we deploy the
              platform, we run workshops that train teams on grant preparation, compliance
              record-keeping, reporting workflows, and institutional memory practices.
            </p>
            <p className="text-body-md text-gray-600 leading-relaxed mb-4">
              This is not consulting that ends when the engagement does, and it is not software
              that ships without context. It is a continuous cycle: organisations use the
              platform, the platform captures and structures their work, and that structured
              data makes their next funding application, report, and audit progressively easier.
            </p>
            <p className="text-body-md text-gray-600 leading-relaxed">
              Our deployment model respects the realities of the sector. We work with
              organisations that have intermittent internet, limited IT staff, and urgent
              programme demands. The platform is designed for these conditions, not in spite of
              them.
            </p>
          </div>
        </section>

        <section className="px-6 pb-20">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-heading-xl font-bold text-gray-900 mb-6">The Team</h2>
            <p className="text-body-md text-gray-600 leading-relaxed">
              Elevest Labs is a team of sector practitioners, software engineers, and
              operational specialists. We have worked inside NGOs, managed grant portfolios
              for funders, designed M&amp;E frameworks for development programmes, and built
              enterprise software for regulated environments. We understand both the programme
              side and the infrastructure side because we have lived on both.
            </p>
            <p className="text-body-md text-gray-600 leading-relaxed mt-4">
              We are headquartered in Nairobi with distributed teams across Africa, Europe, and
              North America. Our engineers, programme specialists, and compliance advisors bring
              experience from multilateral organisations, international NGOs, national
              foundations, and technology companies.
            </p>
          </div>
        </section>

        <section className="px-6 pb-20">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-heading-xl font-bold text-gray-900 mb-6">How We Build</h2>
            <p className="text-body-md text-gray-600 leading-relaxed mb-4">
              ElevestOS is not built in isolation and then presented to the sector. The
              platform is developed in parallel with workshops, training programmes, and
              on-the-ground deployments. Every feature is refined against the reality of how
              organisations actually work: intermittent connectivity, stretched teams, legacy
              documents, and funder requirements that do not align with each other.
            </p>
            <p className="text-body-md text-gray-600 leading-relaxed mb-4">
              Our engineering philosophy prioritises reliability over novelty, clarity over
              cleverness, and institutional value over individual convenience. The platform is
              designed to outlast any single user, funder relationship, or programme cycle.
            </p>
            <p className="text-body-md text-gray-600 leading-relaxed">
              We release continuously, but we do not ship features that are not ready for
              production use by organisations managing real money, real programmes, and real
              accountability to beneficiaries and funders. Every change is tested against the
              question: does this make an NGO more fundable or less vulnerable to operational
              failure?
            </p>
          </div>
        </section>

        <section className="px-6 pb-28">
          <div className="max-w-7xl mx-auto">
            <div className="bg-gray-900 rounded-xl p-10 lg:p-14 text-center">
              <h2 className="text-display-sm font-bold text-white mb-4">
                Let&apos;s talk about your operational infrastructure.
              </h2>
              <p className="text-body-lg text-gray-400 max-w-2xl mx-auto mb-8">
                Whether you are an NGO preparing for your next funding cycle, a foundation
                managing a portfolio, or a government programme requiring enterprise deployment,
                we would like to understand your context.
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 px-6 py-3 bg-brand-trust text-white font-medium rounded-md hover:bg-brand-trust/90 transition-colors"
                >
                  Get in Touch
                  <ArrowRight className="h-4 w-4" />
                </Link>
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 px-6 py-3 border border-gray-600 text-gray-300 font-medium rounded-md hover:bg-gray-800 hover:border-gray-500 transition-colors"
                >
                  Request Demo
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>
      <PublicFooter />
    </>
  );
}
