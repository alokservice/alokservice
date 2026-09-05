"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, Phone, Shield, Star, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";
import { GradientBg } from "@/components/shared/gradient-bg";
import { FloatingElement } from "@/components/shared/floating-element";
import { siteConfig } from "@/data/site-config";
import { statistics } from "@/data/statistics";

const trustBadges = [
  { icon: Shield, label: "Verified Professionals" },
  { icon: Star, label: "98% Satisfaction" },
  { icon: Clock, label: "24/7 Availability" },
];

const floatingCards = [
  { value: "300+", label: "Happy Clients", x: "15%", y: "20%", color: "bg-white/90" },
  { value: "70+", label: "Experts", x: "75%", y: "15%", color: "bg-white/90" },
  { value: "4.9★", label: "Rating", x: "80%", y: "60%", color: "bg-white/90" },
];

export function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden bg-brand-800">
      <GradientBg />

      <div className="container-wide relative z-10 pt-24 pb-16 md:pt-32 md:pb-24">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="relative">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: [0.25, 0.1, 0.25, 1] }}
            >
              <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/20 text-white text-sm font-semibold mb-6 backdrop-blur-sm">
                <Shield className="w-4 h-4" />
                Trusted Since {siteConfig.foundedYear}
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.15, ease: [0.25, 0.1, 0.25, 1] }}
              className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-[1.1] tracking-tight"
            >
              Premium Home &{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent-300 to-accent-500">Healthcare</span>{" "}
              Services, Delivered with Care
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3, ease: [0.25, 0.1, 0.25, 1] }}
              className="mt-6 text-lg md:text-xl text-white/80 leading-relaxed max-w-xl"
            >
              From deep cleaning to compassionate nursing care,{" "}
              {siteConfig.name} brings professional excellence and genuine
              care to every home and business we serve.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.45, ease: [0.25, 0.1, 0.25, 1] }}
              className="mt-8 flex flex-col sm:flex-row gap-4"
            >
              <Link href="/contact">
                <Button variant="accent" size="lg" className="w-full sm:w-auto">
                  Get Free Quote
                  <ArrowRight className="w-5 h-5" />
                </Button>
              </Link>
              <a href={`tel:${siteConfig.phone}`}>
                <Button variant="secondary" size="lg" className="w-full sm:w-auto bg-white/10 text-white border-white/30 hover:bg-white/20">
                  <Phone className="w-5 h-5" />
                  Call {siteConfig.phone}
                </Button>
              </a>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="mt-10 flex flex-wrap gap-6"
            >
              {trustBadges.map((badge) => {
                const Icon = badge.icon;
                return (
                  <div
                    key={badge.label}
                    className="flex items-center gap-2 text-sm text-white/80"
                  >
                    <Icon className="w-4 h-4 text-accent-400" />
                    <span>{badge.label}</span>
                  </div>
                );
              })}
            </motion.div>
          </div>

          <div className="relative hidden lg:block">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1, delay: 0.3 }}
              className="relative"
            >
              <div className="relative rounded-3xl overflow-hidden shadow-strong">
                <img
                  src="/images/hero.jpg"
                  alt="Professional care services"
                  className="w-full h-[600px] object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-brand-800/40 via-transparent to-brand-800/10" />
              </div>

              {floatingCards.map((card, i) => (
                <FloatingElement
                  key={card.label}
                  delay={i * 0.5}
                  duration={5 + i}
                  className={`absolute ${card.color} backdrop-blur-xl rounded-2xl p-4 shadow-medium border border-white/50`}
                  style={{
                    left: card.x,
                    top: card.y,
                  }}
                >
                  <div className="text-center">
                    <div className="text-2xl font-bold text-brand-800">
                      {card.value}
                    </div>
                    <div className="text-xs text-gray-500">{card.label}</div>
                  </div>
                </FloatingElement>
              ))}
            </motion.div>
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="mt-16 md:mt-20 grid grid-cols-2 md:grid-cols-4 gap-8 py-8 border-t border-white/20"
        >
          {statistics.map((stat) => (
            <div key={stat.label} className="text-center">
              <div className="text-2xl md:text-3xl font-bold text-white">
                {stat.prefix}{stat.value.toLocaleString()}{stat.suffix}
              </div>
              <div className="text-sm text-white/60 mt-1">{stat.label}</div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
