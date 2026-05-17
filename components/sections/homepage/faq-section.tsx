import { SectionHeader } from "@/components/shared/section-header";
import { Accordion } from "@/components/ui/accordion";
import { FAQScript } from "@/components/shared/schema-scripts";
import { generalFAQs } from "@/data/faqs";

export function HomepageFAQ() {
  return (
    <section className="section-padding bg-white">
      <FAQScript faqs={generalFAQs} />
      <div className="container-narrow">
        <SectionHeader
          subtitle="FAQ"
          title="Frequently Asked Questions"
          description="Quick answers to common questions about our services, booking, and guarantees."
        />

        <Accordion
          items={generalFAQs.map((faq) => ({
            title: faq.question,
            content: faq.answer,
          }))}
        />
      </div>
    </section>
  );
}
