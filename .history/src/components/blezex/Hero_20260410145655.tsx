import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowRight, MessageCircle, Sparkles } from "lucide-react";
import { useEffect, useMemo, useState } from "react";
import Tilt from "react-parallax-tilt";

const Hero = () => {

  const message = encodeURIComponent(
    "Hello BlezeX 👋 I am interested in your services and would like a free consultation."
  );

  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  // Scroll animation
  const { scrollY } = useScroll();
  const opacity = useTransform(scrollY, [0, 300], [1, 0]);
  const scale = useTransform(scrollY, [0, 300], [1, 0.95]);

  // Optimized mouse movement
  useEffect(() => {
    let frame;

    const handleMouseMove = (e) => {
      if (frame) cancelAnimationFrame(frame);

      frame = requestAnimationFrame(() => {
        setMousePosition({
          x: e.clientX,
          y: e.clientY
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
      top: Math.random() * 200
    }));
  }, []);

  return (
    <motion.section
      style={{ opacity, scale }}
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >

      {/* AI Animated Grid */}
      <div className="absolute inset-0 -z-10 opacity-40">

        <div className="absolute inset-0 
        bg-[linear-gradient(rgba(255,255,255,0.05)_1px,transparent_1px),
        linear-gradient(90deg,rgba(255,255,255,0.05)_1px,transparent_1px)] 
        bg-[size:80px_80px]" />

      </div>

      {/* Mouse Glow */}
      <div
        className="pointer-events-none absolute -inset-px opacity-40"
        style={{
          background: `radial-gradient(600px at ${mousePosition.x}px ${mousePosition.y}px, rgba(255,115,0,0.18), transparent 80%)`
        }}
      />

      {/* AI Particles */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          animate={{ y: ["0%", "-100%"] }}
          transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
          className="absolute inset-0"
        >
          {particles.map((p, i) => (
            <span
              key={i}
              className="absolute w-[2px] h-[2px] bg-white opacity-30 rounded-full"
              style={{
                left: `${p.left}%`,
                top: `${p.top}%`
              }}
            />
          ))}
        </motion.div>
      </div>

      {/* Glow Orbs */}
      <motion.div
        animate={{ y: [-40, 40, -40], x: [-30, 30, -30] }}
        transition={{ duration: 14, repeat: Infinity }}
        className="absolute top-1/4 left-1/4 w-[500px] h-[500px] rounded-full bg-primary/10 blur-[160px]"
      />

      <motion.div
        animate={{ y: [40, -40, 40], x: [30, -30, 30] }}
        transition={{ duration: 16, repeat: Infinity }}
        className="absolute bottom-1/4 right-1/4 w-[420px] h-[420px] rounded-full bg-accent/10 blur-[160px]"
      />

      <div className="container mx-auto px-4 relative z-10 pt-20">

        <div className="grid lg:grid-cols-2 gap-12 items-center">

          {/* LEFT CONTENT */}
          <div className="text-center lg:text-left">

            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
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
              initial={{ opacity: 0, y: 60 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6 leading-tight"
            >
              Transforming Businesses With
              <br />

              <span className="font-extrabold tracking-wide">
                Bleze
                <span className="text-[#FF8A00] drop-shadow-[0_0_12px_rgba(255,115,0,0.8)]">
                  X
                </span>
              </span>
            </motion.h1>

            {/* Description */}
            <p className="text-lg md:text-xl text-muted-foreground max-w-xl mb-8">
              BlezeX builds powerful AI automation systems, scalable web
              platforms, and digital infrastructure that help businesses
              grow faster.
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
                whileHover={{ scale: 1.07 }}
                whileTap={{ scale: 0.95 }}
                href={`https://wa.me/918099655099?text=${message}`}
                target="_blank"
                aria-label="Get free website consultation on WhatsApp"
                className="gradient-bg px-8 py-4 rounded-2xl font-semibold text-primary-foreground flex items-center gap-2 justify-center"
              >
                Get Free Website Consultation
                <ArrowRight size={18} />
              </motion.a>

              <motion.a
                whileHover={{ scale: 1.07 }}
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

            <div className="flex flex-wrap gap-4 mt-6 justify-center lg:justify-start">
              <div className="px-4 py-2 rounded-full glass border text-xs">
                🇮🇳 Startup India Registered
              </div>

              <div className="px-4 py-2 rounded-full glass border text-xs">
                🏢 MSME / Udyam Registered
              </div>
            </div>

          </div>

          {/* RIGHT HERO VISUAL (3D) */}
          <div className="flex justify-center">

            <Tilt
              glareEnable={true}
              glareMaxOpacity={0.3}
              scale={1.05}
              tiltMaxAngleX={10}
              tiltMaxAngleY={10}
            >

              <div className="w-[420px] h-[420px] rounded-3xl glass border p-8 backdrop-blur-xl">

                <div className="h-full flex flex-col justify-center items-center text-center gap-4">

                  <div className="text-6xl">🤖</div>

                  <h3 className="text-xl font-semibold">
                    AI Automation Systems
                  </h3>

                  <p className="text-sm text-muted-foreground">
                    Automate workflows, integrate systems and build
                    scalable infrastructure powered by AI.
                  </p>

                  <div className="flex gap-3 mt-4 text-xs">
                    <span className="px-3 py-1 border rounded-full">Automation</span>
                    <span className="px-3 py-1 border rounded-full">AI Agents</span>
                    <span className="px-3 py-1 border rounded-full">Systems</span>
                  </div>

                </div>

              </div>

            </Tilt>

          </div>

        </div>

      </div>

    </motion.section>
  );
};

export default Hero;