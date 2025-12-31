import { ArrowRight, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";

export function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center pt-20 overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0 bg-glow opacity-30" />
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[800px] h-[600px] bg-primary/5 rounded-full blur-3xl" />
      
      <div className="section-container relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-secondary border border-border mb-8 animate-fade-in">
            <Phone size={16} className="text-primary" />
            <span className="text-sm font-medium text-muted-foreground">
              AI-powered lead capture for service businesses
            </span>
          </div>

          {/* Headline */}
          <h1 className="font-display text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold tracking-tight mb-6 animate-fade-in" style={{ animationDelay: "0.1s" }}>
            Stop losing leads when{" "}
            <span className="text-gradient">you miss calls</span>
          </h1>

          {/* Subheadline */}
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-10 animate-fade-in" style={{ animationDelay: "0.2s" }}>
            AI receptionists, chatbots, and automations that capture, qualify, and book your leads 24/7 — so you never lose another customer to a missed call or slow follow-up.
          </p>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-fade-in" style={{ animationDelay: "0.3s" }}>
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
                Try the Missed Call Calculator
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
