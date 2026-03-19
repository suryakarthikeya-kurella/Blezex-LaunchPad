import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import { ExternalLink } from "lucide-react";

const categories = ["All", "Websites", "Mobile Apps", "Automation", "Branding"];

const projects = [
  { title: "E-Commerce Platform", category: "Websites", desc: "Modern online store with payment integration." },
  { title: "Fitness Tracking App", category: "Mobile Apps", desc: "Cross-platform fitness and wellness app." },
  { title: "AI Customer Support Bot", category: "Automation", desc: "Intelligent chatbot for 24/7 customer service." },
  { title: "Restaurant Brand Identity", category: "Branding", desc: "Complete branding and visual identity redesign." },
  { title: "SaaS Dashboard", category: "Websites", desc: "Analytics dashboard for SaaS business metrics." },
  { title: "Delivery App", category: "Mobile Apps", desc: "On-demand delivery app with real-time tracking." },
  { title: "Marketing Automation", category: "Automation", desc: "Automated email and social media campaigns." },
  { title: "Startup Branding", category: "Branding", desc: "Logo, website, and brand guidelines for a tech startup." },
];

const Portfolio = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });
  const [active, setActive] = useState("All");

  const filtered = active === "All" ? projects : projects.filter((p) => p.category === active);

  return (
    <section id="portfolio" className="py-24" ref={ref}>
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-heading font-extrabold mb-4">
            Our <span className="gradient-text">Portfolio</span>
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto font-body">
            A showcase of projects that drive business growth.
          </p>
        </motion.div>

        <div className="flex flex-wrap justify-center gap-2 mb-10">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActive(cat)}
              className={`px-5 py-2 rounded-xl text-sm font-heading font-semibold transition-all ${
                active === cat
                  ? "gradient-bg text-primary-foreground"
                  : "glass text-foreground hover:border-primary/50"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {filtered.map((p, i) => (
            <motion.div
              key={p.title}
              layout
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.3, delay: i * 0.05 }}
              className="glass rounded-2xl overflow-hidden group glass-hover glow-hover"
            >
              <div className="h-40 gradient-bg opacity-80 flex items-center justify-center">
                <span className="text-primary-foreground font-heading font-bold text-lg">{p.category}</span>
              </div>
              <div className="p-5">
                <div className="flex items-center justify-between mb-1">
                  <h3 className="font-heading font-bold text-foreground">{p.title}</h3>
                  <ExternalLink size={16} className="text-muted-foreground group-hover:text-primary transition-colors" />
                </div>
                <p className="text-sm text-muted-foreground font-body">{p.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
