"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { ChevronLeft, ChevronRight, Quote, Star } from "lucide-react";
import { Button } from "@/components/ui/button";

const testimonials = [
  {
    id: 1,
    name: "Ahmed Ben Salah",
    role: "Directeur Usine, Sfax",
    content: "L'installation photovoltaïque réalisée par Degré Celsius a dépassé nos attentes. Professionnalisme, respect des délais et un suivi technique irréprochable. Notre facture énergétique a baissé de 60%.",
    rating: 5,
  },
  {
    id: 2,
    name: "Sonia Trabelsi",
    role: "Propriétaire Villa, Tunis",
    content: "Nous avons opté pour un plancher chauffant et une climatisation centrale. Le confort est exceptionnel et l'équipe a été très à l'écoute de nos besoins spécifiques. Je recommande vivement !",
    rating: 5,
  },
  {
    id: 3,
    name: "Karim Karray",
    role: "Gérant d'Hôtel, Djerba",
    content: "Un partenaire fiable pour notre projet hôtelier. Le système VRV installé est silencieux et très performant. Le service de maintenance annuel nous apporte une vraie tranquillité d'esprit.",
    rating: 5,
  },
];

export function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const next = () => {
    setCurrentIndex((prevIndex) => (prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1));
  };

  const prev = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1));
  };

  return (
    <section className="py-24 bg-background relative overflow-hidden">
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-brand-orange font-semibold tracking-wider uppercase text-sm">Témoignages</span>
          <h2 className="text-3xl md:text-5xl font-bold font-heading mt-2 mb-6">
            Ce que disent nos clients
          </h2>
        </div>

        <div className="max-w-4xl mx-auto relative">
          {/* Large Quote Icon */}
          <Quote className="absolute -top-10 -left-10 md:-left-20 h-32 w-32 text-brand-light dark:text-muted/20 -z-10 rotate-180" />
          
          <div className="bg-card border border-border rounded-3xl p-8 md:p-12 shadow-sm min-h-[300px] flex flex-col justify-center relative overflow-hidden">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentIndex}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.3 }}
                className="flex flex-col items-center text-center"
              >
                <div className="flex items-center gap-1 mb-6 text-brand-orange">
                  {[...Array(testimonials[currentIndex].rating)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 fill-current" />
                  ))}
                </div>
                
                <p className="text-xl md:text-2xl font-medium leading-relaxed mb-8 italic">
                  "{testimonials[currentIndex].content}"
                </p>
                
                <div>
                  <h4 className="text-lg font-bold">{testimonials[currentIndex].name}</h4>
                  <p className="text-muted-foreground">{testimonials[currentIndex].role}</p>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Navigation Controls */}
          <div className="flex justify-center gap-4 mt-8">
            <Button
              variant="outline"
              size="icon"
              onClick={prev}
              className="rounded-full h-12 w-12 hover:bg-brand-orange hover:text-white hover:border-brand-orange transition-colors"
            >
              <ChevronLeft className="h-6 w-6" />
            </Button>
            <div className="flex items-center gap-2 mx-4">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentIndex(index)}
                  className={`w-2.5 h-2.5 rounded-full transition-all ${
                    index === currentIndex ? "bg-brand-orange w-8" : "bg-border hover:bg-brand-orange/50"
                  }`}
                  aria-label={`Aller au témoignage ${index + 1}`}
                />
              ))}
            </div>
            <Button
              variant="outline"
              size="icon"
              onClick={next}
              className="rounded-full h-12 w-12 hover:bg-brand-orange hover:text-white hover:border-brand-orange transition-colors"
            >
              <ChevronRight className="h-6 w-6" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
