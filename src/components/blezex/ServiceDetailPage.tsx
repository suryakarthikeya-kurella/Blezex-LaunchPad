import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { ArrowRight, CheckCircle2, ChevronDown, MessageCircle, Sparkles } from "lucide-react";
import { Link } from "react-router-dom";
import Header from "@/components/blezex/Header";
import Footer from "@/components/blezex/Footer";
import { FadeUp, type ServicePageData } from "@/components/blezex/ServicePageShared";

/* ─── Whatsapp CTA helper ────────────────────────────────────── */
const waLink = (service: string) =>
  `https://wa.me/919059634555?text=${encodeURIComponent(
    `Hello BlezeX 👋\n\nI'm interested in your ${service} service and would like to learn more.`
  )}`;

/* ─── FAQ Item ───────────────────────────────────────────────── */
function FaqItem({ q, a, index }: { q: string; a: string; index: number }) {
  const [open, setOpen] = useState(false);
  return (
    <FadeUp delay={index * 0.06}>
      <div className="glass rounded-2xl border border-border/50 overflow-hidden">
        <button
          onClick={() => setOpen((p) => !p)}
          className="w-full flex items-center justify-between gap-4 px-6 py-5 text-left font-heading font-semibold text-base text-foreground hover:bg-hover-surface transition-colors"
          aria-expanded={open}
        >
          <span>{q}</span>
          <motion.span
            animate={{ rotate: open ? 180 : 0 }}
            transition={{ duration: 0.2 }}
            className="shrink-0 text-primary"
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
              transition={{ duration: 0.22 }}
              className="overflow-hidden"
            >
              <p className="px-6 pb-5 text-base text-muted-foreground font-body leading-relaxed">
                {a}
              </p>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </FadeUp>
  );
}

/* ─── Main Template ──────────────────────────────────────────── */
export default function ServiceDetailPage({ data }: { data: ServicePageData }) {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Header />

      {/* ── HERO ────────────────────────────────────────────── */}
      <section className="relative min-h-[80vh] flex items-center justify-center overflow-hidden grid-bg pt-24 pb-20">
        {/* Orbs */}
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
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.45 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass mb-6"
          >
            <Sparkles size={14} className="text-primary" />
            <span className="text-sm font-heading font-semibold gradient-text">
              BlezeX Services
            </span>
          </motion.div>

          {/* Emoji icon */}
          <motion.div
            initial={{ opacity: 0, scale: 0.7 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.05 }}
            className="text-6xl md:text-7xl mb-6"
          >
            {data.heroIcon}
          </motion.div>

          {/* Title */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, delay: 0.1 }}
            className="text-4xl sm:text-5xl md:text-6xl font-heading font-extrabold mb-4 leading-tight"
          >
            {data.title}
          </motion.h1>

          {/* Tagline */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.18 }}
            className="text-lg md:text-xl gradient-text font-heading font-semibold mb-4"
          >
            {data.tagline}
          </motion.p>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.24 }}
            className="text-base md:text-lg text-muted-foreground font-body max-w-2xl mx-auto mb-10"
          >
            {data.description}
          </motion.p>

          {/* CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.45, delay: 0.3 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            <motion.a
              whileHover={{ scale: 1.06 }}
              whileTap={{ scale: 0.96 }}
              href={waLink(data.title)}
              target="_blank"
              rel="noopener noreferrer"
              className="gradient-bg px-8 py-4 rounded-2xl font-heading font-semibold text-primary-foreground flex items-center gap-2 glow-hover"
            >
              Get Free Consultation <ArrowRight size={18} />
            </motion.a>
            <motion.a
              whileHover={{ scale: 1.06 }}
              whileTap={{ scale: 0.96 }}
              href="/#contact"
              className="px-8 py-4 rounded-2xl border border-border font-heading font-semibold flex items-center gap-2 hover:border-primary/50 transition-colors"
            >
              <MessageCircle size={18} /> Contact Us
            </motion.a>
          </motion.div>
        </div>
      </section>

      {/* ── WHAT WE OFFER ───────────────────────────────────── */}
      <section className="py-24 bg-section-alt">
        <div className="container mx-auto px-4">
          <FadeUp className="text-center mb-14">
            <p className="text-sm font-heading font-semibold gradient-text uppercase tracking-widest mb-3">
              What We Offer
            </p>
            <h2 className="text-3xl md:text-4xl font-heading font-extrabold">
              Comprehensive <span className="gradient-text">{data.title}</span> Solutions
            </h2>
          </FadeUp>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {data.offerings.map((o, i) => (
              <FadeUp key={o.title} delay={i * 0.07}>
                <motion.div
                  whileHover={{ y: -5, scale: 1.02 }}
                  className="glass rounded-2xl p-6 h-full border border-border/50 hover:border-primary/30 transition-all duration-300"
                >
                  <div className="w-10 h-10 rounded-xl gradient-bg flex items-center justify-center mb-4">
                    <CheckCircle2 size={18} className="text-primary-foreground" />
                  </div>
                  <h3 className="font-heading font-bold text-foreground mb-2">{o.title}</h3>
                  <p className="text-sm md:text-base text-muted-foreground font-body leading-relaxed">{o.desc}</p>
                </motion.div>
              </FadeUp>
            ))}
          </div>
        </div>
      </section>

      {/* ── BENEFITS ────────────────────────────────────────── */}
      <section className="py-24">
        <div className="container mx-auto px-4">
          <FadeUp className="text-center mb-14">
            <p className="text-sm font-heading font-semibold gradient-text uppercase tracking-widest mb-3">
              Business Benefits
            </p>
            <h2 className="text-3xl md:text-4xl font-heading font-extrabold">
              Why Invest in <span className="gradient-text">{data.title}?</span>
            </h2>
          </FadeUp>

          <div className="grid sm:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {data.benefits.map((b, i) => (
              <FadeUp key={b.title} delay={i * 0.08}>
                <div className="flex gap-4 items-start p-6 glass rounded-2xl border border-border/40 hover:border-primary/30 transition-colors">
                  <span className="mt-1 shrink-0 w-6 h-6 rounded-full gradient-bg flex items-center justify-center">
                    <CheckCircle2 size={13} className="text-primary-foreground" />
                  </span>
                  <div>
                    <h3 className="font-heading font-bold text-foreground mb-1">{b.title}</h3>
                    <p className="text-sm md:text-base text-muted-foreground font-body leading-relaxed">{b.desc}</p>
                  </div>
                </div>
              </FadeUp>
            ))}
          </div>
        </div>
      </section>

      {/* ── TECHNOLOGIES ────────────────────────────────────── */}
      <section className="py-24 bg-section-alt">
        <div className="container mx-auto px-4">
          <FadeUp className="text-center mb-12">
            <p className="text-sm font-heading font-semibold gradient-text uppercase tracking-widest mb-3">
              Tools & Technologies
            </p>
            <h2 className="text-3xl md:text-4xl font-heading font-extrabold">
              What We Work With
            </h2>
          </FadeUp>

          <FadeUp delay={0.1}>
            <div className="flex flex-wrap justify-center gap-3 max-w-4xl mx-auto">
              {data.technologies.map((tech, i) => (
                <motion.span
                  key={tech}
                  initial={{ opacity: 0, scale: 0.85 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.04, duration: 0.3 }}
                  whileHover={{ scale: 1.08 }}
                  className="px-4 py-2 glass rounded-xl border border-border/60 text-sm font-heading font-semibold text-foreground hover:border-primary/40 hover:gradient-text transition-all cursor-default"
                >
                  {tech}
                </motion.span>
              ))}
            </div>
          </FadeUp>
        </div>
      </section>

      {/* ── WHY BLEZEX ──────────────────────────────────────── */}
      <section className="py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <FadeUp className="text-center mb-12">
              <p className="text-sm font-heading font-semibold gradient-text uppercase tracking-widest mb-3">
                Why BlezeX
              </p>
              <h2 className="text-3xl md:text-4xl font-heading font-extrabold">
                The BlezeX Advantage
              </h2>
              <p className="text-muted-foreground font-body mt-4 max-w-xl mx-auto">
                We don't just deliver projects — we build long-term technology partnerships.
              </p>
            </FadeUp>

            <div className="grid sm:grid-cols-2 gap-4">
              {data.whyBlezex.map((point, i) => (
                <FadeUp key={i} delay={i * 0.06}>
                  <div className="flex items-start gap-3 p-5 glass rounded-2xl border border-border/40 hover:border-primary/30 transition-colors">
                    <span className="mt-0.5 shrink-0 text-primary">
                      <CheckCircle2 size={18} />
                    </span>
                    <p className="text-sm md:text-base font-body text-foreground leading-relaxed">{point}</p>
                  </div>
                </FadeUp>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── FAQs ────────────────────────────────────────────── */}
      <section className="py-24 bg-section-alt">
        <div className="container mx-auto px-4">
          <FadeUp className="text-center mb-12">
            <p className="text-sm font-heading font-semibold gradient-text uppercase tracking-widest mb-3">
              FAQs
            </p>
            <h2 className="text-3xl md:text-4xl font-heading font-extrabold">
              Frequently Asked Questions
            </h2>
          </FadeUp>

          <div className="flex flex-col gap-3 max-w-3xl mx-auto">
            {data.faqs.map((faq, i) => (
              <FaqItem key={i} q={faq.q} a={faq.a} index={i} />
            ))}
          </div>
        </div>
      </section>

      {/* ── FINAL CTA ───────────────────────────────────────── */}
      <section className="py-24">
        <div className="container mx-auto px-4">
          <FadeUp>
            <div className="gradient-bg rounded-3xl p-12 md:p-16 text-center relative overflow-hidden">
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,rgba(255,255,255,0.12),transparent)] pointer-events-none" />
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_70%,rgba(255,255,255,0.07),transparent)] pointer-events-none" />

              <div className="relative z-10">
                <p className="text-primary-foreground/70 font-heading text-sm font-semibold uppercase tracking-widest mb-4">
                  Ready to get started?
                </p>
                <h2 className="text-3xl md:text-4xl font-heading font-extrabold text-primary-foreground mb-4">
                  Let's Build Something Great Together
                </h2>
                <p className="text-primary-foreground/80 font-body max-w-xl mx-auto mb-10">
                  Talk to our team today and get a free consultation on how BlezeX can deliver{" "}
                  {data.title} solutions tailored to your business.
                </p>
                <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                  <motion.a
                    whileHover={{ scale: 1.06 }}
                    whileTap={{ scale: 0.96 }}
                    href={waLink(data.title)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 bg-background text-foreground px-8 py-4 rounded-2xl font-heading font-semibold hover:shadow-2xl transition-all"
                  >
                    WhatsApp Us <ArrowRight size={18} />
                  </motion.a>
                  <motion.a
                    whileHover={{ scale: 1.06 }}
                    whileTap={{ scale: 0.96 }}
                    href="/#contact"
                    className="inline-flex items-center gap-2 border border-white/30 text-primary-foreground px-8 py-4 rounded-2xl font-heading font-semibold hover:border-white/60 transition-all"
                  >
                    <MessageCircle size={18} /> Send a Message
                  </motion.a>
                </div>
              </div>
            </div>
          </FadeUp>

          {/* Back to services */}
          <FadeUp delay={0.1} className="text-center mt-10">
            <Link
              to="/#services"
              className="text-sm font-heading font-semibold text-muted-foreground hover:text-primary transition-colors"
            >
              ← Back to All Services
            </Link>
          </FadeUp>
        </div>
      </section>

      <Footer />
    </div>
  );
}
