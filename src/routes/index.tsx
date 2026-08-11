import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Método Adeus Papada em 21 Dias | Sua Nova Rotina" },
      {
        name: "description",
        content:
          "Conheça o Método Adeus Papada em 21 Dias — um passo a passo simples e prático para transformar sua rotina de autocuidado.",
      },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <div className="min-h-screen bg-[#fcfbf8] text-slate-900 font-sans">
      <header className="fixed w-full z-50 bg-[#fcfbf8]/80 backdrop-blur-md border-b border-stone-200">
        <div className="container mx-auto px-6 py-4 flex justify-between items-center">
          <span className="font-serif text-lg font-medium tracking-tight uppercase">Adeus Papada</span>
          <a href="#oferta" className="bg-stone-900 text-white px-6 py-2 rounded-full text-sm hover:bg-stone-800 transition-colors">
            Começar Agora
          </a>
        </div>
      </header>
      <section className="pt-32 pb-20 px-6 container mx-auto">
        <div className="max-w-4xl mx-auto text-center space-y-6">
          <span className="inline-block px-3 py-1 bg-stone-200/50 rounded-full text-xs font-semibold tracking-widest uppercase text-stone-600">
            ROTINA DE 21 DIAS
          </span>
          <h1 className="text-5xl md:text-7xl font-serif leading-tight">
            Diga Adeus aos Ângulos que Você Evita nas Fotos
          </h1>
          <p className="text-xl text-stone-600 max-w-2xl mx-auto">
            Conheça o Método Adeus Papada em 21 Dias — um passo a passo simples e prático para quem deseja cuidar da aparência da região abaixo do queixo e incluir esse cuidado na rotina.
          </p>
          <div className="pt-8">
            <a href="#oferta" className="inline-block bg-stone-900 text-white px-8 py-4 rounded-full text-lg hover:bg-stone-800 transition-all hover:scale-105">
              QUERO CONHECER O MÉTODO →
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
