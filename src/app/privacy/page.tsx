import { PublicNavbar } from "@/components/layout/public-navbar";
import { PublicFooter } from "@/components/layout/public-footer";

export default function PrivacyPage() {
  return (
    <>
      <PublicNavbar />
      <main className="bg-white">
        <div className="max-w-4xl mx-auto px-6 py-16 lg:py-24">
          <h1 className="text-display-sm font-bold text-gray-900 mb-8">
            Privacy Policy
          </h1>
          <p className="text-body-lg text-gray-500 mb-12">
            Last updated: January 2026
          </p>

          <div className="space-y-10">
            <section>
              <h2 className="text-xl font-semibold text-brand-trust mb-4">
                1. Information We Collect
              </h2>
              <p className="text-body-lg text-gray-600 leading-relaxed">
                We collect information you provide directly to us, including name,
                email, and organisation details.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-brand-trust mb-4">
                2. How We Use Information
              </h2>
              <p className="text-body-lg text-gray-600 leading-relaxed">
                We use the information to provide and improve ElevestOS services for
                NGOs and funders.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-brand-trust mb-4">
                3. Data Security
              </h2>
              <p className="text-body-lg text-gray-600 leading-relaxed">
                We implement appropriate security measures to protect your personal
                information.
              </p>
            </section>
          </div>
        </div>
      </main>
      <PublicFooter />
    </>
  );
}
