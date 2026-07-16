"use client";

import { motion } from "motion/react";

const brands = [
  "CanadianSolar",
  "Jinko Solar",
  "Daikin",
  "LG",
  "Carrier",
  "Gree",
  "Huawei",
];

export function PartnerBrands() {
  return (
    <section className="py-16 border-y border-border bg-brand-light/50 dark:bg-card/50 overflow-hidden">
      <div className="container mx-auto px-4 md:px-6">
        <p className="text-center text-sm font-semibold uppercase tracking-wider text-muted-foreground mb-10">
          Nos Partenaires Technologiques de Confiance
        </p>
        
        {/* Infinite scrolling ticker */}
        <div className="relative flex overflow-x-hidden group">
          <div className="animate-marquee flex items-center gap-16 md:gap-32 whitespace-nowrap">
            {[...brands, ...brands].map((brand, index) => (
              <div 
                key={index} 
                className="flex items-center justify-center opacity-50 grayscale hover:opacity-100 hover:grayscale-0 transition-all duration-300"
              >
                {/* For real implementation, replace text with actual brand logos (img/svg) */}
                <span className="text-2xl md:text-3xl font-bold font-heading text-brand-navy dark:text-foreground">
                  {brand}
                </span>
              </div>
            ))}
          </div>
          
          <div className="absolute top-0 animate-marquee2 flex items-center gap-16 md:gap-32 whitespace-nowrap">
            {[...brands, ...brands].map((brand, index) => (
              <div 
                key={index} 
                className="flex items-center justify-center opacity-50 grayscale hover:opacity-100 hover:grayscale-0 transition-all duration-300"
              >
                <span className="text-2xl md:text-3xl font-bold font-heading text-brand-navy dark:text-foreground">
                  {brand}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
