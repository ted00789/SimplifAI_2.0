import { Phone, MessageCircle, Play } from "lucide-react";
import { Button } from "@/components/ui/button";

export function DemosSection() {
  return (
    <section id="demos" className="section-padding relative">
      <div className="section-container">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
            Try it <span className="text-gradient">yourself</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Experience how natural and helpful our AI tools are. No commitment required.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {/* AI Receptionist Demo */}
          <div className="card-elevated group hover:border-primary/30 transition-all">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-12 h-12 rounded-xl gradient-primary flex items-center justify-center">
                <Phone size={24} className="text-primary-foreground" />
              </div>
              <div>
                <h3 className="font-display text-xl font-bold">AI Receptionist Demo</h3>
                <p className="text-sm text-muted-foreground">Call and experience it live</p>
              </div>
            </div>
            
            <div className="aspect-video bg-secondary rounded-xl flex items-center justify-center mb-6 border border-border">
              <div className="text-center p-6">
                <div className="w-16 h-16 rounded-full bg-primary/20 flex items-center justify-center mx-auto mb-4">
                  <Play size={32} className="text-primary ml-1" />
                </div>
                <p className="text-muted-foreground text-sm">
                  Demo phone widget coming soon
                </p>
              </div>
            </div>
            
            <p className="text-muted-foreground text-sm">
              Call our demo line and hear how our AI receptionist handles inquiries, qualifies leads, and books appointments.
            </p>
          </div>

          {/* AI Chatbot Demo */}
          <div className="card-elevated group hover:border-primary/30 transition-all">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-12 h-12 rounded-xl gradient-primary flex items-center justify-center">
                <MessageCircle size={24} className="text-primary-foreground" />
              </div>
              <div>
                <h3 className="font-display text-xl font-bold">AI Chatbot Demo</h3>
                <p className="text-sm text-muted-foreground">Chat with our AI assistant</p>
              </div>
            </div>
            
            {/* Voiceflow chat container */}
            <div 
              id="voiceflow-chat-container" 
              className="relative w-full rounded-xl mb-6 border border-border overflow-hidden bg-secondary"
              style={{ height: "400px", minHeight: "350px" }}
            >
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center p-6">
                  <div className="w-16 h-16 rounded-full bg-primary/20 flex items-center justify-center mx-auto mb-4 animate-pulse">
                    <MessageCircle size={32} className="text-primary" />
                  </div>
                  <p className="text-muted-foreground text-sm">
                    Loading chat...
                  </p>
                </div>
              </div>
            </div>
            
            <p className="text-muted-foreground text-sm">
              See how our AI chatbot captures leads, answers questions, and guides visitors to take action.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
