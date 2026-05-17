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

const service = services.find((s) => s.slug === "home-care")!;

export const metadata = createPageMetadata({
  title: service.metaTitle,
  description: service.metaDescription,
  path: `/services/${service.slug}`,
});

export default function HomeCarePage() {
  const schema = serviceSchema(service);
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />
      <ServiceHero service={service} />
      <ServiceOverview service={service} />
      <section className="section-padding bg-gradient-warm">
        <div className="container-wide">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <span className="inline-block px-4 py-1.5 rounded-full bg-brand-100 text-brand-800 text-xs font-semibold uppercase tracking-wider mb-4">
              Our Commitment
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-brand-800 mb-4">
              Compassion Is at the Heart of Everything We Do
            </h2>
            <p className="text-gray-500">
              We treat every client like family. Our caregivers are selected not
              just for their skills, but for their warmth, patience, and genuine
              desire to help others.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                title: "Personalized Matching",
                desc: "We match caregivers with clients based on personality, interests, and care needs for a natural connection.",
              },
              {
                title: "Family Involvement",
                desc: "We encourage family participation in care planning and provide regular updates on your loved one's wellbeing.",
              },
              {
                title: "Dignity & Respect",
                desc: "Every client is treated with the utmost dignity, respect, and sensitivity to their preferences and routines.",
              },
            ].map((item) => (
              <Card key={item.title} hover className="text-center">
                <h3 className="text-xl font-bold text-brand-800 mb-3">
                  {item.title}
                </h3>
                <p className="text-gray-500 text-sm">{item.desc}</p>
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
