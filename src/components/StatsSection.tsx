import { XCircle, CheckCircle } from "lucide-react";

const withoutAI = [
  "Calls missed after hours",
  "Slow follow-up",
  "Leads go cold",
  "Jobs lost to faster competitors",
];

const withAI = [
  "Calls answered 24/7",
  "Instant responses",
  "More jobs booked",
  "Better first impression",
];

const stats = [
  "Up to 50% of calls go unanswered without coverage",
  "The first business to respond often wins the job",
  "Fast response can double your chance of booking",
];

export function StatsSection() {
  return (
    <section className="section-padding relative">
      <div className="section-container">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
            What happens with and without an AI receptionist
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto mb-12">
          {/* Without AI */}
          <div className="p-6 md:p-8 rounded-2xl bg-destructive/5 border border-destructive/20">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-xl bg-destructive/10 flex items-center justify-center">
                <XCircle size={20} className="text-destructive" />
              </div>
              <h3 className="font-display text-xl font-bold text-destructive">Without AI</h3>
            </div>
            <ul className="space-y-3">
              {withoutAI.map((item, index) => (
                <li key={index} className="flex items-start gap-3">
                  <XCircle size={18} className="text-destructive mt-0.5 flex-shrink-0" />
                  <span className="text-foreground">{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* With AI */}
          <div className="p-6 md:p-8 rounded-2xl bg-primary/5 border border-primary/20">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center">
                <CheckCircle size={20} className="text-primary" />
              </div>
              <h3 className="font-display text-xl font-bold text-primary">With AI</h3>
            </div>
            <ul className="space-y-3">
              {withAI.map((item, index) => (
                <li key={index} className="flex items-start gap-3">
                  <CheckCircle size={18} className="text-primary mt-0.5 flex-shrink-0" />
                  <span className="text-foreground">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Stats */}
        <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="text-center p-6 rounded-xl bg-secondary/50 border border-border"
            >
              <p className="text-foreground font-medium">{stat}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
