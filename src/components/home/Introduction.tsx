"use client";

import { motion } from "motion/react";
import Image from "next/image";
import { CheckCircle2 } from "lucide-react";
import { fadeInUp, staggerContainer, staggerItem } from "@/lib/animations";
import { COMPANY_INFO } from "@/lib/constants";

const benefits = [
  "Expertise technique reconnue",
  "Solutions sur mesure adaptées",
  "Équipements de haute qualité",
  "Service après-vente réactif",
];

export function Introduction() {
  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Text Content */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
            className="flex flex-col gap-6"
          >
            <motion.div variants={fadeInUp} className="inline-block px-3 py-1 bg-brand-orange/10 text-brand-orange rounded-full text-sm font-semibold w-fit">
              À Propos de Nous
            </motion.div>
            
            <motion.h2 variants={fadeInUp} className="text-3xl md:text-5xl font-bold font-heading leading-tight">
              L'excellence énergétique, <br />
              notre engagement quotidien.
            </motion.h2>
            
            <motion.p variants={fadeInUp} className="text-muted-foreground text-lg leading-relaxed">
              Basée à Sfax, <strong>{COMPANY_INFO.name}</strong> s'est imposée comme un acteur majeur dans la transition énergétique en Tunisie. Nous accompagnons nos clients dans leurs projets de systèmes solaires photovoltaïques, de climatisation et de chauffage central.
            </motion.p>
            
            <motion.p variants={fadeInUp} className="text-muted-foreground text-lg leading-relaxed">
              Notre équipe d'ingénieurs et de techniciens qualifiés met tout en œuvre pour vous offrir des installations performantes, esthétiques et durables, réduisant considérablement vos coûts énergétiques.
            </motion.p>

            <motion.ul variants={staggerContainer} className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-4">
              {benefits.map((benefit, index) => (
                <motion.li key={index} variants={staggerItem} className="flex items-center gap-3">
                  <CheckCircle2 className="h-6 w-6 text-brand-orange flex-shrink-0" />
                  <span className="font-medium text-foreground/90">{benefit}</span>
                </motion.li>
              ))}
            </motion.ul>
          </motion.div>

          {/* Image Grid */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="relative h-full min-h-[500px]"
          >
            <div className="absolute top-0 right-0 w-4/5 h-4/5 rounded-2xl overflow-hidden shadow-2xl">
              <img
                src="https://images.unsplash.com/photo-1613665813446-82a78c468a1d?q=80&w=2058&auto=format&fit=crop"
                alt="Installation de panneaux solaires par l'équipe Degré Celsius"
                className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
              />
            </div>
            <div className="absolute bottom-0 left-0 w-3/5 h-2/3 rounded-2xl overflow-hidden shadow-2xl border-8 border-background">
              <img
                src="https://images.unsplash.com/photo-1545259733-41a4e15779ec?q=80&w=2071&auto=format&fit=crop"
                alt="Expertise technique et maintenance"
                className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
              />
            </div>
            {/* Floating badge */}
            <div className="absolute top-1/2 left-0 -translate-x-1/2 -translate-y-1/2 bg-white dark:bg-card p-6 rounded-2xl shadow-xl flex flex-col items-center gap-2 border border-border">
              <span className="text-4xl font-bold text-brand-orange">10+</span>
              <span className="text-sm font-semibold text-center text-muted-foreground uppercase tracking-wider">Années<br/>d'Expérience</span>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
