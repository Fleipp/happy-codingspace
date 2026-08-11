import { CONFIG } from "../config/landing-page";
import { motion } from "framer-motion";
import { Plus, Minus } from "lucide-react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export const FAQSection = () => (
  <section className="py-20 bg-[#F8ECE8]/20 px-6" id="faq">
    <div className="container mx-auto max-w-2xl">
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-serif text-[#332A28] mb-4">
          Dúvidas frequentes
        </h2>
        <p className="text-[#6F625E]">
          Tudo o que você precisa saber antes de começar.
        </p>
      </div>
      
      <Accordion type="single" collapsible className="space-y-4 mb-16">
        {CONFIG.faq.map((item, i) => (
          <AccordionItem 
            key={i} 
            value={`item-${i}`}
            className="bg-white rounded-[20px] border border-[#D99B92]/10 shadow-sm px-6 overflow-hidden border-none"
          >
            <AccordionTrigger className="hover:no-underline py-6 [&[data-state=open]>span>svg.plus]:hidden [&[data-state=closed]>span>svg.minus]:hidden">
              <span className="font-serif font-bold text-[#332A28] text-lg pr-4 text-left leading-tight">
                {item.q}
              </span>
              <span className="text-[#B86662] shrink-0">
                <Plus className="plus h-5 w-5" />
                <Minus className="minus h-5 w-5" />
              </span>
            </AccordionTrigger>
            <AccordionContent className="text-[#6F625E] text-base leading-relaxed pb-6">
              {item.a}
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>

      <div className="text-center">
        <div className="mb-8">
          <h3 className="text-2xl font-serif font-bold text-[#332A28] mb-2">Pronta para começar?</h3>
          <p className="text-[#6F625E]">Sua jornada de 21 dias pode começar hoje.</p>
        </div>
        
        <motion.a
          href="#ofertas"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="inline-block bg-[#B86662] text-white px-10 py-5 rounded-full font-bold text-lg shadow-lg hover:bg-[#A65551] transition-all duration-300 uppercase tracking-wider"
        >
          QUERO COMEÇAR MEUS 21 DIAS
        </motion.a>
      </div>
    </div>
  </section>
);
