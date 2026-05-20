import Link from "next/link";
import {
  Sparkles,
  Bug,
  Home,
  Stethoscope,
  Baby,
  HeartPulse,
  Building2,
  ArrowRight,
} from "lucide-react";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { FadeIn } from "@/components/animations/fade-in";
import type { Service } from "@/data/services";
import { cn } from "@/lib/utils";

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  Sparkles,
  Bug,
  Home,
  Stethoscope,
  Baby,
  HeartPulse,
  Building2,
};

interface ServiceCardProps {
  service: Service;
  index?: number;
  variant?: "default" | "compact" | "detailed";
}

export function ServiceCard({
  service,
  index = 0,
  variant = "default",
}: ServiceCardProps) {
  const Icon = iconMap[service.icon];

  if (variant === "compact") {
    return (
      <FadeIn delay={index * 0.1}>
        <Link href={`/services/${service.slug}`}>
          <Card hover className="group h-full flex flex-col">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-xl bg-gradient-warm flex items-center justify-center shrink-0">
                {Icon && <Icon className="w-6 h-6 text-brand-800" />}
              </div>
              <div className="flex-1 min-w-0">
                <h3 className="font-semibold text-lg text-brand-800 group-hover:text-brand-700 transition-colors">
                  {service.title}
                </h3>
                <p className="text-sm text-gray-500 mt-1 line-clamp-2">
                  {service.shortDescription}
                </p>
              </div>
            </div>
          </Card>
        </Link>
      </FadeIn>
    );
  }

  return (
    <FadeIn delay={index * 0.1}>
      <Card
        hover
        className={cn(
          "group relative overflow-hidden h-full flex flex-col",
          variant === "detailed" && "p-0"
        )}
      >
        {variant === "detailed" && (
          <div className="relative h-48 overflow-hidden">
            <img
              src={service.image}
              alt={service.title}
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              loading="lazy"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-brand-800/60 to-transparent" />
            <div className="absolute bottom-4 left-6">
              <Badge variant="accent" className="text-xs">
                Premium Service
              </Badge>
            </div>
          </div>
        )}

        <div className={cn("flex flex-col h-full", variant === "detailed" ? "p-6" : "")}>
          <div
            className={cn(
              "w-14 h-14 rounded-2xl bg-gradient-warm flex items-center justify-center mb-4",
              variant === "default" && ""
            )}
          >
            {Icon && <Icon className="w-7 h-7 text-brand-800" />}
          </div>

          <h3 className="text-xl font-bold text-brand-800 mb-2">
            {service.title}
          </h3>
          <p className="text-gray-500 text-sm leading-relaxed mb-4 flex-grow">
            {service.shortDescription}
          </p>

          {variant === "detailed" && (
            <ul className="space-y-2 mb-4">
              {service.features.slice(0, 3).map((feature) => (
                <li
                  key={feature}
                  className="text-sm text-gray-600 flex items-start gap-2"
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-brand-800 mt-2 shrink-0" />
                  {feature}
                </li>
              ))}
            </ul>
          )}

          <Link
            href={`/services/${service.slug}`}
            className="inline-flex items-center gap-2 text-sm font-semibold text-brand-800 group/link mt-auto"
          >
            Learn More
            <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover/link:translate-x-1" />
          </Link>
        </div>
      </Card>
    </FadeIn>
  );
}
