import Image from "next/image";
import { COMPANY, SERVICES, SERVICES_VIDEO } from "@/lib/constants";
import Container from "@/components/ui/Container";
import ServicesGrid from "@/components/sections/ServicesGrid";
import CTASection from "@/components/sections/CTASection";

export default function Services() {
  const servicesList = [
    "1. Electrical Maintenance",
    "2. New Installations (Wiring, Lighting, DB boards)",
    "3. Prepaid Metre Installations",
    "4. Solar System Installations",
    "5. Fault Diagnostics",
    "6. Load Balancing and Efficiency Assessments",
    "7. Energy Audits and Load Reduction",
    "8. COC Services",
  ];

  return (
    <div className="bg-background text-foreground min-h-screen">
      {/* HEADER */}
      <section className="bg-foreground text-background py-20 text-center relative overflow-hidden">
        <div className="absolute top-0 right-0 w-24 h-24 md:w-32 md:h-32 bg-primary transform rotate-45 translate-x-12 md:translate-x-16 -translate-y-12 md:-translate-y-16"></div>
        <div className="absolute bottom-0 left-0 w-24 h-24 md:w-32 md:h-32 bg-primary transform rotate-45 -translate-x-12 md:-translate-x-16 translate-y-12 md:translate-y-16"></div>
        <h1 className="text-4xl md:text-5xl font-bold text-primary relative z-10">
          Our Services
        </h1>
      </section>

      <Container className="py-16 space-y-20">
        {/* INTRO */}
        <section className="text-center">
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            {COMPANY.name} offers professional electrical services for
            residential, commercial and industrial clients across South Africa.
          </p>
        </section>

        {/* SERVICES LIST */}
        <section>
          <div className="bg-foreground text-primary p-8 md:p-10 rounded-xl shadow-2xl">
            <h2 className="text-2xl md:text-3xl font-bold mb-8 border-b border-muted pb-4">
              Comprehensive Services List
            </h2>
            <div className="grid md:grid-cols-2 gap-4 md:gap-6">
              {servicesList.map((service) => (
                <div
                  key={service}
                  className="font-bold text-lg md:text-xl hover:text-background transition duration-300"
                >
                  {service}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* SOLAR INVERTER REPAIR */}
        <section className="bg-muted p-8 md:p-10 rounded-xl shadow-lg border-l-8 border-primary relative overflow-hidden">
          <div className="absolute top-0 right-0 mt-2 mr-2">
            <span className="hidden md:inline bg-foreground text-background px-3 py-1 rounded text-sm font-bold">
              100% Trusted
            </span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
            Solar Inverter <br />
            <span className="text-primary">Repair Services</span>
          </h2>

          <div className="grid lg:grid-cols-2 gap-8 lg:gap-10">
            <div className="space-y-6">
              <div className="bg-card p-6 rounded-lg shadow border-l-4 border-foreground">
                <h3 className="font-bold text-lg md:text-xl flex items-center gap-2 mb-2">
                  <span className="text-primary text-2xl">&#10003;</span> Fast &
                  Reliable Service
                </h3>
                <p className="text-muted-foreground">
                  At {COMPANY.name}, we pride ourselves on quick turnaround
                  times to minimize downtime and get your system back to peak
                  performance efficiently!
                </p>
              </div>

              <div className="bg-card p-6 rounded-lg shadow border-l-4 border-primary">
                <h3 className="font-bold text-lg md:text-xl flex items-center gap-2 mb-2">
                  <span className="text-foreground text-2xl">&#10003;</span>{" "}
                  Quality Repairs
                </h3>
                <p className="text-muted-foreground">
                  We use high-quality parts and follow industry standards to
                  ensure long-lasting repairs.
                </p>
              </div>

              <div className="bg-primary/20 p-6 rounded-lg font-semibold italic text-foreground">
                Restore Your Solar System&apos;s Performance!
                <br />
                Minimize Downtime with reliable solutions!
                <br />
                <span className="text-sm font-normal">
                  backed by our satisfaction guarantee!
                </span>
              </div>
            </div>

            <div className="flex flex-col gap-4">
              {/* Service Images */}
              <div className="relative h-48 w-full rounded-xl overflow-hidden shadow-lg border-4 border-primary">
                <Image
                  src="/images/services/sunsynk-8kw-hybrid-inverter.png"
                  alt="Sunsynk 8kW hybrid inverter"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
              </div>
              <div className="relative h-48 w-full rounded-xl overflow-hidden shadow-lg border-4 border-primary">
                <Image
                  src="/images/services/deye-hybrid-inverter.png"
                  alt="Deye hybrid inverter"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
              </div>
            </div>
          </div>
        </section>

        {/* SOLAR PANEL INSTALLATION with Images */}
        <section className="bg-foreground text-background p-8 md:p-10 rounded-xl shadow-2xl border-t-8 border-primary text-center space-y-10">
          <div className="flex justify-center items-end gap-4 md:gap-6">
            {/* Installation Images in circular frames */}
            <div className="relative w-24 h-24 md:w-40 md:h-40 rounded-full border-4 border-primary overflow-hidden shadow-xl z-20">
              <Image
                src="/images/services/residential-photovoltaic-solar-panel.png"
                alt="Residential photovoltaic solar panel"
                fill
                className="object-cover"
                sizes="160px"
              />
            </div>
            <div className="relative w-32 h-32 md:w-52 md:h-52 rounded-full border-4 border-background overflow-hidden shadow-xl z-10 -mb-2 md:-mb-4">
              <Image
                src="/images/services/deye-solar-power-system.png"
                alt="Deye solar power system"
                fill
                className="object-cover"
                sizes="208px"
              />
            </div>
            <div className="relative w-24 h-24 md:w-40 md:h-40 rounded-full border-4 border-primary overflow-hidden shadow-xl z-20">
              <Image
                src="/images/services/residential-rooftop-solar-pv.png"
                alt="Residential rooftop solar PV"
                fill
                className="object-cover"
                sizes="160px"
              />
            </div>
          </div>

          <div>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-black mb-2 tracking-wide">
              SOLAR PANEL
            </h2>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-primary tracking-wide mb-6">
              INSTALLATION
            </h2>
            <p className="text-base md:text-lg lg:text-xl text-background/80 max-w-2xl mx-auto uppercase tracking-wider font-semibold">
              Transform your energy consumption with our solar panel
              installation services!
            </p>
          </div>
        </section>

        {/* Services Video */}
        <section className="text-center">
          <h2 className="text-2xl md:text-3xl font-bold mb-6">
            Watch Our Installation Process
          </h2>
          <div className="max-w-3xl mx-auto rounded-xl overflow-hidden shadow-xl">
            <video
              src={SERVICES_VIDEO.src}
              controls
              className="w-full aspect-video"
              preload="metadata"
              playsInline
            >
              <track kind="captions" label="English" />
              Your browser does not support the video tag.
            </video>
            <div className="bg-foreground px-4 py-3">
              <p className="text-background text-sm font-medium">
                {SERVICES_VIDEO.title}
              </p>
            </div>
          </div>
        </section>
      </Container>

      {/* Services Grid with Images */}
      <ServicesGrid
        title="Our Service Categories"
        subtitle="Professional solutions for all your electrical and solar needs"
        services={[...SERVICES]}
        columns={3}
      />

      {/* CTA */}
      <CTASection />
    </div>
  );
}
