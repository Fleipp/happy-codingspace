import { CONFIG, CHECKOUT_URL } from "../config/landing-page";
import { CTAButton } from "../components/ui/CTAButton";
import { motion } from "framer-motion";

export const HeroSection = () => (
  <section className="pt-32 pb-20 px-6 container mx-auto">
    <div className="grid lg:grid-cols-2 gap-12 items-center">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="space-y-6"
      >
        <span className="inline-block px-3 py-1 bg-[#F8ECE8] rounded-full text-xs font-semibold tracking-widest uppercase text-[#B86662]">
          {CONFIG.hero.badge}
        </span>
        <h1 className="text-5xl md:text-7xl font-serif text-[#332A28] leading-tight">
          {CONFIG.hero.headline}
        </h1>
        <p className="text-xl text-[#6F625E] max-w-lg">
          {CONFIG.hero.subheadline}
        </p>
        <ul className="space-y-3">
          {CONFIG.hero.benefits.map((benefit, i) => (
            <li key={i} className="flex items-center gap-3 text-[#332A28]">
              <span className="text-[#C9A46A]">✓</span> {benefit}
            </li>
          ))}
        </ul>
        <div className="pt-4">
          <CTAButton href="#oferta">{CONFIG.hero.cta}</CTAButton>
          <p className="mt-4 text-sm text-[#6F625E]">{CONFIG.hero.footer}</p>
        </div>
      </motion.div>
      <div className="relative h-[500px] bg-[#F8ECE8] rounded-[24px] overflow-hidden">
        {/* Placeholder for Image */}
        <div className="absolute inset-0 flex items-center justify-center text-[#D99B92]">
          [Imagem Premium de Autocuidado]
        </div>
      </div>
    </div>
  </section>
);
