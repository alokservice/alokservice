import { Star } from "lucide-react";
import { SectionHeader } from "@/components/shared/section-header";
import { Card } from "@/components/ui/card";
import { FadeIn } from "@/components/animations/fade-in";
import { testimonials } from "@/data/testimonials";
import type { Service } from "@/data/services";

interface ServiceTestimonialsProps {
  service: Service;
}

export function ServiceTestimonials({ service }: ServiceTestimonialsProps) {
  const serviceTestimonials = testimonials.filter(
    (t) => t.service === service.title
  );

  if (serviceTestimonials.length === 0) return null;

  return (
    <section className="section-padding bg-white">
      <div className="container-wide">
        <SectionHeader
          subtitle="Testimonials"
          title={`What Clients Say About Our ${service.title}`}
          description="Real feedback from real customers who trust us."
        />

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {serviceTestimonials.map((t, i) => (
            <FadeIn key={t.id} delay={i * 0.1}>
              <Card variant="glass" className="h-full">
                <div className="flex items-center gap-1 mb-4">
                  {Array.from({ length: 5 }).map((_, ii) => (
                    <Star
                      key={ii}
                      className={`w-4 h-4 ${
                        ii < t.rating
                          ? "text-accent-500 fill-accent-500"
                          : "text-gray-200"
                      }`}
                    />
                  ))}
                </div>
                <p className="text-gray-600 text-sm leading-relaxed mb-4">
                  &ldquo;{t.content}&rdquo;
                </p>
                <div className="flex items-center gap-3 mt-auto">
                  <img
                    src={t.avatar}
                    alt={t.name}
                    className="w-10 h-10 rounded-full object-cover"
                    loading="lazy"
                  />
                  <div>
                    <p className="font-semibold text-brand-800 text-sm">
                      {t.name}
                    </p>
                    <p className="text-gray-400 text-xs">{t.location}</p>
                  </div>
                </div>
              </Card>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
