export const SITE_URL = "https://blezex.com";
export const LOGO_URL = `${SITE_URL}/logo.png`;
export const OG_IMAGE = `${SITE_URL}/logo.png`;
export const SITE_NAME = "BlezeX";
export const ORG_NAME = "BlezeX Technologies";
export const TWITTER_HANDLE = "@x_blezex";

export const blezexContact = {
  phone: "+919059634555",
  phoneDisplay: "+91 9059634555",
  email: "connect.blezex@gmail.com",
  whatsapp: "https://wa.me/919059634555",
  address: {
    "@type": "PostalAddress",
    streetAddress: "Hyderabad",
    addressLocality: "Hyderabad",
    addressRegion: "Telangana",
    addressCountry: "IN",
    postalCode: "500001",
  },
  addressVizag: {
    "@type": "PostalAddress",
    addressLocality: "Visakhapatnam",
    addressRegion: "Andhra Pradesh",
    addressCountry: "IN",
  },
} as const;

export const servicePages = [
  {
    slug: "ai-automation",
    name: "AI & Automation Services",
    shortName: "AI Automation",
    description:
      "AI automation, chatbot development, AI agents, and workflow automation services in Hyderabad by BlezeX Technologies. Reduce manual work and scale your business with intelligent systems.",
    keywords: "AI automation company Hyderabad, AI chatbot development India, business automation services, AI agents Hyderabad, workflow automation Telangana",
  },
  {
    slug: "web-development",
    name: "Web Development Services",
    shortName: "Web Development",
    description:
      "Professional web development company in Hyderabad. BlezeX builds high-performance websites, web applications, and e-commerce platforms for startups and businesses across India.",
    keywords: "web development company Hyderabad, website development services India, custom web application development, e-commerce website Hyderabad, React web development India",
  },
  {
    slug: "custom-software-saas",
    name: "Custom Software & SaaS Development",
    shortName: "Custom Software & SaaS",
    description:
      "Custom software development company in Hyderabad. BlezeX builds CRM, ERP, SaaS platforms, and scalable business software for startups and growing enterprises.",
    keywords: "custom software development Hyderabad, SaaS development India, CRM development Hyderabad, ERP software company India, business software development Telangana",
  },
  {
    slug: "digital-marketing",
    name: "Digital Marketing Services",
    shortName: "Digital Marketing",
    description:
      "Digital marketing company in Hyderabad. BlezeX provides SEO, Google Ads, social media marketing, content marketing, and digital growth strategies for businesses across India.",
    keywords: "digital marketing company Hyderabad, SEO services Hyderabad, Google Ads management India, social media marketing Telangana, content marketing services India",
  },
  {
    slug: "graphic-designing-branding",
    name: "Graphic Design & Branding Services",
    shortName: "Graphic Design & Branding",
    description:
      "Graphic design and branding agency in Hyderabad. BlezeX creates logos, brand identities, UI/UX design, and creative assets for businesses and startups across India.",
    keywords: "graphic design company Hyderabad, logo design services India, brand identity design Hyderabad, UI UX design company Telangana, branding agency India",
  },
] as const;

export type ServiceSeoPage = (typeof servicePages)[number];

export const REQUIRED_SITEMAP_URLS = [
  `${SITE_URL}/`,
  `${SITE_URL}/contact`,
  ...servicePages.map((service) => `${SITE_URL}/services/${service.slug}`),
];

export const pageMetadata = {
  home: {
    title: "BlezeX Technologies | AI Automation & Web Development Company in Hyderabad",
    description:
      "BlezeX Technologies — Premium AI Automation, Web Development, Custom Software & Digital Solutions company in Hyderabad, Telangana. 80+ businesses served across India. Get a free consultation.",
    canonical: `${SITE_URL}/`,
    ogTitle: "BlezeX Technologies | AI Automation & Web Development Company Hyderabad",
    ogDescription:
      "Premium AI Automation, Web Development, Custom Software & Digital Solutions in Hyderabad, India. 80+ businesses. Free consultation.",
    keywords:
      "AI automation company Hyderabad, web development company Hyderabad, custom software development India, BlezeX Technologies, digital solutions Telangana",
  },
  contact: {
    title: "Contact BlezeX Technologies | AI & Web Development Company Hyderabad",
    description:
      "Contact BlezeX Technologies in Hyderabad for AI automation, web development, custom software, SaaS, digital marketing, and branding services. Free consultation available — call +91 9059634555.",
    canonical: `${SITE_URL}/contact`,
    ogTitle: "Contact BlezeX Technologies | Free Consultation — Hyderabad",
    ogDescription:
      "Get in touch with BlezeX Technologies. AI Automation, Web Development, Custom Software & Digital Solutions. Free consultation. Serving Hyderabad, Visakhapatnam, and all of India.",
    keywords:
      "contact BlezeX Hyderabad, AI company contact Hyderabad, web development consultation India, free digital consultation Telangana",
  },
} as const;

/* ── Shared Global Schemas (injected on every page by useSEO; index.html carries no JSON-LD) ── */
const sameAs = [
  "https://www.linkedin.com/company/blezex/",
  "https://x.com/x_blezex",
  "https://www.instagram.com/blezex_ai/",
  "https://www.facebook.com/profile.php?id=61586205163889",
  "https://www.youtube.com/@BlezeX_Ai",
];

const openingHours = {
  "@type": "OpeningHoursSpecification",
  dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
  opens: "09:00",
  closes: "18:00",
};

export const globalSchemas = [
  {
    "@context": "https://schema.org",
    "@type": "Organization",
    "@id": `${SITE_URL}/#organization`,
    name: ORG_NAME,
    alternateName: SITE_NAME,
    url: SITE_URL,
    logo: LOGO_URL,
    image: LOGO_URL,
    description:
      "BlezeX Technologies is a Hyderabad-based AI automation, web development, custom software and digital growth company serving startups and businesses across India.",
    foundingDate: "2024",
    email: blezexContact.email,
    telephone: blezexContact.phone,
    address: blezexContact.address,
    areaServed: [
      { "@type": "City", name: "Hyderabad" },
      { "@type": "City", name: "Visakhapatnam" },
      { "@type": "State", name: "Telangana" },
      { "@type": "State", name: "Andhra Pradesh" },
      { "@type": "Country", name: "India" },
      "Worldwide",
    ],
    contactPoint: {
      "@type": "ContactPoint",
      telephone: blezexContact.phone,
      email: blezexContact.email,
      contactType: "customer service",
      availableLanguage: ["English", "Telugu", "Hindi"],
      areaServed: "IN",
      hoursAvailable: openingHours,
    },
    sameAs,
  },
  {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "@id": `${SITE_URL}/#localbusiness`,
    name: ORG_NAME,
    url: SITE_URL,
    image: LOGO_URL,
    telephone: blezexContact.phone,
    email: blezexContact.email,
    description:
      "BlezeX Technologies offers AI Automation, Web Development, Custom Software, and Digital Solutions for businesses in Hyderabad, Visakhapatnam, and across India.",
    priceRange: "₹₹",
    currenciesAccepted: "INR",
    paymentAccepted: "Cash, Bank Transfer, UPI, Online",
    address: blezexContact.address,
    // Coordinates of the BlezeX Google Maps listing (same place as HYDERABAD_MAPS_URL in config.ts).
    geo: { "@type": "GeoCoordinates", latitude: 17.4801969, longitude: 78.4171028 },
    hasMap: "https://www.google.com/maps?q=17.4801969,78.4171028",
    openingHoursSpecification: [openingHours],
    parentOrganization: { "@id": `${SITE_URL}/#organization` },
    sameAs,
  },
] as const;

/* ── FAQ (single source: rendered by FAQ.tsx and emitted as FAQPage JSON-LD) ── */
export const homeFaqs = [
  { q: "What services does BlezeX provide?", a: "BlezeX provides web development, custom software & SaaS, AI & automation, digital marketing & growth, and graphic designing & branding services." },
  { q: "How long does a website project take?", a: "Depending on the scope, a standard business website takes 2-4 weeks. Custom web applications and complex projects may take 4-12 weeks." },
  { q: "Do you provide ongoing support?", a: "Yes! Every package includes a dedicated post-launch support period, and our team is available 24/7 to keep your digital products running smoothly." },
  { q: "Can you build custom software?", a: "Absolutely. We specialize in building custom CRM, ERP, SaaS platforms, and business-specific software tailored to your workflows." },
  { q: "Do you work with startups?", a: "Yes, we love working with startups. We have special packages designed to help startups build and scale their digital presence affordably." },
  { q: "What technologies do you use?", a: "We use modern technologies including React, Node.js, Python, AI/ML frameworks, cloud services, and more depending on project needs." },
];

/** Answers that were in the original JSON-LD but are not (yet) shown in the FAQ section. */
export const homeSchemaOnlyFaqs = [
  { q: "Where is BlezeX Technologies located?", a: "BlezeX Technologies is located in Hyderabad, Telangana, India, and also serves clients in Visakhapatnam, Andhra Pradesh, and across India." },
  { q: "Does BlezeX build AI automation systems?", a: "Yes. BlezeX builds AI agents, WhatsApp chatbots, workflow automation, and intelligent business systems using OpenAI, Claude, Gemini, LangChain, and n8n." },
  { q: "How can I contact BlezeX Technologies?", a: `You can contact BlezeX at ${blezexContact.phoneDisplay}, email ${blezexContact.email}, or via WhatsApp at ${blezexContact.whatsapp}. Free consultation is available.` },
];

export function buildFaqSchema(faqs: readonly { q: string; a: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map(({ q, a }) => ({
      "@type": "Question",
      name: q,
      acceptedAnswer: { "@type": "Answer", text: a },
    })),
  };
}

/* ── Service Schema Builder ─────────────────────────────────── */
export function buildServiceSchema(service: {
  slug: string;
  name: string;
  description: string;
  keywords?: string;
}) {
  const serviceUrl = `${SITE_URL}/services/${service.slug}`;

  return {
    "@context": "https://schema.org",
    "@type": "Service",
    "@id": `${serviceUrl}#service`,
    name: service.name,
    description: service.description,
    url: serviceUrl,
    serviceType: service.name,
    provider: {
      "@type": "Organization",
      "@id": `${SITE_URL}/#organization`,
      name: ORG_NAME,
      url: SITE_URL,
      logo: LOGO_URL,
      telephone: blezexContact.phone,
      email: blezexContact.email,
    },
    areaServed: [
      { "@type": "City", name: "Hyderabad" },
      { "@type": "City", name: "Visakhapatnam" },
      { "@type": "State", name: "Telangana" },
      { "@type": "State", name: "Andhra Pradesh" },
      { "@type": "Country", name: "India" },
    ],
    availableChannel: {
      "@type": "ServiceChannel",
      serviceUrl,
      servicePhone: blezexContact.phone,
    },
    offers: {
      "@type": "Offer",
      priceCurrency: "INR",
      availability: "https://schema.org/InStock",
      url: serviceUrl,
    },
  };
}

export function serviceMetadata(service: { slug: string; name: string; description: string }) {
  const title = `${service.name} | BlezeX`;
  return {
    title,
    description: service.description,
    canonical: `${SITE_URL}/services/${service.slug}`,
    ogTitle: title,
    ogDescription: service.description,
  };
}

/* ── Helper ─────────────────────────────────────────────────── */
export function findServiceSeoPage(slug: string) {
  return servicePages.find((service) => service.slug === slug);
}
