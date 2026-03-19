import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import {
  Globe,
  Smartphone,
  BrainCircuit,
  Server,
  Megaphone,
  Palette,
  Wrench,
  Building2
} from "lucide-react";

const services = [
  {
    icon: Globe,
    title: "Web Development",
    subs: [
      "Business Websites",
      "Custom Web Applications",
      "E-Commerce Platforms",
      "High-Converting Landing Pages",
      "Website Redesign & Optimization",
    ],
  },
  {
    icon: Smartphone,
    title: "Mobile App Development",
    subs: [
      "Android Applications",
      "iOS Applications",
      "Cross Platform Apps",
      "Business Mobile Applications",
    ],
  },
  {
    icon: Server,
    title: "Custom Software & SaaS",
    subs: [
      "CRM Systems",
      "ERP Systems",
      "SaaS Platforms",
      "Custom Business Software",
      "API Integrations",
    ],
  },
  {
    icon: BrainCircuit,
    title: "AI & Automation",
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
    icon: Megaphone,
    title: "Digital Marketing & Growth",
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
    icon: Palette,
    title: "Graphic Designing & Branding",
    subs: [
      "Logo Creation",
      "Brochure, Poster & Product Design",
      "UI/UX Design for Web & Apps",
      "Brand Identity Design",
      "Packaging Design",
    ],
  },
  {
    icon: Building2,
    title: "Corporate & Startup Services",
    subs: [
      "Private Limited Company Registration",
      "LLP Registration",
      "Partnership Firm Registration",
      "PAN / TAN / DSC Registration",
      "MSME Registration",
      "Startup India Registration",
      "Shop & Establishment Registration",
      "Government License Applications",
    ],
  },
  {
    icon: Wrench,
    title: "Support & Maintenance",
    subs: [
      "Website Maintenance",
      "App Maintenance",
      "Performance Optimization",
      "Security Monitoring",
    ],
  },
];

const Services = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="services" className="py-24 relative" ref={ref}>
      <div className="container mx-auto px-4">

        {/* Section Heading */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-heading font-extrabold mb-4">
            Powerful <span className="gradient-text">Digital Services</span>
          </h2>

          <p className="text-muted-foreground max-w-2xl mx-auto font-body leading-relaxed">
            BlezeX provides end-to-end technology solutions including AI automation,
            software development, digital growth strategies, and business infrastructure
            services designed to help companies innovate, automate, and scale.
          </p>
        </motion.div>

        {/* Services Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">

          {services.map((s, i) => (
            <motion.div
              key={s.title}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.45, delay: i * 0.08 }}
              whileHover={{ y: -6, scale: 1.02 }}
              className="glass rounded-2xl p-6 glass-hover glow-hover transition-all"
            >

              {/* Icon */}
              <motion.div
                whileHover={{ rotate: 5 }}
                className="w-12 h-12 rounded-xl gradient-bg flex items-center justify-center mb-4"
              >
                <s.icon size={24} className="text-primary-foreground" />
              </motion.div>

              {/* Title */}
              <h3 className="font-heading font-bold text-foreground mb-3">
                {s.title}
              </h3>

              {/* Sub Services */}
              <ul className="space-y-2">
                {s.subs.map((sub) => (
                  <li
                    key={sub}
                    className="text-sm text-muted-foreground font-body flex items-start gap-2"
                  >
                    <span className="mt-[6px] w-1.5 h-1.5 rounded-full gradient-bg flex-shrink-0" />
                    {sub}
                  </li>
                ))}
              </ul>

            </motion.div>
          ))}

        </div>
      </div>
    </section>
  );
};

export default Services;