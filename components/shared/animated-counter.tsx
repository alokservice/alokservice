"use client";

import { useEffect, useState, useRef } from "react";
import { useIntersectionObserver } from "@/hooks/use-intersection-observer";

interface AnimatedCounterProps {
  value: number;
  suffix?: string;
  prefix?: string;
  duration?: number;
  label: string;
  className?: string;
  valueClassName?: string;
  labelClassName?: string;
}

export function AnimatedCounter({
  value,
  suffix = "",
  prefix = "",
  duration = 2000,
  label,
  className = "",
  valueClassName = "",
  labelClassName = "",
}: AnimatedCounterProps) {
  const { ref, isVisible } = useIntersectionObserver({ threshold: 0.5 });
  const [count, setCount] = useState(0);
  const startedRef = useRef(false);

  useEffect(() => {
    if (!isVisible || startedRef.current) return;
    startedRef.current = true;

    const startTime = performance.now();

    const animate = (currentTime: number) => {
      const elapsed = currentTime - startTime;
      const progress = Math.min(elapsed / duration, 1);

      const easeOut = 1 - Math.pow(1 - progress, 3);
      setCount(Math.floor(easeOut * value));

      if (progress < 1) {
        requestAnimationFrame(animate);
      } else {
        setCount(value);
      }
    };

    requestAnimationFrame(animate);
  }, [isVisible, value, duration]);

  return (
    <div ref={ref} className={`text-center ${className}`}>
      <div className={`text-4xl md:text-5xl font-bold mb-1 ${valueClassName || "text-brand-800"}`}>
        {prefix}
        {count.toLocaleString()}
        {suffix}
      </div>
      <p className={`text-sm font-medium ${labelClassName || "text-gray-500"}`}>{label}</p>
    </div>
  );
}
