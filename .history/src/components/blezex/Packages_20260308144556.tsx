import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Check, MessageCircle } from "lucide-react";

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
      "Lead Generation Funnel Setup",
      "Email Marketing Automation",
      "Analytics & Conversion Tracking",
      "Speed & Performance Optimization",
      "Security & Backup System",
      "Months Priority Support"
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
      "Website + Mobile App Development",
      "AI Automation Systems",
      "CRM / ERP Integration",
      "Cloud Infrastructure Setup",
      "API Integrations",
      "Marketing Automation",
      "Business Process Automation",
      "Security & Data Protection",
      "Dedicated Development Team",
      "12 Months Dedicated Support"
    ],
    recommended: false,
  },
];

const Packages = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="packages" className="py-24 bg-section-alt" ref={ref}>
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-heading font-extrabold mb-4">
            Our <span className="gradient-text">Packages</span>
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto font-body">
            Flexible packages designed to fit every business size and budget.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-5">
          {packages.map((pkg, i) => (
            <motion.div
              key={pkg.name}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.4, delay: i * 0.08 }}
              className={`glass rounded-2xl p-6 flex flex-col relative ${
                pkg.recommended ? "ring-2 ring-primary glow" : ""
              } glass-hover`}
            >
              {pkg.recommended && (
                <span className="absolute -top-3 left-1/2 -translate-x-1/2 gradient-bg text-primary-foreground text-xs font-heading font-semibold px-3 py-1 rounded-full">
                  Recommended
                </span>
              )}
              <h3 className="font-heading font-bold text-xl text-foreground mb-1">{pkg.name}</h3>
              <p className="text-sm text-muted-foreground font-body mb-4">{pkg.desc}</p>
              <ul className="space-y-2 mb-6 flex-1">
                {pkg.features.map((f) => (
                  <li key={f} className="flex items-start gap-2 text-sm font-body text-body-text">
                    <Check size={16} className="text-primary flex-shrink-0 mt-0.5" />
                    {f}
                  </li>
                ))}
              </ul>
              <a
                href={`https://wa.me/918099655099?text=Hi, I'm interested in the ${pkg.name} package.`}
                target="_blank"
                rel="noopener noreferrer"
                className={`flex items-center justify-center gap-2 py-3 rounded-xl font-heading font-semibold text-sm transition-all hover:scale-105 ${
                  pkg.recommended
                    ? "gradient-bg text-primary-foreground glow-hover"
                    : "border border-border text-foreground hover:border-primary/50"
                }`}
              >
                <MessageCircle size={16} /> Get Started
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Packages;
