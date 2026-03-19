import { motion } from "framer-motion";
import { Layers } from "lucide-react";

const projects = [
  {
    id: "01",
    title: "Nexus AI",
    category: "ENTERPRISE DATA",
    services: ["AI Automation", "Data Analysis", "Custom SaaS"],
  },
  {
    id: "02",
    title: "EcoStream",
    category: "SUSTAINABILITY TECH",
    services: ["Mobile App", "IoT Integration", "Cloud Sync"],
  },
  {
    id: "03",
    title: "Veloce",
    category: "E-COMMERCE",
    services: ["Headless Web", "API Integration", "SEO"],
  },
  {
    id: "04",
    title: "CloudSync",
    category: "SAAS STARTUP",
    services: ["Web Platform", "Real-time Sync", "UI/UX"],
  },
  {
    id: "05",
    title: "FinTrack",
    category: "FINTECH",
    services: ["Security Audit", "Dashboard", "Mobile App"],
  },
  {
    id: "06",
    title: "HealthPulse",
    category: "HEALTHCARE",
    services: ["CRM System", "Patient Portal", "AI Chatbot"],
  },
];

const Portfolio = () => {
  return (
    <section className="py-24">
      <div className="container mx-auto px-6">

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">

          {projects.map((project, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: i * 0.1 }}
              className="border border-white/10 rounded-2xl p-8 bg-[#05060a] hover:border-primary/40 transition"
            >
              
              {/* Top Row */}
              <div className="flex justify-between items-start mb-8">

                <div className="w-12 h-12 flex items-center justify-center rounded-lg bg-green-900/30 text-green-400">
                  <Layers size={20} />
                </div>

                <span className="text-xs text-muted-foreground">
                  {project.id}
                </span>

              </div>

              {/* Title */}
              <h3 className="text-xl font-semibold mb-2">
                {project.title}
              </h3>

              {/* Category */}
              <p className="text-green-400 text-sm tracking-wider mb-6">
                {project.category}
              </p>

              {/* Tags */}
              <div className="flex flex-wrap gap-2">
                {project.services.map((tag, index) => (
                  <span
                    key={index}
                    className="text-xs px-3 py-1 rounded-lg bg-white/5 border border-white/10 text-muted-foreground"
                  >
                    {tag}
                  </span>
                ))}
              </div>

            </motion.div>
          ))}

        </div>
      </div>
    </section>
  );
};

export default Portfolio;