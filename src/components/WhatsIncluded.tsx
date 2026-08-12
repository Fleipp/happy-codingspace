import { CONFIG } from "../config/landing-page";
import { CTAButton } from "./ui/CTAButton";
import { motion } from "framer-motion";
import { CheckCircle2 } from "lucide-react";
import mockupAsset from "../organization-beauty-v2.png";

export const WhatsIncluded = () => (
  <section className="py-20 bg-[#F8ECE8]/30 px-6 overflow-hidden">
    <div className="container mx-auto max-w-6xl">
      <div className="text-center max-w-3xl mx-auto mb-12 lg:mb-16">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-3xl md:text-4xl lg:text-5xl font-serif text-[#332A28] leading-tight mb-6"
        >
          {CONFIG.included.title}
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="text-[#6F625E] text-lg md:text-xl leading-relaxed"
        >
          {CONFIG.included.subtitle}
        </motion.p>
      </div>

      <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
        {/* Mockup - 50% width on desktop, first on mobile */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="w-full lg:w-1/2 order-1 lg:order-1"
        >
          <div className="relative group">
            {/* Decorative background for mockup */}
            <div className="absolute -inset-4 bg-gradient-to-tr from-[#D99B92]/20 to-[#C9A46A]/10 rounded-[40px] blur-2xl opacity-50 group-hover:opacity-70 transition-opacity duration-500" />
            
            <div className="relative aspect-[4/3] lg:aspect-square bg-white rounded-[32px] md:rounded-[40px] shadow-2xl overflow-hidden border border-[#D99B92]/20 flex items-center justify-center transform group-hover:scale-[1.02] transition-transform duration-500">
              <img 
                src={mockupAsset} 
                alt="Mockup do Método Adeus Papada" 
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/5 via-transparent to-transparent pointer-events-none" />
            </div>
          </div>
        </motion.div>

        {/* List of features */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="w-full lg:w-1/2 space-y-8 order-2 lg:order-2"
        >
          <div>
            <h3 className="text-xl font-bold text-[#332A28] mb-6 uppercase tracking-wider">
              O que você encontra dentro do método:
            </h3>
            
            <ul className="space-y-6">
              {CONFIG.included.items.map((item: any, i: number) => (
                <li key={i} className="flex gap-4 group">
                  <div className="mt-1">
                    <CheckCircle2 className="w-5 h-5 text-[#B86662] shrink-0" />
                  </div>
                  <div>
                    <h4 className="font-bold text-[#332A28] leading-tight mb-1 group-hover:text-[#B86662] transition-colors">
                      {item.title}
                    </h4>
                    <p className="text-[#6F625E] text-sm md:text-base leading-relaxed">
                      {item.text}
                    </p>
                  </div>
                </li>
              ))}
            </ul>
          </div>

          <div className="space-y-6 pt-4">
            <p className="text-[#B86662] font-bold text-lg md:text-xl italic border-l-4 border-[#B86662]/30 pl-4 py-2">
              “{CONFIG.included.highlight}”
            </p>
            
            <div className="pt-2">
              <CTAButton href="#oferta" className="w-full md:w-auto px-10 text-lg shadow-xl hover:shadow-2xl transition-all">
                {CONFIG.included.cta}
              </CTAButton>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  </section>
);
