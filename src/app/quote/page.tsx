"use client";

import React, { useState, useEffect, Suspense } from "react";
import { useSearchParams } from "next/navigation";
import { motion, AnimatePresence } from "motion/react";
import { CheckCircle2, ArrowRight } from "lucide-react";
import { Button, buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { CITY_SOLAR_DATA } from "@/lib/solar-calculator";

function QuoteForm() {
  const searchParams = useSearchParams();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  // Form states to support pre-filling
  const [city, setCity] = useState("");
  const [service, setService] = useState("photovoltaic");
  const [monthlyBillSelect, setMonthlyBillSelect] = useState("");
  const [message, setMessage] = useState("");

  useEffect(() => {
    const serviceParam = searchParams.get("service");
    const billParam = searchParams.get("bill");
    const cityParam = searchParams.get("city");
    const propertyParam = searchParams.get("property");
    const roofParam = searchParams.get("roof");
    const systemParam = searchParams.get("system");
    const panelsParam = searchParams.get("panels");

    if (serviceParam) setService(serviceParam);
    if (cityParam) {
      // Capitalize or match city label
      const cityData = CITY_SOLAR_DATA[cityParam.toLowerCase()];
      setCity(cityData ? cityData.label : cityParam);
    }

    // Determine select bracket for bill
    if (billParam) {
      const billVal = Number(billParam);
      if (billVal < 100) setMonthlyBillSelect("under_100");
      else if (billVal <= 300) setMonthlyBillSelect("100_300");
      else if (billVal <= 500) setMonthlyBillSelect("300_500");
      else setMonthlyBillSelect("over_500");
    }

    // Generate pre-filled message from calculator
    if (systemParam && panelsParam) {
      const propLabel = propertyParam === "house" ? "Maison" : propertyParam === "apartment" ? "Appartement" : "Entreprise";
      const roofLabel = roofParam === "flat" ? "plat (terrasse)" : "incliné";
      setMessage(
        `Simulation de Devis Photovoltaïque:\n` +
        `- Puissance estimée: ${systemParam} kWc\n` +
        `- Nombre de panneaux: ${panelsParam} panneaux\n` +
        `- Facture mensuelle estimée: ${billParam} TND\n` +
        `- Type de propriété: ${propLabel}\n` +
        `- Type de toit: ${roofLabel}\n` +
        `Je souhaite obtenir une étude technique complète et confirmer ces chiffres avec un ingénieur.`
      );
    }
  }, [searchParams]);

  const handleServiceChange = (value: string | null) => {
    setService(value ?? "photovoltaic");
  };

  const handleMonthlyBillChange = (value: string | null) => {
    setMonthlyBillSelect(value ?? "");
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    const formData = new FormData(e.currentTarget);
    const data = {
      fullName: formData.get("fullName"),
      phone: formData.get("phone"),
      email: formData.get("email"),
      city: formData.get("city"),
      service: formData.get("service"),
      monthlyBill: formData.get("monthlyBill"),
      message: formData.get("message"),
    };

    try {
      const response = await fetch("/api/quote", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      if (response.ok) {
        setIsSuccess(true);
      } else {
        console.error("Erreur lors de l'envoi");
        alert("Une erreur est survenue. Veuillez réessayer.");
      }
    } catch (error) {
      console.error(error);
      alert("Une erreur est survenue. Veuillez réessayer.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <AnimatePresence mode="wait">
      {isSuccess ? (
        <motion.div 
          key="success"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          className="flex flex-col items-center justify-center py-12 text-center"
        >
          <div className="w-24 h-24 bg-green-100 dark:bg-green-900/30 text-green-600 dark:text-green-400 rounded-full flex items-center justify-center mb-6">
            <CheckCircle2 className="h-12 w-12" />
          </div>
          <h2 className="text-3xl font-bold mb-4">Demande Envoyée !</h2>
          <p className="text-xl text-muted-foreground mb-8 max-w-lg">
            Merci de votre confiance. Notre équipe analysera votre demande et vous contactera sous 24h.
          </p>
          <a 
            href="/" 
            className={cn(
              buttonVariants({ variant: "default" }),
              "bg-brand-orange hover:bg-brand-orange/90 text-white rounded-full px-6 h-10 inline-flex items-center justify-center font-medium"
            )}
          >
            Retour à l'accueil
          </a>
        </motion.div>
      ) : (
        <motion.form 
          key="form"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onSubmit={handleSubmit} 
          className="space-y-8"
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Coordonnées */}
            <div className="space-y-6">
              <h3 className="text-xl font-bold font-heading border-b border-border pb-2">Vos Coordonnées</h3>
              
              <div className="space-y-2">
                <label htmlFor="fullName" className="text-sm font-medium">Nom complet *</label>
                <Input id="fullName" name="fullName" required placeholder="Votre nom complet" className="bg-background h-12" />
              </div>
              
              <div className="space-y-2">
                <label htmlFor="phone" className="text-sm font-medium">Téléphone *</label>
                <Input id="phone" name="phone" type="tel" required placeholder="+216 00 000 000" className="bg-background h-12" />
              </div>
              
              <div className="space-y-2">
                <label htmlFor="email" className="text-sm font-medium">Email *</label>
                <Input id="email" name="email" type="email" required placeholder="votre@email.com" className="bg-background h-12" />
              </div>
              
              <div className="space-y-2">
                <label htmlFor="city" className="text-sm font-medium">Ville *</label>
                <Input 
                  id="city" 
                  name="city" 
                  required 
                  value={city}
                  onChange={(e) => setCity(e.target.value)}
                  placeholder="Ex: Sfax, Tunis..." 
                  className="bg-background h-12" 
                />
              </div>
            </div>

            {/* Projet */}
            <div className="space-y-6">
              <h3 className="text-xl font-bold font-heading border-b border-border pb-2">Votre Projet</h3>
              
              <div className="space-y-2">
                <label htmlFor="service" className="text-sm font-medium">Service souhaité *</label>
                <Select value={service} onValueChange={handleServiceChange} name="service" required>
                  <SelectTrigger className="bg-background h-12">
                    <SelectValue placeholder="Sélectionnez un service" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="photovoltaic">Photovoltaïque / Solaire</SelectItem>
                    <SelectItem value="air_conditioning">Climatisation HVAC</SelectItem>
                    <SelectItem value="heating">Chauffage / Plancher Chauffant</SelectItem>
                    <SelectItem value="maintenance">Maintenance</SelectItem>
                    <SelectItem value="other">Autre / Multiple</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              
              <div className="space-y-2">
                <label htmlFor="monthlyBill" className="text-sm font-medium">Facture d&apos;électricité mensuelle (Moyenne)</label>
                <Select value={monthlyBillSelect} onValueChange={handleMonthlyBillChange} name="monthlyBill">
                  <SelectTrigger className="bg-background h-12">
                    <SelectValue placeholder="Sélectionnez une tranche" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="under_100">Moins de 100 TND</SelectItem>
                    <SelectItem value="100_300">100 - 300 TND</SelectItem>
                    <SelectItem value="300_500">300 - 500 TND</SelectItem>
                    <SelectItem value="over_500">Plus de 500 TND</SelectItem>
                    <SelectItem value="industrial">Tarif Industriel / Basse/Moyenne Tension</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              
              <div className="space-y-2">
                <label htmlFor="message" className="text-sm font-medium">Détails de votre demande *</label>
                <Textarea 
                  id="message" 
                  name="message"
                  required 
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  placeholder="Décrivez votre besoin en détail..." 
                  className="min-h-[120px] bg-background text-sm leading-relaxed" 
                />
              </div>
            </div>
          </div>
          
          <div className="pt-6 border-t border-border flex flex-col items-center">
            <Button 
              type="submit" 
              disabled={isSubmitting} 
              className="w-full md:w-auto bg-brand-orange hover:bg-brand-orange/90 text-white h-14 px-12 text-lg rounded-full font-semibold"
            >
              {isSubmitting ? "Envoi en cours..." : (
                <>Demander mon devis gratuit <ArrowRight className="ml-2 h-5 w-5" /></>
              )}
            </Button>
            <p className="text-xs text-muted-foreground mt-4 text-center">
              Vos données sont protégées et ne seront utilisées que pour traiter votre demande.
            </p>
          </div>
        </motion.form>
      )}
    </AnimatePresence>
  );
}

export default function QuotePage() {
  return (
    <div className="min-h-screen bg-background pt-32 pb-24 md:pt-40">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-4xl mx-auto">
          
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold font-heading mb-6">Demander un Devis</h1>
            <p className="text-lg text-muted-foreground">
              Remplissez ce formulaire pour obtenir une étude personnalisée et gratuite pour votre projet.
            </p>
          </div>

          <div className="bg-card border border-border shadow-xl rounded-3xl p-8 md:p-12">
            <Suspense fallback={<div className="text-center py-12">Chargement du formulaire...</div>}>
              <QuoteForm />
            </Suspense>
          </div>
        </div>
      </div>
    </div>
  );
}
