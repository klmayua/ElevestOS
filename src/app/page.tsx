import type { Metadata } from "next";
import Link from "next/link";
import {
  ArrowRight,
  Building2,
  Lock,
  GitBranch,
  ShieldCheck,
  BarChart3,
  CheckCircle2,
  HeartHandshake,
} from "lucide-react";

export const metadata: Metadata = {
  title: "ElevestOS — The Operating System for Serious NGOs",
};

const heroPatternStyle = {
  backgroundColor: "#0b1c30",
  backgroundImage: "radial-gradient(#39475f 0.5px, transparent 0.5px)",
  backgroundSize: "24px 24px",
};

const glassCardStyle: React.CSSProperties = {
  background: "rgba(255, 255, 255, 0.03)",
  backdropFilter: "blur(8px)",
  WebkitBackdropFilter: "blur(8px)",
  border: "1px solid rgba(255, 255, 255, 0.1)",
};

const textGlowStyle: React.CSSProperties = {
  textShadow: "0 0 20px rgba(111, 251, 190, 0.3)",
};

export default function Home() {
  return (
    <>
      {/* ================================================================
          TOP NAVIGATION — Inline, matching Stitch landing HTML exactly
          ================================================================ */}
      <nav className="fixed top-0 right-0 w-full h-16 bg-surface/80 backdrop-blur-md flex justify-between items-center px-margin-desktop z-50 border-b border-outline-variant/30">
        <div className="flex items-center gap-md">
          <Link
            href="/"
            className="font-headline-md text-headline-md font-bold text-primary"
          >
            ElevestOS
          </Link>
          <div className="h-6 w-[1px] bg-outline-variant mx-sm" />
          <span className="font-label-md text-label-md text-on-surface-variant tracking-wider">
            INFRASTRUCTURE GRADE
          </span>
        </div>

        <div className="hidden md:flex items-center gap-xl">
          <Link
            href="/for-ngos"
            className="font-label-md text-label-md text-primary font-bold"
          >
            Solutions
          </Link>
          <Link
            href="/platform"
            className="font-label-md text-label-md text-on-surface-variant hover:text-primary transition-colors"
          >
            Platform
          </Link>
          <Link
            href="/features"
            className="font-label-md text-label-md text-on-surface-variant hover:text-primary transition-colors"
          >
            Features
          </Link>
          <Link
            href="/for-funders"
            className="font-label-md text-label-md text-on-surface-variant hover:text-primary transition-colors"
          >
            For Funders
          </Link>
        </div>

        <div className="flex items-center gap-md">
          <Link
            href="/auth/login"
            className="font-label-md text-label-md px-lg py-sm border border-outline hover:bg-surface-container-low transition-colors"
          >
            Institutional Login
          </Link>
          <Link
            href="/contact"
            className="font-label-md text-label-md px-lg py-sm bg-primary text-on-primary hover:opacity-90 transition-opacity"
          >
            Get Started
          </Link>
        </div>
      </nav>

      <main className="pt-16">
        {/* ================================================================
            HERO SECTION — hero-pattern background, pulse badge, glow text
            ================================================================ */}
        <section
          className="relative min-h-[870px] flex items-center overflow-hidden"
          style={heroPatternStyle}
        >
          <div className="absolute inset-0 bg-gradient-to-br from-tertiary-container/80 via-transparent to-primary-container/40" />

          <div className="container mx-auto px-margin-desktop relative z-10 grid grid-cols-12 gap-gutter items-center">
            {/* Left Text Column */}
            <div className="col-span-12 lg:col-span-7 py-3xl">
              {/* Live Protocol Badge */}
              <div className="inline-flex items-center gap-sm px-md py-base bg-secondary-container/10 border border-secondary/30 mb-lg">
                <span className="w-2 h-2 rounded-full bg-secondary-fixed animate-pulse" />
                <span className="font-label-md text-label-md text-secondary-fixed">
                  V4.0 LIVE: INSTITUTIONAL PROTOCOL
                </span>
              </div>

              <h1 className="font-display-lg text-display-lg text-white mb-lg leading-tight">
                The Operating System for <br />
                <span className="text-secondary-fixed" style={textGlowStyle}>
                  Serious NGOs
                </span>
              </h1>

              <p className="font-body-lg text-body-lg text-on-primary-container/80 max-w-2xl mb-2xl leading-relaxed">
                Institutional-grade resource planning, project management, and
                verified reporting for high-stakes global initiatives.
                Engineered for stability and absolute accountability.
              </p>

              {/* Hero CTA Buttons */}
              <div className="flex flex-wrap gap-md">
                <Link
                  href="/contact"
                  className="group flex items-center gap-md px-xl py-lg bg-secondary text-on-secondary font-title-md text-title-md hover:opacity-90 transition-all"
                >
                  Request Deployment
                  <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
                </Link>
                <Link
                  href="/auth/login"
                  className="flex items-center gap-md px-xl py-lg border border-outline-variant/40 text-white font-title-md text-title-md hover:bg-white/5 transition-all"
                >
                  <Building2 className="h-5 w-5" />
                  Institutional Login
                </Link>
              </div>

              {/* Trust Bar */}
              <div className="mt-3xl flex items-center gap-xl opacity-60">
                <span className="font-label-md text-label-md text-on-primary-container uppercase tracking-widest">
                  Trusted By
                </span>
                <div className="flex gap-xl grayscale brightness-200">
                  <div className="w-24 h-8 bg-on-primary-fixed-variant/20 rounded-sm" />
                  <div className="w-24 h-8 bg-on-primary-fixed-variant/20 rounded-sm" />
                  <div className="w-24 h-8 bg-on-primary-fixed-variant/20 rounded-sm" />
                </div>
              </div>
            </div>

            {/* Right Abstract Visual */}
            <div className="hidden lg:col-span-5 lg:flex justify-end relative">
              <div className="relative w-full aspect-square max-w-md">
                {/* Top glass card — rotated */}
                <div
                  className="absolute top-0 right-0 w-64 h-64 p-lg rotate-3 z-20"
                  style={glassCardStyle}
                >
                  <div className="flex justify-between items-start mb-lg">
                    <HeartHandshake className="h-6 w-6 text-secondary-fixed" />
                    <span className="font-label-md text-label-md text-white/40">
                      AUDIT_LOG_2024
                    </span>
                  </div>
                  <div className="space-y-sm">
                    <div className="h-1.5 w-full bg-white/10 rounded-full overflow-hidden">
                      <div className="h-full w-4/5 bg-secondary-fixed" />
                    </div>
                    <div className="h-1.5 w-full bg-white/10 rounded-full overflow-hidden">
                      <div className="h-full w-2/3 bg-secondary-fixed/60" />
                    </div>
                  </div>
                </div>

                {/* Bottom stat card — rotated the other way */}
                <div className="absolute bottom-0 left-0 w-80 h-48 bg-primary-container border border-outline/20 p-lg -rotate-6 z-10">
                  <div className="flex items-center gap-sm mb-md">
                    <BarChart3 className="h-5 w-5 text-on-primary-container" />
                    <span className="font-label-md text-label-md text-on-primary-container">
                      REAL-TIME DISBURSEMENT
                    </span>
                  </div>
                  <div className="flex items-end gap-base h-24">
                    <div className="w-full bg-secondary-fixed/40 h-8" />
                    <div className="w-full bg-secondary-fixed/60 h-12" />
                    <div className="w-full bg-secondary-fixed/80 h-16" />
                    <div className="w-full bg-secondary-fixed h-20" />
                    <div className="w-full bg-secondary-fixed/70 h-10" />
                  </div>
                </div>

                {/* Spinning ring */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-72 h-72 border border-secondary-fixed/20 rounded-full animate-[spin_20s_linear_infinite]" />
              </div>
            </div>
          </div>
        </section>

        {/* ================================================================
            FEATURE BENTO GRID
            ================================================================ */}
        <section className="py-3xl bg-white">
          <div className="container mx-auto px-margin-desktop">
            <div className="flex flex-col items-center text-center mb-3xl">
              <h2 className="font-headline-lg text-headline-lg text-primary mb-md">
                Engineered for Global Stability
              </h2>
              <p className="font-body-lg text-body-lg text-on-surface-variant max-w-2xl">
                Our infrastructure prioritizes security and data integrity,
                ensuring every cent of funding is accounted for and every impact
                is verified.
              </p>
            </div>

            <div className="grid grid-cols-12 gap-lg">
              {/* Secure */}
              <div className="col-span-12 md:col-span-4 p-2xl bg-surface-container-lowest border border-outline-variant flex flex-col items-start hover:bg-surface-container transition-colors">
                <div className="w-12 h-12 bg-primary-container flex items-center justify-center text-secondary-fixed mb-xl">
                  <Lock className="h-6 w-6" />
                </div>
                <h3 className="font-headline-md text-headline-md text-primary mb-md">
                  Secure
                </h3>
                <p className="font-body-md text-body-md text-on-surface-variant leading-relaxed">
                  Military-grade encryption for all financial transmissions and
                  participant data. ISO 27001 compliant architecture designed to
                  withstand geopolitical instability.
                </p>
              </div>

              {/* Structured */}
              <div className="col-span-12 md:col-span-4 p-2xl bg-surface-container-lowest border border-outline-variant flex flex-col items-start hover:bg-surface-container transition-colors">
                <div className="w-12 h-12 bg-primary-container flex items-center justify-center text-secondary-fixed mb-xl">
                  <GitBranch className="h-6 w-6" />
                </div>
                <h3 className="font-headline-md text-headline-md text-primary mb-md">
                  Structured
                </h3>
                <p className="font-body-md text-body-md text-on-surface-variant leading-relaxed">
                  A rigid framework for grant management and project
                  hierarchies. Maintain clear ownership and reporting lines
                  across multi-national operations.
                </p>
              </div>

              {/* Auditable */}
              <div className="col-span-12 md:col-span-4 p-2xl bg-surface-container-lowest border border-outline-variant flex flex-col items-start hover:bg-surface-container transition-colors">
                <div className="w-12 h-12 bg-primary-container flex items-center justify-center text-secondary-fixed mb-xl">
                  <ShieldCheck className="h-6 w-6" />
                </div>
                <h3 className="font-headline-md text-headline-md text-primary mb-md">
                  Auditable
                </h3>
                <p className="font-body-md text-body-md text-on-surface-variant leading-relaxed">
                  Immutable transaction logs and transparent reporting. Every
                  action is timestamped and cryptographically signed for
                  regulatory peace of mind.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* ================================================================
            DASHBOARD PROOF SECTION — Dark navy container with dashboard
            ================================================================ */}
        <section className="py-3xl bg-surface-container-low overflow-hidden">
          <div className="container mx-auto px-margin-desktop">
            <div className="bg-primary-container border border-outline/10 shadow-xl overflow-hidden">
              <div className="grid grid-cols-12">
                {/* Left text panel */}
                <div className="col-span-12 lg:col-span-4 p-2xl flex flex-col justify-center bg-tertiary-container">
                  <span className="font-label-md text-label-md text-secondary-fixed mb-md">
                    SYSTEM OVERVIEW
                  </span>
                  <h3 className="font-headline-lg text-headline-lg text-white mb-lg">
                    Complete Tactical Visibility
                  </h3>

                  <ul className="space-y-md mb-2xl">
                    <li className="flex items-center gap-md text-on-primary-container">
                      <CheckCircle2 className="h-5 w-5 text-secondary-fixed" />
                      <span>Automated Compliance Checks</span>
                    </li>
                    <li className="flex items-center gap-md text-on-primary-container">
                      <CheckCircle2 className="h-5 w-5 text-secondary-fixed" />
                      <span>Multi-Currency Reconciliation</span>
                    </li>
                    <li className="flex items-center gap-md text-on-primary-container">
                      <CheckCircle2 className="h-5 w-5 text-secondary-fixed" />
                      <span>Granular Permission Controls</span>
                    </li>
                  </ul>

                  <Link
                    href="/platform"
                    className="w-fit px-xl py-md bg-white/10 text-white border border-white/20 hover:bg-white/20 transition-colors font-label-md text-label-md uppercase tracking-widest"
                  >
                    Explore Platform
                  </Link>
                </div>

                {/* Right dashboard image */}
                <div className="col-span-12 lg:col-span-8 relative p-lg lg:p-0">
                  <img
                    alt="ElevestOS Platform Dashboard Preview"
                    className="w-full h-full object-cover opacity-90 mix-blend-luminosity"
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuDzClfssSrF8udRlJfye-Mx3I6Xx_PQEvWty3_RwRweCkoPLuXc-Y6YQMTKfUu3GeuTjolcfquCUcunBYurrhycspWJaoKpkjKi5TFWmbMoaoVCsI6xLRQ-xO8zySBhaCm13LjCOiyPrwOoFA8gu0C_US6u-Vf36SgQzbghsBwt6A7UYR-3q2WMJcmxMfr1jb8-GXXsgrEtz-MYSc3Kh47BZ6kwCMB3mPITFO-dQj0L1sW0OF6NJl0NBlSX-q3qRkxxhs5Bz-RGoKDK"
                  />

                  {/* Overlay floating status card */}
                  <div
                    className="absolute bottom-xl right-xl p-lg border-secondary-fixed/30 hidden lg:block"
                    style={glassCardStyle}
                  >
                    <div className="flex items-center gap-md mb-sm">
                      <div className="w-3 h-3 rounded-full bg-secondary-fixed" />
                      <span className="font-label-md text-label-md text-white">
                        SYSTEMS NOMINAL
                      </span>
                    </div>
                    <span className="font-body-md text-body-md text-white/60">
                      Global Network Active
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ================================================================
            FINAL CTA
            ================================================================ */}
        <section className="py-3xl bg-white border-t border-outline-variant">
          <div className="container mx-auto px-margin-desktop text-center">
            <div className="max-w-3xl mx-auto">
              <h2 className="font-display-lg text-headline-lg md:text-display-lg text-primary mb-lg">
                Ready to institutionalize your impact?
              </h2>
              <p className="font-body-lg text-body-lg text-on-surface-variant mb-2xl">
                Join the world&apos;s most stable NGOs. Standardize your
                operations with the operating system designed for the highest
                level of accountability.
              </p>
              <div className="flex justify-center gap-md">
                <Link
                  href="/contact"
                  className="px-3xl py-lg bg-primary text-on-primary font-title-md text-title-md hover:opacity-90 transition-all"
                >
                  Schedule a Consultation
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* ================================================================
          FOOTER — 4-column grid, bottom bar
          ================================================================ */}
      <footer className="bg-surface-container-lowest py-3xl border-t border-outline-variant">
        <div className="container mx-auto px-margin-desktop">
          <div className="grid grid-cols-12 gap-xl">
            {/* Brand Column */}
            <div className="col-span-12 lg:col-span-4">
              <span className="font-headline-md text-headline-md font-bold text-primary mb-md block">
                ElevestOS
              </span>
              <p className="font-body-md text-body-md text-on-surface-variant max-w-sm">
                Infrastructure-grade technology for global NGOs and development
                funders. Institutional stability by design.
              </p>
            </div>

            {/* Platform Links */}
            <div className="col-span-6 lg:col-span-2">
              <h4 className="font-label-md text-label-md text-primary mb-xl uppercase tracking-widest">
                Platform
              </h4>
              <ul className="space-y-sm text-body-md text-on-surface-variant">
                <li>
                  <Link href="/platform" className="hover:text-primary transition-colors">
                    Vault
                  </Link>
                </li>
                <li>
                  <Link href="/dashboard/grants" className="hover:text-primary transition-colors">
                    Grants
                  </Link>
                </li>
                <li>
                  <Link href="/dashboard/reports" className="hover:text-primary transition-colors">
                    Reporting
                  </Link>
                </li>
                <li>
                  <Link href="/dashboard/reports" className="hover:text-primary transition-colors">
                    Compliance
                  </Link>
                </li>
              </ul>
            </div>

            {/* Governance Links */}
            <div className="col-span-6 lg:col-span-2">
              <h4 className="font-label-md text-label-md text-primary mb-xl uppercase tracking-widest">
                Governance
              </h4>
              <ul className="space-y-sm text-body-md text-on-surface-variant">
                <li>
                  <Link href="/features" className="hover:text-primary transition-colors">
                    Features
                  </Link>
                </li>
                <li>
                  <Link href="/pricing" className="hover:text-primary transition-colors">
                    Pricing
                  </Link>
                </li>
                <li>
                  <Link href="/preview/compliance-dashboard" className="hover:text-primary transition-colors">
                    Security
                  </Link>
                </li>
                <li>
                  <Link href="/resources" className="hover:text-primary transition-colors">
                    Resources
                  </Link>
                </li>
              </ul>
            </div>

            {/* Newsletter */}
            <div className="col-span-12 lg:col-span-4">
              <h4 className="font-label-md text-label-md text-primary mb-xl uppercase tracking-widest">
                Newsletter
              </h4>
              <p className="font-body-md text-body-md text-on-surface-variant mb-md">
                Quarterly infrastructure reports for NGO leadership.
              </p>
              <div className="flex">
                <input
                  className="flex-1 bg-surface border border-outline-variant px-md py-sm focus:ring-2 focus:ring-primary focus:outline-none rounded-none"
                  placeholder="Institutional email"
                  type="email"
                />
                <button
                  type="button"
                  className="bg-primary text-on-primary px-lg py-sm font-label-md text-label-md"
                >
                  Join
                </button>
              </div>
            </div>
          </div>

          {/* Bottom Bar */}
          <div className="mt-3xl pt-xl border-t border-outline-variant flex flex-col md:flex-row justify-between items-center gap-md">
            <span className="font-label-md text-label-md text-on-surface-variant">
              &copy; 2024 ElevestOS Institutional Solutions. All Rights
              Reserved.
            </span>
            <div className="flex gap-lg">
              <Link
                href="/privacy"
                className="font-label-md text-label-md text-on-surface-variant hover:text-primary"
              >
                Privacy Protocol
              </Link>
              <Link
                href="/features"
                className="font-label-md text-label-md text-on-surface-variant hover:text-primary"
              >
                Security
              </Link>
              <Link
                href="/terms"
                className="font-label-md text-label-md text-on-surface-variant hover:text-primary"
              >
                Terms of Use
              </Link>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}
