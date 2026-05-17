import Link from "next/link";
import { ArrowRight, Target, Eye, Award, Users, Shield } from "lucide-react";
import { aboutMetadata } from "@/lib/metadata";
import { siteConfig } from "@/data/site-config";
import { teamMembers } from "@/data/team";
import { SectionHeader } from "@/components/shared/section-header";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Breadcrumbs } from "@/components/shared/breadcrumbs";
import { AnimatedCounter } from "@/components/shared/animated-counter";
import { FadeIn } from "@/components/animations/fade-in";
import { StaggerContainer, StaggerItem } from "@/components/animations/stagger-container";
import { statistics } from "@/data/statistics";

export const metadata = aboutMetadata;

const timeline = [
  { year: "2015", event: `${siteConfig.name} founded with a vision to transform home services.` },
  { year: "2017", event: "Expanded to healthcare services including nursing and patient care." },
  { year: "2019", event: "Reached 5,000 homes served milestone. Launched caregiver support program." },
  { year: "2021", event: "Team grew to 150+ professionals. Introduced facility management services." },
  { year: "2023", event: "Served 12,000+ clients. Launched eco-friendly initiatives across all services." },
  { year: "2025", event: "250+ professionals, 15,000+ homes served, 98% satisfaction rate." },
];

export default function AboutPage() {
  return (
    <>
      <section className="relative pt-32 pb-16 md:pt-40 md:pb-20 overflow-hidden">
        <div className="absolute inset-0">
          <img src="/images/about.jpg" alt="" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-r from-brand-800/70 via-brand-800/50 to-brand-800/30" />
        </div>
        <div className="container-wide relative z-10">
          <Breadcrumbs items={[{ label: "About Us" }]} className="[&_a]:text-white/70 [&_a:hover]:text-white [&_span]:text-white [&_svg]:text-white/50" />
          <SectionHeader
            subtitle="About Us"
            title="Our Story: Building Trust, One Service at a Time"
            description={`Since ${siteConfig.foundedYear}, ${siteConfig.name} has been dedicated to delivering premium home and healthcare services with integrity, excellence, and genuine care.`}
            align="left"
            className="!mb-0"
            titleClassName="text-white"
            descriptionClassName="text-white/70"
          />
        </div>
      </section>

      <section className="section-padding bg-white">
        <div className="container-wide">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <FadeIn direction="left">
              <div className="relative">
                <div className="relative rounded-3xl overflow-hidden shadow-medium">
                  <img
                    src="/images/about.jpg"
                    alt={`${siteConfig.name} team`}
                    className="w-full h-[500px] object-cover"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-brand-800/30 to-transparent" />
                </div>
                <div className="absolute -bottom-4 -right-4 bg-white rounded-2xl p-5 shadow-medium hidden md:block">
                  <div className="flex items-center gap-3">
                    <Award className="w-8 h-8 text-brand-800" />
                    <div>
                      <div className="font-bold text-brand-800">Trusted Brand</div>
                      <div className="text-xs text-gray-500">Since {siteConfig.foundedYear}</div>
                    </div>
                  </div>
                </div>
              </div>
            </FadeIn>
            <div>
              <SectionHeader
                subtitle="Our Journey"
                title="From a Vision to a Movement"
                description=""
                align="left"
              />
              <p className="text-gray-600 leading-relaxed mb-6">
                {siteConfig.name} was born from a simple observation: quality
                home and healthcare services were hard to find. Either they were
                unreliable, unprofessional, or simply didn&apos;t exist for
                families who needed them most.
              </p>
              <p className="text-gray-600 leading-relaxed mb-8">
                Founded by {teamMembers[0].name}, our founder, we set out to
                change that. Today, we&apos;re a team of {siteConfig.expertsCount}+
                professionals serving thousands of families and businesses across
                Dhaka — and we&apos;re just getting started.
              </p>

              <div className="grid sm:grid-cols-2 gap-4">
                <Card variant="bordered" className="!p-5">
                  <Target className="w-6 h-6 text-brand-800 mb-3" />
                  <h3 className="font-bold text-brand-800 mb-1">Our Mission</h3>
                  <p className="text-sm text-gray-500">
                    To provide accessible, high-quality home and healthcare
                    services that enhance lives and bring peace of mind to every
                    family we serve.
                  </p>
                </Card>
                <Card variant="bordered" className="!p-5">
                  <Eye className="w-6 h-6 text-brand-800 mb-3" />
                  <h3 className="font-bold text-brand-800 mb-1">Our Vision</h3>
                  <p className="text-sm text-gray-500">
                    To be Bangladesh&apos;s most trusted service brand, setting the
                    benchmark for quality, compassion, and professionalism.
                  </p>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section-padding bg-gradient-brand text-white">
        <div className="container-wide">
          <SectionHeader
            title="Our Impact by the Numbers"
            titleClassName="text-white"
          />
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12">
            {statistics.map((stat) => (
              <AnimatedCounter
                key={stat.label}
                value={stat.value}
                suffix={stat.suffix}
                prefix={stat.prefix}
                label={stat.label}
                valueClassName="text-white"
                labelClassName="text-gray-300"
              />
            ))}
          </div>
        </div>
      </section>

      <section className="section-padding bg-white">
        <div className="container-wide">
          <SectionHeader
            subtitle="Our Values"
            title="What Guides Everything We Do"
            description="These core principles shape every decision, every service, and every interaction."
          />
          <StaggerContainer className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { icon: Shield, title: "Integrity", desc: "We do what's right, even when no one is watching. Honest pricing, transparent processes." },
              { icon: Users, title: "Compassion", desc: "Every person we serve is someone's family. We treat them with the same love and respect." },
              { icon: Award, title: "Excellence", desc: "We never compromise on quality. Continuous improvement is in our DNA." },
              { icon: Target, title: "Accountability", desc: "We own our commitments. If something goes wrong, we fix it — fast and fair." },
            ].map((value) => {
              const Icon = value.icon;
              return (
                <StaggerItem key={value.title}>
                  <Card hover className="text-center h-full">
                    <div className="w-14 h-14 rounded-2xl bg-gradient-warm flex items-center justify-center mx-auto mb-4">
                      <Icon className="w-7 h-7 text-brand-800" />
                    </div>
                    <h3 className="text-lg font-bold text-brand-800 mb-2">{value.title}</h3>
                    <p className="text-sm text-gray-500">{value.desc}</p>
                  </Card>
                </StaggerItem>
              );
            })}
          </StaggerContainer>
        </div>
      </section>

      <section className="section-padding bg-gradient-warm">
        <div className="container-wide">
          <SectionHeader
            subtitle="Timeline"
            title="Our Journey So Far"
            description="Key milestones that shaped our story."
          />
          <div className="max-w-3xl mx-auto">
            {timeline.map((item, i) => (
              <FadeIn key={item.year} delay={i * 0.1}>
                <div className="flex gap-6 mb-8 last:mb-0">
                  <div className="flex flex-col items-center">
                    <div className="w-14 h-14 rounded-2xl bg-gradient-brand flex items-center justify-center shrink-0">
                      <span className="text-white font-bold text-sm">
                        {item.year}
                      </span>
                    </div>
                    {i < timeline.length - 1 && (
                      <div className="w-0.5 h-full bg-gradient-to-b from-brand-800/20 to-transparent mt-2" />
                    )}
                  </div>
                  <div className="pb-8">
                    <p className="text-gray-600 leading-relaxed">{item.event}</p>
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      <section className="section-padding bg-white">
        <div className="container-wide">
          <SectionHeader
            subtitle="Our Team"
            title="Meet the People Behind Alok Service"
            description="Passionate professionals committed to your wellbeing."
          />
          <StaggerContainer className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {teamMembers.map((member) => (
              <StaggerItem key={member.name}>
                <Card className="text-center h-full">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-24 h-24 rounded-full object-cover mx-auto mb-4"
                    loading="lazy"
                  />
                  <h3 className="text-lg font-bold text-brand-800">
                    {member.name}
                  </h3>
                  <p className="text-sm text-brand-600 font-medium mb-3">
                    {member.role}
                  </p>
                  <p className="text-sm text-gray-500">{member.bio}</p>
                </Card>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      <section className="section-padding bg-gradient-warm">
        <div className="container-wide text-center">
          <SectionHeader
            subtitle="Get in Touch"
            title="Ready to Experience the Alok Service Difference?"
            description="Join thousands of satisfied customers who trust us with their homes and health."
          />
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact">
              <Button variant="accent" size="xl">
                Contact Us Today
                <ArrowRight className="w-5 h-5" />
              </Button>
            </Link>
            <a href={`tel:${siteConfig.phone}`}>
              <Button variant="secondary" size="xl">
                Call {siteConfig.phone}
              </Button>
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
