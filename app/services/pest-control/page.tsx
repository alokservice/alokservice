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

const service = services.find((s) => s.slug === "pest-control")!;

export const metadata = createPageMetadata({
  title: service.metaTitle,
  description: service.metaDescription,
  path: `/services/${service.slug}`,
});

export default function PestControlPage() {
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
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-brand-800 mb-4">
                Advanced Pest Control Technology
              </h2>
              <p className="text-gray-600 leading-relaxed mb-4">
                We use the latest pest control technology including heat
                treatments, targeted gels, and eco-friendly barrier sprays that
                eliminate pests without harming your family or pets.
              </p>
              <p className="text-gray-600 leading-relaxed">
                Our integrated pest management approach addresses the root cause
                of infestations, not just the symptoms. We identify entry points,
                breeding areas, and food sources to provide lasting protection.
              </p>
            </div>
            <div className="relative rounded-3xl overflow-hidden shadow-medium">
              <img
                src="/pest-control.jpg"
                alt="Pest control treatment"
                className="w-full h-[400px] object-cover"
                loading="lazy"
              />
            </div>
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
