"use client";

import { Star } from "lucide-react";
import { Card } from "@/components/ui/card";
import type { Testimonial } from "@/data/testimonials";

interface TestimonialCardProps {
  testimonial: Testimonial;
}

export function TestimonialCard({ testimonial }: TestimonialCardProps) {
  return (
    <Card variant="glass" className="h-full">
      <div className="flex items-center gap-1 mb-4">
        {Array.from({ length: 5 }).map((_, i) => (
          <Star
            key={i}
            className={`w-4 h-4 ${
              i < testimonial.rating
                ? "text-accent-500 fill-accent-500"
                : "text-gray-200"
            }`}
          />
        ))}
      </div>

      <p className="text-gray-600 leading-relaxed mb-6">
        &ldquo;{testimonial.content}&rdquo;
      </p>

      <div className="flex items-center gap-3 mt-auto">
        <img
          src={testimonial.avatar}
          alt={testimonial.name}
          className="w-12 h-12 rounded-full object-cover"
          loading="lazy"
        />
        <div>
          <p className="font-semibold text-brand-800 text-sm">
            {testimonial.name}
          </p>
          <p className="text-gray-400 text-xs">
            {testimonial.location} &middot; {testimonial.service}
          </p>
        </div>
      </div>
    </Card>
  );
}
