import { useState } from "react";
import { Calculator, ArrowRight, Play, RotateCcw } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Slider } from "@/components/ui/slider";
import { Switch } from "@/components/ui/switch";
import { Label } from "@/components/ui/label";

export function CalculatorSection() {
  const [missedCallsWeek, setMissedCallsWeek] = useState(12);
  const [avgJobValue, setAvgJobValue] = useState(300);
  const [winRateAnswered, setWinRateAnswered] = useState(40);
  const [showAdvanced, setShowAdvanced] = useState(false);
  const [winRateAfterMiss, setWinRateAfterMiss] = useState(10);

  // Calculation
  const weeksPerMonth = 4.33;
  const missedCallsMonth = missedCallsWeek * weeksPerMonth;
  const answeredRate = winRateAnswered / 100;
  const missedRate = winRateAfterMiss / 100;
  const speedToLeadBoost = 1.15;

  const lostJobsMonth = missedCallsMonth * Math.max(answeredRate - missedRate, 0);
  const lostJobsMonthInflated = lostJobsMonth * speedToLeadBoost;
  const lostRevenueMonth = Math.round(lostJobsMonthInflated * avgJobValue);
  const lostRevenueYear = lostRevenueMonth * 12;
  const lostJobsDisplay = Math.round(lostJobsMonthInflated);

  const getWinRateLabel = (value: number) => {
    if (value <= 20) return "2 out of 10";
    if (value <= 40) return "4 out of 10";
    if (value <= 60) return "6 out of 10";
    if (value <= 80) return "8 out of 10";
    return "10 out of 10";
  };

  const handleReset = () => {
    setMissedCallsWeek(12);
    setAvgJobValue(300);
    setWinRateAnswered(40);
    setWinRateAfterMiss(10);
    setShowAdvanced(false);
  };

  const scrollToDemos = () => {
    document.getElementById("demos")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="calculator" className="relative">
      {/* Pain Amplifier Lead-in */}
      <div className="py-12 md:py-16 px-4 md:px-6 lg:px-8 bg-muted/50 border-b border-border/50">
        <div className="max-w-2xl mx-auto text-center space-y-4">
          <h3 className="font-display text-xl sm:text-2xl md:text-3xl font-bold text-foreground">
            Most businesses don't realize this…
          </h3>
          <div className="space-y-2 text-muted-foreground text-base md:text-lg">
            <p>When a call goes unanswered, most people don't call back.</p>
            <p>That's a booked job gone — quietly.</p>
            <p>Just a few missed calls a week can turn into thousands lost each year.</p>
          </div>
          <p className="text-foreground font-medium pt-2">
            This calculator shows what missed calls could be costing your business.
          </p>
          <p className="text-primary text-sm pt-2">
            ↓ Enter a few numbers below to see it for yourself
          </p>
        </div>
      </div>

      {/* Calculator Section */}
      <div className="py-16 md:py-24 lg:py-32 px-4 md:px-6 lg:px-8 bg-secondary/30 relative">
        {/* Glow effect */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-primary/5 rounded-full blur-3xl" />
        
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="text-center mb-8 md:mb-12">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/30 mb-4 md:mb-6">
              <Calculator size={18} className="text-primary" />
              <span className="text-sm font-semibold text-primary">Free Tool</span>
            </div>
            
            <h2 className="font-display text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-3 md:mb-4 px-2">
              Missed Call Loss Calculator
            </h2>
            <p className="text-muted-foreground text-base md:text-lg max-w-2xl mx-auto mb-2">
              See how much money you may be losing from missed calls.
            </p>
            <p className="text-muted-foreground/70 text-sm">
              Answer 3 quick questions.
            </p>
          </div>

        {/* Calculator */}
        <div className="w-full md:max-w-2xl md:mx-auto">
          <div className="card-elevated p-5 sm:p-8 md:p-10">
            <div className="space-y-6 md:space-y-8">
              {/* Input 1: Missed calls per week */}
              <div className="space-y-2">
                <Label htmlFor="missedCalls" className="text-base font-medium">
                  Missed calls per week
                </Label>
                <input
                  id="missedCalls"
                  type="number"
                  min="0"
                  value={missedCallsWeek}
                  onChange={(e) => setMissedCallsWeek(Math.max(0, parseInt(e.target.value) || 0))}
                  className="w-full h-12 px-4 rounded-lg bg-background border border-border text-foreground text-lg focus:outline-none focus:ring-2 focus:ring-primary/50"
                />
                <p className="text-sm text-muted-foreground">Calls you don't pick up.</p>
              </div>

              {/* Input 2: Average job value */}
              <div className="space-y-2">
                <Label htmlFor="jobValue" className="text-base font-medium">
                  Average job value ($)
                </Label>
                <input
                  id="jobValue"
                  type="number"
                  min="0"
                  value={avgJobValue}
                  onChange={(e) => setAvgJobValue(Math.max(0, parseInt(e.target.value) || 0))}
                  className="w-full h-12 px-4 rounded-lg bg-background border border-border text-foreground text-lg focus:outline-none focus:ring-2 focus:ring-primary/50"
                />
                <p className="text-sm text-muted-foreground">What one job is worth on average.</p>
              </div>

              {/* Input 3: Win rate when answered */}
              <div className="space-y-3">
                <Label className="text-base font-medium">
                  If you answer the phone, how often do you win the job?
                </Label>
                <div className="pt-2">
                  <Slider
                    value={[winRateAnswered]}
                    onValueChange={(value) => setWinRateAnswered(value[0])}
                    min={0}
                    max={100}
                    step={5}
                    className="w-full"
                  />
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-2xl font-bold text-primary">{winRateAnswered}%</span>
                  <span className="text-sm text-muted-foreground">{getWinRateLabel(winRateAnswered)}</span>
                </div>
              </div>

              {/* Advanced toggle */}
              <div className="pt-2 border-t border-border">
                <div className="flex items-center justify-between py-3">
                  <Label htmlFor="advanced-toggle" className="text-sm text-muted-foreground cursor-pointer">
                    Make it more accurate (optional)
                  </Label>
                  <Switch
                    id="advanced-toggle"
                    checked={showAdvanced}
                    onCheckedChange={setShowAdvanced}
                  />
                </div>

                {/* Advanced input */}
                {showAdvanced && (
                  <div className="space-y-3 pt-4 animate-in fade-in slide-in-from-top-2 duration-200">
                    <Label className="text-base font-medium">
                      After you miss a call, how many do you still win later?
                    </Label>
                    <div className="pt-2">
                      <Slider
                        value={[winRateAfterMiss]}
                        onValueChange={(value) => setWinRateAfterMiss(value[0])}
                        min={0}
                        max={100}
                        step={5}
                        className="w-full"
                      />
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-2xl font-bold text-primary">{winRateAfterMiss}%</span>
                      <span className="text-sm text-muted-foreground">If you call back later, some still book.</span>
                    </div>
                  </div>
                )}
              </div>
            </div>

            {/* Results */}
            <div className="mt-8 p-5 sm:p-6 bg-background rounded-xl border border-border">
              <p className="text-center text-muted-foreground mb-2">Estimated loss per month:</p>
              <p className="text-center text-4xl sm:text-5xl md:text-6xl font-bold text-red-500 mb-4">
                ${lostRevenueMonth.toLocaleString()}
              </p>
              <div className="flex flex-col sm:flex-row justify-center gap-2 sm:gap-6 text-sm text-muted-foreground text-center">
                <span>Lost jobs per month: <strong className="text-foreground">{lostJobsDisplay}</strong></span>
                <span>Estimated loss per year: <strong className="text-foreground">${lostRevenueYear.toLocaleString()}</strong></span>
              </div>
              <p className="text-center text-xs text-muted-foreground/60 mt-4">
                This is an estimate based on what you entered.
              </p>
            </div>

            {/* Reset link */}
            <div className="text-center mt-4">
              <button
                onClick={handleReset}
                className="inline-flex items-center gap-1.5 text-sm text-muted-foreground hover:text-foreground transition-colors"
              >
                <RotateCcw size={14} />
                Reset
              </button>
            </div>

            {/* CTA */}
            <div className="mt-8 pt-6 border-t border-border text-center space-y-4">
              <p className="text-lg font-medium">Want to stop losing these jobs?</p>
              <div className="flex flex-col sm:flex-row gap-3 justify-center">
                <Button variant="hero" size="lg" asChild className="w-full sm:w-auto min-h-[48px]">
                  <a
                    href="https://calendly.com/ted-manas/ai-appointment-demo"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group"
                  >
                    Book a FREE consultation
                    <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                  </a>
                </Button>
                <Button 
                  variant="heroOutline" 
                  size="lg" 
                  onClick={scrollToDemos}
                  className="w-full sm:w-auto min-h-[48px]"
                >
                  <Play size={16} className="mr-1" />
                  Try the AI live
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
