import { motion, useReducedMotion } from "framer-motion";
import { ArrowRight, MessageCircle } from "lucide-react";
import SplitText from "@/components/motion/SplitText";
import Reveal from "@/components/motion/Reveal";
import Magnetic from "@/components/motion/Magnetic";
import SketchPath from "@/components/motion/SketchPath";
import HeroWireframe from "@/components/sketch/HeroWireframe";
import BlueprintGrid from "@/components/sketch/BlueprintGrid";
import ServiceIcon, { type ServiceIconName } from "@/components/sketch/ServiceIcon";

const SERVICES: [ServiceIconName, string][] = [
  ["ai", "AI Automation"],
  ["web", "Web Development"],
  ["saas", "Business Systems"],
  ["marketing", "Digital Growth"],
];

const STATS = [
  ["50+", "Businesses"],
  ["100+", "Projects"],
  ["24/7", "Support"],
];

const Hero = () => {
  const reduce = useReducedMotion();

  const message = encodeURIComponent(
    "Hello BlezeX 👋 I am interested in your services and would like a free consultation."
  );

  return (
    <section id="home" className="relative overflow-hidden bg-white pt-28 pb-8 md:pt-[7.75rem] md:pb-[clamp(1.5rem,4vh,3rem)]">
      <BlueprintGrid />

      <div className="container relative mx-auto px-6 lg:px-10">
        <div className="grid items-center gap-8 lg:grid-cols-[minmax(0,1.5fr)_minmax(0,1fr)] lg:gap-8">
          <div>
            <Reveal>
              <div className="mb-[clamp(0.75rem,2vh,1.25rem)] inline-flex items-center gap-2.5 rounded-full border border-border bg-white px-4 py-1.5">
                <span className="h-2 w-2 rounded-full bg-primary" aria-hidden />
                <span className="text-sm font-medium">
                  <span className="font-semibold">BlezeX</span> — Build. Automate. Scale.
                </span>
              </div>
            </Reveal>

            <h1
              aria-label="Transforming Businesses With BlezeX"
              className="font-display text-[clamp(2.25rem,9vw,3.5rem)] font-extrabold leading-[0.95] tracking-[-0.04em] [word-spacing:0.1em] max-w-[14ch] lg:max-w-[12.5em] lg:text-[clamp(2.25rem,min(4.4vw,7.2vh),3.75rem)]"
            >
              <span aria-hidden className="block">
                <SplitText as="span" text="Transforming Businesses With" />{" "}
                <span className="inline-block overflow-hidden align-bottom pb-[0.12em]">
                  <motion.span
                    className="inline-block"
                    initial={reduce ? false : { y: "110%" }}
                    animate={{ y: 0 }}
                    transition={{ duration: 0.8, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
                  >
                    Bleze<span className="text-primary">X</span>
                  </motion.span>
                </span>
              </span>
            </h1>

            <Reveal delay={0.3}>
              <p className="mt-[clamp(0.75rem,2vh,1rem)] max-w-xl text-base leading-relaxed md:text-lg text-muted-foreground">
                BlezeX helps companies build powerful digital systems, automate operations with AI,
                and scale using modern technology platforms.
              </p>

              <ul className="mt-[clamp(0.75rem,2.2vh,1.25rem)] flex flex-wrap gap-2">
                {SERVICES.map(([icon, label]) => (
                  <li
                    key={label}
                    className="inline-flex items-center gap-2 rounded-full border border-border bg-white px-3.5 py-1.5 text-sm"
                  >
                    <ServiceIcon name={icon} className="h-4 w-4 text-primary [stroke-width:4]" />
                    {label}
                  </li>
                ))}
              </ul>

              <div className="mt-[clamp(1rem,2.8vh,1.5rem)] flex flex-col gap-3 sm:flex-row sm:items-center">
                <Magnetic className="inline-block">
                  <a
                    href={`https://wa.me/919059634555?text=${message}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group inline-flex w-full items-center justify-center gap-2 rounded-full bg-foreground px-6 py-3.5 text-base font-semibold text-background transition-colors hover:bg-primary sm:w-auto"
                  >
                    Get Free Audit
                    <ArrowRight size={18} className="transition-transform group-hover:translate-x-1" />
                  </a>
                </Magnetic>
                <Magnetic className="inline-block">
                  <a
                    href="#contact"
                    className="inline-flex w-full items-center justify-center gap-2 rounded-full border border-foreground bg-white px-6 py-3.5 text-base font-semibold transition-colors hover:bg-paper sm:w-auto"
                  >
                    <MessageCircle size={18} /> Contact Us
                  </a>
                </Magnetic>
              </div>
            </Reveal>
          </div>

          <Reveal delay={0.2} className="flex justify-center lg:justify-end lg:pt-8">
            <HeroWireframe />
          </Reveal>
        </div>

        <Reveal delay={0.4}>
          <div className="mt-[clamp(1.25rem,3.5vh,2rem)] flex flex-col gap-4 border-t border-dashed border-border pt-[clamp(0.75rem,2vh,1.25rem)] md:flex-row md:flex-wrap md:items-center md:justify-between">
            <p className="text-sm text-muted-foreground">
              Trusted by{" "}
              <span className="relative inline-block font-semibold text-foreground">
                50+ businesses
                <svg
                  viewBox="0 0 120 10"
                  preserveAspectRatio="none"
                  aria-hidden
                  className="absolute -bottom-2 left-0 h-2.5 w-full text-primary"
                >
                  <SketchPath d="M2 6 C 30 2, 60 9, 118 4" delay={0.9} strokeWidth={2} />
                </svg>
              </span>
            </p>

            <div className="flex flex-wrap gap-2">
              <div className="rounded-full border border-dashed border-foreground/40 px-4 py-2 text-xs">
                🇮🇳 Startup India Registered
              </div>
              <div className="rounded-full border border-dashed border-foreground/40 px-4 py-2 text-xs">
                🏢 MSME / Udyam Registered
              </div>
            </div>

            <dl className="flex gap-6">
              {STATS.map(([value, label]) => (
                <div key={label} className="flex flex-col-reverse">
                  <dt className="text-xs text-muted-foreground">{label}</dt>
                  <dd className="font-display text-2xl font-bold">{value}</dd>
                </div>
              ))}
            </dl>
          </div>
        </Reveal>
      </div>
    </section>
  );
};

export default Hero;
