import { SectionHeader } from "@/components/shared/section-header";
import { Accordion } from "@/components/ui/accordion";
import { FAQScript } from "@/components/shared/schema-scripts";
import type { Service } from "@/data/services";

interface ServiceFAQProps {
  service: Service;
}

export function ServiceFAQ({ service }: ServiceFAQProps) {
  return (
    <section className="section-padding bg-gradient-warm">
      <FAQScript faqs={service.faqs} />
      <div className="container-narrow">
        <SectionHeader
          subtitle="FAQ"
          title={`${service.title} — Your Questions Answered`}
          description="Everything you need to know about our service before you book."
        />

        <Accordion
          items={service.faqs.map((faq) => ({
            title: faq.question,
            content: faq.answer,
          }))}
        />
      </div>
    </section>
  );
}
