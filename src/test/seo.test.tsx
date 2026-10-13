import { render, waitFor } from "@testing-library/react";
import { readFileSync } from "node:fs";
import { resolve } from "node:path";
import { afterEach, describe, expect, it } from "vitest";
import SEO from "@/components/SEO";
import { injectHead, prerenderRoutes } from "../../vite-plugins/prerenderHead";
import { useSEO } from "@/hooks/useSEO";
import {
  REQUIRED_SITEMAP_URLS,
  buildFaqSchema,
  buildServiceSchema,
  globalSchemas,
  homeFaqs,
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

  it("netlify.toml serves every real route with 200, ends with a 404 catch-all, never redirects to /", () => {
    const toml = readFileSync(resolve(projectRoot, "netlify.toml"), "utf8");
    const rules = toml.split("[[redirects]]").slice(1).map((block) => ({
      from: block.match(/from = "([^"]+)"/)?.[1],
      to: block.match(/to = "([^"]+)"/)?.[1],
      status: Number(block.match(/status = (\d+)/)?.[1]),
    }));

    for (const url of REQUIRED_SITEMAP_URLS) {
      const path = new URL(url).pathname;
      if (path !== "/") expect(rules).toContainEqual({ from: path, to: `/_prerender${path}.html`, status: 200 });
    }
    expect(rules.at(-1)).toEqual({ from: "/*", to: "/_prerender/404.html", status: 404 });
    expect(rules.filter((r) => r.to === "/" )).toEqual([]);
    for (const r of rules.filter((r) => r.status === 301)) {
      expect(REQUIRED_SITEMAP_URLS).toContain(`https://blezex.com${r.to}`);
    }
  });

  it("allows all crawlers and declares the production sitemap", () => {
    const robots = readFileSync(resolve(projectRoot, "public/robots.txt"), "utf8");

    expect(robots).toBe("User-agent: *\nAllow: /\n\nSitemap: https://blezex.com/sitemap.xml\n");
  });
});

describe("prerendered head", () => {
  const template = readFileSync(resolve(projectRoot, "index.html"), "utf8");
  const read = (html: string, pattern: RegExp) => html.match(pattern)?.[1];

  it("gives every real route its own title, canonical and og:url in the initial HTML", () => {
    for (const url of REQUIRED_SITEMAP_URLS) {
      const path = new URL(url).pathname;
      if (path === "/") continue;
      const html = injectHead(template, prerenderRoutes[path]);

      expect(read(html, /<link rel="canonical" href="([^"]*)"/)).toBe(url);
      expect(read(html, /<meta property="og:url" content="([^"]*)"/)).toBe(url);
      expect(read(html, /<title>([^<]*)<\/title>/)).not.toBe(read(template, /<title>([^<]*)<\/title>/));
      expect(read(html, /<title>([^<]*)<\/title>/)).not.toMatch(/Services Services/);
    }
  });

  it("marks the 404 shell noindex and fails loudly if index.html loses a tag", () => {
    expect(read(injectHead(template, prerenderRoutes["/404"]), /<meta name="robots" content="([^"]*)"/)).toBe("noindex, nofollow");
    expect(() => injectHead("<html></html>", prerenderRoutes["/contact"])).toThrow(/prerenderHead/);
  });
});

describe("structured data", () => {
  it("defines one Organization and one LocalBusiness entity, and no JSON-LD is hard-coded in index.html", () => {
    const organization = globalSchemas.find((schema) => schema["@type"] === "Organization");
    const localBusiness = globalSchemas.find((schema) => schema["@type"] === "LocalBusiness");

    expect(organization).toMatchObject({
      "@context": "https://schema.org",
      "@id": "https://blezex.com/#organization",
      name: "BlezeX Technologies",
      alternateName: "BlezeX",
      url: "https://blezex.com",
      logo: "https://blezex.com/logo.png",
    });
    expect(localBusiness).toMatchObject({
      "@id": "https://blezex.com/#localbusiness",
      address: { "@type": "PostalAddress", addressLocality: "Hyderabad", addressRegion: "Telangana", addressCountry: "IN" },
    });
    expect(new Set(globalSchemas.map((schema) => schema["@id"])).size).toBe(globalSchemas.length);

    const html = readFileSync(resolve(projectRoot, "index.html"), "utf8");
    expect(html).not.toContain("application/ld+json");
  });

  it("builds FAQPage JSON-LD from the same questions the page renders", () => {
    const schema = buildFaqSchema(homeFaqs);

    expect(schema["@type"]).toBe("FAQPage");
    expect(schema.mainEntity.map((q) => q.name)).toEqual(homeFaqs.map((f) => f.q));
  });

  it("builds a Service schema for each required BlezeX service page", () => {
    expect(servicePages.map((service) => service.slug)).toEqual([
      "ai-automation",
      "web-development",
      "custom-software-saas",
      "digital-marketing",
      "graphic-designing-branding",
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
          name: "BlezeX Technologies",
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
    expect(document.querySelector('meta[property="og:site_name"]')).toHaveAttribute("content", "BlezeX Technologies");
    expect(document.querySelector('meta[name="twitter:card"]')).toHaveAttribute(
      "content",
      "summary",
    );
    expect(document.querySelector('meta[name="robots"]')).toHaveAttribute("content", "index, follow, max-image-preview:large");

    const schemaTypes = Array.from(
      document.querySelectorAll<HTMLScriptElement>('script[type="application/ld+json"][data-seo-hook="true"]'),
    ).map((script) => JSON.parse(script.textContent ?? "{}")["@type"]);

    expect(schemaTypes).toEqual(["Organization", "LocalBusiness", "ContactPage"]);
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
