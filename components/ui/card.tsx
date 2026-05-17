import * as React from "react";
import { cn } from "@/lib/utils";

interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  variant?: "default" | "glass" | "bordered" | "gradient";
  hover?: boolean;
}

export function Card({
  className,
  variant = "default",
  hover = false,
  children,
  ...props
}: CardProps & React.PropsWithChildren) {
  const variantStyles = {
    default: "bg-white shadow-soft border border-gray-100",
    glass: "glass",
    bordered: "bg-white border-2 border-gray-200",
    gradient: "bg-gradient-warm border border-gray-100",
  };

  return (
    <div
      className={cn(
        "rounded-2xl p-6 md:p-8 transition-all duration-300",
        variantStyles[variant],
        hover && "hover-lift hover-glow",
        className
      )}
      {...props}
    >
      {children}
    </div>
  );
}
