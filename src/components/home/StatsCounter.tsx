"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useInView } from "motion/react";
import { STATS } from "@/lib/constants";
import { staggerContainer, staggerItem } from "@/lib/animations";

function Counter({ value, suffix }: { value: number; suffix: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [displayValue, setDisplayValue] = useState(0);

  useEffect(() => {
    if (isInView) {
      let startTimestamp: number | null = null;
      const duration = 2000; // 2 seconds

      const step = (timestamp: number) => {
        if (!startTimestamp) startTimestamp = timestamp;
        const progress = Math.min((timestamp - startTimestamp) / duration, 1);
        
        // Easing function (easeOutQuart)
        const easeOut = 1 - Math.pow(1 - progress, 4);
        
        setDisplayValue(Math.floor(easeOut * value));

        if (progress < 1) {
          window.requestAnimationFrame(step);
        } else {
          setDisplayValue(value);
        }
      };

      window.requestAnimationFrame(step);
    }
  }, [isInView, value]);

  // Format large numbers with spaces (e.g., 1 000 000)
  const formattedValue = new Intl.NumberFormat('fr-FR').format(displayValue);

  return (
    <span ref={ref} className="text-4xl md:text-6xl font-bold font-heading text-white">
      {formattedValue}<span className="text-brand-orange">{suffix}</span>
    </span>
  );
}

export function StatsCounter() {
  return (
    <section className="py-20 bg-brand-navy relative overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)', backgroundSize: '40px 40px' }}></div>
      
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          variants={staggerContainer}
          className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12 text-center"
        >
          {STATS.map((stat, index) => (
            <motion.div key={index} variants={staggerItem} className="flex flex-col items-center justify-center gap-2">
              <Counter value={stat.value} suffix={stat.suffix} />
              <span className="text-white/70 font-medium text-sm md:text-base uppercase tracking-wider mt-2">
                {stat.label}
              </span>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
