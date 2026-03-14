import Image from "next/image";
import { COMPANY, CERTIFICATIONS, CERTIFICATION_IMAGES } from "@/lib/constants";
import Container from "@/components/ui/Container";
import CertificationBadge from "@/components/ui/CertificationBadge";
import CTASection from "@/components/sections/CTASection";

export default function CertificationsPage() {
  // Extended certifications with logos
  const certificationsWithLogos = CERTIFICATIONS.map((cert) => ({
    ...cert,
    logo: cert.id === "sunsynk" ? CERTIFICATION_IMAGES.sunsynk : undefined,
  }));

  return (
    <div className="bg-foreground text-background min-h-screen">
      {/* HEADER */}
      <section className="pt-20 pb-12 text-center relative">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-background mb-2 tracking-wide">
          Certifications &
        </h1>
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-primary tracking-wide">
          Accreditation
        </h1>
      </section>

      <Container className="pb-20 space-y-16">
        {certificationsWithLogos.map((certification, index) => (
          <CertificationBadge
            key={certification.id}
            certification={certification}
            reverse={index % 2 !== 0}
          />
        ))}

        {/* Sunsynk Product Certification */}
        <section className="flex flex-col lg:flex-row items-center gap-8 lg:gap-12">
          <div className="lg:w-2/3 space-y-4 text-center lg:text-left">
            <h2 className="text-2xl md:text-3xl font-bold uppercase tracking-wide">
              Sunsynk Certified Installer{" "}
              <span className="text-primary">(Product Partner)</span>
            </h2>
            <p className="text-base md:text-lg leading-relaxed text-background/80">
              {COMPANY.name} is a certified installer for Sunsynk hybrid
              inverters. We are trained and authorized to install, maintain, and
              service Sunsynk solar products, ensuring optimal performance and
              warranty compliance for our clients.
            </p>
          </div>
          <div className="lg:w-1/3 w-full max-w-xs">
            <div className="bg-card p-4 rounded-2xl shadow-lg border-2 border-border aspect-square flex items-center justify-center">
              <div className="relative w-full h-full">
                <Image
                  src={CERTIFICATION_IMAGES.sunsynk}
                  alt="Sunsynk certified hybrid inverter products"
                  fill
                  className="object-contain p-2"
                  sizes="(max-width: 768px) 200px, 250px"
                />
              </div>
            </div>
          </div>
        </section>
      </Container>

      {/* CTA */}
      <CTASection />
    </div>
  );
}
