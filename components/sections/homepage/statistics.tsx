import { SectionHeader } from "@/components/shared/section-header";
import { AnimatedCounter } from "@/components/shared/animated-counter";
import { statistics } from "@/data/statistics";

export function StatisticsSection() {
  return (
    <section className="section-padding bg-gradient-brand text-white">
      <div className="container-wide">
        <SectionHeader
          title="Our Impact in Numbers"
          description="Every number represents a family we've helped, a home we've cleaned, or a life we've touched."
          titleClassName="text-white"
          descriptionClassName="text-gray-300"
        />
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12">
          {statistics.map((stat) => (
            <AnimatedCounter
              key={stat.label}
              value={stat.value}
              suffix={stat.suffix}
              prefix={stat.prefix}
              label={stat.label}
              valueClassName="text-white"
              labelClassName="text-gray-300"
            />
          ))}
        </div>
      </div>
    </section>
  );
}
