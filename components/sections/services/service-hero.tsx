import { Badge } from "@/components/ui/badge";
import { Breadcrumbs } from "@/components/shared/breadcrumbs";
import { siteConfig } from "@/data/site-config";
import type { Service } from "@/data/services";

interface ServiceHeroProps {
  service: Service;
}

export function ServiceHero({ service }: ServiceHeroProps) {
  return (
    <section className="relative pt-32 pb-16 md:pt-40 md:pb-20 overflow-hidden bg-brand-800">
      <div className="absolute inset-0">
        <img
          src={service.image}
          alt={service.title}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-brand-800/90 via-brand-800/70 to-brand-800/50" />
      </div>

      <div className="container-wide relative z-10">
        <Breadcrumbs
          items={[
            { label: "Services", href: "/services" },
            { label: service.title },
          ]}
          className="text-white/70 [&_span]:text-white [&_a]:text-white/70 [&_a:hover]:text-white [&_svg]:text-white/50"
        />

        <div className="max-w-3xl text-white">
          <Badge variant="accent" className="mb-4">
            Premium Service
          </Badge>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6">
            {service.title}
          </h1>
          <p className="text-lg md:text-xl text-white/80 leading-relaxed max-w-2xl">
            {service.description}
          </p>

          <div className="mt-8 flex flex-wrap gap-6 text-sm text-white/70">
            <span>Serving {siteConfig.serviceArea}</span>
            <span className="w-1 h-1 rounded-full bg-white/40 mt-2" />
            <span>Trusted Since {siteConfig.foundedYear}</span>
            <span className="w-1 h-1 rounded-full bg-white/40 mt-2" />
            <span>{siteConfig.satisfaction}% Satisfaction</span>
          </div>
        </div>
      </div>
    </section>
  );
}
