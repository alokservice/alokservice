import { termsMetadata } from "@/lib/metadata";
import { siteConfig } from "@/data/site-config";
import { Breadcrumbs } from "@/components/shared/breadcrumbs";
import { Card } from "@/components/ui/card";

export const metadata = termsMetadata;

const sections = [
  {
    id: "acceptance",
    title: "Acceptance of Terms",
    content: `By accessing and using the ${siteConfig.name} website and services, you agree to be bound by these Terms & Conditions. If you do not agree with any part of these terms, you should not use our website or services.`,
  },
  {
    id: "services",
    title: "Service Description",
    content: `${siteConfig.name} provides home care, healthcare, cleaning, pest control, and facility management services. We reserve the right to modify, suspend, or discontinue any aspect of our services at any time with reasonable notice.`,
  },
  {
    id: "booking",
    title: "Bookings & Appointments",
    content: `When you book a service through our website, phone, or WhatsApp, you agree to provide accurate and complete information. We reserve the right to cancel or reschedule appointments with appropriate notice.
    
Cancellation Policy: You may cancel or reschedule your booking up to 4 hours before the scheduled service without charge. Late cancellations may be subject to a nominal fee.`,
  },
  {
    id: "pricing",
    title: "Pricing & Payment",
    content: `All prices are quoted in Bangladeshi Taka (BDT) and are subject to applicable taxes. Prices may change without notice, but we will confirm the price before providing any service.

Payment is due at the time of service unless other arrangements have been made. We accept cash, UPI, bank transfers, and major credit/debit cards.`,
  },
  {
    id: "user-obligations",
    title: "User Obligations",
    content: `As a user of our services, you agree to:
- Provide accurate and complete information
- Ensure safe access to your premises for our service providers
- Not misuse our services for any illegal or unauthorized purpose
- Treat our staff with respect and dignity
- Notify us of any special requirements or hazards before service delivery`,
  },
  {
    id: "quality",
    title: "Quality Guarantee",
    content: `We stand behind the quality of our services with a 100% satisfaction guarantee. If you are not satisfied with any service, please contact us within 24 hours. We will either redo the service at no extra cost or provide a partial/full refund at our discretion.

Our refund policy does not cover dissatisfaction arising from unreasonable expectations or failure to disclose relevant information at the time of booking.`,
  },
  {
    id: "liability",
    title: "Limitation of Liability",
    content: `${siteConfig.name} shall not be liable for any indirect, incidental, special, consequential, or punitive damages arising from your use of our services. Our total liability for any claim shall not exceed the amount paid by you for the specific service giving rise to the claim.

We carry comprehensive insurance coverage. In the unlikely event of property damage during service delivery, our team will document and address the issue promptly.`,
  },
  {
    id: "intellectual-property",
    title: "Intellectual Property",
    content: `All content on this website, including text, graphics, logos, images, and software, is the property of ${siteConfig.name} and is protected by applicable intellectual property laws. You may not reproduce, distribute, or create derivative works without our explicit written consent.`,
  },
  {
    id: "termination",
    title: "Termination",
    content: `We reserve the right to terminate or suspend access to our services immediately, without prior notice, for conduct that we believe violates these Terms & Conditions or is harmful to other users, third parties, or our business.`,
  },
  {
    id: "changes",
    title: "Changes to Terms",
    content: `We reserve the right to update or modify these Terms & Conditions at any time. Changes will be effective immediately upon posting on this page. We encourage you to review these terms periodically.`,
  },
  {
    id: "governing-law",
    title: "Governing Law",
    content: `These Terms & Conditions are governed by and construed in accordance with the laws of Bangladesh. Any disputes arising from these terms shall be subject to the exclusive jurisdiction of the courts in ${siteConfig.address.city}, ${siteConfig.address.state}.`,
  },
  {
    id: "contact-info",
    title: "Contact Information",
    content: `For questions about these Terms & Conditions, please contact us:

${siteConfig.name}
Email: ${siteConfig.email}
Phone: ${siteConfig.phone}
Address: ${siteConfig.address.street}, ${siteConfig.address.city}, ${siteConfig.address.state} ${siteConfig.address.zip}`,
  },
];

export default function TermsPage() {
  return (
    <>
      <section className="relative pt-32 pb-8 md:pt-40 md:pb-12 overflow-hidden">
        <div className="absolute inset-0">
          <img src="/services-bg.jpg" alt="" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-r from-brand-800/70 via-brand-800/50 to-brand-800/30" />
        </div>
        <div className="container-wide relative z-10">
          <Breadcrumbs items={[{ label: "Terms & Conditions" }]} className="[&_a]:text-white/70 [&_a:hover]:text-white [&_span]:text-white [&_svg]:text-white/50" />
          <h1 className="text-3xl md:text-5xl font-bold text-white mb-4">
            Terms &amp; Conditions
          </h1>
          <p className="text-white/60">
            Last updated: January 1, 2025
          </p>
        </div>
      </section>

      <section className="py-12 md:py-16 bg-white">
        <div className="container-wide">
          <div className="grid lg:grid-cols-4 gap-12">
            <aside className="lg:col-span-1">
              <div className="lg:sticky lg:top-24 space-y-2">
                <h3 className="font-bold text-brand-800 mb-4 text-sm uppercase tracking-wider">
                  On This Page
                </h3>
                {sections.map((section) => (
                  <a
                    key={section.id}
                    href={`#${section.id}`}
                    className="block text-sm text-gray-500 hover:text-brand-800 transition-colors py-1"
                  >
                    {section.title}
                  </a>
                ))}
              </div>
            </aside>

            <div className="lg:col-span-3 space-y-10">
              <Card>
                <p className="text-gray-600 leading-relaxed">
                  Please read these Terms &amp; Conditions carefully before using
                  the {siteConfig.name} website or services. By accessing or
                  using our services, you agree to be bound by these terms.
                </p>
              </Card>

              {sections.map((section) => (
                <section key={section.id} id={section.id}>
                  <h2 className="text-2xl font-bold text-brand-800 mb-4">
                    {section.title}
                  </h2>
                  {section.content.split("\n\n").map((paragraph, i) => (
                    <p
                      key={i}
                      className="text-gray-600 leading-relaxed mb-4 last:mb-0"
                    >
                      {paragraph}
                    </p>
                  ))}
                </section>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
