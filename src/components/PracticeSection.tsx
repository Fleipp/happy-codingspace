import { CONFIG } from "../config/landing-page";
import { motion } from "framer-motion";
import { BookOpen, Shield, Calendar } from "lucide-react";

export const PracticeSection = () => {
  const content = {
    title: "O que você vai praticar durante os 21 dias?",
    subtitle: "Uma sequência guiada para transformar alguns minutos do seu dia em um momento de cuidado com essa região.",
    pilars: [
      {
        number: "01",
        title: "Orientação detalhada",
        highlight: "detalhada",
        text: "Acompanhe orientações passo a passo para realizar os movimentos propostos para a região.",
        icon: <BookOpen className="w-8 h-8" />
      },
      {
        number: "02",
        title: "Cuidado com a região",
        highlight: "cuidado",
        text: "Inclua práticas de autocuidado direcionadas à região abaixo do queixo dentro da sua rotina.",
        icon: <Shield className="w-8 h-8" />
      },
      {
        number: "03",
        title: "Constância por 21 dias",
        highlight: "21 dias",
        text: "Siga uma sequência organizada para saber o que acompanhar em cada etapa, sem precisar montar uma rotina sozinha.",
        icon: <Calendar className="w-8 h-8" />
      }
    ],
    footer: "Você não precisa decidir o que fazer a cada dia. A sequência já estará organizada para você acompanhar."
  };

  const renderTitle = (title: string, highlight: string) => {
    const parts = title.split(highlight);
    return (
      <>
        {parts[0]}
        <span className="text-[#B86662]">{highlight}</span>
        {parts[1]}
      </>
    );
  };

  return (
    <section className="py-24 bg-white px-6 relative overflow-hidden">
      {/* Decorative background element to differentiate */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-4xl aspect-square bg-[#F8ECE8]/20 rounded-full blur-[120px] pointer-events-none" />

      <div className="container mx-auto max-w-6xl relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-serif text-[#332A28] mb-6 leading-tight"
          >
            {content.title}
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-lg md:text-xl text-[#6F625E] leading-relaxed"
          >
            {content.subtitle}
          </motion.p>
        </div>

        <div className="grid md:grid-cols-3 gap-12 lg:gap-16">
          {content.pilars.map((pilar, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.2 }}
              className="flex flex-col items-center md:items-start text-center md:text-left group"
            >
              <div className="mb-8 relative">
                {/* Large decorative number */}
                <span className="absolute -top-10 -left-6 text-8xl font-black text-[#F8ECE8] select-none pointer-events-none transition-colors group-hover:text-[#D99B92]/10">
                  {pilar.number}
                </span>
                
                {/* Delicate Icon */}
                <div className="relative w-16 h-16 bg-white rounded-2xl shadow-sm border border-[#D99B92]/10 flex items-center justify-center text-[#D99B92] group-hover:scale-110 transition-transform duration-500">
                  {pilar.icon}
                </div>
              </div>

              <div className="space-y-4">
                <h3 className="text-2xl font-serif font-bold text-[#332A28] leading-tight">
                  {renderTitle(pilar.title, pilar.highlight)}
                </h3>
                <p className="text-[#6F625E] text-base md:text-lg leading-relaxed max-w-[280px] md:max-w-none mx-auto md:mx-0">
                  {pilar.text}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.6 }}
          className="mt-20 pt-10 border-t border-[#F8ECE8] text-center"
        >
          <p className="text-[#6F625E] italic text-lg max-w-2xl mx-auto">
            "{content.footer}"
          </p>
        </motion.div>
      </div>
    </section>
  );
};
