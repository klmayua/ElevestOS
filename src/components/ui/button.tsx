"use client";

import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { Loader2 } from "lucide-react";

import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center whitespace-nowrap rounded text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50",
  {
    variants: {
      variant: {
        primary:
          "bg-primary text-on-primary hover:bg-primary-container focus-visible:ring-primary",
        secondary:
          "border bg-transparent text-primary hover:bg-surface-container-low focus-visible:ring-primary",
        success:
          "bg-secondary text-on-secondary hover:bg-secondary/90 focus-visible:ring-secondary",
        ghost:
          "text-on-surface-variant hover:bg-surface-container-low hover:text-on-surface focus-visible:ring-primary",
        destructive:
          "bg-error text-on-error hover:bg-error/90 focus-visible:ring-error",
      },
      size: {
        sm: "h-8 px-3 text-caption gap-1.5",
        default: "h-10 px-4 gap-2",
        lg: "h-12 px-6 gap-2.5",
      },
    },
    defaultVariants: {
      variant: "primary",
      size: "default",
    },
  }
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  leftIcon?: React.ReactNode;
  rightIcon?: React.ReactNode;
  loading?: boolean;
  isLoading?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      className,
      variant,
      size,
      leftIcon,
      rightIcon,
      loading: loadingProp,
      isLoading: isLoadingProp,
      disabled,
      children,
      ...props
    },
    ref
  ) => {
    const loading = loadingProp ?? isLoadingProp ?? false;
    const isDisabled = disabled || loading;

    return (
      <button
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        disabled={isDisabled}
        {...props}
      >
        {loading ? (
          <Loader2 className="h-4 w-4 animate-spin shrink-0" />
        ) : leftIcon ? (
          <span className="shrink-0">{leftIcon}</span>
        ) : null}
        {children}
        {!loading && rightIcon && (
          <span className="shrink-0">{rightIcon}</span>
        )}
      </button>
    );
  }
);
Button.displayName = "Button";

export { Button, buttonVariants };
