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
import { FadeIn } from "@/components/animations/fade-in";

const service = services.find((s) => s.slug === "patient-care")!;

export const metadata = createPageMetadata({
  title: service.metaTitle,
  description: service.metaDescription,
  path: `/services/${service.slug}`,
});

export default function PatientCarePage() {
  const schema = serviceSchema(service);
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />
      <ServiceHero service={service} />
      <ServiceOverview service={service} />
      <section className="section-padding bg-white">
        <div className="container-wide">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-brand-800 mb-4">
                Conditions We Care For
              </h2>
              <p className="text-gray-600 leading-relaxed mb-6">
                Our patient care team is experienced in managing a wide range of
                health conditions. We adapt our approach to meet each
                patient&apos;s unique needs and recovery goals.
              </p>
              <div className="flex flex-wrap gap-3">
                <Badge variant="default">Post-Surgery Recovery</Badge>
                <Badge variant="default">Stroke Recovery</Badge>
                <Badge variant="default">Heart Conditions</Badge>
                <Badge variant="default">Diabetes Management</Badge>
                <Badge variant="default">Parkinson&apos;s Care</Badge>
                <Badge variant="default">Dementia Care</Badge>
                <Badge variant="default">Arthritis Support</Badge>
                <Badge variant="default">Palliative Care</Badge>
              </div>
            </div>
            <div className="relative rounded-3xl overflow-hidden shadow-medium">
              <img
                src="/patient-care.jpg"
                alt="Patient care"
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
              Our Difference
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-brand-800 mb-4">
              What Makes Our Patient Care Special
            </h2>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                title: "Holistic Approach",
                desc: "We care for the whole person — physical, emotional, and social wellbeing.",
              },
              {
                title: "Family-Centered",
                desc: "We involve families in care planning and provide regular, transparent updates.",
              },
              {
                title: "Recovery-Focused",
                desc: "Our goal is to help you regain independence and improve quality of life.",
              },
            ].map((item) => (
              <FadeIn key={item.title}>
                <Card hover className="text-center h-full">
                  <h3 className="text-xl font-bold text-brand-800 mb-3">
                    {item.title}
                  </h3>
                  <p className="text-gray-500">{item.desc}</p>
                </Card>
              </FadeIn>
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
