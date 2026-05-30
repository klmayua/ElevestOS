"use client";

import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";

const progressBarVariants = cva("h-2 w-full overflow-hidden rounded-full", {
  variants: {
    variant: {
      default: "bg-gray-100 [&>div]:bg-gray-400",
      primary: "bg-gray-100 [&>div]:bg-gray-900",
      success: "bg-success/15 [&>div]:bg-success",
    },
  },
  defaultVariants: {
    variant: "default",
  },
});

const progressPip = cva(
  "absolute right-0 top-1/2 h-3 w-3 -translate-y-1/2 rounded-full",
  {
    variants: {
      variant: {
        default: "bg-gray-400",
        primary: "bg-gray-900",
        success: "bg-success",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  }
);

export interface ProgressProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof progressBarVariants> {
  value?: number;
  max?: number;
  showLabel?: boolean;
  labelFormat?: "percent" | "fraction";
}

const Progress = React.forwardRef<HTMLDivElement, ProgressProps>(
  (
    {
      className,
      variant,
      value = 0,
      max = 100,
      showLabel = false,
      labelFormat = "percent",
      ...props
    },
    ref
  ) => {
    const percentage = max > 0 ? Math.min(Math.max((value / max) * 100, 0), 100) : 0;

    return (
      <div className="flex w-full items-center gap-3" {...props} ref={ref}>
        <div className={cn(progressBarVariants({ variant }), "relative flex-1", className)}>
          <div
            className="h-full rounded-full transition-all duration-500 ease-out"
            style={{ width: `${percentage}%` }}
          >
            {percentage > 0 && (
              <div className={cn(progressPip({ variant }), "shadow-sm")} />
            )}
          </div>
        </div>
        {showLabel && (
          <span className="shrink-0 font-mono text-body-xs text-foreground-secondary tracking-wider tabular-nums">
            {labelFormat === "percent"
              ? `${Math.round(percentage)}%`
              : `${value}/${max}`}
          </span>
        )}
      </div>
    );
  }
);
Progress.displayName = "Progress";

export { Progress };
