import { render, waitFor } from "@testing-library/react";
import { readFileSync } from "node:fs";
import { resolve } from "node:path";
import { afterEach, describe, expect, it } from "vitest";
import SEO from "@/components/SEO";
import { useSEO } from "@/hooks/useSEO";
import {
  REQUIRED_SITEMAP_URLS,
  buildServiceSchema,
  globalSchemas,
  pageMetadata,
  servicePages,
} from "@/seo";

const projectRoot = resolve(".");

function sitemapLocations() {
  const xml = readFileSync(resolve(projectRoot, "public/sitemap.xml"), "utf8");
  const document = new DOMParser().parseFromString(xml, "application/xml");
  return Array.from(document.querySelectorAll("loc")).map((loc) => loc.textContent);
}

function SeoProbe() {
  useSEO({
    title: pageMetadata.contact.title,
    description: pageMetadata.contact.description,
    canonical: pageMetadata.contact.canonical,
    schema: {
      "@context": "https://schema.org",
      "@type": "ContactPage",
      name: "Contact BlezeX",
      url: pageMetadata.contact.canonical,
    },
  });

  return null;
}

function SeoComponentProbe() {
  return (
    <SEO
      title={pageMetadata.home.title}
      description={pageMetadata.home.description}
      canonical={pageMetadata.home.canonical}
    />
  );
}

afterEach(() => {
  document.head.innerHTML = "";
});

describe("crawl files", () => {
  it("lists every indexable canonical URL exactly once in the sitemap", () => {
    const urls = sitemapLocations();

    expect(urls).toEqual(REQUIRED_SITEMAP_URLS);
    expect(new Set(urls).size).toBe(urls.length);
    expect(urls).toContain("https://blezex.com/contact");
  });

  it("allows all crawlers and declares the production sitemap", () => {
    const robots = readFileSync(resolve(projectRoot, "public/robots.txt"), "utf8");

    expect(robots).toBe("User-agent: *\nAllow: /\n\nSitemap: https://blezex.com/sitemap.xml\n");
  });
});

describe("structured data", () => {
  it("defines global Organization and SoftwareCompany schema for BlezeX", () => {
    const organization = globalSchemas.find((schema) => schema["@type"] === "Organization");
    const softwareCompany = globalSchemas.find((schema) => schema["@type"] === "SoftwareCompany");

    expect(organization).toMatchObject({
      "@context": "https://schema.org",
      "@type": "Organization",
      name: "BlezeX",
      url: "https://blezex.com",
      logo: "https://blezex.com/logo.png",
    });

    expect(softwareCompany).toMatchObject({
      "@context": "https://schema.org",
      "@type": "SoftwareCompany",
      name: "BlezeX",
      url: "https://blezex.com",
      address: {
        "@type": "PostalAddress",
        addressLocality: "Hyderabad",
        addressRegion: "Telangana",
        addressCountry: "IN",
      },
      areaServed: ["India", "Worldwide"],
    });
  });

  it("builds a Service schema for each required BlezeX service page", () => {
    expect(servicePages.map((service) => service.slug)).toEqual([
      "ai-automation",
      "web-development",
      "mobile-app-development",
      "custom-software-saas",
      "digital-marketing",
      "graphic-designing-branding",
      "corporate-startup-services",
      "support-maintenance",
    ]);

    for (const service of servicePages) {
      expect(buildServiceSchema(service)).toMatchObject({
        "@context": "https://schema.org",
        "@type": "Service",
        name: service.name,
        serviceType: service.name,
        url: `https://blezex.com/services/${service.slug}`,
        provider: {
          "@type": "Organization",
          name: "BlezeX",
          url: "https://blezex.com",
        },
      });
    }
  });
});

describe("useSEO", () => {
  it("injects complete route metadata and combines global schema with page schema", async () => {
    render(<SeoProbe />);

    await waitFor(() => {
      expect(document.title).toBe(pageMetadata.contact.title);
    });

    expect(document.querySelector('meta[name="description"]')).toHaveAttribute(
      "content",
      pageMetadata.contact.description,
    );
    expect(document.querySelector('link[rel="canonical"]')).toHaveAttribute(
      "href",
      "https://blezex.com/contact",
    );
    expect(document.querySelector('meta[property="og:url"]')).toHaveAttribute(
      "content",
      "https://blezex.com/contact",
    );
    expect(document.querySelector('meta[property="og:site_name"]')).toHaveAttribute("content", "BlezeX");
    expect(document.querySelector('meta[name="twitter:card"]')).toHaveAttribute(
      "content",
      "summary_large_image",
    );
    expect(document.querySelector('meta[name="robots"]')).toHaveAttribute("content", "index, follow");

    const schemaTypes = Array.from(
      document.querySelectorAll<HTMLScriptElement>('script[type="application/ld+json"][data-seo-hook="true"]'),
    ).map((script) => JSON.parse(script.textContent ?? "{}")["@type"]);

    expect(schemaTypes).toEqual(["Organization", "SoftwareCompany", "ContactPage"]);
  });
});

describe("SEO component", () => {
  it("applies reusable metadata without rendering visible UI", async () => {
    const { container } = render(<SeoComponentProbe />);

    await waitFor(() => {
      expect(document.title).toBe(pageMetadata.home.title);
    });

    expect(container).toBeEmptyDOMElement();
    expect(document.querySelector('meta[name="description"]')).toHaveAttribute(
      "content",
      pageMetadata.home.description,
    );
    expect(document.querySelector('link[rel="canonical"]')).toHaveAttribute(
      "href",
      pageMetadata.home.canonical,
    );
  });
});
