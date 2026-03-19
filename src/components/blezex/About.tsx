import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Lightbulb, Shield, Target, Palette, Clock, Users, HeartHandshake } from "lucide-react";

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

const About = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="about" className="py-24 bg-section-alt" ref={ref}>
      <div className="container mx-auto px-4">

        <div className="grid lg:grid-cols-2 gap-16 items-center">

          {/* Left - Feature Cards */}
          <div className="grid grid-cols-2 gap-4">

            {features.map((f, i) => (
              <motion.div
                key={f.title}
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.4, delay: i * 0.1 }}
                whileHover={{ scale: 1.05 }}
                className="glass rounded-2xl p-5 glass-hover glow-hover"
              >

                <div className="w-10 h-10 rounded-xl gradient-bg flex items-center justify-center mb-3">
                  <f.icon size={20} className="text-primary-foreground" />
                </div>

                <h3 className="font-heading font-bold text-foreground mb-1">
                  {f.title}
                </h3>

                <p className="text-sm text-muted-foreground font-body">
                  {f.desc}
                </p>

              </motion.div>
            ))}

          </div>

          {/* Right - Description */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.2 }}
          >

            <h2 className="text-3xl md:text-4xl font-heading font-extrabold mb-6">
              Empowering Businesses with{" "}
              <span className="gradient-text">Technology & AI</span>
            </h2>

            <p className="text-body-text font-body mb-4 leading-relaxed">
              BlezeX is a technology company focused on building powerful digital systems,
              AI automation tools, and scalable platforms for modern businesses.
              We help organizations transform their ideas into real digital
              products that drive efficiency, innovation, and growth.
            </p>

            <p className="text-muted-foreground font-body mb-4 leading-relaxed">
              From custom web and mobile applications to intelligent automation
              and digital infrastructure, BlezeX provides end-to-end technology
              solutions tailored to your business needs.
            </p>

            <p className="text-muted-foreground font-body mb-8 leading-relaxed">
              Our mission is to help businesses build smarter systems, automate
              operations with AI, and scale using modern technology platforms.
            </p>

            {/* Badges / Stats */}
            <div className="flex flex-wrap gap-3">

              {badges.map((b) => (
                <div
                  key={b.label}
                  className="flex items-center gap-2 px-4 py-2 rounded-xl glass text-sm font-heading font-semibold text-foreground"
                >
                  <b.icon size={16} className="text-primary" />
                  {b.label}
                </div>
              ))}

            </div>

          </motion.div>

        </div>

      </div>
    </section>
  );
};

export default About;