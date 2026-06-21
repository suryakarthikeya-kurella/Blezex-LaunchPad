import ServiceDetailPage from "@/components/blezex/ServiceDetailPage";
import type { ServicePageData } from "@/components/blezex/ServicePageShared";

const data: ServicePageData = {
  slug: "corporate-startup-services",
  title: "Corporate & Startup Services",
  tagline: "Start Right. Stay Compliant. Scale with Confidence.",
  description:
    "BlezeX provides end-to-end business registration, legal compliance, and government licensing services for startups and corporations — so you can focus on building your business while we handle the paperwork.",
  heroIcon: "🏢",
  offerings: [
    { title: "Private Limited Company Registration", desc: "Complete Pvt Ltd company incorporation including MOA, AOA, DSC, DIN, and Certificate of Incorporation." },
    { title: "LLP Registration", desc: "Limited Liability Partnership registration with full documentation and MCA compliance." },
    { title: "Partnership Firm Registration", desc: "Partnership deed drafting and registration for traditional partnership business structures." },
    { title: "PAN / TAN / DSC Registration", desc: "PAN, TAN, and Digital Signature Certificate registration for businesses and directors." },
    { title: "MSME / Udyam Registration", desc: "Udyam registration to avail government schemes, subsidies, and priority lending benefits." },
    { title: "Startup India Registration", desc: "DPIIT Startup India recognition that unlocks tax benefits, funding access, and government support." },
    { title: "Shop & Establishment Registration", desc: "State-level shop and establishment licence for retail, office, and service businesses." },
    { title: "Government License Applications", desc: "FSSAI, GST, Import Export Code (IEC), Trade Licence, and other statutory licence applications." },
  ],
  benefits: [
    { title: "Legal Protection", desc: "Proper registration protects founders with limited liability, separating personal assets from business risk." },
    { title: "Government Benefits", desc: "Registered businesses unlock tax exemptions, grants, subsidies, and priority lending from government schemes." },
    { title: "Investor Readiness", desc: "A properly structured company is ready to receive institutional investment, venture capital, and bank funding." },
    { title: "Brand Credibility", desc: "Customers, partners, and vendors trust registered businesses more — essential for B2B and enterprise sales." },
    { title: "Tax Advantages", desc: "Startups with DPIIT recognition can claim three-year income tax exemptions and other statutory benefits." },
    { title: "Hassle-Free Compliance", desc: "We handle all documentation, government portals, and follow-ups so you don't get stuck in bureaucracy." },
  ],
  technologies: [
    "MCA Portal", "DPIIT Startup India Portal", "Udyam Registration Portal",
    "Income Tax Portal", "GSTN Portal", "FSSAI Portal", "DGFT Portal",
    "DigiLocker", "E-Mudhra DSC", "eMSME Portal",
  ],
  whyBlezex: [
    "BlezeX is itself a Startup India registered and MSME/Udyam registered company — we practice what we preach.",
    "End-to-end handling: document collection, form filing, follow-ups, and certificate delivery.",
    "Fast turnaround: Pvt Ltd registration completed in 7–15 working days.",
    "Transparent fixed pricing — no hidden charges or surprise government fee surprises.",
    "Expert guidance on choosing the right business structure for your goals.",
    "Post-registration compliance calendar provided — annual filings, GST returns, and ROC compliance.",
    "Confidential handling of all business and personal documents.",
    "Pan-India service — we serve founders across all Indian states.",
  ],
  faqs: [
    { q: "What is the difference between a Pvt Ltd company and an LLP?", a: "A Private Limited Company is better for startups seeking investment and scaling. An LLP offers simpler compliance and is ideal for professional services firms and small businesses." },
    { q: "How long does company registration take?", a: "Private Limited company registration typically takes 7–15 working days, subject to MCA processing times. LLP and other registrations may take slightly less time." },
    { q: "What documents are required for Pvt Ltd registration?", a: "PAN cards and Aadhaar of all directors, address proof, registered office address proof, and passport-size photographs. We'll provide a complete checklist after onboarding." },
    { q: "Is GST registration mandatory?", a: "GST registration is mandatory if your annual turnover exceeds ₹20 lakhs (₹10 lakhs for NE states) or if you supply goods/services inter-state. We can advise on your specific situation." },
    { q: "What benefits does Startup India recognition provide?", a: "DPIIT-recognised startups enjoy 3-year income tax exemption, exemption from capital gains tax, faster IP registration, and access to government funding schemes." },
    { q: "Can you help with annual compliance after registration?", a: "Yes. We offer ongoing compliance packages covering annual ROC filings, income tax returns, GST returns, and statutory audit coordination." },
  ],
};

export default function CorporateStartupServicesPage() {
  return <ServiceDetailPage data={data} />;
}
