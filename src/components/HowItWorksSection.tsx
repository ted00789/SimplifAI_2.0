import { MessageSquare, Settings, Rocket } from "lucide-react";

const steps = [
  {
    number: "01",
    icon: MessageSquare,
    title: "Tell us about your business",
    description: "Share your services, FAQs, booking rules, and how you want calls handled. We learn your business so the AI sounds like your team.",
  },
  {
    number: "02",
    icon: Settings,
    title: "We build and customize your AI",
    description: "We set up your AI receptionist, chatbot, and automations — trained specifically for your business and ready to work.",
  },
  {
    number: "03",
    icon: Rocket,
    title: "Start capturing leads on autopilot",
    description: "Go live and watch your AI capture, qualify, and book leads 24/7. You focus on the work — we handle the first impression.",
  },
];

export function HowItWorksSection() {
  return (
    <section id="how-it-works" className="section-padding bg-secondary/30">
      <div className="section-container">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
            How it works
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Getting started is simple. We do the heavy lifting so you don't have to.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 lg:gap-12 max-w-5xl mx-auto">
          {steps.map((step, index) => (
            <div key={index} className="relative">
              {/* Connector line */}
              {index < steps.length - 1 && (
                <div className="hidden md:block absolute top-16 left-full w-full h-px bg-gradient-to-r from-primary/50 to-transparent z-0" />
              )}
              
              <div className="relative z-10 text-center md:text-left">
                {/* Step number */}
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-primary/10 border border-primary/30 mb-6">
                  <span className="font-display text-2xl font-bold text-primary">
                    {step.number}
                  </span>
                </div>
                
                <h3 className="font-display text-xl font-bold mb-3">
                  {step.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {step.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
