import { CONFIG } from "../config/landing-page";
import { motion } from "framer-motion";
import { Heart, X } from "lucide-react";

export const ForWhoSection = () => (
  <section className="py-24 bg-[#FFF9F6] px-6">
    <div className="container mx-auto max-w-5xl">
      <div className="text-center mb-16">
        <h2 className="text-4xl md:text-5xl font-serif text-[#332A28] mb-4">
          {CONFIG.forWho.title}
        </h2>
        <p className="text-lg text-[#6F625E] max-w-2xl mx-auto">
          {CONFIG.forWho.subtitle}
        </p>
      </div>
      
      <div className="grid md:grid-cols-2 gap-8 mb-20">
        {CONFIG.forWho.items.map((item, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
            className="bg-white p-8 rounded-[32px] border border-[#D99B92]/10 shadow-sm flex items-start gap-5 group hover:border-[#D99B92]/30 transition-colors"
          >
            <div className="w-10 h-10 rounded-2xl bg-[#F8ECE8] flex items-center justify-center shrink-0 text-[#D99B92]">
              <Heart className="w-5 h-5 fill-current" />
            </div>
            <div>
              <h3 className="text-xl font-serif font-bold text-[#332A28] mb-2">
                {item.title}
              </h3>
              <p className="text-[#6F625E] leading-relaxed">
                {item.text}
              </p>
            </div>
          </motion.div>
        ))}
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="max-w-3xl mx-auto bg-white/50 backdrop-blur-sm rounded-[40px] p-8 md:p-12 border border-dashed border-[#D99B92]/20"
      >
        <div className="flex flex-col items-center text-center">
          <h3 className="text-xl font-serif font-bold text-[#332A28] mb-8">
            {CONFIG.forWho.notForWho.title}
          </h3>
          
          <div className="space-y-4 mb-10 w-full max-w-xl">
            {CONFIG.forWho.notForWho.items.map((item, i) => (
              <div key={i} className="flex items-center justify-center gap-3 text-[#6F625E]">
                <X className="w-4 h-4 text-[#B86662]/50 shrink-0" />
                <span className="text-base text-center">{item}</span>
              </div>
            ))}
          </div>

          <p className="text-[#6F625E] italic text-sm md:text-base border-t border-[#D99B92]/10 pt-8 w-full">
            {CONFIG.forWho.notForWho.footer}
          </p>
        </div>
      </motion.div>
    </div>
  </section>
);
