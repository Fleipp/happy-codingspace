import { createFileRoute } from "@tanstack/react-router";
import { HeroSection } from "../components/HeroSection";
import { ProblemSection } from "../components/ProblemSection";
import { MethodSection } from "../components/MethodSection";
import { ForWhoSection } from "../components/ForWhoSection";
import { TestimonialsSection } from "../components/TestimonialsSection";
import { OfferSection } from "../components/OfferSection";
import { FAQSection } from "../components/FAQSection";
import { GuaranteeSection } from "../components/GuaranteeSection";
import { Footer } from "../components/Footer";
import { MobileStickyCTA } from "../components/MobileStickyCTA";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Método Adeus Papada em 21 Dias | Rotina de Autocuidado Facial" },
      {
        name: "description",
        content: "Conheça uma rotina guiada de 21 dias com exercícios faciais, automassagem e práticas de autocuidado para rosto e pescoço.",
      },
      { property: "og:title", content: "Método Adeus Papada em 21 Dias" },
      { property: "og:description", content: "Transforme sua rotina de autocuidado em 21 dias." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <div className="min-h-screen bg-[#FFF9F6] text-[#332A28] font-sans selection:bg-[#D99B92]/20 scroll-smooth">
      <HeroSection />
      <ProblemSection />
      <MethodSection />
      <ForWhoSection />
      <TestimonialsSection />
      <OfferSection />
      <GuaranteeSection />
      <FAQSection />
      <Footer />
      <MobileStickyCTA />
    </div>
  );
}
