import { cn } from "@/lib/utils";
import { COMPANY, BENEFITS } from "@/lib/constants";
import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";

interface WhyChooseUsProps {
  className?: string;
}

export default function WhyChooseUs({ className }: WhyChooseUsProps) {
  return (
    <section className={cn("py-16", className)}>
      <Container>
        <SectionHeading title={`Why Choose ${COMPANY.name}`} />

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {BENEFITS.map((benefit) => (
            <div
              key={benefit.title}
              className="bg-white p-6 rounded shadow border-t-4 border-yellow-400"
            >
              <h3 className="font-bold text-xl mb-3 flex items-center gap-2">
                <span className="text-green-500">&#10004;</span>
                {benefit.title}
              </h3>
              <p className="text-gray-700">{benefit.description}</p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
