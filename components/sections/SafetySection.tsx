import Image from "next/image";
import { cn } from "@/lib/utils";
import { COMPANY, SAFETY_IMAGES } from "@/lib/constants";
import Container from "@/components/ui/Container";

interface SafetySectionProps {
  className?: string;
}

export default function SafetySection({ className }: SafetySectionProps) {
  return (
    <section className={cn("py-16", className)}>
      <Container>
        <div className="flex flex-col lg:flex-row gap-10 items-center">
          {/* Image */}
          <div className="lg:w-1/2">
            <div className="relative w-full aspect-[4/3] rounded-xl overflow-hidden shadow-lg">
              <Image
                src={SAFETY_IMAGES.workers}
                alt={`${COMPANY.name} workers following safety protocols`}
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>
          </div>

          {/* Content */}
          <div className="lg:w-1/2 space-y-6">
            <h2 className="text-3xl font-bold text-foreground">
              Our Safety Standards
            </h2>
            
            <p className="text-lg text-muted-foreground leading-relaxed">
              At {COMPANY.name}, Health and Safety are at the core of everything we do.
              We are fully committed to ensuring a safe working environment for our 
              employees, clients and the public.
            </p>

            <ul className="space-y-3">
              {[
                "All work complies with South African electrical safety regulations",
                "Regular safety training and certification for all technicians",
                "Full PPE (Personal Protective Equipment) on every job site",
                "Thorough risk assessments before starting any project",
                "COIDA registered for employee protection",
              ].map((item, index) => (
                <li key={index} className="flex items-start gap-3">
                  <span className="text-green-500 font-bold mt-1">&#10004;</span>
                  <span className="text-muted-foreground">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </Container>
    </section>
  );
}
