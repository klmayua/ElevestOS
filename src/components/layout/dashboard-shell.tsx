"use client";

import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  LayoutDashboard,
  Landmark,
  GitBranch,
  BarChart3,
  Archive,
  FlaskConical,
  PlusCircle,
  HelpCircle,
  Settings,
  Search,
  Bell,
  History,
  Building2,
} from "lucide-react";

interface DashboardShellProps {
  user?: {
    firstName?: string;
    lastName?: string;
    email?: string;
    organisation?: { name?: string } | null;
  } | null;
  children: React.ReactNode;
}

const navItems = [
  { href: "/dashboard", icon: LayoutDashboard, label: "Dashboard" },
  { href: "/dashboard/grants", icon: Landmark, label: "Grants" },
  { href: "/dashboard/projects", icon: GitBranch, label: "Projects" },
  { href: "/dashboard/reports", icon: BarChart3, label: "Reports" },
  { href: "/dashboard/compliance", icon: Archive, label: "Vault" },
  { href: "/dashboard/training", icon: FlaskConical, label: "Labs" },
];

export function DashboardShell({ user, children }: DashboardShellProps) {
  const pathname = usePathname();
  const initials = user
    ? `${user.firstName?.[0] || ""}${user.lastName?.[0] || ""}`
    : "AD";

  return (
    <div className="flex h-screen overflow-hidden bg-background text-on-surface font-body-md">
      {/* SIDE NAV BAR — Exact Stitch HTML structure */}
      <aside className="fixed left-0 top-0 h-full w-64 bg-surface-container-lowest border-r border-outline-variant flex flex-col py-md z-50">
        <div className="px-md mb-xl">
          <div className="flex items-center gap-sm">
            <div className="w-8 h-8 bg-primary rounded flex items-center justify-center">
              <Building2 className="text-on-primary h-5 w-5" />
            </div>
            <div>
              <h1 className="font-headline-md text-[18px] font-bold text-primary leading-tight">
                ElevestOS
              </h1>
              <p className="text-[10px] uppercase tracking-widest text-on-primary-container font-bold">
                Infrastructure Grade
              </p>
            </div>
          </div>
        </div>

        <nav className="flex-1 space-y-1 px-sm">
          {navItems.map((item) => {
            const isActive =
              pathname === item.href || pathname.startsWith(item.href + "/");
            return (
              <Link
                key={item.href}
                href={item.href}
                className={`flex items-center gap-md px-md py-sm transition-colors ${
                  isActive
                    ? "text-primary font-bold border-r-4 border-primary bg-surface-container"
                    : "text-on-surface-variant hover:bg-surface-container-high"
                }`}
              >
                <item.icon className="h-5 w-5" />
                <span className="font-body-md">{item.label}</span>
              </Link>
            );
          })}
        </nav>

        <div className="mt-auto px-md py-md border-t border-outline-variant">
          <button className="w-full bg-primary text-on-primary py-sm rounded font-bold text-[14px] mb-lg hover:opacity-90 active:scale-95 transition-all flex items-center justify-center gap-sm">
            <PlusCircle className="h-4 w-4" />
            New Initiative
          </button>
          <div className="space-y-1">
            <Link
              href="#"
              className="flex items-center py-xs text-on-surface-variant hover:text-primary transition-colors"
            >
              <HelpCircle className="h-5 w-5 mr-md" />
              <span className="font-body-md">Support</span>
            </Link>
            <Link
              href="/dashboard/settings"
              className="flex items-center py-xs text-on-surface-variant hover:text-primary transition-colors"
            >
              <Settings className="h-5 w-5 mr-md" />
              <span className="font-body-md">Settings</span>
            </Link>
          </div>
        </div>
      </aside>

      {/* TOP NAV BAR */}
      <header className="fixed top-0 right-0 w-[calc(100%-16rem)] h-16 bg-surface border-b border-outline-variant flex justify-between items-center px-margin-desktop z-40">
        <div className="flex items-center gap-xl flex-1">
          <div className="relative w-full max-w-md">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-on-surface-variant h-4 w-4" />
            <input
              className="w-full bg-surface-container-low border border-outline-variant rounded py-2 pl-10 pr-4 text-body-md focus:ring-2 focus:ring-primary focus:ring-offset-2 outline-none"
              placeholder="Search institutional grants..."
              type="text"
            />
          </div>
        </div>
        <div className="flex items-center gap-lg">
          <button className="bg-primary-container text-on-primary-container px-md py-sm rounded font-label-md text-label-md hover:opacity-80 transition-opacity">
            COMPLIANCE CHECK
          </button>
          <div className="flex items-center gap-md border-l border-outline-variant pl-lg">
            <button className="text-on-surface-variant hover:text-primary relative">
              <Bell className="h-5 w-5" />
              <span className="absolute top-0 right-0 w-2 h-2 bg-error rounded-full" />
            </button>
            <button className="text-on-surface-variant hover:text-primary">
              <History className="h-5 w-5" />
            </button>
            <div className="flex items-center gap-sm cursor-pointer group">
              <div className="w-8 h-8 rounded-full bg-primary-container flex items-center justify-center border border-outline-variant overflow-hidden">
                <span className="text-on-primary text-[12px] font-bold">
                  {initials}
                </span>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* MAIN CONTENT AREA */}
      <main className="ml-64 mt-16 p-margin-desktop flex-1 overflow-y-auto">
        {children}
      </main>
    </div>
  );
}
