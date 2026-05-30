import Link from "next/link";
import { loginAction } from "@/features/auth/auth.actions";

export default function LoginPage() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-surface-container-low to-background">
      <div className="w-full max-w-md">
        {/* Logo */}
        <div className="text-center mb-8">
          <h1 className="text-display-md font-heading font-bold text-primary">
            ElevestOS
          </h1>
          <p className="text-body-md text-gray-600 mt-2">
            Sign in to your account
          </p>
        </div>

        {/* Login Card */}
        <div className="card">
          <div className="card-body">
            <form action={loginAction} className="space-y-6">
              {/* Email */}
              <div>
                <label htmlFor="email" className="block text-label-md text-gray-700 mb-2">
                  Email Address
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  className="w-full px-4 py-3 rounded-md border border-input bg-surface-container-lowest text-foreground focus:outline-none focus:ring-2 focus:ring-secondary focus:border-transparent transition-all"
                  placeholder="you@organisation.org"
                />
              </div>

              {/* Password */}
              <div>
                <label htmlFor="password" className="block text-label-md text-gray-700 mb-2">
                  Password
                </label>
                <input
                  type="password"
                  id="password"
                  name="password"
                  required
                  className="w-full px-4 py-3 rounded-md border border-input bg-surface-container-lowest text-foreground focus:outline-none focus:ring-2 focus:ring-secondary focus:border-transparent transition-all"
                  placeholder="••••••••"
                />
              </div>

              {/* Remember & Forgot */}
              <div className="flex items-center justify-between">
                <label className="flex items-center">
                  <input
                    type="checkbox"
                    name="remember"
                    className="w-4 h-4 rounded border-gray-300 text-secondary focus:ring-secondary"
                  />
                  <span className="ml-2 text-body-sm text-gray-600">Remember me</span>
                </label>
                <Link
                  href="/auth/forgot-password"
                  className="text-body-sm text-secondary hover:text-secondary/80 transition-colors"
                >
                  Forgot password?
                </Link>
              </div>

              {/* Submit */}
              <button
                type="submit"
                className="w-full btn-primary py-3"
              >
                Sign In
              </button>
            </form>

            {/* Divider */}
            <div className="relative my-6">
              <div className="absolute inset-0 flex items-center">
                <div className="w-full border-t border-border"></div>
              </div>
              <div className="relative flex justify-center text-sm">
                <span className="px-4 bg-surface-container-lowest text-gray-500">
                  Don't have an account?
                </span>
              </div>
            </div>

            {/* Register Link */}
            <Link
              href="/auth/register"
              className="block w-full text-center btn-secondary py-3"
            >
              Create Account
            </Link>
          </div>
        </div>

        {/* Footer */}
        <p className="text-center text-body-sm text-gray-600 mt-6">
          By signing in, you agree to our{" "}
          <Link href="/terms" className="text-secondary hover:underline">
            Terms of Service
          </Link>{" "}
          and{" "}
          <Link href="/privacy" className="text-secondary hover:underline">
            Privacy Policy
          </Link>
        </p>
      </div>
    </div>
  );
}
