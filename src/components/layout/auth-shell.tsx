"use client";

import React from "react";
import Link from "next/link";
import { Building2 } from "lucide-react";

interface AuthShellProps {
  children: React.ReactNode;
  title?: string;
}

export function AuthShell({ children, title }: AuthShellProps) {
  return (
    <>
      {/* Fixed Top Nav */}
      <nav className="fixed top-0 right-0 w-full h-16 bg-surface border-b border-outline-variant flex justify-between items-center px-margin-desktop z-50">
        <div className="flex items-center gap-sm">
          <div className="w-8 h-8 bg-primary rounded flex items-center justify-center">
            <Building2 className="text-on-primary h-5 w-5" />
          </div>
          <div>
            <h1 className="font-headline-md text-headline-md text-primary font-bold leading-tight">
              ElevestOS
            </h1>
            <p className="text-[10px] uppercase tracking-widest text-on-primary-container font-label-md">
              Infrastructure Grade
            </p>
          </div>
        </div>
        <Link
          href="/auth/login"
          className="font-label-md text-label-md px-lg py-sm border border-outline hover:bg-surface-container-low transition-colors"
        >
          Institutional Login
        </Link>
      </nav>

      {/* Left Branding Panel — Desktop */}
      <aside
        className="hidden md:flex fixed left-0 top-0 h-full w-64 flex-col items-center justify-center z-40 bg-tertiary-container overflow-hidden"
        style={{
          backgroundImage:
            "radial-gradient(#39475f 0.5px, transparent 0.5px)",
          backgroundSize: "24px 24px",
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-tertiary-container/90 via-transparent to-tertiary-container/90" />
        <div className="relative z-10 text-center px-lg">
          <div className="w-14 h-14 bg-primary rounded flex items-center justify-center mx-auto mb-lg">
            <Building2 className="text-on-primary h-7 w-7" />
          </div>
          <h2 className="font-headline-lg text-headline-lg text-white mb-md">
            ElevestOS
          </h2>
          <p className="font-label-md text-label-md text-on-tertiary-container uppercase tracking-widest mb-xl">
            Infrastructure Grade
          </p>
          <p className="font-body-md text-body-md text-on-primary-container/60 leading-relaxed">
            Institutional-grade resource planning, project management, and
            verified reporting for high-stakes global initiatives.
          </p>
        </div>
      </aside>

      {/* Main Content Area */}
      <main className="md:ml-64 pt-16 min-h-screen">
        <div className="px-margin-desktop py-xl max-w-7xl mx-auto">
          {title && (
            <div className="mb-lg">
              <span className="font-label-md text-label-md text-secondary uppercase tracking-widest mb-sm block">
                Authentication Phase
              </span>
              <h2 className="font-headline-lg text-headline-lg text-primary">
                {title}
              </h2>
            </div>
          )}
          <div className="bg-surface-container-lowest border border-outline-variant p-xl rounded shadow-sm">
            {children}
          </div>
        </div>
      </main>

      {/* Footer — System Status Bar */}
      <footer className="md:ml-64 bg-surface border-t border-outline-variant py-md px-margin-desktop">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <div className="flex gap-lg">
            <span className="font-label-md text-label-md text-on-surface-variant">
              System Latency: 12ms
            </span>
            <span className="font-label-md text-label-md text-on-surface-variant">
              Encryption: AES-256
            </span>
          </div>
          <div className="flex gap-md items-center">
            <span className="w-2 h-2 rounded-full bg-secondary" />
            <span className="font-label-md text-label-md text-on-surface-variant">
              Node: CH-GEN-02 ACTIVE
            </span>
          </div>
        </div>
      </footer>
    </>
  );
}

export default AuthShell;
