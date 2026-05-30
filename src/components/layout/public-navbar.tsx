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
      { label: "For NGOs", href: "/solutions/ngos", description: "Grants, projects & compliance" },
      { label: "For Funders", href: "/solutions/funders", description: "Portfolio management & reporting" },
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
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        scrolled
          ? "bg-white/80 backdrop-blur-xl border-b border-gray-200"
          : "bg-transparent"
      )}
    >
      <div className="max-w-7xl mx-auto px-6">
        <nav className="flex items-center justify-between h-16">
          <Link
            href="/"
            className="flex items-center gap-2.5 shrink-0"
            aria-label="ElevestOS home"
          >
            <div className="w-8 h-8 rounded-[6px] bg-brand-trust flex items-center justify-center">
              <span className="text-[11px] font-bold text-white font-heading">E</span>
            </div>
            <span className="text-lg font-heading font-bold text-gray-900 tracking-tight">
              ElevestOS
            </span>
          </Link>

          <div className="hidden lg:flex items-center gap-1">
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
                      "flex items-center gap-1 px-3 py-2 text-sm font-medium rounded-md transition-colors",
                      "text-gray-600 hover:text-gray-900 hover:bg-gray-50"
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
                        className="absolute top-full left-0 mt-1 w-64 bg-white rounded-lg border border-gray-200 shadow-elevated py-2"
                      >
                        {link.children.map((child) => (
                          <Link
                            key={child.label}
                            href={child.href}
                            className="block px-4 py-3 hover:bg-gray-50 transition-colors"
                          >
                            <p className="text-sm font-medium text-gray-900">{child.label}</p>
                            {child.description && (
                              <p className="text-xs text-gray-500 mt-0.5">{child.description}</p>
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
                    "px-3 py-2 text-sm font-medium rounded-md transition-colors",
                    pathname === link.href
                      ? "text-brand-trust"
                      : "text-gray-600 hover:text-gray-900 hover:bg-gray-50"
                  )}
                >
                  {link.label}
                </Link>
              )
            )}
          </div>

          <div className="hidden lg:flex items-center gap-3">
            <Link
              href="/auth/login"
              className="text-sm font-medium text-gray-600 hover:text-gray-900 transition-colors px-3 py-2"
            >
              Sign In
            </Link>
            <Link
              href="/contact"
              className="inline-flex items-center gap-1.5 px-4 py-2 text-sm font-medium bg-brand-trust text-white rounded-md hover:bg-brand-trust/90 transition-colors"
            >
              Request Demo
              <ArrowRight className="h-3.5 w-3.5" />
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
              className="fixed inset-0 bg-black/20 backdrop-blur-sm z-50 lg:hidden"
              onClick={closeAll}
            />

            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", damping: 25, stiffness: 300 }}
              className="fixed top-0 right-0 bottom-0 w-full max-w-sm bg-white z-50 lg:hidden overflow-y-auto"
            >
              <div className="flex items-center justify-between h-16 px-6 border-b border-gray-100">
                <Link
                  href="/"
                  className="flex items-center gap-2.5"
                  onClick={closeAll}
                >
                  <div className="w-7 h-7 rounded-[5px] bg-brand-trust flex items-center justify-center">
                    <span className="text-[10px] font-bold text-white font-heading">E</span>
                  </div>
                  <span className="text-base font-heading font-bold text-gray-900 tracking-tight">
                    ElevestOS
                  </span>
                </Link>
                <button
                  onClick={closeAll}
                  className="p-2 text-gray-400 hover:text-gray-600 transition-colors rounded-md"
                  aria-label="Close menu"
                >
                  <X className="h-5 w-5" />
                </button>
              </div>

              <div className="px-6 py-6 space-y-1">
                {navLinks.map((link) =>
                  link.children ? (
                    <details key={link.label} className="group">
                      <summary className="flex items-center justify-between py-3 text-sm font-medium text-gray-600 hover:text-gray-900 cursor-pointer list-none">
                        {link.label}
                        <ChevronDown className="h-4 w-4 transition-transform duration-200 group-open:rotate-180" />
                      </summary>
                      <div className="ml-4 mt-1 space-y-1 border-l border-gray-100 pl-4">
                        {link.children.map((child) => (
                          <Link
                            key={child.label}
                            href={child.href}
                            onClick={closeAll}
                            className="block py-2.5 text-sm text-gray-600 hover:text-gray-900 transition-colors"
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
                        "block py-3 text-sm font-medium transition-colors",
                        pathname === link.href
                          ? "text-brand-trust"
                          : "text-gray-600 hover:text-gray-900"
                      )}
                    >
                      {link.label}
                    </Link>
                  )
                )}
              </div>

              <div className="px-6 pt-4 border-t border-gray-100 space-y-3">
                <Link
                  href="/auth/login"
                  onClick={closeAll}
                  className="block w-full text-center py-2.5 text-sm font-medium text-gray-700 bg-gray-50 rounded-md hover:bg-gray-100 transition-colors"
                >
                  Sign In
                </Link>
                <Link
                  href="/contact"
                  onClick={closeAll}
                  className="flex items-center justify-center gap-1.5 w-full py-2.5 text-sm font-medium bg-brand-trust text-white rounded-md hover:bg-brand-trust/90 transition-colors"
                >
                  Request Demo
                  <ArrowRight className="h-3.5 w-3.5" />
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
