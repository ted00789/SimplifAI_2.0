import { Navigation } from "@/components/Navigation";
import { HeroSection } from "@/components/HeroSection";
import { ProblemSection } from "@/components/ProblemSection";
import { StatsSection } from "@/components/StatsSection";
import { SolutionSection } from "@/components/SolutionSection";
import { HowItWorksSection } from "@/components/HowItWorksSection";
import { DemosSection } from "@/components/DemosSection";
import { CalculatorSection } from "@/components/CalculatorSection";
import { FAQSection } from "@/components/FAQSection";
import { FinalCTASection } from "@/components/FinalCTASection";
import { Footer } from "@/components/Footer";

const Index = () => {

  return (
    <div className="min-h-screen bg-background relative">
      {/* Global unified background */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden">
        {/* Base gradient */}
        <div className="absolute inset-0 bg-gradient-to-b from-background via-background to-background" />
        
        {/* Top left ambient glow */}
        <div className="absolute top-0 left-0 w-[800px] h-[800px] bg-primary/[0.03] rounded-full blur-[150px] -translate-x-1/3 -translate-y-1/3" />
        
        {/* Center ambient glow */}
        <div className="absolute top-[40%] left-1/2 -translate-x-1/2 w-[1000px] h-[600px] bg-primary/[0.02] rounded-full blur-[180px]" />
        
        {/* Bottom right ambient glow */}
        <div className="absolute bottom-0 right-0 w-[700px] h-[700px] bg-primary/[0.04] rounded-full blur-[140px] translate-x-1/4 translate-y-1/4" />
        
        {/* Subtle noise texture */}
        <div 
          className="absolute inset-0 opacity-[0.012]"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E")`,
          }}
        />
      </div>

      <Navigation />
      <main className="relative z-10">
        <HeroSection />
        <ProblemSection />
        <StatsSection />
        <SolutionSection />
        <HowItWorksSection />
        <CalculatorSection />
        <DemosSection />
        <FAQSection />
        <FinalCTASection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
