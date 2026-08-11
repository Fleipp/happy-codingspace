import { motion } from "framer-motion";
import { CONFIG } from "../config/landing-page";

export const GuaranteeSection = () => (
  <section className="py-24 px-6 bg-white">
    <div className="container mx-auto max-w-4xl">
      <motion.div 
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        className="bg-[#F8ECE8] rounded-[32px] p-8 md:p-12 flex flex-col md:flex-row items-center gap-8 text-center md:text-left border border-[#D99B92]/20 shadow-inner"
      >
        <div className="w-24 h-24 bg-white rounded-full flex items-center justify-center text-[#B86662] text-4xl shrink-0 shadow-sm border border-[#D99B92]/10">
          <span role="img" aria-label="Garantia de 15 dias">🏆</span>
        </div>
        <div className="space-y-4">
          <h2 className="text-3xl font-serif font-bold text-[#332A28]">
            {CONFIG.warranty.title}
          </h2>
          <p className="text-[#6F625E] leading-relaxed">
            {CONFIG.warranty.text}
          </p>
        </div>
      </motion.div>
    </div>
  </section>
);
