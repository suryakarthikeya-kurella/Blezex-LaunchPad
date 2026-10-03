import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ExternalLink, MessageCircle, X, ChevronRight } from "lucide-react";
import Reveal from "@/components/motion/Reveal";
import SplitText from "@/components/motion/SplitText";
import SketchCard from "@/components/sketch/SketchCard";

/* ─── WhatsApp number ─────────────────────────────────────────── */
const WA_NUMBER = "919059634555";

const categories = ["All", "Websites", "Automation", "Branding"];

const projects = [
  {
    title: "Skincare Hospital Website",
    category: "Websites",
    client: "CARECHARMALAYA",
    image: "/portfolio/carecharmalaya.jpg",
    imageAlt: "Care Charmalaya – Skincare Hospital Website",
    services: ["Custom UI/UX Design", "Web Development", "Payment Integration", "Mini-Ecommerce Setup"],
    link: "https://carecharmalaya.com",
    waMsg: "Hi BlezeX 👋 I saw the Care Charmalaya skincare hospital website in your portfolio and I'm interested in a similar website for my business. Can we discuss?",
  },
  {
    title: "AI Customer Support Bot",
    category: "Automation",
    client: "SUPPORTDESK",
    image: "/portfolio/ai-support-bot.png",
    imageAlt: "SupportDesk – AI Customer Support Bot Dashboard",
    services: ["AI Chatbot", "WhatsApp Automation"],
    link: null,
    waMsg: "Hi BlezeX 👋 I saw your AI Customer Support Bot in the portfolio and I'd love to implement something similar for my business. Can we connect?",
  },
  {
    title: "Mini-Ecommerce Website",
    category: "Websites",
    client: "SRI VIJAYA PICKLES",
    image: "/portfolio/srivijayapickles.jpg",
    imageAlt: "Sri Vijaya Pickles – Ecommerce Website",
    services: ["Logo Design", "Brand Identity", "Startup Package Website"],
    link: "https://srivijayapickles.in",
    waMsg: "Hi BlezeX 👋 I saw the Sri Vijaya Pickles ecommerce website in your portfolio and I'm interested in a similar solution. Let's talk!",
  },
  {
    title: "Marketing Automation",
    category: "Automation",
    client: "GROWTHBOOST",
    image: "/portfolio/marketing-automation.png",
    imageAlt: "GrowthBoost – Marketing Automation Platform",
    services: ["Email Automation", "CRM Integration", "Lead Generation"],
    link: null,
    waMsg: "Hi BlezeX 👋 I saw the Marketing Automation project in your portfolio and I'd like to automate my business marketing. Can we discuss?",
  },
  {
    title: "Startup Branding",
    category: "Branding",
    client: "TECHNOVA",
    image: "/portfolio/technova-branding.jpg",
    imageAlt: "TechNova – Startup Branding & Brand Identity",
    services: ["Logo Design", "Brand Guidelines", "Website Design", "Marketing Assets"],
    link: null,
    waMsg: "Hi BlezeX 👋 I saw the TechNova startup branding in your portfolio and I need branding for my startup. Can we connect?",
  },
];

/* ─── WhatsApp Panel Component ────────────────────────────────── */
interface WaPanelProps {
  open: boolean;
  msg: string;
  onClose: () => void;
}

const WaPanel = ({ open, msg, onClose }: WaPanelProps) => {
  const href = `https://wa.me/${WA_NUMBER}?text=${encodeURIComponent(msg)}`;

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          initial={{ opacity: 0, y: 12, scale: 0.97 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 12, scale: 0.97 }}
          transition={{ duration: 0.22, ease: "easeOut" }}
          className="mt-4 rounded-2xl border border-green-200 bg-green-50 p-4"
        >
          {/* Header */}
          <div className="mb-3 flex items-center justify-between">
            <div className="flex items-center gap-2">
              <span className="flex h-7 w-7 items-center justify-center rounded-full bg-green-500">
                <MessageCircle size={15} className="text-white" />
              </span>
              <span className="text-sm font-display font-bold text-green-800">
                Connect on WhatsApp
              </span>
            </div>
            <button
              onClick={onClose}
              aria-label="Close"
              className="rounded-full p-1 text-green-600 hover:bg-green-200 transition-colors"
            >
              <X size={15} />
            </button>
          </div>

          {/* Pre-filled message preview */}
          <p className="mb-3 rounded-xl bg-white border border-green-100 px-3 py-2.5 text-xs text-gray-600 font-body leading-relaxed line-clamp-3">
            {msg}
          </p>

          {/* CTA */}
          <a
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            className="flex w-full items-center justify-center gap-2 rounded-xl bg-green-500 px-4 py-2.5 text-sm font-display font-semibold text-white shadow-sm transition-all duration-200 hover:bg-green-600 active:scale-[0.98]"
          >
            <MessageCircle size={16} />
            Chat on WhatsApp
            <ChevronRight size={14} />
          </a>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

/* ─── Main Component ──────────────────────────────────────────── */
const Portfolio = () => {
  const [active, setActive] = useState("All");
  const [openWa, setOpenWa] = useState<string | null>(null);

  const filtered =
    active === "All"
      ? projects
      : projects.filter((p) => p.category === active);

  const toggleWa = (title: string) =>
    setOpenWa((prev) => (prev === title ? null : title));

  return (
    <section id="portfolio" className="py-12 md:py-16 bg-white">
      <div className="container mx-auto px-6 lg:px-10">

        {/* ── Heading ──────────────────────────────────────────── */}
        <div className="mb-8 max-w-3xl">
          <p className="mb-3 font-body text-xs uppercase tracking-[0.2em] text-primary">
            05 / Portfolio
          </p>
          <SplitText
            as="h2"
            text="Our Portfolio"
            className="font-display text-[clamp(1.75rem,3.6vw,3.25rem)] font-extrabold leading-none mb-4"
          />
          <Reveal delay={0.2}>
            <p className="text-muted-foreground text-base md:text-lg font-body max-w-2xl leading-relaxed">
              A showcase of projects where technology, automation, and design
              help businesses grow faster.
            </p>
          </Reveal>
        </div>

        {/* ── Filter Buttons ───────────────────────────────────── */}
        <div className="flex flex-wrap gap-2.5 mb-8" role="group" aria-label="Filter projects">
          {categories.map((cat) => (
            <button
              key={cat}
              type="button"
              onClick={() => setActive(cat)}
              aria-pressed={active === cat}
              className={`px-5 py-2 rounded-full text-sm font-display font-semibold border transition-colors duration-200 ${
                active === cat
                  ? "bg-foreground text-white border-foreground"
                  : "bg-white text-muted-foreground border-border hover:text-foreground hover:border-foreground"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* ── Project Grid ─────────────────────────────────────── */}
        <div className="grid lg:grid-cols-2 gap-5 md:gap-6">
          {filtered.map((p, i) => {
            const wide = active === "All" && i === 0;
            const hasLink = !!p.link;
            const waOpen = openWa === p.title;

            return (
              <Reveal
                key={p.title}
                delay={(i % 2) * 0.08}
                className={`h-full ${wide ? "lg:col-span-2" : ""}`}
              >
                <SketchCard className="flex h-full flex-col group">

                  {/* ── Screenshot Preview ─────────────────────── */}
                  <div
                    className={`relative mb-4 overflow-hidden rounded-[20px] border border-border bg-gray-100 ${
                      wide ? "aspect-[16/7]" : "aspect-[16/9]"
                    }`}
                  >
                    <img
                      src={p.image}
                      alt={p.imageAlt}
                      loading={i === 0 ? "eager" : "lazy"}
                      decoding="async"
                      className="absolute inset-0 h-full w-full object-cover object-top transition-transform duration-700 ease-out will-change-transform group-hover:scale-[1.04]"
                    />

                    {/* Bottom vignette */}
                    <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/40 via-black/5 to-transparent" />

                    {/* Index number */}
                    <span
                      aria-hidden
                      className="absolute right-4 top-3 font-display text-5xl font-extrabold leading-none select-none"
                      style={{
                        WebkitTextStroke: "1.5px rgba(255,255,255,0.85)",
                        color: "transparent",
                      }}
                    >
                      {String(i + 1).padStart(2, "0")}
                    </span>

                    {/* Visit Website CTA */}
                    {hasLink && (
                      <a
                        href={p.link!}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="absolute bottom-4 left-4 inline-flex items-center gap-2 rounded-full bg-white/90 backdrop-blur-sm px-4 py-2 text-sm font-display font-semibold text-foreground shadow-md transition-all duration-300 hover:bg-primary hover:text-white lg:translate-y-[200%] lg:opacity-0 lg:group-hover:translate-y-0 lg:group-hover:opacity-100 focus-visible:translate-y-0 focus-visible:opacity-100"
                      >
                        Visit Website <ExternalLink size={14} aria-hidden />
                      </a>
                    )}

                    {/* In Progress badge */}
                    {!hasLink && (
                      <span className="absolute bottom-4 left-4 inline-flex items-center gap-1.5 rounded-full bg-black/55 backdrop-blur-sm px-3 py-1.5 text-xs font-display font-semibold text-white">
                        <span className="h-1.5 w-1.5 rounded-full bg-primary animate-pulse" />
                        In Progress
                      </span>
                    )}
                  </div>

                  {/* ── Card Body ────────────────────────────────── */}
                  <h3 className="text-xl md:text-2xl font-display font-bold text-foreground mb-2">
                    {p.title}
                  </h3>

                  <div className="mb-3 flex flex-wrap items-center gap-3">
                    <span className="text-xs uppercase tracking-[0.15em] text-primary font-body">
                      {p.client}
                    </span>
                    <span aria-hidden className="h-px w-4 bg-border" />
                    <span className="text-sm text-muted-foreground font-body">
                      {p.category}
                    </span>
                  </div>

                  <div className="flex flex-wrap gap-2 mb-4">
                    {p.services.map((service) => (
                      <span
                        key={service}
                        className="text-xs px-3 py-1 rounded-full border border-border bg-white text-muted-foreground font-body"
                      >
                        {service}
                      </span>
                    ))}
                  </div>

                  {/* ── WhatsApp Toggle Button ─────────────────── */}
                  <div className="mt-auto">
                    <button
                      type="button"
                      onClick={() => toggleWa(p.title)}
                      aria-expanded={waOpen}
                      className={`flex w-full items-center justify-between rounded-xl border px-4 py-2.5 text-sm font-display font-semibold transition-all duration-200 ${
                        waOpen
                          ? "border-green-400 bg-green-50 text-green-700"
                          : "border-border bg-white text-foreground hover:border-green-400 hover:bg-green-50 hover:text-green-700"
                      }`}
                    >
                      <span className="flex items-center gap-2">
                        <MessageCircle
                          size={16}
                          className={waOpen ? "text-green-500" : "text-green-500"}
                        />
                        {waOpen ? "Close" : "Connect Us on WhatsApp"}
                      </span>
                      <motion.span
                        animate={{ rotate: waOpen ? 45 : 0 }}
                        transition={{ duration: 0.2 }}
                        className="text-lg leading-none font-bold"
                      >
                        +
                      </motion.span>
                    </button>

                    {/* WhatsApp Expandable Panel */}
                    <WaPanel
                      open={waOpen}
                      msg={p.waMsg}
                      onClose={() => setOpenWa(null)}
                    />
                  </div>

                </SketchCard>
              </Reveal>
            );
          })}
        </div>

      </div>
    </section>
  );
};

export default Portfolio;
