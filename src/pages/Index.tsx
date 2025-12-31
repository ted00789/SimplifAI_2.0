import { useEffect } from "react";
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
  useEffect(() => {
    // Load Voiceflow chat widget
    const loadVoiceflow = () => {
      const script = document.createElement("script");
      script.type = "text/javascript";
      script.src = "https://cdn.voiceflow.com/widget-next/bundle.mjs";
      script.onload = () => {
        (window as any).voiceflow?.chat?.load({
          verify: { projectID: "689943e3826bc6ed79cf41f2" },
          url: "https://general-runtime.voiceflow.com",
          versionID: "production",
          voice: {
            url: "https://runtime-api.voiceflow.com",
          },
          render: {
            mode: "embedded",
            target: document.getElementById("voiceflow-chat-container"),
          },
        });
      };
      document.body.appendChild(script);
    };

    // Small delay to ensure container exists
    const timer = setTimeout(loadVoiceflow, 500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <main>
        <HeroSection />
        <ProblemSection />
        <StatsSection />
        <SolutionSection />
        <HowItWorksSection />
        <DemosSection />
        <CalculatorSection />
        <FAQSection />
        <FinalCTASection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
