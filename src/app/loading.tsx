import { Loader2 } from "lucide-react";

export default function Loading() {
  return (
    <div className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-background">
      <div className="flex flex-col items-center gap-6">
        <div className="relative flex items-center justify-center">
          <div className="absolute h-24 w-24 rounded-full border-4 border-brand-orange/20 border-t-brand-orange animate-spin"></div>
          <div className="w-16 h-16 rounded-full bg-brand-navy text-white flex items-center justify-center font-bold text-2xl animate-pulse">
            °C
          </div>
        </div>
        <p className="text-xl font-heading font-medium tracking-tight text-foreground/80 animate-pulse">
          Chargement en cours...
        </p>
      </div>
    </div>
  );
}
