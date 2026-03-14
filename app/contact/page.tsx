import { COMPANY } from "@/lib/constants";
import Container from "@/components/ui/Container";
import ContactForm from "@/components/sections/ContactForm";
import { PhoneIcon, EmailIcon, LocationIcon } from "@/components/Icons";

export default function ContactPage() {
  return (
    <div className="bg-foreground text-background min-h-screen">
      {/* Dynamic Header Section */}
      <section className="relative overflow-hidden pb-10">
        {/* Background decorations */}
        <div className="absolute top-0 right-0 w-48 h-48 md:w-64 md:h-64 bg-primary rotate-45 transform translate-x-24 md:translate-x-32 -translate-y-24 md:-translate-y-32"></div>
        <div className="absolute top-20 left-10 w-24 h-24 md:w-32 md:h-32 border-[8px] md:border-[12px] border-primary rounded-lg transform rotate-12 opacity-80 z-0"></div>

        <Container className="pt-24 relative z-10 flex flex-col md:flex-row items-center gap-10">
          <div className="md:w-1/2 text-center md:text-left">
            <h1 className="text-5xl md:text-6xl lg:text-8xl font-black text-background mb-2">
              Our
            </h1>
            <h1 className="text-5xl md:text-6xl lg:text-8xl font-black text-primary mb-6">
              Contact
            </h1>
          </div>

          {/* Decorative element */}
          <div className="md:w-1/2 flex justify-center relative">
            <div className="w-48 h-48 md:w-64 md:h-64 lg:w-80 lg:h-80 bg-green-500 rotate-45 flex items-center justify-center shadow-[0_0_40px_rgba(34,197,94,0.4)]">
              <div className="-rotate-45 text-center flex items-center gap-4">
                <PhoneIcon className="w-12 h-12 md:w-16 md:h-16" />
                <EmailIcon className="w-12 h-12 md:w-16 md:h-16" />
              </div>
            </div>
          </div>
        </Container>
      </section>

      <Container className="py-10 md:py-16">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 relative">
          {/* Warning sign graphic */}
          <div className="absolute bottom-[-80px] right-[-30px] lg:bottom-[-50px] lg:right-[-20px] opacity-10 lg:opacity-20 z-0 pointer-events-none">
            <div className="w-32 h-32 lg:w-48 lg:h-48 border-b-[80px] lg:border-b-[100px] border-b-primary border-l-[40px] lg:border-l-[60px] border-l-transparent border-r-[40px] lg:border-r-[60px] border-r-transparent flex items-center justify-center transform scale-125 lg:scale-150">
              <span className="text-foreground font-black text-xl lg:text-3xl mt-8 lg:mt-12">
                !
              </span>
            </div>
          </div>

          {/* Contact Information Cards */}
          <div className="space-y-6 relative z-10">
            {/* Phone / Management */}
            <div className="flex items-start gap-4 md:gap-6 bg-muted p-5 md:p-6 rounded-2xl shadow-lg border border-border hover:border-primary transition">
              <div className="w-10 h-10 md:w-12 md:h-12 bg-primary text-primary-foreground rounded-full flex items-center justify-center shrink-0">
                <PhoneIcon className="w-5 h-5 md:w-6 md:h-6" />
              </div>
              <div>
                <h2 className="font-bold text-base md:text-lg text-background mb-1">
                  {COMPANY.director.name} / {COMPANY.manager.name}
                </h2>
                <p className="text-primary font-semibold text-lg md:text-xl tracking-wide">
                  {COMPANY.phone}
                  <br />
                  {COMPANY.phoneAlt}
                </p>
              </div>
            </div>

            {/* Email */}
            <div className="flex items-center gap-4 md:gap-6 bg-muted p-5 md:p-6 rounded-2xl shadow-lg border border-border hover:border-primary transition">
              <div className="w-10 h-10 md:w-12 md:h-12 bg-muted-foreground/20 text-background rounded-full flex items-center justify-center shrink-0">
                <EmailIcon className="w-5 h-5 md:w-6 md:h-6" />
              </div>
              <a
                href={`mailto:${COMPANY.email}`}
                className="text-background/80 font-semibold text-base md:text-lg hover:text-background transition"
              >
                {COMPANY.email}
              </a>
            </div>

            {/* Address */}
            <div className="flex items-start gap-4 md:gap-6 bg-muted p-5 md:p-6 rounded-2xl shadow-lg border border-border hover:border-primary transition">
              <div className="w-10 h-10 md:w-12 md:h-12 bg-primary text-primary-foreground rounded-full flex items-center justify-center shrink-0">
                <LocationIcon className="w-5 h-5 md:w-6 md:h-6" />
              </div>
              <div>
                <p className="text-background/80 font-bold text-base md:text-lg leading-relaxed uppercase tracking-wider">
                  {COMPANY.address.street}
                  <br />
                  {COMPANY.address.suburb}
                  <br />
                  {COMPANY.address.city}
                  <br />
                  {COMPANY.address.postalCode}
                </p>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <ContactForm className="relative z-10" />
        </div>
      </Container>
    </div>
  );
}
