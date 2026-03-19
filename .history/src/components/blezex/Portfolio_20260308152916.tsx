import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import {
  ExternalLink,
  Layers,
  Bot,
  Globe,
  Palette,
  Zap
} from "lucide-react";

const categories = ["All", "Websites", "Mobile Apps", "Automation", "Branding"];

const projects = [
  {
    title: "Skincare Hospital Website",
    category: "Websites",
    client: "CARECHARMALAYA",
    icon: Globe,
    services: [
      "Custom UI/UX Design",
      "Web Development",
      "Payment Integration",
      "Mini-Ecommerce Setup"
    ],
    link: "carecharmalaya.com"
  },
  {
    title: "AI Customer Support Bot",
    category: "Automation",
    client: "SupportDesk",
    icon: Bot,
    services: ["AI Chatbot", "WhatsApp Automation"],
    link: "#"
  },
  {
    title: "Mini-Ecommerce Website",
    category: "Websites",
    client: "SRI VIJAYA PICKLES",
    icon: Palette,
    services: ["Logo Design", "Brand Identity", "Startes Package Website"],
    link: "srivijayapickles.in"
  },
  {
    title: "SaaS Dashboard",
    category: "Websites",
    client: "CloudMetrics",
    icon: Layers,
    services: ["Dashboard UI", "SaaS Platform Development"],
    link: "#"
  },
  {
    title: "Marketing Automation",
    category: "Automation",
    client: "GrowthBoost",
    icon: Zap,
    services: ["Email Automation", "CRM Integration"],
    link: "#"
  },
  {
    title: "Startup Branding",
    category: "Branding",
    client: "TechNova",
    icon: Palette,
    services: ["Logo", "Brand Guidelines", "Website Design"],
    link: "#"
  }
];

const Portfolio = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });
  const [active, setActive] = useState("All");

  const filtered =
    active === "All"
      ? projects
      : projects.filter((p) => p.category === active);

  return (
    <section
      id="portfolio"
      className="py-28 bg-[#0A0A0F]"
      ref={ref}
    >
      <div className="max-w-7xl mx-auto px-6">

        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          className="text-center mb-14"
        >
          <h2 className="text-3xl md:text-4xl font-extrabold mb-4">
            Our{" "}
            <span className="bg-gradient-to-r from-[#FF4D1C] to-[#FF8A00] text-transparent bg-clip-text">
              Portfolio
            </span>
          </h2>

          <p className="text-gray-400 max-w-xl mx-auto">
            A showcase of projects where technology, automation,
            and design help businesses grow faster.
          </p>
        </motion.div>

        {/* Filter Buttons */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActive(cat)}
              className={`px-5 py-2 rounded-full text-sm font-medium transition-all ${
                active === cat
                  ? "bg-gradient-to-r from-[#FF4D1C] to-[#FF8A00] text-white shadow-lg"
                  : "bg-[#111118] text-gray-400 hover:text-white border border-white/10"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">

          {filtered.map((p, i) => {
            const Icon = p.icon;

            return (
              <motion.div
                key={p.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.06 }}
                className="relative group rounded-2xl border border-white/10 bg-[#111118] p-6 overflow-hidden hover:border-[#FF4D1C]/50 transition-all duration-300"
              >

                {/* Glow Hover */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition duration-500 bg-[radial-gradient(circle_at_center,#FF4D1C22,transparent_70%)]" />

                {/* Top */}
                <div className="flex justify-between items-start mb-6">

                  <div className="w-11 h-11 flex items-center justify-center rounded-xl bg-gradient-to-br from-[#FF4D1C] to-[#FF8A00] text-white">
                    <Icon size={18} />
                  </div>

                  <span className="text-xs text-gray-500">
                    {String(i + 1).padStart(2, "0")}
                  </span>

                </div>

                {/* Title */}
                <h3 className="text-lg font-semibold text-white mb-2">
                  {p.title}
                </h3>

                {/* Client */}
                <div className="mb-3">
                  <span className="text-xs px-3 py-1 rounded-full bg-[#FF4D1C]/15 text-[#FF8A00]">
                    {p.client}
                  </span>
                </div>

                {/* Category */}
                <p className="text-sm text-[#FF4D1C] mb-5">
                  {p.category}
                </p>

                {/* Services */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {p.services.map((service, index) => (
                    <span
                      key={index}
                      className="text-xs px-3 py-1 rounded-md bg-black/30 border border-white/10 text-gray-400"
                    >
                      {service}
                    </span>
                  ))}
                </div>

                {/* Link */}
                <a
                  href={p.link}
                  className="flex items-center gap-2 text-sm font-medium text-[#FF8A00] hover:text-[#FF4D1C] transition"
                >
                  View Project <ExternalLink size={16} />
                </a>

              </motion.div>
            );
          })}

        </div>
      </div>
    </section>
  );
};

export default Portfolio;