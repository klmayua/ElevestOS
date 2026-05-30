"use client";

import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";

const badgeVariants = cva(
  "inline-flex items-center rounded-sm px-2 py-0.5 text-body-xs font-medium uppercase tracking-wider",
  {
    variants: {
      variant: {
        default:
          "bg-gray-100 text-gray-600",
        primary:
          "bg-gray-900/10 text-gray-900",
        secondary:
          "border border-border text-foreground-secondary bg-transparent",
        success:
          "bg-success/10 text-success",
        neutral:
          "bg-gray-100 text-gray-600",
        warning:
          "bg-warning/10 text-warning",
        error:
          "bg-destructive/10 text-destructive",
        outline:
          "border border-border text-foreground-secondary bg-transparent",
      },
    },
    defaultVariants: {
      variant: "neutral",
    },
  }
);

export interface BadgeProps
  extends React.HTMLAttributes<HTMLSpanElement>,
    VariantProps<typeof badgeVariants> {}

const Badge = React.forwardRef<HTMLSpanElement, BadgeProps>(
  ({ className, variant, ...props }, ref) => (
    <span
      ref={ref}
      className={cn(badgeVariants({ variant }), className)}
      {...props}
    />
  )
);
Badge.displayName = "Badge";

export { Badge, badgeVariants };
