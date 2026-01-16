import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import logo from "@/assets/logo.png";
import { getCalendlyUrlWithReferral } from "@/lib/referral";

const CALENDLY_URL = "https://calendly.com/ted-manas/ai-appointment-demo";

const navItems = [
  { label: "How it works", href: "#how-it-works" },
  { label: "What you get", href: "#solution" },
  { label: "Demos", href: "#demos" },
  { label: "Calculator", href: "#calculator" },
  { label: "Blogs", href: "/blogs" },
];

export function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-background/90 backdrop-blur-lg border-b border-border"
          : "bg-transparent"
      }`}
    >
      <div className="section-container">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <a href="/" className="flex items-center gap-2">
            <img src={logo} alt="SimplifAI Solutions" className="h-[7.5rem] md:h-[10.5rem]" />
          </a>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-1">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="px-4 py-2 text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
              >
                {item.label}
              </a>
            ))}
          </div>

          {/* Desktop CTA */}
          <div className="hidden md:block">
            <Button variant="hero" size="lg" asChild>
              <a
                href={getCalendlyUrlWithReferral(CALENDLY_URL)}
                target="_blank"
                rel="noopener noreferrer"
              >
                Book a FREE consultation
              </a>
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden p-2 text-foreground"
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden pb-6 border-t border-border mt-2 pt-4">
            <div className="flex flex-col gap-2">
              {navItems.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="px-4 py-3 text-base font-medium text-muted-foreground hover:text-foreground hover:bg-secondary rounded-lg transition-colors"
                >
                  {item.label}
                </a>
              ))}
              <Button variant="hero" size="lg" className="mt-4" asChild>
                <a
                  href={getCalendlyUrlWithReferral(CALENDLY_URL)}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Book a FREE consultation
                </a>
              </Button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
