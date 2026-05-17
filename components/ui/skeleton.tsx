import * as React from "react";
import { cn } from "@/lib/utils";

interface SkeletonProps extends React.HTMLAttributes<HTMLDivElement> {
  variant?: "text" | "circular" | "rectangular";
}

export function Skeleton({ className, variant = "text", ...props }: SkeletonProps) {
  const variantStyles = {
    text: "h-4 w-full rounded",
    circular: "h-12 w-12 rounded-full",
    rectangular: "h-48 w-full rounded-2xl",
  };

  return (
    <div
      className={cn(
        "animate-pulse bg-gray-200",
        variantStyles[variant],
        className
      )}
      {...props}
    />
  );
}
