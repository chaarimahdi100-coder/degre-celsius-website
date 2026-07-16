import Link from "next/link";
import { Mail, MapPin, Phone } from "lucide-react";
import { COMPANY_INFO, NAV_LINKS, SERVICES } from "@/lib/constants";
import { Button } from "@/components/ui/button";

import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-brand-navy text-white pt-16 pb-8 border-t border-white/10">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Company Info */}
          <div className="flex flex-col gap-4">
            <Link href="/" className="flex items-center gap-2 mb-2">
              <div className="w-10 h-10 rounded-lg bg-brand-orange text-white flex items-center justify-center font-bold text-xl">
                °C
              </div>
              <span className="font-heading font-bold text-xl tracking-tight">
                {COMPANY_INFO.name}
              </span>
            </Link>
            <p className="text-white/70 text-sm leading-relaxed">
              Votre partenaire de confiance pour des solutions énergétiques durables. Expertise en photovoltaïque, climatisation, et chauffage en Tunisie.
            </p>
            <div className="flex items-center gap-3 mt-2">
              <a 
                href={COMPANY_INFO.instagramLink} 
                target="_blank" 
                rel="noopener noreferrer"
                className={cn(
                  buttonVariants({ variant: "ghost", size: "icon" }),
                  "rounded-full hover:bg-white/10 hover:text-brand-orange text-white h-9 w-9 inline-flex items-center justify-center"
                )}
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-5 w-5">
                  <rect width="20" height="20" x="2" y="2" rx="5" ry="5"/>
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
                  <line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/>
                </svg>
                <span className="sr-only">Instagram</span>
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="flex flex-col gap-4">
            <h3 className="font-bold text-lg mb-2">Liens Rapides</h3>
            <ul className="flex flex-col gap-3">
              {NAV_LINKS.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-white/70 hover:text-brand-orange transition-colors text-sm">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div className="flex flex-col gap-4">
            <h3 className="font-bold text-lg mb-2">Nos Services</h3>
            <ul className="flex flex-col gap-3">
              {SERVICES.slice(0, 4).map((service) => (
                <li key={service.id}>
                  <Link href={service.href} className="text-white/70 hover:text-brand-orange transition-colors text-sm">
                    {service.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div className="flex flex-col gap-4">
            <h3 className="font-bold text-lg mb-2">Contactez-nous</h3>
            <ul className="flex flex-col gap-4">
              <li className="flex items-start gap-3 text-white/70 text-sm">
                <MapPin className="h-5 w-5 text-brand-orange shrink-0 mt-0.5" />
                <a href={COMPANY_INFO.googleMapsLink} target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">
                  {COMPANY_INFO.address}
                </a>
              </li>
              <li className="flex items-start gap-3 text-white/70 text-sm">
                <Phone className="h-5 w-5 text-brand-orange shrink-0 mt-0.5" />
                <div className="flex flex-col gap-1">
                  {COMPANY_INFO.phones.map((phone) => (
                    <a key={phone} href={`tel:${phone.replace(/\s+/g, '')}`} className="hover:text-white transition-colors">
                      {phone}
                    </a>
                  ))}
                </div>
              </li>
              <li className="flex items-start gap-3 text-white/70 text-sm">
                <Mail className="h-5 w-5 text-brand-orange shrink-0 mt-0.5" />
                <a href={`mailto:${COMPANY_INFO.email}`} className="hover:text-white transition-colors">
                  {COMPANY_INFO.email}
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-white/50 text-sm text-center md:text-left">
            &copy; {currentYear} {COMPANY_INFO.name}. Tous droits réservés.
          </p>
          <div className="flex items-center gap-6 text-sm text-white/50">
            <Link href="/privacy" className="hover:text-white transition-colors">Politique de confidentialité</Link>
            <Link href="/terms" className="hover:text-white transition-colors">Mentions légales</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
