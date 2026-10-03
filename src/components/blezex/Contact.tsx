import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  ArrowRight, Phone, Mail, MapPin, Clock, MessageCircle,
  Bot, Globe, Settings, TrendingUp,
  Search, Lightbulb, Pencil, Code2, Rocket, LifeBuoy,
  Shield, FileText, CreditCard, Headphones, Lock,
  ChevronDown, CheckCircle2,
  Linkedin, Instagram, Facebook, Youtube, Twitter,
  Zap, Users, Star, Award,
} from "lucide-react";
import Reveal from "@/components/motion/Reveal";
import SplitText from "@/components/motion/SplitText";
import Magnetic from "@/components/motion/Magnetic";
import SketchCard from "@/components/sketch/SketchCard";
import FloatingAssistant from "@/components/blezex/FloatingAssistant";

/* ══════════════════════════════════════════════════════════
   DATA
══════════════════════════════════════════════════════════ */
const serviceOptions = [
  "Web Development",
  "Custom Software & SaaS",
  "AI & Automation",
  "Digital Marketing",
  "Creative & Branding",
];

const budgetOptions = [
  "Under ₹10,000",
  "₹10,000 – ₹18,000",
  "₹18,000 – ₹30,000",
  "₹30,000 – ₹50,000",
  "₹50,000 – ₹75,000",
  "₹75,000+",
];

const supportPhone = "9059634555";
const supportEmail = "connect.blezex@gmail.com";

const stats = [
  { icon: Users,  value: "50+",  label: "Businesses Served" },
  { icon: Star,   value: "100+", label: "Projects Delivered" },
  { icon: Zap,    value: "24/7", label: "Support" },
  { icon: Award,  value: "AI",   label: "Automation Specialists" },
];

const trustBadges = [
  "Free Consultation",
  "Response Within 24 Hours",
  "Dedicated Project Support",
  "Custom Business Solutions",
];

const infoTrust = [
  "Average Response Time: < 2 Hours",
  "NDA Available On Request",
  "Dedicated Project Manager",
  "Startup Friendly",
];

const socials = [
  { icon: Linkedin,  href: "https://www.linkedin.com/company/blezex/",               label: "LinkedIn"  },
  { icon: Instagram, href: "https://www.instagram.com/blezex_ai/",                   label: "Instagram" },
  { icon: Facebook,  href: "https://www.facebook.com/profile.php?id=61586205163889", label: "Facebook"  },
  { icon: Youtube,   href: "https://www.youtube.com/@BlezeX_Ai",                     label: "YouTube"   },
  { icon: Twitter,   href: "https://x.com/x_blezex",                                 label: "Twitter"   },
];

const whyUs = [
  {
    icon: Bot,
    title: "AI Automation",
    desc: "Build intelligent systems that save time and increase efficiency across your entire operation.",
    accent: "from-violet-50 to-indigo-50",
    border: "border-violet-200",
    iconBg: "bg-violet-600",
  },
  {
    icon: Globe,
    title: "Web Development",
    desc: "Modern, scalable websites built for growth — fast, accessible, and conversion-optimised.",
    accent: "from-blue-50 to-cyan-50",
    border: "border-blue-200",
    iconBg: "bg-blue-600",
  },
  {
    icon: Settings,
    title: "Business Systems",
    desc: "Custom ERP, CRM, and SaaS solutions that streamline operations and reduce manual effort.",
    accent: "from-orange-50 to-amber-50",
    border: "border-orange-200",
    iconBg: "bg-orange-500",
  },
  {
    icon: TrendingUp,
    title: "Digital Growth",
    desc: "Marketing and automation strategies that generate leads and accelerate your business results.",
    accent: "from-green-50 to-emerald-50",
    border: "border-green-200",
    iconBg: "bg-green-600",
  },
];

const process = [
  { icon: Search,    step: "01", title: "Discovery",    desc: "Understand goals, audience, and requirements." },
  { icon: Lightbulb, step: "02", title: "Strategy",     desc: "Create the roadmap, milestones, and tech plan." },
  { icon: Pencil,    step: "03", title: "Design",       desc: "Craft user-focused, conversion-driven experiences." },
  { icon: Code2,     step: "04", title: "Development",  desc: "Build scalable, clean, and performant solutions." },
  { icon: Rocket,    step: "05", title: "Launch",       desc: "Deploy, test, and optimise for performance." },
  { icon: LifeBuoy,  step: "06", title: "Support",      desc: "Ongoing improvements, monitoring, and assistance." },
];

const policies = [
  {
    icon: Shield,
    title: "Privacy Policy",
    body: "Your project information remains strictly confidential. We never share client data with third parties and follow GDPR-aligned data handling practices.",
  },
  {
    icon: FileText,
    title: "Project Policy",
    body: "Development begins only after requirement approval and scope finalisation. Change requests outside the agreed scope are quoted separately.",
  },
  {
    icon: CreditCard,
    title: "Payment Policy",
    body: "Projects follow agreed milestone payments. 50% advance is required to begin, with the remaining 50% due before final delivery.",
  },
  {
    icon: Headphones,
    title: "Support Policy",
    body: "30-day free bug-fix support after delivery. Priority WhatsApp support for active clients. Extended AMC plans available on request.",
  },
  {
    icon: Lock,
    title: "Data Security Policy",
    body: "All client information, business assets, and project files are stored securely with restricted access, encryption, and regular backups.",
  },
];

const faqs = [
  {
    q: "How long does a project take?",
    a: "A standard business website takes 2–4 weeks. Custom web applications, SaaS platforms, or complex automation projects may take 4–12 weeks depending on scope.",
  },
  {
    q: "Do you provide AI automation solutions?",
    a: "Yes. We specialise in AI chatbots, WhatsApp automation, workflow automation, CRM integrations, and custom AI-powered business tools.",
  },
  {
    q: "What industries do you work with?",
    a: "We work across healthcare, e-commerce, hospitality, education, retail, logistics, and tech startups — any business that wants to grow digitally.",
  },
  {
    q: "Do you provide post-launch support?",
    a: "Every project comes with 30 days of free post-launch support. We also offer monthly maintenance, monitoring, and priority support packages.",
  },
  {
    q: "How does pricing work?",
    a: "Pricing is project-based and depends on scope, features, and timeline. We provide a detailed proposal after a free consultation. No hidden charges.",
  },
  {
    q: "Can you work with startups and small businesses?",
    a: "Absolutely. We have startup-friendly packages designed to give early-stage businesses a powerful digital presence at an affordable price point.",
  },
];

/* ══════════════════════════════════════════════════════════
   SHARED STYLES
══════════════════════════════════════════════════════════ */
const inputClass =
  "w-full h-11 rounded-xl border border-border bg-white px-4 text-sm text-foreground outline-none transition focus-visible:border-foreground focus-visible:shadow-[3px_3px_0_#111]";
const labelClass =
  "mb-1.5 block text-xs uppercase tracking-widest text-foreground font-body font-semibold";

/* ══════════════════════════════════════════════════════════
   ACCORDION (Policy + FAQ)
══════════════════════════════════════════════════════════ */
const Accordion = ({
  icon: Icon,
  title,
  body,
  index,
}: {
  icon?: React.ElementType;
  title: string;
  body: string;
  index: number;
}) => {
  const [open, setOpen] = useState(false);
  return (
    <motion.div
      initial={{ opacity: 0, y: 12 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.3, delay: index * 0.05 }}
      className="rounded-2xl border border-border bg-white overflow-hidden"
    >
      <button
        type="button"
        onClick={() => setOpen(!open)}
        aria-expanded={open}
        className="w-full flex items-center justify-between gap-4 px-5 py-4 text-left transition hover:bg-[#fafafa]"
      >
        <span className="flex items-center gap-3">
          {Icon && (
            <span className="flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-lg bg-foreground text-background">
              <Icon size={15} strokeWidth={1.75} />
            </span>
          )}
          <span className="font-display font-bold text-sm md:text-base text-foreground">{title}</span>
        </span>
        <motion.span
          animate={{ rotate: open ? 180 : 0 }}
          transition={{ duration: 0.2 }}
          className="flex-shrink-0 text-muted-foreground"
        >
          <ChevronDown size={18} />
        </motion.span>
      </button>
      <AnimatePresence initial={false}>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.22, ease: "easeOut" }}
            className="overflow-hidden"
          >
            <p className="px-5 pb-5 text-sm font-body text-muted-foreground leading-relaxed border-t border-border pt-3">
              {body}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
};

/* ══════════════════════════════════════════════════════════
   MAIN COMPONENT
══════════════════════════════════════════════════════════ */
const Contact = () => {
  const [form, setForm] = useState({
    name: "", email: "", phone: "", company: "",
    service: "", budget: "", details: "",
  });

  const update = (field: string, value: string) =>
    setForm((prev) => ({ ...prev, [field]: value }));

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const msg = `
Hi BlezeX 👋

Name: ${form.name}
Company: ${form.company || "N/A"}

Service: ${form.service}
Budget: ${form.budget || "Not specified"}

Email: ${form.email}
Phone: ${form.phone}

Project Details:
${form.details}
`;
    window.open(
      `https://wa.me/91${supportPhone}?text=${encodeURIComponent(msg)}`,
      "_blank"
    );
  };

  return (
    <>
      {/* ══════════════════════════════════════════════════
          SECTION 1 — HERO
      ══════════════════════════════════════════════════ */}
      <section className="bg-foreground text-background pt-20 pb-16 md:pt-28 md:pb-20 overflow-hidden relative">
        {/* grid texture */}
        <div
          className="pointer-events-none absolute inset-0 opacity-[0.035]"
          style={{
            backgroundImage:
              "linear-gradient(rgba(255,255,255,1) 1px,transparent 1px),linear-gradient(90deg,rgba(255,255,255,1) 1px,transparent 1px)",
            backgroundSize: "44px 44px",
          }}
        />
        {/* Glow */}
        <div className="pointer-events-none absolute -top-32 left-1/2 -translate-x-1/2 w-[600px] h-[400px] bg-primary/20 rounded-full blur-[120px]" />

        <div className="container mx-auto px-6 lg:px-10 relative z-10">
          <div className="max-w-3xl">
            {/* Label */}
            <Reveal>
              <span className="inline-block mb-5 rounded-full border border-white/15 bg-white/8 px-4 py-1.5 text-xs font-body uppercase tracking-[0.2em] text-white/60">
                Premium Digital Agency
              </span>
            </Reveal>

            {/* Headline */}
            <SplitText
              as="h1"
              text="Start Your Digital"
              className="font-display text-[clamp(2.2rem,5.5vw,4.2rem)] font-extrabold leading-[1.08] text-white"
            />
            <SplitText
              as="h1"
              text="Transformation"
              className="font-display text-[clamp(2.2rem,5.5vw,4.2rem)] font-extrabold leading-[1.08] text-primary"
            />

            <Reveal delay={0.2}>
              <p className="mt-5 max-w-xl text-white/55 font-body text-lg leading-relaxed">
                Build powerful websites, automate business operations, and
                accelerate growth with BlezeX.
              </p>
            </Reveal>

            {/* Trust badges */}
            <Reveal delay={0.3}>
              <div className="mt-6 flex flex-wrap gap-2">
                {trustBadges.map((b) => (
                  <span
                    key={b}
                    className="inline-flex items-center gap-1.5 rounded-full border border-white/12 bg-white/7 px-3 py-1.5 text-xs font-body text-white/70"
                  >
                    <CheckCircle2 size={12} className="text-primary" />
                    {b}
                  </span>
                ))}
              </div>
            </Reveal>

            {/* CTAs */}
            <Reveal delay={0.4}>
              <div className="mt-8 flex flex-col sm:flex-row gap-3">
                <Magnetic>
                  <a
                    href="#consultation"
                    className="inline-flex items-center gap-2 rounded-full bg-primary px-7 py-3.5 text-sm font-display font-semibold text-white shadow-lg transition hover:bg-primary/90 active:scale-[0.98]"
                  >
                    Schedule Free Consultation <ArrowRight size={16} />
                  </a>
                </Magnetic>
                <a
                  href={`https://wa.me/91${supportPhone}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/8 px-7 py-3.5 text-sm font-display font-semibold text-white backdrop-blur-sm transition hover:bg-white/15"
                >
                  <MessageCircle size={16} /> Chat With BlezeX
                </a>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════
          SECTION 2 — CONSULTATION LAYOUT
      ══════════════════════════════════════════════════ */}
      <section id="contact" className="py-14 md:py-20 bg-white">
        <div className="container mx-auto px-6 lg:px-10">

          <Reveal>
            <p className="mb-10 font-body text-xs uppercase tracking-[0.2em] text-primary">
              06 / Get In Touch
            </p>
          </Reveal>

          <div className="grid lg:grid-cols-[1fr_1.5fr] gap-10 xl:gap-16">

            {/* ── LEFT: Company Panel ──────────────────────── */}
            <div className="flex flex-col gap-5">

              {/* Company Card */}
              <Reveal>
                <div className="rounded-[22px] border border-foreground bg-foreground text-background p-6 shadow-[4px_4px_0_#FF4D1C]">
                  {/* Logo row */}
                  <div className="flex items-center gap-3 mb-5">
                    <img src="/logo.png" alt="BlezeX" className="h-10 w-auto object-contain" />
                    <div>
                      <p className="font-display font-extrabold text-lg leading-none text-white">
                        Bleze<span className="text-primary">X</span>
                      </p>
                      <p className="text-xs text-white/50 font-body mt-0.5">Technologies</p>
                    </div>
                  </div>

                  {/* Stats grid */}
                  <div className="grid grid-cols-2 gap-3 mb-5">
                    {stats.map(({ icon: Icon, value, label }) => (
                      <div key={label} className="rounded-xl bg-white/8 border border-white/10 p-3">
                        <Icon size={16} className="text-primary mb-1.5" strokeWidth={1.75} />
                        <p className="font-display font-extrabold text-xl leading-none text-white">{value}</p>
                        <p className="text-xs text-white/50 font-body mt-1">{label}</p>
                      </div>
                    ))}
                  </div>

                  {/* Trust list */}
                  <div className="space-y-2">
                    {infoTrust.map((t) => (
                      <div key={t} className="flex items-center gap-2 text-xs font-body text-white/65">
                        <CheckCircle2 size={13} className="text-primary flex-shrink-0" />
                        {t}
                      </div>
                    ))}
                  </div>
                </div>
              </Reveal>

              {/* Contact Info */}
              <Reveal delay={0.06}>
                <SketchCard>
                  <div className="space-y-4">
                    {/* Support Phone */}
                    <div>
                      <p className="flex items-center gap-2 text-xs uppercase tracking-widest text-muted-foreground font-body mb-2">
                        <Phone size={13} className="text-primary" /> Support Number
                      </p>
                      <div className="flex justify-between items-center py-1">
                        <span className="text-sm text-muted-foreground font-body">Customer Support</span>
                        <a
                          href={`tel:+91${supportPhone}`}
                          className="text-sm font-display font-bold text-foreground hover:text-primary transition"
                        >
                          +91 {supportPhone}
                        </a>
                      </div>
                    </div>

                    <div className="h-px bg-border" />

                    {/* Support Email */}
                    <div>
                      <p className="flex items-center gap-2 text-xs uppercase tracking-widest text-muted-foreground font-body mb-1.5">
                        <Mail size={13} className="text-primary" /> Email Address
                      </p>
                      <a
                        href={`mailto:${supportEmail}`}
                        className="text-sm font-display font-semibold text-foreground hover:text-primary transition"
                      >
                        {supportEmail}
                      </a>
                    </div>

                    <div className="h-px bg-border" />

                    {/* Location & Hours */}
                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <p className="flex items-center gap-2 text-xs uppercase tracking-widest text-muted-foreground font-body mb-1.5">
                          <MapPin size={13} className="text-primary" /> Offices
                        </p>
                        <p className="text-sm font-body text-foreground">Hyderabad &amp;</p>
                        <p className="text-sm font-body text-foreground">Visakhapatnam</p>
                      </div>
                      <div>
                        <p className="flex items-center gap-2 text-xs uppercase tracking-widest text-muted-foreground font-body mb-1.5">
                          <Clock size={13} className="text-primary" /> Business Hours
                        </p>
                        <p className="text-sm font-body text-foreground">Mon–Sat 9–6 PM</p>
                        <p className="text-sm font-body text-green-600 font-semibold">WhatsApp 24/7</p>
                      </div>
                    </div>
                  </div>
                </SketchCard>
              </Reveal>

              {/* Social Links */}
              <Reveal delay={0.12}>
                <SketchCard>
                  <p className="text-xs uppercase tracking-widest text-muted-foreground font-body mb-3">Follow BlezeX</p>
                  <div className="flex flex-wrap gap-2">
                    {socials.map(({ icon: Icon, href, label }) => (
                      <a
                        key={label}
                        href={href}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={label}
                        className="flex items-center gap-1.5 rounded-full border border-border px-3 py-1.5 text-xs font-body text-muted-foreground transition hover:border-foreground hover:bg-foreground hover:text-background"
                      >
                        <Icon size={12} /> {label}
                      </a>
                    ))}
                  </div>
                </SketchCard>
              </Reveal>
            </div>

            {/* ── RIGHT: Consultation Form ─────────────────── */}
            <Reveal delay={0.1} id="consultation">
              <div className="rounded-[24px] border border-foreground bg-white p-6 md:p-8 shadow-[6px_6px_0_#111] scroll-mt-24">

                <div className="mb-6">
                  <h2 className="font-display text-2xl md:text-3xl font-extrabold text-foreground mb-1.5">
                    Request a Free Consultation
                  </h2>
                  <p className="text-sm font-body text-muted-foreground leading-relaxed">
                    Tell us about your project and our team will get back to you
                    with the best solution within 2 hours.
                  </p>
                </div>

                <form onSubmit={handleSubmit} className="space-y-4">

                  <div className="grid sm:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="c-name" className={labelClass}>Full Name *</label>
                      <input
                        id="c-name" required autoComplete="name"
                        value={form.name}
                        onChange={(e) => update("name", e.target.value)}
                        className={inputClass}
                      />
                    </div>
                    <div>
                      <label htmlFor="c-email" className={labelClass}>Email Address *</label>
                      <input
                        id="c-email" required type="email" autoComplete="email"
                        value={form.email}
                        onChange={(e) => update("email", e.target.value)}
                        className={inputClass}
                      />
                    </div>
                  </div>

                  <div className="grid sm:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="c-phone" className={labelClass}>Phone Number *</label>
                      <input
                        id="c-phone" required autoComplete="tel"
                        value={form.phone}
                        onChange={(e) => update("phone", e.target.value)}
                        className={inputClass}
                      />
                    </div>
                    <div>
                      <label htmlFor="c-company" className={labelClass}>Company Name</label>
                      <input
                        id="c-company" autoComplete="organization"
                        value={form.company}
                        onChange={(e) => update("company", e.target.value)}
                        className={inputClass}
                      />
                    </div>
                  </div>

                  <div className="grid sm:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="c-service" className={labelClass}>Service Required *</label>
                      <select
                        id="c-service" required
                        value={form.service}
                        onChange={(e) => update("service", e.target.value)}
                        className={inputClass}
                      >
                        <option value="">Select Service</option>
                        {serviceOptions.map((s) => <option key={s}>{s}</option>)}
                      </select>
                    </div>
                    <div>
                      <label htmlFor="c-budget" className={labelClass}>Budget Range</label>
                      <select
                        id="c-budget"
                        value={form.budget}
                        onChange={(e) => update("budget", e.target.value)}
                        className={inputClass}
                      >
                        <option value="">Select Budget</option>
                        {budgetOptions.map((b) => <option key={b}>{b}</option>)}
                      </select>
                    </div>
                  </div>

                  <div>
                    <label htmlFor="c-details" className={labelClass}>Project Details *</label>
                    <textarea
                      id="c-details" required rows={5}
                      value={form.details}
                      onChange={(e) => update("details", e.target.value)}
                      className={`${inputClass} h-auto py-3 resize-none`}
                    />
                  </div>

                  <Magnetic className="block">
                    <button
                      type="submit"
                      className="group w-full h-13 py-3.5 rounded-full bg-foreground text-background font-display font-semibold text-base flex items-center justify-center gap-2 transition-colors hover:bg-primary focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-foreground"
                    >
                      Schedule My Consultation
                      <ArrowRight size={18} strokeWidth={1.75} className="transition-transform duration-200 group-hover:translate-x-1.5" />
                    </button>
                  </Magnetic>

                  <p className="flex items-center justify-center gap-1.5 text-center text-xs text-muted-foreground font-body">
                    <Lock size={11} /> Your information is secure and confidential.
                  </p>

                </form>
              </div>
            </Reveal>

          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════
          SECTION 3 — WHY CHOOSE BLEZEX
      ══════════════════════════════════════════════════ */}
      <section className="py-14 md:py-20 bg-[#f8f8f8] border-t border-border">
        <div className="container mx-auto px-6 lg:px-10">

          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-10">
            <div>
              <Reveal>
                <p className="mb-2 font-body text-xs uppercase tracking-[0.2em] text-primary">Why BlezeX</p>
              </Reveal>
              <SplitText
                as="h2"
                text="Why Businesses Choose Us"
                className="font-display text-[clamp(1.5rem,3vw,2.6rem)] font-extrabold leading-tight"
              />
            </div>
            <Reveal delay={0.1}>
              <p className="text-sm text-muted-foreground font-body max-w-sm leading-relaxed">
                From idea to launch, we handle everything — with quality, speed, and zero compromise.
              </p>
            </Reveal>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {whyUs.map(({ icon: Icon, title, desc, accent, border, iconBg }, i) => (
              <Reveal key={title} delay={i * 0.07}>
                <motion.div
                  whileHover={{ y: -5, transition: { duration: 0.2 } }}
                  className={`h-full rounded-[20px] border ${border} bg-gradient-to-br ${accent} p-5 flex flex-col`}
                >
                  <div className={`mb-4 flex h-11 w-11 items-center justify-center rounded-xl ${iconBg} text-white`}>
                    <Icon size={20} strokeWidth={1.5} />
                  </div>
                  <h3 className="font-display font-bold text-base text-foreground mb-2">{title}</h3>
                  <p className="text-sm font-body text-muted-foreground leading-relaxed flex-1">{desc}</p>
                </motion.div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════
          SECTION 4 — HOW WE WORK
      ══════════════════════════════════════════════════ */}
      <section className="py-14 md:py-20 bg-white border-t border-border overflow-hidden">
        <div className="container mx-auto px-6 lg:px-10">

          <div className="mb-10">
            <Reveal>
              <p className="mb-2 font-body text-xs uppercase tracking-[0.2em] text-primary">Process</p>
            </Reveal>
            <SplitText
              as="h2"
              text="How We Work"
              className="font-display text-[clamp(1.5rem,3vw,2.6rem)] font-extrabold leading-tight"
            />
          </div>

          {/* Desktop: horizontal row */}
          <div className="relative">
            {/* Connecting line */}
            <div className="hidden lg:block absolute top-[38px] left-0 right-0 h-px bg-border z-0" />

            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
              {process.map(({ icon: Icon, step, title, desc }, i) => (
                <Reveal key={step} delay={i * 0.06}>
                  <motion.div
                    whileHover={{ y: -4, transition: { duration: 0.18 } }}
                    className="group relative flex flex-col items-center text-center"
                  >
                    {/* Step circle */}
                    <div className="relative z-10 mb-4 flex h-[52px] w-[52px] items-center justify-center rounded-full border-2 border-border bg-white shadow-sm transition-all duration-200 group-hover:border-foreground group-hover:bg-foreground group-hover:text-background group-hover:shadow-[3px_3px_0_#111]">
                      <Icon size={20} strokeWidth={1.75} />
                    </div>
                    <span
                      className="mb-1 font-display text-[10px] font-bold uppercase tracking-widest text-muted-foreground"
                    >
                      {step}
                    </span>
                    <h3 className="font-display font-bold text-sm text-foreground mb-1">{title}</h3>
                    <p className="text-xs font-body text-muted-foreground leading-relaxed">{desc}</p>
                  </motion.div>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════
          SECTION 5 — COMPANY POLICIES
      ══════════════════════════════════════════════════ */}
      <section className="py-14 md:py-20 bg-[#f8f8f8] border-t border-border">
        <div className="container mx-auto px-6 lg:px-10">

          <div className="mb-10 max-w-2xl">
            <Reveal>
              <p className="mb-2 font-body text-xs uppercase tracking-[0.2em] text-primary">Transparency</p>
            </Reveal>
            <SplitText
              as="h2"
              text="Company Policies"
              className="font-display text-[clamp(1.5rem,3vw,2.6rem)] font-extrabold leading-tight"
            />
            <Reveal delay={0.15}>
              <p className="mt-3 text-sm font-body text-muted-foreground max-w-lg leading-relaxed">
                We believe in full transparency. Here's exactly how we operate,
                protect your data, and support your project.
              </p>
            </Reveal>
          </div>

          <div className="max-w-3xl space-y-2">
            {policies.map(({ icon, title, body }, i) => (
              <Accordion key={title} icon={icon} title={title} body={body} index={i} />
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════
          SECTION 6 — FAQ
      ══════════════════════════════════════════════════ */}
      <section className="py-14 md:py-20 bg-white border-t border-border">
        <div className="container mx-auto px-6 lg:px-10">

          <div className="mb-10 max-w-2xl">
            <Reveal>
              <p className="mb-2 font-body text-xs uppercase tracking-[0.2em] text-primary">FAQ</p>
            </Reveal>
            <SplitText
              as="h2"
              text="Frequently Asked Questions"
              className="font-display text-[clamp(1.5rem,3vw,2.6rem)] font-extrabold leading-tight"
            />
          </div>

          <div className="max-w-3xl space-y-2">
            {faqs.map(({ q, a }, i) => (
              <Accordion key={q} title={q} body={a} index={i} />
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════
          SECTION 7 — FINAL CTA
      ══════════════════════════════════════════════════ */}
      <section className="py-14 md:py-20 bg-foreground overflow-hidden relative">
        {/* grid */}
        <div
          className="pointer-events-none absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage:
              "linear-gradient(rgba(255,255,255,1) 1px,transparent 1px),linear-gradient(90deg,rgba(255,255,255,1) 1px,transparent 1px)",
            backgroundSize: "44px 44px",
          }}
        />
        <div className="pointer-events-none absolute bottom-0 left-1/2 -translate-x-1/2 w-[500px] h-[300px] bg-primary/15 rounded-full blur-[100px]" />

        <div className="container mx-auto px-6 lg:px-10 relative z-10 text-center">
          <Reveal>
            <span className="inline-block mb-5 rounded-full border border-white/15 bg-white/8 px-4 py-1.5 text-xs font-body uppercase tracking-[0.2em] text-white/55">
              Let's Work Together
            </span>
          </Reveal>

          <SplitText
            as="h2"
            text="Ready To Build Something"
            className="font-display text-[clamp(1.8rem,4.5vw,3.5rem)] font-extrabold leading-tight text-white"
          />
          <SplitText
            as="h2"
            text="Exceptional?"
            className="font-display text-[clamp(1.8rem,4.5vw,3.5rem)] font-extrabold leading-tight text-primary"
          />

          <Reveal delay={0.2}>
            <p className="mt-4 max-w-lg mx-auto text-white/50 font-body text-base leading-relaxed">
              Let's discuss your project and create the right solution for your business.
              Our team responds within 2 hours.
            </p>
          </Reveal>

          <Reveal delay={0.3}>
            <div className="mt-8 flex flex-col sm:flex-row gap-3 justify-center">
              <Magnetic>
                <a
                  href="#consultation"
                  className="inline-flex items-center gap-2 rounded-full bg-primary px-8 py-4 text-sm font-display font-semibold text-white shadow-lg transition hover:bg-primary/90 active:scale-[0.98]"
                >
                  Book Consultation <ArrowRight size={16} />
                </a>
              </Magnetic>
              <a
                href={`https://wa.me/91${supportPhone}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/8 px-8 py-4 text-sm font-display font-semibold text-white backdrop-blur-sm transition hover:bg-white/18"
              >
                <MessageCircle size={16} /> Chat With BlezeX
              </a>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Floating Assistant */}
      <FloatingAssistant />

      {/* Mobile Sticky Bar */}
      <div className="fixed bottom-0 left-0 right-0 bg-white border-t border-border flex md:hidden z-40">
        <a href={`https://wa.me/91${supportPhone}`} className="flex-1 py-3 flex flex-col items-center text-xs text-muted-foreground hover:text-foreground transition">
          <MessageCircle size={18} className="mb-0.5" /> WhatsApp
        </a>
        <a href={`tel:+91${supportPhone}`} className="flex-1 py-3 flex flex-col items-center text-xs text-muted-foreground hover:text-foreground transition">
          <Phone size={18} className="mb-0.5" /> Call
        </a>
        <a href={`mailto:${supportEmail}`} className="flex-1 py-3 flex flex-col items-center text-xs text-muted-foreground hover:text-foreground transition">
          <Mail size={18} className="mb-0.5" /> Email
        </a>
      </div>
    </>
  );
};

export default Contact;
