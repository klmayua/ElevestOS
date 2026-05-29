import { PublicNavbar } from "@/components/layout/public-navbar";
import { PublicFooter } from "@/components/layout/public-footer";

export default function TermsPage() {
  return (
    <>
      <PublicNavbar />
      <main className="bg-white">
        <div className="max-w-4xl mx-auto px-6 py-16 lg:py-24">
          <h1 className="text-display-sm font-bold text-gray-900 mb-8">
            Terms of Service
          </h1>
          <p className="text-body-lg text-gray-500 mb-12">
            Last updated: January 2026
          </p>

          <div className="space-y-10">
            <section>
              <h2 className="text-xl font-semibold text-brand-trust mb-4">
                1. Acceptance of Terms
              </h2>
              <p className="text-body-lg text-gray-600 leading-relaxed">
                By accessing and using ElevestOS, you accept and agree to be bound by
                the terms and provision of this agreement.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-brand-trust mb-4">
                2. Use License
              </h2>
              <p className="text-body-lg text-gray-600 leading-relaxed">
                Permission is granted to use ElevestOS for NGO operational purposes,
                subject to these terms.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-brand-trust mb-4">
                3. Disclaimer
              </h2>
              <p className="text-body-lg text-gray-600 leading-relaxed">
                ElevestOS is provided &ldquo;as is&rdquo; without warranty of any kind.
              </p>
            </section>
          </div>
        </div>
      </main>
      <PublicFooter />
    </>
  );
}
