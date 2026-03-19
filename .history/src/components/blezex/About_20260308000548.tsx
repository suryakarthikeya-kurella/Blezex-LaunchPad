import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Lightbulb, Shield, Target, Palette, Clock, Users, HeartHandshake } from "lucide-react";

const features = [
  { icon: Lightbulb, title: "Innovation", desc: "Cutting-edge solutions that keep you ahead." },
  { icon: Shield, title: "Reliable", desc: "Dependable technology you can trust." },
  { icon: Target, title: "Results", desc: "Data-driven strategies for measurable growth." },
  { icon: Palette, title: "Creative", desc: "Unique designs that set your brand apart." },
];

const badges = [
  { icon: Clock, label: "5+ Years Experience" },
  { icon: Users, label: "50+ Happy Clients" },
  { icon: HeartHandshake, label: "24/7 Support" },
];

const About = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="about" className="py-24 bg-section-alt" ref={ref}>
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left - Feature cards */}
          <div className="grid grid-cols-2 gap-4">
            {features.map((f, i) => (
              <motion.div
                key={f.title}
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.4, delay: i * 0.1 }}
                className="glass rounded-2xl p-5 glass-hover glow-hover"
              >
                <div className="w-10 h-10 rounded-xl gradient-bg flex items-center justify-center mb-3">
                  <f.icon size={20} className="text-primary-foreground" />
                </div>
                <h3 className="font-heading font-bold text-foreground mb-1">{f.title}</h3>
                <p className="text-sm text-muted-foreground font-body">{f.desc}</p>
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
              Why Choose <span className="gradient-text">BlezeX</span>?
            </h2>
            <p className="text-body-text font-body mb-4 leading-relaxed">
              BlezeX is a digital technology company dedicated to helping businesses grow through modern software solutions, AI automation, and strategic digital services. We combine innovation with reliability to deliver real results.
            </p>
            <p className="text-muted-foreground font-body mb-8 leading-relaxed">
              From custom web and mobile applications to full-scale digital marketing campaigns, we are your one-stop partner for all things digital. Our team of experts works closely with you to understand your vision and turn it into reality.
            </p>
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
