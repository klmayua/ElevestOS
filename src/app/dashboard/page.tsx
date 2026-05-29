import { getCurrentUser } from "@/features/auth/auth.actions";
import { redirect } from "next/navigation";
import Link from "next/link";
import { prisma } from "@/lib/db";
import { Badge } from "@/components/ui/badge";
import { OrgHealthChart } from "@/components/charts/org-health-chart";
import { ArrowUpRight, Plus, FileText, Search, GraduationCap } from "lucide-react";

export default async function DashboardPage() {
  const user = await getCurrentUser();

  if (!user) {
    redirect("/auth/login");
  }

  // Get stats (in production, use proper queries with date ranges)
  const [grantCount, projectCount, applicationCount] = await Promise.all([
    prisma.grant.count({
      where: { status: "PUBLISHED" },
    }),
    prisma.project.count({
      where: { organisationId: user.organisationId || undefined },
    }),
    prisma.grantApplication.count({
      where: { applicantId: user.id },
    }),
  ]);

  // Get recent grants
  const recentGrants = await prisma.grant.findMany({
    where: { status: "PUBLISHED" },
    orderBy: { createdAt: "desc" },
    take: 5,
    select: {
      id: true,
      title: true,
      funderName: true,
      deadline: true,
      amountMax: true,
      currency: true,
    },
  });

  return (
    <div className="space-y-10">
      {/* Welcome Section */}
      <div>
        <h1 className="font-heading text-3xl font-bold tracking-tight text-text-primary">
          Operational Overview
        </h1>
        <p className="text-sm text-text-secondary mt-1">
          Strategic insights and real-time operational awareness for {user.organisation?.name || "your organisation"}.
        </p>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {[
          { label: "Active Grants", value: grantCount, color: "text-brand-trust" },
          { label: "Portfolio Projects", value: projectCount, color: "text-brand-operational" },
          { label: "Pending Submissions", value: applicationCount, color: "text-brand-governance" },
          { label: "Compliance Score", value: "98%", color: "text-brand-operational" },
        ].map((stat, i) => (
          <div key={i} className="bg-surface p-5 rounded border border-surface-secondary shadow-executive shadow-inner-glow">
            <p className="text-[10px] uppercase tracking-wider text-text-muted font-bold">{stat.label}</p>
            <p className={`text-2xl font-data font-bold mt-2 ${stat.color}`}>{stat.value}</p>
          </div>
        ))}
      </div>

      {/* Main Content Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        {/* Institutional Health */}
        <div className="lg:col-span-8 space-y-6">
          <div className="bg-surface-secondary/30 p-6 rounded border border-surface-secondary">
            <div className="flex items-center justify-between">
              <h3 className="font-heading text-sm font-bold text-text-primary">Institutional Readiness Score</h3>
              <span className="text-xs text-brand-operational font-data font-medium flex items-center gap-1">
                <ArrowUpRight className="h-3 w-3" /> +4.2% from last month
              </span>
            </div>
            <OrgHealthChart />
          </div>

          <div className="bg-surface p-6 rounded border border-surface-secondary">
            <div className="flex items-center justify-between mb-6">
              <h2 className="font-heading text-sm font-bold text-text-primary">
                Recent Pipeline Opportunities
              </h2>
              <Link href="/dashboard/grants" className="text-[10px] uppercase tracking-widest text-brand-trust font-bold hover:text-blue-400 transition-colors">
                Terminal View
              </Link>
            </div>
            <div className="space-y-2">
              {recentGrants.length === 0 ? (
                <p className="text-xs text-text-muted text-center py-8">
                  No grants available yet.
                </p>
              ) : (
                recentGrants.map((grant) => (
                  <div
                    key={grant.id}
                    className="flex items-center justify-between p-3 rounded bg-background/40 border border-surface-secondary/50 hover:bg-surface-secondary/50 transition-colors group cursor-pointer"
                  >
                    <div className="flex-1">
                      <h3 className="text-xs font-bold text-text-primary group-hover:text-brand-trust transition-colors">
                        {grant.title}
                      </h3>
                      <p className="text-[10px] text-text-muted mt-0.5">
                        {grant.funderName}
                      </p>
                    </div>
                    <div className="text-right">
                      <p className="text-xs font-data font-bold text-text-primary">
                        {grant.currency} {grant.amountMax?.toLocaleString() || "N/A"}
                      </p>
                      <p className="text-[10px] text-text-muted">
                        {new Date(grant.deadline).toLocaleDateString("en-GB")}
                      </p>
                    </div>
                  </div>
                ))
              )}
            </div>
          </div>
        </div>

        {/* Quick Actions */}
        <div className="lg:col-span-4 space-y-6">
          <div className="bg-surface p-6 rounded border border-surface-secondary shadow-executive">
            <h2 className="font-heading text-sm font-bold text-text-primary mb-6">
              Terminal Actions
            </h2>
            <div className="space-y-3">
              {[
                { href: "/dashboard/grants?tab=matching", icon: Search, label: "Fit Scoring", desc: "Institutional grant matching", color: "text-brand-trust" },
                { href: "/dashboard/projects/new", icon: Plus, label: "Execution Setup", desc: "Initialize new project workflow", color: "text-brand-operational" },
                { href: "/dashboard/reports", icon: FileText, label: "Audit Draft", desc: "Generate compliance evidence", color: "text-brand-governance" },
                { href: "/dashboard/training", icon: GraduationCap, label: "LMS Terminal", desc: "Access capacity resources", color: "text-brand-trust" },
              ].map((action, i) => (
                <Link
                  key={i}
                  href={action.href}
                  className="flex items-center gap-4 p-3 rounded bg-background/50 border border-surface-secondary/30 hover:border-surface-secondary hover:bg-surface-secondary/20 transition-all group"
                >
                  <div className={`w-8 h-8 rounded flex items-center justify-center bg-background border border-surface-secondary group-hover:border-text-muted transition-colors ${action.color}`}>
                    <action.icon className="h-4 w-4" />
                  </div>
                  <div>
                    <p className="text-[11px] font-bold text-text-primary uppercase tracking-wider">{action.label}</p>
                    <p className="text-[10px] text-text-muted">{action.desc}</p>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
