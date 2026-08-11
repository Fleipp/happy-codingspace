import { CONFIG } from "../config/landing-page";
import { motion } from "framer-motion";
import ritual1Asset from "@/assets/ritual-1.png.asset.json";
import ritual2Asset from "@/assets/ritual-2.png.asset.json";
import ritual3Asset from "@/assets/ritual-3.png.asset.json";

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
            <div className="aspect-[3/4] bg-[#F8ECE8] rounded-[24px] overflow-hidden flex items-center justify-center text-[#D99B92] border border-[#D99B92]/10 relative group">
              {i === 0 ? (
                <img 
                  src={ritual1Asset.url} 
                  alt={card.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
              ) : i === 1 ? (
                <img 
                  src={ritual2Asset.url} 
                  alt={card.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
              ) : i === 2 ? (
                <img 
                  src={ritual3Asset.url} 
                  alt={card.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
              ) : (
                <span>[Imagem Ritual {i + 1}]</span>
              )}
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
