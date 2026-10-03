import { ArrowRight } from "lucide-react";
import Reveal from "@/components/motion/Reveal";
import SplitText from "@/components/motion/SplitText";
import Magnetic from "@/components/motion/Magnetic";
import SketchPath from "@/components/motion/SketchPath";
import Annotation from "@/components/sketch/Annotation";

const CTA = () => (
  <section className="relative overflow-hidden bg-paper py-12 md:py-16">
    <div className="blueprint pointer-events-none absolute inset-0 opacity-40" aria-hidden />
    <div className="container relative mx-auto px-6 lg:px-10">
      <div className="relative max-w-6xl">
        <h2 className="font-display text-[clamp(1.875rem,4.4vw,3.75rem)] font-extrabold leading-[1.05] tracking-tight mb-5">
          <SplitText as="span" text="Need help choosing the right" className="block" />
          <span className="relative mt-2 inline-block">
            <SplitText as="span" text="technology?" delay={0.35} />
            <svg
              aria-hidden
              viewBox="0 0 400 120"
              preserveAspectRatio="none"
              className="pointer-events-none absolute -left-4 -top-3 h-[calc(100%+1.5rem)] w-[calc(100%+2rem)] text-primary"
            >
              <SketchPath
                d="M60 20 C 20 30, 4 50, 8 66 C 14 100, 120 114, 215 112 C 320 110, 396 96, 392 58 C 388 24, 290 6, 190 6 C 120 6, 70 14, 40 28"
                duration={1.3}
                delay={0.9}
                strokeWidth={2.5}
              />
            </svg>
          </span>
        </h2>
        <Reveal delay={0.2}>
          <p className="text-muted-foreground font-body text-base md:text-lg max-w-xl mb-6 leading-relaxed">
            BlezeX offers a free consultation to understand your business needs and recommend the best solutions.
          </p>
        </Reveal>
        <Reveal delay={0.3}>
          <div className="flex flex-wrap items-center gap-6">
            <Magnetic>
              <a
                href="https://wa.me/919059634555?text=Hi, I'd like to book a free consultation."
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center gap-2 rounded-full bg-foreground px-7 py-3.5 font-display font-semibold text-background transition-colors hover:bg-primary"
              >
                Book Free Consultation
                <ArrowRight size={18} strokeWidth={1.75} className="transition-transform duration-200 group-hover:translate-x-1.5" />
              </a>
            </Magnetic>
            <Annotation text="no strings attached" arrow="left" className="hidden sm:inline-flex" />
          </div>
        </Reveal>
      </div>
    </div>
  </section>
);

export default CTA;
