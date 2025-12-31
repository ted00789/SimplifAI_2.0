import { Calculator, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

export function CalculatorSection() {
  return (
    <section id="calculator" className="py-16 md:py-24 lg:py-32 px-4 md:px-6 lg:px-8 bg-secondary/30 relative">
      {/* Glow effect */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-primary/5 rounded-full blur-3xl" />
      
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-8 md:mb-12">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/30 mb-4 md:mb-6">
            <Calculator size={18} className="text-primary" />
            <span className="text-sm font-semibold text-primary">Free Tool</span>
          </div>
          
          <h2 className="font-display text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-3 md:mb-4 px-2">
            How much are missed calls{" "}
            <span className="text-gradient">costing you?</span>
          </h2>
          <p className="text-muted-foreground text-base md:text-lg max-w-2xl mx-auto">
            Most businesses lose money from missed calls. See how much you could save.
          </p>
        </div>

        {/* Calculator embed or CTA */}
        <div className="w-full md:max-w-4xl md:mx-auto">
          <div className="card-elevated p-4 sm:p-6 md:p-12">
            <div className="aspect-[4/3] sm:aspect-video bg-secondary rounded-xl border border-border overflow-hidden mb-6 md:mb-8">
              <iframe
                src="https://missed-call-auditor.lovable.app"
                className="w-full h-full"
                title="Missed Call Calculator"
                loading="lazy"
              />
            </div>
            
            <div className="text-center space-y-4">
              <p className="text-muted-foreground text-sm md:text-base">
                Want a bigger view?
              </p>
              <Button variant="heroOutline" size="lg" asChild className="w-full sm:w-auto min-h-[48px]">
                <a
                  href="https://missed-call-auditor.lovable.app"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group"
                >
                  Open Calculator
                  <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                </a>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
