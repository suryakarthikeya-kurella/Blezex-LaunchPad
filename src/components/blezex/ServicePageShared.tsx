import { useRef } from "react";
import { motion, useInView } from "framer-motion";

/* ─── Reusable section fade ──────────────────────────────────── */
export function FadeUp({
  children,
  delay = 0,
  className = "",
}: {
  children: React.ReactNode;
  delay?: number;
  className?: string;
}) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-70px" });
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 28 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.52, delay, ease: "easeOut" }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

/* ─── Shared service page data types ────────────────────────── */
export interface ServicePageData {
  slug: string;
  title: string;
  tagline: string;
  description: string;
  heroIcon: string; // emoji
  offerings: { title: string; desc: string }[];
  benefits: { title: string; desc: string }[];
  technologies: string[];
  whyBlezex: string[];
  faqs: { q: string; a: string }[];
}
