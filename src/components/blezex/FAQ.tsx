import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import { ChevronDown } from "lucide-react";

const faqs = [
  { q: "What services does BlezeX provide?", a: "BlezeX provides web development, mobile app development, custom software & SaaS, AI & automation, digital marketing & growth, creative & branding, and support & maintenance services." },
  { q: "How long does a website project take?", a: "Depending on the scope, a standard business website takes 2-4 weeks. Custom web applications and complex projects may take 4-12 weeks." },
  { q: "Do you provide ongoing support?", a: "Yes! We offer 24/7 support and maintenance packages to ensure your digital products run smoothly and stay up to date." },
  { q: "Can you build custom software?", a: "Absolutely. We specialize in building custom CRM, ERP, SaaS platforms, and business-specific software tailored to your workflows." },
  { q: "Do you work with startups?", a: "Yes, we love working with startups. We have special packages designed to help startups build and scale their digital presence affordably." },
  { q: "What technologies do you use?", a: "We use modern technologies including React, React Native, Node.js, Python, AI/ML frameworks, cloud services, and more depending on project needs." },
];

const FAQ = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });
  const [open, setOpen] = useState<number | null>(null);

  return (
    <section id="faq" className="py-24 bg-section-alt" ref={ref}>
      <div className="container mx-auto px-4 max-w-3xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-heading font-extrabold mb-4">
            Frequently Asked <span className="gradient-text">Questions</span>
          </h2>
        </motion.div>

        <div className="space-y-3">
          {faqs.map((faq, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 15 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.3, delay: i * 0.06 }}
              className="glass rounded-2xl overflow-hidden"
            >
              <button
                onClick={() => setOpen(open === i ? null : i)}
                className="w-full flex items-center justify-between p-5 text-left font-heading font-bold text-foreground hover:text-primary transition-colors"
              >
                {faq.q}
                <ChevronDown
                  size={20}
                  className={`flex-shrink-0 ml-4 transition-transform ${open === i ? "rotate-180" : ""}`}
                />
              </button>
              <motion.div
                initial={false}
                animate={{ height: open === i ? "auto" : 0, opacity: open === i ? 1 : 0 }}
                className="overflow-hidden"
              >
                <p className="px-5 pb-5 text-muted-foreground font-body leading-relaxed">{faq.a}</p>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;
