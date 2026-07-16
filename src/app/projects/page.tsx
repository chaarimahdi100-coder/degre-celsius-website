"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { ArrowRight, Filter } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Project } from "@/types";

const allProjects: Project[] = [
  {
    id: "1",
    title: "Centrale Solaire Industrielle",
    category: "Photovoltaïque",
    image: "https://images.unsplash.com/photo-1592833159155-c62df1b65634?q=80&w=2069&auto=format&fit=crop",
    description: "Installation de 500kWc pour une usine textile à Sfax. Amortissement prévu sur 3.5 ans.",
  },
  {
    id: "2",
    title: "Climatisation VRV Hôtel 5 Étoiles",
    category: "Climatisation",
    image: "https://images.unsplash.com/photo-1558227691-41ea78d1f631?q=80&w=2000&auto=format&fit=crop",
    description: "Système de climatisation centralisée pour un hôtel de 200 chambres à Hammamet.",
  },
  {
    id: "3",
    title: "Villa Haute Couture",
    category: "Chauffage",
    image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=2070&auto=format&fit=crop",
    description: "Plancher chauffant intégral avec pompe à chaleur air/eau pour une villa à Gammarth.",
  },
  {
    id: "4",
    title: "Ferme Agricole Solaire",
    category: "Photovoltaïque",
    image: "https://images.unsplash.com/photo-1509391366360-2e959784a276?q=80&w=2072&auto=format&fit=crop",
    description: "Pompage solaire de 30kWc pour l'irrigation d'une oliveraie à Sidi Bouzid.",
  },
  {
    id: "5",
    title: "Siège Social Banque",
    category: "Climatisation",
    image: "https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=2069&auto=format&fit=crop",
    description: "Climatisation par système gainable pour les bureaux administratifs.",
  },
  {
    id: "6",
    title: "Résidence Médicalisée",
    category: "Chauffage",
    image: "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?q=80&w=2070&auto=format&fit=crop",
    description: "Chauffage central par chaudière à condensation et radiateurs haute performance.",
  }
];

const categories = ["Tous", "Photovoltaïque", "Climatisation", "Chauffage"];

export default function ProjectsPage() {
  const [activeCategory, setActiveCategory] = useState("Tous");

  const filteredProjects = activeCategory === "Tous" 
    ? allProjects 
    : allProjects.filter(p => p.category === activeCategory);

  return (
    <div className="min-h-screen bg-background pt-32 pb-24 md:pt-40">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h1 className="text-4xl md:text-6xl font-bold font-heading mb-6">Nos Réalisations</h1>
          <p className="text-lg text-muted-foreground">
            Explorez notre portfolio de projets réussis. De l'installation résidentielle aux grands complexes industriels, nous apportons notre expertise à chaque étape.
          </p>
        </div>

        {/* Filter */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-12">
          {categories.map((category) => (
            <Button
              key={category}
              variant={activeCategory === category ? "default" : "outline"}
              className={activeCategory === category ? "bg-brand-orange hover:bg-brand-orange/90 text-white rounded-full" : "rounded-full"}
              onClick={() => setActiveCategory(category)}
            >
              {category}
            </Button>
          ))}
        </div>

        {/* Grid */}
        <motion.div 
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project) => (
              <motion.div
                key={project.id}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.3 }}
                className="group relative rounded-2xl overflow-hidden h-[400px] shadow-sm hover:shadow-xl transition-shadow"
              >
                {/* Background Image */}
                <div 
                  className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110"
                  style={{ backgroundImage: `url(${project.image})` }}
                ></div>
                
                {/* Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-brand-navy via-brand-navy/60 to-transparent opacity-80 group-hover:opacity-90 transition-opacity"></div>
                
                {/* Content */}
                <div className="absolute inset-0 p-8 flex flex-col justify-end">
                  <span className="inline-block px-3 py-1 bg-white/20 backdrop-blur-sm border border-white/30 text-white text-xs font-bold uppercase tracking-wider rounded-full mb-3 w-fit">
                    {project.category}
                  </span>
                  <h3 className="text-2xl font-bold font-heading text-white mb-2">
                    {project.title}
                  </h3>
                  <p className="text-white/80 line-clamp-2">
                    {project.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </div>
  );
}
