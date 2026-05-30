"use client";

import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { CheckCircle, Clock, AlertTriangle, Minus } from "lucide-react";

import { cn } from "@/lib/utils";

const iconMap: Record<string, React.ElementType> = {
  operational: CheckCircle,
  success: CheckCircle,
  pending: Clock,
  critical: AlertTriangle,
  neutral: Minus,
};

const chipVariants = cva(
  "inline-flex items-center gap-1.5 rounded-sm px-2 py-0.5 font-mono text-body-xs font-medium uppercase tracking-wider",
  {
    variants: {
      variant: {
        operational:
          "bg-success/10 text-success",
        success:
          "bg-success/10 text-success",
        pending:
          "bg-gray-100 text-gray-600",
        critical:
          "bg-destructive/10 text-destructive",
        neutral:
          "bg-gray-100 text-gray-500",
      },
    },
    defaultVariants: {
      variant: "neutral",
    },
  }
);

export interface StatusChipProps
  extends React.HTMLAttributes<HTMLSpanElement>,
    VariantProps<typeof chipVariants> {
  label: string;
  showIcon?: boolean;
}

const StatusIcon = ({
  variant,
}: {
  variant: StatusChipProps["variant"];
}) => {
  const Icon = variant ? iconMap[variant] ?? Minus : Minus;
  return <Icon className="h-3 w-3" strokeWidth={2.5} />;
};

const StatusChip = React.forwardRef<HTMLSpanElement, StatusChipProps>(
  ({ className, variant, label, showIcon = true, ...props }, ref) => (
    <span
      ref={ref}
      className={cn(chipVariants({ variant }), className)}
      {...props}
    >
      {showIcon && <StatusIcon variant={variant} />}
      {label}
    </span>
  )
);
StatusChip.displayName = "StatusChip";

export { StatusChip, chipVariants };
