import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Shield, Building2, Lock, GitBranch, ShieldCheck } from "lucide-react";

export const metadata: Metadata = {
  title: "ElevestOS — The Operating System for Serious NGOs",
};

export default function Home() {
  return (
    <div className="min-h-screen bg-surface text-on-surface antialiased">
      {/* ================================================================
          NAVBAR — contained, restrained, professional
          ================================================================ */}
      <header className="fixed top-0 inset-x-0 z-50 h-16 border-b border-outline-variant/20 bg-surface/90 backdrop-blur-md">
        <div className="mx-auto flex h-full max-w-7xl items-center justify-between px-6 lg:px-8">
          <div className="flex items-center gap-6">
            <Link href="/" className="text-lg font-bold tracking-tight text-primary">
              ElevestOS
            </Link>
            <div className="hidden items-center gap-1 lg:flex">
              <Link
                href="/features"
                className="px-3 py-2 text-[13px] font-medium text-on-surface-variant transition-colors hover:text-primary"
              >
                Features
              </Link>
              <Link
                href="/for-ngos"
                className="px-3 py-2 text-[13px] font-medium text-on-surface-variant transition-colors hover:text-primary"
              >
                For NGOs
              </Link>
              <Link
                href="/for-funders"
                className="px-3 py-2 text-[13px] font-medium text-on-surface-variant transition-colors hover:text-primary"
              >
                For Funders
              </Link>
              <Link
                href="/pricing"
                className="px-3 py-2 text-[13px] font-medium text-on-surface-variant transition-colors hover:text-primary"
              >
                Pricing
              </Link>
            </div>
          </div>
          <div className="flex items-center gap-3">
            <Link
              href="/auth/login"
              className="hidden text-[13px] font-medium text-on-surface-variant transition-colors hover:text-primary sm:block"
            >
              Sign in
            </Link>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 rounded bg-primary px-5 py-2 text-[13px] font-semibold text-on-primary transition-colors hover:bg-primary-container"
            >
              Get started
              <ArrowRight className="h-3.5 w-3.5" />
            </Link>
          </div>
        </div>
      </header>

      {/* ================================================================
          HERO — clean gradient, singular focus, generous space
          ================================================================ */}
      <section className="relative flex min-h-screen items-center bg-primary-container">
        <div className="absolute inset-0 bg-gradient-to-b from-primary-container via-primary-container to-transparent" />
        <div className="relative mx-auto w-full max-w-7xl px-6 pt-16 lg:px-8">
          <div className="flex flex-col items-start py-24 lg:py-40">
            <div className="inline-flex items-center gap-2 rounded border border-secondary/20 bg-secondary/5 px-3 py-1">
              <span className="h-1.5 w-1.5 rounded-full bg-secondary-fixed" />
              <span className="text-[11px] font-medium uppercase tracking-widest text-secondary-fixed">
                Now available for institutions
              </span>
            </div>

            <h1 className="mt-8 max-w-3xl text-4xl font-bold leading-tight tracking-tight text-white sm:text-5xl lg:text-6xl">
              The operating system
              <br />
              <span className="text-secondary-fixed">for serious NGOs</span>
            </h1>

            <p className="mt-6 max-w-xl text-base leading-relaxed text-on-primary-container/80 sm:text-lg">
              Institutional-grade grants, projects, reporting, and compliance — engineered for
              stability and absolute accountability across global operations.
            </p>

            <div className="mt-10 flex flex-wrap gap-4">
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 rounded bg-secondary px-6 py-3 text-[14px] font-semibold text-on-secondary transition-colors hover:bg-secondary/90"
              >
                Request deployment
                <ArrowRight className="h-4 w-4" />
              </Link>
              <Link
                href="/platform"
                className="inline-flex items-center gap-2 rounded border border-white/20 px-6 py-3 text-[14px] font-medium text-white transition-colors hover:bg-white/5"
              >
                Explore platform
              </Link>
            </div>

            <div className="mt-16 flex items-center gap-8 text-on-primary-container/50">
              <span className="text-[12px] font-medium uppercase tracking-widest">
                Trusted by global institutions
              </span>
              <div className="flex gap-6">
                <div className="h-6 w-20 rounded-sm bg-on-primary-container/10" />
                <div className="h-6 w-20 rounded-sm bg-on-primary-container/10" />
                <div className="h-6 w-20 rounded-sm bg-on-primary-container/10" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ================================================================
          FEATURES — three cards, clean typography, generous spacing
          ================================================================ */}
      <section className="bg-white py-24 lg:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-2xl font-bold tracking-tight text-primary sm:text-3xl">
              Engineered for global stability
            </h2>
            <p className="mt-4 text-[15px] leading-relaxed text-on-surface-variant">
              Infrastructure that prioritises security, structure, and data integrity — ensuring
              every cent is accounted for and every impact is verified.
            </p>
          </div>

          <div className="mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            <div className="group rounded border border-outline-variant bg-surface-container-lowest p-8 transition-colors hover:border-outline">
              <div className="flex h-12 w-12 items-center justify-center rounded bg-primary-container">
                <Lock className="h-5 w-5 text-secondary-fixed" />
              </div>
              <h3 className="mt-6 text-lg font-semibold tracking-tight text-primary">Secure</h3>
              <p className="mt-3 text-[14px] leading-relaxed text-on-surface-variant">
                Military-grade encryption for all financial transmissions and participant data.
                ISO 27001 compliant architecture designed to withstand geopolitical instability.
              </p>
            </div>

            <div className="group rounded border border-outline-variant bg-surface-container-lowest p-8 transition-colors hover:border-outline">
              <div className="flex h-12 w-12 items-center justify-center rounded bg-primary-container">
                <GitBranch className="h-5 w-5 text-secondary-fixed" />
              </div>
              <h3 className="mt-6 text-lg font-semibold tracking-tight text-primary">
                Structured
              </h3>
              <p className="mt-3 text-[14px] leading-relaxed text-on-surface-variant">
                A rigid framework for grant management and project hierarchies. Maintain clear
                ownership and reporting lines across multi-national operations.
              </p>
            </div>

            <div className="group rounded border border-outline-variant bg-surface-container-lowest p-8 sm:col-span-2 lg:col-span-1 transition-colors hover:border-outline">
              <div className="flex h-12 w-12 items-center justify-center rounded bg-primary-container">
                <ShieldCheck className="h-5 w-5 text-secondary-fixed" />
              </div>
              <h3 className="mt-6 text-lg font-semibold tracking-tight text-primary">
                Auditable
              </h3>
              <p className="mt-3 text-[14px] leading-relaxed text-on-surface-variant">
                Immutable transaction logs and transparent reporting. Every action is
                timestamped and cryptographically signed for regulatory peace of mind.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ================================================================
          CAPABILITIES — what the platform does, clean grid of items
          ================================================================ */}
      <section className="border-t border-outline-variant bg-surface-container-low py-24 lg:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-2xl font-bold tracking-tight text-primary sm:text-3xl">
              Complete tactical visibility
            </h2>
            <p className="mt-4 text-[15px] leading-relaxed text-on-surface-variant">
              Every function an NGO performs, connected and auditable in one operating
              environment.
            </p>
          </div>

          <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {[
              {
                title: "Grant Discovery",
                desc: "Find aligned funding opportunities matched to your verified organisational profile and delivery history.",
              },
              {
                title: "Application Workspace",
                desc: "Build applications from verified data — budgets, compliance docs, and past results pre-loaded.",
              },
              {
                title: "Project Execution",
                desc: "Track milestones, budgets, and deliverables in real time against approved proposals.",
              },
              {
                title: "Automated Reporting",
                desc: "Reports assemble from daily operational data — no end-of-quarter scramble.",
              },
              {
                title: "Compliance Vault",
                desc: "Every approval, decision, and document preserved in an immutable audit trail.",
              },
              {
                title: "Institutional Memory",
                desc: "Organisational knowledge that survives staff turnover — searchable, structured, permanent.",
              },
            ].map((item) => (
              <div
                key={item.title}
                className="flex flex-col gap-3 rounded border border-outline-variant bg-surface-container-lowest p-6 transition-colors hover:border-outline"
              >
                <h3 className="text-[15px] font-semibold tracking-tight text-primary">
                  {item.title}
                </h3>
                <p className="text-[14px] leading-relaxed text-on-surface-variant">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ================================================================
          STATS — credibility bar, restrained numbers
          ================================================================ */}
      <section className="bg-white py-24 lg:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid gap-12 sm:grid-cols-3">
            <div className="text-center">
              <div className="text-4xl font-bold tracking-tight text-primary">99.8%</div>
              <div className="mt-2 text-[14px] text-on-surface-variant">
                Financial transmission integrity
              </div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold tracking-tight text-primary">$4.2B</div>
              <div className="mt-2 text-[14px] text-on-surface-variant">
                Grants processed through the platform
              </div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold tracking-tight text-primary">140+</div>
              <div className="mt-2 text-[14px] text-on-surface-variant">
                Countries with active deployments
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ================================================================
          TRUST — institutional confidence markers
          ================================================================ */}
      <section className="border-t border-outline-variant bg-surface-container-low py-24 lg:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <Shield className="mx-auto h-8 w-8 text-secondary" />
            <h2 className="mt-6 text-2xl font-bold tracking-tight text-primary sm:text-3xl">
              Built for the highest level of accountability
            </h2>
            <p className="mt-4 text-[15px] leading-relaxed text-on-surface-variant">
              ElevestOS is deployed by organisations that manage real money, real programmes, and
              real accountability to beneficiaries and funders.
            </p>
          </div>

          <div className="mt-16 grid gap-6 sm:grid-cols-2">
            <div className="flex gap-5 rounded border border-outline-variant bg-surface-container-lowest p-6">
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded bg-primary-container">
                <Building2 className="h-5 w-5 text-secondary-fixed" />
              </div>
              <div>
                <h4 className="text-[15px] font-semibold text-primary">
                  Infrastructure-grade security
                </h4>
                <p className="mt-1 text-[14px] leading-relaxed text-on-surface-variant">
                  AES-256 encryption at rest and in transit. Multi-region data residency.
                  SOC 2 Type II certified infrastructure.
                </p>
              </div>
            </div>
            <div className="flex gap-5 rounded border border-outline-variant bg-surface-container-lowest p-6">
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded bg-primary-container">
                <ShieldCheck className="h-5 w-5 text-secondary-fixed" />
              </div>
              <div>
                <h4 className="text-[15px] font-semibold text-primary">
                  Continuous compliance
                </h4>
                <p className="mt-1 text-[14px] leading-relaxed text-on-surface-variant">
                  Compliance recorded as work happens — not assembled under audit pressure.
                  Every action timestamped and attributable.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ================================================================
          CTA — single clear action, generous space
          ================================================================ */}
      <section className="bg-primary-container py-24 lg:py-32">
        <div className="mx-auto max-w-2xl px-6 text-center lg:px-8">
          <h2 className="text-2xl font-bold tracking-tight text-white sm:text-3xl">
            Ready to institutionalise your impact?
          </h2>
          <p className="mt-4 text-[15px] leading-relaxed text-on-primary-container/70">
            Join the world&apos;s most stable NGOs. Standardise your operations with the
            operating system designed for high-stakes global initiatives.
          </p>
          <div className="mt-8 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 rounded bg-secondary px-6 py-3 text-[14px] font-semibold text-on-secondary transition-colors hover:bg-secondary/90"
            >
              Schedule a consultation
              <ArrowRight className="h-4 w-4" />
            </Link>
            <Link
              href="/platform"
              className="inline-flex items-center gap-2 rounded border border-white/20 px-6 py-3 text-[14px] font-medium text-white transition-colors hover:bg-white/5"
            >
              Explore the platform
            </Link>
          </div>
        </div>
      </section>

      {/* ================================================================
          FOOTER — clean, contained, restrained
          ================================================================ */}
      <footer className="border-t border-outline-variant bg-surface-container-lowest">
        <div className="mx-auto max-w-7xl px-6 py-16 lg:px-8">
          <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
            <div>
              <Link href="/" className="text-lg font-bold tracking-tight text-primary">
                ElevestOS
              </Link>
              <p className="mt-3 text-[14px] leading-relaxed text-on-surface-variant">
                Infrastructure-grade technology for global NGOs and development funders.
              </p>
            </div>

            <div>
              <h4 className="text-[11px] font-semibold uppercase tracking-widest text-on-surface">
                Platform
              </h4>
              <ul className="mt-4 space-y-2">
                <li>
                  <Link
                    href="/features"
                    className="text-[14px] text-on-surface-variant transition-colors hover:text-primary"
                  >
                    Features
                  </Link>
                </li>
                <li>
                  <Link
                    href="/platform"
                    className="text-[14px] text-on-surface-variant transition-colors hover:text-primary"
                  >
                    Platform
                  </Link>
                </li>
                <li>
                  <Link
                    href="/pricing"
                    className="text-[14px] text-on-surface-variant transition-colors hover:text-primary"
                  >
                    Pricing
                  </Link>
                </li>
                <li>
                  <Link
                    href="/resources"
                    className="text-[14px] text-on-surface-variant transition-colors hover:text-primary"
                  >
                    Resources
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="text-[11px] font-semibold uppercase tracking-widest text-on-surface">
                Solutions
              </h4>
              <ul className="mt-4 space-y-2">
                <li>
                  <Link
                    href="/for-ngos"
                    className="text-[14px] text-on-surface-variant transition-colors hover:text-primary"
                  >
                    For NGOs
                  </Link>
                </li>
                <li>
                  <Link
                    href="/for-funders"
                    className="text-[14px] text-on-surface-variant transition-colors hover:text-primary"
                  >
                    For Funders
                  </Link>
                </li>
                <li>
                  <Link
                    href="/preview/compliance-dashboard"
                    className="text-[14px] text-on-surface-variant transition-colors hover:text-primary"
                  >
                    Compliance
                  </Link>
                </li>
                <li>
                  <Link
                    href="/preview/application-workspace"
                    className="text-[14px] text-on-surface-variant transition-colors hover:text-primary"
                  >
                    Applications
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="text-[11px] font-semibold uppercase tracking-widest text-on-surface">
                Company
              </h4>
              <ul className="mt-4 space-y-2">
                <li>
                  <Link
                    href="/about"
                    className="text-[14px] text-on-surface-variant transition-colors hover:text-primary"
                  >
                    About
                  </Link>
                </li>
                <li>
                  <Link
                    href="/contact"
                    className="text-[14px] text-on-surface-variant transition-colors hover:text-primary"
                  >
                    Contact
                  </Link>
                </li>
                <li>
                  <Link
                    href="/privacy"
                    className="text-[14px] text-on-surface-variant transition-colors hover:text-primary"
                  >
                    Privacy
                  </Link>
                </li>
                <li>
                  <Link
                    href="/terms"
                    className="text-[14px] text-on-surface-variant transition-colors hover:text-primary"
                  >
                    Terms
                  </Link>
                </li>
              </ul>
            </div>
          </div>

          <div className="mt-12 border-t border-outline-variant pt-8">
            <p className="text-[13px] text-on-surface-variant/60">
              &copy; {new Date().getFullYear()} ElevestOS Institutional Solutions. All rights
              reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
