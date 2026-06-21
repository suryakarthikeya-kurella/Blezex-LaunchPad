import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { ArrowRight } from "lucide-react";

const CTA = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="py-24" ref={ref}>
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          className="gradient-bg rounded-3xl p-12 md:p-16 text-center relative overflow-hidden"
        >
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,rgba(255,255,255,0.1),transparent)] pointer-events-none" />
          <h2 className="text-3xl md:text-4xl font-heading font-extrabold text-primary-foreground mb-4 relative z-10">
            Need help choosing the right technology?
          </h2>
          <p className="text-primary-foreground/80 font-body max-w-xl mx-auto mb-8 relative z-10">
            BlezeX offers a free consultation to understand your business needs and recommend the best solutions.
          </p>
          <a
            href="https://wa.me/919059634555?text=Hi, I'd like to book a free consultation."
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-background text-foreground px-8 py-4 rounded-2xl font-heading font-semibold hover:scale-105 transition-all relative z-10"
          >
            Book Free Consultation <ArrowRight size={18} />
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default CTA;
