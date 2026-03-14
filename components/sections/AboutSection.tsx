import Image from "next/image";
import { cn } from "@/lib/utils";
import { COMPANY, ABOUT_IMAGES } from "@/lib/constants";
import Container from "@/components/ui/Container";

interface AboutSectionProps {
  showImage?: boolean;
  className?: string;
}

export default function AboutSection({
  showImage = false,
  className,
}: AboutSectionProps) {
  return (
    <section className={cn("py-16", className)}>
      <Container className="text-center max-w-4xl">
        <h2 className="text-3xl font-bold mb-6">About Our Company</h2>

        <div className={cn(showImage && "flex flex-col md:flex-row gap-10 items-center text-left")}>
          <div className={cn(showImage && "md:w-1/2")}>
            <p className="text-lg text-gray-700 mb-4">
              {COMPANY.name} is a proudly South African electrical services company
              dedicated to delivering reliable, efficient and safe electrical
              solutions for residential, commercial and industrial clients.
            </p>

            <p className="text-lg text-gray-700 mb-4">
              Our team of qualified electricians is committed to excellence,
              ensuring every installation, repair and maintenance project
              meets national electrical standards and safety regulations.
            </p>

            <p className="text-lg text-gray-700 mb-4">
              Through professionalism, technical expertise and a customer-first
              approach, {COMPANY.name} has built a reputation for dependable
              service and high-quality workmanship.
            </p>

            <p className="text-lg text-gray-700">
              We aim to provide electrical solutions that are safe,
              efficient and built to last.
            </p>
          </div>

          {showImage && (
            <div className="md:w-1/2">
              <div className="relative w-full h-64 md:h-80 rounded-lg overflow-hidden bg-gray-100">
                <Image
                  src={ABOUT_IMAGES.inline}
                  alt={`${COMPANY.name} rooftop solar installation example`}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              </div>
            </div>
          )}
        </div>
      </Container>
    </section>
  );
}
