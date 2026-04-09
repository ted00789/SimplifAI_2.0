import { ArrowRight, Calculator } from "lucide-react";
import { Button } from "@/components/ui/button";

interface HeroSectionProps {
  onOpenDemoForm: () => void;
}

export function HeroSection({ onOpenDemoForm }: HeroSectionProps) {
  return (
    <section className="relative min-h-[90vh] flex items-center pt-20 overflow-hidden">
      <div className="section-container relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-secondary/60 backdrop-blur-sm border border-border/50 mb-8 animate-fade-in">
            <span className="text-sm font-medium text-muted-foreground">
              AI-powered lead capture for service businesses
            </span>
          </div>

          {/* Headline */}
          <h1 className="font-display text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold tracking-tight mb-6 animate-fade-in" style={{ animationDelay: "0.1s" }}>
            Stop losing jobs to{" "}
            <span className="text-gradient">missed calls</span>
          </h1>

          {/* Subheadline */}
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-10 animate-fade-in" style={{ animationDelay: "0.2s" }}>
            When someone calls or visits your site, our AI answers right away and helps book the job — even after hours.
          </p>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-fade-in" style={{ animationDelay: "0.3s" }}>
            <Button variant="hero" size="xl" onClick={onOpenDemoForm} className="group">
              Get Your Free Personalized Demo
              <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button variant="heroOutline" size="xl" asChild>
              <a href="#calculator">
                <Calculator size={20} />
                See How Much You're Losing
              </a>
            </Button>
          </div>

          {/* Trust indicator */}
          <p className="mt-12 text-sm text-muted-foreground animate-fade-in" style={{ animationDelay: "0.4s" }}>
            Trusted by service businesses to capture leads around the clock
          </p>
        </div>
      </div>
    </section>
  );
}
