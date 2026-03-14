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
        "flex flex-col items-center gap-8 lg:gap-12",
        reverse ? "lg:flex-row-reverse" : "lg:flex-row",
        className
      )}
    >
      {/* Content */}
      <div
        className={cn(
          "lg:w-2/3 space-y-4",
          reverse ? "text-center lg:text-right" : "text-center lg:text-left"
        )}
      >
        <h2 className="text-2xl md:text-3xl font-bold uppercase tracking-wide">
          {certification.title}{" "}
          <span className="text-primary">({certification.badge})</span>
        </h2>
        <p className="text-base md:text-lg leading-relaxed text-muted-foreground">
          {certification.description}
        </p>
      </div>

      {/* Badge/Logo Container - Scaled correctly */}
      <div className="lg:w-1/3 w-full max-w-xs">
        <div className="bg-card p-6 rounded-2xl shadow-lg border-2 border-border aspect-square flex items-center justify-center">
          {certification.logo ? (
            <div className="relative w-full h-full">
              <Image
                src={certification.logo}
                alt={`${certification.title} logo`}
                fill
                className="object-contain p-4"
                sizes="(max-width: 768px) 200px, 250px"
              />
            </div>
          ) : (
            <div className="text-center">
              <div className="text-muted-foreground font-bold text-4xl md:text-5xl">
                {certification.badge}
              </div>
              <p className="text-xs text-muted-foreground/70 mt-3">
                Certified
              </p>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
