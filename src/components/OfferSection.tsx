import { CONFIG } from "../config/landing-page";
import { CTAButton } from "./ui/CTAButton";
import { motion } from "framer-motion";

export const OfferSection = () => (
  <section id="ofertas" className="py-24 bg-white px-6">
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
            {offer.tag && (
              <div className="bg-[#D99B92] py-2 text-white text-[10px] font-bold tracking-[0.2em] uppercase">
                {offer.tag}
              </div>
            )}

            <div className="p-8 md:p-10 space-y-6 flex-grow flex flex-col">
              <div className="space-y-4">
                <h3 className="text-2xl font-serif font-black text-[#332A28] uppercase tracking-wider">
                  {offer.title}
                </h3>
                
                <div className="py-4">
                  <div className="flex items-center justify-center gap-1">
                    <span className="text-2xl font-serif font-bold text-[#332A28]">R$</span>
                    <span className="text-6xl md:text-7xl font-serif font-bold text-[#332A28]">
                      {offer.price.current}
                    </span>
                  </div>
                  <span className="text-xs text-[#6F625E] mt-2 block font-medium uppercase tracking-widest">
                    {offer.price.installments}
                  </span>
                </div>
              </div>
              
              <div className="space-y-6 flex-grow">
                <ul className="space-y-3 text-left">
                  {offer.items.map((item, i) => (
                    <li key={i} className="flex items-start gap-3 text-[#332A28] text-sm">
                      <span className="text-[#D99B92] font-bold text-lg leading-none">✓</span>
                      <span className={item.includes("EXCLUSIVO") ? "font-bold text-[#B86662]" : ""}>{item}</span>
                    </li>
                  ))}
                </ul>

                {offer.bonus && (
                  <div className="text-left bg-[#FFF9F6] p-5 rounded-2xl border border-[#D99B92]/20">
                    <p className="text-xs font-bold text-[#B86662] uppercase tracking-widest mb-3">+ Você também recebe:</p>
                    <ul className="space-y-2">
                      {offer.bonus.map((bonusItem, i) => (
                        <li key={i} className="flex items-center gap-2 text-[#332A28] text-sm">
                          <span className="w-1.5 h-1.5 rounded-full bg-[#D99B92]"></span>
                          {bonusItem}
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>

              <div className="pt-6">
                <CTAButton 
                  href={offer.checkoutUrl} 
                  className="w-full text-base md:text-lg py-6"
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