import { createFileRoute } from "@tanstack/react-router";
import { CONFIG } from "../config/landing-page";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Método Adeus Papada em 21 Dias | Rotina de Autocuidado Facial" },
      {
        name: "description",
        content: "Conheça uma rotina guiada de 21 dias com exercícios faciais, automassagem e práticas de autocuidado para rosto e pescoço.",
      },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <div className="min-h-screen bg-[#FFF9F6] text-[#332A28] font-sans selection:bg-[#D99B92]/20">
      <main>
        {/* Placeholder for Sections */}
        <section className="py-20 text-center">
            <h1 className="text-5xl md:text-7xl font-serif text-[#332A28]">
                {CONFIG.hero.headline}
            </h1>
            <p className="mt-6 text-xl text-[#6F625E] max-w-2xl mx-auto px-6">
                {CONFIG.hero.subheadline}
            </p>
            <div className="mt-10">
                <a href="#oferta" className="bg-[#B86662] text-white px-8 py-4 rounded-full font-medium text-lg hover:bg-[#A35853] transition-all shadow-lg hover:shadow-xl">
                    {CONFIG.hero.cta}
                </a>
            </div>
        </section>
      </main>
    </div>
  );
}
