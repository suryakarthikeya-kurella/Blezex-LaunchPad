import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import { ExternalLink, Layers } from "lucide-react";

const categories = ["All", "Websites", "Mobile Apps", "Automation", "Branding"];

const projects = [
  {
    title: "Skincare Hospital Website",
    category: "Websites",
    client: "FashionKart",
    services: ["UI/UX Design", "Web Development", "Payment Integration",""],
    link: "#"
  },
  // {
  //   title: "Fitness Tracking App",
  //   category: "Mobile Apps",
  //   client: "FitLife",
  //   services: ["Mobile App Development", "API Integration"],
  //   link: "#"
  // },
  {
    title: "AI Customer Support Bot",
    category: "Automation",
    client: "SupportDesk",
    services: ["AI Chatbot", "WhatsApp Automation"],
    link: "#"
  },
  {
    title: "Restaurant Brand Identity",
    category: "Branding",
    client: "SpiceVilla",
    services: ["Logo Design", "Brand Identity", "Social Media Kit"],
    link: "#"
  },
  {
    title: "SaaS Dashboard",
    category: "Websites",
    client: "CloudMetrics",
    services: ["Dashboard UI", "SaaS Platform Development"],
    link: "#"
  },
  // {
  //   title: "Delivery App",
  //   category: "Mobile Apps",
  //   client: "QuickDrop",
  //   services: ["Mobile App Development", "GPS Tracking"],
  //   link: "#"
  // },
  {
    title: "Marketing Automation",
    category: "Automation",
    client: "GrowthBoost",
    services: ["Email Automation", "CRM Integration"],
    link: "#"
  },
  {
    title: "Startup Branding",
    category: "Branding",
    client: "TechNova",
    services: ["Logo", "Brand Guidelines", "Website Design"],
    link: "#"
  },
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
    <section id="portfolio" className="py-24" ref={ref}>
      <div className="container mx-auto px-4">

        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-extrabold mb-4">
            Our <span className="gradient-text">Portfolio</span>
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto">
            A showcase of projects that drive business growth.
          </p>
        </motion.div>

        {/* Filter Buttons */}
        <div className="flex flex-wrap justify-center gap-2 mb-10">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActive(cat)}
              className={`px-5 py-2 rounded-xl text-sm font-semibold transition-all ${
                active === cat
                  ? "gradient-bg text-white"
                  : "glass hover:border-primary/50"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Portfolio Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filtered.map((p, i) => (
            <motion.div
              key={p.title}
              layout
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.3, delay: i * 0.05 }}
              className="glass rounded-2xl p-6 group glass-hover glow-hover relative"
            >

              {/* Top Section */}
              <div className="flex justify-between items-start mb-6">

                <div className="w-10 h-10 flex items-center justify-center rounded-lg glass">
                  <Layers size={18} />
                </div>

                <span className="text-xs text-muted-foreground">
                  {String(i + 1).padStart(2, "0")}
                </span>

              </div>

              {/* Title */}
              <h3 className="font-bold text-lg mb-1">{p.title}</h3>

              {/* Category */}
              <p className="text-primary text-sm tracking-wide mb-5">
                {p.category}
              </p>

              {/* Services Tags */}
              <div className="flex flex-wrap gap-2 mb-5">
                {p.services.map((service, index) => (
                  <span
                    key={index}
                    className="text-xs px-3 py-1 rounded-lg glass text-muted-foreground"
                  >
                    {service}
                  </span>
                ))}
              </div>

              {/* Link */}
              <a
                href={p.link}
                className="flex items-center gap-2 text-sm text-primary hover:underline"
              >
                View Project <ExternalLink size={16} />
              </a>

            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Portfolio;