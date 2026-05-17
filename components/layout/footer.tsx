import Link from "next/link";
import { Phone, Mail, MapPin, ArrowUpRight } from "lucide-react";
import { siteConfig, siteNavigation } from "@/data/site-config";
import { Separator } from "@/components/ui/separator";

const socialLinks = [
  { label: "Facebook", href: siteConfig.social.facebook },
  { label: "Instagram", href: siteConfig.social.instagram },
  { label: "Twitter", href: siteConfig.social.twitter },
  { label: "YouTube", href: siteConfig.social.youtube },
  { label: "LinkedIn", href: siteConfig.social.linkedin },
];

export function Footer() {
  return (
    <footer className="bg-brand-800 text-white">
      <div className="container-wide py-16 md:py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          <div className="space-y-6">
            <Link href="/" className="flex items-center gap-2">
              <div className="w-9 h-9 rounded-xl overflow-hidden flex items-center justify-center">
                <img src="/logo.jpg" alt="Alok Service" className="w-full h-full object-cover" />
              </div>
              <span className="font-bold text-xl">{siteConfig.name}</span>
            </Link>
            <p className="text-gray-300 text-sm leading-relaxed">
              {siteConfig.name} is your trusted partner for premium home care,
              healthcare, cleaning, and facility management services across
              Dhaka, Bangladesh. Professional, reliable, and caring.
            </p>
            <div className="flex gap-3">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.label}
                  className="w-10 h-10 rounded-xl bg-white/10 flex items-center justify-center hover:bg-white/20 transition-all duration-300 text-white/70 hover:text-white"
                >
                  <span className="text-xs font-bold">{social.label[0]}</span>
                </a>
              ))}
            </div>
          </div>

          <div>
            <h3 className="font-semibold text-lg mb-6">Quick Links</h3>
            <ul className="space-y-3">
              {siteNavigation.primary.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-gray-300 hover:text-white transition-colors flex items-center gap-1 group"
                  >
                    {link.label}
                    <ArrowUpRight className="w-3 h-3 opacity-0 -translate-y-1 group-hover:opacity-100 group-hover:translate-y-0 transition-all" />
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-lg mb-6">Our Services</h3>
            <ul className="space-y-3">
              {siteNavigation.services.map((service) => (
                <li key={service.href}>
                  <Link
                    href={service.href}
                    className="text-sm text-gray-300 hover:text-white transition-colors flex items-center gap-1 group"
                  >
                    {service.label}
                    <ArrowUpRight className="w-3 h-3 opacity-0 -translate-y-1 group-hover:opacity-100 group-hover:translate-y-0 transition-all" />
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-lg mb-6">Contact Us</h3>
            <ul className="space-y-4">
              <li>
                <a
                  href={`tel:${siteConfig.phone}`}
                  className="flex items-start gap-3 text-sm text-gray-300 hover:text-white transition-colors group"
                >
                  <Phone className="w-4 h-4 mt-0.5 text-white/50 group-hover:text-white/80" />
                  <span>{siteConfig.phone}</span>
                </a>
              </li>
              <li>
                <a
                  href={`mailto:${siteConfig.email}`}
                  className="flex items-start gap-3 text-sm text-gray-300 hover:text-white transition-colors group"
                >
                  <Mail className="w-4 h-4 mt-0.5 text-white/50 group-hover:text-white/80" />
                  <span>{siteConfig.email}</span>
                </a>
              </li>
              <li>
                <div className="flex items-start gap-3 text-sm text-gray-300">
                  <MapPin className="w-4 h-4 mt-0.5 text-white/50 shrink-0" />
                  <span>
                    {siteConfig.address.street},{" "}
                    {siteConfig.address.city}, {siteConfig.address.state}{" "}
                    {siteConfig.address.zip}
                  </span>
                </div>
              </li>
            </ul>
          </div>
        </div>

        <Separator variant="dark" className="my-10" />

        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm text-gray-400">
            &copy; {new Date().getFullYear()} {siteConfig.name}. All rights
            reserved.
          </p>
          <div className="flex gap-6">
            <Link
              href="/privacy-policy"
              className="text-sm text-gray-400 hover:text-white transition-colors"
            >
              Privacy Policy
            </Link>
            <Link
              href="/terms"
              className="text-sm text-gray-400 hover:text-white transition-colors"
            >
              Terms & Conditions
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
