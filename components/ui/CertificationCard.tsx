"use client";

import Image from "next/image";
import { Certification } from "@/types";
import { cn } from "@/lib/utils";

interface CertificationCardProps {
  certification: Certification;
  className?: string;
}

export default function CertificationCard({
  certification,
  className,
}: CertificationCardProps) {
  return (
    <div
      className={cn(
        "bg-card p-8 rounded-2xl shadow-lg border-2 border-border flex flex-col items-center text-center space-y-6 hover:border-primary transition duration-300",
        className
      )}
    >
      <div className="relative w-24 h-24 mb-2 flex items-center justify-center">
        {certification.logo && (
          <Image
            src={certification.logo}
            alt={`${certification.title} Logo`}
            fill
            className="object-contain"
            sizes="100px"
          />
        )}
      </div>

      <div className="space-y-4 flex-grow">
        <h3 className="text-xl font-bold text-background uppercase tracking-wider">
          {certification.title}
        </h3>
        <p className="text-sm text-background/70 leading-relaxed">
          {certification.description}
        </p>
      </div>

      <div className="bg-primary/20 text-primary px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-widest border border-primary/30">
        Certified: {certification.badge}
      </div>
    </div>
  );
}
