import { CONFIG } from "../config/landing-page";
import { motion } from "framer-motion";

export const MethodSection = () => (
  <section className="py-24 bg-[#F8ECE8]/30 px-6 relative overflow-hidden">
    <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-[#D99B92]/20 to-transparent" />

    <div className="container mx-auto max-w-5xl">
      <div className="text-center space-y-4 mb-16">
        <span className="inline-block px-3 py-1 bg-[#D99B92]/20 rounded-full text-xs font-semibold tracking-widest uppercase text-[#B86662]">
          {CONFIG.method.badge}
        </span>
        <h2 className="text-4xl md:text-5xl font-serif text-[#332A28]">
          {CONFIG.method.title}
        </h2>
        <p className="text-lg text-[#6F625E] max-w-2xl mx-auto">
          {CONFIG.method.description}
        </p>
      </div>

      <div className="grid md:grid-cols-3 gap-8">
        {CONFIG.method.steps.map((step, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
            className="bg-white p-8 rounded-[24px] shadow-sm border border-[#D99B92]/10 flex flex-col items-center text-center space-y-4"
          >
            <div className="w-12 h-12 bg-[#F8ECE8] rounded-full flex items-center justify-center text-[#B86662] font-serif font-bold text-xl">
              {step.number}
            </div>
            <h3 className="text-xl font-serif font-bold text-[#332A28]">{step.title}</h3>
            <p className="text-[#6F625E] text-sm leading-relaxed">{step.text}</p>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);
