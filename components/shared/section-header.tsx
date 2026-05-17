import { cn } from "@/lib/utils";

interface SectionHeaderProps {
  title: string;
  subtitle?: string;
  description?: string;
  align?: "left" | "center";
  className?: string;
  titleClassName?: string;
  descriptionClassName?: string;
}

export function SectionHeader({
  title,
  subtitle,
  description,
  align = "center",
  className,
  titleClassName,
  descriptionClassName,
}: SectionHeaderProps) {
  return (
    <div
      className={cn(
        "max-w-3xl mb-12 md:mb-16",
        align === "center" && "mx-auto text-center",
        align === "left" && "text-left",
        className
      )}
    >
      {subtitle && (
        <span className="inline-block px-4 py-1.5 rounded-full bg-brand-100 text-brand-800 text-xs font-semibold uppercase tracking-wider mb-4">
          {subtitle}
        </span>
      )}
      <h2 className={cn("text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-brand-800 leading-tight", titleClassName)}>
        {title}
      </h2>
      {description && (
        <p className={cn("mt-4 text-base md:text-lg text-gray-600 leading-relaxed", descriptionClassName)}>
          {description}
        </p>
      )}
    </div>
  );
}
