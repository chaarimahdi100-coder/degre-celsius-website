export interface Service {
  id: string;
  title: string;
  description: string;
  icon: string;
  href: string;
}

export interface Project {
  id: string;
  title: string;
  category: "Photovoltaïque" | "Climatisation" | "Chauffage";
  image: string;
  description: string;
}

export interface BlogPost {
  id: string;
  title: string;
  slug: string;
  category: string;
  author: string;
  date: string;
  readTime: string;
  excerpt: string;
  content: string;
  image: string;
}

export interface QuoteFormData {
  fullName: string;
  phone: string;
  email: string;
  city: string;
  service: string;
  monthlyBill: string;
  message: string;
}
