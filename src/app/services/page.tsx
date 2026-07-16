import { Metadata } from "next";
import { ServicesGrid } from "@/components/home/ServicesGrid";
import { CTASection } from "@/components/home/CTASection";

export const metadata: Metadata = {
  title: "Nos Services",
  description: "Découvrez nos solutions complètes en photovoltaïque, climatisation, chauffage et maintenance en Tunisie.",
};

export default function ServicesPage() {
  return (
    <>
      <section className="pt-32 pb-16 md:pt-40 md:pb-20 bg-brand-navy text-white">
        <div className="container mx-auto px-4 md:px-6 text-center max-w-3xl">
          <h1 className="text-4xl md:text-6xl font-bold font-heading mb-6">Nos Services</h1>
          <p className="text-xl text-white/80 leading-relaxed">
            Des solutions sur mesure pour les particuliers, les entreprises et les industriels, conçues pour optimiser votre confort et réduire vos factures.
          </p>
        </div>
      </section>

      <ServicesGrid />
      <CTASection />
    </>
  );
}
