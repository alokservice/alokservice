import * as React from "react";
import { cn } from "@/lib/utils";

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "outline" | "ghost" | "accent";
  size?: "sm" | "md" | "lg" | "xl";
  as?: "button" | "a";
  href?: string;
}

const variantStyles = {
  primary:
    "bg-brand-800 text-white hover:bg-brand-700 shadow-soft hover:shadow-medium active:scale-[0.98]",
  secondary:
    "bg-white text-brand-800 border-2 border-brand-800 hover:bg-brand-50 active:scale-[0.98]",
  outline:
    "bg-transparent text-brand-800 border border-gray-300 hover:border-brand-400 hover:bg-brand-50 active:scale-[0.98]",
  ghost:
    "bg-transparent text-brand-800 hover:bg-brand-100 active:scale-[0.98]",
  accent:
    "bg-gradient-brand text-white shadow-soft hover:shadow-medium hover:opacity-90 active:scale-[0.98]",
};

const sizeStyles = {
  sm: "px-4 py-2 text-sm rounded-lg",
  md: "px-6 py-3 text-base rounded-xl",
  lg: "px-8 py-4 text-lg rounded-xl",
  xl: "px-10 py-5 text-lg rounded-2xl",
};

export function Button({
  className,
  variant = "primary",
  size = "md",
  as = "button",
  href,
  children,
  ...props
}: ButtonProps & React.PropsWithChildren) {
  const classes = cn(
    "inline-flex items-center justify-center gap-2 font-semibold transition-all duration-300 ease-out cursor-pointer",
    variantStyles[variant],
    sizeStyles[size],
    "focus:outline-none focus:ring-2 focus:ring-brand-400 focus:ring-offset-2",
    "disabled:opacity-50 disabled:cursor-not-allowed",
    className
  );

  if (as === "a" && href) {
    return (
      <a href={href} className={classes}>
        {children}
      </a>
    );
  }

  return (
    <button className={classes} {...props}>
      {children}
    </button>
  );
}
