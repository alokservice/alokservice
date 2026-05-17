"use client";

import { useEffect, useRef } from "react";

interface GradientBgProps {
  className?: string;
}

export function GradientBg({ className = "" }: GradientBgProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animationFrame: number;
    let time = 0;

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    resize();
    window.addEventListener("resize", resize);

    const draw = () => {
      time += 0.003;
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      const gradient1 = ctx.createRadialGradient(
        canvas.width * (0.5 + Math.sin(time) * 0.2),
        canvas.height * (0.4 + Math.cos(time * 0.7) * 0.2),
        0,
        canvas.width * 0.5,
        canvas.height * 0.4,
        canvas.width * 0.5
      );
      gradient1.addColorStop(0, "rgba(208, 217, 232, 0.5)");
      gradient1.addColorStop(0.5, "rgba(238, 242, 248, 0.3)");
      gradient1.addColorStop(1, "rgba(255, 255, 255, 0)");

      ctx.fillStyle = gradient1;
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      const gradient2 = ctx.createRadialGradient(
        canvas.width * (0.6 + Math.cos(time * 0.5) * 0.15),
        canvas.height * (0.6 + Math.sin(time * 0.8) * 0.15),
        0,
        canvas.width * 0.6,
        canvas.height * 0.6,
        canvas.width * 0.4
      );
      gradient2.addColorStop(0, "rgba(15, 27, 66, 0.05)");
      gradient2.addColorStop(1, "rgba(255, 255, 255, 0)");

      ctx.fillStyle = gradient2;
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      animationFrame = requestAnimationFrame(draw);
    };

    draw();

    return () => {
      cancelAnimationFrame(animationFrame);
      window.removeEventListener("resize", resize);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className={`absolute inset-0 pointer-events-none ${className}`}
      aria-hidden="true"
    />
  );
}
