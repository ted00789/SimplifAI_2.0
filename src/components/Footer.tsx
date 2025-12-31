import { Button } from "@/components/ui/button";
import logo from "@/assets/logo.png";
import { getCalendlyUrlWithReferral } from "@/lib/referral";

const CALENDLY_URL = "https://calendly.com/ted-manas/ai-appointment-demo";

const footerLinks = [
  { label: "How it works", href: "#how-it-works" },
  { label: "What you get", href: "#solution" },
  { label: "Demos", href: "#demos" },
  { label: "Calculator", href: "#calculator" },
];

export function Footer() {
  return (
    <footer className="border-t border-border bg-card">
      <div className="section-container py-12 md:py-16">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          {/* Logo and tagline */}
          <div className="text-center md:text-left">
            <a href="/" className="inline-block mb-3">
              <img src={logo} alt="SimplifAI Solutions" className="h-8" />
            </a>
            <p className="text-sm text-muted-foreground max-w-xs">
              AI-powered lead capture for service businesses. Never miss another opportunity.
            </p>
          </div>

          {/* Navigation */}
          <nav className="flex flex-wrap justify-center gap-6">
            {footerLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="text-sm text-muted-foreground hover:text-foreground transition-colors"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* CTA */}
          <Button variant="hero" asChild>
            <a
              href={getCalendlyUrlWithReferral(CALENDLY_URL)}
              target="_blank"
              rel="noopener noreferrer"
            >
              Book a FREE consultation
            </a>
          </Button>
        </div>

        {/* Bottom bar */}
        <div className="mt-12 pt-8 border-t border-border flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} SimplifAI Solutions. All rights reserved.
          </p>
          <div className="flex items-center gap-6">
            <a href="#" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
              Privacy Policy
            </a>
            <a href="#" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
