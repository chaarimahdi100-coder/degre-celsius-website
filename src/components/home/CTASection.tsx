"use client";

import { motion } from "motion/react";
import Link from "next/link";
import { ArrowRight, FileText } from "lucide-react";
import { Button } from "@/components/ui/button";

import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export function CTASection() {
  return (
    <section className="py-24 relative overflow-hidden">
      {/* Background with parallax effect */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-fixed"
        style={{ backgroundImage: 'url("https://images.unsplash.com/photo-1497435334941-8c899ee9e8e9?q=80&w=2070&auto=format&fit=crop")' }}
      >
        <div className="absolute inset-0 bg-brand-navy/90 mix-blend-multiply"></div>
      </div>

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="max-w-4xl mx-auto text-center flex flex-col items-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="w-20 h-20 rounded-2xl bg-brand-orange/20 flex items-center justify-center mb-8 backdrop-blur-sm"
          >
            <FileText className="h-10 w-10 text-brand-orange" />
          </motion.div>
          
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1, duration: 0.5 }}
            className="text-4xl md:text-6xl font-bold font-heading text-white mb-6 leading-tight"
          >
            Prêt à transformer votre consommation d'énergie ?
          </motion.h2>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.5 }}
            className="text-xl text-white/80 mb-10 max-w-2xl"
          >
            Obtenez une étude personnalisée et un devis gratuit pour votre projet. Nos experts vous répondent sous 24h.
          </motion.p>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3, duration: 0.5 }}
          >
            <Link 
              href="/quote" 
              className={cn(
                buttonVariants({ size: "lg" }),
                "h-16 px-10 text-lg rounded-full bg-brand-orange hover:bg-brand-orange/90 text-white shadow-xl shadow-brand-orange/20 hover:scale-105 transition-transform inline-flex items-center justify-center font-medium"
              )}
            >
              Demander un devis maintenant <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
