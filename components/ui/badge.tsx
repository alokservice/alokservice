import * as React from "react";
import { cn } from "@/lib/utils";

interface BadgeProps extends React.HTMLAttributes<HTMLSpanElement> {
  variant?: "default" | "success" | "warning" | "accent";
}

export function Badge({
  className,
  variant = "default",
  children,
  ...props
}: BadgeProps & React.PropsWithChildren) {
  const variantStyles = {
    default: "bg-brand-100 text-brand-800",
    success: "bg-green-100 text-green-800",
    warning: "bg-amber-100 text-amber-800",
    accent: "bg-gradient-to-r from-accent-500 to-accent-600 text-white",
  };

  return (
    <span
      className={cn(
        "inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold",
        variantStyles[variant],
        className
      )}
      {...props}
    >
      {children}
    </span>
  );
}
