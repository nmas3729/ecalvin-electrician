import { COMPANY } from "@/lib/constants";
import SafetySection from "@/components/sections/SafetySection";
import CTASection from "@/components/sections/CTASection";

export default function SafetyPage() {
  return (
    <div className="bg-background text-foreground min-h-screen">
      {/* HEADER */}
      <section className="bg-foreground text-background py-20 text-center relative overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="absolute top-0 right-0 w-full h-full bg-primary transform origin-top-right scale-150 rotate-12 translate-y-20 opacity-10"></div>
        </div>
        <h1 className="text-4xl md:text-6xl font-black text-primary relative z-10 tracking-widest uppercase">
          Health and Safety
        </h1>
      </section>

      {/* SAFETY COMMITMENT BOX */}
      <div className="max-w-4xl mx-auto px-6 py-10 mt-10">
        <section className="bg-foreground text-background p-8 md:p-12 rounded-2xl shadow-2xl relative overflow-hidden">
          <div className="absolute -top-8 -left-8 w-24 h-24 md:w-32 md:h-32 bg-primary rounded-full z-0 opacity-50 flex items-center justify-center shadow-lg">
            <span className="text-foreground font-bold text-3xl md:text-4xl">!</span>
          </div>

          <div className="relative z-10 space-y-6 text-center pt-6">
            <h2 className="text-3xl md:text-4xl font-black text-primary uppercase tracking-widest border-b-4 border-muted pb-6 inline-block">
              Commitment
            </h2>

            <p className="text-lg md:text-xl leading-relaxed text-background/90 font-medium">
              At <strong className="text-primary font-bold">{COMPANY.name}</strong>, Health and Safety are at the core of everything we do.
            </p>

            <p className="text-base md:text-lg leading-relaxed text-background/80">
              We are fully committed to ensuring a safe working environment for our employees, clients and the public by adhering to strict safety standards and legal requirements in all our electrical operations.
            </p>
          </div>

          <div className="absolute bottom-0 right-0 w-full h-3 bg-primary rounded-b-2xl"></div>
        </section>
      </div>

      {/* Safety Section with Image */}
      <SafetySection className="bg-muted/30" />

      {/* CTA */}
      <CTASection />
    </div>
  );
}
