"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu, X, Phone } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { useScroll } from "@/hooks/use-scroll";
import { siteConfig, siteNavigation } from "@/data/site-config";
import { cn } from "@/lib/utils";

export function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const { isScrolled } = useScroll();

  return (
    <>
      <header
        className={cn(
          "fixed top-0 left-0 right-0 z-50 transition-all duration-500",
          isScrolled
            ? "glass-strong shadow-soft"
            : "bg-transparent"
        )}
      >
        <div className="container-wide">
          <div className="flex items-center justify-between h-16 md:h-20">
            <Link href="/" className="flex items-center gap-2 group">
              <div className="w-9 h-9 rounded-xl overflow-hidden flex items-center justify-center">
                <img src="/images/logo.jpg" alt="Alok Service" className="w-full h-full object-cover" />
              </div>
              <span className="font-bold text-xl text-brand-800 hidden sm:inline">
                {siteConfig.name}
              </span>
            </Link>

            <nav className="hidden lg:flex items-center gap-8">
              {siteNavigation.primary.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="text-sm font-medium text-gray-600 hover:text-brand-800 transition-colors duration-200 relative group"
                >
                  {link.label}
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-brand-800 transition-all duration-300 group-hover:w-full" />
                </Link>
              ))}
            </nav>

            <div className="hidden lg:flex items-center gap-4">
              <a
                href={`tel:${siteConfig.phone}`}
                className="flex items-center gap-2 text-sm font-medium text-brand-800 hover:text-brand-600 transition-colors"
              >
                <Phone className="w-4 h-4" />
                {siteConfig.phone}
              </a>
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 px-5 py-2.5 bg-brand-800 text-white text-sm font-semibold rounded-xl hover:bg-brand-700 transition-all duration-300 hover:shadow-medium"
              >
                Book Now
              </Link>
            </div>

            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className="lg:hidden p-2 rounded-lg hover:bg-brand-100 transition-colors"
              aria-label={mobileOpen ? "Close menu" : "Open menu"}
            >
              {mobileOpen ? (
                <X className="w-6 h-6 text-brand-800" />
              ) : (
                <Menu className="w-6 h-6 text-brand-800" />
              )}
            </button>
          </div>
        </div>
      </header>

      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, x: "100%" }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: "100%" }}
            transition={{ duration: 0.3, ease: [0.25, 0.1, 0.25, 1] }}
            className="fixed inset-0 z-40 bg-white lg:hidden"
          >
            <div className="pt-20 pb-8 px-6 flex flex-col h-full">
              <nav className="flex flex-col gap-2">
                {siteNavigation.primary.map((link, i) => (
                  <motion.div
                    key={link.href}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.1 }}
                  >
                    <Link
                      href={link.href}
                      onClick={() => setMobileOpen(false)}
                      className="block py-4 px-4 text-lg font-semibold text-brand-800 hover:bg-brand-50 rounded-xl transition-colors"
                    >
                      {link.label}
                    </Link>
                  </motion.div>
                ))}
                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.4 }}
                  className="mt-4 space-y-3"
                >
                  <p className="text-sm font-semibold text-gray-500 px-4">
                    Our Services
                  </p>
                  {siteNavigation.services.map((service) => (
                    <Link
                      key={service.href}
                      href={service.href}
                      onClick={() => setMobileOpen(false)}
                      className="block py-3 px-4 text-sm text-gray-600 hover:bg-brand-50 rounded-xl transition-colors"
                    >
                      {service.label}
                    </Link>
                  ))}
                </motion.div>
              </nav>

              <div className="mt-auto pt-8 space-y-4">
                <a
                  href={`tel:${siteConfig.phone}`}
                  className="flex items-center justify-center gap-2 w-full py-3.5 bg-brand-800 text-white font-semibold rounded-xl hover:bg-brand-700 transition-colors"
                >
                  <Phone className="w-5 h-5" />
                  Call {siteConfig.phone}
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
