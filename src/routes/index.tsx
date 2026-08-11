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
      {/* Soft elegant background textures - Premium Paper Effect */}
      <div className="fixed inset-0 pointer-events-none -z-20 opacity-60 bg-[url('https://www.transparenttextures.com/patterns/handmade-paper.png')] mix-blend-multiply" />
      <div className="fixed inset-0 pointer-events-none -z-20 opacity-[0.03] bg-[url('https://www.transparenttextures.com/patterns/natural-paper.png')] mix-blend-overlay" />

      
      {/* Main decorative organic gradients */}
      <div className="absolute top-0 right-0 w-2/3 h-[1200px] bg-gradient-radial from-[#F8ECE8]/80 via-[#F8ECE8]/30 to-transparent -z-10 blur-[120px] pointer-events-none" />
      <div className="absolute top-[15%] -left-[10%] w-[600px] h-[600px] bg-[#D99B92]/10 rounded-full -z-10 blur-[100px] pointer-events-none" />
      <div className="absolute top-[45%] right-[-5%] w-[700px] h-[700px] bg-[#C9A46A]/8 rounded-full -z-10 blur-[130px] pointer-events-none" />
      <div className="absolute bottom-[10%] left-[-5%] w-[800px] h-[800px] bg-[#F8ECE8]/60 rounded-full -z-10 blur-[110px] pointer-events-none" />
      
      {/* Extra floating subtle accents */}
      <div className="absolute top-[75%] right-[15%] w-[400px] h-[400px] bg-[#D99B92]/5 rounded-full -z-10 blur-[80px] animate-pulse pointer-events-none" />

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
