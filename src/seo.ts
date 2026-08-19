export const SITE_URL = "https://blezex.com";
export const LOGO_URL = `${SITE_URL}/logo.png`;

export const blezexContact = {
  phone: "+919059634555",
  email: "blezex.vibe@gmail.com",
  address: {
    "@type": "PostalAddress",
    addressLocality: "Hyderabad",
    addressRegion: "Telangana",
    addressCountry: "IN",
  },
} as const;

export const servicePages = [
  {
    slug: "ai-automation",
    name: "AI Automation",
    description:
      "AI automation, chatbot, AI agent, and workflow automation services from BlezeX for businesses that want to reduce manual work and scale faster.",
  },
  {
    slug: "web-development",
    name: "Web Development",
    description:
      "High-performance website and web application development services from BlezeX for businesses, startups, and growing teams.",
  },
  {
    slug: "mobile-app-development",
    name: "Mobile App Development",
    description:
      "Android, iOS, and cross-platform mobile app development services from BlezeX with modern UI, secure APIs, and app store support.",
  },
  {
    slug: "custom-software-saas",
    name: "Custom Software & SaaS",
    description:
      "Custom software, CRM, ERP, and SaaS product development services from BlezeX for scalable business systems.",
  },
  {
    slug: "digital-marketing",
    name: "Digital Marketing",
    description:
      "SEO, paid advertising, social media, content, and growth marketing services from BlezeX for measurable digital growth.",
  },
  {
    slug: "graphic-designing-branding",
    name: "Graphic Designing & Branding",
    description:
      "Graphic design, UI/UX, logo design, brand identity, and creative asset services from BlezeX for memorable business branding.",
  },
  {
    slug: "corporate-startup-services",
    name: "Corporate & Startup Services",
    description:
      "Startup registration, company incorporation, compliance, and government licensing services from BlezeX for Indian businesses.",
  },
  {
    slug: "support-maintenance",
    name: "Support & Maintenance",
    description:
      "Website, app, performance, security, uptime, backup, and technical maintenance services from BlezeX.",
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
    title: "BlezeX | AI Automation & Technology Solutions",
    description:
      "BlezeX helps businesses grow with AI automation, web development, custom software, SaaS platforms and digital marketing solutions. Based in Hyderabad, Telangana, India.",
    canonical: `${SITE_URL}/`,
  },
  contact: {
    title: "Contact BlezeX | AI Automation & Software Company in Hyderabad",
    description:
      "Contact BlezeX in Hyderabad, Telangana for AI automation, web development, mobile app development, custom software, SaaS, digital marketing, and support services.",
    canonical: `${SITE_URL}/contact`,
  },
} as const;

export const globalSchemas = [
  {
    "@context": "https://schema.org",
    "@type": "Organization",
    "@id": `${SITE_URL}/#organization`,
    name: "BlezeX",
    url: SITE_URL,
    logo: LOGO_URL,
    description:
      "BlezeX is a software company providing AI automation, web development, mobile app development, custom software, SaaS, digital marketing, branding, and support services.",
    email: blezexContact.email,
    telephone: blezexContact.phone,
    address: blezexContact.address,
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
    url: SITE_URL,
    image: LOGO_URL,
    logo: LOGO_URL,
    description:
      "BlezeX is a Hyderabad-based software company serving startups, businesses, and enterprises with AI, web, mobile, SaaS, and digital growth solutions.",
    address: blezexContact.address,
    areaServed: ["India", "Worldwide"],
    priceRange: "INR",
    telephone: blezexContact.phone,
    email: blezexContact.email,
  },
] as const;

export function buildServiceSchema(service: {
  slug: string;
  name: string;
  description: string;
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
    },
    areaServed: ["India", "Worldwide"],
    availableChannel: {
      "@type": "ServiceChannel",
      serviceUrl,
      servicePhone: blezexContact.phone,
    },
  };
}

export function findServiceSeoPage(slug: string) {
  return servicePages.find((service) => service.slug === slug);
}
