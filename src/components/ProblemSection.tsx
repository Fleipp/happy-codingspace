import { CONFIG } from "../config/landing-page";
import { CTAButton } from "./ui/CTAButton";
import { motion } from "framer-motion";

export const ProblemSection = () => (
  <section className="py-16 bg-white px-6" id="problema">
    <div className="container mx-auto max-w-5xl text-center space-y-10">
      <motion.div 
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        className="space-y-4"
      >
        <h2 className="text-3xl md:text-4xl font-serif text-[#332A28] px-4">
          {CONFIG.problem.title}
        </h2>
        <p className="text-base md:text-lg text-[#332A28] max-w-3xl mx-auto font-medium">
          {CONFIG.problem.intro}
        </p>
      </motion.div>

      <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
        {CONFIG.problem.cards.map((card: any, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
            className="p-6 bg-[#FFF9F6] rounded-[24px] text-center border border-[#D99B92]/10 shadow-sm hover:shadow-md transition-all group"
          >
            <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center mx-auto mb-4 shadow-sm border border-[#D99B92]/5 group-hover:scale-110 transition-transform">
              <span className="text-2xl">{card.emoji}</span>
            </div>
            <h3 className="text-[#332A28] font-bold text-lg mb-2">{card.title}</h3>
            <p className="text-[#6F625E] text-sm leading-relaxed font-medium contrast-125">
              {card.text}
            </p>
          </motion.div>
        ))}
      </div>

      <div className="pt-4 space-y-6">
        <p className="text-[#332A28] font-bold text-lg">
          {CONFIG.problem.footer}
        </p>
        <CTAButton href="#metodo" variant="secondary" className="scale-105">
          {CONFIG.problem.cta}
        </CTAButton>
      </div>
    </div>
  </section>
);
