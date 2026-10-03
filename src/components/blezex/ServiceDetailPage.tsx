import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { ArrowRight, ChevronDown, MessageCircle } from "lucide-react";
import { Link } from "react-router-dom";
import Header from "@/components/blezex/Header";
import Footer from "@/components/blezex/Footer";
import { type ServicePageData } from "@/components/blezex/ServicePageShared";
import SEO from "@/components/SEO";
import Reveal from "@/components/motion/Reveal";
import SplitText from "@/components/motion/SplitText";
import Magnetic from "@/components/motion/Magnetic";
import SketchCard from "@/components/sketch/SketchCard";
import ServiceIcon, { type ServiceIconName } from "@/components/sketch/ServiceIcon";
import BlueprintGrid from "@/components/sketch/BlueprintGrid";
import { buildServiceSchema, findServiceSeoPage } from "@/seo";

/* ─── Whatsapp CTA helper ────────────────────────────────────── */
const waLink = (service: string) =>
  `https://wa.me/919059634555?text=${encodeURIComponent(
    `Hello BlezeX 👋\n\nI'm interested in your ${service} service and would like to learn more.`
  )}`;

const iconBySlug: Record<string, ServiceIconName> = {
  "web-development": "web",
  "custom-software-saas": "saas",
  "ai-automation": "ai",
  "digital-marketing": "marketing",
  "graphic-designing-branding": "design",
};

const pill =
  "inline-flex items-center gap-2 rounded-full px-6 py-3.5 font-display font-semibold transition-colors duration-200";
const pillInk = `${pill} bg-foreground text-background hover:bg-primary`;
const pillOutline = `${pill} border border-foreground text-foreground hover:border-primary hover:text-primary`;

const SectionHead = ({
  n,
  eyebrow,
  title,
  sub,
}: {
  n: string;
  eyebrow: string;
  title: string;
  sub?: string;
}) => (
  <div className="mb-8 max-w-3xl">
    <p className="mb-3 font-body text-xs uppercase tracking-[0.2em] text-primary">
      {n} / {eyebrow}
    </p>
    <SplitText
      as="h2"
      text={title}
      className="font-display text-[clamp(1.75rem,3.6vw,3.25rem)] font-extrabold leading-none"
    />
    {sub && (
      <Reveal delay={0.2}>
        <p className="mt-4 max-w-xl font-body text-base md:text-lg leading-relaxed text-muted-foreground">{sub}</p>
      </Reveal>
    )}
  </div>
);

/* ─── FAQ Item ───────────────────────────────────────────────── */
function FaqItem({ q, a, index }: { q: string; a: string; index: number }) {
  const [open, setOpen] = useState(false);
  return (
    <Reveal delay={index * 0.05}>
      <div className="sketch-card relative overflow-hidden">
        <button
          onClick={() => setOpen((p) => !p)}
          className="w-full flex items-center justify-between gap-4 px-5 py-4 text-left font-display font-semibold text-base text-foreground transition-colors hover:text-primary"
          aria-expanded={open}
        >
          <span>{q}</span>
          <motion.span
            aria-hidden
            animate={{ rotate: open ? 180 : 0 }}
            transition={{ duration: 0.2 }}
            className="shrink-0 text-primary"
          >
            <ChevronDown size={18} strokeWidth={1.75} />
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
              <p className="px-5 pb-4 text-base text-muted-foreground font-body leading-relaxed">{a}</p>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </Reveal>
  );
}

/* ─── Main Template ──────────────────────────────────────────── */
export default function ServiceDetailPage({ data }: { data: ServicePageData }) {
  const canonical = `https://blezex.com/services/${data.slug}`;
  const serviceSeo = findServiceSeoPage(data.slug);
  const serviceName = serviceSeo?.name ?? data.title;
  const serviceDescription = serviceSeo?.description ?? data.description;
  const serviceSchema = buildServiceSchema({
    slug: data.slug,
    name: serviceName,
    description: serviceDescription,
  });

  const faqSchema = data.faqs.length > 0 ? {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": data.faqs.map((faq) => ({
      "@type": "Question",
      "name": faq.q,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": faq.a
      }
    }))
  } : null;

  const icon = iconBySlug[data.slug] ?? "web";

  return (
    <div className="min-h-screen bg-background text-foreground">
      <SEO
        title={`${serviceName} Services | BlezeX`}
        description={serviceDescription}
        canonical={canonical}
        ogTitle={`${serviceName} Services | BlezeX`}
        ogDescription={serviceDescription}
        ogType="website"
        schema={faqSchema ? [serviceSchema, faqSchema] : [serviceSchema]}
      />
      <Header />

      {/* ── HERO ────────────────────────────────────────────── */}
      <section className="relative overflow-hidden bg-white pt-28 pb-10 md:pt-36 md:pb-16">
        <div className="container mx-auto px-6 lg:px-10">
          <div className="grid items-center gap-8 lg:grid-cols-[1.3fr_1fr]">
            <div>
              <p className="mb-3 font-body text-xs uppercase tracking-[0.2em] text-primary">
                BlezeX Services /
              </p>
              <SplitText
                as="h1"
                text={data.title}
                className="font-display text-[clamp(2.2rem,4.6vw,4.25rem)] font-extrabold leading-none mb-4"
              />
              <Reveal delay={0.2}>
                <p className="mb-3 font-display text-lg font-semibold text-foreground md:text-xl">
                  {data.tagline}
                </p>
                <p className="mb-6 max-w-2xl font-body text-base leading-relaxed text-muted-foreground md:text-lg">
                  {data.description}
                </p>
                <div className="flex flex-col items-start gap-4 sm:flex-row sm:items-center">
                  <Magnetic>
                    <a href={waLink(data.title)} target="_blank" rel="noopener noreferrer" className={pillInk}>
                      Get Free Consultation <ArrowRight size={18} strokeWidth={1.75} />
                    </a>
                  </Magnetic>
                  <Magnetic>
                    <a href="/#contact" className={pillOutline}>
                      <MessageCircle size={18} strokeWidth={1.75} /> Contact Us
                    </a>
                  </Magnetic>
                </div>
              </Reveal>
            </div>

            <Reveal delay={0.15} className="hidden lg:block">
              <SketchCard className="relative flex aspect-[4/3] items-center justify-center overflow-hidden">
                <BlueprintGrid />
                <ServiceIcon name={icon} className="relative h-32 w-32 xl:h-36 xl:w-36" />
              </SketchCard>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ── WHAT WE OFFER ───────────────────────────────────── */}
      <section className="bg-paper py-12 md:py-16">
        <div className="container mx-auto px-6 lg:px-10">
          <SectionHead n="01" eyebrow="What We Offer" title={`Comprehensive ${data.title} Solutions`} />
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {data.offerings.map((o, i) => (
              <Reveal key={o.title} delay={(i % 3) * 0.08} className="h-full">
                <SketchCard className="h-full">
                  <span
                    aria-hidden
                    className="absolute right-5 top-3 select-none font-display text-4xl font-extrabold leading-none text-border"
                  >
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <span aria-hidden className="mb-4 block h-px w-8 bg-primary" />
                  <h3 className="font-display font-bold text-xl text-foreground mb-2 pr-14">{o.title}</h3>
                  <p className="font-body text-sm leading-relaxed text-muted-foreground md:text-base">{o.desc}</p>
                </SketchCard>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── BENEFITS ────────────────────────────────────────── */}
      <section className="bg-white py-12 md:py-16">
        <div className="container mx-auto px-6 lg:px-10">
          <SectionHead n="02" eyebrow="Business Benefits" title={`Why Invest in ${data.title}?`} />
          <div className="grid gap-5 sm:grid-cols-2">
            {data.benefits.map((b, i) => (
              <Reveal key={b.title} delay={(i % 2) * 0.08} className="h-full">
                <SketchCard className="flex h-full items-start gap-5">
                  <span aria-hidden className="mt-0.5 shrink-0 font-display text-2xl font-extrabold text-primary">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <div>
                    <h3 className="font-display font-bold text-lg text-foreground mb-1">{b.title}</h3>
                    <p className="font-body text-sm leading-relaxed text-muted-foreground md:text-base">{b.desc}</p>
                  </div>
                </SketchCard>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── TECHNOLOGIES ────────────────────────────────────── */}
      <section className="bg-paper py-12 md:py-16">
        <div className="container mx-auto px-6 lg:px-10">
          <SectionHead n="03" eyebrow="Tools & Technologies" title="What We Work With" />
          <Reveal delay={0.1}>
            <ul className="flex flex-wrap gap-2.5">
              {data.technologies.map((tech) => (
                <li
                  key={tech}
                  className="rounded-full border border-border bg-white px-5 py-2 font-display text-sm font-semibold text-foreground transition-colors hover:border-primary hover:text-primary"
                >
                  {tech}
                </li>
              ))}
            </ul>
          </Reveal>
        </div>
      </section>

      {/* ── WHY BLEZEX ──────────────────────────────────────── */}
      <section className="bg-white py-12 md:py-16">
        <div className="container mx-auto px-6 lg:px-10">
          <SectionHead
            n="04"
            eyebrow="Why BlezeX"
            title="The BlezeX Advantage"
            sub="We don't just deliver projects — we build long-term technology partnerships."
          />
          <div className="grid gap-5 sm:grid-cols-2">
            {data.whyBlezex.map((point, i) => (
              <Reveal key={i} delay={(i % 2) * 0.06} className="h-full">
                <SketchCard className="flex h-full items-start gap-4 p-5 md:p-6">
                  <span aria-hidden className="mt-[0.7em] h-px w-5 shrink-0 bg-primary" />
                  <p className="font-body text-sm leading-relaxed text-foreground md:text-base">{point}</p>
                </SketchCard>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── FAQs ────────────────────────────────────────────── */}
      <section className="bg-paper py-12 md:py-16">
        <div className="container mx-auto px-6 lg:px-10">
          <SectionHead n="05" eyebrow="FAQs" title="Frequently Asked Questions" />
          <div className="flex max-w-3xl flex-col gap-3">
            {data.faqs.map((faq, i) => (
              <FaqItem key={i} q={faq.q} a={faq.a} index={i} />
            ))}
          </div>
        </div>
      </section>

      {/* ── FINAL CTA ───────────────────────────────────────── */}
      <section className="bg-white py-12 md:py-16">
        <div className="container mx-auto px-6 lg:px-10">
          <Reveal>
            <SketchCard className="relative overflow-hidden text-center p-8 md:p-12">
              <BlueprintGrid />
              <div className="relative">
                <p className="mb-3 font-body text-xs uppercase tracking-[0.2em] text-primary">
                  Ready to get started?
                </p>
                <h2 className="mb-4 font-display text-[clamp(1.75rem,3.6vw,3rem)] font-extrabold leading-none">
                  Let's Build Something Great Together
                </h2>
                <p className="mx-auto mb-6 max-w-xl font-body text-base md:text-lg leading-relaxed text-muted-foreground">
                  Talk to our team today and get a free consultation on how BlezeX can deliver{" "}
                  {data.title} solutions tailored to your business.
                </p>
                <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
                  <Magnetic>
                    <a href={waLink(data.title)} target="_blank" rel="noopener noreferrer" className={pillInk}>
                      WhatsApp Us <ArrowRight size={18} strokeWidth={1.75} />
                    </a>
                  </Magnetic>
                  <Magnetic>
                    <a href="/#contact" className={pillOutline}>
                      <MessageCircle size={18} strokeWidth={1.75} /> Send a Message
                    </a>
                  </Magnetic>
                </div>
              </div>
            </SketchCard>
          </Reveal>

          {/* Back to services */}
          <Reveal delay={0.1} className="mt-6 text-center">
            <Link
              to="/#services"
              className="font-display text-sm font-semibold text-muted-foreground transition-colors hover:text-primary"
            >
              ← Back to All Services
            </Link>
          </Reveal>
        </div>
      </section>

      <Footer />
    </div>
  );
}
