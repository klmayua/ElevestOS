"use client";

import React from "react";
import Link from "next/link";
import { ShieldCheck, ArrowLeft } from "lucide-react";
import { cn } from "@/lib/utils";

interface AuthShellProps {
  children: React.ReactNode;
  title?: string;
  subtitle?: string;
  backHref?: string;
  backLabel?: string;
  testimonial?: {
    quote: string;
    author: string;
    role: string;
  };
}

export function AuthShell({
  children,
  title,
  subtitle,
  backHref,
  backLabel,
  testimonial,
}: AuthShellProps) {
  return (
    <div className="min-h-screen flex bg-background">
      <div className="hidden lg:flex lg:w-5/12 xl:w-1/2 bg-primary relative overflow-hidden flex-col">
        <div className="absolute inset-0 bg-dot-pattern opacity-40" />

        <div className="absolute inset-0 bg-gradient-to-br from-primary via-primary to-primary/90" />

        <div className="absolute top-0 right-0 w-[400px] h-[400px] rounded-full bg-brand-trust/5 blur-[120px] -translate-y-1/2 translate-x-1/4" />
        <div className="absolute bottom-0 left-0 w-[300px] h-[300px] rounded-full bg-brand-trust/5 blur-[100px] translate-y-1/2 -translate-x-1/4" />

        <div className="relative z-10 flex flex-col justify-between h-full p-14 xl:p-20">
          <Link href="/" className="flex items-center gap-3 group">
            <div className="w-10 h-10 rounded-md bg-brand-trust flex items-center justify-center group-hover:scale-105 transition-transform duration-300">
              <span className="text-sm font-bold text-white font-heading">E</span>
            </div>
            <div>
              <p className="text-lg font-heading font-bold text-white tracking-tight leading-tight">
                ElevestOS
              </p>
              <p className="text-[11px] text-primary-on-container/60 tracking-[0.15em] uppercase">
                Institutional Platform
              </p>
            </div>
          </Link>

          <div className="space-y-8">
            <div className="space-y-3 max-w-md">
              <h2 className="text-display-lg text-white">
                Grants management, elevated.
              </h2>
              <p className="text-body-lg text-primary-on-container/70 leading-relaxed">
                The institutional-grade platform for NGOs and funders to discover, apply,
                manage and report on grants with complete compliance.
              </p>
            </div>

            {testimonial && (
              <div className="border-t border-white/10 pt-8 max-w-sm">
                <blockquote className="text-body-lg text-white/70 italic leading-relaxed">
                  &ldquo;{testimonial.quote}&rdquo;
                </blockquote>
                <div className="mt-4">
                  <p className="text-sm font-semibold text-white">{testimonial.author}</p>
                  <p className="text-xs text-primary-on-container/50">{testimonial.role}</p>
                </div>
              </div>
            )}
          </div>

          <div className="flex items-center gap-4">
            <ShieldCheck className="h-4 w-4 text-brand-trust/60" />
            <span className="text-[11px] text-primary-on-container/40 tracking-wide">
              SOC 2 Type II certified &middot; GDPR compliant &middot; Encrypted at rest
            </span>
          </div>
        </div>
      </div>

      <div className="flex-1 flex items-center justify-center p-6 lg:p-12">
        <div className="w-full max-w-md">
          {backHref && (
            <Link
              href={backHref}
              className="inline-flex items-center gap-1.5 text-xs text-text-muted hover:text-text-secondary transition-colors mb-8"
            >
              <ArrowLeft className="h-3 w-3" />
              {backLabel ?? "Back"}
            </Link>
          )}

          <div className="bg-white border border-border rounded-lg p-8 shadow-sm">
            {title && (
              <div className="mb-6">
                <h1 className="text-headline-md text-primary tracking-tight">{title}</h1>
                {subtitle && (
                  <p className="mt-1.5 text-body-md text-text-secondary">{subtitle}</p>
                )}
              </div>
            )}

            {children}
          </div>

          <p className="mt-6 text-center text-[11px] text-text-muted">
            &copy; {new Date().getFullYear()} Elevest Labs. All rights reserved.
          </p>
        </div>
      </div>

      <div className="lg:hidden flex items-center justify-center py-4 px-6 border-t border-border bg-white">
        <Link href="/" className="flex items-center gap-2">
          <div className="w-6 h-6 rounded-[4px] bg-brand-trust flex items-center justify-center">
            <span className="text-[8px] font-bold text-white">E</span>
          </div>
          <span className="text-xs font-heading font-bold text-primary">ElevestOS</span>
        </Link>
      </div>
    </div>
  );
}

export default AuthShell;
