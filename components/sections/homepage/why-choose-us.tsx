import { Shield, Award, Users, Clock, Leaf, HeartHandshake } from "lucide-react";
import { SectionHeader } from "@/components/shared/section-header";
import { Card } from "@/components/ui/card";
import { FadeIn } from "@/components/animations/fade-in";

const reasons = [
  {
    icon: Shield,
    title: "Verified & Trained Staff",
    description:
      "Every professional undergoes rigorous background verification, skill assessment, and ongoing training to maintain our excellence standards.",
  },
  {
    icon: Award,
    title: "Quality Guaranteed",
    description:
      "We stand behind every service with a 100% satisfaction guarantee. If you're not happy, we make it right at no extra cost.",
  },
  {
    icon: Users,
    title: "Personalized Approach",
    description:
      "We tailor every service to your unique needs. No cookie-cutter solutions — just care that fits your lifestyle and preferences.",
  },
  {
    icon: Clock,
    title: "Punctual & Reliable",
    description:
      "Time is precious. We arrive on time, every time, and complete services within the promised timeframe without compromising quality.",
  },
  {
    icon: Leaf,
    title: "Eco-Friendly Practices",
    description:
      "We use environmentally safe products and sustainable practices across all our services — protecting your home and the planet.",
  },
  {
    icon: HeartHandshake,
    title: "Compassionate Care",
    description:
      "At our core, we genuinely care. Every interaction is guided by empathy, respect, and a commitment to improving lives.",
  },
];

export function WhyChooseUs() {
  return (
    <section className="section-padding bg-gradient-warm">
      <div className="container-wide">
        <SectionHeader
          subtitle="Why Alok Service"
          title="Why Families & Businesses Trust Us"
          description="We don't just deliver services — we build lasting relationships through quality, reliability, and genuine care."
        />

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {reasons.map((reason, i) => {
            const Icon = reason.icon;
            return (
              <FadeIn key={reason.title} delay={i * 0.1}>
                <Card hover className="h-full">
                  <div className="w-12 h-12 rounded-xl bg-brand-100 flex items-center justify-center mb-4">
                    <Icon className="w-6 h-6 text-brand-800" />
                  </div>
                  <h3 className="text-lg font-bold text-brand-800 mb-2">
                    {reason.title}
                  </h3>
                  <p className="text-sm text-gray-500 leading-relaxed">
                    {reason.description}
                  </p>
                </Card>
              </FadeIn>
            );
          })}
        </div>
      </div>
    </section>
  );
}
