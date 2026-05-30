"use client";

import React, { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  LayoutDashboard,
  FileText,
  ClipboardCheck,
  Folders,
  BarChart3,
  GraduationCap,
  Building2,
  Settings,
  Search,
  Bell,
  LogOut,
  ChevronDown,
} from "lucide-react";
import { cn } from "@/lib/utils";

interface DashboardShellUser {
  firstName: string;
  lastName: string;
  email: string;
  organisation?: string;
}

interface DashboardShellProps {
  children: React.ReactNode;
  user: DashboardShellUser;
}

const navigation = [
  {
    section: "Main",
    items: [
      { name: "Overview", href: "/dashboard", icon: LayoutDashboard },
      { name: "Grants", href: "/dashboard/grants", icon: FileText },
      { name: "Applications", href: "/dashboard/applications", icon: ClipboardCheck },
      { name: "Projects", href: "/dashboard/projects", icon: Folders },
    ],
  },
  {
    section: "Operations",
    items: [
      { name: "Reports", href: "/dashboard/reports", icon: BarChart3 },
      { name: "Training", href: "/dashboard/training", icon: GraduationCap },
      { name: "Organisation", href: "/dashboard/organisation", icon: Building2 },
      { name: "Settings", href: "/dashboard/settings", icon: Settings },
    ],
  },
];

function SidebarContent({ user }: { user: DashboardShellUser }) {
  const pathname = usePathname();
  const initials = `${user.firstName?.[0] ?? ""}${user.lastName?.[0] ?? ""}`.toUpperCase();

  const isActive = (href: string) =>
    pathname === href || pathname.startsWith(href + "/");

  return (
    <div className="h-full bg-white border-r border-border flex flex-col">
      <div className="h-14 flex items-center px-5 border-b border-border shrink-0">
        <Link href="/" className="flex items-center gap-2.5">
          <div className="w-7 h-7 rounded-sm bg-brand-trust flex items-center justify-center">
            <span className="text-[10px] font-bold text-white">E</span>
          </div>
          <div>
            <p className="text-xs font-heading font-bold text-primary tracking-tight">
              ElevestOS
            </p>
            <p className="text-[9px] text-text-muted tracking-wide">v0.1.0</p>
          </div>
        </Link>
      </div>

      <div className="flex-1 overflow-y-auto py-4 px-3 space-y-6 scrollbar-thin">
        {navigation.map((section) => (
          <div key={section.section}>
            <p className="text-[9px] uppercase tracking-widest text-text-muted font-medium mb-3 px-3">
              {section.section}
            </p>
            <nav className="space-y-0.5">
              {section.items.map((item) => {
                const active = isActive(item.href);
                return (
                  <Link
                    key={item.name}
                    href={item.href}
                    className={cn(
                      "flex items-center gap-3 px-3 py-2 rounded text-xs font-medium transition-all duration-150",
                      active
                        ? "border-r-[3px] border-brand-trust bg-brand-trust/5 text-primary"
                        : "border-r-[3px] border-transparent text-text-secondary hover:text-text-primary hover:bg-hover"
                    )}
                  >
                    <item.icon className={cn("h-4 w-4", active && "text-brand-trust")} />
                    {item.name}
                  </Link>
                );
              })}
            </nav>
          </div>
        ))}
      </div>

      <div className="p-3 border-t border-border">
        <div className="flex items-center gap-3 px-3 py-2 rounded bg-surface-container-low">
          <div className="w-7 h-7 rounded-full bg-primary flex items-center justify-center shrink-0">
            <span className="text-[9px] font-bold text-primary-on tracking-tight">
              {initials}
            </span>
          </div>
          <div className="flex-1 min-w-0">
            <p className="text-[11px] font-medium text-text-primary truncate leading-tight">
              {user.firstName} {user.lastName}
            </p>
            <p className="text-[9px] text-text-muted truncate leading-tight">{user.email}</p>
          </div>
          <Link
            href="/auth/login"
            className="text-text-muted hover:text-text-primary transition-colors p-0.5"
            aria-label="Sign out"
          >
            <LogOut className="h-3.5 w-3.5" />
          </Link>
        </div>
      </div>
    </div>
  );
}

function TopNavContent({ user }: { user: DashboardShellUser }) {
  return (
    <div className="h-full bg-background/80 backdrop-blur-xl border-b border-border flex items-center justify-between px-8">
      <div className="flex items-center gap-6">
        <div className="relative">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-3.5 w-3.5 text-text-muted pointer-events-none" />
          <input
            type="text"
            placeholder="Search grants, projects, reports..."
            className="w-72 h-9 pl-9 pr-3 text-xs bg-white border border-border rounded-md text-text-primary placeholder:text-text-muted focus:outline-none focus:ring-1 focus:ring-ring focus:border-ring transition-shadow"
          />
        </div>
      </div>

      <div className="flex items-center gap-1">
        <button
          className="relative p-2 text-text-muted hover:text-text-primary hover:bg-hover rounded-md transition-colors"
          aria-label="Notifications"
        >
          <Bell className="h-4 w-4" />
          <span className="absolute top-1.5 right-1.5 w-2 h-2 rounded-full bg-brand-trust ring-2 ring-background" />
        </button>

        <div className="flex items-center gap-2 pl-3 ml-1 border-l border-border">
          <div className="w-7 h-7 rounded-full bg-primary flex items-center justify-center shrink-0">
            <span className="text-[9px] font-bold text-primary-on">
              {user.firstName?.[0]}{user.lastName?.[0]}
            </span>
          </div>
          <div className="hidden sm:block">
            <p className="text-[11px] font-medium text-text-primary leading-tight">
              {user.firstName} {user.lastName}
            </p>
            <p className="text-[9px] text-text-muted leading-tight">
              {user.organisation ?? "ElevestOS"}
            </p>
          </div>
          <ChevronDown className="h-3 w-3 text-text-muted" />
        </div>
      </div>
    </div>
  );
}

export function DashboardShell({ children, user }: DashboardShellProps) {
  return (
    <div className="flex h-screen bg-background overflow-hidden">
      <aside className="w-64 fixed left-0 top-0 bottom-0 z-30">
        <SidebarContent user={user} />
      </aside>

      <div className="flex-1 ml-64 flex flex-col min-h-screen">
        <header className="h-16 fixed top-0 right-0 left-64 z-20">
          <TopNavContent user={user} />
        </header>

        <main className="flex-1 mt-16 overflow-y-auto">
          <div className="relative min-h-full">
            <div className="absolute top-0 left-0 w-full h-full pointer-events-none bg-[radial-gradient(circle_at_top_right,rgba(13,28,50,0.02),transparent_50%)]" />
            <div className="relative p-[40px] max-w-[1440px] mx-auto">
              {children}
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}

export default DashboardShell;
