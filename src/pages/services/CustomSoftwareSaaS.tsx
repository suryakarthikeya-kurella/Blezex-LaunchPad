import ServiceDetailPage from "@/components/blezex/ServiceDetailPage";
import type { ServicePageData } from "@/components/blezex/ServicePageShared";

const data: ServicePageData = {
  slug: "custom-software-saas",
  title: "Custom Software & SaaS",
  tagline: "Software Built Around Your Business, Not the Other Way Around.",
  description:
    "BlezeX designs and develops bespoke software platforms, CRM/ERP systems, and full SaaS products that automate operations, centralise data, and scale with your business — with no vendor lock-in.",
  heroIcon: "⚙️",
  offerings: [
    { title: "CRM Systems", desc: "Custom customer relationship management tools that streamline your sales pipeline, follow-ups, and client communication." },
    { title: "ERP Systems", desc: "Integrated enterprise resource planning solutions unifying finance, inventory, HR, and operations in one platform." },
    { title: "SaaS Platforms", desc: "End-to-end SaaS product development — from MVP to fully scaled multi-tenant platforms with billing and user management." },
    { title: "Custom Business Software", desc: "Bespoke software tailored to your unique workflow — no compromises, no unnecessary features." },
    { title: "API Development & Integrations", desc: "Robust REST and GraphQL APIs and seamless integrations with third-party tools and enterprise systems." },
    { title: "Admin Dashboards & Portals", desc: "Powerful internal dashboards with real-time analytics, role-based access, and data management tools." },
  ],
  benefits: [
    { title: "Eliminate Manual Processes", desc: "Automate repetitive tasks and reduce human error, freeing your team for high-value work." },
    { title: "No Vendor Lock-In", desc: "Own your software completely — no recurring SaaS fees to third parties for core functionality." },
    { title: "Perfectly Fits Your Workflow", desc: "Built around how your team actually works, not a generic template." },
    { title: "Centralised Data", desc: "Single source of truth for all business data — no more spreadsheet chaos or siloed systems." },
    { title: "Scales with Growth", desc: "Architecture designed for scale — handle 10 or 10,000 users without expensive re-engineering." },
    { title: "Competitive Moat", desc: "Proprietary software becomes a durable business advantage your competitors cannot simply copy." },
  ],
  technologies: [
    "React", "Next.js", "Node.js", "Python", "Django", "FastAPI",
    "PostgreSQL", "MySQL", "MongoDB", "Redis", "Docker", "Kubernetes",
    "AWS", "Google Cloud", "Stripe", "Razorpay", "Twilio", "SendGrid",
  ],
  whyBlezex: [
    "Deep experience in CRM, ERP, and multi-tenant SaaS architecture patterns.",
    "Microservices and modular architecture for long-term maintainability.",
    "Security-first: OWASP standards, encrypted data storage, and secure APIs.",
    "Agile delivery with working software every 2 weeks — not months of nothing.",
    "Detailed technical documentation provided with every project.",
    "Dedicated QA testing phase before any deployment to production.",
    "Post-launch SLAs available — guaranteed uptime and response times.",
    "Full source code and infrastructure ownership transferred on delivery.",
  ],
  faqs: [
    { q: "How is custom software better than off-the-shelf solutions?", a: "Off-the-shelf tools force you to adapt your business to their limitations. Custom software is built around your exact workflow, integrates with your existing systems, and grows with you." },
    { q: "What is an MVP and should I start with one?", a: "An MVP (Minimum Viable Product) is a lean version of your product with core features. For most startups and new products, we recommend an MVP to validate market fit before full investment." },
    { q: "How do you handle data security and privacy?", a: "We follow OWASP security guidelines, implement end-to-end encryption, role-based access control, and can build GDPR/DPDPA compliance into the system architecture." },
    { q: "Can you integrate with our existing tools like Salesforce or Tally?", a: "Yes. We build integration layers with most enterprise tools via APIs, webhooks, or custom connectors — Salesforce, Tally, QuickBooks, Zoho, and more." },
    { q: "What happens if we need new features after launch?", a: "We design systems to be extensible from day one. New features can be added through our ongoing maintenance and development retainer packages." },
    { q: "Do you sign NDAs for sensitive projects?", a: "Absolutely. We sign NDAs before any project discussion and ensure all team members are bound by the same confidentiality agreements." },
  ],
};

export default function CustomSoftwareSaaSPage() {
  return <ServiceDetailPage data={data} />;
}
