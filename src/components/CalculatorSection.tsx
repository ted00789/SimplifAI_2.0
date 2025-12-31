import { Calculator, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

export function CalculatorSection() {
  return (
    <section id="calculator" className="section-padding bg-secondary/30 relative">
      {/* Glow effect */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-primary/5 rounded-full blur-3xl" />
      
      <div className="section-container relative z-10">
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/30 mb-6">
            <Calculator size={18} className="text-primary" />
            <span className="text-sm font-semibold text-primary">Free Tool</span>
          </div>
          
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
            How much are missed calls{" "}
            <span className="text-gradient">costing you?</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto mb-8">
            Most service businesses lose thousands every month to missed calls and slow follow-ups. 
            Use our free calculator to see exactly how much revenue is slipping away.
          </p>
        </div>

        {/* Calculator embed or CTA */}
        <div className="max-w-4xl mx-auto">
          <div className="card-elevated p-8 md:p-12">
            <div className="aspect-video bg-secondary rounded-xl border border-border overflow-hidden mb-8">
              <iframe
                src="https://missed-call-auditor.lovable.app"
                className="w-full h-full"
                title="Missed Call Calculator"
                loading="lazy"
              />
            </div>
            
            <div className="text-center">
              <p className="text-muted-foreground mb-6">
                Prefer to open in a new tab?
              </p>
              <Button variant="heroOutline" size="lg" asChild>
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
