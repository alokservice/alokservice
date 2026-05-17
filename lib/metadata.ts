import { siteConfig } from "@/data/site-config";
import type { Metadata } from "next";

interface PageMetadataParams {
  title: string;
  description: string;
  path: string;
  ogImage?: string;
}

const defaultOgImage = "/og-image.png";

export function createPageMetadata({
  title,
  description,
  path,
  ogImage = defaultOgImage,
}: PageMetadataParams): Metadata {
  const url = `${siteConfig.url}${path}`;

  return {
    title,
    description,
    alternates: { canonical: url },
    openGraph: {
      title: `${title} | ${siteConfig.name}`,
      description,
      url,
      siteName: siteConfig.name,
      type: "website",
      locale: "en_BD",
      images: [{ url: ogImage, width: 1200, height: 630 }],
    },
    twitter: {
      card: "summary_large_image",
      title: `${title} | ${siteConfig.name}`,
      description,
      images: [ogImage],
    },
    robots: {
      index: true,
      follow: true,
      "max-snippet": -1,
      "max-image-preview": "large",
    },
  };
}

export const homeMetadata = createPageMetadata({
  title: siteConfig.name,
  description: siteConfig.description,
  path: "/",
});

export const servicesMetadata = createPageMetadata({
  title: "Our Services",
  description: `Explore our premium services: cleaning, pest control, home care, nursing, caregiver support, patient care & facility management by ${siteConfig.name}.`,
  path: "/services",
});

export const aboutMetadata = createPageMetadata({
  title: "About Us",
  description: `Learn about ${siteConfig.name}'s mission, team, and commitment to premium home & healthcare services across Dhaka, Bangladesh.`,
  path: "/about",
});

export const contactMetadata = createPageMetadata({
  title: "Contact Us",
  description: `Get in touch with ${siteConfig.name}. Book a service, ask a question, or request a free consultation. We're here to help.`,
  path: "/contact",
});

export const privacyMetadata = createPageMetadata({
  title: "Privacy Policy",
  description: `${siteConfig.name}'s privacy policy. Learn how we collect, use, and protect your personal information.`,
  path: "/privacy-policy",
});

export const termsMetadata = createPageMetadata({
  title: "Terms & Conditions",
  description: `${siteConfig.name}'s terms and conditions. Please read these terms carefully before using our services.`,
  path: "/terms",
});
