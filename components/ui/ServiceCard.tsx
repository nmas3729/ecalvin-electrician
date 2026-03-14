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
        "bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow",
        className
      )}
    >
      {service.image && (
        <div className="relative w-full h-48 mb-4 rounded-lg overflow-hidden bg-gray-100">
          <Image
            src={service.image}
            alt={service.title}
            fill
            className="object-cover"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
        </div>
      )}
      <h3 className="font-bold text-xl mb-3">{service.title}</h3>
      <p className="text-gray-700">{service.description}</p>
    </div>
  );
}
