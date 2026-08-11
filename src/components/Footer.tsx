import { CONFIG } from "../config/landing-page";

export const Footer = () => (
  <footer className="bg-white py-12 px-6 border-t border-[#D99B92]/10">
    <div className="container mx-auto max-w-6xl">
      <div className="flex flex-col items-center text-center gap-8 mb-8">
        <h3 className="text-2xl font-serif font-black text-[#332A28] tracking-tight">
          Adeus Papada
        </h3>
        <div className="flex flex-wrap justify-center gap-x-6 gap-y-2 text-sm text-[#6F625E] font-medium">
          <a href="#" className="hover:text-[#B86662] transition-colors">Termos de Uso</a>
          <span>•</span>
          <a href="#" className="hover:text-[#B86662] transition-colors">Política de Privacidade</a>
          <span>•</span>
          <a href="#" className="hover:text-[#B86662] transition-colors">Contato</a>
        </div>
      </div>
      
      <div className="space-y-6 max-w-4xl mx-auto text-center">
        <p className="text-[11px] text-[#6F625E]/80 leading-relaxed italic">
          Os resultados podem variar de pessoa para pessoa. O conteúdo deste produto tem finalidade informativa e de autocuidado e não substitui orientação de profissionais habilitados.
        </p>
        <div className="pt-6 border-t border-[#D99B92]/10">
          <p className="text-[10px] text-[#6F625E]/60 uppercase tracking-widest">
            {CONFIG.footer.copyright}
          </p>
        </div>
      </div>
    </div>
  </footer>
);
