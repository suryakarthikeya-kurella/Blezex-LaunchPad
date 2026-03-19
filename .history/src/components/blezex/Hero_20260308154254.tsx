import { motion } from "framer-motion";
import { ArrowRight, MessageCircle, Sparkles } from "lucide-react";

const Hero = () => {

  const message = encodeURIComponent(
    "Hello BlezeX 👋 I am interested in your services and would like a free consultation."
  );

  return (
    <>
    
    {/* SEO Structured Data */}
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Organization",
          name: "BlezeX",
          url: "https://blezex.com",
          description:
            "BlezeX provides AI automation, web development, custom software development, SaaS platforms and digital marketing solutions.",
          areaServed: "Worldwide"
        })
      }}
    />

    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden grid-bg">

      {/* Gradient Center Glow */}
      <div className="absolute w-[700px] h-[700px] bg-primary/20 blur-[160px] rounded-full top-[40%] left-[50%] -translate-x-1/2 -translate-y-1/2 pointer-events-none"></div>

      {/* Floating Orbs */}
      <motion.div
        animate={{ y: [-30, 30, -30] }}
        transition={{ duration: 10, repeat: Infinity }}
        className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full bg-primary/10 blur-[120px]"
      />

      <motion.div
        animate={{ y: [20, -20, 20] }}
        transition={{ duration: 12, repeat: Infinity }}
        className="absolute bottom-1/4 right-1/4 w-80 h-80 rounded-full bg-accent/10 blur-[120px]"
      />

      <div className="container mx-auto px-4 text-center relative z-10 pt-20">

        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass mb-8"
        >
          <Sparkles size={16} className="text-primary" />
          <span className="text-sm font-heading font-semibold text-foreground">
            <span className="gradient-text">BlezeX</span> — AI Automation & Technology Solutions
          </span>
        </motion.div>

        {/* Heading */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.15 }}
          className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-heading font-semibold leading-tight mb-6 max-w-4xl mx-auto"
        >
          AI Automation, Web Development &{" "}
          <span className="gradient-text">Digital Solutions by BlezeX</span>
        </motion.h1>

        {/* Description */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-10 font-body"
        >
          BlezeX helps startups and businesses grow with
          <strong> AI automation, custom software development, web development, and digital marketing solutions.</strong>
        </motion.p>

        {/* Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.45 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16"
        >

          {/* WhatsApp */}
          <a
            href={`https://wa.me/918099655099?text=${message}`}
            target="_blank"
            rel="noopener noreferrer"
            className="gradient-bg px-8 py-4 rounded-2xl font-heading font-semibold text-primary-foreground glow-hover flex items-center gap-2 transition-all hover:scale-105"
          >
            Get Free Consultation <ArrowRight size={18} />
          </a>

          {/* Contact */}
          <a
            href="#contact"
            className="px-8 py-4 rounded-2xl font-heading font-semibold border border-border text-foreground hover:border-primary/50 flex items-center gap-2 transition-all hover:scale-105"
          >
            <MessageCircle size={18} /> Contact Us
          </a>

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

      </div>

      {/* Floating Shapes */}
      <motion.div
        animate={{ y: [-10, 10, -10] }}
        transition={{ repeat: Infinity, duration: 6 }}
        className="hidden lg:block absolute right-[10%] top-[30%] w-20 h-20 rounded-2xl glass gradient-border opacity-40"
      />

      <motion.div
        animate={{ y: [10, -15, 10] }}
        transition={{ repeat: Infinity, duration: 5 }}
        className="hidden lg:block absolute left-[8%] bottom-[30%] w-16 h-16 rounded-full gradient-bg opacity-20"
      />

      {/* Scroll Indicator */}
      <motion.div
        animate={{ y: [0, 10, 0] }}
        transition={{ repeat: Infinity, duration: 2 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 text-muted-foreground text-sm"
      >
        ↓ Scroll
      </motion.div>

    </section>
    </>
  );
};

export default Hero;