import { PhoneMissed, Clock, Users, Zap, MessageSquareX, Trophy } from "lucide-react";
import { motion, type Variants } from "framer-motion";

const problems = [
  {
    icon: PhoneMissed,
    title: "Missed Calls",
    text: "Missed calls go to voicemail — and most never get returned.",
  },
  {
    icon: Clock,
    title: "After Hours",
    text: "After-hours calls sit overnight while people move on.",
  },
  {
    icon: MessageSquareX,
    title: "Form Leads",
    text: "Form leads get followed up too late — or not at all.",
  },
  {
    icon: Users,
    title: "Busy Teams",
    text: "Your team can't answer phones and do the work at the same time.",
  },
  {
    icon: Zap,
    title: "Speed Wins",
    text: "The business that replies first usually wins the job.",
  },
  {
    icon: Trophy,
    title: "Slow Response",
    text: "Slow response means lost jobs.",
  },
];

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2,
    },
  },
};

const cardVariants: Variants = {
  hidden: { 
    opacity: 0, 
    y: 30,
  },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut" as const,
    },
  },
};

const headlineVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: {
      duration: 0.7,
      ease: "easeOut" as const,
    },
  },
};

export function ProblemSection() {
  return (
    <section className="relative py-24 md:py-32 lg:py-40 overflow-hidden">
      {/* Background layers */}
      <div className="absolute inset-0 bg-background" />
      
      {/* Radial gradients */}
      <div className="absolute top-0 left-0 w-[600px] h-[600px] bg-primary/5 rounded-full blur-[120px] -translate-x-1/2 -translate-y-1/2" />
      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-primary/8 rounded-full blur-[100px] translate-x-1/3 translate-y-1/3" />
      
      {/* Subtle glow behind card grid */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80%] h-[60%] bg-primary/3 rounded-full blur-[150px]" />
      
      {/* Noise texture overlay */}
      <div 
        className="absolute inset-0 opacity-[0.015]"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E")`,
        }}
      />

      <div className="section-container relative z-10">
        {/* Headline */}
        <motion.div 
          className="text-center mb-16 md:mb-20"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={headlineVariants}
        >
          <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold mb-6 relative inline-block">
            <span className="relative">
              Why leads slip through the cracks
              {/* Subtle glow effect on headline */}
              <span className="absolute inset-0 blur-2xl bg-primary/20 -z-10 scale-110" />
            </span>
          </h2>
          <p className="text-muted-foreground text-lg md:text-xl max-w-2xl mx-auto leading-relaxed">
            Every missed call and slow response is money walking out the door.
          </p>
        </motion.div>

        {/* Cards grid */}
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-6 max-w-6xl mx-auto"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          variants={containerVariants}
        >
          {problems.map((problem, index) => (
            <motion.div
              key={index}
              variants={cardVariants}
              whileHover={{ 
                y: -8,
                transition: { duration: 0.3, ease: "easeOut" }
              }}
              className="group relative"
            >
              {/* Card glow on hover */}
              <div className="absolute inset-0 rounded-2xl bg-primary/10 opacity-0 group-hover:opacity-100 blur-xl transition-opacity duration-500" />
              
              {/* Card */}
              <div className="relative h-full p-6 md:p-8 rounded-2xl backdrop-blur-xl bg-card/40 border border-border/50 group-hover:border-primary/40 transition-all duration-500 shadow-lg shadow-black/10 group-hover:shadow-xl group-hover:shadow-primary/5">
                {/* Icon badge */}
                <div className="relative mb-5">
                  <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-gradient-to-br from-primary/20 to-primary/5 border border-primary/20 group-hover:border-primary/40 transition-all duration-300 group-hover:shadow-lg group-hover:shadow-primary/20">
                    <motion.div
                      whileHover={{ 
                        scale: 1.1,
                        rotate: [0, -5, 5, 0],
                        transition: { duration: 0.4 }
                      }}
                    >
                      <problem.icon 
                        size={22} 
                        className="text-primary transition-all duration-300" 
                      />
                    </motion.div>
                  </div>
                </div>
                
                {/* Title */}
                <h3 className="font-display text-xl font-bold text-foreground mb-3 group-hover:text-primary/90 transition-colors duration-300">
                  {problem.title}
                </h3>
                
                {/* Description */}
                <p className="text-muted-foreground leading-relaxed text-[15px]">
                  {problem.text}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
