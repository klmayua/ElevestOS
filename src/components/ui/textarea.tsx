"use client";

import * as React from "react";

import { cn } from "@/lib/utils";

export interface TextareaProps
  extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
  error?: boolean;
}

const Textarea = React.forwardRef<HTMLTextAreaElement, TextareaProps>(
  ({ className, error, ...props }, ref) => {
    return (
      <textarea
        className={cn(
          "flex min-h-[80px] w-full rounded-sm border border-border bg-white px-3 py-2 text-body-md text-foreground placeholder:text-foreground-muted transition-colors",
          "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gray-900 focus-visible:ring-offset-0 focus-visible:border-gray-900",
          "disabled:cursor-not-allowed disabled:opacity-50 disabled:bg-gray-50",
          error &&
            "border-destructive focus-visible:ring-destructive focus-visible:border-destructive",
          className
        )}
        ref={ref}
        {...props}
      />
    );
  }
);
Textarea.displayName = "Textarea";

export { Textarea };
