import { motion, useReducedMotion } from "framer-motion";
import { ArrowRight, MessageCircle, Sparkles } from "lucide-react";
import { useEffect, useMemo, useRef } from "react";

// ─── Config (move sensitive values here or to .env) ───────────────────────────
const WHATSAPP_NUMBER = "918099655099";
const WHATSAPP_MESSAGE =
  "Hello BlezeX 👋 I am interested in your services and would like a free consultation.";

// ─── Static particle data (computed once, never on re-render) ─────────────────
const PARTICLE_COUNT = 30;

function generateParticles() {
  return Array.from({ length: PARTICLE_COUNT }, (_, i) => ({
    id: i,
    left: `${(i * 37 + 11) % 100}%`,
    top: `${(i * 53 + 7) % 200}%`,
  }));
}

const PARTICLES = generateParticles();

// ─── Hero ─────────────────────────────────────────────────────────────────────
const Hero = () => {
  const shouldReduceMotion = useReducedMotion();
  const mouseRef = useRef({ x: 0, y: 0 });
  const glowRef = useRef(null);

  const whatsappHref = useMemo(
    () =>
      `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(
        WHATSAPP_MESSAGE
      )}`,
    []
  );

  // Mouse glow — uses ref + direct DOM update to avoid re-renders
  useEffect(() => {
    if (shouldReduceMotion) return;

    const handleMouseMove = (e) => {
      mouseRef.current = { x: e.clientX, y: e.clientY };
      if (glowRef.current) {
        glowRef.current.style.background = `radial-gradient(600px at ${e.clientX}px ${e.clientY}px, rgba(255,77,28,0.15), transparent 80%)`;
      }
    };

    window.addEventListener("mousemove", handleMouseMove, { passive: true });
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, [shouldReduceMotion]);

  // Animation variants — disabled when user prefers reduced motion
  const fadeUp = {
    hidden: { opacity: 0, y: shouldReduceMotion ? 0 : 30 },
    visible: (delay = 0) => ({
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, delay },
    }),
  };

  const orbAnimation = shouldReduceMotion
    ? {}
    : { y: [-30, 30, -30], x: [-20, 20, -20] };

  const orbAnimation2 = shouldReduceMotion
    ? {}
    : { y: [30, -30, 30], x: [20, -20, 20] };

  return (
    <section
      className="relative min-h-screen flex items-center justify-center overflow-hidden grid-bg"
      aria-label="BlezeX — Hero section"
    >
      {/* Mouse Glow */}
      <div
        ref={glowRef}
        aria-hidden="true"
        className="pointer-events-none absolute -inset-px opacity-40"
      />

      {/* Grid Background */}
      <div aria-hidden="true" className="absolute inset-0 opacity-[0.05]">
        <div className="absolute inset-0 bg-[linear-gradient(#ffffff22_1px,transparent_1px),linear-gradient(90deg,#ffffff22_1px,transparent_1px)] bg-[size:60px_60px]" />
      </div>

      {/* AI Particles */}
      {!shouldReduceMotion && (
        <div aria-hidden="true" className="absolute inset-0 overflow-hidden">
          <motion.div
            animate={{ y: ["0%", "-100%"] }}
            transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
            className="absolute inset-0"
          >
            {PARTICLES.map(({ id, left, top }) => (
              <span
                key={id}
                className="absolute w-[2px] h-[2px] bg-white opacity-30 rounded-full"
                style={{ left, top }}
              />
            ))}
          </motion.div>
        </div>
      )}

      {/* Glow Orbs */}
      <motion.div
        aria-hidden="true"
        animate={orbAnimation}
        transition={shouldReduceMotion ? {} : { duration: 12, repeat: Infinity }}
        className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full bg-primary/10 blur-[120px]"
      />
      <motion.div
        aria-hidden="true"
        animate={orbAnimation2}
        transition={shouldReduceMotion ? {} : { duration: 14, repeat: Infinity }}
        className="absolute bottom-1/4 right-1/4 w-80 h-80 rounded-full bg-accent/10 blur-[120px]"
      />

      <div className="container mx-auto px-4 text-center relative z-10 pt-20">

        {/* Badge */}
        <motion.div
          initial="hidden"
          animate="visible"
          custom={0}
          variants={fadeUp}
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass mb-8"
        >
          <Sparkles size={16} className="text-primary" aria-hidden="true" />
          <span className="text-sm font-semibold">
            <span className="gradient-text">BlezeX</span> — Build. Automate. Scale.
          </span>
        </motion.div>

        {/* Heading */}
        <motion.h1
          initial="hidden"
          animate="visible"
          custom={0.1}
          variants={fadeUp}
          className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-semibold mb-6 max-w-4xl mx-auto"
        >
          Transforming Businesses With
          <br />
          <span className="font-extrabold tracking-wide">
            <span className="text-black dark:text-white">Bleze</span>
            <span className="text-[#FF8A00] drop-shadow-[0_0_10px_rgba(255,115,0,0.8)]">
              X
            </span>
          </span>
        </motion.h1>

        {/* Description */}
        <motion.p
          initial="hidden"
          animate="visible"
          custom={0.2}
          variants={fadeUp}
          className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-8"
        >
          BlezeX helps companies build powerful digital systems, automate
          operations with AI, and scale using modern technology platforms.
        </motion.p>

        {/* Services */}
        <motion.div
          initial="hidden"
          animate="visible"
          custom={0.3}
          variants={fadeUp}
          className="flex flex-wrap justify-center gap-6 text-sm text-muted-foreground mb-10"
          aria-label="Services offered"
        >
          <span>⚡ AI Automation</span>
          <span>💻 Web Development</span>
          <span>📱 App Development</span>
          <span>⚙️ Business Systems</span>
          <span>📈 Digital Growth</span>
        </motion.div>

        {/* CTA */}
        <motion.div
          initial="hidden"
          animate="visible"
          custom={0.4}
          variants={fadeUp}
          className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-14"
        >
          <motion.a
            whileHover={shouldReduceMotion ? {} : { scale: 1.06 }}
            whileTap={shouldReduceMotion ? {} : { scale: 0.95 }}
            href={whatsappHref}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Get a free audit — opens WhatsApp chat"
            className="gradient-bg px-8 py-4 rounded-2xl font-semibold text-primary-foreground flex items-center gap-2"
          >
            Get Free Audit <ArrowRight size={18} aria-hidden="true" />
          </motion.a>

          <motion.a
            whileHover={shouldReduceMotion ? {} : { scale: 1.06 }}
            whileTap={shouldReduceMotion ? {} : { scale: 0.95 }}
            href="#contact"
            aria-label="Go to contact section"
            className="px-8 py-4 rounded-2xl border border-border flex items-center gap-2"
          >
            <MessageCircle size={18} aria-hidden="true" /> Contact Us
          </motion.a>
        </motion.div>

        {/* Trust */}
        <motion.p
          initial="hidden"
          animate="visible"
          custom={0.5}
          variants={fadeUp}
          className="text-sm text-muted-foreground"
        >
          Trusted by{" "}
          <span className="font-semibold text-foreground">50+ businesses</span>
        </motion.p>

        {/* Government Badges */}
        <motion.div
          initial="hidden"
          animate="visible"
          custom={0.55}
          variants={fadeUp}
          className="flex flex-wrap justify-center gap-4 mt-6"
          aria-label="Registrations and certifications"
        >
          <div className="px-4 py-2 rounded-full glass border text-xs">
            🇮🇳 Startup India Registered
          </div>
          <div className="px-4 py-2 rounded-full glass border text-xs">
            🏢 MSME / Udyam Registered
          </div>
        </motion.div>

        {/* Stats */}
        <motion.div
          initial="hidden"
          animate="visible"
          custom={0.6}
          variants={fadeUp}
          className="flex justify-center gap-6 mt-10 text-xs text-muted-foreground"
          aria-label="Key statistics"
        >
          <div>
            <span className="font-semibold text-foreground">50+</span> Businesses
          </div>
          <div>
            <span className="font-semibold text-foreground">100+</span> Projects
          </div>
          <div>
            <span className="font-semibold text-foreground">24/7</span> Support
          </div>
        </motion.div>

      </div>
    </section>
  );
};

export default Hero;