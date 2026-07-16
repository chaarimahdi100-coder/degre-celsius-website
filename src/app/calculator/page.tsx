import { Metadata } from "next";
import { SolarCalculator } from "@/components/solar/SolarCalculator";

export const metadata: Metadata = {
  title: "Simulateur Solaire",
  description:
    "Calculez vos économies solaires en Tunisie. Estimez la taille de votre installation photovoltaïque, vos économies et votre retour sur investissement.",
};

export default function CalculatorPage() {
  return (
    <>
      {/* Page Header */}
      <section className="pt-32 pb-8 md:pt-40 md:pb-12 bg-brand-navy text-white">
        <div className="container mx-auto px-4 md:px-6 text-center max-w-3xl">
          <h1 className="text-4xl md:text-6xl font-bold font-heading mb-6">
            Simulateur Photovoltaïque
          </h1>
          <p className="text-xl text-white/80 leading-relaxed">
            Découvrez en quelques secondes le potentiel solaire de votre
            propriété et les économies que vous pourriez réaliser.
          </p>
        </div>
      </section>

      <SolarCalculator />
    </>
  );
}
