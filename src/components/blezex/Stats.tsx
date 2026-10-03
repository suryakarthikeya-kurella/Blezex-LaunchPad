import { animate, useInView, useReducedMotion } from "framer-motion";
import { useRef, useState, useEffect } from "react";
import { FolderKanban, Users, Cpu, ThumbsUp } from "lucide-react";
import Reveal from "@/components/motion/Reveal";

const stats = [
  { icon: FolderKanban, value: 50, suffix: "+", label: "Projects" },
  { icon: Users, value: 40, suffix: "+", label: "Clients" },
  { icon: Cpu, value: 20, suffix: "+", label: "Technologies" },
  { icon: ThumbsUp, value: 98, suffix: "%", label: "Satisfaction" },
];

const Counter = ({ target, suffix, inView }: { target: number; suffix: string; inView: boolean }) => {
  const reduce = useReducedMotion();
  const [count, setCount] = useState(reduce ? target : 0);
  useEffect(() => {
    if (reduce) {
      setCount(target);
      return;
    }
    if (!inView) return;
    const controls = animate(0, target, {
      duration: 2,
      ease: [0.22, 1, 0.36, 1],
      onUpdate: (v) => setCount(Math.round(v)),
    });
    return () => controls.stop();
  }, [inView, target, reduce]);
  return (
    <span>
      {count}
      {suffix}
    </span>
  );
};

const Stats = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="py-8 md:py-10 bg-white" ref={ref}>
      <div className="container mx-auto px-6 lg:px-10">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-x-6 gap-y-7">
          {stats.map((s, i) => (
            <Reveal key={s.label} delay={i * 0.08}>
              <div className="border-t border-dashed border-foreground/40 pt-4">
                <s.icon size={20} strokeWidth={1.5} aria-hidden className="mb-3 text-primary" />
                <div className="font-display text-[clamp(2.25rem,5vw,4rem)] font-extrabold leading-none tabular-nums text-foreground">
                  <Counter target={s.value} suffix={s.suffix} inView={inView} />
                </div>
                <p className="mt-2 text-muted-foreground text-sm font-body">{s.label}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Stats;
