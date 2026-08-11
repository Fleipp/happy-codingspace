import { motion } from "framer-motion";

export const FinalCTA = () => (
  <section className="py-20 px-6 bg-[#F8ECE8]/30 relative overflow-hidden">
    <div className="container mx-auto max-w-4xl text-center relative z-10">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="space-y-6"
      >
        <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif text-[#332A28] leading-tight">
          Seu momento de autocuidado pode começar hoje.
        </h2>
        <p className="text-lg md:text-xl text-[#6F625E] max-w-2xl mx-auto leading-relaxed">
          Comece sua jornada de 21 dias com uma rotina guiada, organizada e simples de acompanhar.
        </p>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 0.2 }}
        className="mt-10 space-y-4"
      >
        <motion.a
          href="#ofertas"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="inline-block bg-[#B86662] text-white px-12 py-6 rounded-full font-bold text-xl shadow-xl hover:bg-[#A65551] transition-all duration-300 uppercase tracking-wider"
        >
          QUERO COMEÇAR MEUS 21 DIAS
        </motion.a>
        <p className="text-sm text-[#6F625E]">
          Acesso após a confirmação do pagamento.
        </p>
      </motion.div>
    </div>
    
    {/* Subtle decorative shapes */}
    <div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/4 w-96 h-96 bg-[#D99B92]/5 rounded-full blur-3xl pointer-events-none" />
    <div className="absolute bottom-0 left-0 translate-y-1/2 -translate-x-1/4 w-96 h-96 bg-[#C9A46A]/5 rounded-full blur-3xl pointer-events-none" />
  </section>
);
