import { ArrowUpRight } from "lucide-react";
import Reveal from "@/components/motion/Reveal";
import SplitText from "@/components/motion/SplitText";
import SketchCard from "@/components/sketch/SketchCard";
import ServiceIcon, { type ServiceIconName } from "@/components/sketch/ServiceIcon";

const services: { icon: ServiceIconName; title: string; description: string }[] = [
  {
    icon: "web",
    title: "Web Development",
    description: "Modern, responsive websites and web applications built for performance and growth.",
  },
  {
    icon: "marketing",
    title: "Digital Marketing & Design",
    description: "Strategic marketing, branding, and creative design to amplify your brand presence.",
  },
  {
    icon: "ai",
    title: "AI & Automation",
    description: "Intelligent chatbots, process automation, and AI-powered business tools.",
  },
];

const ServicesHighlight = () => (
  <section className="py-12 md:py-16 bg-paper">
    <div className="container mx-auto px-6 lg:px-10">
      <div className="mb-8 max-w-3xl">
        <p aria-hidden="true" className="mb-3 font-body text-xs uppercase tracking-[0.2em] text-primary">01 /</p>
        <SplitText
          as="h2"
          text="What We Do Best"
          className="font-display text-[clamp(1.75rem,3.6vw,3.25rem)] font-extrabold leading-none mb-4"
        />
        <Reveal delay={0.2}>
          <p className="text-muted-foreground max-w-2xl font-body text-base md:text-lg leading-relaxed">
            We deliver end-to-end digital solutions that drive real business results.
          </p>
        </Reveal>
      </div>

      <div className="grid md:grid-cols-3 gap-5">
        {services.map((s, i) => (
          <Reveal key={s.title} delay={i * 0.08} className="h-full">
            <SketchCard className="flex h-full flex-col">
              <div className="mb-5 flex items-start justify-between">
                <ServiceIcon name={s.icon} />
                <span aria-hidden="true" className="font-display text-sm font-bold text-muted-foreground">
                  {String(i + 1).padStart(2, "0")}
                </span>
              </div>
              <h3 className="font-display font-bold text-xl mb-2 text-foreground">{s.title}</h3>
              <p className="flex-1 text-muted-foreground text-base font-body leading-relaxed">{s.description}</p>
              <ArrowUpRight
                aria-hidden
                size={22}
                strokeWidth={1.75}
                className="mt-5 text-foreground transition-all duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-primary"
              />
            </SketchCard>
          </Reveal>
        ))}
      </div>
    </div>
  </section>
);

export default ServicesHighlight;
