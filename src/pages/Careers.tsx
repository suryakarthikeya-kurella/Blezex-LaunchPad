import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import {
  ArrowRight,
  Briefcase,
  BookOpen,
  Users,
  TrendingUp,
  Code2,
  Cpu,
  Globe,
  Palette,
  Megaphone,
  CheckCircle2,
  Mail,
  Sparkles,
  ChevronDown,
  BarChart2,
  BrainCircuit,
} from "lucide-react";
import Header from "@/components/blezex/Header";
import Footer from "@/components/blezex/Footer";

/* ─── Data ──────────────────────────────────────────────────── */

const perks = [
  {
    icon: Briefcase,
    title: "Real Client Projects",
    desc: "Work on practical business solutions and gain real-world experience.",
  },
  {
    icon: BookOpen,
    title: "Learning Opportunities",
    desc: "Continuously improve your technical and professional skills.",
  },
  {
    icon: Users,
    title: "Mentorship",
    desc: "Learn directly from experienced developers and AI enthusiasts.",
  },
  {
    icon: TrendingUp,
    title: "Growth Environment",
    desc: "Build your portfolio while contributing to impactful projects.",
  },
];

const positions = [
  {
    icon: Cpu,
    title: "AI Engineer Intern",
    type: "Internship · Remote / Hybrid",
    skills: ["Python", "LLMs", "RAG", "Prompt Engineering", "AI Automation"],
    color: "from-orange-500/20 to-red-500/10",
    badge: "AI & Automation",
  },
  {
    icon: Code2,
    title: "Full Stack Developer Intern",
    type: "Internship · Remote / Hybrid",
    skills: ["React", "TypeScript", "Node.js / FastAPI", "APIs", "Databases"],
    color: "from-blue-500/20 to-indigo-500/10",
    badge: "Software Development",
  },
  {
    icon: Palette,
    title: "UI/UX Designer Intern",
    type: "Internship · Remote / Hybrid",
    skills: ["Figma", "Wireframing", "Prototyping", "User Experience"],
    color: "from-purple-500/20 to-pink-500/10",
    badge: "Design",
  },
  {
    icon: Megaphone,
    title: "Digital Marketing Intern",
    type: "Internship · Remote / Hybrid",
    skills: ["SEO", "Content Marketing", "Social Media Marketing", "Analytics"],
    color: "from-yellow-500/20 to-orange-500/10",
    badge: "Marketing",
  },
  {
    icon: TrendingUp,
    title: "Business Development Executive Intern",
    type: "Internship · Remote / Hybrid",
    skills: ["Lead Generation", "Client Communication", "Sales Outreach", "Market Research"],
    color: "from-emerald-500/20 to-teal-500/10",
    badge: "Business Development",
  },
  {
    icon: BarChart2,
    title: "Data Analyst Intern",
    type: "Internship · Remote / Hybrid",
    skills: ["Excel", "SQL", "Power BI", "Data Visualization", "Reporting & Analytics"],
    color: "from-cyan-500/20 to-blue-500/10",
    badge: "Data & Analytics",
  },
  {
    icon: BrainCircuit,
    title: "AI Solutions Engineer",
    type: "Full-time · 1-2 Years Exp · Remote / Hybrid",
    skills: ["AI Agents", "RAG Systems", "LangChain", "Python", "FastAPI", "Vector Databases", "LLM Integration", "Automation Solutions"],
    color: "from-rose-500/20 to-pink-500/10",
    badge: "AI Solutions",
  },
];

const timeline = [
  { step: "01", label: "Apply", desc: "Submit your profile via email" },
  { step: "02", label: "Resume Review", desc: "We carefully review your application" },
  { step: "03", label: "Interview", desc: "A friendly technical or design chat" },
  { step: "04", label: "Selection", desc: "Welcome to the BlezeX team!" },
];

/* ─── Gmail Compose Link ─────────────────────────────────────── */
const gmailComposeUrl = "https://mail.google.com/mail/?view=cm&fs=1&to=blezex.vibe@gmail.com";

/* ─── Animated section wrapper ───────────────────────────────── */
function FadeUp({
  children,
  delay = 0,
  className = "",
}: {
  children: React.ReactNode;
  delay?: number;
  className?: string;
}) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 32 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.55, delay, ease: "easeOut" }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

/* ─── Page ───────────────────────────────────────────────────── */
const Careers = () => {
  return (
    <>
      {/* SEO meta is handled via index.html / vite plugin; page-level title below */}
      <title>Careers — Join BlezeX | Build. Automate. Scale.</title>

      <div className="min-h-screen bg-background text-foreground">
        <Header />

        {/* ── HERO ─────────────────────────────────────────────── */}
        <section
          id="careers-hero"
          className="relative min-h-[92vh] flex flex-col items-center justify-center overflow-hidden grid-bg pt-24 pb-16"
        >
          {/* animated orbs */}
          <motion.div
            animate={{ y: [-30, 30, -30], x: [-20, 20, -20] }}
            transition={{ duration: 12, repeat: Infinity }}
            className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full bg-primary/10 blur-[120px] pointer-events-none"
          />
          <motion.div
            animate={{ y: [30, -30, 30], x: [20, -20, 20] }}
            transition={{ duration: 14, repeat: Infinity }}
            className="absolute bottom-1/4 right-1/4 w-80 h-80 rounded-full bg-accent/10 blur-[120px] pointer-events-none"
          />

          <div className="container mx-auto px-4 text-center relative z-10">
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass mb-8"
            >
              <Sparkles size={16} className="text-primary" />
              <span className="text-sm font-heading font-semibold">
                We're <span className="gradient-text">Hiring</span> — Join the BlezeX Family
              </span>
            </motion.div>

            {/* H1 */}
            <motion.h1
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.65, delay: 0.1 }}
              className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-heading font-extrabold mb-6 leading-tight"
            >
              Join{" "}
              <span className="text-black dark:text-white">Bleze</span>
              <span className="text-[#FF8A00] drop-shadow-[0_0_14px_rgba(255,115,0,0.7)]">X</span>
            </motion.h1>

            {/* Subtitle */}
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-lg md:text-xl text-muted-foreground font-body max-w-2xl mx-auto mb-10"
            >
              Build innovative technology solutions, work on real-world projects, and grow your
              career with a team passionate about AI, software development, and digital
              transformation.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.55, delay: 0.3 }}
              className="flex flex-col sm:flex-row items-center justify-center gap-4"
            >
              <motion.a
                whileHover={{ scale: 1.06 }}
                whileTap={{ scale: 0.96 }}
                href="#open-positions"
                id="view-open-positions-btn"
                className="gradient-bg px-8 py-4 rounded-2xl font-heading font-semibold text-primary-foreground flex items-center gap-2 glow-hover"
              >
                View Open Positions <ArrowRight size={18} />
              </motion.a>

              <motion.a
                whileHover={{ scale: 1.06 }}
                whileTap={{ scale: 0.96 }}
                href={gmailComposeUrl}
                target="_blank"
                rel="noopener noreferrer"
                id="apply-now-hero-btn"
                className="px-8 py-4 rounded-2xl border border-border font-heading font-semibold flex items-center gap-2 hover:border-primary/50 transition-colors"
              >
                <Mail size={18} /> Apply Now
              </motion.a>
            </motion.div>

            {/* scroll hint */}
            <motion.div
              animate={{ y: [0, 8, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="mt-14 flex flex-col items-center text-muted-foreground/50 text-xs"
            >
              <ChevronDown size={22} />
            </motion.div>
          </div>
        </section>

        {/* ── WHY BLEZEX (Perks) ───────────────────────────────── */}
        <section id="why-blezex" className="py-24 bg-section-alt">
          <div className="container mx-auto px-4">
            <FadeUp className="text-center mb-14">
              <p className="text-sm font-heading font-semibold gradient-text uppercase tracking-widest mb-3">
                Why BlezeX
              </p>
              <h2 className="text-3xl md:text-4xl font-heading font-extrabold">
                More than just an internship.
              </h2>
              <p className="text-muted-foreground font-body mt-4 max-w-xl mx-auto">
                We invest in people. Every team member at BlezeX grows alongside the company.
              </p>
            </FadeUp>

            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {perks.map((p, i) => (
                <FadeUp key={p.title} delay={i * 0.1}>
                  <motion.div
                    whileHover={{ scale: 1.04, y: -4 }}
                    className="glass rounded-2xl p-7 h-full glass-hover glow-hover flex flex-col gap-4"
                  >
                    <div className="w-12 h-12 rounded-xl gradient-bg flex items-center justify-center shrink-0">
                      <p.icon size={22} className="text-primary-foreground" />
                    </div>
                    <h3 className="font-heading font-bold text-lg text-foreground">{p.title}</h3>
                    <p className="text-sm text-muted-foreground font-body leading-relaxed">{p.desc}</p>
                  </motion.div>
                </FadeUp>
              ))}
            </div>
          </div>
        </section>

        {/* ── OPEN POSITIONS ───────────────────────────────────── */}
        <section id="open-positions" className="py-24">
          <div className="container mx-auto px-4">
            <FadeUp className="text-center mb-14">
              <p className="text-sm font-heading font-semibold gradient-text uppercase tracking-widest mb-3">
                Open Positions
              </p>
              <h2 className="text-3xl md:text-4xl font-heading font-extrabold">
                Find your role at BlezeX
              </h2>
              <p className="text-muted-foreground font-body mt-4 max-w-xl mx-auto">
                We're looking for passionate individuals across tech, design, and marketing.
              </p>
            </FadeUp>

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {positions.map((pos, i) => (
                <FadeUp key={pos.title} delay={i * 0.08}>
                  <motion.div
                    whileHover={{ scale: 1.03, y: -6 }}
                    className="glass rounded-2xl p-7 h-full flex flex-col gap-5 border border-border/50 hover:border-primary/40 transition-all duration-300"
                  >
                    {/* Icon + Badge */}
                    <div className="flex items-start justify-between">
                      <div
                        className={`w-12 h-12 rounded-xl bg-gradient-to-br ${pos.color} flex items-center justify-center`}
                      >
                        <pos.icon size={22} className="text-foreground" />
                      </div>
                      <span className="text-xs font-heading font-semibold px-3 py-1 rounded-full glass border border-border/60 text-muted-foreground">
                        {pos.badge}
                      </span>
                    </div>

                    {/* Title */}
                    <div>
                      <h3 className="font-heading font-extrabold text-xl text-foreground mb-1">
                        {pos.title}
                      </h3>
                      <p className="text-sm text-muted-foreground font-body">{pos.type}</p>
                    </div>

                    {/* Skills */}
                    <div className="flex flex-wrap gap-2">
                      {pos.skills.map((s) => (
                        <span
                          key={s}
                          className="text-xs font-heading font-semibold px-3 py-1 rounded-lg gradient-bg text-primary-foreground"
                        >
                          {s}
                        </span>
                      ))}
                    </div>

                    {/* Apply button */}
                    <div className="mt-auto pt-2">
                      <motion.a
                        whileHover={{ scale: 1.04 }}
                        whileTap={{ scale: 0.97 }}
                        href={gmailComposeUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        id={`apply-${pos.title.toLowerCase().replace(/\s+/g, "-")}`}
                        className="w-full flex items-center justify-center gap-2 px-5 py-3 rounded-xl border border-primary/40 hover:border-primary text-sm font-heading font-semibold text-foreground hover:gradient-bg hover:text-primary-foreground transition-all duration-300 group"
                      >
                        <Mail size={15} />
                        Apply Now
                        <ArrowRight
                          size={14}
                          className="opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-200"
                        />
                      </motion.a>
                    </div>
                  </motion.div>
                </FadeUp>
              ))}
            </div>
          </div>
        </section>

        {/* ── APPLICATION TIMELINE ─────────────────────────────── */}
        <section id="application-process" className="py-24 bg-section-alt">
          <div className="container mx-auto px-4">
            <FadeUp className="text-center mb-16">
              <p className="text-sm font-heading font-semibold gradient-text uppercase tracking-widest mb-3">
                Our Process
              </p>
              <h2 className="text-3xl md:text-4xl font-heading font-extrabold">
                How we hire
              </h2>
              <p className="text-muted-foreground font-body mt-4 max-w-xl mx-auto">
                A simple, transparent, and friendly hiring process built for students and fresh talent.
              </p>
            </FadeUp>

            {/* Desktop timeline — horizontal */}
            <div className="hidden md:flex items-start gap-0 relative">
              {/* connecting line */}
              <div className="absolute top-8 left-[calc(12.5%+20px)] right-[calc(12.5%+20px)] h-px bg-gradient-to-r from-primary/60 via-accent/60 to-primary/60" />

              {timeline.map((t, i) => (
                <FadeUp key={t.label} delay={i * 0.12} className="flex-1 flex flex-col items-center px-2">
                  <motion.div
                    whileHover={{ scale: 1.1 }}
                    className="relative z-10 w-16 h-16 rounded-full gradient-bg flex items-center justify-center shadow-lg mb-4"
                  >
                    <CheckCircle2 size={26} className="text-primary-foreground" />
                    <span className="absolute -top-2 -right-2 text-[10px] font-heading font-black bg-background border border-border px-1.5 py-0.5 rounded-full">
                      {t.step}
                    </span>
                  </motion.div>
                  <h3 className="font-heading font-bold text-foreground mb-1 text-center">
                    {t.label}
                  </h3>
                  <p className="text-xs text-muted-foreground font-body text-center leading-relaxed">
                    {t.desc}
                  </p>
                </FadeUp>
              ))}
            </div>

            {/* Mobile timeline — vertical */}
            <div className="flex md:hidden flex-col gap-0 relative">
              {/* vertical connector */}
              <div className="absolute left-7 top-8 bottom-8 w-px bg-gradient-to-b from-primary/60 via-accent/60 to-primary/60" />

              {timeline.map((t, i) => (
                <FadeUp key={t.label} delay={i * 0.1} className="flex gap-5 items-start py-4 pl-1">
                  <div className="relative z-10 shrink-0 w-14 h-14 rounded-full gradient-bg flex items-center justify-center shadow-lg">
                    <CheckCircle2 size={22} className="text-primary-foreground" />
                    <span className="absolute -top-1.5 -right-1.5 text-[9px] font-heading font-black bg-background border border-border px-1.5 py-0.5 rounded-full">
                      {t.step}
                    </span>
                  </div>
                  <div className="pt-1">
                    <h3 className="font-heading font-bold text-foreground mb-0.5">{t.label}</h3>
                    <p className="text-sm text-muted-foreground font-body">{t.desc}</p>
                  </div>
                </FadeUp>
              ))}
            </div>
          </div>
        </section>

        {/* ── CTA ──────────────────────────────────────────────── */}
        <section id="careers-cta" className="py-24">
          <div className="container mx-auto px-4">
            <FadeUp>
              <div className="gradient-bg rounded-3xl p-12 md:p-16 text-center relative overflow-hidden">
                {/* inner glow overlay */}
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,rgba(255,255,255,0.12),transparent)] pointer-events-none" />
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_70%,rgba(255,255,255,0.07),transparent)] pointer-events-none" />

                {/* floating sparkle dots */}
                {[...Array(6)].map((_, i) => (
                  <motion.div
                    key={i}
                    className="absolute w-1 h-1 rounded-full bg-white/40"
                    style={{
                      top: `${20 + i * 12}%`,
                      left: `${10 + i * 14}%`,
                    }}
                    animate={{ y: [0, -12, 0], opacity: [0.4, 1, 0.4] }}
                    transition={{ duration: 3 + i * 0.5, repeat: Infinity, delay: i * 0.4 }}
                  />
                ))}

                <div className="relative z-10">
                  <p className="text-primary-foreground/70 font-heading text-sm font-semibold uppercase tracking-widest mb-4">
                    Ready to start?
                  </p>
                  <h2 className="text-3xl md:text-4xl font-heading font-extrabold text-primary-foreground mb-4">
                    Ready to Join BlezeX?
                  </h2>
                  <p className="text-primary-foreground/80 font-body max-w-xl mx-auto mb-10">
                    Send us your profile and tell us why you'd like to be part of our journey.
                  </p>

                  <motion.a
                    whileHover={{ scale: 1.06 }}
                    whileTap={{ scale: 0.96 }}
                    href={gmailComposeUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    id="careers-cta-apply-btn"
                    className="inline-flex items-center gap-2 bg-background text-foreground px-8 py-4 rounded-2xl font-heading font-semibold hover:shadow-2xl transition-all"
                  >
                    <Mail size={18} /> Send Your Application <ArrowRight size={18} />
                  </motion.a>

                  <p className="text-primary-foreground/50 text-xs font-body mt-6">
                    Opens in Gmail · blezex.vibe@gmail.com
                  </p>
                </div>
              </div>
            </FadeUp>
          </div>
        </section>

        <Footer />
      </div>
    </>
  );
};

export default Careers;
