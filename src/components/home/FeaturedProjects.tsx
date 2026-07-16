"use client";

import { useState } from "react";
import { motion } from "motion/react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { fadeInUp, staggerContainer, staggerItem } from "@/lib/animations";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const projects = [
  {
    id: 1,
    title: "Installation Solaire Industrielle",
    category: "Photovoltaïque",
    client: "Usine Textile Sfax",
    image: "https://images.unsplash.com/photo-1592833159155-c62df1b65634?q=80&w=2069&auto=format&fit=crop",
  },
  {
    id: 2,
    title: "Climatisation Centrale VRV",
    category: "Climatisation",
    client: "Hôtel Les Oliviers",
    image: "https://images.unsplash.com/photo-1558227691-41ea78d1f631?q=80&w=2000&auto=format&fit=crop",
  },
  {
    id: 3,
    title: "Chauffage par le Sol",
    category: "Chauffage",
    client: "Villa Privée Tunis",
    image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=2070&auto=format&fit=crop",
  },
];

export function FeaturedProjects() {
  const [hoveredProject, setHoveredProject] = useState<number | null>(null);

  return (
    <section className="py-24 bg-brand-light dark:bg-background">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeInUp}
            className="max-w-2xl"
          >
            <h2 className="text-3xl md:text-5xl font-bold font-heading mb-6">
              Nos Réalisations
            </h2>
            <p className="text-lg text-muted-foreground">
              Découvrez une sélection de nos projets les plus récents. De l'installation résidentielle aux grands complexes industriels, nous apportons le même niveau d'exigence à chaque réalisation.
            </p>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
          >
            <Link 
              href="/projects" 
              className={cn(
                buttonVariants({ variant: "outline" }),
                "border-brand-navy text-brand-navy hover:bg-brand-navy hover:text-white dark:border-white dark:text-white dark:hover:bg-white dark:hover:text-brand-navy inline-flex items-center justify-center font-medium"
              )}
            >
              Voir tous les projets <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </motion.div>
        </div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={staggerContainer}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {projects.map((project) => (
            <motion.div key={project.id} variants={staggerItem} className="group relative rounded-2xl overflow-hidden h-[450px]">
              {/* Background Image */}
              <div 
                className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110"
                style={{ backgroundImage: `url(${project.image})` }}
              ></div>
              
              {/* Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-brand-navy/90 via-brand-navy/40 to-transparent opacity-80 transition-opacity duration-300 group-hover:opacity-100"></div>
              
              {/* Content */}
              <div className="absolute inset-0 p-8 flex flex-col justify-end">
                <div className="mb-4">
                  <span className="inline-block px-3 py-1 bg-brand-orange text-white text-xs font-bold uppercase tracking-wider rounded-full mb-3">
                    {project.category}
                  </span>
                  <h3 className="text-2xl font-bold font-heading text-white mb-1 group-hover:-translate-y-2 transition-transform duration-300">
                    {project.title}
                  </h3>
                  <p className="text-white/70 font-medium translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
                    Client: {project.client}
                  </p>
                </div>
                
                {/* Arrow Button */}
                <Link href={`/projects#${project.id}`} className="absolute bottom-8 right-8 w-12 h-12 rounded-full bg-white text-brand-navy flex items-center justify-center translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300 hover:bg-brand-orange hover:text-white">
                  <ArrowRight className="h-5 w-5" />
                </Link>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
