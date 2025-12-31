import { Phone, MessageCircle, Workflow, CheckCircle } from "lucide-react";

const solutions = [
  {
    icon: Phone,
    title: "AI Receptionist (Voice)",
    description: "Never miss another call. Your AI answers 24/7.",
    features: [
      "Answers calls instantly, day or night",
      "Qualifies callers with smart questions",
      "Routes calls or books appointments automatically",
    ],
  },
  {
    icon: MessageCircle,
    title: "AI Chatbot (Website)",
    description: "Turn website visitors into booked leads.",
    features: [
      "Captures lead info the moment they land",
      "Answers common questions instantly",
      "Guides visitors to book or call",
    ],
  },
  {
    icon: Workflow,
    title: "Automations",
    description: "Speed-to-lead on autopilot.",
    features: [
      "Instant follow-up texts and emails",
      "Lead routing to the right team member",
      "No manual work required",
    ],
  },
];

export function SolutionSection() {
  return (
    <section id="solution" className="section-padding relative">
      {/* Subtle glow effect */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] bg-primary/5 rounded-full blur-3xl" />
      
      <div className="section-container relative z-10">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
            How you <span className="text-gradient">fix it</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Three AI-powered tools that work together to capture every lead.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
          {solutions.map((solution, index) => (
            <div
              key={index}
              className="card-elevated group hover:border-primary/30 transition-all duration-300"
            >
              <div className="w-14 h-14 rounded-2xl gradient-primary flex items-center justify-center mb-6">
                <solution.icon size={28} className="text-primary-foreground" />
              </div>
              
              <h3 className="font-display text-xl font-bold mb-2">
                {solution.title}
              </h3>
              <p className="text-muted-foreground mb-6">
                {solution.description}
              </p>
              
              <ul className="space-y-3">
                {solution.features.map((feature, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <CheckCircle size={18} className="text-primary flex-shrink-0 mt-0.5" />
                    <span className="text-sm text-foreground">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
