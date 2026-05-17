"use client";

import { Phone, MessageCircle } from "lucide-react";
import { siteConfig } from "@/data/site-config";

export function FloatingContactBtn() {
  return (
    <div className="fixed bottom-6 right-6 z-40 flex flex-col gap-3 lg:hidden">
      <a
        href={`https://wa.me/${siteConfig.whatsapp}`}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat on WhatsApp"
        className="w-14 h-14 rounded-full bg-green-500 text-white flex items-center justify-center shadow-strong hover:bg-green-600 transition-all duration-300 hover:scale-110"
      >
        <MessageCircle className="w-6 h-6" />
      </a>
      <a
        href={`tel:${siteConfig.phone}`}
        aria-label="Call us"
        className="w-14 h-14 rounded-full bg-brand-800 text-white flex items-center justify-center shadow-strong hover:bg-brand-700 transition-all duration-300 hover:scale-110"
      >
        <Phone className="w-6 h-6" />
      </a>
    </div>
  );
}
