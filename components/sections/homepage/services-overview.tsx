import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { SectionHeader } from "@/components/shared/section-header";
import { ServiceCard } from "@/components/shared/service-card";
import { Button } from "@/components/ui/button";
import { services } from "@/data/services";
import { StaggerContainer, StaggerItem } from "@/components/animations/stagger-container";

export function ServicesOverview() {
  return (
    <section className="section-padding bg-white">
      <div className="container-wide">
        <SectionHeader
          subtitle="Our Services"
          title="Comprehensive Care & Maintenance Solutions"
          description="From healthcare to housekeeping, we deliver premium services that make your life easier and your space better."
        />

        <StaggerContainer className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, i) => (
            <StaggerItem key={service.id}>
              <ServiceCard service={service} index={i} variant="detailed" />
            </StaggerItem>
          ))}
        </StaggerContainer>

        <div className="mt-12 text-center">
          <Link href="/services">
            <Button variant="secondary" size="lg">
              View All Services
              <ArrowRight className="w-5 h-5" />
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
}
