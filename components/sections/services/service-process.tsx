import { SectionHeader } from "@/components/shared/section-header";
import { FadeIn } from "@/components/animations/fade-in";
import type { Service } from "@/data/services";

interface ServiceProcessProps {
  service: Service;
}

export function ServiceProcess({ service }: ServiceProcessProps) {
  return (
    <section className="section-padding bg-white">
      <div className="container-wide">
        <SectionHeader
          subtitle="Our Process"
          title={`How Our ${service.title} Works`}
          description="A transparent, step-by-step approach to delivering exceptional results."
        />

        <div className="max-w-4xl mx-auto">
          {service.process.map((step, i) => (
            <FadeIn key={step.step} delay={i * 0.1}>
              <div className="flex gap-6 mb-8 last:mb-0">
                <div className="flex flex-col items-center">
                  <div className="w-12 h-12 rounded-2xl bg-gradient-brand flex items-center justify-center shrink-0">
                    <span className="text-white font-bold">{step.step}</span>
                  </div>
                  {i < service.process.length - 1 && (
                    <div className="w-0.5 flex-1 bg-gradient-to-b from-brand-800/20 to-transparent mt-2" />
                  )}
                </div>
                <div className="pb-8">
                  <h3 className="text-xl font-bold text-brand-800 mb-2">
                    {step.title}
                  </h3>
                  <p className="text-gray-500 leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
