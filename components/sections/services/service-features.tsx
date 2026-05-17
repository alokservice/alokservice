import { Check } from "lucide-react";
import { SectionHeader } from "@/components/shared/section-header";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { FadeIn } from "@/components/animations/fade-in";
import type { Service } from "@/data/services";

interface ServiceFeaturesProps {
  service: Service;
}

export function ServiceFeatures({ service }: ServiceFeaturesProps) {
  return (
    <section className="section-padding bg-white">
      <div className="container-wide">
        <SectionHeader
          subtitle="Features"
          title={`What's Included in ${service.title}`}
          description="Every feature is designed to give you peace of mind and exceptional value."
        />

        <div className="grid md:grid-cols-2 gap-6">
          <FadeIn direction="left" className="h-full">
            <Card variant="gradient" className="h-full">
              <h3 className="text-xl font-bold text-brand-800 mb-6">
                Key Features
              </h3>
              <div className="space-y-4">
                {service.features.map((feature) => (
                  <div
                    key={feature}
                    className="flex items-start gap-3"
                  >
                    <div className="w-6 h-6 rounded-lg bg-green-100 flex items-center justify-center shrink-0">
                      <Check className="w-4 h-4 text-green-600" />
                    </div>
                    <span className="text-gray-600">{feature}</span>
                  </div>
                ))}
              </div>
            </Card>
          </FadeIn>

          <FadeIn direction="right" className="h-full">
            <Card variant="gradient" className="h-full">
              <h3 className="text-xl font-bold text-brand-800 mb-6">
                Industries We Serve
              </h3>
              <div className="flex flex-wrap gap-3">
                {service.industries.map((industry) => (
                  <Badge key={industry} variant="default" className="text-sm px-4 py-2">
                    {industry}
                  </Badge>
                ))}
              </div>

              <div className="mt-10">
                <h3 className="text-xl font-bold text-brand-800 mb-4">
                  Included Services
                </h3>
                <div className="space-y-3">
                  {service.includedServices.map((included) => (
                    <div
                      key={included}
                      className="flex items-start gap-3 text-sm text-gray-600"
                    >
                      <span className="w-1.5 h-1.5 rounded-full bg-brand-800 mt-2 shrink-0" />
                      {included}
                    </div>
                  ))}
                </div>
              </div>
            </Card>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}
