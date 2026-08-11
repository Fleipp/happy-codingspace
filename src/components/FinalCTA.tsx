import { CONFIG } from "../config/landing-page";
import { CTAButton } from "./ui/CTAButton";
import { motion } from "framer-motion";

export const FinalCTA = () => (
  <section className="py-24 px-6 bg-[#F8ECE8]/40 overflow-hidden relative">
    <div className="container mx-auto max-w-4xl text-center relative z-10 space-y-8">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="space-y-6"
      >
        <h2 className="text-4xl md:text-6xl font-serif text-[#332A28] leading-tight">
          Seus 21 dias podem começar hoje.
        </h2>
        <p className="text-xl text-[#6F625E] max-w-2xl mx-auto leading-relaxed">
          Transforme alguns minutos da sua rotina em um momento dedicado ao seu autocuidado.
        </p>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 0.2 }}
        className="space-y-4"
      >
        <CTAButton href="#oferta">QUERO COMEÇAR AGORA</CTAButton>
        <p className="text-xs text-[#6F625E] font-medium tracking-wide flex items-center justify-center gap-2">
          <span>🔒 Pagamento seguro</span>
          <span>•</span>
          <span>Acesso digital</span>
          <span>•</span>
          <span>{CONFIG.warranty.days} GARANTIA</span>
        </p>
      </motion.div>
    </div>
    
    {/* Abstract Background Shapes */}
    <div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/4 w-96 h-96 bg-[#D99B92]/10 rounded-full blur-3xl pointer-events-none" />
    <div className="absolute bottom-0 left-0 translate-y-1/2 -translate-x-1/4 w-96 h-96 bg-[#C9A46A]/10 rounded-full blur-3xl pointer-events-none" />
  </section>
);
