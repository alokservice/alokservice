import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import { siteConfig } from "@/data/site-config";

export default function NotFound() {
  return (
    <div className="relative min-h-screen flex items-center justify-center px-4">
      <div className="absolute inset-0">
        <img src="/hero.jpg" alt="" className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-brand-800/80" />
      </div>
      <div className="relative z-10 text-center max-w-lg">
        <div className="w-24 h-24 rounded-3xl bg-gradient-brand flex items-center justify-center mx-auto mb-8">
          <span className="text-4xl font-bold text-white">404</span>
        </div>
        <h1 className="text-3xl md:text-4xl font-bold text-white mb-4">
          Page Not Found
        </h1>
        <p className="text-white/70 mb-8 leading-relaxed">
          Sorry, the page you&apos;re looking for doesn&apos;t exist or has been
          moved. Let us help you find what you need.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link href="/">
            <Button variant="accent" size="lg">
              <ArrowLeft className="w-4 h-4" />
              Back to Home
            </Button>
          </Link>
          <Link href="/contact">
            <Button variant="secondary" size="lg">
              Contact {siteConfig.name}
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
}
