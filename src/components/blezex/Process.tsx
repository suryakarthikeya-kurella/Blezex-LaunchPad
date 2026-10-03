import SketchPath from "@/components/motion/SketchPath";
import Reveal from "@/components/motion/Reveal";
import SplitText from "@/components/motion/SplitText";
import SketchCard from "@/components/sketch/SketchCard";
import BlueprintGrid from "@/components/sketch/BlueprintGrid";

const STEPS = [
  { title: "Discovery", text: "We learn your business, goals, users and constraints before writing a line of code." },
  { title: "Strategy", text: "We map scope, architecture and a clear roadmap with milestones." },
  { title: "Design", text: "Wireframes and interface design you can review, refine and approve." },
  { title: "Development", text: "Clean, tested builds delivered in short cycles with regular demos." },
  { title: "Launch", text: "Deployment, handover and ongoing support so you keep growing." },
];

const Process = () => (
  <section id="process" className="relative overflow-hidden bg-paper py-12 md:py-16">
    <BlueprintGrid />
    <div className="container relative mx-auto px-6 lg:px-10">
      <p className="mb-3 font-body text-xs uppercase tracking-[0.2em] text-primary">04 / Process</p>
      <SplitText
        as="h2"
        text="From idea to launch, step by step"
        className="max-w-3xl font-display text-[clamp(1.75rem,3.6vw,3.25rem)] font-extrabold leading-none"
      />
      <div className="relative mt-8 md:mt-10">
        {/* desktop connector: curved dashed path behind the cards */}
        <svg
          aria-hidden
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
          className="absolute left-0 top-8 hidden h-20 w-full text-primary lg:block"
        >
          <SketchPath
            d="M20 60 C 200 0, 300 120, 300 60 S 500 0, 600 60 S 800 120, 900 60 S 1100 0, 1180 60"
            duration={2.2}
           
          />
        </svg>
        <ol className="relative grid gap-4 lg:grid-cols-5">
          {STEPS.map((s, i) => (
            <li
              key={s.title}
              className={
                i > 0
                  ? "relative before:absolute before:-top-4 before:left-8 before:h-4 before:border-l before:border-dashed before:border-foreground/40 lg:before:hidden"
                  : "relative"
              }
            >
              <Reveal delay={i * 0.1} className="h-full">
                <SketchCard className="h-full p-5">
                  <span aria-hidden className="font-display text-4xl font-extrabold text-primary">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <h3 className="mt-3 font-display text-xl font-bold">{s.title}</h3>
                  <p className="mt-2 text-sm text-muted-foreground font-body">{s.text}</p>
                </SketchCard>
              </Reveal>
            </li>
          ))}
        </ol>
      </div>
    </div>
  </section>
);
export default Process;
