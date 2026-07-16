import { Metadata } from "next";
import { CheckCircle2, Sun, BatteryCharging, Leaf, LineChart } from "lucide-react";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { CTASection } from "@/components/home/CTASection";

export const metadata: Metadata = {
  title: "Installation Photovoltaïque",
  description: "Solutions solaires photovoltaïques par Degré Celsius. Réduisez votre facture d'électricité jusqu'à 80% en Tunisie.",
};

const benefits = [
  {
    icon: LineChart,
    title: "Économies Immédiates",
    description: "Réduisez votre facture STEG jusqu'à 80% dès le premier mois de mise en service.",
  },
  {
    icon: Leaf,
    title: "Énergie Verte",
    description: "Participez activement à la transition écologique en produisant une énergie 100% propre.",
  },
  {
    icon: BatteryCharging,
    title: "Autonomie Énergétique",
    description: "Protégez-vous contre les hausses futures des tarifs de l'électricité.",
  },
];

export default function PhotovoltaicPage() {
  return (
    <>
      <section className="relative pt-32 pb-20 md:pt-48 md:pb-32 bg-brand-navy overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center opacity-40 mix-blend-overlay"
          style={{ backgroundImage: 'url("https://images.unsplash.com/photo-1509391366360-2e959784a276?q=80&w=2072&auto=format&fit=crop")' }}
        ></div>
        <div className="absolute inset-0 bg-gradient-to-t from-brand-navy to-transparent"></div>
        
        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-brand-orange/20 text-brand-orange text-sm font-semibold mb-6">
              <Sun className="h-4 w-4" /> Énergie Solaire
            </div>
            <h1 className="text-4xl md:text-6xl font-bold font-heading text-white mb-6 leading-tight">
              L'indépendance énergétique à portée de main
            </h1>
            <p className="text-xl text-white/80 mb-8 leading-relaxed">
              Des installations photovoltaïques clés en main pour les particuliers, industriels et agriculteurs en Tunisie. Un investissement rentable, garanti et durable.
            </p>
            <Link 
              href="/quote" 
              className={cn(
                buttonVariants({ size: "lg" }),
                "bg-brand-orange hover:bg-brand-orange/90 text-white h-14 px-8 text-lg rounded-full inline-flex items-center justify-center font-medium"
              )}
            >
              Demander une étude gratuite
            </Link>
          </div>
        </div>
      </section>

      <section className="py-24 bg-background">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-5xl font-bold font-heading mb-6">Pourquoi passer au solaire ?</h2>
            <p className="text-lg text-muted-foreground">La Tunisie bénéficie d'un des meilleurs taux d'ensoleillement au monde. Exploiter cette ressource gratuite est aujourd'hui une évidence économique.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {benefits.map((benefit, i) => (
              <div key={i} className="p-8 rounded-2xl bg-card border border-border shadow-sm hover:border-brand-orange/50 transition-colors">
                <div className="w-14 h-14 rounded-full bg-brand-orange/10 text-brand-orange flex items-center justify-center mb-6">
                  <benefit.icon className="h-7 w-7" />
                </div>
                <h3 className="text-2xl font-bold mb-4">{benefit.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 bg-brand-light dark:bg-muted">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="order-2 lg:order-1">
              <h2 className="text-3xl md:text-4xl font-bold font-heading mb-6">Notre Processus d'Installation</h2>
              <div className="space-y-8">
                {[
                  { step: "01", title: "Étude et Dimensionnement", desc: "Analyse de votre consommation et conception d'un système adapté sur mesure." },
                  { step: "02", title: "Démarches Administratives", desc: "Prise en charge totale des dossiers auprès de la STEG et de l'ANME." },
                  { step: "03", title: "Installation et Mise en service", desc: "Pose des panneaux, onduleurs, et tests par nos équipes d'ingénieurs qualifiés." },
                  { step: "04", title: "Suivi et Maintenance", desc: "Supervision à distance de votre production et entretien régulier." }
                ].map((item, i) => (
                  <div key={i} className="flex gap-4">
                    <div className="text-brand-orange font-bold font-heading text-xl">{item.step}.</div>
                    <div>
                      <h4 className="font-bold text-xl mb-2">{item.title}</h4>
                      <p className="text-muted-foreground">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="order-1 lg:order-2 relative h-[600px] rounded-3xl overflow-hidden shadow-2xl">
              <img
                src="https://images.unsplash.com/photo-1592833159155-c62df1b65634?q=80&w=2069&auto=format&fit=crop"
                alt="Installation de panneaux solaires industriels"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      <CTASection />
    </>
  );
}
