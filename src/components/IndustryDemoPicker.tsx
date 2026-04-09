import { useState } from "react";
import { Phone, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

const INDUSTRY_NUMBERS: Record<string, string> = {
  "HVAC": "+1 (959) 444-4307",
  "Real Estate": "+1 (901) 460-9886",
  "Massage and Spa": "+1 (207) 830-4223",
  "Car Detailing": "+1 (878) 879-2272",
  "Lawn Care and Landscaping": "+1 (878) 879-2399",
  "Auto Repair": "+1 (610) 904-9146",
};

interface IndustryDemoPickerProps {
  onRequestDemo: () => void;
}

export function IndustryDemoPicker({ onRequestDemo }: IndustryDemoPickerProps) {
  const [selected, setSelected] = useState("");

  const phoneNumber = INDUSTRY_NUMBERS[selected];
  const isOther = selected === "Other";
  const telHref = phoneNumber ? `tel:${phoneNumber.replace(/[^+\d]/g, "")}` : "";

  return (
    <section className="relative z-10 section-padding">
      <div className="section-container">
        <div className="max-w-2xl mx-auto">
          <div className="card-elevated text-center space-y-6">
            <div>
              <h2 className="font-display text-2xl md:text-3xl font-bold text-foreground mb-2">
                Hear a live AI receptionist for your industry right now
              </h2>
              <p className="text-muted-foreground">
                These are real working demos. Pick your industry and call the number.
              </p>
            </div>

            <div className="max-w-sm mx-auto">
              <Select value={selected} onValueChange={setSelected}>
                <SelectTrigger className="bg-secondary/50 border-border h-12 text-base">
                  <SelectValue placeholder="Select your industry" />
                </SelectTrigger>
                <SelectContent className="bg-card border-border">
                  {["HVAC", "Real Estate", "Massage and Spa", "Car Detailing", "Lawn Care and Landscaping", "Auto Repair", "Other"].map((opt) => (
                    <SelectItem key={opt} value={opt}>{opt}</SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>

            {/* Results area */}
            {selected && (
              <div className="animate-fade-in">
                {isOther ? (
                  <div className="space-y-4">
                    <p className="text-muted-foreground">
                      We'll build one for your industry. Click below to request yours free.
                    </p>
                    <Button variant="hero" size="lg" onClick={onRequestDemo}>
                      Get My Free Demo
                      <ArrowRight size={18} />
                    </Button>
                  </div>
                ) : phoneNumber ? (
                  <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                    <span className="text-xl font-semibold text-foreground font-mono tracking-wide">
                      {phoneNumber}
                    </span>
                    <Button variant="hero" size="lg" asChild>
                      <a href={telHref} className="group">
                        <Phone size={18} />
                        Call and Test Now
                      </a>
                    </Button>
                  </div>
                ) : null}
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
