"use client";

import { useEffect, useState } from "react";
import { MessageCircle } from "lucide-react";
import { COMPANY_INFO } from "@/lib/constants";
import { motion, AnimatePresence } from "motion/react";

export function WhatsAppButton() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Show button after scrolling down a bit
    const handleScroll = () => {
      setIsVisible(window.scrollY > 300);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.a
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          exit={{ scale: 0, opacity: 0 }}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          href={COMPANY_INFO.whatsappLink}
          target="_blank"
          rel="noopener noreferrer"
          className="fixed bottom-6 right-6 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-lg shadow-[#25D366]/30 transition-shadow hover:shadow-[#25D366]/50"
          aria-label="Contact us on WhatsApp"
        >
          <div className="absolute inset-0 rounded-full animate-ping bg-[#25D366] opacity-20"></div>
          <MessageCircle className="h-7 w-7 relative z-10" />
        </motion.a>
      )}
    </AnimatePresence>
  );
}
