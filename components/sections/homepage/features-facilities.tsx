import {
  Ambulance,
  Award,
  BadgeCheck,
  Sparkles,
  Shield,
  Headphones,
} from "lucide-react";
import { SectionHeader } from "@/components/shared/section-header";
import { Card } from "@/components/ui/card";
import { FadeIn } from "@/components/animations/fade-in";

const features = [
  {
    icon: Ambulance,
    title: "Emergency Support",
    description:
      "24/7 emergency response team ready to assist you anytime, anywhere in our service area.",
  },
  {
    icon: Award,
    title: "Skilled & Certified Staff",
    description:
      "Every professional is certified, trained, and evaluated regularly to maintain the highest standards.",
  },
  {
    icon: BadgeCheck,
    title: "Verified Caregivers",
    description:
      "All caregivers undergo thorough background checks, skill verification, and personality assessments.",
  },
  {
    icon: Sparkles,
    title: "Sanitized Cleaning",
    description:
      "Hospital-grade sanitization protocols using EPA-approved disinfectants for your safety.",
  },
  {
    icon: Shield,
    title: "Fully Insured",
    description:
      "Every service is covered by comprehensive insurance for your complete peace of mind.",
  },
  {
    icon: Headphones,
    title: "Dedicated Support",
    description:
      "Personal account manager assigned to every client for consistent, personalized service.",
  },
];

export function FeaturesFacilities() {
  return (
    <section className="section-padding bg-gradient-warm">
      <div className="container-wide">
        <SectionHeader
          subtitle="Why Trust Us"
          title="Premium Facilities & Round-the-Clock Support"
          description="We invest in quality infrastructure and support systems to deliver an unmatched service experience."
        />

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, i) => {
            const Icon = feature.icon;
            return (
              <FadeIn key={feature.title} delay={i * 0.1}>
                <Card variant="glass" hover className="h-full">
                  <div className="w-12 h-12 rounded-xl bg-brand-100 flex items-center justify-center mb-4">
                    <Icon className="w-6 h-6 text-brand-800" />
                  </div>
                  <h3 className="text-lg font-bold text-brand-800 mb-2">
                    {feature.title}
                  </h3>
                  <p className="text-sm text-gray-500 leading-relaxed">
                    {feature.description}
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
