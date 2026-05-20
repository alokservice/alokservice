import { services } from "@/data/services";
import { createPageMetadata } from "@/lib/metadata";
import { serviceSchema } from "@/lib/schema";
import { ServiceHero } from "@/components/sections/services/service-hero";
import { ServiceOverview } from "@/components/sections/services/service-overview";
import { ServiceGallery } from "@/components/sections/services/service-gallery";
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
      <ServiceOverview service={service} />
      <ServiceGallery service={service} />
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
