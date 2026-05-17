import { services } from "@/data/services";
import { createPageMetadata } from "@/lib/metadata";
import { serviceSchema } from "@/lib/schema";
import { ServiceHero } from "@/components/sections/services/service-hero";
import { ServiceOverview } from "@/components/sections/services/service-overview";
import { ServiceBenefits } from "@/components/sections/services/service-benefits";
import { ServiceProcess } from "@/components/sections/services/service-process";
import { ServiceFeatures } from "@/components/sections/services/service-features";
import { ServiceFAQ } from "@/components/sections/services/service-faq";
import { ServiceTestimonials } from "@/components/sections/services/service-testimonials";
import { ServiceCTA } from "@/components/sections/services/service-cta";
import { RelatedServices } from "@/components/sections/services/related-services";
import { Card } from "@/components/ui/card";

const service = services.find((s) => s.slug === "facility-management")!;

export const metadata = createPageMetadata({
  title: service.metaTitle,
  description: service.metaDescription,
  path: `/services/${service.slug}`,
});

export default function FacilityManagementPage() {
  const schema = serviceSchema(service);
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />
      <ServiceHero service={service} />
      <section className="section-padding bg-gradient-warm">
        <div className="container-wide">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="relative rounded-3xl overflow-hidden shadow-medium">
              <img
                src="/images/services/facility-management.jpg"
                alt="Facility management"
                className="w-full h-[400px] object-cover"
                loading="lazy"
              />
            </div>
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-brand-800 mb-4">
                Comprehensive Facility Solutions Under One Roof
              </h2>
              <p className="text-gray-600 leading-relaxed mb-4">
                Managing a facility involves dozens of moving parts — from
                maintenance and cleaning to security and vendor coordination.
                Our integrated approach brings everything together under a
                single, accountable partnership.
              </p>
              <p className="text-gray-600 leading-relaxed">
                We don&apos;t just manage buildings; we create environments where
                people thrive. Our proactive maintenance approach prevents issues
                before they arise, saving you time, money, and stress.
              </p>
            </div>
          </div>
        </div>
      </section>
      <section className="section-padding bg-white">
        <div className="container-wide">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <span className="inline-block px-4 py-1.5 rounded-full bg-brand-100 text-brand-800 text-xs font-semibold uppercase tracking-wider mb-4">
              Service Coverage
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-brand-800 mb-4">
              End-to-End Facility Management
            </h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { title: "Maintenance & Repairs", desc: "Electrical, plumbing, HVAC, carpentry, and general repairs." },
              { title: "Housekeeping", desc: "Daily cleaning, deep cleaning, and sanitation services." },
              { title: "Security Services", desc: "Trained guards, CCTV monitoring, and access control." },
              { title: "Landscaping", desc: "Garden maintenance, lawn care, and outdoor upkeep." },
              { title: "Waste Management", desc: "Regular waste collection, segregation, and disposal." },
              { title: "Pest Control", desc: "Preventive and reactive pest management for your facility." },
              { title: "Vendor Coordination", desc: "Single-point management of all third-party service providers." },
              { title: "Compliance & Safety", desc: "Fire safety, regulatory compliance, and audit readiness." },
            ].map((item) => (
              <Card key={item.title} hover>
                <h3 className="font-bold text-brand-800 mb-2">{item.title}</h3>
                <p className="text-sm text-gray-500">{item.desc}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>
      <ServiceOverview service={service} />
      <ServiceBenefits service={service} />
      <ServiceProcess service={service} />
      <ServiceFeatures service={service} />
      <ServiceTestimonials service={service} />
      <ServiceFAQ service={service} />
      <RelatedServices service={service} />
      <ServiceCTA service={service} />
    </>
  );
}
