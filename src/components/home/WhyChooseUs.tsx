"use client";

import { motion } from "motion/react";
import { Shield, Zap, TrendingDown, Headphones } from "lucide-react";
import { fadeInUp, staggerContainer, staggerItem } from "@/lib/animations";

const features = [
  {
    icon: Shield,
    title: "Qualité Premium",
    description: "Nous sélectionnons exclusivement des équipements certifiés et des marques de renommée mondiale pour garantir la longévité de vos installations.",
  },
  {
    icon: Zap,
    title: "Installation Rapide",
    description: "Nos équipes techniques assurent une mise en service rapide et conforme aux normes de sécurité internationales les plus strictes.",
  },
  {
    icon: TrendingDown,
    title: "Économies Garanties",
    description: "Réduisez drastiquement vos factures énergétiques avec un retour sur investissement rapide et durable sur le long terme.",
  },
  {
    icon: Headphones,
    title: "Support Réactif",
    description: "Notre service client et nos équipes de maintenance sont à votre disposition 6j/7 pour toute assistance ou intervention technique.",
  },
];

export function WhyChooseUs() {
  return (
    <section className="py-24 bg-background relative overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute top-0 right-0 w-1/3 h-full bg-brand-orange/5 rounded-l-full blur-3xl -z-10 translate-x-1/2"></div>
      <div className="absolute bottom-0 left-0 w-1/4 h-1/2 bg-brand-navy/5 rounded-r-full blur-3xl -z-10 -translate-x-1/2"></div>

      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col lg:flex-row gap-16 items-center">
          
          {/* Text Content */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
            className="lg:w-1/3"
          >
            <motion.h2 variants={fadeInUp} className="text-3xl md:text-5xl font-bold font-heading mb-6 leading-tight">
              Pourquoi choisir <span className="text-brand-orange">Degré Celsius</span> ?
            </motion.h2>
            <motion.p variants={fadeInUp} className="text-lg text-muted-foreground mb-8">
              Parce que nous ne nous contentons pas de vendre des équipements. Nous concevons, installons et entretenons des solutions énergétiques complètes conçues pour durer.
            </motion.p>
            
            {/* Trust badge */}
            <motion.div variants={fadeInUp} className="flex items-center gap-4 p-4 rounded-xl border border-border bg-card shadow-sm">
              <div className="w-12 h-12 rounded-full bg-green-100 dark:bg-green-900/30 flex items-center justify-center flex-shrink-0">
                <Shield className="h-6 w-6 text-green-600 dark:text-green-400" />
              </div>
              <div>
                <h4 className="font-bold text-foreground">Garantie Totale</h4>
                <p className="text-sm text-muted-foreground">Pièces, main d'œuvre et rendement</p>
              </div>
            </motion.div>
          </motion.div>

          {/* Features Grid */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
            className="lg:w-2/3 grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8"
          >
            {features.map((feature, index) => (
              <motion.div
                key={index}
                variants={staggerItem}
                className="group p-8 rounded-2xl bg-card border border-border hover:border-brand-orange/30 transition-all duration-300 hover:shadow-lg"
              >
                <div className="w-14 h-14 rounded-xl bg-brand-light dark:bg-muted flex items-center justify-center mb-6 group-hover:bg-brand-orange group-hover:text-white transition-colors">
                  <feature.icon className="h-7 w-7 text-brand-navy dark:text-foreground group-hover:text-white transition-colors" />
                </div>
                <h3 className="text-xl font-bold font-heading mb-3">{feature.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{feature.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
