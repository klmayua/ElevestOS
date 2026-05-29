"use client";

import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  LayoutDashboard,
  FileText,
  Folders,
  ClipboardCheck,
  BarChart3,
  Building2,
  Settings,
  GraduationCap,
  LogOut,
} from "lucide-react";

interface SidebarProps {
  user: {
    id: string;
    email: string;
    firstName: string;
    lastName: string;
    role: string;
    organisation?: {
      name: string;
    } | null;
  };
}

const navigation = [
  {
    section: "Main",
    items: [
      {
        name: "Overview",
        href: "/dashboard",
        icon: LayoutDashboard,
      },
      {
        name: "Grants",
        href: "/dashboard/grants",
        icon: FileText,
      },
      {
        name: "Applications",
        href: "/dashboard/applications",
        icon: ClipboardCheck,
      },
      {
        name: "Projects",
        href: "/dashboard/projects",
        icon: Folders,
      },
    ],
  },
  {
    section: "Operations",
    items: [
      {
        name: "Reports",
        href: "/dashboard/reports",
        icon: BarChart3,
      },
      {
        name: "Training",
        href: "/dashboard/training",
        icon: GraduationCap,
      },
      {
        name: "Organisation",
        href: "/dashboard/organisation",
        icon: Building2,
      },
      {
        name: "Settings",
        href: "/dashboard/settings",
        icon: Settings,
      },
    ],
  },
];

export function Sidebar({ user }: SidebarProps) {
  const pathname = usePathname();

  return (
    <aside className="w-60 h-screen flex flex-col bg-background-secondary border-r border-surface-secondary shrink-0">
      <div className="h-14 flex items-center px-5 border-b border-surface-secondary shrink-0">
        <div className="flex items-center gap-2.5">
          <div className="w-7 h-7 rounded-sm bg-brand-trust flex items-center justify-center">
            <span className="text-[10px] font-bold text-white font-data">E</span>
          </div>
          <div>
            <p className="text-xs font-heading font-bold text-text-primary tracking-tight">
              ElevestOS
            </p>
            <p className="text-[9px] text-text-muted">v0.1.0</p>
          </div>
        </div>
      </div>

      <div className="flex-1 overflow-y-auto py-4 px-3 space-y-6">
        {navigation.map((section) => (
          <div key={section.section}>
            <p className="text-[9px] uppercase tracking-widest text-text-muted font-bold mb-3 px-3">
              {section.section}
            </p>
            <nav className="space-y-0.5">
              {section.items.map((item) => {
                const isActive = pathname === item.href || pathname.startsWith(item.href + "/");
                return (
                  <Link
                    key={item.name}
                    href={item.href}
                    className={`flex items-center gap-3 px-3 py-2 rounded text-xs font-medium transition-colors ${
                      isActive
                        ? "bg-surface text-brand-trust"
                        : "text-text-secondary hover:text-text-primary hover:bg-surface/50"
                    }`}
                  >
                    <item.icon className="h-4 w-4" />
                    {item.name}
                  </Link>
                );
              })}
            </nav>
          </div>
        ))}
      </div>

      <div className="p-3 border-t border-surface-secondary">
        <div className="flex items-center gap-3 px-3 py-2 rounded bg-surface/50">
          <div className="w-7 h-7 rounded-full bg-brand-operational flex items-center justify-center shrink-0">
            <span className="text-[9px] font-bold text-white">
              {user.firstName?.[0]}{user.lastName?.[0]}
            </span>
          </div>
          <div className="flex-1 min-w-0">
            <p className="text-[11px] font-medium text-text-primary truncate">
              {user.firstName} {user.lastName}
            </p>
            <p className="text-[9px] text-text-muted truncate">{user.email}</p>
          </div>
          <Link
            href="/auth/login"
            className="text-text-muted hover:text-text-primary transition-colors"
          >
            <LogOut className="h-3.5 w-3.5" />
          </Link>
        </div>
      </div>
    </aside>
  );
}
