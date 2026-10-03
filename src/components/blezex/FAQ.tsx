import { motion, useReducedMotion } from "framer-motion";
import { useState } from "react";
import Reveal from "@/components/motion/Reveal";
import SplitText from "@/components/motion/SplitText";

const faqs = [
  { q: "What services does BlezeX provide?", a: "BlezeX provides web development, custom software & SaaS, AI & automation, digital marketing & growth, and graphic designing & branding services." },
  { q: "How long does a website project take?", a: "Depending on the scope, a standard business website takes 2-4 weeks. Custom web applications and complex projects may take 4-12 weeks." },
  { q: "Do you provide ongoing support?", a: "Yes! Every package includes a dedicated post-launch support period, and our team is available 24/7 to keep your digital products running smoothly." },
  { q: "Can you build custom software?", a: "Absolutely. We specialize in building custom CRM, ERP, SaaS platforms, and business-specific software tailored to your workflows." },
  { q: "Do you work with startups?", a: "Yes, we love working with startups. We have special packages designed to help startups build and scale their digital presence affordably." },
  { q: "What technologies do you use?", a: "We use modern technologies including React, Node.js, Python, AI/ML frameworks, cloud services, and more depending on project needs." },
];

const FAQ = () => {
  const reduce = useReducedMotion();
  const [open, setOpen] = useState<number | null>(null);

  return (
    <section id="faq" className="py-12 md:py-16 bg-paper">
      <div className="container mx-auto px-6 lg:px-10">
        <div className="grid gap-8 lg:grid-cols-[minmax(0,5fr)_minmax(0,7fr)] lg:gap-14">
          <div className="lg:sticky lg:top-28 lg:self-start">
            <p aria-hidden="true" className="mb-3 font-body text-xs uppercase tracking-[0.2em] text-primary">06 /</p>
            <SplitText
              as="h2"
              text="Frequently Asked Questions"
              className="font-display text-[clamp(1.75rem,3.6vw,3.25rem)] font-extrabold leading-none"
            />
          </div>

          <div className="border-t border-border">
            {faqs.map((faq, i) => {
              const isOpen = open === i;
              return (
                <Reveal key={i} delay={i * 0.05} y={16}>
                  <div className="border-b border-border">
                    <h3>
                      <button
                        type="button"
                        id={`faq-q-${i}`}
                        aria-expanded={isOpen}
                        aria-controls={`faq-a-${i}`}
                        onClick={() => setOpen(isOpen ? null : i)}
                        className="group flex w-full items-center justify-between gap-6 py-4 text-left font-display text-lg font-bold text-foreground transition-colors hover:text-primary focus-visible:outline-none focus-visible:text-primary md:text-xl"
                      >
                        {faq.q}
                        <span
                          aria-hidden
                          className={`relative h-9 w-9 flex-shrink-0 rounded-full border transition-all duration-300 ${
                            isOpen ? "rotate-45 border-primary bg-primary text-white scale-110" : "border-border group-hover:border-foreground"
                          }`}
                        >
                          <span className="absolute left-1/2 top-1/2 h-px w-3.5 -translate-x-1/2 -translate-y-1/2 bg-current" />
                          <span className="absolute left-1/2 top-1/2 h-3.5 w-px -translate-x-1/2 -translate-y-1/2 bg-current" />
                        </span>
                      </button>
                    </h3>
                    <motion.div
                      id={`faq-a-${i}`}
                      role="region"
                      aria-labelledby={`faq-q-${i}`}
                      initial={false}
                      animate={{ height: isOpen ? "auto" : 0, opacity: isOpen ? 1 : 0 }}
                      transition={{ duration: reduce ? 0 : 0.35, ease: [0.22, 1, 0.36, 1] }}
                      className="overflow-hidden"
                    >
                      <p className="max-w-xl pb-5 font-body text-base leading-relaxed text-muted-foreground">{faq.a}</p>
                    </motion.div>
                  </div>
                </Reveal>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQ;
