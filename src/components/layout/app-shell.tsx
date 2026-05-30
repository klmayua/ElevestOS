"use client";

import React from "react";
import { cn } from "@/lib/utils";

interface AppShellProps {
  children: React.ReactNode;
  sidebar: React.ReactNode;
  topNav: React.ReactNode;
  className?: string;
}

export function AppShell({ children, sidebar, topNav, className }: AppShellProps) {
  return (
    <div className={cn("flex h-screen bg-background overflow-hidden", className)}>
      <aside className="w-64 fixed left-0 top-0 bottom-0 z-30">
        {sidebar}
      </aside>

      <div className="flex-1 ml-64 flex flex-col min-h-screen">
        <header className="h-16 fixed top-0 right-0 left-64 z-20">
          {topNav}
        </header>

        <main className="flex-1 mt-16 overflow-y-auto">
          <div className="p-[40px] max-w-[1440px] mx-auto">
            {children}
          </div>
        </main>
      </div>
    </div>
  );
}

export default AppShell;
