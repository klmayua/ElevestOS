import { getCurrentUser } from "@/features/auth/auth.actions";
import React from "react";
import { Sidebar } from "@/components/layout/sidebar";
import { redirect } from "next/navigation";

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
    <div className="flex h-screen bg-background overflow-hidden font-body text-text-primary">
      {/* Persistent Institutional Sidebar */}
      <Sidebar user={user} />

      {/* Main Content Area */}
      <main className="flex-1 flex flex-col relative overflow-y-auto outline-none">
        {/* Subtle background glow for depth */}
        <div className="absolute top-0 left-0 w-full h-full pointer-events-none bg-[radial-gradient(circle_at_top_right,rgba(59,130,246,0.03),transparent_40%)]" />
        
        <header className="h-14 border-b border-surface-secondary flex items-center px-8 bg-background/50 backdrop-blur-sm sticky top-0 z-10 shrink-0">
          <div className="flex-1 flex items-center text-[10px] uppercase tracking-widest text-text-muted space-x-2">
            <span className="hover:text-text-secondary cursor-default transition-colors">ElevestOS</span>
            <span>/</span>
            <span className="text-brand-trust font-bold">Dashboard</span>
          </div>
        </header>

        <div className="p-8 max-w-[1400px] w-full mx-auto flex-1">
          {children}
        </div>
      </main>
    </div>
  );
}
