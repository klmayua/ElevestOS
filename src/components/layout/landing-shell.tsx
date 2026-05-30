"use client";

import React from "react";
import { cn } from "@/lib/utils";
import { PremiumPillNav } from "./premium-pill-nav";
import { MobileNavWrapper } from "./mobile-nav-wrapper";
import { PublicFooter } from "./public-footer";

interface LandingShellProps {
  children: React.ReactNode;
  showPillNav?: boolean;
  footerVariant?: "dark" | "light";
  className?: string;
}

export function LandingShell({
  children,
  showPillNav = true,
  footerVariant = "dark",
  className,
}: LandingShellProps) {
  return (
    <>
      {/* Desktop Layout */}
      <div className="hidden md:flex flex-col min-h-screen">
        {showPillNav && <PremiumPillNav />}
        <main className={cn("flex-1", className)}>{children}</main>
        <PublicFooter />
      </div>

      {/* Mobile Layout */}
      <div className="md:hidden">
        <MobileNavWrapper>
          <div className={className}>{children}</div>
        </MobileNavWrapper>
        <PublicFooter />
      </div>
    </>
  );
}

export default LandingShell;
