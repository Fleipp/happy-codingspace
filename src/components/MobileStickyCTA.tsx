import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { CONFIG, CHECKOUT_URL } from "../config/landing-page";
import { CTAButton } from "./ui/CTAButton";

export const MobileStickyCTA = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Show after scrolling past 600px
      setIsVisible(window.scrollY > 600);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ y: 100 }}
          animate={{ y: 0 }}
          exit={{ y: 100 }}
          className="fixed bottom-6 left-6 right-6 z-50 md:hidden"
        >
          <div className="bg-white/95 backdrop-blur-md p-4 rounded-full shadow-2xl border border-[#D99B92]/20 flex items-center justify-between gap-4">
            <div className="pl-4">
              <p className="text-[10px] uppercase tracking-widest text-[#B86662] font-bold">Adeus Papada</p>
              <p className="text-xs text-[#332A28] font-bold">21 Dias</p>
            </div>
            <CTAButton href="#oferta" className="px-6 py-2 text-sm shadow-none">
              QUERO COMEÇAR
            </CTAButton>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
