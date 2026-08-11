import { CONFIG } from "../config/landing-page";
import { motion } from "framer-motion";
import { Star } from "lucide-react";

export const TestimonialsSection = () => (
  <section className="py-24 bg-white px-6 overflow-hidden">
    <div className="container mx-auto max-w-6xl">
      <h2 className="text-4xl md:text-5xl font-serif text-[#332A28] text-center mb-16">
        Experiências de quem já começou
      </h2>
      
      <div className="grid md:grid-cols-3 gap-8">
        {CONFIG.testimonials.map((t, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
            className="p-8 bg-[#FFF9F6] rounded-[24px] border border-[#F8ECE8] shadow-sm flex flex-col h-full"
          >
            <div className="flex gap-1 mb-6 text-[#C9A46A]">
              {[...Array(t.stars)].map((_, j) => (
                <Star key={j} className="w-4 h-4 fill-current" />
              ))}
            </div>
            
            <p className="text-[#332A28] italic mb-8 flex-grow leading-relaxed">
              "{t.text}"
            </p>
            
            <div className="pt-6 border-t border-[#F8ECE8]">
              <p className="font-bold text-[#332A28]">{t.name}</p>
              <p className="text-xs text-[#6F625E] uppercase tracking-widest mt-1">{t.location}</p>
            </div>
            
            {/* Developer Note: Substituir estes placeholders exclusivamente por depoimentos reais autorizados. */}
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);
