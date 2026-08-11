import { CONFIG } from "../config/landing-page";
import { CTAButton } from "./ui/CTAButton";
import { motion } from "framer-motion";

export const OfferSection = () => (
  <section id="oferta" className="py-24 bg-white px-6">
    <div className="container mx-auto max-w-6xl text-center space-y-12">
      <div className="space-y-4">
        <h2 className="text-4xl md:text-5xl font-serif text-[#332A28]">
          {CONFIG.offerSection.title}
        </h2>
        <p className="text-lg text-[#6F625E]">
          {CONFIG.offerSection.subtitle}
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
        {CONFIG.offers.map((offer) => (
          <motion.div 
            key={offer.id}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className={`bg-white border-2 ${offer.featured ? 'border-[#D99B92] shadow-[0_20px_50px_rgba(217,155,146,0.25)]' : 'border-[#D99B92]/20 shadow-lg'} rounded-[40px] overflow-hidden relative flex flex-col`}
          >
            {offer.featured && (
              <div className="bg-gradient-to-r from-[#D99B92] to-[#B86662] py-3 text-white text-xs font-bold tracking-[0.2em] uppercase">
                Mais Escolhido
              </div>
            )}

            <div className="p-8 md:p-10 space-y-6 flex-grow flex flex-col">
              <div className="space-y-2">
                <h3 className="text-2xl font-serif font-black text-[#332A28]">
                  {offer.title}
                </h3>
                <p className="text-sm text-[#6F625E]">
                  {offer.subtitle}
                </p>
              </div>
              
              <ul className="space-y-4 text-left py-6 flex-grow">
                {offer.items.map((item, i) => (
                  <li key={i} className="flex items-start gap-3 text-[#332A28] text-sm">
                    <span className="w-5 h-5 bg-[#D99B92]/20 text-[#B86662] rounded-full flex items-center justify-center text-[10px] shrink-0 mt-0.5">✓</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>

              <div className="py-6 border-t border-[#D99B92]/20">
                <p className="text-[#6F625E] line-through text-xs mb-1">
                  De: {offer.price.original}
                </p>
                <div className="flex flex-col items-center">
                  <span className="text-xs text-[#B86662] font-bold uppercase tracking-widest">Por apenas</span>
                  <div className="flex items-baseline gap-1 mt-1">
                    <span className="text-2xl font-serif font-bold text-[#332A28]">R$</span>
                    <span className="text-5xl font-serif font-bold text-[#332A28]">
                      {offer.price.current}
                    </span>
                  </div>
                  <span className="text-sm text-[#6F625E] mt-1 font-medium">
                    {offer.price.installments}
                  </span>
                </div>
              </div>

              <div className="space-y-4">
                <CTAButton 
                  href={offer.checkoutUrl} 
                  className="w-full"
                  variant={offer.featured ? 'primary' : 'secondary'}
                >
                  {offer.cta}
                </CTAButton>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
      
      <div className="flex items-center justify-center gap-2 text-xs text-[#6F625E] font-medium pt-4">
        <span>🔒 {CONFIG.offerSection.footer}</span>
      </div>
    </div>
  </section>
);