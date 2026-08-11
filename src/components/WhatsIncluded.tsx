import { CONFIG } from "../config/landing-page";
import { CTAButton } from "./ui/CTAButton";
import { motion } from "framer-motion";
import { CheckCircle2 } from "lucide-react";
import mockupAsset from "../assets/mockup-produto.png.asset.json";

export const WhatsIncluded = () => (
  <section className="py-24 bg-[#F8ECE8]/30 px-6">
    <div className="container mx-auto max-w-6xl">
      <div className="grid lg:grid-cols-2 gap-16 items-center">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="relative aspect-square bg-white rounded-[40px] shadow-2xl overflow-hidden border border-[#D99B92]/20 flex items-center justify-center"
        >
          <img 
            src={mockupAsset.url} 
            alt="Mockup do Método Adeus Papada" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-tr from-[#D99B92]/10 to-transparent pointer-events-none" />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="space-y-8"
        >
          <h2 className="text-4xl md:text-5xl font-serif text-[#332A28] leading-tight">
            {CONFIG.included.title}
          </h2>
          
          <ul className="space-y-4">
            {CONFIG.included.items.map((item, i) => (
              <li key={i} className="flex items-center gap-4 text-[#332A28]">
                <CheckCircle2 className="w-5 h-5 text-[#B86662] shrink-0" />
                <span className="font-medium">{item}</span>
              </li>
            ))}
          </ul>

          <div className="pt-6">
            <CTAButton href="#oferta">{CONFIG.included.cta}</CTAButton>
          </div>
        </motion.div>
      </div>
    </div>
  </section>
);
