import { SERVICES } from "@/lib/constants";
import Hero from "@/components/sections/Hero";
import AboutSection from "@/components/sections/AboutSection";
import ServicesGrid from "@/components/sections/ServicesGrid";
import WhyChooseUs from "@/components/sections/WhyChooseUs";
import GallerySection from "@/components/sections/GallerySection";
import CTASection from "@/components/sections/CTASection";

export default function Home() {
  return (
    <main>
      {/* Hero Section with background image */}
      <Hero />

      {/* About Section */}
      <AboutSection />

      {/* Services Grid */}
      <ServicesGrid
        services={[...SERVICES].slice(0, 6)}
        subtitle="Professional electrical and solar solutions for all your needs"
      />

      {/* Why Choose Us */}
      <WhyChooseUs />

      {/* Gallery Section with project images and videos */}
      <GallerySection />

      {/* Call to Action */}
      <CTASection />
    </main>
  );
}
