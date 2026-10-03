export const SITE_URL = "https://blezex.com";
export const LOGO_URL = `${SITE_URL}/logo.png`;
export const OG_IMAGE = `${SITE_URL}/logo.png`;
export const SITE_NAME = "BlezeX";
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
      "BlezeX Technologies — Premium AI Automation, Web Development, Custom Software & Digital Solutions company in Hyderabad, Telangana. 50+ businesses served across India. Get a free consultation.",
    canonical: `${SITE_URL}/`,
    ogTitle: "BlezeX Technologies | AI Automation & Web Development Company Hyderabad",
    ogDescription:
      "Premium AI Automation, Web Development, Custom Software & Digital Solutions in Hyderabad, India. 50+ businesses. Free consultation.",
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

/* ── Shared Global Schemas (injected on every page by useSEO) ── */
export const globalSchemas = [
  {
    "@context": "https://schema.org",
    "@type": "Organization",
    "@id": `${SITE_URL}/#organization`,
    name: "BlezeX",
    alternateName: "BlezeX Technologies",
    url: SITE_URL,
    logo: LOGO_URL,
    image: LOGO_URL,
    description:
      "BlezeX Technologies is a premium AI Automation, Web Development, and Custom Software company based in Hyderabad, Telangana, India, serving startups and businesses across India.",
    email: blezexContact.email,
    telephone: blezexContact.phone,
    address: blezexContact.address,
    areaServed: [
      { "@type": "City", name: "Hyderabad" },
      { "@type": "City", name: "Visakhapatnam" },
      { "@type": "State", name: "Telangana" },
      { "@type": "State", name: "Andhra Pradesh" },
      { "@type": "Country", name: "India" },
    ],
    sameAs: [
      "https://www.linkedin.com/company/blezex/",
      "https://x.com/x_blezex",
      "https://www.instagram.com/blezex_ai/",
      "https://www.facebook.com/profile.php?id=61586205163889",
      "https://www.youtube.com/@BlezeX_Ai",
    ],
  },
  {
    "@context": "https://schema.org",
    "@type": "SoftwareCompany",
    "@id": `${SITE_URL}/#softwarecompany`,
    name: "BlezeX",
    alternateName: "BlezeX Technologies",
    url: SITE_URL,
    image: LOGO_URL,
    logo: LOGO_URL,
    description:
      "BlezeX Technologies is a Hyderabad-based software company serving startups, businesses, and enterprises with AI, web, SaaS, digital growth, and branding solutions.",
    address: blezexContact.address,
    areaServed: ["India", "Worldwide"],
    priceRange: "INR",
    telephone: blezexContact.phone,
    email: blezexContact.email,
  },
] as const;

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
      name: "BlezeX",
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

/* ── Helper ─────────────────────────────────────────────────── */
export function findServiceSeoPage(slug: string) {
  return servicePages.find((service) => service.slug === slug);
}
