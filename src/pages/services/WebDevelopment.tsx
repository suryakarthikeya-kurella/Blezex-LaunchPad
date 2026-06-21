import ServiceDetailPage from "@/components/blezex/ServiceDetailPage";
import type { ServicePageData } from "@/components/blezex/ServicePageShared";

const data: ServicePageData = {
  slug: "web-development",
  title: "Web Development",
  tagline: "Fast. Beautiful. Built to Convert.",
  description:
    "BlezeX builds high-performance websites and web applications that combine stunning design with technical excellence — from business websites to complex custom web apps and e-commerce platforms.",
  heroIcon: "🌐",
  offerings: [
    { title: "Business Websites", desc: "Professional, SEO-optimised websites that represent your brand and drive leads 24/7." },
    { title: "Custom Web Applications", desc: "Full-stack web apps built with modern frameworks, tailored exactly to your business workflow." },
    { title: "E-Commerce Platforms", desc: "Scalable online stores with seamless checkout, product management, and payment integration." },
    { title: "Landing Pages", desc: "High-converting landing pages designed with persuasive copy, CTAs, and A/B testing in mind." },
    { title: "Website Redesign & Optimisation", desc: "Transform outdated sites into fast, modern, accessible experiences that rank and convert." },
    { title: "Progressive Web Apps (PWA)", desc: "App-like web experiences that work offline, install on any device, and load instantly." },
  ],
  benefits: [
    { title: "24/7 Lead Generation", desc: "Your website works round the clock, capturing leads and building credibility while you sleep." },
    { title: "Higher Search Rankings", desc: "SEO-first development ensures your site ranks for the keywords your customers are searching." },
    { title: "Lower Bounce Rates", desc: "Fast load times and great UX keep visitors engaged and push them towards conversion." },
    { title: "Scalable Architecture", desc: "Built to grow with your business — no painful rebuilds as traffic and features increase." },
    { title: "Cross-Device Compatibility", desc: "Pixel-perfect responsiveness across mobile, tablet, and desktop for every user." },
    { title: "Brand Trust & Credibility", desc: "A professional web presence instantly builds trust and differentiates you from competitors." },
  ],
  technologies: [
    "React", "Next.js", "TypeScript", "Vite", "Tailwind CSS", "Node.js",
    "Express", "PostgreSQL", "MongoDB", "Supabase", "Firebase",
    "Vercel", "Netlify", "AWS", "Figma",
  ],
  whyBlezex: [
    "Startup India registered technology company with 100+ successful web projects.",
    "End-to-end delivery — design, development, testing, deployment, and maintenance.",
    "Performance-first approach: every site scores 90+ on Google PageSpeed.",
    "Modern tech stack: React, Next.js, TypeScript — not outdated page builders.",
    "Dedicated project manager and direct developer communication throughout.",
    "Post-launch support included — we don't disappear after delivery.",
    "Transparent pricing with no hidden charges or surprise scope creep.",
    "NDA available for sensitive business projects.",
  ],
  faqs: [
    { q: "How long does it take to build a website?", a: "A standard business website takes 7–14 days. Custom web applications typically range from 3–8 weeks depending on complexity and feature scope." },
    { q: "Do you provide website hosting and domain?", a: "Yes. We can assist with domain registration, hosting setup, and deployment on platforms like Vercel, AWS, or your preferred provider." },
    { q: "Will my website be mobile-friendly?", a: "Absolutely. Every website we build is fully responsive and tested across all major devices and screen sizes." },
    { q: "Can you redesign my existing website?", a: "Yes. We specialise in redesigns that preserve your brand identity while dramatically improving performance, UX, and conversion rates." },
    { q: "Do you build websites on WordPress or only custom code?", a: "We primarily build custom-coded websites for superior performance and flexibility. We can also work with WordPress/headless CMS if that fits your requirements." },
    { q: "What does post-launch support include?", a: "We offer ongoing maintenance packages covering security updates, performance monitoring, content changes, and feature additions." },
  ],
};

export default function WebDevelopmentPage() {
  return <ServiceDetailPage data={data} />;
}
