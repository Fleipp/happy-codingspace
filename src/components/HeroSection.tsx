import { CONFIG, CHECKOUT_URL } from "../config/landing-page";
import { CTAButton } from "./ui/CTAButton";
import { motion } from "framer-motion";
import heroAsset from "../hero-beauty-new.png";

export const HeroSection = () => (

  <section className="pt-16 pb-12 px-6 container mx-auto">
    <div className="grid lg:grid-cols-[1.1fr_0.9fr] gap-8 lg:gap-8 items-center">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="space-y-6 flex flex-col items-center lg:items-start text-center lg:text-left order-1 lg:order-1"
      >
        <span className="inline-block px-3 py-1 bg-[#F8ECE8] rounded-full text-xs font-semibold tracking-widest uppercase text-[#B86662]">
          {CONFIG.hero.badge}
        </span>
        <h1 className="text-5xl md:text-7xl font-serif font-black text-[#332A28] leading-[1.1]">
          {CONFIG.hero.headline}
        </h1>
        <p className="text-xl md:text-2xl text-[#332A28] max-w-xl font-bold leading-relaxed contrast-125">
          {CONFIG.hero.subheadline}
        </p>
        
        {/* Rapid Benefits */}
        <div className="flex flex-wrap justify-center lg:justify-start gap-x-4 gap-y-2 text-[#B86662] font-semibold text-sm md:text-base">
          {CONFIG.hero.benefits.map((benefit, i) => (
            <span key={i} className="whitespace-nowrap">{benefit}</span>
          ))}
        </div>

        <div className="pt-4 flex flex-col items-center lg:items-start w-full">
          <CTAButton 
            href="#ofertas" 
            className="w-full md:w-auto px-12 py-6 text-xl shadow-[0_10px_30px_rgba(217,155,146,0.4)] hover:shadow-[0_15px_40px_rgba(217,155,146,0.6)] transition-all duration-300"
          >
            {CONFIG.hero.cta}
          </CTAButton>
          <p className="mt-4 text-sm md:text-base font-semibold text-[#6F625E]">{CONFIG.hero.footer}</p>
        </div>
      </motion.div>

      <motion.div 
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="relative h-[400px] lg:h-[750px] w-full bg-white rounded-[32px] overflow-hidden shadow-[0_20px_50px_rgba(0,0,0,0.1)] border border-[#D99B92]/20 group order-3 lg:order-2"
      >
        <motion.img 
          initial={{ scale: 1.1 }}
          animate={{ scale: 1 }}
          transition={{ duration: 1.5, ease: "easeOut" }}
          src={heroAsset.url} 
          alt="Mulher praticando autocuidado facial" 
          className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#D99B92]/40 via-transparent to-[#D99B92]/10 z-10 mix-blend-multiply opacity-60" />
        
        {/* Luminous overlay for a "glow" effect */}
        <div className="absolute inset-0 bg-white/5 z-20 pointer-events-none" />

        {/* Floating decorative elements */}
        <motion.div 
          animate={{ 
            y: [0, -15, 0],
            opacity: [0.3, 0.6, 0.3] 
          }}
          transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
          className="absolute -bottom-20 -right-20 w-80 h-80 bg-[#D99B92]/30 rounded-full blur-3xl z-30" 
        />
      </motion.div>
    </div>
  </section>
);

