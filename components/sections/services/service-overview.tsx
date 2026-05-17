import { FadeIn } from "@/components/animations/fade-in";
import { SectionHeader } from "@/components/shared/section-header";
import type { Service } from "@/data/services";

interface ServiceOverviewProps {
  service: Service;
}

export function ServiceOverview({ service }: ServiceOverviewProps) {
  return (
    <section className="section-padding bg-white">
      <div className="container-wide">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <FadeIn direction="left">
            <div className="relative">
              <div className="relative rounded-3xl overflow-hidden shadow-medium">
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-[450px] object-cover"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-brand-800/20 to-transparent" />
              </div>
            </div>
          </FadeIn>

          <div>
            <SectionHeader
              subtitle="Overview"
              title={`What is ${service.title}?`}
              description=""
              align="left"
            />
            <p className="text-gray-600 leading-relaxed mb-6">
              {service.description}
            </p>

            <div className="grid sm:grid-cols-2 gap-4">
              {service.includedServices.map((item) => (
                <div
                  key={item}
                  className="flex items-start gap-3 text-sm text-gray-600"
                >
                  <span className="w-5 h-5 rounded-full bg-green-100 flex items-center justify-center shrink-0 mt-0.5">
                    <span className="text-green-600 text-xs font-bold">
                      &#10003;
                    </span>
                  </span>
                  {item}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
