"use client";

import { useState, useEffect, useCallback } from "react";
import { ChevronLeft, ChevronRight, Star } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { SectionHeader } from "@/components/shared/section-header";
import { Card } from "@/components/ui/card";
import { testimonials } from "@/data/testimonials";

export function TestimonialsSection() {
  const [current, setCurrent] = useState(0);

  const next = useCallback(() => {
    setCurrent((prev) => (prev + 1) % testimonials.length);
  }, []);

  const prev = useCallback(() => {
    setCurrent((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  }, []);

  useEffect(() => {
    const timer = setInterval(next, 5000);
    return () => clearInterval(timer);
  }, [next]);

  const t = testimonials[current];

  return (
    <section className="section-padding bg-gradient-warm">
      <div className="container-wide">
        <SectionHeader
          subtitle="Testimonials"
          title="What Our Clients Say"
          description="Hear from the families and businesses who trust us with their homes, health, and happiness."
        />

        <div className="max-w-4xl mx-auto relative">
          <AnimatePresence mode="wait">
            <motion.div
              key={current}
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -50 }}
              transition={{ duration: 0.4, ease: [0.25, 0.1, 0.25, 1] }}
            >
              <Card variant="glass" className="text-center p-8 md:p-12">
                <div className="flex justify-center gap-1 mb-6">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star
                      key={i}
                      className={`w-5 h-5 ${
                        i < t.rating
                          ? "text-accent-500 fill-accent-500"
                          : "text-gray-200"
                      }`}
                    />
                  ))}
                </div>

                <blockquote className="text-lg md:text-xl text-gray-600 leading-relaxed mb-8 italic">
                  &ldquo;{t.content}&rdquo;
                </blockquote>

                <div className="flex items-center justify-center gap-3">
                  <img
                    src={t.avatar}
                    alt={t.name}
                    className="w-14 h-14 rounded-full object-cover"
                    loading="lazy"
                  />
                  <div className="text-left">
                    <p className="font-bold text-brand-800">{t.name}</p>
                    <p className="text-sm text-gray-400">
                      {t.location} &middot; {t.service}
                    </p>
                  </div>
                </div>
              </Card>
            </motion.div>
          </AnimatePresence>

          <div className="flex items-center justify-center gap-3 mt-8">
            <button
              onClick={prev}
              className="p-3 rounded-xl bg-white border border-gray-200 hover:bg-brand-50 transition-colors shadow-soft"
              aria-label="Previous testimonial"
            >
              <ChevronLeft className="w-5 h-5 text-brand-800" />
            </button>

            <div className="flex gap-2">
              {testimonials.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setCurrent(i)}
                  className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${
                    i === current
                      ? "bg-brand-800 w-8"
                      : "bg-gray-300 hover:bg-gray-400"
                  }`}
                  aria-label={`Go to testimonial ${i + 1}`}
                />
              ))}
            </div>

            <button
              onClick={next}
              className="p-3 rounded-xl bg-white border border-gray-200 hover:bg-brand-50 transition-colors shadow-soft"
              aria-label="Next testimonial"
            >
              <ChevronRight className="w-5 h-5 text-brand-800" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
