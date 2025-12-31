import { Phone, Building2, Leaf, Thermometer, Heart } from "lucide-react";
import { Button } from "@/components/ui/button";

const demos = [
  {
    title: "Car Detailing – AI Receptionist",
    description: "Recommends packages, explains pricing, and books detailing appointments.",
    phone: "+1 (610) 470-2654",
    phoneRaw: "+16104702654",
    icon: Building2,
  },
  {
    title: "Lawn Care & Landscaping – AI Scheduler",
    description: "Qualifies lawn mowing and landscaping requests. Gives pricing ranges and schedules estimates.",
    phone: "+1 (208) 795-0403",
    phoneRaw: "+12087950403",
    icon: Leaf,
  },
  {
    title: "HVAC – AI Service Coordinator",
    description: "Handles emergency and non-emergency calls. Collects details, explains next steps, and schedules service.",
    phone: "+1 (810) 270-0337",
    phoneRaw: "+18102700337",
    icon: Thermometer,
  },
  {
    title: "Massage Therapy – AI Front Desk",
    description: "Answers calls while therapists are in session. Explains services, pricing, and books appointments.",
    phone: "+1 (901) 699-8438",
    phoneRaw: "+19016998438",
    icon: Heart,
  },
];

export function DemosSection() {
  return (
    <section id="demos" className="section-padding relative">
      <div className="section-container">
        {/* Header */}
        <div className="text-center mb-10 md:mb-14">
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
            Call These Numbers to Test <span className="text-gradient">Real AI Receptionists</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-3xl mx-auto">
            These are live demos. Call any number below and talk to a real-sounding AI receptionist that answers calls, gives pricing info, and books appointments.
          </p>
        </div>

        {/* Demo Cards Grid */}
        <div className="grid sm:grid-cols-2 gap-5 md:gap-6 max-w-4xl mx-auto mb-8">
          {demos.map((demo, index) => {
            const IconComponent = demo.icon;
            return (
              <div
                key={index}
                className="card-elevated group hover:border-primary/30 transition-all p-5 sm:p-6"
              >
                <div className="flex items-start gap-4 mb-4">
                  <div className="w-11 h-11 rounded-xl gradient-primary flex items-center justify-center flex-shrink-0">
                    <IconComponent size={22} className="text-primary-foreground" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <h3 className="font-display text-lg font-bold leading-tight mb-1">
                      {demo.title}
                    </h3>
                    <p className="text-sm text-muted-foreground">
                      {demo.description}
                    </p>
                  </div>
                </div>

                {/* Phone Number - Large and Tappable */}
                <div className="flex flex-col gap-3">
                  <a
                    href={`tel:${demo.phoneRaw}`}
                    className="flex items-center gap-2 text-xl sm:text-2xl font-bold text-primary hover:text-primary/80 transition-colors"
                  >
                    <Phone size={20} className="flex-shrink-0" />
                    {demo.phone}
                  </a>
                  <Button
                    asChild
                    variant="outline"
                    className="w-full group-hover:bg-primary group-hover:text-primary-foreground transition-all"
                  >
                    <a href={`tel:${demo.phoneRaw}`}>
                      <Phone size={16} className="mr-2" />
                      Call & Test
                    </a>
                  </Button>
                </div>
              </div>
            );
          })}
        </div>

        {/* Trust Note */}
        <p className="text-center text-sm text-muted-foreground mb-12 md:mb-16">
          These are demo numbers only. Calls are free. No personal data is saved.
        </p>

        {/* CTA Section */}
        <div className="max-w-2xl mx-auto text-center card-elevated p-6 sm:p-8 md:p-10">
          <h3 className="font-display text-2xl md:text-3xl font-bold mb-3">
            Want this for your business?
          </h3>
          <p className="text-muted-foreground mb-6 max-w-xl mx-auto">
            If your business gets calls you can't always answer, this AI receptionist can capture leads, book appointments, and stop missed calls from costing you money.
          </p>
          <Button asChild size="lg" className="w-full sm:w-auto">
            <a
              href="https://calendly.com/ted-manas/ai-appointment-demo"
              target="_blank"
              rel="noopener noreferrer"
            >
              Book a Free Consultation
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
}
