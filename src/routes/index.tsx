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
      {/* High-visibility Premium Background */}
      <div className="fixed inset-0 pointer-events-none -z-20 bg-[#FFF9F6]" />
      
      {/* Visible paper texture */}
      <div className="fixed inset-0 pointer-events-none -z-20 opacity-80 bg-[url('https://www.transparenttextures.com/patterns/cream-paper.png')]" />
      
      {/* Decorative grain / noise for premium feel */}
      <div className="fixed inset-0 pointer-events-none -z-10 opacity-[0.15] bg-[url('https://www.transparenttextures.com/patterns/stardust.png')]" />

      {/* Large, visible organic shapes */}
      <div className="absolute top-0 right-0 w-[80%] h-[1000px] bg-gradient-radial from-[#F8ECE8] via-[#F8ECE8]/20 to-transparent -z-10 blur-[120px] pointer-events-none opacity-90" />
      <div className="absolute top-[10%] -left-[20%] w-[800px] h-[800px] bg-[#D99B92]/20 rounded-full -z-10 blur-[100px] pointer-events-none" />
      <div className="absolute top-[40%] -right-[10%] w-[900px] h-[900px] bg-[#C9A46A]/15 rounded-full -z-10 blur-[150px] pointer-events-none animate-pulse" />
      <div className="absolute bottom-[5%] -left-[10%] w-[1000px] h-[1000px] bg-[#F8ECE8]/80 rounded-full -z-10 blur-[120px] pointer-events-none" />
      
      {/* Floating decorative elements */}
      <div className="absolute top-[20%] left-[5%] w-12 h-12 bg-[#D99B92]/20 rounded-full blur-xl animate-bounce pointer-events-none" style={{ animationDuration: '3s' }} />
      <div className="absolute top-[60%] right-[10%] w-20 h-20 bg-[#C9A46A]/20 rounded-full blur-2xl animate-bounce pointer-events-none" style={{ animationDuration: '5s' }} />
      <div className="absolute top-[85%] left-[15%] w-16 h-16 bg-[#F8ECE8]/40 rounded-full blur-xl animate-bounce pointer-events-none" style={{ animationDuration: '4s' }} />

      
      {/* Border framing the page for a 'stationery' look */}
      <div className="fixed inset-4 border border-[#D99B92]/10 pointer-events-none z-50 rounded-lg" />

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
