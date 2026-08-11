import { CONFIG } from "../config/landing-page";
import { CTAButton } from "./ui/CTAButton";
import { motion } from "framer-motion";

export const ProblemSection = () => (
  <section className="py-24 bg-white px-6">
    <div className="container mx-auto max-w-4xl text-center space-y-12">
      <motion.div 
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        className="space-y-4"
      >
        <h2 className="text-4xl md:text-5xl font-serif text-[#332A28]">
          {CONFIG.problem.title}
        </h2>
        <p className="text-lg text-[#6F625E] max-w-2xl mx-auto">
          {CONFIG.problem.intro}
        </p>
      </motion.div>

      <div className="grid sm:grid-cols-2 gap-6">
        {CONFIG.problem.cards.map((card, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
            className="p-8 bg-white rounded-[24px] text-left border border-[#F8ECE8] shadow-md hover:shadow-lg transition-shadow"
          >
            <span className="text-3xl mb-4 block">{card.emoji}</span>
            <p className="text-[#332A28] font-medium">{card.text}</p>
          </motion.div>
        ))}
      </div>

      <div className="pt-6 space-y-6">
        <p className="text-[#6F625E] font-medium italic">
          Foi pensando em transformar essa intenção em uma rotina organizada que nasceu o <span className="font-black text-[#332A28]">MÉTODO ADEUS PAPADA EM 21 DIAS</span>.
        </p>
        <CTAButton href="#oferta" variant="secondary">
          {CONFIG.problem.cta}
        </CTAButton>
      </div>
    </div>
  </section>
);
