"use client";

import React, { useState, useEffect, useCallback } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";

interface NavItem {
  label: string;
  href: string;
}

const navItems: NavItem[] = [
  { label: "Home", href: "/" },
  { label: "Platform", href: "/platform" },
  { label: "For NGOs", href: "/for-ngos" },
  { label: "For Funders", href: "/for-funders" },
  { label: "Features", href: "/features" },
  { label: "Pricing", href: "/pricing" },
  { label: "Resources", href: "/resources" },
];

const SHRINK_THRESHOLD = 20;

export function PremiumPillNav() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);

  const handleScroll = useCallback(() => {
    setScrolled(window.scrollY > SHRINK_THRESHOLD);
  }, []);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, [handleScroll]);

  return (
    <motion.header
      initial={false}
      animate={{
        paddingTop: scrolled ? 12 : 24,
        paddingBottom: scrolled ? 12 : 24,
      }}
      transition={{ type: "spring", stiffness: 300, damping: 30 }}
      className="hidden md:block sticky top-0 z-50"
    >
      <div className="max-w-5xl mx-auto px-6">
        <motion.nav
          initial={false}
          animate={{
            paddingTop: scrolled ? 6 : 10,
            paddingBottom: scrolled ? 6 : 10,
            paddingLeft: scrolled ? 14 : 20,
            paddingRight: scrolled ? 14 : 20,
          }}
          transition={{ type: "spring", stiffness: 300, damping: 30 }}
          className={cn(
            "mx-auto rounded-full flex items-center justify-between",
            "backdrop-blur-[18px] bg-white/80 border border-white/25",
            "shadow-[0_2px_24px_rgba(13,28,50,0.06)]"
          )}
        >
          <Link href="/" className="flex items-center gap-2 shrink-0 mr-4">
            <motion.div
              animate={{ width: scrolled ? 24 : 28, height: scrolled ? 24 : 28 }}
              transition={{ type: "spring", stiffness: 300, damping: 30 }}
              className="rounded-[5px] bg-brand-trust flex items-center justify-center"
            >
              <motion.span
                animate={{ fontSize: scrolled ? 9 : 11 }}
                className="font-bold text-white font-heading"
              >
                E
              </motion.span>
            </motion.div>
            <motion.span
              animate={{ fontSize: scrolled ? 13 : 15 }}
              transition={{ type: "spring", stiffness: 300, damping: 30 }}
              className="font-heading font-bold text-primary tracking-tight"
            >
              ElevestOS
            </motion.span>
          </Link>

          <div className="flex items-center gap-0.5">
            {navItems.map((item) => {
              const isActive =
                item.href === "/"
                  ? pathname === "/"
                  : pathname.startsWith(item.href);

              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={cn(
                    "relative px-3.5 py-2 text-sm rounded-full transition-all duration-200",
                    isActive
                      ? "text-primary font-semibold"
                      : "text-gray-600 hover:text-primary"
                  )}
                >
                  {isActive && (
                    <motion.div
                      layoutId="pillNavActive"
                      className="absolute inset-0 bg-primary/8 rounded-full"
                      transition={{ type: "spring", stiffness: 400, damping: 35 }}
                    />
                  )}
                  <span className="relative z-10">{item.label}</span>
                </Link>
              );
            })}
          </div>

          <div className="flex items-center gap-2 ml-4 shrink-0">
            <Link
              href="/auth/login"
              className="text-sm font-medium text-gray-600 hover:text-primary transition-colors px-3 py-2"
            >
              Sign In
            </Link>
            <Link
              href="/demo"
              className="inline-flex items-center gap-1.5 px-4 py-2 text-sm font-semibold bg-primary text-white rounded-full hover:bg-primary-hover transition-colors shadow-sm shadow-primary/10"
            >
              Book Demo
              <ArrowRight className="h-3.5 w-3.5" />
            </Link>
          </div>
        </motion.nav>
      </div>
    </motion.header>
  );
}

export default PremiumPillNav;
