import { Check, MessageCircle } from "lucide-react";
import Reveal from "@/components/motion/Reveal";
import SplitText from "@/components/motion/SplitText";
import Magnetic from "@/components/motion/Magnetic";
import SketchCard from "@/components/sketch/SketchCard";

const packages = [
  {
    name: "Starter",
    desc: "Perfect for small businesses getting started online.",
    features: [
      "Business Website (Up to 5 Pages)",
      "Mobile Responsive Design",
      "Modern UI Layout",
      "Contact Form + WhatsApp Chat",
      "Google Maps Integration",
      "Basic SEO Setup",
      "Social Media Links Integration",
      "Speed Optimization",
      "Basic Security Setup",
      "1 Month Technical Support"
    ],
    recommended: false,
  },
  {
    name: "Startup",
    desc: "For growing startups that need a strong digital presence.",
    features: [
      "Custom Website or Web Application",
      "Up to 10 Pages Website",
      "Modern UI/UX Design",
      "Mobile & Tablet Responsive",
      "SEO Optimization Setup",
      "Google Analytics Integration",
      "Blog / Content Section",
      "Lead Capture Forms",
      "WhatsApp Chat Integration",
      "Speed Optimization",
      "Admin Panel / CMS Access",
      "1 Month Full Support"
    ],
    recommended: false,
  },
  {
    name: "Business Growth",
    desc: "Comprehensive digital solution for scaling businesses.",
    features: [
      "Custom Website + Web Application",
      "Advanced UI/UX Design",
      "AI Chatbot Integration",
      "Advanced SEO Optimization",
      "CRM Integration",
      "Payment Gateway Integration",
      "Email Marketing Automation",
      "Analytics & Conversion Tracking",
      "Speed & Performance Optimization",
      "Security & Backup System",
      "2 Months Priority Support"
    ],
    recommended: true,
  },
  {
    name: "Social Media",
    desc: "Complete social media management and growth.",
    features: [
      "Social Media Strategy Planning",
      "Instagram & Facebook Management",
      "Content Creation (Posts + Graphics)",
      "Reels / Short Video Content",
      "Brand Profile Optimization",
      "Ad Campaign Management",
      "Audience Growth Strategy",
      "Hashtag & SEO Optimization",
      "Community Engagement",
      "Monthly Performance Report"
    ],
    recommended: false,
  },
  {
    name: "Full Digital",
    desc: "End-to-end digital transformation for enterprises.",
    features: [
      "Custom Software / SaaS Development",
      "Website & Web Application Development",
      "AI Automation Systems",
      "CRM / ERP Integration",
      "Cloud Infrastructure Setup",
      "API Integrations",
      "Marketing Automation",
      "Business Process Automation",
      "Security & Data Protection",
      "Dedicated Development Team",
      "6 Months Dedicated Support"
    ],
    recommended: false,
  },
];

const Packages = () => (
  <section id="packages" className="py-12 md:py-16 bg-paper">
    <div className="container mx-auto px-6 lg:px-10">
      <div className="mb-8 max-w-3xl">
        <p aria-hidden="true" className="mb-3 font-body text-xs uppercase tracking-[0.2em] text-primary">03 /</p>
        <SplitText
          as="h2"
          text="Our Packages"
          className="font-display text-[clamp(1.75rem,3.6vw,3.25rem)] font-extrabold leading-none mb-4"
        />
        <Reveal delay={0.2}>
          <p className="text-muted-foreground text-base md:text-lg max-w-xl font-body leading-relaxed">
            Flexible packages designed to fit every business size and budget.
          </p>
        </Reveal>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-6 gap-5">
        {packages.map((pkg, i) => (
          <Reveal
            key={pkg.name}
            delay={(i % 3) * 0.08}
            className={`h-full ${i === 4 ? "md:col-span-2" : ""} ${i < 3 ? "lg:col-span-2" : "lg:col-span-3"}`}
          >
            <SketchCard
              className={`flex h-full flex-col ${
                pkg.recommended ? "border-foreground shadow-[6px_6px_0_#111] hover:shadow-[8px_8px_0_#111]" : ""
              }`}
            >
              {pkg.recommended && (
                <span className="absolute -top-4 right-5 -rotate-3 rounded-md bg-primary px-3 py-1 font-hand text-xl leading-none text-primary-foreground">
                  Recommended
                </span>
              )}
              <p aria-hidden="true" className="mb-3 font-body text-xs uppercase tracking-[0.2em] text-muted-foreground">
                {String(i + 1).padStart(2, "0")}
              </p>
              <h3 className="font-display font-bold text-xl md:text-2xl text-foreground mb-2">{pkg.name}</h3>
              <p className="text-base text-muted-foreground font-body mb-4 leading-relaxed">{pkg.desc}</p>
              <ul className="space-y-2 mb-5 flex-1 border-t border-dashed border-border pt-4">
                {pkg.features.map((f) => (
                  <li key={f} className="flex items-start gap-3 text-sm font-body text-body-text">
                    <Check size={16} strokeWidth={1.75} className="text-primary flex-shrink-0 mt-0.5" />
                    {f}
                  </li>
                ))}
              </ul>
              <Magnetic className="block" strength={0.15}>
                <a
                  href={`https://wa.me/919059634555?text=Hi, I'm interested in the ${pkg.name} package.`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`flex items-center justify-center gap-2 py-3 rounded-full font-display font-semibold text-sm transition-colors ${
                    pkg.recommended
                      ? "bg-primary text-primary-foreground hover:bg-foreground"
                      : "border border-foreground text-foreground hover:bg-foreground hover:text-background"
                  }`}
                >
                  <MessageCircle size={16} strokeWidth={1.75} /> Get Started
                </a>
              </Magnetic>
            </SketchCard>
          </Reveal>
        ))}
      </div>
    </div>
  </section>
);

export default Packages;
