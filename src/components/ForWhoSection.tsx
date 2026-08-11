import { CONFIG } from "../config/landing-page";
import { motion } from "framer-motion";
import { Check } from "lucide-react";

export const ForWhoSection = () => (
  <section className="py-24 bg-white px-6">
    <div className="container mx-auto max-w-4xl">
      <div className="bg-[#F8ECE8]/30 rounded-[40px] p-8 md:p-16 border border-[#D99B92]/10">
        <h2 className="text-4xl md:text-5xl font-serif text-[#332A28] text-center mb-12">
          {CONFIG.forWho.title}
        </h2>
        
        <div className="grid md:grid-cols-2 gap-6 mb-12">
          {CONFIG.forWho.items.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05 }}
              className="flex items-start gap-4"
            >
              <div className="mt-1 w-6 h-6 rounded-full bg-[#B86662] flex items-center justify-center shrink-0">
                <Check className="w-3.5 h-3.5 text-white" />
              </div>
              <p className="text-[#332A28] font-medium leading-relaxed">{item}</p>
            </motion.div>
          ))}
        </div>

        <motion.p 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center text-[#6F625E] italic border-t border-[#D99B92]/20 pt-8"
        >
          {CONFIG.forWho.footer}
        </motion.p>
      </div>
    </div>
  </section>
);
