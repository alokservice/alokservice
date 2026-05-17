import { SectionHeader } from "@/components/shared/section-header";
import { ServiceCard } from "@/components/shared/service-card";
import { services } from "@/data/services";
import type { Service } from "@/data/services";

interface RelatedServicesProps {
  service: Service;
}

export function RelatedServices({ service }: RelatedServicesProps) {
  const related = services.filter((s) => s.id !== service.id).slice(0, 3);

  return (
    <section className="section-padding bg-gradient-warm">
      <div className="container-wide">
        <SectionHeader
          subtitle="Explore More"
          title="Other Services You Might Need"
          description="Discover our complete range of premium services designed to care for your home and health."
        />

        <div className="grid md:grid-cols-3 gap-6">
          {related.map((s) => (
            <ServiceCard key={s.id} service={s} variant="default" />
          ))}
        </div>
      </div>
    </section>
  );
}
