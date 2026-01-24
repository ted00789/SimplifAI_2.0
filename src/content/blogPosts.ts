import matter from "gray-matter";

export interface FAQItem {
  question: string;
  answer: string;
}

export interface BlogPost {
  slug: string;
  title: string;
  date: string;
  excerpt: string;
  content: string;
  isHtml?: boolean;
  faqItems?: FAQItem[];
  ogImage?: string;
}

/**
 * MARKDOWN POSTS (auto-loaded)
 * Location: src/content/blog/*.md
 *
 * Each .md file should start with:
 * ---
 * title: "..."
 * date: "YYYY-MM-DD"
 * excerpt: "..."
 * ogImage: "/path.png"     (optional)
 * ---
 *
 * Then the markdown content below.
 */
const mdModules = import.meta.glob("./blog/*.md", { as: "raw", eager: true });

const markdownPosts: BlogPost[] = Object.entries(mdModules).map(([path, raw]) => {
  const slug = path.split("/").pop()!.replace(".md", "");
  const { data, content } = matter(raw as string);

  return {
    slug,
    title: String(data.title ?? slug),
    date: String(data.date ?? ""),
    excerpt: String(data.excerpt ?? ""),
    content, // markdown content
    isHtml: false,
    ogImage: data.ogImage ? String(data.ogImage) : undefined,
  };
});

/**
 * YOUR EXISTING POSTS (hardcoded) — unchanged
 */
const hardcodedPosts: BlogPost[] = [
  {
    slug: "how-an-ai-receptionist-helps-your-business",
    title: "How an AI Receptionist Actually Helps Your Business (Without the Hype)",
    date: "2024-01-20",
    excerpt:
      "An AI receptionist helps your business by answering every call instantly, capturing leads while they are still hot, and removing the pressure of constant interruptions from your day.",
    isHtml: true,
    content: `
<section itemscope itemtype="https://schema.org/Article">
  <meta itemprop="headline" content="How an AI Receptionist Actually Helps Your Business (Without the Hype)" />
  <meta itemprop="description" content="An AI receptionist helps your business by answering every call instantly, capturing leads while they are still hot, and removing the pressure of constant interruptions from your day." />
  <meta itemprop="datePublished" content="2024-01-20" />

  <section class="quick-answer" itemprop="abstract">
    <h2>Quick Answer</h2>
    <p>An AI receptionist helps your business by answering every call instantly, capturing leads while they are still hot, and removing the pressure of constant interruptions from your day. Instead of replacing your team, it fills the costly gaps where missed calls quietly turn into lost revenue.</p>
  </section>

  <section>
    <h2>Introduction</h2>
    <p>Most businesses do not struggle because their service is bad or their pricing is wrong.</p>
    <p>They struggle because customers cannot reach them at the exact moment they are ready to buy.</p>
    <p>When someone picks up the phone, they usually have intent. They are not browsing, scrolling, or "thinking about it." They are looking for a solution right now. If no one answers, they move on quickly, often without leaving a voicemail or giving your business a second thought.</p>
    <p>This is where an AI receptionist becomes practical instead of gimmicky. Not as a flashy tool, but as a system that protects opportunities you are already paying for through ads, referrals, and word of mouth.</p>
  </section>

  <section>
    <h2>The Hidden Cost of Missed Calls</h2>
    <p>Many business owners underestimate how much damage missed calls actually cause because the loss is invisible. You do not see a "lost sale" notification. The phone simply stops ringing.</p>

    <h3>Customers Call When It's Inconvenient</h3>
    <p>Your customers do not plan their problems around your schedule. They call:</p>
    <ul>
      <li>While you are on a job</li>
      <li>When you are driving</li>
      <li>During evenings and weekends</li>
      <li>When your staff is overwhelmed</li>
    </ul>
    <p>From the customer's perspective, none of that matters. If the call is not answered, they assume the business is unavailable or unreliable, even if that is not true.</p>

    <h3>One Missed Call Is Often One Lost Customer</h3>
    <p>In competitive industries, customers usually contact more than one business. The first one to respond often wins, not because it is better, but because it was present at the right moment.</p>
    <p>If your average job value is $300 and you miss just two calls per day, that can quietly turn into thousands of dollars in lost revenue every month without you realizing where it went.</p>
  </section>

  <section>
    <h2>What an AI Receptionist Actually Does for You</h2>
    <p>An AI receptionist is not meant to sound robotic or complicated. Its role is simple but powerful: answer every call, respond immediately, and move the conversation forward instead of letting it die.</p>

    <h3>Always-On Call Answering</h3>
    <p>An AI receptionist answers calls instantly, without rings, hold music, or voicemail. This immediate response keeps callers engaged and reassures them that your business is active and attentive.</p>
    <p>For many customers, just hearing a friendly voice right away is enough to keep them on the line instead of hanging up.</p>

    <h3>Handling Repetitive Questions Automatically</h3>
    <p>Most inbound calls ask the same basic questions:</p>
    <ul>
      <li>Are you open right now?</li>
      <li>Do you serve my area?</li>
      <li>What services do you offer?</li>
      <li>Can I book an appointment?</li>
    </ul>
    <p>Instead of pulling you away from work, the AI receptionist handles these conversations smoothly, giving accurate answers and guiding callers to the next step.</p>

    <h3>Capturing Lead Information the Right Way</h3>
    <p>Rather than a missed call or a vague voicemail, the AI receptionist collects structured information such as:</p>
    <ul>
      <li>Name</li>
      <li>Phone number</li>
      <li>Reason for calling</li>
      <li>Preferred next step</li>
    </ul>
    <p>This means when you follow up, you are not guessing or starting from zero. You already know why they called and what they are looking for.</p>
  </section>

  <section>
    <h2>Why Speed of Response Changes Everything</h2>
    <p>Speed is one of the most underrated advantages in business, especially when it comes to inbound calls.</p>

    <h3>First Response Often Wins the Job</h3>
    <p>When a customer calls multiple businesses, the one that answers first usually sets the tone. Even if your competitors are equally skilled, being the first to respond gives you a massive edge.</p>
    <p>An AI receptionist ensures you are always first, even when you are busy, asleep, or offline.</p>

    <h3>After-Hours Calls Are High-Intent</h3>
    <p>Calls that come in after hours are often more serious. These callers are actively trying to solve a problem, not casually shopping around.</p>
    <p>By using an AI receptionist, you capture these high-intent leads instead of letting them disappear overnight.</p>
  </section>

  <section>
    <h2>Real-World Impact on Small Businesses</h2>
    <p>The biggest difference an AI receptionist makes is not theoretical. It shows up in daily operations and long-term growth.</p>

    <h3>Before Using an AI Receptionist</h3>
    <p>Many small businesses experience:</p>
    <ul>
      <li>Frequent missed calls</li>
      <li>Stress from constant interruptions</li>
      <li>Late-night call-backs</li>
      <li>Incomplete or forgotten lead details</li>
    </ul>
    <p>Even with great service, this creates friction that slowly limits growth.</p>

    <h3>After Implementing an AI Receptionist</h3>
    <p>With an AI receptionist in place:</p>
    <ul>
      <li>Every call is answered</li>
      <li>Leads are logged automatically</li>
      <li>Follow-ups are more effective</li>
      <li>The owner regains focus and control</li>
    </ul>
    <p>The business does not change what it offers. It simply stops leaking opportunities.</p>
  </section>

  <section>
    <h2>It Supports Your Team Instead of Replacing Them</h2>
    <p>One common concern is whether an AI receptionist feels impersonal. In reality, it often improves the human experience for both staff and customers.</p>

    <h3>Acting as a Digital Front Desk</h3>
    <p>The AI receptionist handles the first interaction, filtering calls and gathering information. Your team steps in only when their expertise is truly needed.</p>
    <p>This creates a smoother workflow where humans focus on high-value conversations instead of constant interruptions.</p>

    <h3>Customers Care About Help, Not Technology</h3>
    <p>Most callers do not care whether the first voice they hear is human or AI. They care about clarity, speed, and being taken seriously.</p>
    <p>When those needs are met, trust builds naturally.</p>
  </section>

  <section>
    <h2>The Mental Relief Business Owners Don't Expect</h2>
    <p>Beyond revenue, one of the biggest benefits of an AI receptionist is psychological.</p>

    <h3>Fewer Interruptions, Better Focus</h3>
    <p>Constant calls break concentration and slow down work. Over time, this leads to fatigue and frustration.</p>
    <p>By letting an AI receptionist handle incoming calls, you protect your attention and energy, which improves both productivity and decision-making.</p>
  </section>

  <section>
    <h2>Conclusion: Is an AI Receptionist Worth It?</h2>
    <p>An AI receptionist helps your business by answering every call, responding instantly, capturing real opportunities, and giving you back control of your time and attention.</p>
  </section>
</section>

<!-- FAQ_SECTION -->
    `,
    faqItems: [
      {
        question: "Does an AI receptionist sound robotic?",
        answer:
          "No. Modern systems sound natural enough that most callers don't question it. The technology has advanced significantly, using natural language processing to create conversational, human-like interactions.",
      },
      {
        question: "Will customers get annoyed talking to AI?",
        answer:
          "Customers care about getting helped quickly. If their problem is solved, they're fine. Studies show that customers prefer fast, efficient service over waiting on hold for a human.",
      },
      {
        question: "Can it handle complicated calls?",
        answer:
          "It handles common requests and hands off complex situations to a human when needed. The AI is trained to recognize when a call requires human expertise and seamlessly transfers those calls.",
      },
      {
        question: "Is it expensive?",
        answer:
          "It usually costs far less than a full-time receptionist and recovers lost revenue quickly. Most businesses see a positive ROI within the first month from captured leads they would have otherwise missed.",
      },
      {
        question: "Does it replace staff?",
        answer:
          "No. It supports your staff by handling overflow and repetitive work. Think of it as a tool that frees your team to focus on high-value tasks that actually grow the business.",
      },
      {
        question: "How quickly can an AI receptionist be set up?",
        answer:
          "Most AI receptionist systems can be configured and running within a few days. Setup involves connecting to your phone number, calendar, and lead management system.",
      },
      {
        question: "What happens if the AI can't answer a question?",
        answer:
          "A well-designed AI receptionist recognizes its limitations and smoothly hands off to a human team member. It captures the caller's information and reason for calling so the follow-up is seamless.",
      },
      {
        question: "Can an AI receptionist book appointments?",
        answer:
          "Yes. Most AI receptionists integrate with calendar systems and can book, reschedule, or cancel appointments in real-time during the call.",
      },
    ],
  },

  // Keep your other existing 3 posts exactly as they are:
  // Paste them here unchanged (ai-receptionist-service-businesses, missed-call-recovery-strategies, lead-qualification-automation)
  // from your current file.
];

/**
 * Export used by your UI: markdown posts + existing hardcoded posts
 */
export const blogPosts: BlogPost[] = [...markdownPosts, ...hardcodedPosts];

/**
 * Helper to get posts sorted by date (newest first)
 */
export const getSortedPosts = (): BlogPost[] => {
  return [...blogPosts].sort(
    (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
  );
};

/**
 * Helper to get a single post by slug
 */
export const getPostBySlug = (slug: string): BlogPost | undefined => {
  return blogPosts.find((post) => post.slug === slug);
};
