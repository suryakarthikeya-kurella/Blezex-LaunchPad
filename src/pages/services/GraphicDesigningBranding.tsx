import ServiceDetailPage from "@/components/blezex/ServiceDetailPage";
import type { ServicePageData } from "@/components/blezex/ServicePageShared";

const data: ServicePageData = {
  slug: "graphic-designing-branding",
  title: "Graphic Designing & Branding",
  tagline: "Design That Makes Your Brand Unforgettable.",
  description:
    "BlezeX creates powerful visual identities, UI/UX designs, and creative assets that communicate your brand values, attract your target audience, and make a lasting first impression across every touchpoint.",
  heroIcon: "🎨",
  offerings: [
    { title: "Logo Design & Brand Identity", desc: "Strategic logo design and complete brand identity systems including colour palettes, typography, and usage guidelines." },
    { title: "UI/UX Design for Web & Apps", desc: "User research-driven interface design that maximises usability, engagement, and conversion rates." },
    { title: "Marketing Collateral", desc: "Brochures, flyers, posters, business cards, and presentation decks that represent your brand professionally." },
    { title: "Social Media Design", desc: "Consistent, on-brand social media templates, banners, and content assets for all major platforms." },
    { title: "Packaging Design", desc: "Premium packaging design for physical products that stands out on shelves and communicates quality." },
    { title: "Brand Guidelines Document", desc: "A comprehensive brand book ensuring consistency across all internal and external communications." },
  ],
  benefits: [
    { title: "Instant Credibility", desc: "Professional design signals quality and trustworthiness before a customer reads a single word." },
    { title: "Brand Recognition", desc: "Consistent visual identity makes your brand instantly recognisable across all channels and touchpoints." },
    { title: "Higher Conversion Rates", desc: "Well-designed interfaces and marketing materials directly improve click-through rates and conversions." },
    { title: "Customer Trust", desc: "Polished design reduces perceived risk and increases customer confidence in your product or service." },
    { title: "Emotional Connection", desc: "Great branding creates emotional resonance that drives loyalty and word-of-mouth referrals." },
    { title: "Competitive Differentiation", desc: "Strong visual identity sets you apart in a crowded market and commands premium pricing." },
  ],
  technologies: [
    "Figma", "Adobe Illustrator", "Adobe Photoshop", "Adobe XD",
    "Adobe InDesign", "Canva Pro", "After Effects", "Blender",
    "Framer", "Webflow", "Notion", "FigJam",
  ],
  whyBlezex: [
    "Design strategy rooted in brand psychology and consumer behaviour research.",
    "Unlimited revisions until you're completely satisfied — no compromise on quality.",
    "UI/UX designs backed by usability testing and real user feedback.",
    "All files delivered in source format (AI, PSD, Figma) — you own everything.",
    "Consistent brand voice across digital and print — unified experience everywhere.",
    "Fast turnaround: logo and brand identity in 5–10 business days.",
    "Startup-friendly packages with enterprise-level quality and attention to detail.",
    "Bilingual design capability — English and regional language assets available.",
  ],
  faqs: [
    { q: "What is included in a brand identity package?", a: "A full brand identity package includes logo design (multiple variants), colour palette, typography system, brand usage guidelines, and a brand book PDF." },
    { q: "How many logo concepts will I receive?", a: "We present 3 distinct logo concepts to start. After you select your direction, we refine it with unlimited revisions until you're happy." },
    { q: "Do you provide print-ready files?", a: "Yes. We deliver files in all required formats — AI, EPS, PDF, PNG, SVG — print-ready at 300 DPI." },
    { q: "Can you redesign my existing logo?", a: "Yes. We offer logo refinement (modernising while preserving brand equity) or full rebranding based on your needs." },
    { q: "What is the difference between logo design and brand identity?", a: "A logo is a single mark. Brand identity is the complete visual system — logo, colours, fonts, patterns, imagery style — that creates a consistent experience everywhere." },
    { q: "Do you also design pitch decks and investor presentations?", a: "Yes. We design compelling pitch decks, investor presentations, and business proposals that communicate your value proposition with clarity and visual impact." },
  ],
};

export default function GraphicDesigningBrandingPage() {
  return <ServiceDetailPage data={data} />;
}
