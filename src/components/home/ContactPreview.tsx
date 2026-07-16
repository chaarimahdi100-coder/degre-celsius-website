"use client";

import { motion } from "motion/react";
import { COMPANY_INFO } from "@/lib/constants";
import { MapPin, Phone, Mail, Clock } from "lucide-react";
import { fadeInUp, staggerContainer, staggerItem } from "@/lib/animations";

export function ContactPreview() {
  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          {/* Contact Info */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
          >
            <motion.h2 variants={fadeInUp} className="text-3xl md:text-5xl font-bold font-heading mb-6">
              Où nous trouver ?
            </motion.h2>
            <motion.p variants={fadeInUp} className="text-lg text-muted-foreground mb-10">
              Notre équipe est à votre disposition pour répondre à toutes vos questions et vous accompagner dans vos projets.
            </motion.p>

            <div className="flex flex-col gap-8">
              <motion.div variants={staggerItem} className="flex gap-4">
                <div className="w-12 h-12 rounded-full bg-brand-light dark:bg-muted flex items-center justify-center flex-shrink-0 text-brand-orange">
                  <MapPin className="h-5 w-5" />
                </div>
                <div>
                  <h4 className="font-bold text-lg mb-1">Siège Social</h4>
                  <p className="text-muted-foreground">{COMPANY_INFO.address}</p>
                </div>
              </motion.div>

              <motion.div variants={staggerItem} className="flex gap-4">
                <div className="w-12 h-12 rounded-full bg-brand-light dark:bg-muted flex items-center justify-center flex-shrink-0 text-brand-orange">
                  <Phone className="h-5 w-5" />
                </div>
                <div>
                  <h4 className="font-bold text-lg mb-1">Téléphone</h4>
                  <div className="flex flex-col text-muted-foreground">
                    {COMPANY_INFO.phones.map((phone) => (
                      <a key={phone} href={`tel:${phone.replace(/\s+/g, '')}`} className="hover:text-brand-orange transition-colors">
                        {phone}
                      </a>
                    ))}
                  </div>
                </div>
              </motion.div>

              <motion.div variants={staggerItem} className="flex gap-4">
                <div className="w-12 h-12 rounded-full bg-brand-light dark:bg-muted flex items-center justify-center flex-shrink-0 text-brand-orange">
                  <Mail className="h-5 w-5" />
                </div>
                <div>
                  <h4 className="font-bold text-lg mb-1">Email</h4>
                  <a href={`mailto:${COMPANY_INFO.email}`} className="text-muted-foreground hover:text-brand-orange transition-colors">
                    {COMPANY_INFO.email}
                  </a>
                </div>
              </motion.div>

              <motion.div variants={staggerItem} className="flex gap-4">
                <div className="w-12 h-12 rounded-full bg-brand-light dark:bg-muted flex items-center justify-center flex-shrink-0 text-brand-orange">
                  <Clock className="h-5 w-5" />
                </div>
                <div>
                  <h4 className="font-bold text-lg mb-1">Horaires d'ouverture</h4>
                  <p className="text-muted-foreground">Lun - Sam : 08h00 - 18h00<br/>Dimanche : Fermé</p>
                </div>
              </motion.div>
            </div>
          </motion.div>

          {/* Map Placeholder */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="h-[500px] w-full rounded-3xl overflow-hidden border border-border shadow-lg relative bg-brand-light dark:bg-muted flex items-center justify-center group"
          >
            {/* Real implementation would use Google Maps iframe here */}
            {/* For now, a styled placeholder that looks like a map */}
            <div className="absolute inset-0 opacity-50" style={{ backgroundImage: 'url("https://images.unsplash.com/photo-1524661135-423995f22d0b?q=80&w=2074&auto=format&fit=crop")', backgroundSize: 'cover', backgroundPosition: 'center' }}></div>
            <div className="absolute inset-0 bg-background/50 backdrop-blur-[2px] group-hover:backdrop-blur-0 transition-all duration-500"></div>
            
            <a 
              href={COMPANY_INFO.googleMapsLink}
              target="_blank"
              rel="noopener noreferrer"
              className="relative z-10 flex flex-col items-center bg-background/90 p-6 rounded-2xl shadow-xl hover:scale-105 transition-transform"
            >
              <div className="w-16 h-16 rounded-full bg-brand-orange/20 flex items-center justify-center mb-4">
                <MapPin className="h-8 w-8 text-brand-orange animate-bounce" />
              </div>
              <h3 className="font-bold text-xl font-heading text-center">Degré Celsius</h3>
              <p className="text-sm text-muted-foreground mt-1 text-center">Ouvrir dans Google Maps</p>
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
