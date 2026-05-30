"use client";

import React from "react";
import Link from "next/link";

interface LandingShellProps {
  children: React.ReactNode;
}

export function LandingShell({ children }: LandingShellProps) {
  return (
    <>
      {/* Fixed Top Nav — matches Stitch landing nav exactly */}
      <nav className="fixed top-0 right-0 w-full h-16 bg-surface/80 backdrop-blur-md flex justify-between items-center px-margin-desktop z-50 border-b border-outline-variant/30">
        <div className="flex items-center gap-md">
          <Link
            href="/"
            className="font-headline-md text-headline-md font-bold text-primary"
          >
            ElevestOS
          </Link>
          <div className="h-6 w-[1px] bg-outline-variant mx-sm" />
          <span className="font-label-md text-label-md text-on-surface-variant tracking-wider">
            INFRASTRUCTURE GRADE
          </span>
        </div>

        <div className="hidden md:flex items-center gap-xl">
          <Link
            href="/solutions"
            className="font-label-md text-label-md text-primary font-bold"
          >
            Solutions
          </Link>
          <Link
            href="/governance"
            className="font-label-md text-label-md text-on-surface-variant hover:text-primary transition-colors"
          >
            Governance
          </Link>
          <Link
            href="/compliance"
            className="font-label-md text-label-md text-on-surface-variant hover:text-primary transition-colors"
          >
            Compliance
          </Link>
          <Link
            href="/network"
            className="font-label-md text-label-md text-on-surface-variant hover:text-primary transition-colors"
          >
            Network
          </Link>
        </div>

        <div className="flex items-center gap-md">
          <Link
            href="/auth/login"
            className="font-label-md text-label-md px-lg py-sm border border-outline hover:bg-surface-container-low transition-colors"
          >
            Institutional Login
          </Link>
          <Link
            href="/contact"
            className="font-label-md text-label-md px-lg py-sm bg-primary text-on-primary hover:opacity-90 transition-opacity"
          >
            Get Started
          </Link>
        </div>
      </nav>

      {/* Body */}
      <main className="bg-background text-on-background font-body-md">
        {children}
      </main>
    </>
  );
}

export default LandingShell;
