import { createFileRoute } from "@tanstack/react-router";
import { HeroSection } from "../components/HeroSection";
import { ProblemSection } from "../components/ProblemSection";
import { MethodSection } from "../components/MethodSection";
import { HowItWorks } from "../components/HowItWorks";
import { WhatsIncluded } from "../components/WhatsIncluded";
import { RoutineSection } from "../components/RoutineSection";
import { ForWhoSection } from "../components/ForWhoSection";
import { TestimonialsSection } from "../components/TestimonialsSection";
import { OfferSection } from "../components/OfferSection";
import { GuaranteeSection } from "../components/GuaranteeSection";
import { FAQSection } from "../components/FAQSection";
import { FinalCTA } from "../components/FinalCTA";
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
    <div className="min-h-screen bg-[#FFF9F6] text-[#332A28] font-sans selection:bg-[#D99B92]/20 scroll-smooth relative overflow-hidden">
      {/* Decorative background elements for elegance */}
      <div className="absolute top-0 right-0 w-1/3 h-[800px] bg-gradient-to-bl from-[#F8ECE8]/60 to-transparent -z-10 blur-3xl pointer-events-none" />
      <div className="absolute top-[20%] -left-20 w-80 h-80 bg-[#D99B92]/5 rounded-full -z-10 blur-3xl pointer-events-none" />
      <div className="absolute top-[60%] right-0 w-[500px] h-[500px] bg-[#C9A46A]/5 rounded-full -z-10 blur-3xl pointer-events-none" />

      <HeroSection />
      <ProblemSection />
      <MethodSection />
      <HowItWorks />
      <WhatsIncluded />
      <RoutineSection />
      <ForWhoSection />
      <TestimonialsSection />
      <OfferSection />
      <GuaranteeSection />
      <FAQSection />
      <FinalCTA />
      <Footer />
      <MobileStickyCTA />
    </div>
  );
}
