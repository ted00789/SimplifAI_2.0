import { Navigation } from "@/components/Navigation";
import { HeroSection } from "@/components/HeroSection";
import { IndustryDemoPicker } from "@/components/IndustryDemoPicker";
import { ProblemSection } from "@/components/ProblemSection";
import { StatsSection } from "@/components/StatsSection";
import { SolutionSection } from "@/components/SolutionSection";
import { HowItWorksSection } from "@/components/HowItWorksSection";
import { CalculatorSection } from "@/components/CalculatorSection";
import { FAQSection } from "@/components/FAQSection";
import { FinalCTASection } from "@/components/FinalCTASection";
import { Footer } from "@/components/Footer";
import { BeamsBackground } from "@/components/ui/beams-background";
import { DemoFormPopup, useDemoPopup } from "@/components/DemoFormPopup";

const Index = () => {
  const { open, setOpen, openPopup } = useDemoPopup();

  return (
    <BeamsBackground intensity="subtle" className="min-h-screen bg-background">
      {/* Subtle noise texture */}
      <div
        className="fixed inset-0 pointer-events-none opacity-[0.012] z-[1]"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E")`,
        }}
      />

      <Navigation />
      <main className="relative z-10">
        <HeroSection onOpenDemoForm={openPopup} />
        <IndustryDemoPicker onRequestDemo={openPopup} />
        <ProblemSection />
        <StatsSection />
        <SolutionSection />
        <HowItWorksSection />
        <CalculatorSection />
        <FAQSection />
        <FinalCTASection />
      </main>
      <Footer />

      <DemoFormPopup open={open} onOpenChange={setOpen} />
    </BeamsBackground>
  );
};

export default Index;
