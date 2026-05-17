import Link from "next/link";
import { ArrowRight, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { FadeIn } from "@/components/animations/fade-in";
import { siteConfig } from "@/data/site-config";

export function CTABanner() {
  return (
    <section className="section-padding bg-gradient-brand text-white relative overflow-hidden">
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-10 left-10 w-72 h-72 bg-white rounded-full blur-3xl" />
        <div className="absolute bottom-10 right-10 w-96 h-96 bg-white rounded-full blur-3xl" />
      </div>

      <div className="container-wide relative z-10">
        <FadeIn>
          <div className="max-w-3xl mx-auto text-center">
            <span className="inline-block px-4 py-1.5 rounded-full bg-white/10 text-white/80 text-xs font-semibold uppercase tracking-wider mb-6">
              Get Started Today
            </span>
            <h2 className="text-3xl md:text-5xl font-bold leading-tight mb-6">
              Ready to Experience the{" "}
              <span className="text-white/90">Alok Service</span> Difference?
            </h2>
            <p className="text-lg md:text-xl text-white/70 mb-10 max-w-2xl mx-auto">
              Join thousands of happy families and businesses who trust us for
              premium care. Your first consultation is free.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact">
                <Button
                  variant="secondary"
                  size="xl"
                  className="w-full sm:w-auto"
                >
                  Book Free Consultation
                  <ArrowRight className="w-5 h-5" />
                </Button>
              </Link>
              <a href={`tel:${siteConfig.phone}`}>
                <Button
                  variant="ghost"
                  size="xl"
                  className="w-full sm:w-auto text-white border-2 border-white/30 hover:bg-white/10 hover:border-white/50"
                >
                  <Phone className="w-5 h-5" />
                  {siteConfig.phone}
                </Button>
              </a>
            </div>

            <div className="mt-10 flex flex-wrap justify-center gap-8 text-sm text-white/60">
              <span>No hidden charges</span>
              <span className="w-1 h-1 rounded-full bg-white/30 mt-2" />
              <span>Free on-site estimate</span>
              <span className="w-1 h-1 rounded-full bg-white/30 mt-2 hidden sm:block" />
              <span>100% satisfaction guaranteed</span>
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
