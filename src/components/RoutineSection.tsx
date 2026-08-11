import { CONFIG } from "../config/landing-page";
import { motion } from "framer-motion";

export const RoutineSection = () => (
  <section className="py-24 bg-white px-6">
    <div className="container mx-auto max-w-6xl">
      <h2 className="text-4xl md:text-5xl font-serif text-[#332A28] text-center mb-16">
        {CONFIG.routine.title}
      </h2>
      
      <div className="grid md:grid-cols-3 gap-8">
        {CONFIG.routine.cards.map((card, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
            className="space-y-6"
          >
            <div className="aspect-[3/4] bg-[#F8ECE8] rounded-[24px] overflow-hidden flex items-center justify-center text-[#D99B92] border border-[#D99B92]/10">
              [Imagem Ritual {i + 1}]
            </div>
            <div className="text-center space-y-2">
              <h3 className="text-xl font-serif font-bold text-[#332A28]">{card.title}</h3>
              <p className="text-sm text-[#6F625E] leading-relaxed">{card.text}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);
