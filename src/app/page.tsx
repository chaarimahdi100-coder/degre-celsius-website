import { Hero } from "@/components/home/Hero";
import { Introduction } from "@/components/home/Introduction";
import { ServicesGrid } from "@/components/home/ServicesGrid";
import { WhyChooseUs } from "@/components/home/WhyChooseUs";
import { StatsCounter } from "@/components/home/StatsCounter";
import { SolarCalculator } from "@/components/solar/SolarCalculator";
import { FeaturedProjects } from "@/components/home/FeaturedProjects";
import { Testimonials } from "@/components/home/Testimonials";
import { PartnerBrands } from "@/components/home/PartnerBrands";
import { CTASection } from "@/components/home/CTASection";
import { ContactPreview } from "@/components/home/ContactPreview";

export default function Home() {
  return (
    <>
      <Hero />
      <Introduction />
      <ServicesGrid />
      <WhyChooseUs />
      <StatsCounter />
      <SolarCalculator />
      <FeaturedProjects />
      <Testimonials />
      <PartnerBrands />
      <CTASection />
      <ContactPreview />
    </>
  );
}
