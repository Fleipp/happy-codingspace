import { CONFIG } from "../config/landing-page";
import { motion } from "framer-motion";
import { Star, Quote } from "lucide-react";
import { Button } from "./ui/button";

export const TestimonialsSection = () => (
  <section className="py-24 bg-white/50 px-6 relative overflow-hidden">
    <div className="container mx-auto max-w-6xl relative z-10">
      <div className="text-center mb-16">
        <h2 className="text-4xl md:text-5xl font-serif text-[#332A28] mb-4">
          {CONFIG.testimonials.title}
        </h2>
        <p className="text-[#6F625E] text-lg max-w-2xl mx-auto">
          {CONFIG.testimonials.subtitle}
        </p>
      </div>
      
      <div className="grid md:grid-cols-3 gap-6 mb-16">
        {CONFIG.testimonials.items.map((t, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
            className="p-8 bg-white/80 backdrop-blur-sm rounded-[32px] border border-[#F8ECE8] shadow-sm flex flex-col h-full relative"
          >
            <Quote className="absolute top-6 right-6 w-12 h-12 text-[#D99B92]/10 pointer-events-none" />
            
            <div className="flex gap-1 mb-6 text-[#C9A46A]">
              {[...Array(t.stars)].map((_, j) => (
                <Star key={j} className="w-4 h-4 fill-current" />
              ))}
            </div>
            
            <div className="mb-8 flex-grow">
              <h3 className="text-xl md:text-2xl font-serif text-[#332A28] mb-4 leading-tight">
                "{t.highlight}"
              </h3>
              <p className="text-[#6F625E] text-sm md:text-base leading-relaxed">
                {t.text}
              </p>
            </div>
            
            <div className="pt-6 border-t border-[#F8ECE8] flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-[#F8ECE8] flex items-center justify-center text-[#D99B92] font-serif text-lg">
                {t.name.charAt(0)}
              </div>
              <div>
                <p className="font-bold text-[#332A28]">— {t.name}</p>
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      <div className="text-center flex flex-col items-center gap-6">
        <p className="text-[#332A28] font-serif text-xl italic">
          {CONFIG.testimonials.footer}
        </p>
        <Button 
          onClick={() => document.getElementById('ofertas')?.scrollIntoView({ behavior: 'smooth' })}
          className="bg-[#D99B92] hover:bg-[#B86662] text-white px-10 py-7 text-lg rounded-full transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105"
        >
          {CONFIG.testimonials.cta}
        </Button>
      </div>
    </div>
  </section>
);