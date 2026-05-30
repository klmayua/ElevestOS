"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";

const links = [
  { label: "Features", href: "/features" },
  { label: "For NGOs", href: "/for-ngos" },
  { label: "For Funders", href: "/for-funders" },
  { label: "Pricing", href: "/pricing" },
];

export function FloatingPillNav() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav
      className={cn(
        "fixed top-4 left-1/2 z-50 -translate-x-1/2 transition-all duration-300",
        scrolled
          ? "w-[95%] max-w-xl"
          : "w-[92%] max-w-2xl"
      )}
    >
      <div
        className={cn(
          "flex items-center justify-between rounded-full border border-outline-variant/25 bg-surface/85 backdrop-blur-xl transition-all duration-300",
          "shadow-[0_2px_20px_rgba(13,28,50,0.06),0_0_0_1px_rgba(255,255,255,0.3)_inset]",
          scrolled ? "px-5 py-2.5" : "px-7 py-3.5"
        )}
      >
        <Link
          href="/"
          className="flex items-center gap-2.5 shrink-0"
        >
          <div className="flex h-7 w-7 items-center justify-center rounded-[5px] bg-primary">
            <span className="text-[10px] font-bold text-on-primary">E</span>
          </div>
          <span
            className={cn(
              "font-bold tracking-tight text-primary transition-all",
              scrolled ? "text-[14px]" : "text-[15px]"
            )}
          >
            ElevestOS
          </span>
        </Link>

        <div className="hidden items-center gap-0.5 md:flex">
          {links.map((link) => {
            const active =
              link.href === "/" ? pathname === "/" : pathname.startsWith(link.href);
            return (
              <Link
                key={link.href}
                href={link.href}
                className={cn(
                  "relative px-3 py-1.5 text-[13px] font-medium rounded-full transition-colors",
                  active
                    ? "text-primary"
                    : "text-on-surface-variant/80 hover:text-primary"
                )}
              >
                {active && (
                  <span className="absolute inset-0 rounded-full bg-primary/6" />
                )}
                <span className="relative">{link.label}</span>
              </Link>
            );
          })}
        </div>

        <div className="flex items-center gap-2 shrink-0">
          <Link
            href="/auth/login"
            className={cn(
              "text-on-surface-variant/70 hover:text-primary transition-colors",
              "text-[13px] font-medium hidden sm:block"
            )}
          >
            Sign in
          </Link>
          <Link
            href="/contact"
            className={cn(
              "inline-flex items-center gap-1.5 rounded-full bg-primary px-4 py-1.5 text-[13px] font-semibold text-on-primary transition-colors hover:bg-primary-container",
              "shadow-sm shadow-primary/10"
            )}
          >
            Get started
            <ArrowRight className="h-3.5 w-3.5" />
          </Link>
        </div>
      </div>
    </nav>
  );
}
