import { ArrowRight, CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";

const benefits = [
  "Capture every lead, 24/7",
  "Respond faster than your competitors",
  "Book more appointments automatically",
  "Stop losing revenue to missed calls",
];

export function FinalCTASection() {
  return (
    <section className="section-padding relative overflow-hidden">
      {/* Background glow */}
      <div className="absolute inset-0 bg-glow opacity-40" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1000px] h-[600px] bg-primary/10 rounded-full blur-3xl" />
      
      <div className="section-container relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
            Ready to stop losing leads?
          </h2>
          <p className="text-muted-foreground text-lg md:text-xl mb-8 max-w-2xl mx-auto">
            Join service businesses that capture and convert more leads with AI-powered automation.
          </p>

          {/* Benefits */}
          <div className="flex flex-wrap justify-center gap-x-8 gap-y-3 mb-10">
            {benefits.map((benefit, index) => (
              <div key={index} className="flex items-center gap-2">
                <CheckCircle size={18} className="text-primary" />
                <span className="text-sm font-medium text-foreground">{benefit}</span>
              </div>
            ))}
          </div>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button variant="hero" size="xl" asChild>
              <a
                href="https://calendly.com/simplifai-solutions/discovery-call"
                target="_blank"
                rel="noopener noreferrer"
                className="group"
              >
                Book a demo
                <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
              </a>
            </Button>
            <Button variant="heroOutline" size="xl" asChild>
              <a
                href="https://missed-call-auditor.lovable.app"
                target="_blank"
                rel="noopener noreferrer"
              >
                Calculate your missed revenue
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
