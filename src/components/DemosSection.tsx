import { Phone, Building2, Leaf, Thermometer, Heart, MessageSquare, Home, Car } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useEffect } from "react";
import { getCalendlyUrlWithReferral } from "@/lib/referral";

const CALENDLY_URL = "https://calendly.com/ted-manas/ai-appointment-demo";

const demos = [
  {
    title: "Car Detailing – AI Receptionist",
    description: "Recommends packages, explains pricing, and books detailing appointments.",
    phone: "+1 (878) 879-2272",
    phoneRaw: "+18788792272",
    icon: Building2,
  },
  {
    title: "Lawn Care & Landscaping – AI Scheduler",
    description: "Qualifies lawn mowing and landscaping requests. Gives pricing ranges and schedules estimates.",
    phone: "+1 (878) 879-2399",
    phoneRaw: "+18788792399",
    icon: Leaf,
  },
  {
    title: "HVAC – AI Service Coordinator",
    description: "Handles emergency and non-emergency calls. Collects details, explains next steps, and schedules service.",
    phone: "+1 (959) 444-4307",
    phoneRaw: "+19594444307",
    icon: Thermometer,
  },
  {
    title: "Massage Therapy – AI Front Desk",
    description: "Answers calls while therapists are in session. Explains services, pricing, and books appointments.",
    phone: "+1 (207) 830-4223",
    phoneRaw: "+12078304223",
    icon: Heart,
  },
  {
    title: "Real Estate – AI Receptionist & Lead Qualifier",
    description: "Handles incoming calls 24/7, answers common questions, captures buyer and seller details, and qualifies leads before routing serious prospects to an agent or booking a callback.",
    phone: "+1 (901) 460-9886",
    phoneRaw: "+19014609886",
    icon: Home,
  },
  {
    title: "Car Service & Auto Repair – AI Appointment Coordinator",
    description: "Answers calls 24/7, handles common service questions, captures customer details, and helps schedule appointments so no call turns into lost work.",
    phone: "+1 (610) 904-9146",
    phoneRaw: "+16109049146",
    icon: Car,
  },
];

export function DemosSection() {
  useEffect(() => {
    // Load Voiceflow chat widget for demos section
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

    const timer = setTimeout(loadVoiceflow, 500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <section id="demos" className="section-padding relative overflow-x-hidden">
      <div className="section-container max-w-full overflow-hidden">
        {/* Header */}
        <div className="text-center mb-8 md:mb-12 px-4">
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
            Call These Numbers to Test <span className="text-gradient">Real AI Receptionists</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-3xl mx-auto break-words">
            These are live demos. Call any number below and talk to a real-sounding AI receptionist that answers calls, gives pricing info, and books appointments.
          </p>
        </div>

        {/* Demo Cards Grid */}
        <div className="grid sm:grid-cols-2 gap-4 md:gap-5 max-w-4xl mx-auto mb-6 w-full">
          {demos.map((demo, index) => {
            const IconComponent = demo.icon;
            return (
              <div
                key={index}
                className="card-elevated group hover:border-primary/30 transition-all p-5 sm:p-6 flex flex-col h-full overflow-hidden"
              >
                <div className="flex items-start gap-4 mb-4 flex-1">
                  <div className="w-11 h-11 rounded-xl gradient-primary flex items-center justify-center flex-shrink-0">
                    <IconComponent size={22} className="text-primary-foreground" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <h3 className="font-display text-lg font-bold leading-tight mb-1 break-words">
                      {demo.title}
                    </h3>
                    <p className="text-sm text-muted-foreground break-words">
                      {demo.description}
                    </p>
                  </div>
                </div>

                {/* Phone Number - Large and Tappable */}
                <div className="flex flex-col gap-3 mt-auto">
                  <a
                    href={`tel:${demo.phoneRaw}`}
                    className="flex items-center gap-2 text-xl sm:text-2xl font-bold text-primary hover:text-primary/80 transition-colors break-all"
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
        <p className="text-center text-sm text-muted-foreground mb-10 md:mb-12">
          These are demo numbers only. Calls are free. No personal data is saved.
        </p>

        {/* Chatbot Section */}
        <div className="flex justify-center w-full mb-10 md:mb-12">
          <div className="w-full max-w-[900px] px-4">
            <div className="text-center mb-6">
              <div className="inline-flex items-center gap-2 mb-3">
                <MessageSquare size={24} className="text-primary" />
                <h3 className="font-display text-2xl md:text-3xl font-bold">
                  Prefer texting? Try the chatbot.
                </h3>
              </div>
              <p className="text-muted-foreground max-w-xl mx-auto">
                Ask questions, see how it qualifies leads, and watch it book appointments.
              </p>
            </div>
            <div className="card-elevated p-4 sm:p-6 rounded-2xl">
              <div 
                id="voiceflow-chat-container" 
                className="w-full h-[520px] sm:h-[600px] md:h-[700px] rounded-xl overflow-hidden bg-secondary/30"
              />
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="max-w-2xl mx-auto text-center card-elevated p-6 sm:p-8 md:p-10">
          <h3 className="font-display text-2xl md:text-3xl font-bold mb-3">
            Want this for your business?
          </h3>
          <p className="text-muted-foreground mb-6 max-w-xl mx-auto break-words">
            If your business gets calls you can't always answer, this AI receptionist can capture leads, book appointments, and stop missed calls from costing you money.
          </p>
          <Button asChild size="lg" className="w-full sm:w-auto">
            <a
              href={getCalendlyUrlWithReferral(CALENDLY_URL)}
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
