export default function TermsPage() {
  return (
    <div className="min-h-screen bg-background flex items-center justify-center">
      <div className="max-w-2xl mx-auto p-8">
        <h1 className="text-3xl font-bold text-primary mb-6">Terms of Service</h1>
        <div className="prose prose-sm">
          <p className="text-gray-600 mb-4">Last updated: January 2026</p>
          
          <h2 className="text-xl font-semibold text-primary mt-6 mb-3">1. Acceptance of Terms</h2>
          <p className="text-gray-600 mb-4">
            By accessing and using ElevestOS, you accept and agree to be bound by the terms and provision of this agreement.
          </p>
          
          <h2 className="text-xl font-semibold text-primary mt-6 mb-3">2. Use License</h2>
          <p className="text-gray-600 mb-4">
            Permission is granted to use ElevestOS for NGO operational purposes, subject to these terms.
          </p>
          
          <h2 className="text-xl font-semibold text-primary mt-6 mb-3">3. Disclaimer</h2>
          <p className="text-gray-600 mb-4">
            ElevestOS is provided "as is" without warranty of any kind.
          </p>
        </div>
      </div>
    </div>
  );
}