import { MetadataRoute } from "next";
import { siteConfig } from "@/data/site-config";
import { services } from "@/data/services";

export default function sitemap(): MetadataRoute.Sitemap {
  const staticPages = [
    { url: siteConfig.url, changeFrequency: "monthly" as const, priority: 1.0 },
    { url: `${siteConfig.url}/services`, changeFrequency: "monthly" as const, priority: 0.9 },
    { url: `${siteConfig.url}/about`, changeFrequency: "monthly" as const, priority: 0.8 },
    { url: `${siteConfig.url}/contact`, changeFrequency: "monthly" as const, priority: 0.8 },
    { url: `${siteConfig.url}/privacy-policy`, changeFrequency: "yearly" as const, priority: 0.3 },
    { url: `${siteConfig.url}/terms`, changeFrequency: "yearly" as const, priority: 0.3 },
  ];

  const servicePages = services.map((service) => ({
    url: `${siteConfig.url}/services/${service.slug}`,
    changeFrequency: "monthly" as const,
    priority: 0.9,
  }));

  return [...staticPages, ...servicePages];
}
