import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import {
  Globe, Smartphone, BrainCircuit, Server, Megaphone, Palette, Wrench,ReceiptText, Building2
} from "lucide-react";

const services = [
  {
    icon: Globe,
    title: "Web Development",
    subs: ["Business Websites", "Custom Web Applications", "E-Commerce Websites", "Landing Pages", "Website Redesign"],
  },
  {
    icon: Smartphone,
    title: "Mobile App Development",
    subs: ["Android Apps", "iOS Apps", "Cross Platform Apps", "Business Mobile Apps"],
  },
  {
    icon: Server,
    title: "Custom Software & SaaS",
    subs: ["CRM Systems", "ERP Systems", "SaaS Platforms", "Custom Business Software", "API Integrations"],
  },
  {
    icon: BrainCircuit,
    title: "AI & Automation",
    subs: ["AI Chatbots(Web/WhatsApp/Telegram)",, "Business Process Automation","Customer Support Automation", "AI Content Generation Tools", "AI Assistants"],
  },
  {
    icon: Megaphone,
    title: "Digital Marketing & Growth",
    subs: ["SEO Optimization (On-Page & Off-Page)", "Social Media Stratergy","Digital Growth Strategy","Content & Video Marketing","Email & Influencer Marketing"],
  },
  {
    icon: Palette,
    title: "Graphic Designing & Branding",
    subs: ["Logo Creation", "Brochure, Poster & Product Design","UI/UX Design for Web & App", "Brand Identity Design","Packaging Design"],
  },,
//   {
//   icon: ReceiptText,
//   title: "GST & Compliance Services",
//   subs: [
//     "GST Registration & Amendments",
//     "Monthly & Quarterly GST Return Filing",
//     "GST Reconciliation",
//     "GST Compliance Advisory",
//     "GST Notice Handling",
//     "GST Refund Processing",
//     "Annual GST Returns",
//     "Compliance Reports",
//   ],
// },
{
  icon: Building2,
  title: "Corporate Services",
  subs: [
    "Private Limited Company Registration",
    "LLP Registration",
    "Partnership Firm Registration",
    "PAN / TAN / DSC Registration",
    "MSME Registration",
    "Startup India Registration",
    "Shop & Establishment Registration",
    "Government License Applications",
  ],
},
  {
    icon: Wrench,
    title: "Support & Maintenance",
    subs: ["Website Maintenance", "App Maintenance", "Performance Optimization", "Security Monitoring"],
  },
];

const Services = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="services" className="py-24" ref={ref}>
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-heading font-extrabold mb-4">
            Our <span className="gradient-text">Services</span>
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto font-body">
            Comprehensive digital solutions tailored to your business needs.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
          {services.map((s, i) => (
            <motion.div
              key={s.title}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.4, delay: i * 0.08 }}
              className="glass rounded-2xl p-6 glass-hover glow-hover"
            >
              <div className="w-12 h-12 rounded-xl gradient-bg flex items-center justify-center mb-4">
                <s.icon size={24} className="text-primary-foreground" />
              </div>
              <h3 className="font-heading font-bold text-foreground mb-3">{s.title}</h3>
              <ul className="space-y-1.5">
                {s.subs.map((sub) => (
                  <li key={sub} className="text-sm text-muted-foreground font-body flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full gradient-bg flex-shrink-0" />
                    {sub}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
