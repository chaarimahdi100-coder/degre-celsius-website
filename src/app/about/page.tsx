import { Metadata } from "next";
import Image from "next/image";
import { CheckCircle2, Award, Users, Target } from "lucide-react";
import { COMPANY_INFO } from "@/lib/constants";
import { CTASection } from "@/components/home/CTASection";

export const metadata: Metadata = {
  title: "À Propos",
  description: "Découvrez l'histoire, la mission et les valeurs de Degré Celsius, votre expert en transition énergétique en Tunisie.",
};

const values = [
  {
    icon: Award,
    title: "Excellence",
    description: "Nous visons la perfection dans chaque installation, en utilisant les meilleurs équipements du marché.",
  },
  {
    icon: Users,
    title: "Engagement Client",
    description: "Votre satisfaction est notre priorité. Nous vous accompagnons de la conception à la maintenance.",
  },
  {
    icon: Target,
    title: "Innovation",
    description: "Nous restons à la pointe des technologies vertes pour vous offrir les solutions les plus performantes.",
  },
];

export default function AboutPage() {
  return (
    <>
      {/* Page Header */}
      <section className="pt-32 pb-16 md:pt-40 md:pb-20 bg-brand-navy text-white">
        <div className="container mx-auto px-4 md:px-6 text-center max-w-3xl">
          <h1 className="text-4xl md:text-6xl font-bold font-heading mb-6">Notre Histoire</h1>
          <p className="text-xl text-white/80 leading-relaxed">
            Depuis notre création, {COMPANY_INFO.name} s'engage à démocratiser l'accès aux énergies propres et au confort thermique de haute qualité en Tunisie.
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-20">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-24">
            <div className="relative h-[500px] rounded-2xl overflow-hidden shadow-2xl">
              <img
                src="https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=2070&auto=format&fit=crop"
                alt="L'équipe Degré Celsius en réunion"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="flex flex-col gap-6">
              <h2 className="text-3xl md:text-4xl font-bold font-heading">Une vision d'avenir pour l'énergie</h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Fondée par une équipe d'ingénieurs passionnés, <strong>Degré Celsius</strong> est née d'une conviction profonde : la transition énergétique est non seulement nécessaire, mais elle doit être accessible et rentable pour tous.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Basés à Sfax, nous intervenons sur l'ensemble du territoire tunisien. Notre expertise couvre trois pôles majeurs : le photovoltaïque, la climatisation et le chauffage central.
              </p>
              <ul className="flex flex-col gap-3 mt-4">
                {["Ingénieurs qualifiés et certifiés", "Partenariats avec des leaders mondiaux", "Service client réactif et personnalisé", "Garantie décennale sur nos installations"].map((item, i) => (
                  <li key={i} className="flex items-center gap-3">
                    <CheckCircle2 className="h-5 w-5 text-brand-orange" />
                    <span className="font-medium">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Values */}
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold font-heading mb-6">Nos Valeurs Fondamentales</h2>
            <p className="text-lg text-muted-foreground">Ce qui nous guide au quotidien dans notre mission.</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-24">
            {values.map((value, i) => (
              <div key={i} className="p-8 bg-card rounded-2xl border border-border text-center hover:border-brand-orange/30 transition-colors">
                <div className="w-16 h-16 rounded-full bg-brand-orange/10 text-brand-orange mx-auto flex items-center justify-center mb-6">
                  <value.icon className="h-8 w-8" />
                </div>
                <h3 className="text-2xl font-bold mb-4">{value.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTASection />
    </>
  );
}
