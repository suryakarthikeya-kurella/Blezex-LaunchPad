import ServiceDetailPage from "@/components/blezex/ServiceDetailPage";
import type { ServicePageData } from "@/components/blezex/ServicePageShared";

const data: ServicePageData = {
  slug: "mobile-app-development",
  title: "Mobile App Development",
  tagline: "Native Power. Cross-Platform Reach.",
  description:
    "BlezeX delivers high-quality Android and iOS mobile applications — from consumer apps and business tools to complex enterprise platforms — built with modern frameworks and optimised for performance and user experience.",
  heroIcon: "📱",
  offerings: [
    { title: "Android Applications", desc: "Native Android apps built with Kotlin/Java or cross-platform, optimised for the Play Store." },
    { title: "iOS Applications", desc: "Polished iOS apps built for iPhone and iPad, meeting Apple's strict quality standards." },
    { title: "Cross-Platform Apps", desc: "Single codebase apps using React Native or Flutter that run beautifully on both Android and iOS." },
    { title: "Business Mobile Applications", desc: "Custom apps built around your internal business processes — inventory, CRM, field ops, and more." },
    { title: "App UI/UX Design", desc: "User research-driven interface design that maximises engagement and retention." },
    { title: "App Store Deployment", desc: "Complete Play Store and App Store submission, including ASO optimisation for discoverability." },
  ],
  benefits: [
    { title: "Direct Customer Channel", desc: "A mobile app puts your brand directly in your customers' pockets — always accessible." },
    { title: "Higher Engagement", desc: "Push notifications and personalised experiences drive 3x more engagement than mobile websites." },
    { title: "Offline Capability", desc: "Apps can function without internet, making your service always available to users." },
    { title: "Revenue Opportunities", desc: "In-app purchases, subscriptions, and premium features create new recurring revenue streams." },
    { title: "Brand Loyalty", desc: "App users show significantly higher brand loyalty and lifetime value than web-only users." },
    { title: "Competitive Advantage", desc: "A polished mobile app differentiates your business and signals seriousness to customers." },
  ],
  technologies: [
    "React Native", "Flutter", "Kotlin", "Swift", "Expo",
    "Firebase", "Supabase", "Node.js", "REST APIs", "GraphQL",
    "Google Play Store", "Apple App Store", "Figma", "Redux",
  ],
  whyBlezex: [
    "100+ mobile projects delivered across retail, healthcare, logistics, and fintech.",
    "Cross-platform expertise: one codebase, two platforms, faster go-to-market.",
    "Performance-optimised apps with smooth 60fps animations and fast load times.",
    "Full lifecycle support: ideation, design, development, testing, and store submission.",
    "Agile development with bi-weekly demos so you always know project status.",
    "Security-first: data encryption, secure API communication, and GDPR-compliant.",
    "Post-launch monitoring and bug fixes included for 30 days after release.",
    "NDA and IP ownership fully transferred to you on project completion.",
  ],
  faqs: [
    { q: "How long does mobile app development take?", a: "A standard business app takes 6–12 weeks. Feature-rich consumer apps or enterprise platforms can take 3–6 months. We provide detailed timelines after scoping." },
    { q: "Should I choose native or cross-platform development?", a: "For most businesses, cross-platform (React Native/Flutter) offers the best ROI — 80% cost savings with near-native performance. We'll recommend the right approach for your needs." },
    { q: "Do you handle App Store and Play Store submission?", a: "Yes. We manage the entire submission process including screenshots, descriptions, ratings metadata, and ASO to improve discoverability." },
    { q: "What if I need changes after launch?", a: "We offer maintenance packages for ongoing feature additions, OS updates, and performance improvements after your app is live." },
    { q: "Can you integrate third-party APIs like payment gateways?", a: "Absolutely. We integrate Razorpay, Stripe, PayPal, Firebase, Twilio, and any other APIs your app requires." },
    { q: "Will I own the source code?", a: "Yes. Full source code and IP ownership is transferred to you upon final payment." },
  ],
};

export default function MobileAppDevelopmentPage() {
  return <ServiceDetailPage data={data} />;
}
