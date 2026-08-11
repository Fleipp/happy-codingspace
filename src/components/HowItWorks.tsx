import { CONFIG } from "../config/landing-page";
import { motion } from "framer-motion";

export const HowItWorks = () => (
  <section className="py-24 bg-white px-6">
    <div className="container mx-auto max-w-4xl text-center">
      <h2 className="text-4xl md:text-5xl font-serif text-[#332A28] mb-16">
        {CONFIG.howItWorks.title}
      </h2>
      
      <div className="relative">
        {/* Timeline Desktop Line */}
        <div className="hidden md:block absolute top-1/2 left-0 right-0 h-0.5 bg-[#F8ECE8] -translate-y-1/2 z-0" />
        
        <div className="grid md:grid-cols-3 gap-12 relative z-10">
          {CONFIG.howItWorks.steps.map((step, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.2 }}
              className="space-y-6"
            >
              <div className="w-16 h-16 bg-[#B86662] text-white rounded-full flex items-center justify-center mx-auto text-xl font-serif font-bold border-4 border-white shadow-md">
                {i + 1}
              </div>
              <div className="space-y-2">
                <span className="text-[10px] font-bold tracking-widest text-[#B86662] uppercase">{step.label}</span>
                <h3 className="text-xl font-serif font-bold text-[#332A28]">{step.title}</h3>
                <p className="text-sm text-[#6F625E] leading-relaxed">{step.text}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      <div className="mt-20 p-6 bg-[#F8ECE8]/20 rounded-2xl inline-block">
        <p className="text-xs text-[#6F625E] italic">
          “{CONFIG.howItWorks.disclaimer}”
        </p>
      </div>
    </div>
  </section>
);
