import { CONFIG, CHECKOUT_URL } from "../config/landing-page";
import { CTAButton } from "./ui/CTAButton";
import { motion } from "framer-motion";

export const OfferSection = () => (
  <section id="oferta" className="py-24 bg-white px-6">
    <div className="container mx-auto max-w-4xl text-center space-y-12">
      <div className="space-y-4">
        <h2 className="text-4xl md:text-5xl font-serif text-[#332A28]">
          {CONFIG.offer.title}
        </h2>
        <p className="text-lg text-[#6F625E]">
          {CONFIG.offer.subtitle}
        </p>
      </div>

      <motion.div 
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="bg-[#FFF9F6] border-2 border-[#D99B92] rounded-[32px] overflow-hidden shadow-2xl relative"
      >
        <div className="bg-[#D99B92] py-4 text-white text-sm font-bold tracking-widest uppercase">
          Oferta Exclusiva
        </div>
        
        <div className="p-8 md:p-12 space-y-8">
          <h3 className="text-2xl font-serif font-bold text-[#332A28]">
            {CONFIG.productName}
          </h3>
          
          <ul className="max-w-md mx-auto space-y-4 text-left">
            {CONFIG.offer.items.map((item, i) => (
              <li key={i} className="flex items-center gap-3 text-[#332A28]">
                <span className="w-5 h-5 bg-[#D99B92]/20 text-[#B86662] rounded-full flex items-center justify-center text-[10px] shrink-0">✓</span>
                <span>{item}</span>
              </li>
            ))}
          </ul>

          <div className="py-6 border-t border-[#D99B92]/20">
            <p className="text-[#6F625E] line-through text-sm mb-1">
              De: {CONFIG.offer.price.original}
            </p>
            <div className="flex flex-col items-center">
              <span className="text-sm text-[#B86662] font-bold uppercase tracking-widest">Por apenas</span>
              <span className="text-5xl md:text-6xl font-serif font-bold text-[#332A28] mt-2">
                R$ {CONFIG.offer.price.current}
              </span>
              <span className="text-lg text-[#6F625E] mt-2">
                ou {CONFIG.offer.price.installments}
              </span>
            </div>
          </div>

          <div className="space-y-4">
            <CTAButton href={CHECKOUT_URL} className="w-full max-w-sm">
              {CONFIG.offer.cta}
            </CTAButton>
            <div className="flex items-center justify-center gap-2 text-xs text-[#6F625E] font-medium">
              <span>🔒 {CONFIG.offer.footer}</span>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  </section>
);
