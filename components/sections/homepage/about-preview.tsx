import Link from "next/link";
import { ArrowRight, Target, Eye } from "lucide-react";
import { SectionHeader } from "@/components/shared/section-header";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { FadeIn } from "@/components/animations/fade-in";
import { siteConfig } from "@/data/site-config";

export function AboutPreview() {
  return (
    <section className="section-padding bg-white">
      <div className="container-wide">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <FadeIn direction="left">
            <div className="relative">
              <div className="relative rounded-3xl overflow-hidden shadow-medium">
                <img
                  src="/about.jpg"
                  alt={`${siteConfig.name} team`}
                  className="w-full h-[500px] object-cover"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-brand-800/30 to-transparent" />
              </div>
              <div className="absolute -bottom-6 -right-6 bg-white rounded-2xl p-6 shadow-medium hidden md:block">
                <div className="text-3xl font-bold text-brand-800">
                  {siteConfig.yearsExperience}+
                </div>
                <div className="text-sm text-gray-500">Years of Excellence</div>
              </div>
            </div>
          </FadeIn>

          <div>
            <SectionHeader
              subtitle="About Us"
              title="Your Trusted Partner in Service Excellence"
              description=""
              align="left"
            />
            <p className="text-gray-600 leading-relaxed mb-8">
              Founded with a vision to transform home and healthcare services in
              Dhaka, {siteConfig.name} has grown from a small team of passionate
              professionals to a trusted name serving thousands of families and
              businesses across Bangladesh. Our journey is built on one simple
              belief: every service should be delivered with excellence, empathy,
              and accountability.
            </p>

            <div className="grid sm:grid-cols-2 gap-4 mb-8">
              <Card variant="bordered" className="!p-5">
                <Target className="w-6 h-6 text-brand-800 mb-3" />
                <h3 className="font-bold text-brand-800 mb-1">Our Mission</h3>
                <p className="text-sm text-gray-500">
                  To provide accessible, high-quality home and healthcare
                  services that enhance lives and bring peace of mind.
                </p>
              </Card>
              <Card variant="bordered" className="!p-5">
                <Eye className="w-6 h-6 text-brand-800 mb-3" />
                <h3 className="font-bold text-brand-800 mb-1">Our Vision</h3>
                <p className="text-sm text-gray-500">
                  To be Bangladesh&apos;s most trusted service brand, setting the
                  standard for quality and compassion.
                </p>
              </Card>
            </div>

            <Link href="/about">
              <Button variant="primary" size="lg">
                Learn Our Story
                <ArrowRight className="w-5 h-5" />
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
