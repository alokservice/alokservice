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

const service = services.find((s) => s.slug === "caregiver-support")!;

export const metadata = createPageMetadata({
  title: service.metaTitle,
  description: service.metaDescription,
  path: `/services/${service.slug}`,
});

export default function CaregiverSupportPage() {
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
                src="/images/services/caregiver-support.jpg"
                alt="Caregiver support"
                className="w-full h-[400px] object-cover"
                loading="lazy"
              />
            </div>
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-brand-800 mb-4">
                You Care for Others. Let Us Care for You.
              </h2>
              <p className="text-gray-600 leading-relaxed mb-4">
                Being a caregiver is one of the most demanding roles. Between
                managing medications, providing emotional support, and handling
                daily tasks, it&apos;s easy to neglect your own wellbeing.
              </p>
              <p className="text-gray-600 leading-relaxed">
                Our caregiver support program is designed to give you the break
                you deserve while ensuring your loved one receives professional,
                compassionate care. Whether you need a few hours or a few days,
                we&apos;re here to help.
              </p>
            </div>
          </div>
        </div>
      </section>
      <section className="section-padding bg-white">
        <div className="container-wide">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <span className="inline-block px-4 py-1.5 rounded-full bg-brand-100 text-brand-800 text-xs font-semibold uppercase tracking-wider mb-4">
              Signs You Need Support
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-brand-800 mb-4">
              Are You Experiencing Caregiver Burnout?
            </h2>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              { title: "Constant Exhaustion", desc: "You feel tired all the time, even after resting." },
              { title: "Irritability", desc: "You find yourself getting frustrated or angry easily." },
              { title: "Social Withdrawal", desc: "You've stopped seeing friends or pursuing hobbies." },
              { title: "Health Decline", desc: "Your own health is suffering due to caregiving demands." },
              { title: "Sleep Problems", desc: "You struggle to sleep or wake up feeling unrested." },
              { title: "Feeling Overwhelmed", desc: "The responsibility feels too heavy to manage alone." },
            ].map((item) => (
              <Card key={item.title} hover>
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
