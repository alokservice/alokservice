"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, Phone, ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { GradientBg } from "@/components/shared/gradient-bg";
import { siteConfig } from "@/data/site-config";

import { ResponsiveImage } from "@/components/shared/responsive-image";

const slides = [
  {
    image: "/images/hero-slide-1.png",
    mobileImage: "/images/hero-slide-1-mobile.jpg",
    title: "Professional Cleaning",
    subtitle: "Sparkling Clean, Every Time",
    description: "Transform your space with our premium cleaning services",
    primaryCta: { text: "Book Now", href: "/contact" },
    secondaryCta: { text: "Learn More", href: "/services/cleaning" },
  },
  {
    image: "/images/hero-slide-2.png",
    mobileImage: "/images/hero-slide-2-mobile.jpg",
    title: "Expert Healthcare",
    subtitle: "Compassionate Care at Home",
    description: "Professional nursing and patient care you can trust",
    primaryCta: { text: "Get Started", href: "/contact" },
    secondaryCta: { text: "Our Services", href: "/services/nursing" },
  },
  {
    image: "/images/hero-slide-3.png",
    mobileImage: "/images/hero-slide-3-mobile.jpg",
    title: "Baby Care",
    subtitle: "Loving Care for Your Little One",
    description: "Safe, nurturing care for your baby's development",
    primaryCta: { text: "Book Care", href: "/contact" },
    secondaryCta: { text: "Learn More", href: "/services/baby-care" },
  },
  {
    image: "/images/hero-slide-4.png",
    mobileImage: "/images/hero-slide-4.png",
    title: "Home Care Service",
    subtitle: "Care with Dignity at Home",
    description: "Compassionate care for elderly and recovery patients",
    primaryCta: { text: "Book Service", href: "/contact" },
    secondaryCta: { text: "Learn More", href: "/services/home-care" },
  },
  {
    image: "/images/hero-slide-5.png",
    mobileImage: "/images/hero-slide-5.png",
    title: "Nursing Service",
    subtitle: "Skilled Medical Care at Home",
    description: "Registered nurses for professional healthcare needs",
    primaryCta: { text: "Book Nurse", href: "/contact" },
    secondaryCta: { text: "Our Services", href: "/services/nursing" },
  },
  {
    image: "/images/hero-slide-6.png",
    mobileImage: "/images/hero-slide-6.png",
    title: "Patient Care",
    subtitle: "Dedicated Recovery Support",
    description: "Compassionate care for your healing journey",
    primaryCta: { text: "Get Care", href: "/contact" },
    secondaryCta: { text: "Learn More", href: "/services/patient-care" },
  },
  {
    image: "/images/hero-slide-7.png",
    mobileImage: "/images/hero-slide-7.png",
    title: "Facility Management",
    subtitle: "Complete Property Solutions",
    description: "End-to-end facility management for your property",
    primaryCta: { text: "Get Quote", href: "/contact" },
    secondaryCta: { text: "Learn More", href: "/services/facility-management" },
  },
];

export function HeroSlider() {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
  };

  const goToPrevious = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  const goToNext = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden bg-brand-800">
      <GradientBg />

      <AnimatePresence mode="wait">
        <motion.div
          key={currentSlide}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5 }}
          className="absolute inset-0"
        >
          <ResponsiveImage
            mobileSrc={slides[currentSlide].mobileImage}
            desktopSrc={slides[currentSlide].image}
            alt={slides[currentSlide].title}
            fill
            className="object-cover"
            priority={currentSlide === 0}
          />
          <div className="absolute inset-0 bg-gradient-to-r from-brand-900/90 via-brand-900/70 to-brand-900/50" />
        </motion.div>
      </AnimatePresence>

      <div className="container-wide relative z-10 pt-24 pb-16 md:pt-32 md:pb-24">
        <div className="max-w-2xl">
          <motion.div
            key={`subtitle-${currentSlide}`}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mb-4"
          >
            <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/20 text-white text-sm font-semibold backdrop-blur-sm">
              Trusted Since {siteConfig.foundedYear}
            </span>
          </motion.div>

          <motion.h1
            key={`title-${currentSlide}`}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-[1.1] tracking-tight mb-4"
          >
            {slides[currentSlide].title}
          </motion.h1>

          <motion.p
            key={`subtitle-text-${currentSlide}`}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-2xl md:text-3xl font-semibold text-accent-400 mb-4"
          >
            {slides[currentSlide].subtitle}
          </motion.p>

          <motion.p
            key={`description-${currentSlide}`}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="text-lg md:text-xl text-white/80 leading-relaxed mb-8"
          >
            {slides[currentSlide].description}
          </motion.p>

          <motion.div
            key={`ctas-${currentSlide}`}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="flex flex-col sm:flex-row gap-4"
          >
            <Link href={slides[currentSlide].primaryCta.href}>
              <Button variant="accent" size="lg" className="w-full sm:w-auto">
                {slides[currentSlide].primaryCta.text}
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
            </Link>
            <Link href={slides[currentSlide].secondaryCta.href}>
              <Button
                variant="secondary"
                size="lg"
                className="w-full sm:w-auto bg-white/10 text-white border-white/30 hover:bg-white/20"
              >
                {slides[currentSlide].secondaryCta.text}
              </Button>
            </Link>
          </motion.div>
        </div>

        {/* Navigation Arrows */}
        <div className="absolute bottom-8 right-8 flex items-center gap-4">
          <Button
            variant="secondary"
            size="sm"
            onClick={goToPrevious}
            className="bg-white/10 text-white border-white/30 hover:bg-white/20"
          >
            <ChevronLeft className="w-5 h-5" />
          </Button>
          <Button
            variant="secondary"
            size="sm"
            onClick={goToNext}
            className="bg-white/10 text-white border-white/30 hover:bg-white/20"
          >
            <ChevronRight className="w-5 h-5" />
          </Button>
        </div>

        {/* Slide Indicators */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex gap-2">
          {slides.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`w-2 h-2 rounded-full transition-all duration-300 ${
                index === currentSlide ? "bg-white scale-125" : "bg-white/40 hover:bg-white/60"
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
