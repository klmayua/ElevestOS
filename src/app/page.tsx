import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Lock, GitBranch, ShieldCheck } from "lucide-react";

export const metadata: Metadata = {
  title: "ElevestOS — The Operating System for Serious NGOs",
};

export default function Home() {
  return (
    <div className="min-h-screen bg-primary-container text-white antialiased">
      {/* ============================================================
          NAV — minimal, text-only, just links
          ============================================================ */}
      <header className="fixed top-0 inset-x-0 z-50">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-5">
          <Link href="/" className="text-sm font-semibold tracking-tight">
            ElevestOS
          </Link>
          <div className="flex items-center gap-6">
            <Link
              href="/features"
              className="text-[13px] text-white/60 transition-colors hover:text-white"
            >
              Features
            </Link>
            <Link
              href="/for-ngos"
              className="text-[13px] text-white/60 transition-colors hover:text-white"
            >
              NGOs
            </Link>
            <Link
              href="/for-funders"
              className="text-[13px] text-white/60 transition-colors hover:text-white"
            >
              Funders
            </Link>
            <Link
              href="/pricing"
              className="text-[13px] text-white/60 transition-colors hover:text-white"
            >
              Pricing
            </Link>
            <span className="mx-2 h-4 w-px bg-white/15" />
            <Link
              href="/auth/login"
              className="text-[13px] text-white/60 transition-colors hover:text-white"
            >
              Sign in
            </Link>
            <Link
              href="/contact"
              className="inline-flex items-center gap-1.5 rounded-full bg-white px-4 py-1.5 text-[13px] font-medium text-primary-container transition-colors hover:bg-white/90"
            >
              Get started
              <ArrowRight className="h-3 w-3" />
            </Link>
          </div>
        </div>
      </header>

      {/* ============================================================
          HERO — statement. nothing else.
          ============================================================ */}
      <section className="flex min-h-screen items-center">
        <div className="mx-auto w-full max-w-4xl px-6 pt-16">
          <p className="text-[13px] font-medium uppercase tracking-widest text-secondary-fixed">
            Infrastructure for global development
          </p>
          <h1 className="mt-8 max-w-2xl text-5xl font-bold leading-[1.08] tracking-tight sm:text-6xl lg:text-7xl">
            The operating system for serious NGOs
          </h1>
          <p className="mt-8 max-w-lg text-base leading-relaxed text-white/55 sm:text-lg">
            Grants, projects, reporting, and compliance — engineered into a single,
            institutional-grade platform. Built for stability, designed for accountability.
          </p>
          <div className="mt-12 flex flex-wrap gap-4">
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 rounded-full bg-secondary-fixed px-7 py-3 text-[14px] font-semibold text-primary-container transition-colors hover:bg-secondary-fixed/90"
            >
              Request deployment
              <ArrowRight className="h-4 w-4" />
            </Link>
            <Link
              href="/platform"
              className="inline-flex items-center gap-2 rounded-full border border-white/15 px-7 py-3 text-[14px] font-medium text-white transition-colors hover:border-white/30 hover:bg-white/5"
            >
              Explore platform
            </Link>
          </div>
        </div>
      </section>

      {/* ============================================================
          STATS — raw numbers, no decoration
          ============================================================ */}
      <section className="border-t border-white/10 py-32">
        <div className="mx-auto max-w-6xl px-6">
          <p className="text-[13px] font-medium uppercase tracking-widest text-white/30">
            Trusted by global institutions
          </p>
          <div className="mt-12 grid gap-16 sm:grid-cols-3">
            <div>
              <div className="text-5xl font-bold tracking-tight text-white">99.8%</div>
              <div className="mt-3 text-[15px] leading-relaxed text-white/45">
                Financial transmission integrity across all deployments
              </div>
            </div>
            <div>
              <div className="text-5xl font-bold tracking-tight text-white">$4.2B</div>
              <div className="mt-3 text-[15px] leading-relaxed text-white/45">
                Grants processed through the platform since inception
              </div>
            </div>
            <div>
              <div className="text-5xl font-bold tracking-tight text-white">140+</div>
              <div className="mt-3 text-[15px] leading-relaxed text-white/45">
                Countries with active institutional deployments
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ============================================================
          FEATURES — three pillars, clean cards
          ============================================================ */}
      <section className="border-t border-white/10 py-32">
        <div className="mx-auto max-w-6xl px-6">
          <p className="text-[13px] font-medium uppercase tracking-widest text-white/30">
            Engineered for stability
          </p>
          <div className="mt-16 grid gap-px overflow-hidden rounded border border-white/10 bg-white/5 sm:grid-cols-3">
            <div className="bg-primary-container p-10">
              <div className="flex h-10 w-10 items-center justify-center rounded bg-white/8">
                <Lock className="h-5 w-5 text-secondary-fixed" />
              </div>
              <h3 className="mt-8 text-lg font-semibold tracking-tight">Secure</h3>
              <p className="mt-3 text-[14px] leading-relaxed text-white/50">
                Military-grade encryption. ISO 27001 compliant architecture. Built to withstand
                geopolitical instability.
              </p>
            </div>
            <div className="bg-primary-container p-10">
              <div className="flex h-10 w-10 items-center justify-center rounded bg-white/8">
                <GitBranch className="h-5 w-5 text-secondary-fixed" />
              </div>
              <h3 className="mt-8 text-lg font-semibold tracking-tight">Structured</h3>
              <p className="mt-3 text-[14px] leading-relaxed text-white/50">
                Rigid frameworks for grant management. Clear ownership and reporting lines across
                multi-national operations.
              </p>
            </div>
            <div className="bg-primary-container p-10">
              <div className="flex h-10 w-10 items-center justify-center rounded bg-white/8">
                <ShieldCheck className="h-5 w-5 text-secondary-fixed" />
              </div>
              <h3 className="mt-8 text-lg font-semibold tracking-tight">Auditable</h3>
              <p className="mt-3 text-[14px] leading-relaxed text-white/50">
                Immutable transaction logs. Every action timestamped and cryptographically signed
                for regulatory peace of mind.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ============================================================
          CAPABILITIES — six items, clean grid
          ============================================================ */}
      <section className="border-t border-white/10 py-32">
        <div className="mx-auto max-w-6xl px-6">
          <p className="text-[13px] font-medium uppercase tracking-widest text-white/30">
            Complete visibility
          </p>
          <h2 className="mt-4 max-w-md text-3xl font-bold tracking-tight">
            Every function connected and auditable
          </h2>
          <div className="mt-16 grid gap-px overflow-hidden rounded border border-white/10 bg-white/5 sm:grid-cols-2 lg:grid-cols-3">
            {[
              { title: "Grant Discovery", desc: "Aligned funding opportunities matched to your verified profile and delivery history." },
              { title: "Application Workspace", desc: "Build applications from verified data — budgets, compliance docs, past results pre-loaded." },
              { title: "Project Execution", desc: "Track milestones, budgets, and deliverables in real time against approved proposals." },
              { title: "Automated Reporting", desc: "Reports assemble from daily operational data — no end-of-quarter scramble." },
              { title: "Compliance Vault", desc: "Every approval, decision, and document preserved in an immutable audit trail." },
              { title: "Institutional Memory", desc: "Organisational knowledge that survives staff turnover — searchable, structured, permanent." },
            ].map((item) => (
              <div key={item.title} className="bg-primary-container p-8">
                <h3 className="text-[15px] font-semibold tracking-tight">{item.title}</h3>
                <p className="mt-2 text-[14px] leading-relaxed text-white/50">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ============================================================
          CTA — bold, singular
          ============================================================ */}
      <section className="border-t border-white/10 py-32">
        <div className="mx-auto max-w-3xl px-6 text-center">
          <h2 className="text-4xl font-bold tracking-tight sm:text-5xl">
            Ready to institutionalise your impact?
          </h2>
          <p className="mt-6 text-[16px] leading-relaxed text-white/45">
            Join the world&apos;s most stable NGOs. Standardise your operations with the platform
            designed for high-stakes global initiatives.
          </p>
          <div className="mt-12 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 rounded-full bg-secondary-fixed px-8 py-3.5 text-[15px] font-semibold text-primary-container transition-colors hover:bg-secondary-fixed/90"
            >
              Schedule a consultation
              <ArrowRight className="h-4 w-4" />
            </Link>
            <Link
              href="/platform"
              className="inline-flex items-center gap-2 rounded-full border border-white/15 px-8 py-3.5 text-[15px] font-medium text-white transition-colors hover:border-white/30 hover:bg-white/5"
            >
              Explore the platform
            </Link>
          </div>
        </div>
      </section>

      {/* ============================================================
          FOOTER — minimal
          ============================================================ */}
      <footer className="border-t border-white/10 py-20">
        <div className="mx-auto max-w-6xl px-6">
          <div className="grid gap-12 sm:grid-cols-2 lg:grid-cols-4">
            <div>
              <Link href="/" className="text-sm font-semibold tracking-tight">
                ElevestOS
              </Link>
              <p className="mt-4 text-[13px] leading-relaxed text-white/35">
                Infrastructure-grade technology for global NGOs and development funders.
              </p>
            </div>
            <div>
              <span className="text-[11px] font-medium uppercase tracking-widest text-white/25">Platform</span>
              <ul className="mt-5 space-y-3">
                {["Features", "Platform", "Pricing", "Resources"].map((l) => (
                  <li key={l}>
                    <Link href={`/${l.toLowerCase()}`} className="text-[14px] text-white/45 transition-colors hover:text-white/70">
                      {l}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <span className="text-[11px] font-medium uppercase tracking-widest text-white/25">Solutions</span>
              <ul className="mt-5 space-y-3">
                {[
                  { label: "For NGOs", href: "/for-ngos" },
                  { label: "For Funders", href: "/for-funders" },
                  { label: "Compliance", href: "/preview/compliance-dashboard" },
                  { label: "Applications", href: "/preview/application-workspace" },
                ].map((l) => (
                  <li key={l.label}>
                    <Link href={l.href} className="text-[14px] text-white/45 transition-colors hover:text-white/70">
                      {l.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <span className="text-[11px] font-medium uppercase tracking-widest text-white/25">Company</span>
              <ul className="mt-5 space-y-3">
                {[
                  { label: "About", href: "/about" },
                  { label: "Contact", href: "/contact" },
                  { label: "Privacy", href: "/privacy" },
                  { label: "Terms", href: "/terms" },
                ].map((l) => (
                  <li key={l.label}>
                    <Link href={l.href} className="text-[14px] text-white/45 transition-colors hover:text-white/70">
                      {l.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <div className="mt-16 border-t border-white/10 pt-8">
            <p className="text-[12px] text-white/25">
              &copy; {new Date().getFullYear()} ElevestOS Institutional Solutions. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
