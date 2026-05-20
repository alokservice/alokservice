import { siteConfig } from "@/data/site-config";
import type { Metadata } from "next";

interface PageMetadataParams {
  title: string;
  description: string;
  path: string;
  ogImage?: string;
  keywords?: string;
}

const defaultOgImage = "/og-image.png";

export function createPageMetadata({
  title,
  description,
  path,
  ogImage = defaultOgImage,
  keywords = "",
}: PageMetadataParams): Metadata {
  const url = `${siteConfig.url}${path}`;
  const defaultKeywords = [
    "home services dhaka",
    "healthcare services bangladesh",
    "cleaning service dhaka",
    "nursing service",
    "baby care service",
    "patient care dhaka",
    "home care bangladesh",
    "facility management",
    "pest control dhaka",
    "alok service",
  ];

  return {
    title,
    description,
    keywords: keywords || defaultKeywords.join(", "),
    alternates: { canonical: url },
    openGraph: {
      title: `${title} | ${siteConfig.name}`,
      description,
      url,
      siteName: siteConfig.name,
      type: "website",
      locale: "en_BD",
      images: [
        {
          url: ogImage,
          width: 1200,
          height: 630,
          alt: `${siteConfig.name} - ${title}`,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: `${title} | ${siteConfig.name}`,
      description,
      images: [ogImage],
      creator: "@alokservice",
    },
    robots: {
      index: true,
      follow: true,
      "max-snippet": -1,
      "max-image-preview": "large",
      "max-video-preview": -1,
    },
    metadataBase: new URL(siteConfig.url),
    verification: {
      // Add verification codes here when available
      // google: 'your-google-verification-code',
      // yandex: 'your-yandex-verification-code',
    },
  };
}

export const homeMetadata = createPageMetadata({
  title: "Premium Home & Healthcare Services in Dhaka, Bangladesh",
  description: `Alok Service provides professional cleaning, nursing, baby care, patient care, home care, and facility management services in Dhaka. ${siteConfig.expertsCount}+ experts, 98% satisfaction. Trusted since ${siteConfig.foundedYear}.`,
  path: "/",
  keywords: "home services dhaka, cleaning service dhaka, nursing service bangladesh, baby care service, patient care, home care services, facility management dhaka, pest control dhaka, alok service",
});

export const servicesMetadata = createPageMetadata({
  title: "Our Services - Professional Home & Healthcare Solutions",
  description: `Discover comprehensive services by Alok Service: professional cleaning, pest control, home care, nursing, baby care, patient care, and facility management. ${siteConfig.homesServed}+ homes served in Dhaka.`,
  path: "/services",
  keywords: "home services bangladesh, cleaning services dhaka, pest control services, home care services, nursing services, baby care services, patient care services, facility management dhaka, professional services bangladesh",
});

export const aboutMetadata = createPageMetadata({
  title: "About Alok Service - Our Story, Mission & Team",
  description: `Learn about Alok Service's ${siteConfig.yearsExperience}+ year journey delivering premium home and healthcare services in Dhaka. Meet our ${siteConfig.expertsCount}+ expert team and discover our commitment to excellence.`,
  path: "/about",
  keywords: "about alok service, home care company dhaka, healthcare services bangladesh, service provider dhaka, professional care team, home services company",
});

export const contactMetadata = createPageMetadata({
  title: "Contact Alok Service - Book Your Service Today",
  description: `Get in touch with Alok Service for premium home and healthcare services in Dhaka. Call ${siteConfig.phone} or use our contact form. ${siteConfig.satisfaction}% satisfaction rate. 24/7 support available.`,
  path: "/contact",
  keywords: "contact alok service, book cleaning service dhaka, book nursing service, contact home care bangladesh, service booking dhaka, customer support",
});

export const privacyMetadata = createPageMetadata({
  title: "Privacy Policy - Alok Service",
  description: `Alok Service's privacy policy. Learn how we collect, use, and protect your personal information. Your privacy is our priority.`,
  path: "/privacy-policy",
  keywords: "privacy policy, data protection, personal information, alok service privacy",
});

export const termsMetadata = createPageMetadata({
  title: "Terms & Conditions - Alok Service",
  description: `Alok Service's terms and conditions. Understand your rights and responsibilities when using our home and healthcare services in Dhaka.`,
  path: "/terms",
  keywords: "terms and conditions, service terms, booking policy, alok service terms, user agreement",
});
