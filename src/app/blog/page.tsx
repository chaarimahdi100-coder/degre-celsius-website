import { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Calendar, Clock, User } from "lucide-react";
import { BlogPost } from "@/types";

export const metadata: Metadata = {
  title: "Blog",
  description: "Actualités, conseils et articles sur l'énergie solaire, la climatisation et le chauffage par les experts Degré Celsius.",
};

const articles: BlogPost[] = [
  {
    id: "1",
    title: "Combien de panneaux solaires pour une maison en Tunisie ?",
    slug: "combien-de-panneaux-solaires-pour-une-maison",
    category: "Photovoltaïque",
    author: "Ing. Sami TRABELSI",
    date: "12 Juillet 2026",
    readTime: "5 min",
    excerpt: "Découvrez comment dimensionner votre installation photovoltaïque en fonction de votre facture STEG et de la surface de votre toit.",
    content: "",
    image: "https://images.unsplash.com/photo-1509391366360-2e959784a276?q=80&w=2072&auto=format&fit=crop"
  },
  {
    id: "2",
    title: "Les avantages du système VRV pour les entreprises",
    slug: "avantages-systeme-vrv-entreprises",
    category: "Climatisation",
    author: "Ing. Yassine BEN AMMAR",
    date: "28 Juin 2026",
    readTime: "4 min",
    excerpt: "Le Volume de Réfrigérant Variable (VRV) est la solution de climatisation la plus performante pour le tertiaire. Voici pourquoi.",
    content: "",
    image: "https://images.unsplash.com/photo-1558227691-41ea78d1f631?q=80&w=2000&auto=format&fit=crop"
  },
  {
    id: "3",
    title: "Pourquoi choisir le plancher chauffant ?",
    slug: "pourquoi-choisir-plancher-chauffant",
    category: "Chauffage",
    author: "Ing. Ahmed KARRAY",
    date: "15 Juin 2026",
    readTime: "6 min",
    excerpt: "Confort thermique, économies d'énergie, esthétique : le plancher chauffant est le système de chauffage ultime pour votre nouvelle construction.",
    content: "",
    image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=2070&auto=format&fit=crop"
  },
  {
    id: "4",
    title: "Subventions FNME pour le Photovoltaïque en 2026",
    slug: "subventions-fnme-photovoltaique",
    category: "Énergie Solaire",
    author: "Sami TRABELSI",
    date: "02 Juin 2026",
    readTime: "3 min",
    excerpt: "Le Fonds National de Maîtrise de l'Énergie offre des primes avantageuses. Explication des démarches et montants.",
    content: "",
    image: "https://images.unsplash.com/photo-1497435334941-8c899ee9e8e9?q=80&w=2070&auto=format&fit=crop"
  },
  {
    id: "5",
    title: "Comment préparer sa climatisation pour l'été ?",
    slug: "preparer-climatisation-ete",
    category: "Maintenance",
    author: "Ali BOUZID",
    date: "20 Mai 2026",
    readTime: "4 min",
    excerpt: "Le nettoyage des filtres et la vérification du gaz sont essentiels avant les fortes chaleurs. Guide pratique d'entretien.",
    content: "",
    image: "https://images.unsplash.com/photo-1581092921461-eab62e97a780?q=80&w=2070&auto=format&fit=crop"
  },
  {
    id: "6",
    title: "Pompe à chaleur : L'avenir du chauffage",
    slug: "pompe-a-chaleur-avenir-chauffage",
    category: "Économies d'Énergie",
    author: "Ahmed KARRAY",
    date: "05 Mai 2026",
    readTime: "7 min",
    excerpt: "La pompe à chaleur (PAC) produit jusqu'à 4 fois plus d'énergie qu'elle n'en consomme. Analyse de cette technologie révolutionnaire.",
    content: "",
    image: "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?q=80&w=2070&auto=format&fit=crop"
  }
];

export default function BlogPage() {
  return (
    <div className="min-h-screen bg-background pt-32 pb-24 md:pt-40">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h1 className="text-4xl md:text-6xl font-bold font-heading mb-6">Actualités & Conseils</h1>
          <p className="text-lg text-muted-foreground">
            Découvrez nos derniers articles, guides pratiques et analyses sur la transition énergétique en Tunisie.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {articles.map((article) => (
            <article key={article.id} className="bg-card rounded-2xl border border-border overflow-hidden hover:shadow-lg transition-shadow group">
              <div className="relative h-56 overflow-hidden">
                <img 
                  src={article.image} 
                  alt={article.title} 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute top-4 left-4">
                  <span className="bg-brand-orange text-white text-xs font-bold uppercase tracking-wider py-1 px-3 rounded-full">
                    {article.category}
                  </span>
                </div>
              </div>
              <div className="p-6">
                <div className="flex items-center gap-4 text-sm text-muted-foreground mb-4">
                  <div className="flex items-center gap-1">
                    <Calendar className="h-4 w-4" /> {article.date}
                  </div>
                  <div className="flex items-center gap-1">
                    <Clock className="h-4 w-4" /> {article.readTime}
                  </div>
                </div>
                <h2 className="text-xl font-bold font-heading mb-3 group-hover:text-brand-orange transition-colors">
                  <Link href={`/blog/${article.slug}`}>
                    {article.title}
                  </Link>
                </h2>
                <p className="text-muted-foreground line-clamp-3 mb-6">
                  {article.excerpt}
                </p>
                <div className="flex items-center justify-between mt-auto">
                  <div className="flex items-center gap-2 text-sm font-medium">
                    <User className="h-4 w-4 text-brand-orange" />
                    {article.author}
                  </div>
                  <Link href={`/blog/${article.slug}`} className="text-brand-orange hover:text-brand-navy dark:hover:text-white transition-colors">
                    <ArrowRight className="h-5 w-5" />
                  </Link>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </div>
  );
}
