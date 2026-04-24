export default function PrivacyPage() {
  return (
    <div className="min-h-screen bg-background flex items-center justify-center">
      <div className="max-w-2xl mx-auto p-8">
        <h1 className="text-3xl font-bold text-primary mb-6">Privacy Policy</h1>
        <div className="prose prose-sm">
          <p className="text-gray-600 mb-4">Last updated: January 2026</p>
          
          <h2 className="text-xl font-semibold text-primary mt-6 mb-3">1. Information We Collect</h2>
          <p className="text-gray-600 mb-4">
            We collect information you provide directly to us, including name, email, and organisation details.
          </p>
          
          <h2 className="text-xl font-semibold text-primary mt-6 mb-3">2. How We Use Information</h2>
          <p className="text-gray-600 mb-4">
            We use the information to provide and improve ElevestOS services for NGOs and funders.
          </p>
          
          <h2 className="text-xl font-semibold text-primary mt-6 mb-3">3. Data Security</h2>
          <p className="text-gray-600 mb-4">
            We implement appropriate security measures to protect your personal information.
          </p>
        </div>
      </div>
    </div>
  );
}