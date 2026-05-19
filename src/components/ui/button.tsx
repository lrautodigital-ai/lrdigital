import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "inline-flex min-h-11 items-center justify-center gap-2 whitespace-nowrap rounded-full px-5 text-sm font-semibold transition-all duration-200 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-brand-cyan disabled:pointer-events-none disabled:opacity-50",
  {
    variants: {
      variant: {
        primary:
          "bg-white text-[#07101f] shadow-[0_12px_40px_rgba(255,255,255,0.14)] hover:-translate-y-0.5 hover:bg-cyan-50",
        secondary:
          "border border-white/12 bg-white/[0.04] text-white hover:-translate-y-0.5 hover:border-cyan-300/45 hover:bg-cyan-300/10",
        ghost:
          "text-slate-200 hover:bg-white/[0.06] hover:text-white",
        accent:
          "bg-gradient-to-r from-brand-blue via-brand-cyan to-brand-violet text-white shadow-[0_18px_50px_rgba(34,211,238,0.18)] hover:-translate-y-0.5",
      },
      size: {
        sm: "min-h-9 px-4 text-xs",
        md: "min-h-11 px-5 text-sm",
        lg: "min-h-12 px-6 text-base",
      },
    },
    defaultVariants: {
      variant: "primary",
      size: "md",
    },
  },
);

export type ButtonProps = React.AnchorHTMLAttributes<HTMLAnchorElement> &
  VariantProps<typeof buttonVariants> & {
    href: string;
  };

export function Button({
  className,
  variant,
  size,
  href,
  children,
  ...props
}: ButtonProps) {
  return (
    <a className={cn(buttonVariants({ variant, size }), className)} href={href} {...props}>
      {children}
    </a>
  );
}
