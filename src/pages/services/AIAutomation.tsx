import ServiceDetailPage from "@/components/blezex/ServiceDetailPage";
import type { ServicePageData } from "@/components/blezex/ServicePageShared";

const data: ServicePageData = {
  slug: "ai-automation",
  title: "AI & Automation",
  tagline: "Work Smarter. Scale Faster. Automate Everything.",
  description:
    "BlezeX builds intelligent AI systems, chatbots, agents, and business automation pipelines that reduce manual workload, improve customer experience, and unlock new revenue — powered by the latest LLMs and automation frameworks.",
  heroIcon: "🤖",
  offerings: [
    { title: "AI Chatbots", desc: "Intelligent chatbots for Web, WhatsApp, and Telegram that handle support, sales, and lead qualification 24/7." },
    { title: "AI Agents", desc: "Autonomous agents that can browse the web, process documents, execute tasks, and make decisions on your behalf." },
    { title: "Business Process Automation", desc: "End-to-end workflow automation connecting your apps, databases, and teams — zero manual hand-offs." },
    { title: "Customer Support Automation", desc: "AI-powered support systems that resolve 80% of queries instantly, escalating only complex cases to humans." },
    { title: "AI Content Generation Tools", desc: "Custom AI tools for generating marketing copy, product descriptions, reports, and social media content at scale." },
    { title: "RAG & Knowledge Base Systems", desc: "Retrieval-Augmented Generation systems that let your AI answer questions from your own documents and data." },
  ],
  benefits: [
    { title: "Dramatic Cost Reduction", desc: "Automate processes that currently require full-time staff — cut operational costs by 40–70%." },
    { title: "24/7 Customer Service", desc: "AI never sleeps. Deliver instant, accurate responses to customers at any hour without extra headcount." },
    { title: "Faster Decision Making", desc: "AI analyses data and surfaces insights in seconds — not days — enabling faster, smarter decisions." },
    { title: "Scalable Without Hiring", desc: "Handle 10x the volume without adding headcount. AI scales instantly as your business grows." },
    { title: "Consistent Quality", desc: "Eliminate human error and inconsistency — every automated output meets the same quality standard." },
    { title: "Competitive Edge", desc: "Early AI adoption is a significant moat. Companies that automate first outperform those that don't." },
  ],
  technologies: [
    "Python", "OpenAI GPT-4o", "Claude", "Gemini", "LangChain", "LlamaIndex",
    "RAG Pipelines", "Pinecone", "Weaviate", "n8n", "Make (Integromat)",
    "WhatsApp Business API", "Telegram Bot API", "FastAPI", "Supabase", "Redis",
  ],
  whyBlezex: [
    "Registered AI technology company with hands-on LLM and automation project experience.",
    "We build production-grade systems — not just demos or prototypes.",
    "Privacy-focused: on-premise and private cloud deployment options available.",
    "Deep expertise in RAG, fine-tuning, prompt engineering, and agent frameworks.",
    "Custom AI solutions that integrate seamlessly with your existing tech stack.",
    "ROI-first approach — every automation we build is measured against business outcomes.",
    "Training and onboarding included so your team can use and maintain AI systems confidently.",
    "Ongoing model updates and system improvements as AI technology evolves.",
  ],
  faqs: [
    { q: "What kind of businesses can benefit from AI automation?", a: "Almost every business can benefit — e-commerce (product Q&A, order tracking), services (appointment booking, support), manufacturing (process automation), and more." },
    { q: "Is my data safe when using AI?", a: "Yes. We can deploy AI systems using private cloud infrastructure or on-premise, ensuring your data never leaves your control. We do not use your data to train public models." },
    { q: "What is RAG and why does it matter?", a: "RAG (Retrieval-Augmented Generation) lets your AI answer questions based on your own documents, products, and knowledge base — rather than just general knowledge. This makes AI far more useful for your specific business." },
    { q: "How long does it take to set up an AI chatbot?", a: "A standard AI chatbot for WhatsApp or web takes 1–3 weeks. Complex multi-agent systems with integrations can take 4–8 weeks." },
    { q: "Can AI replace my entire customer support team?", a: "AI can typically resolve 70–80% of repetitive queries automatically. We recommend a hybrid model where AI handles routine questions and humans focus on complex, high-value interactions." },
    { q: "What automations can you build without AI?", a: "Pure workflow automation (no AI) using tools like n8n or Make can handle tasks like CRM data entry, email notifications, invoice generation, report scheduling, and API syncing." },
  ],
};

export default function AIAutomationPage() {
  return <ServiceDetailPage data={data} />;
}
