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

/** Checkout oficial do ACESSO COMPLETO (R$27) */
const CHECKOUT_COMPLETO =
  "https://checkout.wiven.com.br/checkout/cmslzganf0dt301odjdw91dcy?offer=1DK0ZAZ";

/** Apenas InitiateCheckout — nunca Purchase (a compra é confirmada pelo checkout). */
function trackInitiateCheckout() {
  const fbq = (window as unknown as { fbq?: (...args: unknown[]) => void }).fbq;
  if (typeof fbq === "function") {
    fbq("track", "InitiateCheckout", { value: 27, currency: "BRL" });
  }
}

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Método Adeus Papada em 21 Dias | Rotina guiada de autocuidado" },
      {
        name: "description",
        content:
          "Rotina guiada de 21 dias com exercícios e automassagem para cuidar da região abaixo do queixo em poucos minutos por dia. Acesso completo por R$27, pagamento único.",
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
  component: Index,
});

const reveal = {
  initial: { opacity: 0, y: 16 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-40px" },
  transition: { duration: 0.5 },
};

const CTA = ({ className = "", label = "QUERO COMEÇAR MEUS 21 DIAS — R$27" }) => (
  <a
    href={CHECKOUT_COMPLETO}
    onClick={trackInitiateCheckout}
    className={`block w-full text-center bg-[#B86662] text-white rounded-full font-bold px-5 py-5 text-[15px] sm:text-lg leading-tight shadow-[0_10px_30px_rgba(184,102,98,0.28)] active:scale-[0.98] transition-transform ${className}`}
  >
    {label}
  </a>
);

const SectionTitle = ({ children }: { children: React.ReactNode }) => (
  <motion.h2
    {...reveal}
    className="text-[26px] sm:text-3xl md:text-4xl font-serif text-[#332A28] leading-snug text-center"
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
  "Calendário de acompanhamento",
  "Materiais complementares",
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
  "Prefere acompanhar orientações em casa",
  "Tem pouco tempo disponível durante o dia",
  "Gosta de seguir um passo a passo organizado",
  "Quer acompanhar o conteúdo pelo celular ou computador",
];

const faq = [
  {
    q: "Como vou receber meu acesso?",
    a: "Após a confirmação do pagamento, você recebe por e-mail os dados para acessar a plataforma e começar a jornada.",
  },
  {
    q: "Quanto tempo preciso dedicar por dia?",
    a: "O método foi desenhado para ser prático: cerca de 10 a 15 minutos por dia para acompanhar as sequências propostas.",
  },
  {
    q: "Preciso acompanhar todos os dias?",
    a: "A proposta é seguir a sequência dia após dia para criar o hábito, mas você acompanha no seu ritmo — o conteúdo fica disponível para você.",
  },
  {
    q: "Posso acessar pelo celular?",
    a: "Sim. O material é compatível com celular, tablet e computador.",
  },
  {
    q: "O pagamento de R$27 é único?",
    a: "Sim. É um pagamento único, sem mensalidade e sem cobrança recorrente.",
  },
  {
    q: "O que está incluído no acesso?",
    a: "A jornada organizada em 21 dias, as orientações passo a passo, técnicas de automassagem facial, exercícios para a região, calendário de acompanhamento, materiais complementares, suporte para dúvidas e acesso vitalício.",
  },
  {
    q: "Preciso de algum equipamento?",
    a: "Não. Você usa apenas as mãos e, em algumas técnicas, itens simples que já tem em casa, como um hidratante ou óleo facial.",
  },
  {
    q: "Como funciona a garantia?",
    a: "Você tem 15 dias de garantia. Se sentir que o método não é para você, basta solicitar o reembolso integral dentro desse prazo.",
  },
];

export function Index() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <div className="min-h-screen bg-[#FFF9F6] text-[#332A28] font-sans selection:bg-[#D99B92]/20 overflow-x-hidden">
      {/* HERO */}
      <section className="px-5 pt-10 pb-8 max-w-2xl mx-auto lg:max-w-6xl">
        <div className="lg:grid lg:grid-cols-2 lg:gap-12 lg:items-center">
          <div className="space-y-5">
            <span className="inline-block px-3 py-1 bg-[#F8ECE8] rounded-full text-[11px] font-semibold tracking-widest uppercase text-[#B86662]">
              Método Adeus Papada em 21 Dias
            </span>
            <h1 className="text-[30px] sm:text-4xl lg:text-5xl font-serif font-black leading-[1.18]">
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

            <div className="rounded-2xl bg-white border border-[#D99B92]/30 px-4 py-4 text-center">
              <p className="text-[11px] font-bold tracking-[0.2em] text-[#6F625E]">ACESSO COMPLETO</p>
              <p className="font-serif font-black text-4xl text-[#B86662] leading-tight mt-1">R$27</p>
              <p className="text-xs uppercase tracking-widest text-[#6F625E] font-semibold">
                Pagamento único
              </p>
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
              fetchPriority="high"
              decoding="async"
              className="w-full h-[300px] sm:h-[380px] lg:h-[560px] object-cover"
            />
          </div>
        </div>
      </section>

      {/* IDENTIFICAÇÃO */}
      <section className="px-5 py-12 bg-[#F8ECE8]/40">
        <div className="max-w-2xl mx-auto space-y-4 text-center">
          <SectionTitle>Quer incluir o cuidado dessa região na sua rotina?</SectionTitle>
          <motion.p {...reveal} className="text-base sm:text-lg text-[#4A403D] leading-relaxed">
            O Método foi organizado para quem deseja dedicar atenção à região abaixo do queixo com
            uma rotina simples de autocuidado, sem precisar montar nada sozinha.
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
              decoding="async"
              className="w-full h-auto object-cover"
            />
          </motion.div>
          <p className="mt-5 text-center text-[15px] sm:text-base text-[#4A403D]">
            Todo o conteúdo fica organizado em um só lugar: você abre, acompanha a orientação do dia
            e marca no calendário.
          </p>
        </div>
      </section>

      {/* CTA INTERMEDIÁRIO */}
      <section className="px-5 py-14">
        <motion.div
          {...reveal}
          className="max-w-md mx-auto bg-white rounded-[32px] border border-[#D99B92]/40 p-6 sm:p-8 text-center shadow-[0_14px_35px_rgba(217,155,146,0.2)]"
        >
          <h2 className="text-2xl sm:text-3xl font-serif font-bold">Comece sua rotina de 21 dias</h2>
          <p className="mt-3 text-[11px] font-bold tracking-[0.2em] text-[#6F625E]">
            ACESSO COMPLETO
          </p>
          <div className="mt-1 flex items-end justify-center gap-1">
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
              "Pagamento processado em ambiente seguro",
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
                    decoding="async"
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
      </section>

      {/* OFERTA PRINCIPAL */}
      <section id="oferta" className="px-5 py-14 bg-[#F8ECE8]/50">
        <motion.div
          {...reveal}
          className="max-w-md mx-auto bg-white rounded-[32px] border-2 border-[#D99B92] p-6 sm:p-8 shadow-[0_18px_45px_rgba(217,155,146,0.28)]"
        >
          <h2 className="text-2xl sm:text-3xl font-serif font-bold text-center">
            Comece seus 21 dias
          </h2>
          <p className="mt-2 text-center text-[15px] text-[#4A403D]">
            Método Adeus Papada em 21 Dias
          </p>
          <p className="mt-4 text-center text-[11px] font-bold tracking-[0.2em] text-[#6F625E]">
            ACESSO COMPLETO
          </p>
          <div className="mt-1 flex items-end justify-center gap-1">
            <span className="text-2xl font-serif font-bold">R$</span>
            <span className="text-7xl font-serif font-black leading-none">27</span>
          </div>
          <p className="mt-2 text-center text-xs uppercase tracking-widest text-[#6F625E] font-semibold">
            Pagamento único
          </p>

          <ul className="mt-6 space-y-2 text-[15px] text-[#332A28]">
            {includedItems.map((item) => (
              <li key={item} className="flex gap-2">
                <span className="text-[#B86662] font-bold">✓</span>
                {item}
              </li>
            ))}
          </ul>

          <div className="mt-7">
            <CTA />
          </div>

          <ul className="mt-5 space-y-2 text-[14px] text-[#6F625E]">
            {["Pagamento único", "Acesso online", "Acesso após a confirmação"].map((s) => (
              <li key={s} className="flex gap-2">
                <span className="text-[#D99B92] font-bold">✓</span>
                {s}
              </li>
            ))}
          </ul>
        </motion.div>
      </section>

      {/* GARANTIA */}
      <section className="px-5 py-14">
        <motion.div {...reveal} className="max-w-xl mx-auto text-center space-y-4">
          <span className="inline-block px-4 py-2 rounded-full bg-white border border-[#D99B92]/40 text-[#B86662] font-bold tracking-widest text-xs">
            15 DIAS DE GARANTIA
          </span>
          <h2 className="text-2xl sm:text-3xl font-serif">Comece com tranquilidade</h2>
          <p className="text-[15px] sm:text-base text-[#4A403D] leading-relaxed">
            Você tem 15 dias de garantia. Se sentir que o método não é para você, basta solicitar o
            reembolso integral dentro desse prazo.
          </p>
          <div className="pt-2">
            <CTA />
          </div>
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
          <h2 className="text-[28px] sm:text-4xl font-serif leading-tight">
            Seu momento de autocuidado pode começar hoje.
          </h2>
          <p className="text-[15px] sm:text-base text-[#4A403D]">
            Comece sua rotina guiada de 21 dias e acompanhe cada etapa no seu ritmo.
          </p>
          <p className="font-semibold text-[#B86662]">R$27 • Pagamento único</p>
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
          onClick={trackInitiateCheckout}
          className="block w-full text-center bg-[#B86662] text-white rounded-full font-bold py-4 text-[15px] active:scale-[0.98] transition-transform"
        >
          COMEÇAR MEUS 21 DIAS — R$27
        </a>
      </div>
      <div className="h-20 md:hidden" />
    </div>
  );
}
