import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { servicesMetadata } from "@/lib/metadata";
import { siteConfig } from "@/data/site-config";
import { services, serviceCategories } from "@/data/services";
import { SectionHeader } from "@/components/shared/section-header";
import { ServiceCard } from "@/components/shared/service-card";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Breadcrumbs } from "@/components/shared/breadcrumbs";
import { Accordion } from "@/components/ui/accordion";
import { StaggerContainer, StaggerItem } from "@/components/animations/stagger-container";
import { FadeIn } from "@/components/animations/fade-in";
import { generalFAQs } from "@/data/faqs";

export const metadata = servicesMetadata;

export default function ServicesPage() {
  return (
    <>
      <section className="relative pt-32 pb-16 md:pt-40 md:pb-20 overflow-hidden">
        <div className="absolute inset-0">
          <img src="/images/services-bg.jpg" alt="" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-r from-brand-800/70 via-brand-800/50 to-brand-800/30" />
        </div>
        <div className="container-wide relative z-10">
          <Breadcrumbs items={[{ label: "Services" }]} className="[&_a]:text-white/70 [&_a:hover]:text-white [&_span]:text-white [&_svg]:text-white/50" />
          <SectionHeader
            subtitle="Our Services"
            title={`Premium Services by ${siteConfig.name}`}
            description="Discover our comprehensive range of home care, healthcare, cleaning, and facility management services designed to make your life better."
            align="left"
            className="!mb-6"
            titleClassName="text-white"
            descriptionClassName="text-white/70"
          />
        </div>
      </section>

      {serviceCategories.map((category) => (
        <section
          key={category.name}
          className="section-padding bg-white"
        >
          <div className="container-wide">
            <h2 className="text-2xl md:text-3xl font-bold text-brand-800 mb-8">
              {category.name}
            </h2>
            <StaggerContainer className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {category.services.map((serviceId) => {
                const service = services.find((s) => s.id === serviceId);
                if (!service) return null;
                return (
                  <StaggerItem key={service.id}>
                    <ServiceCard service={service} variant="detailed" />
                  </StaggerItem>
                );
              })}
            </StaggerContainer>
          </div>
        </section>
      ))}

      <section className="section-padding bg-gradient-warm">
        <div className="container-wide">
          <SectionHeader
            subtitle="Why Choose Us"
            title="What Sets Our Services Apart"
            description="Every service we offer is backed by our commitment to quality, professionalism, and genuine care."
          />
          <StaggerContainer className="grid md:grid-cols-3 gap-6">
            {[
              {
                title: "Certified Professionals",
                desc: "Every team member is certified, background-checked, and trained in their specific service domain.",
              },
              {
                title: "Quality Assurance",
                desc: "Multi-layer quality checks including supervisor inspections and customer feedback surveys.",
              },
              {
                title: "Flexible Scheduling",
                desc: "Book services at your convenience with easy online scheduling and same-day availability.",
              },
              {
                title: "Transparent Pricing",
                desc: "No hidden fees, no surprises. You'll know the exact cost before we start any service.",
              },
              {
                title: "Eco-Friendly Approach",
                desc: "We use environmentally safe products and sustainable practices across all our operations.",
              },
              {
                title: "100% Satisfaction",
                desc: "If you're not completely satisfied, we'll make it right or refund your money — no questions asked.",
              },
            ].map((item, i) => (
              <StaggerItem key={item.title}>
                <Card hover className="h-full">
                  <div className="w-10 h-10 rounded-xl bg-brand-100 flex items-center justify-center mb-4">
                    <span className="text-brand-800 font-bold text-sm">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                  </div>
                  <h3 className="text-lg font-bold text-brand-800 mb-2">
                    {item.title}
                  </h3>
                  <p className="text-sm text-gray-500">{item.desc}</p>
                </Card>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      <section className="section-padding bg-white">
        <div className="container-wide">
          <SectionHeader
            subtitle="Our Process"
            title="How We Deliver Excellence"
            description="A proven approach that ensures consistent quality across every service."
          />
          <div className="grid md:grid-cols-4 gap-8">
            {[
              { step: "01", title: "Understanding", desc: "We listen carefully to assess your needs and expectations." },
              { step: "02", title: "Planning", desc: "We design a customized service plan with clear timelines and costs." },
              { step: "03", title: "Execution", desc: "Our trained team delivers the service with precision and care." },
              { step: "04", title: "Follow-up", desc: "We check in to ensure your satisfaction and address any feedback." },
            ].map((item) => (
              <FadeIn key={item.step}>
                <div className="text-center">
                  <div className="w-16 h-16 rounded-2xl bg-gradient-brand flex items-center justify-center mx-auto mb-4">
                    <span className="text-white font-bold">{item.step}</span>
                  </div>
                  <h3 className="font-bold text-brand-800 mb-1">{item.title}</h3>
                  <p className="text-sm text-gray-500">{item.desc}</p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      <section className="section-padding bg-gradient-warm">
        <div className="container-narrow">
          <SectionHeader
            subtitle="FAQ"
            title="Common Questions About Our Services"
            description="Find answers to frequently asked questions about booking, pricing, and service expectations."
          />
          <Accordion
            items={generalFAQs.map((faq) => ({
              title: faq.question,
              content: faq.answer,
            }))}
          />
        </div>
      </section>

      <section className="section-padding bg-gradient-brand text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 left-20 w-80 h-80 bg-white rounded-full blur-3xl" />
          <div className="absolute bottom-20 right-20 w-96 h-96 bg-white rounded-full blur-3xl" />
        </div>
        <div className="container-wide relative z-10 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Not Sure Which Service You Need?
          </h2>
          <p className="text-white/70 text-lg mb-8 max-w-2xl mx-auto">
            Our team will help you find the perfect solution. Call us for a free
            consultation.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact">
              <Button variant="secondary" size="xl" className="w-full sm:w-auto">
                Get Free Consultation
                <ArrowRight className="w-5 h-5" />
              </Button>
            </Link>
            <a href={`tel:${siteConfig.phone}`}>
              <Button
                variant="ghost"
                size="xl"
                className="w-full sm:w-auto text-white border-2 border-white/30 hover:bg-white/10"
              >
                Call {siteConfig.phone}
              </Button>
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
