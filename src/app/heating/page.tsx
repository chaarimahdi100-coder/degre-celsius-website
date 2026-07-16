import { Metadata } from "next";
import { Flame, Droplets, ThermometerSun, ShieldCheck } from "lucide-react";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { CTASection } from "@/components/home/CTASection";

export const metadata: Metadata = {
  title: "Chauffage & Plancher Chauffant",
  description: "Solutions de chauffage central et plancher chauffant par Degré Celsius pour un confort optimal en hiver.",
};

export default function HeatingPage() {
  return (
    <>
      <section className="relative pt-32 pb-20 md:pt-48 md:pb-32 bg-brand-navy overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center opacity-30 mix-blend-overlay"
          style={{ backgroundImage: 'url("https://images.unsplash.com/photo-1584622650111-993a426fbf0a?q=80&w=2070&auto=format&fit=crop")' }}
        ></div>
        <div className="absolute inset-0 bg-gradient-to-t from-brand-navy to-transparent"></div>
        
        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-red-500/20 text-red-400 text-sm font-semibold mb-6">
              <Flame className="h-4 w-4" /> Chauffage Central
            </div>
            <h1 className="text-4xl md:text-6xl font-bold font-heading text-white mb-6 leading-tight">
              Une chaleur douce, saine et économique
            </h1>
            <p className="text-xl text-white/80 mb-8 leading-relaxed">
              Découvrez l'expérience d'un confort absolu avec nos systèmes de chauffage central et de plancher chauffant dernière génération.
            </p>
            <Link 
              href="/quote" 
              className={cn(
                buttonVariants({ size: "lg" }),
                "bg-brand-orange hover:bg-brand-orange/90 text-white h-14 px-8 text-lg rounded-full inline-flex items-center justify-center font-medium"
              )}
            >
              Demander un devis
            </Link>
          </div>
        </div>
      </section>

      <section className="py-24 bg-background">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold font-heading mb-6">Le Plancher Chauffant : Le confort par excellence</h2>
              <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                Le plancher chauffant est aujourd'hui le système de chauffage le plus confortable et le plus esthétique. Intégré dans le sol, il diffuse une chaleur homogène dans toutes les pièces de la maison, sans radiateurs encombrants.
              </p>
              
              <ul className="space-y-4 mb-8">
                {[
                  "Chaleur douce et uniforme, fini les sols froids en hiver",
                  "Gain d'espace (aucun radiateur aux murs)",
                  "Économies d'énergie de 15% à l'usage",
                  "Air plus sain (pas de brassage de poussière)",
                  "Système réversible (rafraîchissant en été)"
                ].map((item, i) => (
                  <li key={i} className="flex items-center gap-3">
                    <ShieldCheck className="h-5 w-5 text-brand-orange flex-shrink-0" />
                    <span className="font-medium text-foreground">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="relative h-[500px] rounded-3xl overflow-hidden shadow-2xl">
              <img
                src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=2070&auto=format&fit=crop"
                alt="Installation de plancher chauffant"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 bg-brand-light dark:bg-muted">
        <div className="container mx-auto px-4 md:px-6 text-center max-w-4xl">
          <h2 className="text-3xl md:text-5xl font-bold font-heading mb-6">Chauffage Central Classique</h2>
          <p className="text-lg text-muted-foreground mb-16">
            Nous proposons également des installations de chauffage central par radiateurs avec chaudières murales ou au sol, alliant performance et fiabilité.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-left">
            <div className="bg-card p-8 rounded-2xl shadow-sm border border-border">
              <Droplets className="h-10 w-10 text-brand-orange mb-6" />
              <h3 className="text-2xl font-bold mb-4">Chaudières à condensation</h3>
              <p className="text-muted-foreground">La technologie la plus performante actuelle, récupérant la chaleur des fumées pour atteindre des rendements supérieurs à 100%.</p>
            </div>
            <div className="bg-card p-8 rounded-2xl shadow-sm border border-border">
              <ThermometerSun className="h-10 w-10 text-brand-orange mb-6" />
              <h3 className="text-2xl font-bold mb-4">Radiateurs Haute Performance</h3>
              <p className="text-muted-foreground">Un large choix de radiateurs (acier, fonte d'aluminium) esthétiques et efficaces pour une montée en température rapide.</p>
            </div>
          </div>
        </div>
      </section>

      <CTASection />
    </>
  );
}
