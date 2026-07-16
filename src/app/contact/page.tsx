"use client";

import { useState } from "react";
import { motion } from "motion/react";
import { MapPin, Phone, Mail, Clock, Send, CheckCircle2 } from "lucide-react";
import { COMPANY_INFO } from "@/lib/constants";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

export default function ContactPage() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1500));
    
    setIsSubmitting(false);
    setIsSuccess(true);
    
    // Reset form success after 3 seconds
    setTimeout(() => setIsSuccess(false), 3000);
    (e.target as HTMLFormElement).reset();
  };

  return (
    <div className="min-h-screen bg-background pt-32 pb-24 md:pt-40">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h1 className="text-4xl md:text-6xl font-bold font-heading mb-6">Contactez-nous</h1>
          <p className="text-lg text-muted-foreground">
            Une question ? Un projet ? Notre équipe est à votre disposition pour vous conseiller et vous accompagner.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 lg:gap-8 max-w-6xl mx-auto">
          {/* Contact Info */}
          <div className="lg:col-span-2 flex flex-col gap-8">
            <div className="p-8 rounded-2xl bg-brand-navy text-white shadow-xl">
              <h3 className="text-2xl font-bold font-heading mb-8">Informations</h3>
              
              <div className="flex flex-col gap-8">
                <div className="flex gap-4">
                  <div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center flex-shrink-0 text-brand-orange">
                    <MapPin className="h-5 w-5" />
                  </div>
                  <div>
                    <h4 className="font-bold text-lg mb-1">Siège Social</h4>
                    <p className="text-white/70">{COMPANY_INFO.address}</p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center flex-shrink-0 text-brand-orange">
                    <Phone className="h-5 w-5" />
                  </div>
                  <div>
                    <h4 className="font-bold text-lg mb-1">Téléphone</h4>
                    <div className="flex flex-col text-white/70">
                      {COMPANY_INFO.phones.map((phone) => (
                        <a key={phone} href={`tel:${phone.replace(/\s+/g, '')}`} className="hover:text-brand-orange transition-colors">
                          {phone}
                        </a>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center flex-shrink-0 text-brand-orange">
                    <Mail className="h-5 w-5" />
                  </div>
                  <div>
                    <h4 className="font-bold text-lg mb-1">Email</h4>
                    <a href={`mailto:${COMPANY_INFO.email}`} className="text-white/70 hover:text-brand-orange transition-colors">
                      {COMPANY_INFO.email}
                    </a>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center flex-shrink-0 text-brand-orange">
                    <Clock className="h-5 w-5" />
                  </div>
                  <div>
                    <h4 className="font-bold text-lg mb-1">Horaires</h4>
                    <p className="text-white/70">Lun - Sam : 08h00 - 18h00<br/>Dimanche : Fermé</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-3">
            <div className="bg-card border border-border rounded-2xl p-8 md:p-10 shadow-sm">
              <h3 className="text-2xl font-bold font-heading mb-6">Envoyez-nous un message</h3>
              
              {isSuccess ? (
                <motion.div 
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="flex flex-col items-center justify-center py-12 text-center"
                >
                  <div className="w-20 h-20 bg-green-100 dark:bg-green-900/30 text-green-600 dark:text-green-400 rounded-full flex items-center justify-center mb-6">
                    <CheckCircle2 className="h-10 w-10" />
                  </div>
                  <h4 className="text-2xl font-bold mb-2">Message envoyé !</h4>
                  <p className="text-muted-foreground">Nous vous répondrons dans les plus brefs délais.</p>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label htmlFor="name" className="text-sm font-medium">Nom complet *</label>
                      <Input id="name" required placeholder="Votre nom" className="bg-background" />
                    </div>
                    <div className="space-y-2">
                      <label htmlFor="email" className="text-sm font-medium">Email *</label>
                      <Input id="email" type="email" required placeholder="votre@email.com" className="bg-background" />
                    </div>
                  </div>
                  
                  <div className="space-y-2">
                    <label htmlFor="subject" className="text-sm font-medium">Sujet *</label>
                    <Input id="subject" required placeholder="Comment pouvons-nous vous aider ?" className="bg-background" />
                  </div>
                  
                  <div className="space-y-2">
                    <label htmlFor="message" className="text-sm font-medium">Message *</label>
                    <Textarea 
                      id="message" 
                      required 
                      placeholder="Votre message détaillé..." 
                      className="min-h-[150px] bg-background" 
                    />
                  </div>
                  
                  <Button type="submit" disabled={isSubmitting} className="w-full bg-brand-orange hover:bg-brand-orange/90 text-white h-12 text-lg">
                    {isSubmitting ? "Envoi en cours..." : (
                      <>Envoyer le message <Send className="ml-2 h-4 w-4" /></>
                    )}
                  </Button>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
      
      {/* Map Embed */}
      <div className="w-full h-[400px] mt-24">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d104994.49884501257!2d10.669865675402035!3d34.739766946001044!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x13002cda1486c695%3A0x22dfe0a62c50ce6f!2sSfax!5e0!3m2!1sen!2stn!4v1701389025010!5m2!1sen!2stn"
          width="100%"
          height="100%"
          style={{ border: 0 }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          title="Degré Celsius Location"
        ></iframe>
      </div>
    </div>
  );
}
