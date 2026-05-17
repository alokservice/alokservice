import Link from "next/link";
import { ArrowRight, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { siteConfig } from "@/data/site-config";
import type { Service } from "@/data/services";

interface ServiceCTAProps {
  service: Service;
}

export function ServiceCTA({ service }: ServiceCTAProps) {
  return (
    <section className="section-padding bg-gradient-brand text-white relative overflow-hidden">
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-10 left-10 w-72 h-72 bg-white rounded-full blur-3xl" />
        <div className="absolute bottom-10 right-10 w-96 h-96 bg-white rounded-full blur-3xl" />
      </div>

      <div className="container-wide relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready for Premium {service.title}?
          </h2>
          <p className="text-white/70 text-lg mb-8 max-w-2xl mx-auto">
            Book your service today and experience the {siteConfig.name}{" "}
            difference. Your satisfaction is guaranteed.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact">
              <Button
                variant="secondary"
                size="xl"
                className="w-full sm:w-auto"
              >
                Book Now
                <ArrowRight className="w-5 h-5" />
              </Button>
            </Link>
            <a href={`tel:${siteConfig.phone}`}>
              <Button
                variant="ghost"
                size="xl"
                className="w-full sm:w-auto text-white border-2 border-white/30 hover:bg-white/10"
              >
                <Phone className="w-5 h-5" />
                {siteConfig.phone}
              </Button>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
