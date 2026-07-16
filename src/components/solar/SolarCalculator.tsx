"use client";

import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence, useInView } from "motion/react";
import Link from "next/link";
import {
  Sun,
  Zap,
  Leaf,
  TrendingDown,
  ArrowRight,
  Calculator,
  ChevronRight,
  DollarSign,
  LayoutGrid,
  MapPin,
  Home,
  RotateCcw,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  calculateSolar,
  CITY_SOLAR_DATA,
  PROPERTY_TYPES,
  ROOF_TYPES,
  type SolarCalculatorInput,
  type SolarCalculatorResult,
} from "@/lib/solar-calculator";

/* ─────────── Animated Counter ─────────── */
function AnimatedCounter({
  value,
  suffix = "",
  prefix = "",
  duration = 1500,
  decimals = 0,
}: {
  value: number;
  suffix?: string;
  prefix?: string;
  duration?: number;
  decimals?: number;
}) {
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true });
  const [display, setDisplay] = useState(0);

  useEffect(() => {
    if (!isInView) return;
    let start: number | null = null;
    const step = (ts: number) => {
      if (!start) start = ts;
      const progress = Math.min((ts - start) / duration, 1);
      const ease = 1 - Math.pow(1 - progress, 4);
      setDisplay(ease * value);
      if (progress < 1) requestAnimationFrame(step);
      else setDisplay(value);
    };
    requestAnimationFrame(step);
  }, [isInView, value, duration]);

  const formatted =
    decimals > 0
      ? display.toFixed(decimals)
      : new Intl.NumberFormat("fr-FR").format(Math.round(display));

  return (
    <span ref={ref} className="tabular-nums">
      {prefix}
      {formatted}
      {suffix}
    </span>
  );
}

/* ─────────── Circular Progress ─────────── */
function CircularProgress({
  percent,
  size = 120,
  strokeWidth = 10,
  label,
}: {
  percent: number;
  size?: number;
  strokeWidth?: number;
  label: string;
}) {
  const radius = (size - strokeWidth) / 2;
  const circumference = radius * 2 * Math.PI;
  const offset = circumference - (percent / 100) * circumference;

  return (
    <div className="flex flex-col items-center gap-3">
      <div className="relative" style={{ width: size, height: size }}>
        <svg width={size} height={size} className="-rotate-90">
          <circle
            cx={size / 2}
            cy={size / 2}
            r={radius}
            fill="none"
            stroke="currentColor"
            strokeWidth={strokeWidth}
            className="text-border"
          />
          <motion.circle
            cx={size / 2}
            cy={size / 2}
            r={radius}
            fill="none"
            stroke="url(#circleGradient)"
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeDasharray={circumference}
            initial={{ strokeDashoffset: circumference }}
            animate={{ strokeDashoffset: offset }}
            transition={{ duration: 1.5, ease: "easeOut", delay: 0.3 }}
          />
          <defs>
            <linearGradient id="circleGradient" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#FF7A00" />
              <stop offset="100%" stopColor="#FF9F40" />
            </linearGradient>
          </defs>
        </svg>
        <div className="absolute inset-0 flex items-center justify-center">
          <span className="text-2xl font-bold font-heading">
            <AnimatedCounter value={percent} suffix="%" />
          </span>
        </div>
      </div>
      <span className="text-sm text-muted-foreground font-medium text-center">{label}</span>
    </div>
  );
}

/* ─────────── Progress Bar ─────────── */
function ProgressBar({ value, max, label }: { value: number; max: number; label: string }) {
  const percent = Math.min((value / max) * 100, 100);
  return (
    <div className="space-y-2">
      <div className="flex justify-between text-sm">
        <span className="text-muted-foreground">{label}</span>
        <span className="font-semibold">
          <AnimatedCounter value={value} /> / {new Intl.NumberFormat("fr-FR").format(max)}
        </span>
      </div>
      <div className="h-3 bg-border rounded-full overflow-hidden">
        <motion.div
          className="h-full rounded-full bg-gradient-to-r from-brand-orange to-amber-400"
          initial={{ width: 0 }}
          animate={{ width: `${percent}%` }}
          transition={{ duration: 1.2, ease: "easeOut", delay: 0.2 }}
        />
      </div>
    </div>
  );
}

/* ─────────── Result Card ─────────── */
function ResultCard({
  icon: Icon,
  label,
  value,
  suffix,
  prefix,
  decimals,
  color = "orange",
  delay = 0,
}: {
  icon: React.ElementType;
  label: string;
  value: number;
  suffix?: string;
  prefix?: string;
  decimals?: number;
  color?: "orange" | "green" | "blue" | "navy";
  delay?: number;
}) {
  const colorMap = {
    orange: "from-brand-orange/20 to-amber-400/10 text-brand-orange border-brand-orange/20",
    green: "from-emerald-500/20 to-green-400/10 text-emerald-500 border-emerald-500/20",
    blue: "from-sky-500/20 to-blue-400/10 text-sky-500 border-sky-500/20",
    navy: "from-brand-navy/20 to-indigo-400/10 text-brand-navy dark:text-sky-300 border-brand-navy/20 dark:border-sky-300/20",
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 30, scale: 0.95 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      transition={{ duration: 0.5, delay, ease: "easeOut" }}
      className={cn(
        "relative overflow-hidden rounded-2xl border p-6 bg-gradient-to-br backdrop-blur-sm",
        "hover:shadow-lg hover:-translate-y-1 transition-all duration-300",
        colorMap[color]
      )}
    >
      {/* Decorative glow */}
      <div className="absolute -top-6 -right-6 w-20 h-20 rounded-full bg-current opacity-5 blur-2xl" />

      <div className="flex items-start justify-between mb-4">
        <div className="w-12 h-12 rounded-xl bg-current/10 flex items-center justify-center">
          <Icon className="h-6 w-6" />
        </div>
      </div>
      <p className="text-sm text-muted-foreground mb-1">{label}</p>
      <p className="text-3xl font-bold font-heading">
        <AnimatedCounter value={value} suffix={suffix} prefix={prefix} decimals={decimals} />
      </p>
    </motion.div>
  );
}

/* ═══════════════ MAIN COMPONENT ═══════════════ */
export function SolarCalculator() {
  const [step, setStep] = useState<"form" | "results">("form");
  const [result, setResult] = useState<SolarCalculatorResult | null>(null);
  const [input, setInput] = useState<SolarCalculatorInput>({
    monthlyBill: 200,
    city: "sfax",
    propertyType: "house",
    roofType: "flat",
  });

  const handleCalculate = () => {
    const r = calculateSolar(input);
    setResult(r);
    setStep("results");
  };

  const handleReset = () => {
    setStep("form");
    setResult(null);
  };

  return (
    <section className="py-24 relative overflow-hidden" id="solar-calculator">
      {/* Background decoration */}
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none">
        <div className="absolute top-20 -left-40 w-80 h-80 rounded-full bg-brand-orange/5 blur-3xl" />
        <div className="absolute bottom-20 -right-40 w-96 h-96 rounded-full bg-brand-navy/5 blur-3xl" />
      </div>

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-brand-orange/10 text-brand-orange text-sm font-semibold mb-6">
            <Calculator className="h-4 w-4" />
            Simulateur Solaire Interactif
          </div>
          <h2 className="text-3xl md:text-5xl font-bold font-heading mb-6">
            Combien pourriez-vous{" "}
            <span className="text-brand-orange">économiser</span> ?
          </h2>
          <p className="text-lg text-muted-foreground">
            Estimez votre installation photovoltaïque en quelques clics. Notre
            calculateur utilise les données d&apos;ensoleillement tunisiennes pour
            vous fournir une estimation précise.
          </p>
        </motion.div>

        {/* Calculator */}
        <AnimatePresence mode="wait">
          {step === "form" ? (
            <motion.div
              key="form"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.4 }}
              className="max-w-4xl mx-auto"
            >
              {/* Glassmorphism card */}
              <div className="rounded-3xl border border-white/20 dark:border-white/10 bg-white/70 dark:bg-white/5 backdrop-blur-xl shadow-2xl shadow-brand-navy/5 p-8 md:p-12">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  {/* Monthly bill */}
                  <div className="space-y-3">
                    <label className="flex items-center gap-2 text-sm font-semibold">
                      <DollarSign className="h-4 w-4 text-brand-orange" />
                      Facture mensuelle STEG (TND) *
                    </label>
                    <div className="relative">
                      <Input
                        type="number"
                        min={30}
                        max={50000}
                        value={input.monthlyBill}
                        onChange={(e) =>
                          setInput({ ...input, monthlyBill: Number(e.target.value) })
                        }
                        placeholder="200"
                        className="h-14 text-lg bg-background/80 border-border/60 focus:border-brand-orange pr-16"
                      />
                      <span className="absolute right-4 top-1/2 -translate-y-1/2 text-muted-foreground font-medium">
                        TND
                      </span>
                    </div>
                    <input
                      type="range"
                      min={30}
                      max={5000}
                      step={10}
                      value={input.monthlyBill}
                      onChange={(e) =>
                        setInput({ ...input, monthlyBill: Number(e.target.value) })
                      }
                      className="w-full h-2 bg-border rounded-full appearance-none cursor-pointer accent-brand-orange"
                    />
                    <div className="flex justify-between text-xs text-muted-foreground">
                      <span>30 TND</span>
                      <span>5 000 TND</span>
                    </div>
                  </div>

                  {/* City */}
                  <div className="space-y-3">
                    <label className="flex items-center gap-2 text-sm font-semibold">
                      <MapPin className="h-4 w-4 text-brand-orange" />
                      Votre Ville *
                    </label>
                    <Select
                      value={input.city}
                      onValueChange={(val) => setInput({ ...input, city: val ?? "sfax" })}
                    >
                      <SelectTrigger className="h-14 text-lg bg-background/80 border-border/60">
                        <SelectValue placeholder="Sélectionnez une ville" />
                      </SelectTrigger>
                      <SelectContent>
                        {Object.entries(CITY_SOLAR_DATA).map(([key, city]) => (
                          <SelectItem key={key} value={key}>
                            {city.label} — {city.peakSunHours}h/jour
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                    <p className="text-xs text-muted-foreground">
                      Ensoleillement :{" "}
                      <span className="font-semibold text-brand-orange">
                        {CITY_SOLAR_DATA[input.city]?.irradiance ?? "—"} kWh/m²/an
                      </span>
                    </p>
                  </div>

                  {/* Property type */}
                  <div className="space-y-3">
                    <label className="flex items-center gap-2 text-sm font-semibold">
                      <Home className="h-4 w-4 text-brand-orange" />
                      Type de Propriété *
                    </label>
                    <div className="grid grid-cols-3 gap-3">
                      {PROPERTY_TYPES.map((pt) => (
                        <button
                          key={pt.value}
                          type="button"
                          onClick={() =>
                            setInput({ ...input, propertyType: pt.value })
                          }
                          className={cn(
                            "rounded-xl border-2 p-4 text-center text-sm font-medium transition-all",
                            input.propertyType === pt.value
                              ? "border-brand-orange bg-brand-orange/10 text-brand-orange shadow-md"
                              : "border-border bg-background/50 hover:border-brand-orange/40"
                          )}
                        >
                          {pt.label}
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Roof type */}
                  <div className="space-y-3">
                    <label className="flex items-center gap-2 text-sm font-semibold">
                      <LayoutGrid className="h-4 w-4 text-brand-orange" />
                      Type de Toiture *
                    </label>
                    <div className="grid grid-cols-2 gap-3">
                      {ROOF_TYPES.map((rt) => (
                        <button
                          key={rt.value}
                          type="button"
                          onClick={() =>
                            setInput({ ...input, roofType: rt.value })
                          }
                          className={cn(
                            "rounded-xl border-2 p-4 text-center text-sm font-medium transition-all",
                            input.roofType === rt.value
                              ? "border-brand-orange bg-brand-orange/10 text-brand-orange shadow-md"
                              : "border-border bg-background/50 hover:border-brand-orange/40"
                          )}
                        >
                          {rt.label}
                        </button>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Calculate Button */}
                <div className="mt-10 flex justify-center">
                  <Button
                    onClick={handleCalculate}
                    disabled={input.monthlyBill < 30}
                    className="h-16 px-12 text-lg rounded-full bg-brand-orange hover:bg-brand-orange/90 text-white shadow-xl shadow-brand-orange/20 hover:scale-[1.03] transition-transform font-semibold"
                  >
                    <Sun className="mr-2 h-5 w-5" />
                    Calculer Mon Potentiel Solaire
                    <ChevronRight className="ml-2 h-5 w-5" />
                  </Button>
                </div>
              </div>
            </motion.div>
          ) : (
            /* ─── RESULTS PANEL ─── */
            <motion.div
              key="results"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5 }}
              className="max-w-6xl mx-auto space-y-10"
            >
              {/* Reset button */}
              <div className="flex justify-center">
                <Button
                  variant="outline"
                  onClick={handleReset}
                  className="rounded-full gap-2"
                >
                  <RotateCcw className="h-4 w-4" />
                  Modifier les paramètres
                </Button>
              </div>

              {result && (
                <>
                  {/* Top KPI cards */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    <ResultCard
                      icon={Sun}
                      label="Taille du Système"
                      value={result.systemSizeKWp}
                      suffix=" kWc"
                      decimals={1}
                      color="orange"
                      delay={0}
                    />
                    <ResultCard
                      icon={LayoutGrid}
                      label="Nombre de Panneaux"
                      value={result.numberOfPanels}
                      suffix=" panneaux"
                      color="blue"
                      delay={0.1}
                    />
                    <ResultCard
                      icon={Zap}
                      label="Production Annuelle"
                      value={result.annualProductionKWh}
                      suffix=" kWh/an"
                      color="orange"
                      delay={0.2}
                    />
                    <ResultCard
                      icon={DollarSign}
                      label="Économies Annuelles"
                      value={result.annualSavingsTND}
                      suffix=" TND"
                      color="green"
                      delay={0.3}
                    />
                    <ResultCard
                      icon={Leaf}
                      label="Réduction CO₂"
                      value={result.co2ReductionKg}
                      suffix=" kg/an"
                      color="green"
                      delay={0.4}
                    />
                    <ResultCard
                      icon={TrendingDown}
                      label="Retour sur Investissement"
                      value={result.roiYears}
                      suffix=" ans"
                      decimals={1}
                      color="navy"
                      delay={0.5}
                    />
                  </div>

                  {/* Visual section */}
                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                    {/* Circular charts */}
                    <motion.div
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.6 }}
                      className="rounded-3xl border border-white/20 dark:border-white/10 bg-white/70 dark:bg-white/5 backdrop-blur-xl p-8 shadow-lg"
                    >
                      <h3 className="text-xl font-bold font-heading mb-8">
                        Performance Énergétique
                      </h3>
                      <div className="flex items-center justify-around">
                        <CircularProgress
                          percent={result.selfSufficiencyPercent}
                          label="Autosuffisance"
                        />
                        <CircularProgress
                          percent={Math.min(
                            100,
                            Math.round(
                              (result.annualSavingsTND /
                                (input.monthlyBill * 12)) *
                                100
                            )
                          )}
                          label="Économies"
                          size={120}
                        />
                      </div>
                    </motion.div>

                    {/* Details */}
                    <motion.div
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.7 }}
                      className="rounded-3xl border border-white/20 dark:border-white/10 bg-white/70 dark:bg-white/5 backdrop-blur-xl p-8 shadow-lg space-y-6"
                    >
                      <h3 className="text-xl font-bold font-heading mb-2">
                        Détails de l&apos;Estimation
                      </h3>

                      <ProgressBar
                        value={result.annualProductionKWh}
                        max={input.monthlyBill / 0.295 * 12}
                        label="Production vs Consommation (kWh)"
                      />

                      <div className="grid grid-cols-2 gap-4 text-sm">
                        <div className="p-4 rounded-xl bg-background/60 border border-border">
                          <p className="text-muted-foreground">Coût Estimé</p>
                          <p className="text-xl font-bold mt-1">
                            <AnimatedCounter value={result.totalSystemCost} suffix=" TND" />
                          </p>
                        </div>
                        <div className="p-4 rounded-xl bg-background/60 border border-border">
                          <p className="text-muted-foreground">Surface Toit</p>
                          <p className="text-xl font-bold mt-1">
                            <AnimatedCounter value={result.roofAreaNeeded} suffix=" m²" />
                          </p>
                        </div>
                        <div className="p-4 rounded-xl bg-background/60 border border-border">
                          <p className="text-muted-foreground">Conso. Mensuelle</p>
                          <p className="text-xl font-bold mt-1">
                            <AnimatedCounter value={result.monthlyConsumptionKWh} suffix=" kWh" />
                          </p>
                        </div>
                        <div className="p-4 rounded-xl bg-background/60 border border-border">
                          <p className="text-muted-foreground">Puissance/Panneau</p>
                          <p className="text-xl font-bold mt-1">550 Wc</p>
                        </div>
                      </div>
                    </motion.div>
                  </div>

                  {/* CTA */}
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.9 }}
                    className="rounded-3xl bg-brand-navy p-10 md:p-14 text-center text-white relative overflow-hidden"
                  >
                    <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)', backgroundSize: '30px 30px' }} />
                    <div className="relative z-10">
                      <h3 className="text-2xl md:text-4xl font-bold font-heading mb-4">
                        Passez du calcul à l&apos;action !
                      </h3>
                      <p className="text-lg text-white/80 mb-8 max-w-xl mx-auto">
                        Recevez une étude technique détaillée et un devis
                        personnalisé gratuit basé sur votre simulation.
                      </p>
                      <Link
                        href={`/quote?service=photovoltaic&bill=${input.monthlyBill}&city=${input.city}&property=${input.propertyType}&roof=${input.roofType}&system=${result.systemSizeKWp}&panels=${result.numberOfPanels}`}
                        className={cn(
                          buttonVariants({ size: "lg" }),
                          "h-16 px-10 text-lg rounded-full bg-brand-orange hover:bg-brand-orange/90 text-white shadow-xl shadow-brand-orange/30 hover:scale-105 transition-transform inline-flex items-center justify-center font-semibold"
                        )}
                      >
                        Demander Mon Devis Solaire Gratuit
                        <ArrowRight className="ml-2 h-5 w-5" />
                      </Link>
                    </div>
                  </motion.div>

                  {/* Disclaimer */}
                  <p className="text-center text-xs text-muted-foreground max-w-2xl mx-auto">
                    * Cette simulation est fournie à titre indicatif et basée sur
                    des données moyennes d&apos;ensoleillement. Les résultats
                    réels peuvent varier selon l&apos;orientation, l&apos;ombrage
                    et les conditions spécifiques de votre installation. Contactez
                    nos experts pour une étude personnalisée.
                  </p>
                </>
              )}
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}
