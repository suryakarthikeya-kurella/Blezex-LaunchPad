import { Lightbulb, Shield, Target, Palette, Clock, Users, HeartHandshake } from "lucide-react";
import Reveal from "@/components/motion/Reveal";
import SplitText from "@/components/motion/SplitText";
import SketchPath from "@/components/motion/SketchPath";
import SketchCard from "@/components/sketch/SketchCard";
import Annotation from "@/components/sketch/Annotation";

const features = [
  {
    icon: Lightbulb,
    title: "AI Automation",
    desc: "Automate workflows and operations with intelligent AI-driven systems."
  },
  {
    icon: Shield,
    title: "Reliable Systems",
    desc: "Secure, scalable, and high-performance technology infrastructure."
  },
  {
    icon: Target,
    title: "Growth Focused",
    desc: "Digital solutions designed to accelerate business growth."
  },
  {
    icon: Palette,
    title: "Modern Experience",
    desc: "Beautiful, intuitive user experiences built for modern users."
  },
];

const badges = [
  { icon: Users, label: "50+ Businesses Served" },
  { icon: Clock, label: "100+ Projects Delivered" },
  { icon: HeartHandshake, label: "24/7 Client Support" },
];

const Line = ({ d, delay = 0 }: { d: string; delay?: number }) => <SketchPath d={d} delay={delay} duration={1} strokeWidth={1.5} />;

/* Decorative wireframe of an org / system diagram */
const OrgDiagram = () => (
  <svg aria-hidden viewBox="0 0 400 320" className="h-auto w-full text-foreground">
    {/* top node */}
    <Line d="M140 20 H260 a8 8 0 0 1 8 8 V64 a8 8 0 0 1 -8 8 H140 a8 8 0 0 1 -8 -8 V28 a8 8 0 0 1 8 -8 Z" />
    <circle cx="164" cy="46" r="10" className="fill-none stroke-primary" strokeWidth="1.5" />
    <Line d="M184 40 H246 M184 54 H226" delay={0.3} />
    {/* connectors */}
    <Line d="M200 72 V110 M70 110 H330 M70 110 V140 M200 110 V140 M330 110 V140" delay={0.5} />
    {/* child nodes */}
    {[20, 150, 280].map((x, i) => (
      <g key={x}>
        <Line d={`M${x + 8} 140 H${x + 92} a8 8 0 0 1 8 8 V196 a8 8 0 0 1 -8 8 H${x + 8} a8 8 0 0 1 -8 -8 V148 a8 8 0 0 1 8 -8 Z`} delay={0.8 + i * 0.15} />
        <Line d={`M${x + 16} 160 H${x + 70} M${x + 16} 176 H${x + 50}`} delay={1 + i * 0.15} />
      </g>
    ))}
    {/* sub connectors + leaves */}
    <Line d="M70 204 V240 M200 204 V240 M330 204 V240" delay={1.3} />
    {[50, 180, 310].map((x, i) => (
      <rect key={x} x={x} y="240" width="40" height="40" rx="8" className="fill-none stroke-primary" strokeWidth="1.5" strokeDasharray="4 4" opacity={0.9 - i * 0.1} />
    ))}
  </svg>
);

const About = () => (
  <section id="about" className="relative py-12 md:py-16 bg-paper">
    <div className="container mx-auto px-6 lg:px-10">
      <div className="grid lg:grid-cols-12 gap-8 lg:gap-12 items-center">
        {/* Left - Description */}
        <div className="lg:col-span-7">
          <p className="mb-3 font-body text-xs uppercase tracking-[0.2em] text-primary">About</p>
          <SplitText
            as="h2"
            text="Empowering Businesses with Technology & AI"
            className="font-display text-[clamp(1.75rem,3.6vw,3.25rem)] font-extrabold leading-none mb-5"
          />

          <Reveal delay={0.1}>
            <p className="text-base text-body-text font-body mb-3 leading-relaxed max-w-2xl">
              BlezeX is a technology company focused on building powerful digital systems,
              AI automation tools, and scalable platforms for modern businesses.
              We help organizations transform their ideas into real digital
              products that drive efficiency, innovation, and growth.
            </p>

            <p className="text-base text-muted-foreground font-body mb-3 leading-relaxed max-w-2xl">
              From custom web applications and software to intelligent automation
              and digital infrastructure, BlezeX provides end-to-end technology
              solutions tailored to your business needs.
            </p>

            <p className="text-base text-muted-foreground font-body mb-5 leading-relaxed max-w-2xl">
              Our mission is to help businesses build smarter systems, automate
              operations with AI, and scale using modern technology platforms.
            </p>

            {/* Badges / Stats */}
            <div className="flex flex-wrap gap-3">
              {badges.map((b) => (
                <div
                  key={b.label}
                  className="flex items-center gap-2 px-4 py-1.5 rounded-full border border-border bg-white text-sm font-display font-semibold text-foreground"
                >
                  <b.icon size={16} aria-hidden className="text-primary" />
                  {b.label}
                </div>
              ))}
            </div>
          </Reveal>
        </div>

        {/* Right - wireframe diagram */}
        <Reveal delay={0.2} className="lg:col-span-5 relative">
          <SketchCard>
            <OrgDiagram />
          </SketchCard>
          <Annotation text="that's us!" arrow="down-left" className="absolute -top-8 right-4 hidden sm:inline-flex" />
        </Reveal>
      </div>

      {/* Feature list */}
      <ul className="mt-10 md:mt-14 grid sm:grid-cols-2 lg:grid-cols-4 gap-x-6 gap-y-7">
        {features.map((f, i) => (
          <li key={f.title}>
            <Reveal delay={i * 0.08}>
              <div className="border-t border-dashed border-foreground/40 pt-4">
                <f.icon size={22} strokeWidth={1.5} aria-hidden className="mb-3 text-primary" />
                <h3 className="font-display font-bold text-lg text-foreground mb-1.5">{f.title}</h3>
                <p className="text-sm md:text-base text-muted-foreground font-body leading-relaxed">{f.desc}</p>
              </div>
            </Reveal>
          </li>
        ))}
      </ul>
    </div>
  </section>
);

export default About;
