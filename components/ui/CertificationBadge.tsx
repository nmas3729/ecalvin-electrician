import Image from "next/image";
import { cn } from "@/lib/utils";
import type { Certification } from "@/types";

interface CertificationBadgeProps {
  certification: Certification;
  className?: string;
  reverse?: boolean;
}

export default function CertificationBadge({
  certification,
  className,
  reverse = false,
}: CertificationBadgeProps) {
  return (
    <section
      className={cn(
        "flex flex-col items-center gap-10",
        reverse ? "md:flex-row-reverse" : "md:flex-row",
        className
      )}
    >
      <div
        className={cn("md:w-2/3 space-y-4", reverse && "text-left md:text-right")}
      >
        <h2 className="text-3xl font-bold uppercase tracking-wide">
          {certification.title}{" "}
          <span className="text-yellow-400">({certification.badge})</span>
        </h2>
        <p className="text-lg leading-relaxed text-gray-300">
          {certification.description}
        </p>
      </div>
      <div className="md:w-1/3 bg-white p-6 rounded-2xl flex justify-center shadow-lg border-4 border-gray-200 h-48 w-full items-center">
        {certification.logo ? (
          <Image
            src={certification.logo}
            alt={`${certification.title} logo`}
            width={200}
            height={200}
            className="object-contain"
          />
        ) : (
          <div className="text-center">
            <div className="text-gray-600 font-bold text-4xl">
              {certification.badge}
            </div>
            <p className="text-xs text-gray-500 mt-2">
              [{certification.badge} Logo]
            </p>
          </div>
        )}
      </div>
    </section>
  );
}
