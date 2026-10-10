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
import { HYDERABAD_MAPS_URL, HYDERABAD_MAPS_EMBED_URL } from "@/config";
import ConsultationModal, { openConsultation } from "@/components/blezex/ConsultationModal";
import FloatingAssistant from "@/components/blezex/FloatingAssistant";

/* ══════════════════════════════════════════════════════════
   DATA
══════════════════════════════════════════════════════════ */
const supportPhone = "9059634555";
const supportEmail = "connect.blezex@gmail.com";

const stats = [
  { icon: Users,  value: "80+",  label: "Businesses Served" },
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
const panelCls = "rounded-[24px] border";

/* ══════════════════════════════════════════════════════════
   FAQ ROW (editorial +/- accordion)
══════════════════════════════════════════════════════════ */
const FaqRow = ({ q, a, defaultOpen = false }: { q: string; a: string; defaultOpen?: boolean }) => {
  const [open, setOpen] = useState(defaultOpen);
  return (
    <div className="border-b border-border">
      <button
        type="button"
        onClick={() => setOpen(!open)}
        aria-expanded={open}
        className="group flex w-full items-center justify-between gap-6 py-5 text-left font-display text-base font-bold text-foreground transition-colors hover:text-primary md:text-lg"
      >
        {q}
        <span
          aria-hidden
          className={`relative h-9 w-9 flex-shrink-0 rounded-full border transition-colors duration-300 ${
            open ? "border-primary bg-primary text-white" : "border-border group-hover:border-foreground"
          }`}
        >
          <span className="absolute left-1/2 top-1/2 h-px w-3.5 -translate-x-1/2 -translate-y-1/2 bg-current" />
          <span
            className={`absolute left-1/2 top-1/2 h-3.5 w-px -translate-x-1/2 -translate-y-1/2 bg-current transition-opacity duration-200 ${
              open ? "opacity-0" : "opacity-100"
            }`}
          />
        </span>
      </button>
      <AnimatePresence initial={false}>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.25, ease: "easeOut" }}
            className="overflow-hidden"
          >
            <p className="max-w-xl pb-5 font-body text-sm leading-relaxed text-muted-foreground md:text-base">{a}</p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

/* ══════════════════════════════════════════════════════════
   MAIN COMPONENT
══════════════════════════════════════════════════════════ */
const Contact = () => {
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
                  <button
                    type="button"
                    onClick={openConsultation}
                    className="inline-flex items-center gap-2 rounded-full bg-primary px-7 py-3.5 text-sm font-display font-semibold text-white shadow-lg transition hover:bg-primary/90"
                  >
                    Schedule Free Consultation <ArrowRight size={16} />
                  </button>
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

          <div>

            {/* ── LEFT: Company + contact details ─────────── */}
            <div className="grid min-w-0 items-stretch gap-6 md:grid-cols-2 xl:gap-8">

              {/* Company Card */}
              <Reveal className="h-full">
                <div className={`${panelCls} h-full border-foreground bg-foreground p-6 text-background shadow-[6px_6px_0_#FF4D1C] md:p-8`}>
                  <div className="mb-5 flex items-center gap-3">
                    <img src="/logo.png" alt="BlezeX" className="h-10 w-auto object-contain" />
                    <div>
                      <p className="font-display font-extrabold text-lg leading-none text-white">
                        Bleze<span className="text-primary">X</span>
                      </p>
                      <p className="mt-0.5 font-body text-xs text-white/50">Technologies</p>
                    </div>
                  </div>

                  <div className="mb-5 grid grid-cols-2 gap-3">
                    {stats.map(({ icon: Icon, value, label }) => (
                      <div key={label} className="rounded-xl border border-white/10 bg-white/8 p-3">
                        <Icon size={16} className="mb-1.5 text-primary" strokeWidth={1.75} />
                        <p className="font-display text-xl font-extrabold leading-none text-white">{value}</p>
                        <p className="mt-1 font-body text-xs text-white/50">{label}</p>
                      </div>
                    ))}
                  </div>

                  <div className="space-y-2">
                    {infoTrust.map((t) => (
                      <div key={t} className="flex items-center gap-2 font-body text-xs text-white/65">
                        <CheckCircle2 size={13} className="flex-shrink-0 text-primary" />
                        {t}
                      </div>
                    ))}
                  </div>
                </div>
              </Reveal>

              {/* Contact details + socials */}
              <Reveal delay={0.06} className="h-full">
                <div className={`${panelCls} h-full border-foreground bg-white p-6 shadow-[6px_6px_0_#111] md:p-8`}>
                  <ul className="space-y-4">
                    {[
                      { icon: Phone, label: "Support Number", value: `+91 ${supportPhone}`, href: `tel:+91${supportPhone}` },
                      { icon: Mail, label: "Email Address", value: supportEmail, href: `mailto:${supportEmail}` },
                      { icon: MapPin, label: "Offices", value: "Hyderabad & Visakhapatnam" },
                      { icon: Clock, label: "Business Hours", value: "Mon–Sat 9–6 PM · WhatsApp 24/7" },
                    ].map(({ icon: Icon, label, value, href }) => (
                      <li key={label} className="flex items-start gap-3">
                        <span className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full bg-primary/10 text-primary">
                          <Icon size={17} strokeWidth={1.75} />
                        </span>
                        <div className="min-w-0">
                          <p className="font-body text-xs uppercase tracking-widest text-muted-foreground">{label}</p>
                          {href ? (
                            <a href={href} className="inline-block break-words py-1 font-display text-sm font-bold text-foreground transition-colors hover:text-primary md:text-base">
                              {value}
                            </a>
                          ) : (
                            <p className="font-display text-sm font-bold text-foreground md:text-base">{value}</p>
                          )}
                        </div>
                      </li>
                    ))}
                  </ul>

                  <div className="mt-5 border-t border-dashed border-border pt-5">
                    <p className="mb-3 font-body text-xs uppercase tracking-widest text-muted-foreground">Follow BlezeX</p>
                    <div className="flex flex-wrap gap-2">
                      {socials.map(({ icon: Icon, href, label }) => (
                        <a
                          key={label}
                          href={href}
                          target="_blank"
                          rel="noopener noreferrer"
                          aria-label={label}
                          className="flex items-center gap-1.5 rounded-full border border-border px-3.5 py-2 font-body text-xs text-muted-foreground transition-colors hover:border-foreground hover:bg-foreground hover:text-background"
                        >
                          <Icon size={12} /> {label}
                        </a>
                      ))}
                    </div>
                  </div>
                </div>
              </Reveal>
            </div>

          </div>

          {/* ── Consultation CTA (opens the form modal) ───── */}
          <Reveal delay={0.1}>
            <div className={`${panelCls} mt-6 flex flex-col gap-5 border-foreground bg-white p-6 shadow-[6px_6px_0_#111] md:flex-row md:items-center md:justify-between md:p-8 lg:mt-8`}>
              <div className="min-w-0">
                <h2 className="mb-1.5 font-display text-2xl font-extrabold text-foreground md:text-3xl">
                  Request a Free Consultation
                </h2>
                <p className="max-w-xl font-body text-sm leading-relaxed text-muted-foreground">
                  Tell us about your project and our team will get back to you with the best solution within 2 hours.
                </p>
              </div>
              <button
                type="button"
                onClick={openConsultation}
                className="inline-flex flex-shrink-0 items-center justify-center gap-2 rounded-full bg-foreground px-7 py-3.5 font-display text-sm font-semibold text-background transition-colors hover:bg-primary"
              >
                Schedule My Consultation <ArrowRight size={16} />
              </button>
            </div>
          </Reveal>

          {/* ── Branch location + map ─────────────────────── */}
          <Reveal delay={0.1}>
            <div className={`${panelCls} mt-6 grid overflow-hidden border-foreground bg-white shadow-[6px_6px_0_#111] lg:mt-8 lg:grid-cols-[minmax(0,5fr)_minmax(0,7fr)]`}>
              <div className="flex flex-col justify-center p-6 md:p-8">
                <p className="mb-2 font-body text-xs uppercase tracking-[0.2em] text-primary">Our Branch</p>
                <h2 className="mb-2 font-display text-2xl font-extrabold text-foreground md:text-3xl">Hyderabad Branch</h2>
                <p className="mb-5 font-body text-sm leading-relaxed text-muted-foreground">
                  BlezeX Technologies, Hyderabad, Telangana. Visit us or reach out first — we're
                  happy to meet in person.
                </p>
                <ul className="mb-6 space-y-3 font-body text-sm text-foreground">
                  <li className="flex items-center gap-3">
                    <Clock size={16} className="flex-shrink-0 text-primary" /> Mon–Sat 9–6 PM
                  </li>
                  <li className="flex items-center gap-3">
                    <Phone size={16} className="flex-shrink-0 text-primary" />
                    <a href={`tel:+91${supportPhone}`} className="inline-block py-1.5 transition-colors hover:text-primary">+91 {supportPhone}</a>
                  </li>
                </ul>
                <div className="flex flex-col gap-3 sm:flex-row">
                  <a
                    href={HYDERABAD_MAPS_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-2 rounded-full bg-primary px-6 py-3 font-display text-sm font-semibold text-white transition-colors hover:bg-primary/90"
                  >
                    <MapPin size={16} /> Get Directions
                  </a>
                  <a
                    href={`tel:+91${supportPhone}`}
                    className="inline-flex items-center justify-center gap-2 rounded-full border border-foreground px-6 py-3 font-display text-sm font-semibold text-foreground transition-colors hover:bg-foreground hover:text-background"
                  >
                    <Phone size={16} /> Call Branch
                  </a>
                </div>
              </div>
              <div className="h-72 border-t border-border sm:h-80 lg:h-auto lg:min-h-[22rem] lg:border-l lg:border-t-0">
                <iframe
                  title="BlezeX Technologies — Hyderabad branch on Google Maps"
                  src={HYDERABAD_MAPS_EMBED_URL}
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  allowFullScreen
                  className="block h-full w-full border-0"
                />
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════
          SECTION 3 — WHY CHOOSE BLEZEX
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

          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-6">
            {policies.map(({ icon: Icon, title, body }, i) => (
              <Reveal
                key={title}
                delay={(i % 3) * 0.08}
                className={`h-full ${i < 3 ? "lg:col-span-2" : "lg:col-span-3"} ${i === 4 ? "sm:col-span-2 lg:col-span-3" : ""}`}
              >
                <div className="flex h-full flex-col rounded-[20px] border border-border bg-white p-6">
                  <div className="mb-5 flex items-center justify-between">
                    <span className="flex h-11 w-11 items-center justify-center rounded-full bg-primary/10 text-primary">
                      <Icon size={20} strokeWidth={1.75} />
                    </span>
                    <span aria-hidden="true" className="font-body text-xs uppercase tracking-[0.2em] text-muted-foreground">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                  </div>
                  <h3 className="mb-2 font-display text-lg font-bold text-foreground">{title}</h3>
                  <p className="border-t border-dashed border-border pt-3 font-body text-sm leading-relaxed text-muted-foreground">
                    {body}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════
          SECTION 6 — FAQ
      ══════════════════════════════════════════════════ */}
      <section className="py-14 md:py-20 bg-white border-t border-border">
        <div className="container mx-auto px-6 lg:px-10">
          <div className="grid gap-8 lg:grid-cols-[minmax(0,5fr)_minmax(0,7fr)] lg:gap-14">
            <div className="lg:sticky lg:top-28 lg:self-start">
              <Reveal>
                <p className="mb-2 font-body text-xs uppercase tracking-[0.2em] text-primary">FAQ</p>
              </Reveal>
              <SplitText
                as="h2"
                text="Frequently Asked Questions"
                className="font-display text-[clamp(1.5rem,3vw,2.6rem)] font-extrabold leading-tight"
              />
              <Reveal delay={0.15}>
                <p className="mt-3 max-w-sm text-sm font-body leading-relaxed text-muted-foreground">
                  Can't find what you're looking for? Message us and we'll reply the same day.
                </p>
                <a
                  href={`https://wa.me/91${supportPhone}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-5 inline-flex items-center gap-2 rounded-full border border-foreground px-5 py-2.5 text-sm font-display font-semibold text-foreground transition-colors hover:bg-foreground hover:text-background"
                >
                  <MessageCircle size={16} /> Ask on WhatsApp
                </a>
              </Reveal>
            </div>

            <div className="border-t border-border">
              {faqs.map(({ q, a }, i) => (
                <FaqRow key={q} q={q} a={a} defaultOpen={i === 0} />
              ))}
            </div>
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
                <button
                  type="button"
                  onClick={openConsultation}
                  className="inline-flex items-center gap-2 rounded-full bg-primary px-8 py-4 text-sm font-display font-semibold text-white shadow-lg transition hover:bg-primary/90"
                >
                  Book Consultation <ArrowRight size={16} />
                </button>
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

      <ConsultationModal />

      {/* Floating Assistant */}
      <FloatingAssistant />

      {/* Mobile Sticky Bar */}
      <div className="fixed inset-x-0 bottom-0 z-40 flex border-t border-border bg-white pb-[env(safe-area-inset-bottom)] md:hidden">
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
