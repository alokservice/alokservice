import { ClipboardList, Users, ShieldCheck, ThumbsUp } from "lucide-react";
import { SectionHeader } from "@/components/shared/section-header";
import { FadeIn } from "@/components/animations/fade-in";

const steps = [
  {
    icon: ClipboardList,
    title: "Share Your Needs",
    description:
      "Tell us what you need through our simple booking system, call, or WhatsApp. We'll listen carefully to understand your requirements.",
  },
  {
    icon: Users,
    title: "We Match You",
    description:
      "We assign the right professional based on your needs, schedule, and preferences. You'll get their details before they arrive.",
  },
  {
    icon: ShieldCheck,
    title: "Service Delivered",
    description:
      "Our expert arrives on time, completes the work with precision, and ensures everything meets our quality standards.",
  },
  {
    icon: ThumbsUp,
    title: "You Relax",
    description:
      "Enjoy the results! We follow up to ensure your satisfaction and are always here if you need us again.",
  },
];

export function ProcessSection() {
  return (
    <section className="section-padding bg-gradient-warm">
      <div className="container-wide">
        <SectionHeader
          subtitle="How It Works"
          title="Simple Steps to Premium Service"
          description="Getting started is easy. We've designed our process to be seamless, transparent, and stress-free."
        />

        <div className="relative">
          <div className="hidden lg:block absolute top-1/2 left-[15%] right-[15%] h-0.5 bg-gradient-to-r from-brand-800/10 via-brand-800/30 to-brand-800/10 -translate-y-1/2" />

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {steps.map((step, i) => {
              const Icon = step.icon;
              return (
                <FadeIn key={step.title} delay={i * 0.15}>
                  <div className="relative text-center">
                    <div className="w-16 h-16 rounded-2xl bg-gradient-brand flex items-center justify-center mx-auto mb-6 relative z-10 shadow-soft">
                      <Icon className="w-7 h-7 text-white" />
                    </div>
                    <span className="inline-flex items-center justify-center w-8 h-8 rounded-full bg-brand-100 text-brand-800 text-sm font-bold mb-4">
                      {i + 1}
                    </span>
                    <h3 className="text-lg font-bold text-brand-800 mb-2">
                      {step.title}
                    </h3>
                    <p className="text-sm text-gray-500 leading-relaxed max-w-xs mx-auto">
                      {step.description}
                    </p>
                  </div>
                </FadeIn>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
