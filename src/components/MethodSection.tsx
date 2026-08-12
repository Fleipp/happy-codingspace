import { CONFIG } from "../config/landing-page";
import { motion } from "framer-motion";

export const MethodSection = () => (
  <section id="metodo" className="py-20 bg-[#F8ECE8]/30 px-6 relative overflow-hidden">
    <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-[#D99B92]/20 to-transparent" />

    <div className="container mx-auto max-w-5xl">
      <div className="text-center space-y-4 mb-12">
        <span className="inline-block px-3 py-1 bg-[#D99B92]/20 rounded-full text-xs font-semibold tracking-widest uppercase text-[#B86662]">
          {CONFIG.method.badge}
        </span>
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif text-[#332A28]">
          {CONFIG.method.title}
        </h2>
        <p className="text-lg text-[#6F625E] max-w-2xl mx-auto leading-relaxed">
          {CONFIG.method.description}
        </p>
      </div>

      <div className="relative">
        {/* Desktop Connector Line */}
        <div className="hidden md:block absolute top-[60px] left-[15%] right-[15%] h-0.5 bg-gradient-to-r from-[#D99B92]/10 via-[#D99B92]/30 to-[#D99B92]/10 -z-10" />
        
        <div className="grid md:grid-cols-3 gap-6 md:gap-8 relative">
          {CONFIG.method.steps.map((step, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="bg-white/80 backdrop-blur-sm p-8 rounded-[32px] shadow-sm border border-[#D99B92]/10 flex flex-col items-center text-center space-y-5 hover:shadow-md transition-all group"
            >
              <div className="relative">
                <div className="w-16 h-16 bg-[#D99B92] rounded-full flex flex-col items-center justify-center text-white shadow-lg shadow-[#D99B92]/20 group-hover:scale-110 transition-transform">
                  <span className="text-[10px] uppercase tracking-tighter font-bold opacity-80 leading-none">Dias</span>
                  <span className="font-serif font-bold text-lg leading-tight">{step.number}</span>
                </div>
                
                {/* Visual Arrow for desktop between steps */}
                {i < 2 && (
                  <div className="hidden md:flex absolute top-1/2 -right-6 lg:-right-8 transform -translate-y-1/2 text-[#D99B92]/40 z-10">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M5 12h14M12 5l7 7-7 7" />
                    </svg>
                  </div>
                )}
              </div>

              <div className="space-y-3">
                <h3 className="text-2xl font-serif font-bold text-[#332A28] leading-tight">
                  {step.title}
                </h3>
                <p className="text-[#6F625E] text-base leading-relaxed">
                  {step.text}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>


      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="mt-20 p-8 md:p-12 bg-[#F8ECE8] rounded-[40px] border border-[#D99B92]/10 relative overflow-hidden"
      >
        <div className="absolute top-0 right-0 w-64 h-64 bg-[#D99B92]/5 rounded-full blur-3xl -mr-32 -mt-32" />
        
        <div className="relative z-10 space-y-8">
          <div className="text-center space-y-4 max-w-2xl mx-auto">
            <h3 className="text-2xl md:text-3xl font-serif text-[#332A28]">
              Por que uma sequência de 21 dias?
            </h3>
            <p className="text-[#6F625E] leading-relaxed">
              Porque quando existe um passo a passo, fica mais fácil saber o que fazer a cada dia. Em vez de receber vários conteúdos soltos, você lê e acompanha uma sequência organizada através de um material completo para incorporar esse momento à sua rotina gradualmente.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 md:gap-12 py-8 border-y border-[#D99B92]/10">
            <div className="space-y-2">
              <h4 className="font-bold text-[#D99B92] flex items-center gap-2 uppercase tracking-wide text-sm">
                <span>✓</span> Menos dúvida sobre o que fazer
              </h4>
              <p className="text-[#6F625E] text-sm leading-relaxed">
                Você abre o conteúdo e sabe qual é o próximo passo.
              </p>
            </div>
            <div className="space-y-2">
              <h4 className="font-bold text-[#D99B92] flex items-center gap-2 uppercase tracking-wide text-sm">
                <span>✓</span> Uma rotina mais fácil de acompanhar
              </h4>
              <p className="text-[#6F625E] text-sm leading-relaxed">
                O conteúdo é dividido em etapas para não parecer complicado ou cansativo.
              </p>
            </div>
            <div className="space-y-2">
              <h4 className="font-bold text-[#D99B92] flex items-center gap-2 uppercase tracking-wide text-sm">
                <span>✓</span> Mais constância
              </h4>
              <p className="text-[#6F625E] text-sm leading-relaxed">
                A proposta é ajudar você a reservar alguns minutos para esse cuidado ao longo da jornada.
              </p>
            </div>
          </div>

          <div className="text-center">
            <p className="text-lg md:text-xl font-serif italic text-[#B86662]">
              “Não é sobre fazer tudo de uma vez. É sobre ter uma sequência para acompanhar dia após dia.”
            </p>
          </div>
        </div>
      </motion.div>

      <div className="mt-16 text-center space-y-8">
        <p className="text-[#6F625E] italic max-w-xl mx-auto">
          "{(CONFIG.method as any).footer}"
        </p>
        
        <motion.a
          href="#ofertas"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="inline-block px-10 py-4 bg-[#D99B92] text-white rounded-full font-bold text-lg shadow-xl shadow-[#D99B92]/30 hover:bg-[#B86662] transition-colors uppercase tracking-wider"
        >
          {(CONFIG.method as any).cta}
        </motion.a>
      </div>
    </div>
  </section>
);
