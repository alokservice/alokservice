import { SectionHeader } from "@/components/shared/section-header";
import { Card } from "@/components/ui/card";
import { FadeIn } from "@/components/animations/fade-in";
import type { Service } from "@/data/services";

const benefitIcons = [
  "01", "02", "03", "04", "05", "06"
];

interface ServiceBenefitsProps {
  service: Service;
}

export function ServiceBenefits({ service }: ServiceBenefitsProps) {
  return (
    <section className="section-padding bg-gradient-warm">
      <div className="container-wide">
        <SectionHeader
          subtitle="Benefits"
          title={`Why Choose Our ${service.title}`}
          description="Experience the difference that professional, compassionate service makes."
        />

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {service.benefits.map((benefit, i) => (
            <FadeIn key={benefit} delay={i * 0.1}>
              <Card hover className="h-full">
                <div className="w-12 h-12 rounded-xl bg-brand-100 flex items-center justify-center mb-4">
                  <span className="text-brand-800 font-bold text-sm">
                    {benefitIcons[i]}
                  </span>
                </div>
                <h3 className="text-lg font-bold text-brand-800 mb-2">
                  {benefit}
                </h3>
                <p className="text-sm text-gray-500">
                  We deliver this benefit through our commitment to quality,
                  trained professionals, and customer-focused approach.
                </p>
              </Card>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
