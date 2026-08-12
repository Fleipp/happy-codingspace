import { CONFIG } from "../config/landing-page";
import { motion } from "framer-motion";

export const HowItWorks = () => (
  <section className="py-20 bg-white px-6">
    <div className="container mx-auto max-w-5xl text-center">
      <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif text-[#332A28] mb-12">
        {CONFIG.howItWorks.title}
      </h2>
      
      <div className="relative">
        {/* Connection arrows for desktop */}
        <div className="hidden md:flex absolute top-12 left-0 right-0 justify-around pointer-events-none px-[15%]">
          <div className="w-full flex justify-center">
            <svg width="60" height="20" viewBox="0 0 60 20" fill="none" className="text-[#D99B92]/30">
              <path d="M0 10H58M58 10L50 2M58 10L50 18" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </div>
          <div className="w-full flex justify-center">
            <svg width="60" height="20" viewBox="0 0 60 20" fill="none" className="text-[#D99B92]/30">
              <path d="M0 10H58M58 10L50 2M58 10L50 18" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-8 md:gap-4 relative z-10">
          {CONFIG.howItWorks.steps.map((step, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15 }}
              className="space-y-4 px-4"
            >
              <div className="font-serif text-5xl md:text-6xl text-[#D99B92]/20 font-black mb-[-20px]">
                {step.label}
              </div>
              <div className="space-y-3">
                <h3 className="text-xl md:text-2xl font-serif font-bold text-[#332A28] leading-tight">
                  {step.title}
                </h3>
                <p className="text-base text-[#6F625E] leading-relaxed max-w-xs mx-auto">
                  {step.text}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      <div className="mt-16 flex flex-wrap justify-center gap-6 md:gap-12">
        {['Acesso online', 'Leia pelo celular', 'Faça no seu ritmo'].map((benefit, idx) => (
          <div key={idx} className="flex items-center gap-2 text-[#B86662] font-semibold text-sm md:text-base">
            <span className="text-lg">✓</span>
            <span>{benefit}</span>
          </div>
        ))}
      </div>
    </div>
  </section>
);
