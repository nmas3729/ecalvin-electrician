import { cn } from "@/lib/utils";
import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";
import ServiceCard from "@/components/ui/ServiceCard";
import type { Service } from "@/types";

interface ServicesGridProps {
  title?: string;
  subtitle?: string;
  services: Service[];
  className?: string;
  columns?: 2 | 3 | 4;
}

const columnClasses = {
  2: "md:grid-cols-2",
  3: "md:grid-cols-3",
  4: "md:grid-cols-2 lg:grid-cols-4",
};

export default function ServicesGrid({
  title = "Our Services",
  subtitle,
  services,
  className,
  columns = 3,
}: ServicesGridProps) {
  return (
    <section className={cn("bg-gray-100 py-16", className)}>
      <Container>
        <SectionHeading title={title} subtitle={subtitle} />

        <div className={cn("grid gap-8", columnClasses[columns])}>
          {services.map((service) => (
            <ServiceCard key={service.id} service={service} />
          ))}
        </div>
      </Container>
    </section>
  );
}
