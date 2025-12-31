import { PhoneMissed, Clock, Users, Zap, MessageSquareX, Trophy } from "lucide-react";

const problems = [
  {
    icon: PhoneMissed,
    text: "Missed calls go straight to voicemail — and voicemails go unanswered",
  },
  {
    icon: Clock,
    text: "After-hours inquiries sit until morning while leads go cold",
  },
  {
    icon: MessageSquareX,
    text: "Form leads get followed up too late — if at all",
  },
  {
    icon: Users,
    text: "Your team can't answer phones and do their jobs at the same time",
  },
  {
    icon: Zap,
    text: "Competitors who respond faster win the business",
  },
  {
    icon: Trophy,
    text: "Speed-to-lead matters — the first to respond usually wins",
  },
];

export function ProblemSection() {
  return (
    <section className="section-padding relative">
      <div className="section-container">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
            Why leads slip through the cracks
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Every missed call and slow response is money walking out the door.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {problems.map((problem, index) => (
            <div
              key={index}
              className="flex items-start gap-4 p-6 rounded-2xl bg-secondary/50 border border-border hover:border-primary/30 transition-all group"
            >
              <div className="flex-shrink-0 w-10 h-10 rounded-xl bg-destructive/10 flex items-center justify-center">
                <problem.icon size={20} className="text-destructive" />
              </div>
              <p className="text-foreground font-medium leading-relaxed">
                {problem.text}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
