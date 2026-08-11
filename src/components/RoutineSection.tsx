import { CONFIG } from "../config/landing-page";
import { motion } from "framer-motion";
import ritual1Asset from "@/assets/ritual-1.png.asset.json";
import ritual2Asset from "@/assets/ritual-2.png.asset.json";
import ritual3Asset from "@/assets/ritual-3.png.asset.json";

const ritualImages = [ritual1Asset.url, ritual2Asset.url, ritual3Asset.url];

export const RoutineSection = () => (
  <section className="py-24 bg-white px-6 overflow-hidden">
    <div className="container mx-auto max-w-6xl">
      <div className="text-center max-w-2xl mx-auto mb-16">
        <h2 className="text-4xl md:text-5xl font-serif text-[#332A28] mb-4">
          {CONFIG.routine.title}
        </h2>
        <p className="text-lg text-[#6F625E]">
          {CONFIG.routine.subtitle}
        </p>
      </div>
      
      <div className="relative">
        {/* Connection line for desktop */}
        <div className="hidden md:block absolute top-[180px] left-[15%] right-[15%] h-px bg-gradient-to-r from-transparent via-[#D99B92]/30 to-transparent z-0" />
        
        <div className="grid md:grid-cols-3 gap-12 md:gap-8 relative z-10">
          {CONFIG.routine.steps.map((step, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="flex flex-col items-center"
            >
              {/* Number and Step label */}
              <div className="mb-6 flex flex-col items-center">
                <span className="text-gold font-serif text-2xl mb-2">{step.number}</span>
                
                {/* Image Container - Enlarged and standardized */}
                <div className="w-full aspect-square md:aspect-[4/5] bg-[#F8ECE8] rounded-[32px] overflow-hidden flex items-center justify-center border border-[#D99B92]/10 relative group shadow-sm">
                  <img 
                    src={ritualImages[i]} 
                    alt={step.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  {/* Subtle overlay number */}
                  <div className="absolute top-4 right-4 w-8 h-8 rounded-full bg-white/80 backdrop-blur-sm flex items-center justify-center text-[#D99B92] text-xs font-bold z-20 md:hidden">
                    {step.number}
                  </div>
                </div>
              </div>

              {/* Text content */}
              <div className="text-center space-y-4 px-4">
                <h3 className="text-2xl font-serif font-bold text-[#332A28] min-h-[1.5em] flex items-center justify-center">
                  {step.title}
                </h3>
                <p className="text-base md:text-lg text-[#6F625E] leading-relaxed max-w-[280px] mx-auto">
                  {step.text}
                </p>
              </div>

              {/* Mobile Arrow */}
              {i < 2 && (
                <div className="md:hidden mt-8 text-[#D99B92]/40">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M12 5v14M19 12l-7 7-7-7"/>
                  </svg>
                </div>
              )}
            </motion.div>
          ))}
        </div>
      </div>

      {/* Footer text */}
      <motion.div 
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 0.5 }}
        className="mt-20 text-center max-w-2xl mx-auto"
      >
        <p className="text-lg italic text-[#6F625E] leading-relaxed border-t border-[#D99B92]/10 pt-8">
          "{CONFIG.routine.footer}"
        </p>
      </motion.div>
    </div>
  </section>
);
