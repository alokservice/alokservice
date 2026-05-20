import { localBusinessSchema, breadcrumbSchema, faqSchema, organizationSchema, websiteSchema } from "@/lib/schema";
import type { FAQ } from "@/data/faqs";

export function LocalBusinessScript() {
  const schema = localBusinessSchema();
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

export function OrganizationScript() {
  const schema = organizationSchema();
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

export function WebsiteScript() {
  const schema = websiteSchema();
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

export function BreadcrumbScript({ items }: { items: { name: string; href: string }[] }) {
  const schema = breadcrumbSchema(items);
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

export function FAQScript({ faqs }: { faqs: FAQ[] }) {
  const schema = faqSchema(faqs);
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
