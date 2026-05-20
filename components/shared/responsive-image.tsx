"use client";

import { useState, useEffect } from "react";
import Image from "next/image";

interface ResponsiveImageProps {
  mobileSrc: string;
  desktopSrc: string;
  alt: string;
  className?: string;
  priority?: boolean;
  fill?: boolean;
}

export function ResponsiveImage({
  mobileSrc,
  desktopSrc,
  alt,
  className = "",
  priority = false,
  fill = false,
}: ResponsiveImageProps) {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };

    checkMobile();
    window.addEventListener("resize", checkMobile);

    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  const src = isMobile ? mobileSrc : desktopSrc;

  if (fill) {
    return (
      <Image
        src={src}
        alt={alt}
        fill
        className={className}
        priority={priority}
        sizes="(max-width: 768px) 100vw, 100vw"
      />
    );
  }

  return (
    <Image
      src={src}
      alt={alt}
      className={className}
      priority={priority}
      sizes="(max-width: 768px) 100vw, 100vw"
      width={isMobile ? 768 : 1920}
      height={isMobile ? 1024 : 1080}
    />
  );
}
