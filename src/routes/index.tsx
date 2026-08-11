import { createFileRoute, Head } from "@tanstack/react-router";

export const Route = createFileRoute("/")({
  component: Index,
});

function Index() {
  return (
    <div className="min-h-screen bg-[#fcfbf8] text-slate-900 font-sans">
      <Head>
        <title>Método Adeus Papada em 21 Dias | Sua Nova Rotina</title>
        <meta
          name="description"
          content="Conheça o Método Adeus Papada em 21 Dias — um passo a passo simples e prático para transformar sua rotina de autocuidado."
        />
      </Head>

      {/* Header */}
      <header className="fixed w-full z-50 bg-[#fcfbf8]/80 backdrop-blur-md border-b border-stone-200">
        <div className="container mx-auto px-6 py-4 flex justify-between items-center">
          <span className="font-serif text-lg font-medium tracking-tight uppercase">Adeus Papada</span>
          <a href="#oferta" className="bg-stone-900 text-white px-6 py-2 rounded-full text-sm hover:bg-stone-800 transition-colors">
            Começar Agora
          </a>
        </div>
      </header>

      {/* Hero */}
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
          <div className="flex flex-col md:flex-row justify-center gap-6 pt-8 text-stone-500">
            <span className="flex items-center gap-2">✓ Acesso online</span>
            <span className="flex items-center gap-2">✓ Passo a passo simples</span>
            <span className="flex items-center gap-2">✓ Faça no seu ritmo</span>
          </div>
        </div>
      </section>

      {/* Seção da Dor */}
      <section className="py-20 bg-stone-900 text-stone-100">
        <div className="container mx-auto px-6 max-w-3xl text-center space-y-8">
          <h2 className="text-3xl md:text-4xl font-serif italic">
            Quantas vezes você já mudou o ângulo do rosto por causa disso?
          </h2>
          <div className="space-y-4 text-stone-300">
            <p>“Às vezes não é a foto que incomoda.”</p>
            <p>“É perceber que você está sempre procurando o ângulo certo para esconder aquilo que não gostaria que aparecesse.”</p>
            <p>“E talvez você já tenha pesquisado várias alternativas, mas acabou desistindo porque pareciam complicadas, caras ou difíceis de encaixar na rotina.”</p>
          </div>
          <p className="font-semibold text-lg pt-4 text-white">Foi pensando nisso que surgiu o Método Adeus Papada em 21 Dias.</p>
        </div>
      </section>

      {/* Oferta Placeholder */}
      <section id="oferta" className="py-20 bg-[#fcfbf8]">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-4xl font-serif mb-12">Escolha como você quer começar</h2>
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <div className="p-8 border border-stone-200 rounded-3xl bg-white space-y-6">
              <h3 className="text-2xl font-serif">Acesso Essencial</h3>
              <p className="text-4xl font-bold">R$ 10,00</p>
              <ul className="text-left space-y-3 text-stone-600">
                <li>✓ Método Adeus Papada em 21 Dias</li>
                <li>✓ Acesso online</li>
                <li>✓ Passo a passo do método</li>
              </ul>
              <a href="#" className="block w-full py-4 rounded-full border-2 border-stone-900 hover:bg-stone-900 hover:text-white transition-all">
                QUERO O ACESSO POR R$ 10 →
              </a>
            </div>
            <div className="p-8 border-2 border-stone-900 rounded-3xl bg-stone-50 space-y-6 relative">
              <span className="absolute -top-3 left-1/2 -translate-x-1/2 bg-stone-900 text-white text-xs px-4 py-1 rounded-full uppercase tracking-widest">
                MAIS COMPLETO
              </span>
              <h3 className="text-2xl font-serif">Experiência Completa</h3>
              <p className="text-4xl font-bold">R$ 37,00</p>
              <ul className="text-left space-y-3 text-stone-600">
                <li>✓ Método Adeus Papada em 21 Dias</li>
                <li>✓ Benefício Extra Real</li>
                <li>✓ Bônus Real 01</li>
                <li>✓ Bônus Real 02</li>
              </ul>
              <a href="#" className="block w-full py-4 rounded-full bg-stone-900 text-white hover:bg-stone-800 transition-all shadow-lg hover:shadow-xl">
                QUERO A EXPERIÊNCIA COMPLETA →
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
