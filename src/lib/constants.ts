export const COMPANY_INFO = {
  name: "Degré Celsius",
  address: "Route Manzel Chaker, Sfax 3072, Tunisia",
  phones: ["+216 94 216 503", "+216 92 206 206"],
  email: "contact@degre-celsius.tn",
  instagram: "@degre_celsius2024",
  instagramLink: "https://instagram.com/degre_celsius2024",
  whatsappLink: "https://wa.me/21694216503",
  googleMapsLink: "https://maps.google.com/?q=Route+Manzel+Chaker+Sfax+3072+Tunisia",
};

export const NAV_LINKS = [
  { name: "Accueil", href: "/" },
  { name: "À Propos", href: "/about" },
  { name: "Services", href: "/services" },
  { name: "Simulateur", href: "/calculator" },
  { name: "Projets", href: "/projects" },
  { name: "Blog", href: "/blog" },
  { name: "Contact", href: "/contact" },
];

export const SERVICES = [
  {
    id: "photovoltaic",
    title: "Installation Photovoltaïque",
    description: "Des solutions solaires sur mesure pour réduire vos factures d'électricité et votre empreinte carbone.",
    icon: "Sun",
    href: "/photovoltaic",
  },
  {
    id: "air-conditioning",
    title: "Climatisation",
    description: "Installation et maintenance de systèmes de climatisation performants pour un confort thermique optimal.",
    icon: "Wind",
    href: "/air-conditioning",
  },
  {
    id: "heating",
    title: "Chauffage & Plancher Chauffant",
    description: "Systèmes de chauffage innovants, incluant des planchers chauffants pour une chaleur douce et homogène.",
    icon: "ThermometerSun",
    href: "/heating",
  },
  {
    id: "ventilation",
    title: "Ventilation",
    description: "Solutions de ventilation mécanique contrôlée (VMC) pour garantir la qualité de l'air intérieur.",
    icon: "Fan",
    href: "/services#ventilation",
  },
  {
    id: "maintenance",
    title: "Maintenance Annuelle",
    description: "Contrats d'entretien réguliers pour assurer la longévité et l'efficacité de toutes vos installations.",
    icon: "Wrench",
    href: "/services#maintenance",
  },
];

export const STATS = [
  { label: "Projets Réalisés", value: 500, suffix: "+" },
  { label: "Clients Satisfaits", value: 98, suffix: "%" },
  { label: "Années d'Expérience", value: 10, suffix: "+" },
  { label: "kWh Générés", value: 1000000, suffix: "+" },
];
