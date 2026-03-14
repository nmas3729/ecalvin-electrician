import { cn } from "@/lib/utils";
import { COMPANY } from "@/lib/constants";
import Button from "@/components/ui/Button";
import Container from "@/components/ui/Container";
import { PhoneIcon, QuoteIcon } from "@/components/Icons";

interface CTASectionProps {
  title?: string;
  subtitle?: string;
  className?: string;
}

export default function CTASection({
  title = "Need Professional Electrical Services?",
  subtitle = "Our qualified electricians are ready to assist you.",
  className,
}: CTASectionProps) {
  return (
    <section className={cn("bg-yellow-400 text-black py-16", className)}>
      <Container className="text-center">
        <h2 className="text-3xl font-bold mb-4 text-balance">{title}</h2>
        <p className="text-lg font-semibold mb-8">{subtitle}</p>

        <div className="flex justify-center gap-4 flex-wrap">
          <Button href={`tel:${COMPANY.phone.replace(/\s/g, "")}`} variant="dark">
            <PhoneIcon className="w-5 h-5" />
            Call: {COMPANY.phone}
          </Button>

          <Button href="/contact" variant="outline" className="border-black text-black hover:bg-black hover:text-white">
            <QuoteIcon className="w-5 h-5" />
            Request a Quote
          </Button>
        </div>
      </Container>
    </section>
  );
}
