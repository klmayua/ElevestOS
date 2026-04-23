import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-surface-container-lowest to-background">
      {/* Hero Section */}
      <section className="container mx-auto px-4 py-20 lg:py-32">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-display-lg font-heading font-bold text-primary mb-6">
            ElevestOS
          </h1>
          <p className="text-body-lg text-gray-600 mb-8 max-w-2xl mx-auto">
            The operating system for NGOs. Streamline funding applications, compliance, 
            reporting, and funder relationships in one unified platform.
          </p>
          <div className="flex gap-4 justify-center">
            <Link href="/auth/login" className="btn-primary">
              Get Started
            </Link>
            <Link href="/auth/register" className="btn-secondary">
              Create Account
            </Link>
          </div>
        </div>
      </section>

      {/* Features Preview */}
      <section className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Feature Cards */}
          <div className="card p-6">
            <div className="w-12 h-12 rounded-md bg-secondary/10 flex items-center justify-center mb-4">
              <svg className="w-6 h-6 text-secondary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
              </svg>
            </div>
            <h3 className="text-h3 font-heading font-semibold text-primary mb-2">
              Grant Matching
            </h3>
            <p className="text-body-md text-gray-600">
              AI-powered grant discovery tailored to your NGO's mission and capacity.
            </p>
          </div>

          <div className="card p-6">
            <div className="w-12 h-12 rounded-md bg-tertiary/10 flex items-center justify-center mb-4">
              <svg className="w-6 h-6 text-tertiary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
              </svg>
            </div>
            <h3 className="text-h3 font-heading font-semibold text-primary mb-2">
              Application Workspace
            </h3>
            <p className="text-body-md text-gray-600">
              Collaborative tools for building compelling funding applications.
            </p>
          </div>

          <div className="card p-6">
            <div className="w-12 h-12 rounded-md bg-primary/10 flex items-center justify-center mb-4">
              <svg className="w-6 h-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
              </svg>
            </div>
            <h3 className="text-h3 font-heading font-semibold text-primary mb-2">
              Impact Reporting
            </h3>
            <p className="text-body-md text-gray-600">
              Automated compliance and impact reports for funders and stakeholders.
            </p>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="container mx-auto px-4 py-16">
        <div className="card p-8 bg-gradient-to-br from-primary to-primary/90 text-white">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div>
              <div className="text-display-md font-bold mb-2">500+</div>
              <div className="text-body-md opacity-90">NGOs Supported</div>
            </div>
            <div>
              <div className="text-display-md font-bold mb-2">$50M+</div>
              <div className="text-body-md opacity-90">Funding Secured</div>
            </div>
            <div>
              <div className="text-display-md font-bold mb-2">98%</div>
              <div className="text-body-md opacity-90">Compliance Rate</div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-border mt-20">
        <div className="container mx-auto px-4 py-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="text-body-sm text-gray-600">
              © 2026 Elevest Labs. All rights reserved.
            </div>
            <div className="flex gap-6 text-body-sm">
              <Link href="/privacy" className="text-gray-600 hover:text-primary transition-colors">
                Privacy
              </Link>
              <Link href="/terms" className="text-gray-600 hover:text-primary transition-colors">
                Terms
              </Link>
              <Link href="/contact" className="text-gray-600 hover:text-primary transition-colors">
                Contact
              </Link>
            </div>
          </div>
        </div>
      </footer>
    </main>
  );
}
