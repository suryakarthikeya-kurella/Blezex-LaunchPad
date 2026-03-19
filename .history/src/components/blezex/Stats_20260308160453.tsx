import { motion, useInView } from "framer-motion";
import { useRef, useState, useEffect } from "react";
import { FolderKanban, Users, Cpu, ThumbsUp } from "lucide-react";

const stats = [
  { icon: FolderKanban, value: 50, suffix: "+", label: "Projects" },
  { icon: Users, value: 50, suffix: "+", label: "Clients" },
  { icon: Cpu, value: 20, suffix: "+", label: "Technologies" },
  { icon: ThumbsUp, value: 98, suffix: "%", label: "Satisfaction" },
];

const Counter = ({ target, suffix, inView }: { target: number; suffix: string; inView: boolean }) => {
  const [count, setCount] = useState(0);
  useEffect(() => {
    if (!inView) return;
    let start = 0;
    const duration = 2000;
    const step = Math.ceil(target / (duration / 16));
    const timer = setInterval(() => {
      start += step;
      if (start >= target) {
        setCount(target);
        clearInterval(timer);
      } else {
        setCount(start);
      }
    }, 16);
    return () => clearInterval(timer);
  }, [inView, target]);
  return <span>{count}{suffix}</span>;
};

const Stats = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="py-20" ref={ref}>
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((s, i) => (
            <motion.div
              key={s.label}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={inView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.4, delay: i * 0.1 }}
              className="glass rounded-2xl p-6 text-center"
            >
              <div className="w-12 h-12 rounded-xl gradient-bg flex items-center justify-center mx-auto mb-3">
                <s.icon size={22} className="text-primary-foreground" />
              </div>
              <div className="text-3xl md:text-4xl font-heading font-bold gradient-text mb-1">
                <Counter target={s.value} suffix={s.suffix} inView={inView} />
              </div>
              <p className="text-muted-foreground text-sm font-body">{s.label}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Stats;
