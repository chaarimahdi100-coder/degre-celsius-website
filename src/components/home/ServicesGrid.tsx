"use client";

import { motion } from "motion/react";
import Link from "next/link";
import { ArrowRight, Sun, Wind, ThermometerSun, Fan, Wrench } from "lucide-react";
import { SERVICES } from "@/lib/constants";
import { fadeInUp, staggerContainer, staggerItem } from "@/lib/animations";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const iconMap = {
  Sun: Sun,
  Wind: Wind,
  ThermometerSun: ThermometerSun,
  Fan: Fan,
  Wrench: Wrench,
};

export function ServicesGrid() {
  return (
    <section className="py-24 bg-brand-light dark:bg-card">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.h2 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeInUp}
            className="text-3xl md:text-5xl font-bold font-heading mb-6"
          >
            Nos Domaines d'Expertise
          </motion.h2>
          <motion.p 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeInUp}
            className="text-lg text-muted-foreground"
          >
            Des solutions complètes et innovantes pour optimiser votre consommation énergétique et garantir un confort optimal, été comme hiver.
          </motion.p>
        </div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={staggerContainer}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {SERVICES.map((service, index) => {
            const Icon = iconMap[service.icon as keyof typeof iconMap] || Sun;
            return (
              <motion.div key={service.id} variants={staggerItem} className={index === 0 ? "lg:col-span-2 lg:row-span-2" : ""}>
                <Link href={service.href} className="block h-full group">
                  <Card className={`h-full transition-all duration-300 hover:shadow-xl hover:-translate-y-1 border-transparent hover:border-brand-orange/20 overflow-hidden ${index === 0 ? "bg-brand-navy text-white" : "bg-card text-card-foreground"}`}>
                    <CardHeader className={`${index === 0 ? "p-8 md:p-12" : "p-6 md:p-8"}`}>
                      <div className={`w-14 h-14 rounded-2xl flex items-center justify-center mb-6 transition-transform group-hover:scale-110 ${index === 0 ? "bg-white/10 text-brand-orange" : "bg-brand-orange/10 text-brand-orange"}`}>
                        <Icon className="h-7 w-7" />
                      </div>
                      <CardTitle className={`${index === 0 ? "text-3xl md:text-4xl" : "text-2xl"} font-heading mb-4`}>
                        {service.title}
                      </CardTitle>
                      <CardDescription className={`${index === 0 ? "text-white/80 text-lg" : "text-muted-foreground text-base"} leading-relaxed`}>
                        {service.description}
                      </CardDescription>
                    </CardHeader>
                    <CardContent className={`${index === 0 ? "px-8 md:px-12 pb-8 md:pb-12" : "px-6 md:px-8 pb-6 md:pb-8"}`}>
                      <div className={`inline-flex items-center font-medium transition-colors ${index === 0 ? "text-white group-hover:text-brand-orange" : "text-brand-orange group-hover:text-brand-navy dark:group-hover:text-white"}`}>
                        En savoir plus <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-2" />
                      </div>
                    </CardContent>
                  </Card>
                </Link>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
