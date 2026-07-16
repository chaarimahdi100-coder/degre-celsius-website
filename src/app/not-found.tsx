import Link from 'next/link';
import { buttonVariants } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import { AlertCircle } from 'lucide-react';

export default function NotFound() {
  return (
    <div className="min-h-screen bg-background flex items-center justify-center pt-20">
      <div className="container px-4 md:px-6 text-center flex flex-col items-center">
        <div className="w-24 h-24 bg-brand-orange/10 text-brand-orange rounded-full flex items-center justify-center mb-8 animate-pulse">
          <AlertCircle className="h-12 w-12" />
        </div>
        <h1 className="text-6xl md:text-8xl font-bold font-heading mb-6 text-brand-navy dark:text-white">404</h1>
        <h2 className="text-2xl md:text-3xl font-bold mb-4">Page non trouvée</h2>
        <p className="text-lg text-muted-foreground mb-8 max-w-md">
          Désolé, la page que vous recherchez n'existe pas ou a été déplacée.
        </p>
        <Link 
          href="/" 
          className={cn(
            buttonVariants({ variant: "default" }),
            "bg-brand-orange hover:bg-brand-orange/90 text-white rounded-full px-8 h-12 inline-flex items-center justify-center font-medium"
          )}
        >
          Retour à l'accueil
        </Link>
      </div>
    </div>
  );
}
