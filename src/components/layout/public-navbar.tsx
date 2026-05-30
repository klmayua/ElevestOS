"use client";

import React, { useState, useEffect, useCallback } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X, ChevronDown, ArrowRight } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/utils";

interface NavChild {
  label: string;
  href: string;
  description?: string;
}

interface NavLink {
  label: string;
  href?: string;
  children?: NavChild[];
}

const navLinks: NavLink[] = [
  { label: "Platform", href: "/platform" },
  {
    label: "Solutions",
    children: [
      { label: "For NGOs", href: "/for-ngos", description: "Grants, projects & compliance" },
      { label: "For Funders", href: "/for-funders", description: "Portfolio management & reporting" },
    ],
  },
  { label: "Features", href: "/features" },
  { label: "Resources", href: "/resources" },
];

export function PublicNavbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [solutionsOpen, setSolutionsOpen] = useState(false);
  const pathname = usePathname();

  const closeAll = useCallback(() => {
    setMobileOpen(false);
    setSolutionsOpen(false);
  }, []);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 0);
    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    closeAll();
  }, [pathname, closeAll]);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [mobileOpen]);

  useEffect(() => {
    if (!mobileOpen) return;
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") closeAll();
    };
    document.addEventListener("keydown", handleKey);
    return () => document.removeEventListener("keydown", handleKey);
  }, [mobileOpen, closeAll]);

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300 border-b",
        scrolled
          ? "bg-surface/80 backdrop-blur-md border-outline-variant/30"
          : "bg-transparent border-transparent"
      )}
    >
      <div className="max-w-7xl mx-auto px-margin-desktop">
        <nav className="flex items-center justify-between h-16">
          <Link
            href="/"
            className="flex items-center gap-md shrink-0"
            aria-label="ElevestOS home"
          >
            <span className="font-headline-md text-headline-md font-bold text-primary tracking-tight">
              ElevestOS
            </span>
          </Link>

          <div className="hidden lg:flex items-center gap-xl">
            {navLinks.map((link) =>
              link.children ? (
                <div
                  key={link.label}
                  className="relative"
                  onMouseEnter={() => setSolutionsOpen(true)}
                  onMouseLeave={() => setSolutionsOpen(false)}
                >
                  <button
                    onClick={() => setSolutionsOpen((prev) => !prev)}
                    className={cn(
                      "flex items-center gap-sm px-sm py-sm font-label-md text-label-md transition-colors",
                      "text-on-surface-variant hover:text-primary"
                    )}
                    aria-expanded={solutionsOpen}
                  >
                    {link.label}
                    <ChevronDown
                      className={cn(
                        "h-3.5 w-3.5 transition-transform duration-200",
                        solutionsOpen && "rotate-180"
                      )}
                    />
                  </button>

                  <AnimatePresence>
                    {solutionsOpen && (
                      <motion.div
                        initial={{ opacity: 0, y: 4 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 4 }}
                        transition={{ duration: 0.15 }}
                        className="absolute top-full left-0 mt-1 w-64 bg-surface-container-lowest border border-outline-variant shadow-[0px_4px_12px_rgba(10,25,47,0.08)] py-sm"
                      >
                        {link.children.map((child) => (
                          <Link
                            key={child.label}
                            href={child.href}
                            className="block px-lg py-md hover:bg-surface-container-low transition-colors"
                          >
                            <p className="font-body-md text-body-md text-primary">{child.label}</p>
                            {child.description && (
                              <p className="font-caption text-caption text-on-surface-variant mt-xs">{child.description}</p>
                            )}
                          </Link>
                        ))}
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              ) : (
                <Link
                  key={link.label}
                  href={link.href!}
                  className={cn(
                    "font-label-md text-label-md transition-colors",
                    pathname === link.href
                      ? "text-primary font-bold"
                      : "text-on-surface-variant hover:text-primary"
                  )}
                >
                  {link.label}
                </Link>
              )
            )}
          </div>

          <div className="hidden lg:flex items-center gap-md">
            <Link
              href="/auth/login"
              className="font-label-md text-label-md px-lg py-sm border border-outline hover:bg-surface-container-low transition-colors text-primary"
            >
              Institutional Login
            </Link>
            <Link
              href="/contact"
              className="inline-flex items-center gap-sm px-lg py-sm font-label-md text-label-md bg-primary text-on-primary hover:opacity-90 transition-opacity"
            >
              Get Started
            </Link>
          </div>

          <button
            onClick={() => setMobileOpen(true)}
            className="lg:hidden p-2 -mr-2 text-gray-600 hover:text-gray-900 transition-colors rounded-md"
            aria-label="Open menu"
          >
            <Menu className="h-5 w-5" />
          </button>
        </nav>
      </div>

      <AnimatePresence>
        {mobileOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="fixed inset-0 bg-on-surface/20 backdrop-blur-sm z-50 lg:hidden"
              onClick={closeAll}
            />

            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", damping: 25, stiffness: 300 }}
              className="fixed top-0 right-0 bottom-0 w-full max-w-sm bg-surface-container-lowest z-50 lg:hidden overflow-y-auto"
            >
              <div className="flex items-center justify-between h-16 px-margin-mobile border-b border-outline-variant">
                <Link
                  href="/"
                  className="flex items-center gap-md"
                  onClick={closeAll}
                >
                  <span className="font-headline-md text-headline-md font-bold text-primary tracking-tight">
                    ElevestOS
                  </span>
                </Link>
                <button
                  onClick={closeAll}
                  className="p-sm text-outline hover:text-on-surface transition-colors"
                  aria-label="Close menu"
                >
                  <X className="h-5 w-5" />
                </button>
              </div>

              <div className="px-margin-mobile py-lg space-y-1">
                {navLinks.map((link) =>
                  link.children ? (
                    <details key={link.label} className="group">
                      <summary className="flex items-center justify-between py-md font-label-md text-label-md text-on-surface-variant hover:text-primary cursor-pointer list-none">
                        {link.label}
                        <ChevronDown className="h-4 w-4 transition-transform duration-200 group-open:rotate-180" />
                      </summary>
                      <div className="ml-lg mt-xs space-y-1 border-l border-outline-variant pl-lg">
                        {link.children.map((child) => (
                          <Link
                            key={child.label}
                            href={child.href}
                            onClick={closeAll}
                            className="block py-md font-body-md text-body-md text-on-surface-variant hover:text-primary transition-colors"
                          >
                            {child.label}
                          </Link>
                        ))}
                      </div>
                    </details>
                  ) : (
                    <Link
                      key={link.label}
                      href={link.href!}
                      onClick={closeAll}
                      className={cn(
                        "block py-md font-label-md text-label-md transition-colors",
                        pathname === link.href
                          ? "text-primary font-bold"
                          : "text-on-surface-variant hover:text-primary"
                      )}
                    >
                      {link.label}
                    </Link>
                  )
                )}
              </div>

              <div className="px-margin-mobile pt-lg border-t border-outline-variant space-y-sm">
                <Link
                  href="/auth/login"
                  onClick={closeAll}
                  className="block w-full text-center py-md font-label-md text-label-md text-primary border border-outline hover:bg-surface-container-low transition-colors"
                >
                  Institutional Login
                </Link>
                <Link
                  href="/contact"
                  onClick={closeAll}
                  className="flex items-center justify-center gap-sm w-full py-md font-label-md text-label-md bg-primary text-on-primary hover:opacity-90 transition-opacity"
                >
                  Get Started
                </Link>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </header>
  );
}

export default PublicNavbar;
