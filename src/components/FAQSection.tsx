import { CONFIG } from "../config/landing-page";
import { motion } from "framer-motion";

export const FAQSection = () => (
  <section className="py-24 bg-[#F8ECE8]/20 px-6">
    <div className="container mx-auto max-w-3xl">
      <h2 className="text-4xl md:text-5xl font-serif text-[#332A28] text-center mb-16">
        Perguntas frequentes
      </h2>
      
      <div className="space-y-4">
        {CONFIG.faq.map((item, i) => (
          <motion.details
            key={i}
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.05 }}
            className="group bg-white rounded-[20px] border border-[#D99B92]/10 shadow-sm overflow-hidden"
          >
            <summary className="flex justify-between items-center p-6 cursor-pointer list-none">
              <span className="font-serif font-bold text-[#332A28] pr-4">{item.q}</span>
              <span className="text-[#B86662] transition-transform group-open:rotate-180">↓</span>
            </summary>
            <div className="px-6 pb-6 text-[#6F625E] text-sm leading-relaxed border-t border-[#F8ECE8]">
              {item.a}
            </div>
          </motion.details>
        ))}
      </div>
    </div>
  </section>
);
