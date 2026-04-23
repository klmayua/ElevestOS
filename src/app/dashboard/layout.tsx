import { getCurrentUser, logoutAction } from "@/features/auth/auth.actions";
import { redirect } from "next/navigation";
import Link from "next/link";

export default async function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const user = await getCurrentUser();

  if (!user) {
    redirect("/auth/login");
  }

  return (
    <div className="min-h-screen bg-background">
      {/* Top Navigation */}
      <header className="sticky top-0 z-50 border-b border-border bg-surface-container-lowest/80 backdrop-blur-md">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <Link href="/dashboard" className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-md bg-secondary flex items-center justify-center">
                <span className="text-white font-bold text-lg">E</span>
              </div>
              <span className="font-heading font-bold text-xl text-primary">
                ElevestOS
              </span>
            </Link>

            {/* Navigation */}
            <nav className="hidden md:flex items-center gap-6">
              <Link
                href="/dashboard"
                className="text-body-sm font-medium text-gray-600 hover:text-primary transition-colors"
              >
                Overview
              </Link>
              <Link
                href="/dashboard/grants"
                className="text-body-sm font-medium text-gray-600 hover:text-primary transition-colors"
              >
                Grants
              </Link>
              <Link
                href="/dashboard/projects"
                className="text-body-sm font-medium text-gray-600 hover:text-primary transition-colors"
              >
                Projects
              </Link>
              <Link
                href="/dashboard/reports"
                className="text-body-sm font-medium text-gray-600 hover:text-primary transition-colors"
              >
                Reports
              </Link>
              <Link
                href="/dashboard/training"
                className="text-body-sm font-medium text-gray-600 hover:text-primary transition-colors"
              >
                Training
              </Link>
              <Link
                href="/dashboard/settings"
                className="text-body-sm font-medium text-gray-600 hover:text-primary transition-colors"
              >
                Settings
              </Link>
              <Link
                href="/dashboard/organisation"
                className="text-body-sm font-medium text-gray-600 hover:text-primary transition-colors"
              >
                Organisation
              </Link>
            </nav>

            {/* User Menu */}
            <div className="flex items-center gap-4">
              {/* Notifications */}
              <button className="relative p-2 text-gray-600 hover:text-primary transition-colors">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
                </svg>
                <span className="absolute top-1 right-1 w-2 h-2 bg-error rounded-full"></span>
              </button>

              {/* User Avatar */}
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center">
                  <span className="text-primary font-semibold text-sm">
                    {user.firstName.charAt(0)}{user.lastName.charAt(0)}
                  </span>
                </div>
                <div className="hidden lg:block">
                  <p className="text-body-sm font-medium text-primary">
                    {user.firstName} {user.lastName}
                  </p>
                  <p className="text-body-xs text-gray-500">
                    {user.organisation?.name || "Unassigned"}
                  </p>
                </div>
              </div>

              {/* Logout */}
              <form action={logoutAction}>
                <button
                  type="submit"
                  className="p-2 text-gray-600 hover:text-error transition-colors"
                  title="Sign out"
                >
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1" />
                  </svg>
                </button>
              </form>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="container mx-auto px-4 py-8">
        {children}
      </main>
    </div>
  );
}
