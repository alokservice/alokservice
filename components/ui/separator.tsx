import * as React from "react";
import { cn } from "@/lib/utils";

interface SeparatorProps extends React.HTMLAttributes<HTMLDivElement> {
  variant?: "light" | "dark" | "gradient";
}

export function Separator({ className, variant = "light" }: SeparatorProps) {
  const variantStyles = {
    light: "bg-gray-200",
    dark: "bg-brand-800/20",
    gradient: "bg-gradient-to-r from-transparent via-brand-800/20 to-transparent",
  };

  return (
    <div
      className={cn("h-px w-full", variantStyles[variant], className)}
      role="separator"
    />
  );
}
