import ServiceDetailPage from "@/components/blezex/ServiceDetailPage";
import type { ServicePageData } from "@/components/blezex/ServicePageShared";

const data: ServicePageData = {
  slug: "support-maintenance",
  title: "Support & Maintenance",
  tagline: "Always On. Always Optimised. Always Secure.",
  description:
    "BlezeX provides proactive, reliable support and maintenance services for websites, web apps, and mobile applications — keeping your digital products fast, secure, and bug-free so you can focus on your business.",
  heroIcon: "🛠️",
  offerings: [
    { title: "Website Maintenance", desc: "Regular content updates, plugin/dependency updates, security patches, and performance monitoring for your website." },
    { title: "App Maintenance", desc: "OS compatibility updates, bug fixes, API maintenance, and feature additions for mobile applications." },
    { title: "Performance Optimisation", desc: "Speed audits, Core Web Vitals improvements, caching, CDN setup, and database query optimisation." },
    { title: "Security Monitoring", desc: "Vulnerability scanning, malware removal, SSL management, firewall configuration, and incident response." },
    { title: "Uptime Monitoring", desc: "24/7 automated uptime monitoring with instant alerts and rapid response to any downtime incidents." },
    { title: "Backup & Disaster Recovery", desc: "Automated daily backups with tested recovery procedures to ensure zero data loss in any scenario." },
  ],
  benefits: [
    { title: "Zero Downtime Business", desc: "Proactive maintenance prevents issues before they cause downtime that costs you customers and revenue." },
    { title: "Always Secure", desc: "Regular security updates and monitoring protect your business and customer data from cyber threats." },
    { title: "Peak Performance", desc: "Ongoing optimisation ensures your site or app stays fast as traffic grows and technology evolves." },
    { title: "Peace of Mind", desc: "Know that your digital infrastructure is in expert hands — focus on your business, not technical problems." },
    { title: "Cost Predictability", desc: "A fixed monthly maintenance contract gives you predictable costs without surprise emergency bills." },
    { title: "Extended Product Lifespan", desc: "Well-maintained products last longer and require less expensive full rebuilds over time." },
  ],
  technologies: [
    "UptimeRobot", "Datadog", "Sentry", "Cloudflare", "Nginx",
    "Let's Encrypt SSL", "AWS CloudWatch", "Google Lighthouse",
    "GitHub Actions", "Docker", "Vercel", "New Relic", "Grafana",
  ],
  whyBlezex: [
    "Dedicated support team with defined SLAs — not a helpdesk ticket black hole.",
    "Proactive maintenance: we identify and fix issues before they affect your users.",
    "Transparent monthly reports with uptime, performance scores, and work completed.",
    "Flexible plans — from basic website care to full enterprise application support.",
    "Emergency response available 24/7 for critical production issues.",
    "We maintain technology we build — no knowledge transfer gaps or excuses.",
    "Security-first: every maintenance cycle includes a security review.",
    "Scalable plans that grow with your infrastructure needs.",
  ],
  faqs: [
    { q: "What does a typical maintenance plan include?", a: "Our standard plans include uptime monitoring, monthly security scans, dependency updates, performance checks, content updates (up to a set number of hours), and a monthly report." },
    { q: "How quickly do you respond to critical issues?", a: "For clients on our maintenance plans, critical production issues are responded to within 1–4 hours depending on plan tier, with resolution targets within the same business day." },
    { q: "Do you maintain websites built by other agencies?", a: "Yes. We can take over maintenance for websites or apps built by other developers. We conduct a technical audit first to understand the existing setup." },
    { q: "What is the difference between support and maintenance?", a: "Maintenance is proactive — regular updates, monitoring, and optimisation. Support is reactive — fixing bugs, issues, and user-reported problems. Our plans cover both." },
    { q: "Can I cancel my maintenance plan anytime?", a: "Yes. Our maintenance plans are month-to-month with 30 days notice required for cancellation. No long-term lock-in." },
    { q: "Do you provide backups?", a: "Yes. All maintenance plans include automated daily backups stored securely off-site, with tested restoration procedures." },
  ],
};

export default function SupportMaintenancePage() {
  return <ServiceDetailPage data={data} />;
}
