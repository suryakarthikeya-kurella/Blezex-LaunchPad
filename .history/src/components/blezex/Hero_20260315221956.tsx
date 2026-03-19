import { motion } from "framer-motion";
import { ArrowRight, MessageCircle, Sparkles } from "lucide-react";
import { useEffect, useState } from "react";

const Hero = () => {

  const message = encodeURIComponent(
    "Hello BlezeX 👋 I am interested in your services and would like a free consultation."
  );

  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({
        x: e.clientX,
        y: e.clientY
      });
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden grid-bg">

      {/* Interactive Mouse Glow */}
      <div
        className="pointer-events-none absolute -inset-px opacity-40"
        style={{
          background: `radial-gradient(600px at ${mousePosition.x}px ${mousePosition.y}px, rgba(255,77,28,0.15), transparent 80%)`
        }}
      />

      {/* AI Grid Background */}
      <div className="absolute inset-0 opacity-[0.05]">
        <div className="absolute inset-0 bg-[linear-gradient(#ffffff22_1px,transparent_1px),linear-gradient(90deg,#ffffff22_1px,transparent_1px)] bg-[size:60px_60px]" />
      </div>

      {/* Scrolling AI Particles */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          animate={{ y: ["0%", "-100%"] }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          className="absolute inset-0"
        >
          {[...Array(30)].map((_, i) => (
            <span
              key={i}
              className="absolute w-[2px] h-[2px] bg-white opacity-30 rounded-full"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 200}%`
              }}
            />
          ))}
        </motion.div>
      </div>

      {/* Glow Orbs */}
      <motion.div
        animate={{ y: [-30, 30, -30], x: [-20, 20, -20] }}
        transition={{ duration: 12, repeat: Infinity }}
        className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full bg-primary/10 blur-[120px]"
      />

      <motion.div
        animate={{ y: [30, -30, 30], x: [20, -20, 20] }}
        transition={{ duration: 14, repeat: Infinity }}
        className="absolute bottom-1/4 right-1/4 w-80 h-80 rounded-full bg-accent/10 blur-[120px]"
      />

      <div className="container mx-auto px-4 text-center relative z-10 pt-20">

        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass mb-8"
        >
          <Sparkles size={16} className="text-primary" />
          <span className="text-sm font-semibold">
            <span className="gradient-text">BlezeX</span> — Build. Automate. Scale.
          </span>
        </motion.div>

        {/* Main Heading */}
        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-semibold mb-6 max-w-4xl mx-auto"
        >
          Transforming Businesses With

          <span className="block mt-4 bg-gradient-to-r from-orange-500 to-orange-400 bg-clip-text text-transparent font-extrabold tracking-wide drop-shadow-[0_0_10px_rgba(255,115,0,0.6)]">
            BlezeX
          </span>

        </motion.h1>

        Description
        <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-8">
          BlezeX helps companies build powerful digital systems, automate operations with AI,
          and scale using modern technology platforms.
        </p>

        {/* Services */}
        <div className="flex flex-wrap justify-center gap-6 text-sm text-muted-foreground mb-10">
          <span>⚡ AI Automation</span>
          <span>💻 Web Development</span>
          <span>📱 App Development</span>
          <span>⚙️ Business Systems</span>
          <span>📈 Digital Growth</span>
        </div>

        {/* CTA */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-14">

          <motion.a
            whileHover={{ scale: 1.06 }}
            whileTap={{ scale: 0.95 }}
            href={`https://wa.me/918099655099?text=${message}`}
            target="_blank"
            className="gradient-bg px-8 py-4 rounded-2xl font-semibold text-primary-foreground flex items-center gap-2"
          >
            Get Free Strategy Call <ArrowRight size={18} />
          </motion.a>

          <motion.a
            whileHover={{ scale: 1.06 }}
            whileTap={{ scale: 0.95 }}
            href="#contact"
            className="px-8 py-4 rounded-2xl border border-border flex items-center gap-2"
          >
            <MessageCircle size={18} /> Contact Us
          </motion.a>

        </div>

        {/* Trust */}
        <p className="text-sm text-muted-foreground">
          Trusted by <span className="font-semibold text-foreground">50+ businesses</span>
        </p>

        {/* Government Badges */}
        <div className="flex flex-wrap justify-center gap-4 mt-6">

          <div className="px-4 py-2 rounded-full glass border text-xs">
            🇮🇳 Startup India Registered
          </div>

          <div className="px-4 py-2 rounded-full glass border text-xs">
            🏢 MSME / Udyam Registered
          </div>

        </div>

        {/* Small Stats */}
        <div className="flex justify-center gap-6 mt-10 text-xs text-muted-foreground">

          <div>
            <span className="font-semibold text-foreground">50+</span> Businesses
          </div>

          <div>
            <span className="font-semibold text-foreground">100+</span> Projects
          </div>

          <div>
            <span className="font-semibold text-foreground">24/7</span> Support
          </div>

        </div>

      </div>

    </section>
  );
};

export default Hero;