import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Check } from "lucide-react";
import { GlowCard } from "@/components/ui/spotlight-card";

interface PricingCardProps {
  label: string;
  sublabel?: string;
  price: string;
  setupLine: string;
  features: string[];
  finePrint: string;
  ctaText: string;
  badge?: string;
  isBundle?: boolean;
  onCta: () => void;
}

const PricingCard = ({
  label,
  sublabel,
  price,
  setupLine,
  features,
  finePrint,
  ctaText,
  badge,
  isBundle,
  onCta,
}: PricingCardProps) => {
  const inner = (
    <div className="flex flex-col h-full relative z-10">
      {badge && (
        <div className="mb-4">
          <Badge className="bg-primary/20 text-primary border-primary/30 text-xs font-semibold">
            {badge}
          </Badge>
        </div>
      )}
      <h3 className="text-xl font-bold text-foreground">{label}</h3>
      {sublabel && (
        <p className="text-sm text-muted-foreground mt-1">{sublabel}</p>
      )}
      <div className="mt-4 mb-1">
        <span className="text-3xl font-bold text-foreground">{price}</span>
      </div>
      <p className="text-sm text-muted-foreground mb-6">{setupLine}</p>
      <ul className="space-y-3 mb-6 flex-1">
        {features.map((f, i) => (
          <li key={i} className="flex items-start gap-2 text-sm text-muted-foreground">
            <Check className="w-4 h-4 text-primary mt-0.5 shrink-0" />
            <span>{f}</span>
          </li>
        ))}
      </ul>
      <p className="text-xs text-muted-foreground/70 mb-4">{finePrint}</p>
      <Button
        variant={isBundle ? "hero" : "outline"}
        className="w-full"
        onClick={onCta}
      >
        {ctaText}
      </Button>
    </div>
  );

  if (isBundle) {
    return (
      <GlowCard
        glowColor="blue"
        customSize
        className="!aspect-auto !shadow-none !p-6 h-full"
      >
        {inner}
      </GlowCard>
    );
  }

  return (
    <div className="rounded-2xl border border-border bg-card p-6 flex flex-col h-full">
      {inner}
    </div>
  );
};

interface PricingSectionProps {
  onOpenDemoForm: () => void;
}

export const PricingSection = ({ onOpenDemoForm }: PricingSectionProps) => {
  const individualCards: PricingCardProps[] = [
    {
      label: "AI Receptionist",
      price: "$297/mo",
      setupLine: "One-time setup: $697",
      features: [
        "Answers every call 24/7",
        "Books appointments automatically",
        "Gives quotes and handles FAQs",
        "Connects to your CRM and calendar",
        "Sends confirmation and follow-up messages",
      ],
      finePrint:
        "Call credits billed separately. Most businesses spend $30–50/mo.",
      ctaText: "Get Your Free Demo",
      onCta: onOpenDemoForm,
    },
    {
      label: "AI Chatbot",
      price: "$197/mo",
      setupLine: "One-time setup: $497",
      features: [
        "Works on your website, Instagram, WhatsApp and Facebook",
        "Captures and qualifies leads instantly",
        "Books appointments and answers questions",
        "Connects to your CRM and calendar",
        "Sends confirmations automatically",
      ],
      finePrint:
        "Message credits billed separately. Most businesses spend $29/mo.",
      ctaText: "Get Your Free Demo",
      onCta: onOpenDemoForm,
    },
    {
      label: "Website",
      price: "Starting at $1,500",
      setupLine: "One-time project. No monthly fee.",
      features: [
        "Custom built for your industry",
        "SEO and AEO optimized",
        "Designed to convert visitors into booked jobs",
        "Fast, modern, and mobile ready",
        "Built to work with your AI system",
      ],
      finePrint:
        "Final price depends on scope. Discussed on your consultation call.",
      ctaText: "Talk to Us",
      onCta: onOpenDemoForm,
    },
  ];

  const bundleCards: PricingCardProps[] = [
    {
      badge: "Most Popular",
      label: "Customer Coverage Bundle",
      sublabel: "AI Receptionist + AI Chatbot",
      price: "$397/mo",
      setupLine: "One-time setup: $997 — Save $197",
      features: [
        "Every call answered 24/7",
        "Every message replied to instantly",
        "Works across phone, website, Instagram, WhatsApp and Facebook",
        "One connected system, one monthly payment",
        "Fully custom built for your business",
      ],
      finePrint:
        "Call and message credits billed separately based on usage.",
      ctaText: "Get Your Free Demo",
      isBundle: true,
      onCta: onOpenDemoForm,
    },
    {
      badge: "Best Value",
      label: "Full Growth Bundle",
      sublabel: "AI Receptionist + AI Chatbot + Website",
      price: "$397/mo",
      setupLine: "One-time setup: $2,497 — Save $697",
      features: [
        "Everything in the Coverage Bundle",
        "Plus a custom website built to convert",
        "SEO and AEO optimized from day one",
        "A complete lead generation and capture system",
        "Nothing falls through the cracks",
      ],
      finePrint:
        "Call and message credits billed separately based on usage.",
      ctaText: "Get Your Free Demo",
      isBundle: true,
      onCta: onOpenDemoForm,
    },
  ];

  return (
    <section className="py-16 md:py-24 px-4 relative" id="pricing">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12 md:mb-16">
          <Badge variant="outline" className="mb-4 border-primary/30 text-primary">
            Simple, Transparent Pricing
          </Badge>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            Pick What Your Business Needs
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Every solution is custom built for your specific business. No templates. No shortcuts.
          </p>
        </div>

        {/* Individual cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
          {individualCards.map((card, i) => (
            <PricingCard key={i} {...card} />
          ))}
        </div>

        {/* Bundle cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {bundleCards.map((card, i) => (
            <PricingCard key={i} {...card} />
          ))}
        </div>

        {/* Bottom text */}
        <p className="text-center text-sm text-muted-foreground/60 mt-10 max-w-2xl mx-auto">
          Every AI agent is fully custom built for your business, trained on your services, pricing, and FAQs. No copy-paste templates.
        </p>
      </div>
    </section>
  );
};
