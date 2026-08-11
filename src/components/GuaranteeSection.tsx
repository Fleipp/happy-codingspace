import { motion } from "framer-motion";
import { CONFIG } from "../config/landing-page";
import { ShieldCheck } from "lucide-react";

export const GuaranteeSection = () => (
  <section className="py-20 px-6 bg-white/50">
    <div className="container mx-auto max-w-4xl">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="bg-white rounded-[32px] p-8 md:p-12 border border-[#D99B92]/20 shadow-sm text-center mb-12"
      >
        <div className="inline-flex items-center justify-center w-16 h-16 bg-[#F8ECE8] rounded-full text-[#B86662] mb-6">
          <ShieldCheck className="w-8 h-8" />
        </div>
        
        <h2 className="text-3xl font-serif font-bold text-[#332A28] mb-4">
          {CONFIG.warranty.title}
        </h2>
        
        <p className="text-[#6F625E] leading-relaxed max-w-2xl mx-auto mb-6">
          {CONFIG.warranty.text}
        </p>

        <div className="inline-block bg-[#F8ECE8] text-[#B86662] px-6 py-2 rounded-full font-bold text-lg mb-12">
          {CONFIG.warranty.days} DE GARANTIA
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-left">
          {CONFIG.warranty.trustElements.map((element, index) => (
            <div key={index} className="space-y-2">
              <div className="flex items-center gap-2 font-bold text-[#332A28]">
                <span>{element.icon}</span>
                <h3>{element.title}</h3>
              </div>
              <p className="text-sm text-[#6F625E] leading-relaxed">
                {element.description}
              </p>
            </div>
          ))}
        </div>
      </motion.div>

      <div className="text-center">
        <motion.a
          href="#ofertas"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="inline-block bg-[#B86662] text-white px-10 py-5 rounded-full font-bold text-lg shadow-lg hover:bg-[#A65551] transition-all duration-300 uppercase tracking-wider"
        >
          QUERO COMEÇAR MEUS 21 DIAS
        </motion.a>
      </div>
    </div>
  </section>
);
