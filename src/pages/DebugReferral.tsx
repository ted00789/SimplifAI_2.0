import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { getReferralSource, getReferralSavedAt, clearReferral, getCalendlyUrlWithReferral } from "@/lib/referral";

const CALENDLY_URL = "https://calendly.com/ted-manas/ai-appointment-demo";

export default function DebugReferral() {
  const [referralSource, setReferralSource] = useState<string | null>(null);
  const [savedAt, setSavedAt] = useState<string | null>(null);
  const [calendlyUrl, setCalendlyUrl] = useState<string>("");

  const refresh = () => {
    setReferralSource(getReferralSource());
    setSavedAt(getReferralSavedAt());
    setCalendlyUrl(getCalendlyUrlWithReferral(CALENDLY_URL));
  };

  useEffect(() => {
    refresh();
  }, []);

  const handleClear = () => {
    clearReferral();
    refresh();
  };

  const testRefs = ["adam", "partner123", "google_ads", "facebook"];

  return (
    <div className="min-h-screen bg-background p-8">
      <div className="max-w-2xl mx-auto space-y-8">
        <h1 className="text-3xl font-bold">Referral Tracking Debug</h1>

        {/* Current State */}
        <div className="card-elevated p-6 space-y-4">
          <h2 className="text-xl font-semibold">Current State</h2>
          <div className="space-y-2 font-mono text-sm">
            <p>
              <span className="text-muted-foreground">referral_source:</span>{" "}
              <span className={referralSource ? "text-primary" : "text-muted-foreground"}>
                {referralSource || "null"}
              </span>
            </p>
            <p>
              <span className="text-muted-foreground">referral_saved_at:</span>{" "}
              <span className="text-foreground">{savedAt || "null"}</span>
            </p>
          </div>
          <div className="flex gap-2">
            <Button onClick={refresh} variant="outline" size="sm">
              Refresh
            </Button>
            <Button onClick={handleClear} variant="destructive" size="sm">
              Clear Referral
            </Button>
          </div>
        </div>

        {/* Generated Calendly URL */}
        <div className="card-elevated p-6 space-y-4">
          <h2 className="text-xl font-semibold">Generated Calendly URL</h2>
          <p className="font-mono text-sm break-all bg-secondary p-3 rounded-lg">
            {calendlyUrl}
          </p>
          <Button asChild variant="hero" size="sm">
            <a href={calendlyUrl} target="_blank" rel="noopener noreferrer">
              Open Calendly Link
            </a>
          </Button>
        </div>

        {/* Test Links */}
        <div className="card-elevated p-6 space-y-4">
          <h2 className="text-xl font-semibold">Test with Different Ref Values</h2>
          <p className="text-muted-foreground text-sm">
            Click a link below to simulate visiting with a ref parameter:
          </p>
          <div className="flex flex-wrap gap-2">
            {testRefs.map((ref) => (
              <Button key={ref} asChild variant="outline" size="sm">
                <a href={`/debug-referral?ref=${ref}`}>?ref={ref}</a>
              </Button>
            ))}
          </div>
        </div>

        {/* Instructions */}
        <div className="card-elevated p-6 space-y-3 bg-primary/5 border-primary/20">
          <h2 className="text-xl font-semibold">How to Test</h2>
          <ol className="list-decimal list-inside space-y-2 text-sm text-muted-foreground">
            <li>Click "Clear Referral" to start fresh</li>
            <li>Click one of the test links (e.g., ?ref=adam)</li>
            <li>Page reloads with ref parameter → tracking saves it</li>
            <li>Check "Current State" to see the saved value</li>
            <li>Check "Generated Calendly URL" to see UTM params appended</li>
          </ol>
        </div>

        <Button asChild variant="ghost" className="w-full">
          <a href="/">← Back to Home</a>
        </Button>
      </div>
    </div>
  );
}
