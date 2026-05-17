import { Phone, Mail, MapPin, Clock, MessageCircle } from "lucide-react";
import { contactMetadata } from "@/lib/metadata";
import { siteConfig } from "@/data/site-config";
import { ContactForm } from "@/components/shared/contact-form";
import { SectionHeader } from "@/components/shared/section-header";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Breadcrumbs } from "@/components/shared/breadcrumbs";
import { Accordion } from "@/components/ui/accordion";
import { FadeIn } from "@/components/animations/fade-in";
import { generalFAQs } from "@/data/faqs";

export const metadata = contactMetadata;

const contactMethods = [
  {
    icon: Phone,
    title: "Call Us",
    value: siteConfig.phone,
    href: `tel:${siteConfig.phone}`,
    description: "Available 24/7 for emergencies",
  },
  {
    icon: Mail,
    title: "Email Us",
    value: siteConfig.email,
    href: `mailto:${siteConfig.email}`,
    description: "We reply within 2 hours",
  },
  {
    icon: MessageCircle,
    title: "WhatsApp",
    value: "Chat with us",
    href: `https://wa.me/${siteConfig.whatsapp}`,
    description: "Quickest way to reach us",
  },
  {
    icon: MapPin,
    title: "Visit Us",
    value: `${siteConfig.address.city}, ${siteConfig.address.state}`,
    href: "#",
    description: siteConfig.address.street,
  },
];

export default function ContactPage() {
  return (
    <>
      <section className="relative pt-32 pb-16 md:pt-40 md:pb-20 overflow-hidden">
        <div className="absolute inset-0">
          <img src="/images/services-bg.jpg" alt="" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-r from-brand-800/70 via-brand-800/50 to-brand-800/30" />
        </div>
        <div className="container-wide relative z-10">
          <Breadcrumbs items={[{ label: "Contact" }]} className="[&_a]:text-white/70 [&_a:hover]:text-white [&_span]:text-white [&_svg]:text-white/50" />
          <SectionHeader
            subtitle="Contact Us"
            title="Get in Touch with Alok Service"
            description="Have a question, need a quote, or ready to book? We're here to help. Reach out through any channel below."
            align="left"
            className="!mb-0"
            titleClassName="text-white"
            descriptionClassName="text-white/70"
          />
        </div>
      </section>

      <section className="section-padding bg-white">
        <div className="container-wide">
          <div className="grid lg:grid-cols-5 gap-12">
            <div className="lg:col-span-3">
              <Card>
                <h2 className="text-2xl font-bold text-brand-800 mb-6">
                  Send Us a Message
                </h2>
                <ContactForm />
              </Card>
            </div>

            <div className="lg:col-span-2 space-y-6">
              {contactMethods.map((method) => {
                const Icon = method.icon;
                return (
                  <FadeIn key={method.title}>
                    <a
                      href={method.href}
                      target={method.title === "WhatsApp" ? "_blank" : undefined}
                      rel={
                        method.title === "WhatsApp"
                          ? "noopener noreferrer"
                          : undefined
                      }
                      className="block"
                    >
                      <Card hover className="flex items-start gap-4">
                        <div className="w-12 h-12 rounded-xl bg-brand-100 flex items-center justify-center shrink-0">
                          <Icon className="w-6 h-6 text-brand-800" />
                        </div>
                        <div>
                          <h3 className="font-semibold text-brand-800">
                            {method.title}
                          </h3>
                          <p className="text-sm text-gray-900 font-medium">
                            {method.value}
                          </p>
                          <p className="text-xs text-gray-400">
                            {method.description}
                          </p>
                        </div>
                      </Card>
                    </a>
                  </FadeIn>
                );
              })}

              <Card className="bg-gradient-brand text-white">
                <Clock className="w-8 h-8 mb-3 text-white/80" />
                <h3 className="font-bold text-lg mb-2">Service Hours</h3>
                <div className="space-y-2 text-sm text-white/70">
                  <div className="flex justify-between">
                    <span>Monday - Saturday</span>
                    <span>6:00 AM - 10:00 PM</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Sunday</span>
                    <span>7:00 AM - 8:00 PM</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Emergency</span>
                    <Badge variant="accent" className="text-xs">
                      24/7
                    </Badge>
                  </div>
                </div>
              </Card>

              <a
                href={`https://wa.me/${siteConfig.whatsapp}`}
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button
                  variant="accent"
                  size="lg"
                  className="w-full"
                >
                  <MessageCircle className="w-5 h-5" />
                  Chat on WhatsApp
                </Button>
              </a>
            </div>
          </div>
        </div>
      </section>

      <section className="section-padding bg-gradient-warm">
        <div className="container-wide">
          <div className="rounded-3xl overflow-hidden shadow-medium">
            <iframe
              src="https://www.google.com/maps?q=105/3+Middle+Paickpara+Mirpur+10+Dhaka+1216+Bangladesh&output=embed"
              width="100%"
              height="400"
              className="w-full"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Alok Service Location"
            />
          </div>
        </div>
      </section>

      <section className="section-padding bg-white">
        <div className="container-narrow">
          <SectionHeader
            subtitle="FAQ"
            title="Quick Questions"
            description="Find quick answers to common inquiries."
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
          <div className="absolute top-10 left-10 w-72 h-72 bg-white rounded-full blur-3xl" />
          <div className="absolute bottom-10 right-10 w-96 h-96 bg-white rounded-full blur-3xl" />
        </div>
        <div className="container-wide relative z-10 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Need Immediate Assistance?
          </h2>
          <p className="text-white/70 text-lg mb-8">
            Our team is available 24/7 for emergency services.
          </p>
          <a href={`tel:${siteConfig.phone}`}>
            <Button
              variant="secondary"
              size="xl"
              className="inline-flex items-center gap-2"
            >
              <Phone className="w-5 h-5" />
              {siteConfig.phone}
            </Button>
          </a>
        </div>
      </section>
    </>
  );
}
