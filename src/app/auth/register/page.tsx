import Link from "next/link";
import { registerAction } from "@/features/auth/auth.actions";

export default function RegisterPage() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-surface-container-low py-12">
      <div className="w-full max-w-md">
        {/* Logo */}
        <div className="text-center mb-8">
          <h1 className="text-headline-lg font-headline-lg font-bold text-primary">
            ElevestOS
          </h1>
          <p className="text-body-md text-on-surface-variant mt-2">
            Create your account
          </p>
        </div>

        {/* Register Card */}
        <div className="card">
          <div className="card-body">
            <form action={registerAction} className="space-y-5">
              {/* Name Fields */}
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label htmlFor="firstName" className="block text-label-md text-on-surface mb-2">
                    First Name
                  </label>
                  <input
                    type="text"
                    id="firstName"
                    name="firstName"
                    required
                    className="w-full px-4 py-3 rounded border border-input bg-surface-container-lowest text-foreground focus:outline-none focus:ring-2 focus:ring-secondary focus:border-transparent transition-all"
                    placeholder="John"
                  />
                </div>
                <div>
                  <label htmlFor="lastName" className="block text-label-md text-on-surface mb-2">
                    Last Name
                  </label>
                  <input
                    type="text"
                    id="lastName"
                    name="lastName"
                    required
                    className="w-full px-4 py-3 rounded border border-input bg-surface-container-lowest text-foreground focus:outline-none focus:ring-2 focus:ring-secondary focus:border-transparent transition-all"
                    placeholder="Doe"
                  />
                </div>
              </div>

              {/* Email */}
              <div>
                <label htmlFor="email" className="block text-label-md text-on-surface mb-2">
                  Email Address
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  className="w-full px-4 py-3 rounded border border-input bg-surface-container-lowest text-foreground focus:outline-none focus:ring-2 focus:ring-secondary focus:border-transparent transition-all"
                  placeholder="you@organisation.org"
                />
              </div>

              {/* Password */}
              <div>
                <label htmlFor="password" className="block text-label-md text-on-surface mb-2">
                  Password
                </label>
                <input
                  type="password"
                  id="password"
                  name="password"
                  required
                  className="w-full px-4 py-3 rounded border border-input bg-surface-container-lowest text-foreground focus:outline-none focus:ring-2 focus:ring-secondary focus:border-transparent transition-all"
                  placeholder="••••••••"
                />
                <p className="text-body-md text-on-surface-variant mt-1">
                  Min 8 characters with uppercase, lowercase, and number
                </p>
              </div>

              {/* Role Selection */}
              <div>
                <label htmlFor="role" className="block text-label-md text-on-surface mb-2">
                  I am a
                </label>
                <select
                  id="role"
                  name="role"
                  className="w-full px-4 py-3 rounded border border-input bg-surface-container-lowest text-foreground focus:outline-none focus:ring-2 focus:ring-secondary focus:border-transparent transition-all"
                >
                  <option value="USER">NGO Team Member</option>
                  <option value="ORG_ADMIN">NGO Administrator</option>
                  <option value="FUNDER">Funder / Government</option>
                </select>
              </div>

              {/* Organisation Name (optional for now) */}
              <div>
                <label htmlFor="organisationName" className="block text-label-md text-on-surface mb-2">
                  Organisation Name <span className="text-on-surface-variant/70">(Optional)</span>
                </label>
                <input
                  type="text"
                  id="organisationName"
                  name="organisationName"
                  className="w-full px-4 py-3 rounded border border-input bg-surface-container-lowest text-foreground focus:outline-none focus:ring-2 focus:ring-secondary focus:border-transparent transition-all"
                  placeholder="Your NGO Name"
                />
              </div>

              {/* Terms */}
              <div className="flex items-start">
                <input
                  type="checkbox"
                  id="terms"
                  name="terms"
                  required
                  className="w-4 h-4 mt-0.5 rounded border-outline-variant text-secondary focus:ring-secondary"
                />
                <label htmlFor="terms" className="ml-2 text-body-md text-on-surface-variant">
                  I agree to the{" "}
                  <Link href="/terms" className="text-secondary hover:underline">
                    Terms of Service
                  </Link>{" "}
                  and{" "}
                  <Link href="/privacy" className="text-secondary hover:underline">
                    Privacy Policy
                  </Link>
                </label>
              </div>

              {/* Submit */}
              <button
                type="submit"
                className="w-full btn-primary py-3"
              >
                Create Account
              </button>
            </form>

            {/* Divider */}
            <div className="relative my-6">
              <div className="absolute inset-0 flex items-center">
                <div className="w-full border-t border-border"></div>
              </div>
              <div className="relative flex justify-center text-sm">
                <span className="px-4 bg-surface-container-lowest text-on-surface-variant">
                  Already have an account?
                </span>
              </div>
            </div>

            {/* Login Link */}
            <Link
              href="/auth/login"
              className="block w-full text-center btn-secondary py-3"
            >
              Sign In
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
