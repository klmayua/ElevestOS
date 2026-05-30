"use client";

import React, { useState, useEffect, useCallback } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import {
  Home,
  FileText,
  LayoutDashboard,
  Users,
  User,
  Menu,
  X,
  ChevronRight,
  LogIn,
  ArrowRight,
} from "lucide-react";
import { cn } from "@/lib/utils";

interface MobileNavWrapperProps {
  children: React.ReactNode;
}

interface BottomNavItem {
  label: string;
  href: string;
  icon: typeof Home;
  activeRoutes: string[];
}

const bottomNavItems: BottomNavItem[] = [
  { label: "Home", href: "/", icon: Home, activeRoutes: ["/"] },
  { label: "Grants", href: "/for-ngos", icon: FileText, activeRoutes: ["/for-ngos", "/platform"] },
  { label: "Dashboard", href: "/dashboard", icon: LayoutDashboard, activeRoutes: ["/dashboard"] },
  { label: "Partners", href: "/for-funders", icon: Users, activeRoutes: ["/for-funders"] },
  { label: "Profile", href: "/auth/login", icon: User, activeRoutes: ["/auth/login", "/auth/register"] },
];

const drawerLinks = [
  { label: "Home", href: "/" },
  { label: "Platform", href: "/platform" },
  { label: "For NGOs", href: "/for-ngos" },
  { label: "For Funders", href: "/for-funders" },
  { label: "Features", href: "/features" },
  { label: "Pricing", href: "/pricing" },
  { label: "Resources", href: "/resources" },
];

export function MobileNavWrapper({ children }: MobileNavWrapperProps) {
  const pathname = usePathname();
  const [drawerOpen, setDrawerOpen] = useState(false);

  const closeDrawer = useCallback(() => setDrawerOpen(false), []);

  useEffect(() => {
    closeDrawer();
  }, [pathname, closeDrawer]);

  useEffect(() => {
    document.body.style.overflow = drawerOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [drawerOpen]);

  useEffect(() => {
    if (!drawerOpen) return;
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") closeDrawer();
    };
    document.addEventListener("keydown", handleKey);
    return () => document.removeEventListener("keydown", handleKey);
  }, [drawerOpen, closeDrawer]);

  const isBottomActive = (item: BottomNavItem) =>
    item.activeRoutes.some((route) =>
      route === "/" ? pathname === "/" : pathname.startsWith(route)
    );

  return (
    <div className="md:hidden flex flex-col min-h-screen">
      {/* Top Bar */}
      <header className="h-14 shrink-0 flex items-center justify-between px-4 backdrop-blur-[18px] bg-white/75 border-b border-border/40 sticky top-0 z-40">
        <Link href="/" className="flex items-center gap-2">
          <div className="w-7 h-7 rounded-[5px] bg-brand-trust flex items-center justify-center">
            <span className="text-[10px] font-bold text-white font-heading">E</span>
          </div>
          <span className="text-sm font-heading font-bold text-primary tracking-tight">
            ElevestOS
          </span>
        </Link>

        <button
          onClick={() => setDrawerOpen(true)}
          className="p-2 -mr-2 text-text-secondary hover:text-text-primary transition-colors rounded-md"
          aria-label="Open menu"
        >
          <Menu className="h-5 w-5" />
        </button>
      </header>

      {/* Page Content */}
      <main className="flex-1 pb-20">
        {children}
      </main>

      {/* Bottom Navigation */}
      <nav className="fixed bottom-0 left-0 right-0 z-40 bg-white border-t border-border h-16 pb-[env(safe-area-inset-bottom,0px)]">
        <div className="h-full max-w-lg mx-auto flex items-center justify-around px-2">
          {bottomNavItems.map((item) => {
            const active = isBottomActive(item);
            return (
              <Link
                key={item.label}
                href={item.href}
                className={cn(
                  "flex flex-col items-center justify-center gap-0.5 h-full min-w-0 flex-1 transition-colors duration-150",
                  active ? "text-primary" : "text-gray-400"
                )}
              >
                <item.icon
                  className={cn(
                    "h-5 w-5 transition-colors",
                    active ? "fill-primary/10 text-primary" : ""
                  )}
                  strokeWidth={active ? 2.5 : 1.8}
                />
                <span
                  className={cn(
                    "text-[10px] font-medium leading-none",
                    active && "font-semibold"
                  )}
                >
                  {item.label}
                </span>
              </Link>
            );
          })}
        </div>
      </nav>

      {/* Slide-in Drawer */}
      <AnimatePresence>
        {drawerOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="fixed inset-0 bg-black/20 backdrop-blur-sm z-50"
              onClick={closeDrawer}
            />

            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", damping: 28, stiffness: 300 }}
              className="fixed top-0 right-0 bottom-0 w-full max-w-xs bg-white z-50 overflow-y-auto"
            >
              <div className="flex items-center justify-between h-14 px-4 border-b border-border">
                <Link href="/" className="flex items-center gap-2" onClick={closeDrawer}>
                  <div className="w-7 h-7 rounded-[5px] bg-brand-trust flex items-center justify-center">
                    <span className="text-[10px] font-bold text-white font-heading">E</span>
                  </div>
                  <span className="text-sm font-heading font-bold text-primary tracking-tight">
                    ElevestOS
                  </span>
                </Link>
                <button
                  onClick={closeDrawer}
                  className="p-2 text-text-muted hover:text-text-primary transition-colors rounded-md"
                  aria-label="Close menu"
                >
                  <X className="h-5 w-5" />
                </button>
              </div>

              <div className="px-4 py-4 space-y-1">
                {drawerLinks.map((link) => {
                  const isActive =
                    link.href === "/"
                      ? pathname === "/"
                      : pathname.startsWith(link.href);

                  return (
                    <Link
                      key={link.href}
                      href={link.href}
                      onClick={closeDrawer}
                      className={cn(
                        "flex items-center justify-between py-3 px-3 rounded-md text-sm font-medium transition-colors",
                        isActive
                          ? "bg-primary/5 text-primary"
                          : "text-text-secondary hover:text-text-primary hover:bg-hover"
                      )}
                    >
                      {link.label}
                      <ChevronRight className="h-4 w-4 opacity-30" />
                    </Link>
                  );
                })}
              </div>

              <div className="px-4 pt-4 mt-2 border-t border-border space-y-3">
                <Link
                  href="/auth/login"
                  onClick={closeDrawer}
                  className="flex items-center justify-center gap-1.5 w-full py-2.5 text-sm font-medium text-text-secondary bg-hover rounded-md hover:bg-border transition-colors"
                >
                  <LogIn className="h-4 w-4" />
                  Sign In
                </Link>
                <Link
                  href="/contact"
                  onClick={closeDrawer}
                  className="flex items-center justify-center gap-1.5 w-full py-2.5 text-sm font-semibold bg-primary text-white rounded-md hover:bg-primary-hover transition-colors"
                >
                  Book Demo
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </div>

              <div className="px-4 py-6">
                <p className="text-[10px] text-text-muted text-center">
                  &copy; {new Date().getFullYear()} Elevest Labs
                </p>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </div>
  );
}

export default MobileNavWrapper;
