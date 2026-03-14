import Image from "next/image";
import { COMPANY, CORE_VALUES, ABOUT_IMAGES, TEAM_IMAGES } from "@/lib/constants";
import Container from "@/components/ui/Container";
import TeamSection from "@/components/sections/TeamSection";
import CTASection from "@/components/sections/CTASection";

export default function AboutPage() {
  return (
    <div className="bg-background text-foreground min-h-screen">
      {/* HEADER */}
      <section className="bg-foreground text-background py-20 text-center">
        <h1 className="text-4xl md:text-5xl font-bold text-primary">About Company</h1>
        <p className="mt-4 text-lg md:text-xl text-background/80">
          Discover who we are and what drives us
        </p>
      </section>

      <Container className="py-16 space-y-20">
        {/* ABOUT SECTION with Image */}
        <section className="flex flex-col lg:flex-row gap-10 items-center">
          <div className="lg:w-1/2 space-y-6">
            <h2 className="text-3xl md:text-4xl font-bold border-b-4 border-primary inline-block pb-2">
              Who We Are
            </h2>
            <p className="text-lg leading-relaxed font-semibold text-primary">
              {COMPANY.name} is a proudly South African electrical services company
              dedicated to delivering reliable, efficient, and safe electrical
              solutions for residential, commercial and industrial clients.
            </p>
            <p className="text-lg leading-relaxed text-muted-foreground">
              With a team of qualified electricians and a commitment to excellence,
              we have built a reputation for quality workmanship and dependable service.
            </p>
            <p className="text-lg leading-relaxed border-l-4 border-primary pl-4 italic text-muted-foreground">
              At {COMPANY.name} we ensure that all our projects meet national
              standards and are completed on time and within budget.
            </p>
          </div>
          <div className="lg:w-1/2">
            <div className="relative w-full aspect-[4/3] rounded-xl overflow-hidden shadow-xl">
              <Image
                src={ABOUT_IMAGES.inline}
                alt={`${COMPANY.name} rooftop solar installation`}
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>
          </div>
        </section>

        {/* WELCOME MESSAGE */}
        <section className="bg-foreground text-background p-8 md:p-12 lg:p-16 rounded-xl shadow-2xl relative overflow-hidden">
          <div className="absolute top-0 right-0 w-24 h-24 md:w-32 md:h-32 bg-primary rounded-bl-full z-0 opacity-20"></div>
          <div className="relative z-10 flex flex-col lg:flex-row gap-10 items-center">
            <div className="lg:w-1/3 text-center space-y-4">
              <div className="w-40 h-40 md:w-48 md:h-48 mx-auto rounded-full border-4 border-primary overflow-hidden shadow-lg relative">
                <Image
                  src={TEAM_IMAGES.director}
                  alt={COMPANY.director.name}
                  fill
                  className="object-cover"
                  sizes="200px"
                />
              </div>
              <div>
                <h3 className="text-primary text-xl md:text-2xl font-bold">{COMPANY.name}</h3>
                <p className="text-background text-base font-semibold mt-1">
                  {COMPANY.director.name}
                </p>
                <p className="text-primary/80 text-sm font-medium tracking-wide uppercase mt-1">
                  {COMPANY.director.title}
                </p>
              </div>
            </div>

            <div className="lg:w-2/3 space-y-6">
              <h2 className="text-3xl md:text-4xl font-bold text-primary">Welcome Message</h2>
              <p className="text-lg md:text-xl font-semibold border-b border-muted pb-4">
                Welcome to {COMPANY.name} — Where Professionalism Meets Power.
              </p>
              <p className="text-base md:text-lg leading-relaxed text-background/80">
                As the Managing Director, I am proud to lead a company committed to
                delivering reliable, safe and high-quality electrical services to
                homes, businesses and industries across South Africa.
              </p>
              <p className="text-base md:text-lg leading-relaxed text-background/80">
                Our team is driven by integrity, technical expertise and a passion
                for excellence. Every project we undertake reflects our commitment
                to safety, quality and customer satisfaction.
              </p>
              <p className="text-lg text-primary font-semibold italic">
                Thank you for trusting {COMPANY.name} as your electrical services partner.
              </p>
            </div>
          </div>
        </section>

        {/* VISION AND MISSION */}
        <section className="grid md:grid-cols-2 gap-8 lg:gap-10">
          {/* Vision */}
          <div className="border border-border p-8 md:p-10 rounded-xl shadow-lg hover:shadow-xl transition duration-300 bg-card group">
            <div className="w-14 h-14 md:w-16 md:h-16 bg-primary text-primary-foreground rounded-full flex items-center justify-center mb-6 shadow-md group-hover:scale-110 transition-transform">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-7 w-7 md:h-8 md:w-8"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"
                />
              </svg>
            </div>
            <h2 className="text-2xl md:text-3xl font-bold mb-4 flex items-center gap-3">
              <span className="text-card-foreground">Our</span>
              <span className="text-primary">Vision</span>
            </h2>
            <p className="text-base md:text-lg leading-relaxed text-muted-foreground border-l-4 border-primary pl-4">
              To become a leading and trusted provider of innovative, safe and
              sustainable electrical solutions across South Africa, empowering
              communities and businesses through expertise.
            </p>
          </div>

          {/* Mission */}
          <div className="border border-border p-8 md:p-10 rounded-xl shadow-lg hover:shadow-xl transition duration-300 bg-card group">
            <div className="w-14 h-14 md:w-16 md:h-16 bg-foreground text-background rounded-full flex items-center justify-center mb-6 shadow-md group-hover:scale-110 transition-transform">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-7 w-7 md:h-8 md:w-8 text-primary"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"
                />
              </svg>
            </div>
            <h2 className="text-2xl md:text-3xl font-bold mb-4 flex items-center gap-3">
              <span className="text-card-foreground">Our</span>
              <span className="text-primary">Mission</span>
            </h2>
            <p className="text-base md:text-lg leading-relaxed text-muted-foreground mb-4">
              To provide high quality, reliable and affordable electrical services
              to residential, commercial and industrial clients.
            </p>
            <p className="font-bold text-card-foreground mb-2">We are committed to:</p>
            <ul className="list-disc pl-5 space-y-2 text-muted-foreground mb-4 marker:text-primary">
              <li>Ensuring safety and compliance in every project.</li>
              <li>
                Building long-term relationships based on trust, integrity and
                customer satisfaction.
              </li>
            </ul>
          </div>
        </section>

        {/* OUR CORE VALUES */}
        <section className="bg-foreground text-background p-8 md:p-12 lg:p-16 rounded-xl shadow-2xl relative overflow-hidden">
          <div className="absolute bottom-0 right-0 w-48 h-48 md:w-64 md:h-64 bg-primary rounded-tl-full z-0 opacity-10"></div>
          <div className="relative z-10 text-center mb-10">
            <h2 className="text-3xl md:text-4xl font-bold text-primary">OUR CORE VALUES</h2>
          </div>

          <div className="relative z-10 grid md:grid-cols-2 gap-x-8 lg:gap-x-12 gap-y-8 lg:gap-y-10">
            {CORE_VALUES.map((value, index) => (
              <div key={value.title} className="space-y-2">
                <h3 className="text-primary text-xl md:text-2xl font-bold border-b border-muted pb-2">
                  {index + 1}. {value.title}
                </h3>
                <p className="text-base md:text-lg leading-relaxed text-background/80">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </section>
      </Container>

      {/* Team Section */}
      <TeamSection className="bg-muted/30" />

      {/* CTA */}
      <CTASection />
    </div>
  );
}
