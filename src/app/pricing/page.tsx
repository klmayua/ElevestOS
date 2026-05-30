import { PublicNavbar } from "@/components/layout/public-navbar";
import { PublicFooter } from "@/components/layout/public-footer";
import { Check, Minus } from "lucide-react";

const tiers = [
  {
    name: "Foundation Stage",
    subtitle: "For early-stage NGOs with limited funding history",
    price: "$149",
    period: "/month, billed annually",
    cta: "Start Free Trial",
    ctaHref: "/auth/register",
    ctaVariant: "outline" as const,
    recommended: false,
    features: [
      { included: true, text: "Grant discovery & filtering" },
      { included: true, text: "Application workspace" },
      { included: true, text: "Basic reporting tools" },
      { included: true, text: "Compliance basics" },
      { included: true, text: "Up to 3 users" },
      { included: true, text: "Up to 5 active projects" },
      { included: false, text: "Full grant matching dashboard" },
      { included: false, text: "Project execution dashboards" },
      { included: false, text: "Compliance tracking & history" },
      { included: false, text: "Partner discovery" },
      { included: false, text: "API access" },
      { included: false, text: "Custom integrations" },
      { included: false, text: "Priority support" },
      { included: false, text: "Dedicated support" },
    ],
  },
  {
    name: "Institutional Stage",
    subtitle: "For established NGOs with multiple grants",
    price: "$399",
    period: "/month, billed annually",
    cta: "Start Free Trial",
    ctaHref: "/auth/register",
    ctaVariant: "primary" as const,
    recommended: true,
    features: [
      { included: true, text: "Everything in Foundation" },
      { included: true, text: "Full grant matching dashboard" },
      { included: true, text: "Project execution & reporting dashboards" },
      { included: true, text: "Compliance tracking & history" },
      { included: true, text: "Partner discovery" },
      { included: true, text: "Up to 15 users" },
      { included: true, text: "Up to 25 active projects" },
      { included: true, text: "Priority support" },
      { included: false, text: "Portfolio-level oversight" },
      { included: false, text: "Audit-ready records" },
      { included: false, text: "Institutional memory preservation" },
      { included: false, text: "API access" },
      { included: false, text: "Custom integrations" },
      { included: false, text: "Unlimited users & projects" },
    ],
  },
  {
    name: "Scale Stage",
    subtitle: "For large NGOs with complex operations",
    price: "Custom",
    period: "",
    cta: "Contact Sales",
    ctaHref: "/contact",
    ctaVariant: "outline" as const,
    recommended: false,
    features: [
      { included: true, text: "Everything in Institutional" },
      { included: true, text: "Portfolio-level oversight" },
      { included: true, text: "Audit-ready records" },
      { included: true, text: "Institutional memory preservation" },
      { included: true, text: "API access" },
      { included: true, text: "Custom integrations" },
      { included: true, text: "Unlimited users" },
      { included: true, text: "Unlimited projects" },
      { included: true, text: "Dedicated support" },
    ],
  },
];

const faqs = [
  {
    question: "Is there a free trial?",
    answer:
      "Yes. Every plan includes a 14-day free trial with full access. No credit card required. We want you to evaluate the platform with real data and real workflows before making any commitment.",
  },
  {
    question: "Can we change plans?",
    answer:
      "Absolutely. You can upgrade or downgrade at any time. If you upgrade mid-cycle, we prorate the difference. If you downgrade, the new rate takes effect at the start of your next billing period.",
  },
  {
    question: "What defines an active project?",
    answer:
      "An active project is any grant or programme that has recorded activity&mdash;spending, reporting, or milestone updates&mdash;within the current billing period. Archived or completed projects do not count toward your limit.",
  },
  {
    question: "Do funders pay per NGO?",
    answer:
      "No. Funder and institutional accounts are priced by portfolio, not per NGO. A portfolio license covers all the organisations a funder monitors, regardless of count. This is designed to eliminate perverse incentives and keep costs predictable.",
  },
  {
    question: "Is training included?",
    answer:
      "All plans include access to our knowledge base and self-paced onboarding materials. Institutional and Scale plans include live onboarding sessions. Custom training programmes and workshops are available for teams of any size.",
  },
];

function TierCard({
  name,
  subtitle,
  price,
  period,
  cta,
  ctaHref,
  ctaVariant,
  recommended,
  features,
}: (typeof tiers)[0]) {
  return (
    <div
      className={`relative bg-white border rounded-lg p-8 flex flex-col ${
        recommended ? "border-brand-trust shadow-elevated" : "border-[#E2E8F0]"
      }`}
    >
      {recommended && (
        <div className="absolute -top-3 left-1/2 -translate-x-1/2">
          <span className="inline-flex items-center px-3 py-1 rounded text-xs font-semibold bg-primary text-white whitespace-nowrap">
            RECOMMENDED
          </span>
        </div>
      )}
      <div className="mb-6">
        <h3 className="text-heading-lg font-semibold text-on-surface mb-1">{name}</h3>
        <p className="text-body-md text-on-surface-variant">{subtitle}</p>
      </div>
      <div className="mb-6">
        <span className="text-headline-lg font-bold text-on-surface">{price}</span>
        {period && <span className="text-body-md text-on-surface-variant ml-1">{period}</span>}
      </div>
      <a
        href={ctaHref}
        className={`inline-flex items-center justify-center w-full px-6 py-3 rounded-md font-medium text-body-md transition-colors mb-8 ${
          ctaVariant === "primary"
            ? "bg-primary text-white hover:bg-primary/90"
            : "border border-outline-variant text-on-surface hover:bg-surface-container"
        }`}
      >
        {cta}
      </a>
      <ul className="space-y-3 flex-1">
        {features.map((feature, i) => (
          <li key={i} className="flex items-start gap-3">
            {feature.included ? (
              <Check className="h-4 w-4 text-secondary shrink-0 mt-0.5" />
            ) : (
              <Minus className="h-4 w-4 text-on-surface-variant/50 shrink-0 mt-0.5" />
            )}
            <span
              className={`text-body-md ${feature.included ? "text-on-surface" : "text-on-surface-variant/70"}`}
            >
              {feature.text}
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default function PricingPage() {
  return (
    <>
      <PublicNavbar />
      <main className="min-h-screen">
        <section className="pt-28 pb-12 px-6">
          <div className="max-w-7xl mx-auto text-center">
            <h1 className="text-display-lg font-bold text-on-surface tracking-tight mb-6">
              Pricing
            </h1>
            <blockquote className="text-body-lg text-on-surface-variant max-w-3xl mx-auto italic">
              &ldquo;NGOs pay from operating budgets, not profit. Our pricing must be far
              lower than the cost of rejection &mdash; because every dollar spent on
              infrastructure is a dollar that was not spent on mission.&rdquo;
            </blockquote>
          </div>
        </section>

        <section className="px-6 pb-20">
          <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
            {tiers.map((tier) => (
              <TierCard key={tier.name} {...tier} />
            ))}
          </div>
        </section>

        <section className="px-6 pb-20">
          <div className="max-w-7xl mx-auto bg-surface-container-low border border-[#E2E8F0] rounded-lg p-10 lg:p-14">
            <h2 className="text-headline-lg font-bold text-on-surface mb-4 text-center">
              For Funders &amp; Institutions
            </h2>
            <p className="text-body-md text-on-surface-variant max-w-3xl mx-auto text-center mb-6">
              Foundations, bilateral donors, and multilateral institutions manage portfolios,
              not individual NGOs. Portfolio licenses give you oversight across all funded
              organisations without per-entity pricing. Your costs stay predictable as your
              grant portfolio grows.
            </p>
            <p className="text-body-md text-on-surface-variant max-w-3xl mx-auto text-center">
              Enterprise deployments are available for government and multilateral programmes
              requiring on-premise hosting, custom data residency, or dedicated infrastructure.
              We work with your procurement and IT security teams to meet institutional
              requirements.
            </p>
            <div className="text-center mt-8">
              <a
                href="/contact"
                className="inline-flex items-center gap-2 px-6 py-3 border border-gray-900 text-on-surface font-medium rounded-md hover:bg-primary-container hover:text-white transition-colors"
              >
                Inquire About Portfolio Licensing
              </a>
            </div>
          </div>
        </section>

        <section className="px-6 pb-28">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-headline-lg font-bold text-on-surface mb-8 text-center">
              Frequently Asked Questions
            </h2>
            <div className="space-y-4">
              {faqs.map((faq, i) => (
                <details
                  key={i}
                  className="group border border-[#E2E8F0] rounded-lg overflow-hidden"
                >
                  <summary className="flex items-center justify-between px-6 py-4 cursor-pointer list-none hover:bg-surface-container transition-colors">
                    <span className="text-body-md font-medium text-on-surface pr-8">
                      {faq.question}
                    </span>
                    <svg
                      className="h-4 w-4 text-on-surface-variant/70 shrink-0 transition-transform duration-200 group-open:rotate-180"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M19 9l-7 7-7-7"
                      />
                    </svg>
                  </summary>
                  <div className="px-6 pb-5">
                    <p className="text-body-md text-on-surface-variant leading-relaxed">{faq.answer}</p>
                  </div>
                </details>
              ))}
            </div>
          </div>
        </section>
      </main>
      <PublicFooter />
    </>
  );
}
