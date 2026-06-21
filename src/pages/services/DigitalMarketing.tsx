import ServiceDetailPage from "@/components/blezex/ServiceDetailPage";
import type { ServicePageData } from "@/components/blezex/ServicePageShared";

const data: ServicePageData = {
  slug: "digital-marketing",
  title: "Digital Marketing & Growth",
  tagline: "More Visibility. More Traffic. More Revenue.",
  description:
    "BlezeX's digital marketing team creates data-driven campaigns across SEO, paid ads, social media, and content to build your brand presence, drive qualified traffic, and convert visitors into loyal customers.",
  heroIcon: "📈",
  offerings: [
    { title: "SEO Optimisation", desc: "On-page and off-page SEO that improves your search rankings, drives organic traffic, and compounds over time." },
    { title: "Paid Advertising (Google & Meta)", desc: "Targeted PPC campaigns on Google Search, Display, and Meta platforms with rigorous A/B testing and ROAS optimisation." },
    { title: "Social Media Strategy", desc: "Platform-specific content strategies and community management for Instagram, LinkedIn, X, and YouTube." },
    { title: "Content & Video Marketing", desc: "High-quality blog content, video scripts, reels, and YouTube content designed to educate, engage, and convert." },
    { title: "Email & WhatsApp Marketing", desc: "Segmented email campaigns and WhatsApp broadcast sequences that nurture leads and drive repeat purchases." },
    { title: "Influencer Marketing", desc: "Micro and macro influencer partnerships that build authentic brand awareness in your target market." },
  ],
  benefits: [
    { title: "Consistent Lead Flow", desc: "A well-run digital marketing strategy generates a steady, predictable stream of qualified inbound leads." },
    { title: "Measurable ROI", desc: "Every rupee spent is tracked. We provide transparent reporting on traffic, conversions, and revenue attribution." },
    { title: "Brand Authority", desc: "Consistent content and visibility builds your brand as the go-to authority in your industry." },
    { title: "Lower Cost Per Acquisition", desc: "Organic SEO and content reduce dependency on paid ads, dramatically lowering customer acquisition costs over time." },
    { title: "Audience Insights", desc: "Deep analytics reveal who your customers are, what they want, and what motivates them to buy." },
    { title: "Long-Term Asset Building", desc: "SEO and content compound over time — unlike ads, they continue to deliver value without ongoing spend." },
  ],
  technologies: [
    "Google Ads", "Meta Ads Manager", "Google Analytics 4", "Google Search Console",
    "SEMrush", "Ahrefs", "HubSpot", "Mailchimp", "WhatsApp Business API",
    "Canva", "Adobe Premiere", "CapCut", "Buffer", "Hootsuite", "Hotjar",
  ],
  whyBlezex: [
    "Data-driven decisions: every campaign is backed by analytics, not guesswork.",
    "Full-funnel expertise — we don't just generate traffic, we convert it into revenue.",
    "Transparent monthly reporting with clear KPIs and actionable recommendations.",
    "Cross-channel strategy ensures your brand message is consistent everywhere.",
    "Dedicated account manager who understands your business and industry.",
    "No long-term lock-in contracts — performance speaks for itself.",
    "Creative team and tech team work together for campaigns that both look great and rank.",
    "WhatsApp marketing expertise — a uniquely powerful channel in the Indian market.",
  ],
  faqs: [
    { q: "How long does SEO take to show results?", a: "SEO is a long-term investment. Most businesses start seeing meaningful organic traffic improvements within 3–6 months, with compounding results over 12+ months." },
    { q: "What budget do I need for Google or Meta ads?", a: "We typically recommend a minimum ad spend of ₹15,000–₹30,000/month to gather meaningful data and optimise campaigns. We'll recommend a budget based on your goals and industry." },
    { q: "Do you create the content as well?", a: "Yes. Our in-house content team handles copywriting, graphic design, video editing, and social media posts — end to end." },
    { q: "How do you measure success?", a: "We track KPIs aligned to your goals: organic rankings, traffic, leads, cost-per-lead, conversion rate, and ROAS for paid campaigns. Monthly reports are shared with full transparency." },
    { q: "Can you manage our social media accounts?", a: "Yes. We offer full social media management including content calendar creation, post scheduling, community management, and monthly analytics reports." },
    { q: "What industries do you specialise in?", a: "We've run campaigns for e-commerce, SaaS, real estate, healthcare, restaurants, education, and professional services businesses across India." },
  ],
};

export default function DigitalMarketingPage() {
  return <ServiceDetailPage data={data} />;
}
