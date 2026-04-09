import { useState, useEffect, useCallback } from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { X } from "lucide-react";

const INDUSTRY_OPTIONS = [
  "HVAC",
  "Real Estate",
  "Massage and Spa",
  "Car Detailing",
  "Lawn Care and Landscaping",
  "Auto Repair",
  "Other",
];

const SESSION_KEY = "demo_popup_shown";
const WEBHOOK_URL = "https://n8n.srv968272.hstgr.cloud/webhook/f591ac1e-16e3-425b-83a7-118feee0b29e";

interface DemoFormPopupProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

export function DemoFormPopup({ open, onOpenChange }: DemoFormPopupProps) {
  const [firstName, setFirstName] = useState("");
  const [businessName, setBusinessName] = useState("");
  const [businessType, setBusinessType] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    setSubmitting(true);

    try {
      const res = await fetch(WEBHOOK_URL, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          firstName,
          businessName,
          businessType,
          email,
          phone,
          submittedAt: new Date().toISOString(),
        }),
      });

      if (!res.ok) throw new Error("Failed");
      setSubmitted(true);
      sessionStorage.setItem(SESSION_KEY, "submitted");
    } catch {
      setError("Something went wrong. Please try again or email us directly.");
    } finally {
      setSubmitting(false);
    }
  };

  const handleClose = () => {
    onOpenChange(false);
    sessionStorage.setItem(SESSION_KEY, "dismissed");
  };

  if (submitted) {
    return (
      <Dialog open={open} onOpenChange={handleClose}>
        <DialogContent className="bg-card border-border max-w-md">
          <DialogHeader>
            <DialogTitle className="text-2xl font-bold text-foreground">You're on the list 🎉</DialogTitle>
            <DialogDescription className="text-muted-foreground text-base mt-2">
              We're building your custom demo now. Check your email — we'll send it to you within 1 business day.
            </DialogDescription>
          </DialogHeader>
          <Button variant="default" onClick={handleClose} className="mt-4 w-full">
            Got it
          </Button>
        </DialogContent>
      </Dialog>
    );
  }

  return (
    <Dialog open={open} onOpenChange={handleClose}>
      <DialogContent className="bg-card border-border max-w-md max-h-[90vh] overflow-y-auto">
        <button
          onClick={handleClose}
          className="absolute right-4 top-4 rounded-sm opacity-70 hover:opacity-100 text-muted-foreground"
        >
          <X className="h-4 w-4" />
        </button>
        <DialogHeader>
          <DialogTitle className="text-xl font-bold text-foreground pr-6">
            Get a Free AI Receptionist Demo Built for Your Business
          </DialogTitle>
          <DialogDescription className="text-muted-foreground text-sm mt-1">
            We'll build a custom demo for your specific business. Free. No commitment.
          </DialogDescription>
        </DialogHeader>

        <form onSubmit={handleSubmit} className="space-y-4 mt-2">
          <div className="space-y-1.5">
            <Label htmlFor="firstName" className="text-foreground text-sm">First Name *</Label>
            <Input
              id="firstName"
              required
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
              placeholder="John"
              className="bg-secondary/50 border-border"
            />
          </div>
          <div className="space-y-1.5">
            <Label htmlFor="businessName" className="text-foreground text-sm">Business Name *</Label>
            <Input
              id="businessName"
              required
              value={businessName}
              onChange={(e) => setBusinessName(e.target.value)}
              placeholder="Acme Services"
              className="bg-secondary/50 border-border"
            />
          </div>
          <div className="space-y-1.5">
            <Label htmlFor="businessType" className="text-foreground text-sm">Business Type *</Label>
            <Select value={businessType} onValueChange={setBusinessType} required>
              <SelectTrigger className="bg-secondary/50 border-border">
                <SelectValue placeholder="Select your industry" />
              </SelectTrigger>
              <SelectContent className="bg-card border-border">
                {INDUSTRY_OPTIONS.map((opt) => (
                  <SelectItem key={opt} value={opt}>{opt}</SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
          <div className="space-y-1.5">
            <Label htmlFor="email" className="text-foreground text-sm">Email Address *</Label>
            <Input
              id="email"
              type="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="john@example.com"
              className="bg-secondary/50 border-border"
            />
          </div>
          <div className="space-y-1.5">
            <Label htmlFor="phone" className="text-foreground text-sm">
              Phone Number <span className="text-muted-foreground font-normal">(Optional but we'll call you when it's ready)</span>
            </Label>
            <Input
              id="phone"
              type="tel"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              placeholder="(555) 123-4567"
              className="bg-secondary/50 border-border"
            />
          </div>

          {error && (
            <p className="text-destructive text-sm">{error}</p>
          )}

          <Button type="submit" variant="hero" size="lg" className="w-full" disabled={submitting || !businessType}>
            {submitting ? "Submitting…" : "Build My Free Demo"}
          </Button>

          <p className="text-xs text-muted-foreground text-center">
            No spam. No sales pressure. Just your demo.
          </p>
        </form>
      </DialogContent>
    </Dialog>
  );
}

// Hook to manage popup state with auto-open
export function useDemoPopup() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const alreadyShown = sessionStorage.getItem(SESSION_KEY);
    if (alreadyShown) return;

    const timer = setTimeout(() => {
      setOpen(true);
      sessionStorage.setItem(SESSION_KEY, "auto");
    }, 5000);

    return () => clearTimeout(timer);
  }, []);

  const openPopup = useCallback(() => setOpen(true), []);

  return { open, setOpen, openPopup };
}
