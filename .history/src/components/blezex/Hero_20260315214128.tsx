import { motion } from "framer-motion";
import { ArrowRight, MessageCircle, Sparkles } from "lucide-react";

const Hero = () => {

  const message = encodeURIComponent(
    "Hello BlezeX 👋 I am interested in your services and would like a free consultation."
  );

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden grid-bg">

      {/* Animated Glow Orbs */}
      <motion.div
        animate={{ y: [-30, 30, -30], x: [-20, 20, -20] }}
        transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full bg-primary/10 blur-[120px] pointer-events-none"
      />

      <motion.div
        animate={{ y: [30, -30, 30], x: [20, -20, 20] }}
        transition={{ duration: 14, repeat: Infinity, ease: "easeInOut" }}
        className="absolute bottom-1/4 right-1/4 w-80 h-80 rounded-full bg-accent/10 blur-[120px] pointer-events-none"
      />

      <div className="container mx-auto px-4 text-center relative z-10 pt-20">

        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, y: 30, scale: 0.95 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 0.6 }}
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass mb-8"
        >
          <Sparkles size={16} className="text-primary" />
          <span className="text-sm font-heading font-semibold text-foreground">
            <span className="gradient-text">BlezeX</span> — Fast & Innovative Technology Solutions
          </span>
        </motion.div>

        {/* Heading */}
        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.15 }}
          className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-heading font-semibold leading-tight mb-6 max-w-4xl mx-auto"
        >
          Transforming Businesses With{" "}
          <span className="gradient-text">BlezeX</span>
          <br className="hidden md:block" />
          Digital Solutions
        </motion.h1>

        {/* Description */}
        <motion.p
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-10 font-body"
        >
          BlezeX helps businesses grow with modern technology, intelligent automation, and powerful digital platforms.
        </motion.p>

        {/* Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.45 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16"
        >

          <motion.a
            whileHover={{ scale: 1.08 }}
            whileTap={{ scale: 0.95 }}
            href={`https://wa.me/918099655099?text=${message}`}
            target="_blank"
            rel="noopener noreferrer"
            className="gradient-bg px-8 py-4 rounded-2xl font-heading font-semibold text-primary-foreground glow-hover flex items-center gap-2 transition-all"
          >
            Get Free Consultation <ArrowRight size={18} />
          </motion.a>

          <motion.a
            whileHover={{ scale: 1.08 }}
            whileTap={{ scale: 0.95 }}
            href="#contact"
            className="px-8 py-4 rounded-2xl font-heading font-semibold border border-border text-foreground hover:border-primary/50 flex items-center gap-2 transition-all"
          >
            <MessageCircle size={18} /> Contact Us
          </motion.a>

        </motion.div>

        {/* Trust line */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
          className="text-sm text-muted-foreground font-body"
        >
          ✅ Trusted by <span className="font-semibold text-foreground">50+ businesses</span>
        </motion.p>

        {/* Government Registrations */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7 }}
          className="flex flex-wrap justify-center gap-4 mt-6"
        >

          <div className="flex items-center gap-2 px-4 py-2 rounded-full glass border border-border text-sm">
            🇮🇳 <span className="font-semibold">Startup India Registered</span>
          </div>

          <div className="flex items-center gap-2 px-4 py-2 rounded-full glass border border-border text-sm">
            🏢 <span className="font-semibold">MSME / Udyam Registered</span>
          </div>

        </motion.div>

      </div>

      {/* Floating elements */}
      <motion.div
        animate={{ y: [-12, 12, -12], rotate: [0, 8, 0] }}
        transition={{ repeat: Infinity, duration: 6, ease: "easeInOut" }}
        className="hidden lg:block absolute right-[10%] top-[30%] w-20 h-20 rounded-2xl glass gradient-border opacity-40"
      />

      <motion.div
        animate={{ y: [12, -18, 12], rotate: [0, -10, 0] }}
        transition={{ repeat: Infinity, duration: 5, ease: "easeInOut" }}
        className="hidden lg:block absolute left-[8%] bottom-[30%] w-16 h-16 rounded-full gradient-bg opacity-20"
      />

    </section>
  );
};

export default Hero;