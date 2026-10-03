import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import Reveal from "@/components/motion/Reveal";
import SplitText from "@/components/motion/SplitText";
import SketchCard from "@/components/sketch/SketchCard";
import Annotation from "@/components/sketch/Annotation";
import ServiceIcon, { type ServiceIconName } from "@/components/sketch/ServiceIcon";

const services: { icon: ServiceIconName; title: string; slug: string; subs: string[] }[] = [
  {
    icon: "web",
    title: "Web Development",
    slug: "web-development",
    subs: [
      "Business Websites",
      "Custom Web Applications",
      "E-Commerce Platforms",
      "High-Converting Landing Pages",
      "Website Redesign & Optimization",
    ],
  },
  {
    icon: "saas",
    title: "Custom Software & SaaS",
    slug: "custom-software-saas",
    subs: [
      "CRM Systems",
      "ERP Systems",
      "SaaS Platforms",
      "Custom Business Software",
      "API Integrations",
    ],
  },
  {
    icon: "ai",
    title: "AI & Automation",
    slug: "ai-automation",
    subs: [
      "AI Chatbots (Web / WhatsApp / Telegram)",
      "AI Agents",
      "Business Process Automation",
      "Customer Support Automation",
      "AI Content Generation Tools",
      "AI Assistants",
    ],
  },
  {
    icon: "marketing",
    title: "Digital Marketing & Growth",
    slug: "digital-marketing",
    subs: [
      "SEO Optimization (On-Page & Off-Page)",
      "Paid Advertising (Google & Meta Ads)",
      "Social Media Strategy",
      "Digital Growth Strategy",
      "Content & Video Marketing",
      "Email & Influencer Marketing",
      "WhatsApp Marketing",
    ],
  },
  {
    icon: "design",
    title: "Graphic Designing & Branding",
    slug: "graphic-designing-branding",
    subs: [
      "Logo Creation",
      "Brochure, Poster & Product Design",
      "UI/UX Design for Web & Apps",
      "Brand Identity Design",
      "Packaging Design",
    ],
  },
];

const Services = () => (
  <section id="services" className="py-12 md:py-16 relative bg-white">
    <div className="container mx-auto px-6 lg:px-10">
      {/* Section Heading */}
      <div className="relative mb-8 max-w-3xl">
        <p aria-hidden="true" className="mb-3 font-body text-xs uppercase tracking-[0.2em] text-primary">02 /</p>
        <SplitText
          as="h2"
          text="Powerful Digital Services"
          className="font-display text-[clamp(1.75rem,3.6vw,3.25rem)] font-extrabold leading-none mb-4"
        />
        <Reveal delay={0.2}>
          <p className="text-muted-foreground max-w-2xl font-body text-base md:text-lg leading-relaxed">
            BlezeX provides end-to-end technology solutions including AI automation,
            software development, digital growth strategies, and creative branding
            services designed to help companies innovate, automate, and scale.
          </p>
        </Reveal>
        <Annotation text="pick one!" arrow="down-left" className="absolute right-0 top-0 hidden md:inline-flex lg:-right-24" />
      </div>

      {/* Services Grid */}
      <div className="grid md:grid-cols-2 lg:grid-cols-6 gap-5">
        {services.map((s, i) => (
          <Reveal
            key={s.title}
            delay={(i % 3) * 0.08}
            className={`h-full ${i === 4 ? "md:col-span-2" : ""} ${i < 3 ? "lg:col-span-2" : "lg:col-span-3"}`}
          >
            <SketchCard className="flex h-full flex-col">
              <span
                aria-hidden
                className="absolute right-5 top-3 font-display text-5xl font-extrabold leading-none text-border select-none"
              >
                {String(i + 1).padStart(2, "0")}
              </span>

              <ServiceIcon name={s.icon} className="mb-4 shrink-0" />

              <h3 className="font-display font-bold text-xl text-foreground mb-3">{s.title}</h3>

              <ul className="space-y-1.5 flex-1">
                {s.subs.map((sub) => (
                  <li key={sub} className="text-sm text-muted-foreground font-body flex items-start gap-3">
                    <span className="mt-[9px] h-px w-3 bg-primary flex-shrink-0" />
                    {sub}
                  </li>
                ))}
              </ul>

              <Link
                to={`/services/${s.slug}`}
                className="mt-4 inline-flex items-center gap-1.5 text-sm font-display font-semibold text-foreground hover:text-primary transition-colors duration-200"
              >
                Explore Service
                <ArrowRight
                  size={14}
                  strokeWidth={1.75}
                  className="transition-transform duration-200 group-hover:translate-x-1.5"
                />
              </Link>
            </SketchCard>
          </Reveal>
        ))}
      </div>
    </div>
  </section>
);

export default Services;
