import Image from "next/image";
import { cn } from "@/lib/utils";
import type { Service } from "@/types";

interface ServiceCardProps {
  service: Service;
  className?: string;
}

export default function ServiceCard({ service, className }: ServiceCardProps) {
  return (
    <div
      className={cn(
        "group bg-card rounded-xl shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden flex flex-col h-full",
        className
      )}
    >
      {service.image && (
        <div className="relative w-full aspect-[4/3] overflow-hidden bg-muted">
          <Image
            src={service.image}
            alt={service.title}
            fill
            className="object-cover group-hover:scale-105 transition-transform duration-300"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
        </div>
      )}
      <div className="p-6 flex-1 flex flex-col">
        <h3 className="font-bold text-xl mb-3 text-card-foreground">{service.title}</h3>
        <p className="text-muted-foreground flex-1">{service.description}</p>
      </div>
    </div>
  );
}
