import { CONFIG } from "../config/landing-page";

export const Footer = () => (
  <footer className="bg-[#F8ECE8] py-16 px-6">
    <div className="container mx-auto max-w-6xl">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-8 mb-12">
        <div className="space-y-4">
          <h3 className="text-xl font-serif font-bold text-[#332A28] uppercase tracking-tight">
            {CONFIG.productName}
          </h3>
          <div className="flex gap-6 text-sm text-[#6F625E]">
            <a href="#" className="hover:text-[#B86662] transition-colors">Termos de Uso</a>
            <a href="#" className="hover:text-[#B86662] transition-colors">Privacidade</a>
            <a href="#" className="hover:text-[#B86662] transition-colors">Contato</a>
          </div>
        </div>
      </div>
      
      <div className="pt-8 border-t border-[#D99B92]/20 space-y-6">
        <p className="text-xs text-[#6F625E] leading-relaxed max-w-4xl">
          {CONFIG.footer.disclaimer}
        </p>
        <p className="text-xs text-[#6F625E] font-medium">
          {CONFIG.footer.copyright}
        </p>
      </div>
    </div>
  </footer>
);
