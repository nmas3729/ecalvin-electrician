import Image from "next/image";
import { cn } from "@/lib/utils";
import { COMPANY, HERO_IMAGES } from "@/lib/constants";
import Button from "@/components/ui/Button";
import { getWhatsAppLink } from "@/lib/utils";
import { WhatsAppIcon } from "@/components/Icons";

interface HeroProps {
  title?: string;
  tagline?: string;
  description?: string;
  backgroundImage?: string;
  showCTA?: boolean;
  showBenefits?: boolean;
  className?: string;
}

export default function Hero({
  title = COMPANY.name,
  tagline = COMPANY.tagline,
  description = COMPANY.description,
  backgroundImage = HERO_IMAGES.home,
  showCTA = true,
  showBenefits = true,
  className,
}: HeroProps) {
  return (
    <section
      className={cn(
        "relative bg-black text-white py-28 text-center overflow-hidden",
        className
      )}
    >
      {/* Background Image with Overlay */}
      {backgroundImage && (
        <>
          <Image
            src={backgroundImage}
            alt="Hero background"
            fill
            className="object-cover opacity-30"
            priority
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-black/50" />
        </>
      )}

      {/* Content */}
      <div className="relative z-10 max-w-4xl mx-auto px-6">
        <h1 className="text-3xl md:text-5xl font-bold text-yellow-400 text-balance">
          {title}
        </h1>

        <p className="mt-4 text-lg font-semibold tracking-wide uppercase text-yellow-300">
          {tagline}
        </p>

        <p className="mt-5 text-base text-gray-300 max-w-xl mx-auto leading-relaxed text-pretty">
          {description}
        </p>

        {showCTA && (
          <div className="mt-8 flex justify-center gap-6 flex-wrap">
            <Button href="/contact" variant="primary">
              Request a Quote
            </Button>

            <Button
              href={getWhatsAppLink(COMPANY.whatsapp)}
              variant="outline"
              external
            >
              <WhatsAppIcon className="w-5 h-5" />
              WhatsApp Us
            </Button>
          </div>
        )}

        {showBenefits && (
          <div className="mt-10 flex justify-center gap-6 flex-wrap text-sm font-medium">
            <span className="flex items-center gap-2 text-green-400">
              <span>&#10004;</span> Certified Electrical Contractors
            </span>
            <span className="flex items-center gap-2 text-green-400">
              <span>&#10004;</span> Fast & Reliable Service
            </span>
            <span className="flex items-center gap-2 text-green-400">
              <span>&#10004;</span> Safety & Compliance Guaranteed
            </span>
          </div>
        )}
      </div>
    </section>
  );
}
