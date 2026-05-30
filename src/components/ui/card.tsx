"use client";

import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";

const cardVariants = cva("overflow-hidden bg-surface-container-lowest border", {
  variants: {
    variant: {
      default: "border-[#E2E8F0] rounded-lg",
      elevated: "border-transparent rounded-lg shadow-[0px_4px_12px_rgba(10,25,47,0.08)]",
      glass:
        "bg-white/70 backdrop-blur-xl border-white/20 rounded-lg",
    },
  },
  defaultVariants: {
    variant: "default",
  },
});

const CardRoot = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement> & VariantProps<typeof cardVariants>
>(({ className, variant, ...props }, ref) => (
  <div
    ref={ref}
    className={cn(cardVariants({ variant }), className)}
    {...props}
  />
));
CardRoot.displayName = "Card";

const CardHeader = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn("flex flex-col gap-1 px-6 pt-6 pb-0", className)}
    {...props}
  />
));
CardHeader.displayName = "Card.Header";

const CardTitle = React.forwardRef<
  HTMLHeadingElement,
  React.HTMLAttributes<HTMLHeadingElement>
>(({ className, ...props }, ref) => (
  <h3
    ref={ref}
    className={cn(
      "font-headline-md text-headline-md text-on-surface",
      className
    )}
    {...props}
  />
));
CardTitle.displayName = "Card.Title";

const CardDescription = React.forwardRef<
  HTMLParagraphElement,
  React.HTMLAttributes<HTMLParagraphElement>
>(({ className, ...props }, ref) => (
  <p
    ref={ref}
    className={cn("font-body-md text-body-md text-on-surface-variant", className)}
    {...props}
  />
));
CardDescription.displayName = "Card.Description";

const CardContent = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div ref={ref} className={cn("p-6", className)} {...props} />
));
CardContent.displayName = "Card.Content";

const CardFooter = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn(
      "flex items-center gap-3 px-6 py-4 border-t border-[#E2E8F0] bg-surface-container-low",
      className
    )}
    {...props}
  />
));
CardFooter.displayName = "Card.Footer";

const Card = Object.assign(CardRoot, {
  Header: CardHeader,
  Title: CardTitle,
  Description: CardDescription,
  Content: CardContent,
  Footer: CardFooter,
});

export { Card };
