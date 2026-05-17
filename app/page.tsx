import { homeMetadata } from "@/lib/metadata";
import { HeroSection } from "@/components/sections/homepage/hero";
import { ServicesOverview } from "@/components/sections/homepage/services-overview";
import { WhyChooseUs } from "@/components/sections/homepage/why-choose-us";
import { AboutPreview } from "@/components/sections/homepage/about-preview";
import { ProcessSection } from "@/components/sections/homepage/process-section";
import { TestimonialsSection } from "@/components/sections/homepage/testimonials";
import { StatisticsSection } from "@/components/sections/homepage/statistics";
import { ComparisonSection } from "@/components/sections/homepage/comparison-section";
import { FeaturesFacilities } from "@/components/sections/homepage/features-facilities";
import { HomepageFAQ } from "@/components/sections/homepage/faq-section";
import { CTABanner } from "@/components/sections/homepage/cta-banner";

export const metadata = homeMetadata;

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <ServicesOverview />
      <WhyChooseUs />
      <AboutPreview />
      <ProcessSection />
      <TestimonialsSection />
      <StatisticsSection />
      <ComparisonSection />
      <FeaturesFacilities />
      <HomepageFAQ />
      <CTABanner />
    </>
  );
}
