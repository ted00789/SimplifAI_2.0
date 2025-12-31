import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "Will this sound like a robot?",
    answer: "No — our AI uses natural-sounding voice technology that's trained on your business. Callers often don't realize they're speaking with an AI. We customize the tone, pacing, and personality to match your brand.",
  },
  {
    question: "Can it actually book appointments?",
    answer: "Absolutely. The AI integrates with your calendar and booking system to schedule appointments in real time. It checks availability, confirms details, and sends reminders — just like a human receptionist would.",
  },
  {
    question: "What if the AI doesn't know the answer?",
    answer: "The AI is trained on your FAQs and business details, but when it encounters something outside its knowledge, it gracefully collects the caller's information and routes the inquiry to your team for follow-up.",
  },
  {
    question: "Does it work after hours?",
    answer: "That's the whole point! Your AI receptionist and chatbot work 24/7/365. Nights, weekends, holidays — your leads are always being captured and qualified, even when you're asleep.",
  },
  {
    question: "How long does setup take?",
    answer: "Most businesses are up and running within 3-5 business days. We handle all the configuration, training, and testing. You just need to share your business info, FAQs, and booking preferences.",
  },
  {
    question: "Is this customized for my specific business?",
    answer: "100%. We don't use generic scripts. Your AI is trained on your services, pricing, FAQs, booking rules, and brand voice. It sounds and acts like an extension of your team.",
  },
  {
    question: "What types of businesses does this work for?",
    answer: "Any service-based business that relies on phone calls and appointments — home services, medical practices, law firms, salons, contractors, and more. If you're losing leads to missed calls, we can help.",
  },
  {
    question: "What happens if I need to make changes?",
    answer: "Easy — just let us know. We can update your AI's responses, booking rules, or call handling at any time. Your AI gets smarter and more tailored over time.",
  },
];

export function FAQSection() {
  return (
    <section className="section-padding">
      <div className="section-container">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
            Common questions
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Everything you need to know about how our AI solutions work.
          </p>
        </div>

        <div className="max-w-3xl mx-auto">
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem
                key={index}
                value={`item-${index}`}
                className="bg-secondary/50 border border-border rounded-xl px-6 data-[state=open]:border-primary/30"
              >
                <AccordionTrigger className="text-left font-display font-semibold text-lg hover:no-underline py-5">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground leading-relaxed pb-5">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
}
