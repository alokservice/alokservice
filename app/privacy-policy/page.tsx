import { privacyMetadata } from "@/lib/metadata";
import { siteConfig } from "@/data/site-config";
import { Breadcrumbs } from "@/components/shared/breadcrumbs";
import { Card } from "@/components/ui/card";

export const metadata = privacyMetadata;

const sections = [
  {
    id: "information-we-collect",
    title: "Information We Collect",
    content: `We collect information you provide directly when you fill out our contact forms, book services, or communicate with us. This includes your name, phone number, email address, service address, and service preferences.

We also automatically collect certain information when you visit our website, including your IP address, browser type, device information, and usage data through cookies and similar technologies.`,
  },
  {
    id: "how-we-use",
    title: "How We Use Your Information",
    content: `We use the information we collect to:
- Provide, maintain, and improve our services
- Process your service bookings and payments
- Communicate with you about your bookings, inquiries, and account
- Send you service updates, promotional materials (with your consent)
- Respond to your comments, questions, and requests
- Monitor and analyze usage trends to improve user experience
- Detect, prevent, and address technical issues or fraud`,
  },
  {
    id: "information-sharing",
    title: "Information Sharing",
    content: `We do not sell, trade, or rent your personal information to third parties. We may share your information with:
- Service providers who assist us in operating our website and conducting our business (e.g., payment processors, analytics providers)
- Legal authorities when required by law or to protect our rights
- Business partners with your explicit consent`,
  },
  {
    id: "data-security",
    title: "Data Security",
    content: `We implement a variety of security measures to maintain the safety of your personal information. Your data is stored on secure servers and protected by encryption technologies. However, no method of transmission over the Internet is 100% secure, and we cannot guarantee absolute security.`,
  },
  {
    id: "cookies",
    title: "Cookies",
    content: `Our website uses cookies to enhance your browsing experience. Cookies are small files stored on your device that help us remember your preferences and understand how you use our site. You can control cookie settings through your browser preferences.`,
  },
  {
    id: "your-rights",
    title: "Your Rights",
    content: `You have the right to:
- Access the personal data we hold about you
- Request correction of inaccurate data
- Request deletion of your data (subject to legal obligations)
- Object to processing of your personal data
- Request portability of your data
- Withdraw consent at any time

To exercise any of these rights, please contact us using the information below.`,
  },
  {
    id: "third-party-links",
    title: "Third-Party Links",
    content: `Our website may contain links to third-party websites. We are not responsible for the privacy practices or content of these external sites. We encourage you to review the privacy policies of any third-party sites you visit.`,
  },
  {
    id: "changes",
    title: "Changes to This Policy",
    content: `We may update this privacy policy from time to time. We will notify you of any changes by posting the new policy on this page. Changes are effective immediately upon posting.`,
  },
  {
    id: "contact",
    title: "Contact Us",
    content: `If you have any questions about this privacy policy, please contact us:

${siteConfig.name}
Email: ${siteConfig.email}
Phone: ${siteConfig.phone}
Address: ${siteConfig.address.street}, ${siteConfig.address.city}, ${siteConfig.address.state} ${siteConfig.address.zip}`,
  },
];

export default function PrivacyPolicyPage() {
  return (
    <>
      <section className="relative pt-32 pb-8 md:pt-40 md:pb-12 overflow-hidden">
        <div className="absolute inset-0">
          <img src="/services-bg.jpg" alt="" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-r from-brand-800/70 via-brand-800/50 to-brand-800/30" />
        </div>
        <div className="container-wide relative z-10">
          <Breadcrumbs items={[{ label: "Privacy Policy" }]} className="[&_a]:text-white/70 [&_a:hover]:text-white [&_span]:text-white [&_svg]:text-white/50" />
          <h1 className="text-3xl md:text-5xl font-bold text-white mb-4">
            Privacy Policy
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
                  At {siteConfig.name}, we take your privacy seriously. This
                  privacy policy describes how we collect, use, and protect your
                  personal information when you use our website and services.
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
