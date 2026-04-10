import { motion } from "framer-motion";
import { ArrowRight, MessageCircle, Sparkles } from "lucide-react";
import { useEffect, useMemo, useState } from "react";

const Hero = () => {

  const message = encodeURIComponent(
    "Hello BlezeX 👋 I am interested in your services and would like a free consultation."
  );

  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  // Optimized mouse move
  useEffect(() => {
    let frame;

    const handleMouseMove = (e) => {
      if (frame) cancelAnimationFrame(frame);

      frame = requestAnimationFrame(() => {
        setMousePosition({
          x: e.clientX,
          y: e.clientY,
        });
      });
    };

    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      if (frame) cancelAnimationFrame(frame);
    };
  }, []);

  // Generate particles once
  const particles = useMemo(() => {
    return [...Array(30)].map(() => ({
      left: Math.random() * 100,
      top: Math.random() * 200,
    }));
  }, []);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden grid-bg">

      {/* Mouse Glow */}
      <div
        className="pointer-events-none absolute -inset-px opacity-40"
        style={{
          background: `radial-gradient(600px at ${mousePosition.x}px ${mousePosition.y}px, rgba(255,77,28,0.15), transparent 80%)`,
        }}
      />

      {/* Grid Background */}
      <div className="absolute inset-0 opacity-[0.05]">
        <div className="absolute inset-0 bg-[linear-gradient(#ffffff22_1px,transparent_1px),linear-gradient(90deg,#ffffff22_1px,transparent_1px)] bg-[size:60px_60px]" />
      </div>

      {/* AI Particles */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          animate={{ y: ["0%", "-100%"] }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          className="absolute inset-0"
        >
          {particles.map((p, i) => (
            <span
              key={i}
              className="absolute w-[2px] h-[2px] bg-white opacity-30 rounded-full"
              style={{
                left: `${p.left}%`,
                top: `${p.top}%`,
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

      <div className="container mx-auto px-4 relative z-10 pt-20">

        <div className="grid lg:grid-cols-2 gap-12 items-center">

          {/* LEFT CONTENT */}
          <div className="text-center lg:text-left">

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

            {/* Heading */}
            <motion.h1
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
              className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6 leading-tight"
            >
              Transforming Businesses With
              <br />
              <span className="font-extrabold tracking-wide">
                Bleze
                <span className="text-[#FF8A00] drop-shadow-[0_0_10px_rgba(255,115,0,0.8)]">
                  X
                </span>
              </span>
            </motion.h1>

            {/* Description */}
            <p className="text-lg md:text-xl text-muted-foreground max-w-xl mb-8">
              BlezeX helps businesses build powerful digital platforms, automate
              workflows with AI, and scale faster using modern technology.
            </p>

            {/* Services */}
            <div className="flex flex-wrap gap-6 text-sm text-muted-foreground mb-10 justify-center lg:justify-start">
              <span>⚡ AI Automation</span>
              <span>💻 Web Development</span>
              <span>📱 App Development</span>
              <span>⚙️ Business Systems</span>
              <span>📈 Digital Growth</span>
            </div>

            {/* CTA */}
            <div className="flex flex-col sm:flex-row gap-4 mb-12 justify-center lg:justify-start">

              <motion.a
                whileHover={{ scale: 1.06 }}
                whileTap={{ scale: 0.95 }}
                aria-label="Get free website audit on WhatsApp"
                href={`https://wa.me/918099655099?text=${message}`}
                target="_blank"
                className="gradient-bg px-8 py-4 rounded-2xl font-semibold text-primary-foreground flex items-center gap-2 justify-center"
              >
                Get Free Website Audit
                <ArrowRight size={18} />
              </motion.a>

              <motion.a
                whileHover={{ scale: 1.06 }}
                whileTap={{ scale: 0.95 }}
                href="#contact"
                aria-label="Contact BlezeX"
                className="px-8 py-4 rounded-2xl border border-border flex items-center gap-2 justify-center"
              >
                <MessageCircle size={18} /> Contact Us
              </motion.a>

            </div>

            {/* Trust */}
            <p className="text-sm text-muted-foreground">
              Trusted by <span className="font-semibold text-foreground">50+ businesses</span>
            </p>

            {/* Badges */}
            <div className="flex flex-wrap gap-4 mt-6 justify-center lg:justify-start">
              <div className="px-4 py-2 rounded-full glass border text-xs">
                🇮🇳 Startup India Registered
              </div>

              <div className="px-4 py-2 rounded-full glass border text-xs">
                🏢 MSME / Udyam Registered
              </div>
            </div>

          </div>

          {/* RIGHT HERO VISUAL */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1 }}
            className="relative flex justify-center"
          >

            <div className="w-[420px] h-[420px] rounded-3xl glass border p-6 backdrop-blur-xl">

              <div className="h-full w-full flex flex-col justify-center items-center text-center gap-4">

                <div className="text-5xl">🤖</div>

                <h3 className="text-xl font-semibold">
                  AI Powered Automation
                </h3>

                <p className="text-sm text-muted-foreground">
                  Automate workflows, integrate systems and scale your
                  business operations with intelligent AI solutions.
                </p>

                <div className="flex gap-4 mt-4 text-xs">
                  <span className="px-3 py-1 border rounded-full">Automation</span>
                  <span className="px-3 py-1 border rounded-full">AI Agents</span>
                  <span className="px-3 py-1 border rounded-full">Systems</span>
                </div>

              </div>

            </div>

          </motion.div>

        </div>

      </div>

    </section>
  );
};

export default Hero;