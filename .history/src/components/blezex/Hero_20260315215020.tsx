import { motion } from "framer-motion";
import { ArrowRight, MessageCircle, Sparkles } from "lucide-react";
import { useEffect, useState } from "react";

const Hero = () => {

  const message = encodeURIComponent(
    "Hello BlezeX 👋 I am interested in your services and would like a free consultation."
  );

  const headlines = [
    "AI-Powered Technology Solutions",
    "Build Smarter Businesses",
    "Automate & Scale with Technology"
  ];

  const [text, setText] = useState("");
  const [index, setIndex] = useState(0);
  const [char, setChar] = useState(0);

  useEffect(() => {
    const typing = setTimeout(() => {
      setText(headlines[index].substring(0, char + 1));
      setChar(char + 1);

      if (char === headlines[index].length) {
        setTimeout(() => {
          setChar(0);
          setIndex((prev) => (prev + 1) % headlines.length);
        }, 1800);
      }
    }, 60);

    return () => clearTimeout(typing);
  }, [char, index]);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden grid-bg">

      {/* AI Animated Grid Background */}
      <div className="absolute inset-0 opacity-[0.06]">
        <div className="absolute inset-0 bg-[linear-gradient(#ffffff22_1px,transparent_1px),linear-gradient(90deg,#ffffff22_1px,transparent_1px)] bg-[size:60px_60px]" />
      </div>

      {/* Animated Glow Orbs */}
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

        {/* Typing Headline */}
        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-semibold mb-6 max-w-4xl mx-auto">
          <span className="gradient-text">{text}</span>
          <span className="animate-pulse">|</span>
        </h1>

        {/* Description */}
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

        {/* Trust line */}
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

        {/* Smaller Stats */}
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

      {/* Floating Elements */}
      <motion.div
        animate={{ y: [-12, 12, -12], rotate: [0, 8, 0] }}
        transition={{ repeat: Infinity, duration: 6 }}
        className="hidden lg:block absolute right-[10%] top-[30%] w-20 h-20 rounded-2xl glass opacity-40"
      />

      <motion.div
        animate={{ y: [12, -18, 12], rotate: [0, -10, 0] }}
        transition={{ repeat: Infinity, duration: 5 }}
        className="hidden lg:block absolute left-[8%] bottom-[30%] w-16 h-16 rounded-full gradient-bg opacity-20"
      />

    </section>
  );
};

export default Hero;