"use client";

import { motion } from "motion/react";
import Link from "next/link";
import { ArrowRight, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import { fadeInUp, staggerContainer } from "@/lib/animations";

import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export function Hero() {
  const scrollToNextSection = () => {
    window.scrollTo({
      top: window.innerHeight,
      behavior: "smooth",
    });
  };

  return (
    <section className="relative h-screen min-h-[600px] w-full overflow-hidden">
      {/* Background with overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: 'url("https://images.unsplash.com/photo-1509391366360-2e959784a276?q=80&w=2072&auto=format&fit=crop")',
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-brand-navy/90 via-brand-navy/70 to-transparent"></div>
      </div>

      {/* Content */}
      <div className="relative h-full container mx-auto px-4 md:px-6 flex flex-col justify-center">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate="visible"
          className="max-w-3xl flex flex-col gap-6"
        >
          <motion.div variants={fadeInUp} className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/10 border border-white/20 text-white/90 text-sm font-medium w-fit backdrop-blur-sm">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-brand-orange opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-brand-orange"></span>
            </span>
            Leader en Énergie Renouvelable en Tunisie
          </motion.div>

          <motion.h1 variants={fadeInUp} className="text-5xl md:text-7xl font-bold font-heading text-white leading-[1.1] tracking-tight">
            L'énergie solaire au service de votre <span className="text-brand-orange">confort</span>.
          </motion.h1>

          <motion.p variants={fadeInUp} className="text-lg md:text-xl text-white/80 max-w-2xl leading-relaxed">
            Des solutions innovantes en photovoltaïque, climatisation et chauffage pour les particuliers et les professionnels. Réduisez vos factures tout en préservant l'environnement.
          </motion.p>

          <motion.div variants={fadeInUp} className="flex flex-col sm:flex-row gap-4 mt-4">
            <Link 
              href="/quote" 
              className={cn(
                buttonVariants({ size: "lg" }),
                "bg-brand-orange hover:bg-brand-orange/90 text-white h-14 px-8 text-lg rounded-full inline-flex items-center justify-center font-medium"
              )}
            >
              Demander un Devis Gratuit
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
            <Link 
              href="/services" 
              className={cn(
                buttonVariants({ variant: "outline", size: "lg" }),
                "h-14 px-8 text-lg rounded-full bg-white/10 text-white border-white/20 hover:bg-white/20 hover:text-white backdrop-blur-sm inline-flex items-center justify-center font-medium"
              )}
            >
              Découvrir nos services
            </Link>
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.button
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 1 }}
        onClick={scrollToNextSection}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 text-white/70 hover:text-white transition-colors flex flex-col items-center gap-2 cursor-pointer"
      >
        <span className="text-sm font-medium tracking-widest uppercase">Découvrir</span>
        <ChevronDown className="h-6 w-6 animate-bounce" />
      </motion.button>
    </section>
  );
}
