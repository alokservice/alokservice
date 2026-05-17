import { X, Check } from "lucide-react";
import { SectionHeader } from "@/components/shared/section-header";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { FadeIn } from "@/components/animations/fade-in";

const comparisons = [
  { feature: "Background Verified Staff", traditional: false, alok: true },
  { feature: "Professional Training", traditional: false, alok: true },
  { feature: "Satisfaction Guarantee", traditional: false, alok: true },
  { feature: "Eco-Friendly Products", traditional: false, alok: true },
  { feature: "Timely Service", traditional: false, alok: true },
  { feature: "Insurance Coverage", traditional: false, alok: true },
  { feature: "Customizable Plans", traditional: false, alok: true },
  { feature: "24/7 Support", traditional: false, alok: true },
  { feature: "Transparent Pricing", traditional: false, alok: true },
  { feature: "Consistent Quality", traditional: false, alok: true },
];

export function ComparisonSection() {
  return (
    <section className="section-padding bg-white">
      <div className="container-wide">
        <SectionHeader
          subtitle="Why We're Different"
          title="Alok Service vs. Traditional Providers"
          description="See how we raise the bar for service excellence across every metric that matters to you."
        />

        <FadeIn>
          <Card variant="bordered" className="overflow-hidden !p-0">
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="border-b-2 border-gray-200">
                    <th className="text-left p-5 md:p-6 font-bold text-brand-800 min-w-[140px] md:min-w-[200px]">
                      Feature
                    </th>
                    <th className="text-center p-5 md:p-6 font-bold text-gray-400 min-w-[100px] md:min-w-[140px]">
                      Traditional Providers
                    </th>
                    <th className="text-center p-5 md:p-6 font-bold text-brand-800 min-w-[100px] md:min-w-[140px] bg-brand-50">
                      <Badge variant="accent" className="mb-1">
                        Alok Service
                      </Badge>
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {comparisons.map((item, i) => (
                    <tr
                      key={item.feature}
                      className={`border-b border-gray-100 transition-colors hover:bg-gray-50 ${
                        i % 2 === 0 ? "bg-white" : "bg-gray-50/50"
                      }`}
                    >
                      <td className="p-5 md:p-6 text-sm font-medium text-brand-800">
                        {item.feature}
                      </td>
                      <td className="text-center p-5 md:p-6">
                        {item.traditional ? (
                          <Check className="w-5 h-5 text-green-500 mx-auto" />
                        ) : (
                          <X className="w-5 h-5 text-red-400 mx-auto" />
                        )}
                      </td>
                      <td className="text-center p-5 md:p-6 bg-brand-50/50">
                        {item.alok ? (
                          <Check className="w-5 h-5 text-green-500 mx-auto" />
                        ) : (
                          <X className="w-5 h-5 text-red-400 mx-auto" />
                        )}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </Card>
        </FadeIn>
      </div>
    </section>
  );
}
