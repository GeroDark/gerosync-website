import Link from "next/link";
import type { ButtonHTMLAttributes, ReactNode } from "react";
import { cn } from "@/lib/utils";

type ButtonVariant = "primary" | "secondary" | "ghost";

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  children: ReactNode;
  href?: string;
  variant?: ButtonVariant;
};

const variants: Record<ButtonVariant, string> = {
  primary:
    "bg-cyan text-ink shadow-glow hover:bg-cyan/90 focus-visible:outline-cyan",
  secondary:
    "border border-white/[0.16] bg-white/[0.08] text-white hover:border-cyan/50 hover:bg-white/[0.12] focus-visible:outline-cyan",
  ghost: "text-steel hover:text-white focus-visible:outline-cyan"
};

export function Button({
  children,
  className,
  href,
  variant = "primary",
  ...props
}: ButtonProps) {
  const classes = cn(
    "inline-flex min-h-11 items-center justify-center rounded-md px-5 text-sm font-semibold transition focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 disabled:pointer-events-none disabled:opacity-60",
    variants[variant],
    className
  );

  if (href) {
    return (
      <Link className={classes} href={href}>
        {children}
      </Link>
    );
  }

  return (
    <button className={classes} {...props}>
      {children}
    </button>
  );
}
