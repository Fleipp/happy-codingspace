import { createFileRoute } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { CONFIG } from "../config/landing-page";
import heroAsset from "../hero-beauty-new.png";
import mockupAsset from "../organization-beauty-v2.png";
import ritual1 from "../ritual-1.png";
import ritual2 from "../ritual-2.png";
import ritual3 from "../ritual-3.png";
import { useState } from "react";
import { ChevronDown } from "lucide-react";

const CHECKOUT_COMPLETO =
  "https://checkout.wiven.com.br/checkout/cmslzganf0dt301odjdw91dcy?offer=1DK0ZAZ";

export const Route = createFileRoute("/v2")({
  head: () => ({
    meta: [
      { title: "Método Adeus Papada em 21 Dias | Rotina guiada de autocuidado" },
      {
        name: "description",
        content:
          "Uma rotina guiada de 21 dias com exercícios e automassagem para cuidar da região abaixo do queixo em poucos minutos por dia. Acesso completo por R$27, pagamento único.",
      },
      { property: "og:title", content: "Método Adeus Papada em 21 Dias" },
      {
        property: "og:description",
        content: "Rotina guiada de 21 dias de autocuidado facial. R$27, pagamento único.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: V2,
});

const reveal = {
  initial: { opacity: 0, y: 16 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-40px" },
  transition: { duration: 0.5 },
};

const CTA = ({ className = "" }: { className?: string }) => (
  <a
    href={CHECKOUT_COMPLETO}
    className={`block w-full text-center bg-[#B86662] text-white rounded-full font-bold px-6 py-5 text-base sm:text-lg leading-tight shadow-[0_10px_30px_rgba(184,102,98,0.28)] active:scale-[0.98] transition-transform ${className}`}
  >
    QUERO COMEÇAR MEUS 21 DIAS — R$27
  </a>
);

const SectionTitle = ({ children }: { children: React.ReactNode }) => (
  <motion.h2
    {...reveal}
    className="text-2xl sm:text-3xl md:text-4xl font-serif text-[#332A28] leading-snug text-center"
  >
    {children}
  </motion.h2>
);

const heroBenefits = [
  "Rotina organizada em 21 dias",
  "Exercícios e automassagem guiados",
  "Faça em casa e no seu ritmo",
  "Acesso online pelo celular ou computador",
];

const steps = [
  { n: "01", t: "Acesse a orientação do dia", d: "Abra o conteúdo correspondente ao dia da sua jornada." },
  { n: "02", t: "Acompanhe os exercícios e automassagens", d: "Siga o passo a passo simples, com as próprias mãos." },
  { n: "03", t: "Repita no seu ritmo por 21 dias", d: "Poucos minutos por dia para manter a constância." },
];

const includedItems = [
  "Jornada organizada em 21 dias",
  "Orientações guiadas passo a passo",
  "Técnicas de automassagem facial",
  "Exercícios para a região abaixo do queixo",
  "Acesso pelo celular ou computador",
  "Materiais complementares",
  "Calendário de acompanhamento",
  "Suporte para dúvidas",
  "Acesso vitalício",
];

const routine = [
  { img: ritual1, t: "Prepare seu momento", d: "Escolha um momento tranquilo do seu dia." },
  { img: ritual2, t: "Acompanhe a orientação", d: "Abra o conteúdo do dia e siga o passo a passo." },
  { img: ritual3, t: "Complete sua rotina", d: "Poucos minutos e o seu dia está concluído." },
];

const forWho = [
  "Quer criar uma rotina de autocuidado para essa região",
  "Prefere acompanhar orientações organizadas dia após dia",
  "Tem pouco tempo e busca algo simples de encaixar no dia",
  "Gosta de seguir um passo a passo claro, sem complicação",
];

const notForWho = [
  "Procura uma transformação garantida em poucos dias",
  "Espera resultados sem acompanhar a rotina proposta",
  "Procura um tratamento médico ou procedimento estético",
];

const faq = CONFIG.faq.filter(
  (f) => !f.q.includes("R$10") && !f.q.includes("Por quanto tempo"),
);

function V2() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <div className="min-h-screen bg-[#FFF9F6] text-[#332A28] font-sans selection:bg-[#D99B92]/20">
      {/* HERO */}
      <section className="px-5 pt-10 pb-8 max-w-2xl mx-auto lg:max-w-6xl">
        <div className="lg:grid lg:grid-cols-2 lg:gap-12 lg:items-center">
          <div className="space-y-5">
            <span className="inline-block px-3 py-1 bg-[#F8ECE8] rounded-full text-[11px] font-semibold tracking-widest uppercase text-[#B86662]">
              Método Adeus Papada em 21 Dias
            </span>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-black leading-[1.15]">
              Uma rotina guiada de 21 dias para cuidar da região abaixo do queixo em poucos minutos
              por dia
            </h1>
            <p className="text-base sm:text-lg text-[#4A403D] leading-relaxed">
              Um passo a passo simples de autocuidado com exercícios e automassagem para você
              acompanhar em casa, no seu ritmo.
            </p>

            <ul className="space-y-2">
              {heroBenefits.map((b) => (
                <li key={b} className="flex gap-2 text-[15px] sm:text-base text-[#332A28]">
                  <span className="text-[#B86662] font-bold">✓</span>
                  <span>{b}</span>
                </li>
              ))}
            </ul>

            <div className="rounded-2xl bg-white border border-[#D99B92]/30 px-4 py-3 text-center font-bold tracking-wide text-[#B86662] text-sm sm:text-base">
              ACESSO COMPLETO • R$27 • PAGAMENTO ÚNICO
            </div>

            <CTA />
            <p className="text-sm text-[#6F625E] text-center">
              Acesso após a confirmação do pagamento.
            </p>
          </div>

          <div className="mt-8 lg:mt-0 rounded-[28px] overflow-hidden border border-[#D99B92]/20 shadow-[0_16px_40px_rgba(0,0,0,0.08)]">
            <img
              src={heroAsset}
              alt="Mulher praticando autocuidado facial"
              width={800}
              height={800}
              loading="eager"
              className="w-full h-[280px] sm:h-[360px] lg:h-[560px] object-cover"
            />
          </div>
        </div>
      </section>

      {/* IDENTIFICAÇÃO */}
      <section className="px-5 py-12 bg-[#F8ECE8]/40">
        <div className="max-w-2xl mx-auto space-y-4 text-center">
          <SectionTitle>Quer incluir o cuidado dessa região na sua rotina?</SectionTitle>
          <motion.p {...reveal} className="text-base sm:text-lg text-[#4A403D] leading-relaxed">
            Muitas pessoas gostariam de dedicar mais atenção à região abaixo do queixo, mas não
            sabem por onde começar nem como organizar esse cuidado no dia a dia.
          </motion.p>
          <motion.p {...reveal} className="text-base sm:text-lg text-[#4A403D] leading-relaxed">
            O Método Adeus Papada reúne uma rotina guiada e simples para você acompanhar durante 21
            dias, sem precisar montar nada sozinha.
          </motion.p>
        </div>
      </section>

      {/* COMO FUNCIONA */}
      <section className="px-5 py-14 max-w-3xl mx-auto">
        <SectionTitle>21 dias para criar uma rotina de autocuidado</SectionTitle>
        <div className="mt-8 space-y-4">
          {steps.map((s, i) => (
            <motion.div
              key={s.n}
              {...reveal}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="flex gap-4 items-start bg-white rounded-3xl p-5 border border-[#D99B92]/15 shadow-sm"
            >
              <span className="font-serif text-3xl text-[#D99B92] font-black leading-none">
                {s.n}
              </span>
              <div>
                <h3 className="font-bold text-lg leading-tight">{s.t}</h3>
                <p className="text-[#6F625E] text-[15px] mt-1">{s.d}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* PROVA SOCIAL */}
      <section className="px-5 py-14 bg-white">
        <div className="max-w-3xl mx-auto">
          <SectionTitle>O que algumas alunas acharam da experiência</SectionTitle>
          <div className="mt-8 grid gap-5 md:grid-cols-3">
            {CONFIG.testimonials.items.map((t, i) => (
              <motion.figure
                key={t.name}
                {...reveal}
                transition={{ duration: 0.5, delay: i * 0.08 }}
                className="bg-[#FFF9F6] rounded-3xl p-5 border border-[#D99B92]/20"
              >
                <blockquote className="font-serif text-lg text-[#332A28] leading-snug">
                  “{t.highlight}”
                </blockquote>
                <p className="mt-3 text-[15px] text-[#4A403D] leading-relaxed">{t.text}</p>
                <figcaption className="mt-4 text-sm font-bold text-[#B86662]">{t.name}</figcaption>
              </motion.figure>
            ))}
          </div>
        </div>
      </section>

      {/* O QUE VOCÊ RECEBE */}
      <section className="px-5 py-14 max-w-3xl mx-auto">
        <SectionTitle>O que você recebe durante os 21 dias</SectionTitle>
        <ul className="mt-8 grid gap-3 sm:grid-cols-2">
          {includedItems.map((item, i) => (
            <motion.li
              key={item}
              {...reveal}
              transition={{ duration: 0.4, delay: i * 0.04 }}
              className="flex gap-3 bg-white rounded-2xl px-4 py-3 border border-[#D99B92]/15 text-[15px]"
            >
              <span className="text-[#B86662] font-bold">✓</span>
              <span>{item}</span>
            </motion.li>
          ))}
        </ul>
      </section>

      {/* POR DENTRO */}
      <section className="px-5 py-14 bg-[#F8ECE8]/40">
        <div className="max-w-3xl mx-auto">
          <SectionTitle>Simples de acompanhar. Fácil de incluir na rotina.</SectionTitle>
          <motion.div
            {...reveal}
            className="mt-8 rounded-[28px] overflow-hidden border border-[#D99B92]/20 shadow-lg bg-white"
          >
            <img
              src={mockupAsset}
              alt="Conteúdo do Método Adeus Papada organizado dia a dia"
              loading="lazy"
              className="w-full h-auto object-cover"
            />
          </motion.div>
          <p className="mt-5 text-center text-[15px] sm:text-base text-[#4A403D]">
            Todo o conteúdo fica organizado em um só lugar: você abre, acompanha a orientação do dia
            e marca no calendário.
          </p>
        </div>
      </section>

      {/* SEGUNDO CTA */}
      <section id="oferta" className="px-5 py-14">
        <motion.div
          {...reveal}
          className="max-w-md mx-auto bg-white rounded-[32px] border-2 border-[#D99B92] p-6 sm:p-8 text-center shadow-[0_18px_45px_rgba(217,155,146,0.25)]"
        >
          <h2 className="text-2xl sm:text-3xl font-serif font-bold">
            Comece sua rotina de 21 dias
          </h2>
          <div className="mt-5 flex items-end justify-center gap-1">
            <span className="text-2xl font-serif font-bold">R$</span>
            <span className="text-6xl font-serif font-black leading-none">27</span>
          </div>
          <p className="mt-2 text-xs uppercase tracking-widest text-[#6F625E] font-semibold">
            Pagamento único
          </p>
          <div className="mt-6">
            <CTA />
          </div>
          <ul className="mt-5 space-y-2 text-left text-[15px] text-[#4A403D]">
            {[
              "Pagamento único",
              "Acesso online",
              "Acesso após a confirmação do pagamento",
              "Ambiente de pagamento seguro",
            ].map((s) => (
              <li key={s} className="flex gap-2">
                <span className="text-[#B86662] font-bold">✓</span>
                {s}
              </li>
            ))}
          </ul>
        </motion.div>
      </section>

      {/* POUCOS MINUTOS */}
      <section className="px-5 py-14 bg-white">
        <div className="max-w-4xl mx-auto">
          <SectionTitle>Poucos minutos dedicados a você</SectionTitle>
          <div className="mt-8 grid gap-6 sm:grid-cols-3">
            {routine.map((r, i) => (
              <motion.div key={r.t} {...reveal} transition={{ duration: 0.5, delay: i * 0.08 }}>
                <div className="rounded-[24px] overflow-hidden border border-[#D99B92]/15 bg-[#F8ECE8]">
                  <img
                    src={r.img}
                    alt={r.t}
                    loading="lazy"
                    className="w-full aspect-[4/5] object-cover"
                  />
                </div>
                <h3 className="mt-3 font-bold text-base">{r.t}</h3>
                <p className="text-[15px] text-[#6F625E]">{r.d}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* PARA QUEM É */}
      <section className="px-5 py-14 max-w-3xl mx-auto">
        <SectionTitle>Esse método pode fazer sentido para quem…</SectionTitle>
        <ul className="mt-8 space-y-3">
          {forWho.map((f) => (
            <motion.li
              key={f}
              {...reveal}
              className="flex gap-3 bg-white rounded-2xl px-4 py-3 border border-[#D99B92]/15 text-[15px]"
            >
              <span className="text-[#B86662] font-bold">✓</span>
              {f}
            </motion.li>
          ))}
        </ul>

        <motion.div
          {...reveal}
          className="mt-8 rounded-2xl border border-dashed border-[#D99B92]/50 p-5 bg-[#F8ECE8]/30"
        >
          <h3 className="font-bold text-[#B86662] mb-3">Talvez não seja para você se…</h3>
          <ul className="space-y-2 text-[15px] text-[#4A403D]">
            {notForWho.map((n) => (
              <li key={n} className="flex gap-2">
                <span className="text-[#D99B92]">•</span>
                {n}
              </li>
            ))}
          </ul>
        </motion.div>
      </section>

      {/* GARANTIA */}
      <section className="px-5 py-14 bg-[#F8ECE8]/40">
        <motion.div {...reveal} className="max-w-xl mx-auto text-center space-y-4">
          <span className="inline-block px-4 py-2 rounded-full bg-white border border-[#D99B92]/40 text-[#B86662] font-bold tracking-widest text-xs">
            15 DIAS DE GARANTIA
          </span>
          <h2 className="text-2xl sm:text-3xl font-serif">{CONFIG.warranty.title}</h2>
          <p className="text-[15px] sm:text-base text-[#4A403D] leading-relaxed">
            {CONFIG.warranty.text}
          </p>
        </motion.div>
      </section>

      {/* FAQ */}
      <section className="px-5 py-14 max-w-2xl mx-auto">
        <SectionTitle>Dúvidas frequentes</SectionTitle>
        <div className="mt-8 space-y-3">
          {faq.map((f, i) => (
            <div key={f.q} className="bg-white rounded-2xl border border-[#D99B92]/15">
              <button
                onClick={() => setOpen(open === i ? null : i)}
                className="w-full flex items-center justify-between gap-3 text-left px-5 py-4 font-bold text-[15px]"
                aria-expanded={open === i}
              >
                {f.q}
                <ChevronDown
                  className={`w-5 h-5 shrink-0 text-[#B86662] transition-transform ${open === i ? "rotate-180" : ""}`}
                />
              </button>
              {open === i && (
                <p className="px-5 pb-5 text-[15px] text-[#4A403D] leading-relaxed">{f.a}</p>
              )}
            </div>
          ))}
        </div>
      </section>

      {/* CTA FINAL */}
      <section className="px-5 py-14 bg-[#F8ECE8]/60">
        <motion.div {...reveal} className="max-w-md mx-auto text-center space-y-5">
          <h2 className="text-3xl sm:text-4xl font-serif leading-tight">
            Seu momento de autocuidado pode começar hoje.
          </h2>
          <p className="text-[15px] sm:text-base text-[#4A403D]">
            Acesso completo por R$27, pagamento único.
          </p>
          <CTA />
          <p className="text-sm text-[#6F625E]">Acesso após a confirmação do pagamento.</p>
        </motion.div>
      </section>

      {/* FOOTER */}
      <footer className="px-5 py-10 bg-white border-t border-[#D99B92]/15">
        <div className="max-w-2xl mx-auto text-center space-y-3">
          <p className="font-serif text-lg text-[#332A28]">Adeus Papada</p>
          <p className="text-xs text-[#6F625E] leading-relaxed">{CONFIG.footer.disclaimer}</p>
          <p className="text-xs text-[#6F625E]">{CONFIG.footer.copyright}</p>
        </div>
      </footer>

      {/* CTA FIXO MOBILE */}
      <div className="fixed bottom-0 inset-x-0 z-50 p-3 bg-[#FFF9F6]/95 backdrop-blur border-t border-[#D99B92]/20 md:hidden">
        <a
          href={CHECKOUT_COMPLETO}
          className="block w-full text-center bg-[#B86662] text-white rounded-full font-bold py-4 text-[15px] active:scale-[0.98] transition-transform"
        >
          COMEÇAR MEUS 21 DIAS — R$27
        </a>
      </div>
      <div className="h-20 md:hidden" />
    </div>
  );
}
