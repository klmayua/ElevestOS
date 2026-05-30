import {
  Building2,
  LayoutDashboard,
  FileCheck,
  ShieldCheck,
  Search,
  ArrowRight,
} from "lucide-react";
import PublicNavbar from "@/components/layout/public-navbar";
import PublicFooter from "@/components/layout/public-footer";

const benefitCards = [
  {
    icon: Building2,
    title: "NGO Discovery",
    desc: "Find capable organisations based on verified operational data, not just compelling prose. Search by sector expertise, geographic presence, organisational capacity, past performance, and compliance standing. Every profile is backed by auditable institutional history.",
  },
  {
    icon: LayoutDashboard,
    title: "Portfolio Monitoring",
    desc: "Real-time visibility across your entire portfolio of funded projects. Track milestones, monitor budgets, assess risks, and review outcomes in a single unified dashboard. Move beyond periodic report cycles to continuous situational awareness.",
  },
  {
    icon: FileCheck,
    title: "Application Reviews",
    desc: "Receive applications that are structured, comparable, and backed by verified data. Every budget line is anchored to historical actuals. Every claim about capacity is supported by documented past performance. Evaluation becomes faster, fairer, and more rigorous.",
  },
  {
    icon: ShieldCheck,
    title: "Reduced Due Diligence",
    desc: "Because ElevestOS maintains a persistent, continuously updated system of record for every organisation on the platform, much of the due diligence burden is eliminated. Capacity, compliance, and track record are visible before you ask.",
  },
  {
    icon: Search,
    title: "Compliance Oversight",
    desc: "Audit-ready records maintained continuously, not compiled at year-end. View compliance status across your portfolio at any moment. Drill into specific transactions, approvals, and supporting documents without requesting information from grantees.",
  },
];

const workflowSteps = [
  {
    step: "01",
    title: "Publish Opportunities",
    desc: "Post funding opportunities with structured criteria. Define eligibility requirements, thematic priorities, budget parameters, and evaluation frameworks. The system matches your call to qualified organisations automatically.",
  },
  {
    step: "02",
    title: "Receive Qualified Applications",
    desc: "Applications arrive pre-structured and comparable. Every applicant is presented with a verified organisational profile. Budgets, team qualifications, and past performance data are standardised, making side-by-side comparison meaningful.",
  },
  {
    step: "03",
    title: "Assess with Clarity",
    desc: "Evaluate applications using consistent criteria backed by verified data. Review panels see the same structured information for every applicant. Decisions are documented, defensible, and archived for future reference.",
  },
  {
    step: "04",
    title: "Monitor Continuously",
    desc: "Once funded, every project appears in your portfolio dashboard with live data on progress, spending, risks, and compliance. Set thresholds for automatic alerts. Engage with implementers directly through the platform.",
  },
  {
    step: "05",
    title: "Evaluate Impact",
    desc: "Assess outcomes against funded objectives using data captured throughout the project lifecycle. Output and outcome indicators are tracked from the field. Impact reports are assembled from verified operational data, not self-reported narratives.",
  },
];

const institutionalReasons = [
  {
    label: "Cleaner Applications",
    desc: "Applications arrive standardised and comparable. Every claim is backed by verifiable data. Review panels spend less time chasing missing information and more time assessing substantive merit.",
  },
  {
    label: "Clearer Reporting",
    desc: "Reports draw from live operational data rather than self-reported narratives. Financial reporting is transaction-level and auditable. Impact reporting is evidence-based and consistent across grantees.",
  },
  {
    label: "Faster Assessments",
    desc: "Pre-verified organisational profiles and standardised application formats reduce evaluation time. Historical performance data eliminates the need to reconstruct grantee capability from scratch with every funding round.",
  },
  {
    label: "Reduced Monitoring Effort",
    desc: "Continuous visibility replaces periodic site visits and ad-hoc information requests. Portfolio dashboards surface exceptions automatically. Compliance status is always current.",
  },
];

export default function ForFundersPage() {
  return (
    <>
      <PublicNavbar />

      <main className="bg-white text-gray-900">
        {/* Hero */}
        <section className="border-b border-gray-100 px-6 py-28 lg:px-24 lg:py-40">
          <div className="mx-auto max-w-4xl">
            <div className="mb-6 inline-block rounded-full border border-blue-100 bg-blue-50 px-4 py-1.5 text-body-md font-medium text-blue-600">
              For Funders &amp; Donors
            </div>
            <h1 className="text-display-lg leading-tight tracking-tight text-gray-900">
              Deploy Capital with Confidence
            </h1>
            <p className="mt-8 max-w-2xl text-body-lg leading-relaxed text-gray-600">
              See clearly into the organisations you fund. Move beyond polished
              proposals and curated reports to a live, verifiable understanding
              of NGO capacity, project progress, and compliance standing. Every
              funding decision rests on evidence, not impression.
            </p>
          </div>
        </section>

        {/* Key Benefits */}
        <section className="border-b border-gray-100 px-6 py-24 lg:px-24">
          <div className="mx-auto max-w-4xl">
            <p className="text-body-md font-medium uppercase tracking-widest text-blue-600">
              Key Benefits
            </p>
            <h2 className="mt-4 text-display-md leading-tight tracking-tight text-gray-900">
              Five Capabilities for Institutional Funders
            </h2>
            <p className="mt-6 max-w-2xl text-body-md leading-relaxed text-gray-600">
              ElevestOS gives funders what they have always needed but never had:
              a standardised, verifiable, and continuously updated view of the
              organisations and projects they support.
            </p>

            <div className="mt-12 grid gap-5">
              {benefitCards.map((card, i) => {
                const Icon = card.icon;
                return (
                  <div
                    key={card.title}
                    className="grid gap-6 rounded-xl border border-gray-200 bg-white p-8 sm:grid-cols-[48px_1fr]"
                  >
                    <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-lg bg-blue-50 text-blue-600">
                      <Icon className="h-6 w-6" />
                    </div>
                    <div>
                      <div className="flex items-baseline gap-2">
                        <span className="text-body-md font-medium text-gray-400">
                          {String(i + 1).padStart(2, "0")}
                        </span>
                        <h3 className="text-heading-lg font-semibold text-gray-900">
                          {card.title}
                        </h3>
                      </div>
                      <p className="mt-3 text-body-md leading-relaxed text-gray-500">
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
        <section className="border-b border-gray-100 bg-gray-50 px-6 py-24 lg:px-24">
          <div className="mx-auto max-w-4xl">
            <p className="text-body-md font-medium uppercase tracking-widest text-blue-600">
              How It Works
            </p>
            <h2 className="mt-4 text-display-md leading-tight tracking-tight text-gray-900">
              From Funding Call to Impact Assessment
            </h2>
            <p className="mt-6 max-w-2xl text-body-md leading-relaxed text-gray-600">
              ElevestOS supports the full lifecycle of institutional funding,
              from publishing an opportunity through evaluating the impact of
              completed programmes. Each stage builds a richer evidence base for
              the decisions that follow.
            </p>

            <div className="mt-12">
              {workflowSteps.map((step, i) => (
                <div key={step.step} className="group flex gap-6">
                  <div className="flex flex-col items-center">
                    <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full border-2 border-blue-600 bg-blue-600 text-body-md font-semibold text-white">
                      {step.step}
                    </div>
                    {i < workflowSteps.length - 1 && (
                      <div className="mt-2 h-full min-h-[40px] w-px bg-gray-200" />
                    )}
                  </div>

                  <div className={i < workflowSteps.length - 1 ? "pb-12" : ""}>
                    <h3 className="text-heading-xl font-semibold text-gray-900">
                      {step.title}
                    </h3>
                    <p className="mt-2 max-w-lg text-body-md leading-relaxed text-gray-500">
                      {step.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Why Institutions Adopt ElevestOS */}
        <section className="border-b border-gray-100 px-6 py-24 lg:px-24">
          <div className="mx-auto max-w-4xl">
            <p className="text-body-md font-medium uppercase tracking-widest text-blue-600">
              Institutional Adoption
            </p>
            <h2 className="mt-4 text-display-md leading-tight tracking-tight text-gray-900">
              Why Institutions Adopt ElevestOS
            </h2>
            <p className="mt-6 max-w-2xl text-body-md leading-relaxed text-gray-600">
              The operational burden of grant-making is substantial and growing.
              Sourcing, assessing, monitoring, and evaluating grantees consumes
              significant institutional resources. ElevestOS reduces that burden
              at every stage of the funding cycle.
            </p>

            <div className="mt-12 grid gap-5 sm:grid-cols-2">
              {institutionalReasons.map((reason) => (
                <div
                  key={reason.label}
                  className="rounded-xl border border-gray-200 bg-white p-7"
                >
                  <h3 className="text-heading-lg font-semibold text-gray-900">
                    {reason.label}
                  </h3>
                  <p className="mt-3 text-body-md leading-relaxed text-gray-500">
                    {reason.desc}
                  </p>
                </div>
              ))}
            </div>

            <div className="mt-14 border-l-4 border-blue-600 bg-blue-50 px-8 py-6">
              <p className="text-body-lg font-semibold text-gray-900">
                The result is a more efficient funding cycle.
              </p>
              <p className="mt-2 text-body-md leading-relaxed text-gray-600">
                Less time spent on administrative verification. Less effort
                lost to inconsistent application formats. Fewer resources
                consumed by periodic compliance audits. More institutional
                capacity directed toward strategic programme design and impact
                evaluation.
              </p>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="border-b border-gray-100 bg-gray-50 px-6 py-24 lg:px-24">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="text-display-md leading-tight tracking-tight text-gray-900">
              Partner with Elevest
            </h2>
            <p className="mx-auto mt-6 max-w-xl text-body-lg leading-relaxed text-gray-600">
              Join the funders who are transforming how they discover, assess,
              and support NGOs. Schedule a consultation to explore how
              ElevestOS can bring clarity, efficiency, and rigour to your
              grant-making operations.
            </p>

            <div className="mt-10 flex items-center justify-center gap-4">
              <a
                href="/demo"
                className="inline-flex items-center gap-2 rounded-lg bg-blue-600 px-8 py-4 text-body-md font-semibold text-white transition-colors hover:bg-blue-700"
              >
                Partner with Elevest
                <ArrowRight className="h-4 w-4" />
              </a>
              <a
                href="/platform"
                className="inline-flex items-center gap-2 rounded-lg border border-gray-300 bg-white px-8 py-4 text-body-md font-semibold text-gray-900 transition-colors hover:bg-gray-50"
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
