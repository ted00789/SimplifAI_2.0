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
    <section className="section-padding relative">
      <div className="section-container relative z-10">
        {/* Headline */}
        <motion.div 
          className="text-center mb-12 md:mb-16"
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
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-5 max-w-6xl mx-auto"
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
