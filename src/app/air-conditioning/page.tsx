import { Metadata } from "next";
import { CheckCircle2, Wind, ThermometerSnowflake, Settings } from "lucide-react";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { CTASection } from "@/components/home/CTASection";

export const metadata: Metadata = {
  title: "Climatisation & HVAC",
  description: "Installation et maintenance de systèmes de climatisation performants (Split, Gainable, VRV) en Tunisie par Degré Celsius.",
};

export default function AirConditioningPage() {
  return (
    <>
      <section className="relative pt-32 pb-20 md:pt-48 md:pb-32 bg-brand-navy overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center opacity-30 mix-blend-overlay"
          style={{ backgroundImage: 'url("https://images.unsplash.com/photo-1581092921461-eab62e97a780?q=80&w=2070&auto=format&fit=crop")' }}
        ></div>
        <div className="absolute inset-0 bg-gradient-to-t from-brand-navy to-transparent"></div>
        
        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-cyan-500/20 text-cyan-400 text-sm font-semibold mb-6">
              <Wind className="h-4 w-4" /> HVAC & Climatisation
            </div>
            <h1 className="text-4xl md:text-6xl font-bold font-heading text-white mb-6 leading-tight">
              Le confort thermique absolu pour vos espaces
            </h1>
            <p className="text-xl text-white/80 mb-8 leading-relaxed">
              Des solutions de climatisation résidentielles et industrielles à la pointe de la technologie pour un refroidissement rapide, silencieux et économe en énergie.
            </p>
            <Link 
              href="/quote" 
              className={cn(
                buttonVariants({ size: "lg" }),
                "bg-brand-orange hover:bg-brand-orange/90 text-white h-14 px-8 text-lg rounded-full inline-flex items-center justify-center font-medium"
              )}
            >
              Obtenir un devis
            </Link>
          </div>
        </div>
      </section>

      <section className="py-24 bg-background">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="relative h-[500px] rounded-3xl overflow-hidden shadow-2xl">
              <img
                src="https://images.unsplash.com/photo-1558227691-41ea78d1f631?q=80&w=2000&auto=format&fit=crop"
                alt="Système de climatisation centralisée"
                className="w-full h-full object-cover"
              />
            </div>
            <div>
              <h2 className="text-3xl md:text-4xl font-bold font-heading mb-6">Nos Solutions de Climatisation</h2>
              <p className="text-lg text-muted-foreground mb-8">
                Que ce soit pour une chambre individuelle, une villa complète ou un complexe hôtelier, nous dimensionnons la solution parfaitement adaptée à vos besoins.
              </p>
              
              <div className="space-y-6">
                <div className="flex gap-4 p-6 rounded-2xl bg-card border border-border">
                  <div className="w-12 h-12 rounded-full bg-cyan-100 dark:bg-cyan-900/30 text-cyan-600 dark:text-cyan-400 flex items-center justify-center flex-shrink-0">
                    <ThermometerSnowflake className="h-6 w-6" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-2">Split et Multi-Split</h3>
                    <p className="text-muted-foreground">Solutions idéales pour les particuliers, combinant design discret, silence et contrôle précis de la température par pièce.</p>
                  </div>
                </div>
                
                <div className="flex gap-4 p-6 rounded-2xl bg-card border border-border">
                  <div className="w-12 h-12 rounded-full bg-brand-orange/10 text-brand-orange flex items-center justify-center flex-shrink-0">
                    <Wind className="h-6 w-6" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-2">Gainable (Centralisée)</h3>
                    <p className="text-muted-foreground">La climatisation invisible par excellence. Des grilles discrètes pour un confort réparti uniformément dans toute la maison.</p>
                  </div>
                </div>

                <div className="flex gap-4 p-6 rounded-2xl bg-card border border-border">
                  <div className="w-12 h-12 rounded-full bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 flex items-center justify-center flex-shrink-0">
                    <Settings className="h-6 w-6" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-2">Systèmes VRV / DRV</h3>
                    <p className="text-muted-foreground">La solution ultime pour le tertiaire et l'industriel. Gestion centralisée avec un rendement énergétique exceptionnel.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <CTASection />
    </>
  );
}
