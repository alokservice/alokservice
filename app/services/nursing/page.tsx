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
import { Badge } from "@/components/ui/badge";

const service = services.find((s) => s.slug === "nursing")!;

export const metadata = createPageMetadata({
  title: service.metaTitle,
  description: service.metaDescription,
  path: `/services/${service.slug}`,
});

export default function NursingPage() {
  const schema = serviceSchema(service);
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />
      <ServiceHero service={service} />
      <section className="section-padding bg-white">
        <div className="container-wide">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="order-2 lg:order-1">
              <h2 className="text-3xl md:text-4xl font-bold text-brand-800 mb-4">
                Clinical Expertise in the Comfort of Your Home
              </h2>
              <p className="text-gray-600 leading-relaxed mb-6">
                Our nursing team brings hospital-grade care to your doorstep.
                Whether you&apos;re recovering from surgery, managing a chronic
                condition, or need palliative support, our registered nurses
                provide skilled, compassionate care.
              </p>
              <div className="flex flex-wrap gap-3">
                <Badge variant="default">Wound Care</Badge>
                <Badge variant="default">IV Therapy</Badge>
                <Badge variant="default">Medication Management</Badge>
                <Badge variant="default">Post-Surgery Care</Badge>
                <Badge variant="default">Chronic Disease Management</Badge>
                <Badge variant="default">Palliative Care</Badge>
              </div>
            </div>
            <div className="order-1 lg:order-2 relative rounded-3xl overflow-hidden shadow-medium">
              <img
                src="/nursing-service.jpg"
                alt="Professional nursing care"
                className="w-full h-[400px] object-cover"
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </section>
      <section className="section-padding bg-gradient-warm">
        <div className="container-wide">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <span className="inline-block px-4 py-1.5 rounded-full bg-brand-100 text-brand-800 text-xs font-semibold uppercase tracking-wider mb-4">
              Quality Standards
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-brand-800 mb-4">
              Our Nursing Standards
            </h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { title: "Registered Nurses", desc: "All our nurses are fully registered with valid licenses and ongoing education." },
              { title: "Doctor Collaboration", desc: "We work closely with your physician to ensure aligned care plans." },
              { title: "24/7 Availability", desc: "Round-the-clock nursing support for emergencies and scheduled care." },
              { title: "Patient Education", desc: "We empower patients and families with knowledge about their health." },
            ].map((item) => (
              <Card key={item.title} hover className="text-center">
                <h3 className="font-bold text-brand-800 mb-2">{item.title}</h3>
                <p className="text-sm text-gray-500">{item.desc}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>
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
