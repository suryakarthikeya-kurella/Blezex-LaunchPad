import { useEffect } from "react";
import { globalSchemas } from "@/seo";

interface SEOProps {
  title: string;
  description: string;
  canonical: string;
  ogTitle?: string;
  ogDescription?: string;
  ogImage?: string;
  ogType?: string;
  twitterTitle?: string;
  twitterDescription?: string;
  schema?: object | object[];
}

/**
 * useSEO — Dynamically sets page-level SEO metadata for each route.
 * Sets <title>, <meta description>, <link canonical>, Open Graph tags,
 * Twitter card tags, and injects JSON-LD schema scripts.
 *
 * Call this at the top of every page component.
 */
export function useSEO({
  title,
  description,
  canonical,
  ogTitle,
  ogDescription,
  ogImage = "https://blezex.com/logo.png",
  ogType = "website",
  twitterTitle,
  twitterDescription,
  schema,
}: SEOProps) {
  useEffect(() => {
    // ── Title ────────────────────────────────────────────────────
    document.title = title;

    // ── Helper: set or create a <meta> tag ───────────────────────
    const setMeta = (selector: string, value: string, attr = "content") => {
      let el = document.querySelector<HTMLMetaElement>(selector);
      if (!el) {
        el = document.createElement("meta");
        // Extract attribute pair from selector, e.g. name="description"
        const match = selector.match(/\[(\w+(?::\w+)?)="([^"]+)"\]/);
        if (match) el.setAttribute(match[1], match[2]);
        document.head.appendChild(el);
      }
      el.setAttribute(attr, value);
    };

    // ── Helper: set or create a <link> tag ──────────────────────
    const setLink = (rel: string, href: string) => {
      let el = document.querySelector<HTMLLinkElement>(`link[rel="${rel}"]`);
      if (!el) {
        el = document.createElement("link");
        el.setAttribute("rel", rel);
        document.head.appendChild(el);
      }
      el.setAttribute("href", href);
    };

    // ── Meta description ─────────────────────────────────────────
    setMeta('meta[name="description"]', description);
    setMeta('meta[name="robots"]', "index, follow");

    // ── Canonical ────────────────────────────────────────────────
    setLink("canonical", canonical);

    // ── Open Graph ───────────────────────────────────────────────
    setMeta('meta[property="og:title"]', ogTitle ?? title);
    setMeta('meta[property="og:description"]', ogDescription ?? description);
    setMeta('meta[property="og:url"]', canonical);
    setMeta('meta[property="og:image"]', ogImage);
    setMeta('meta[property="og:type"]', ogType);
    setMeta('meta[property="og:site_name"]', "BlezeX");
    setMeta('meta[property="og:locale"]', "en_IN");

    // ── Twitter Card ─────────────────────────────────────────────
    setMeta('meta[name="twitter:card"]', "summary_large_image");
    setMeta('meta[name="twitter:site"]', "@x_blezex");
    setMeta('meta[name="twitter:creator"]', "@x_blezex");
    setMeta('meta[name="twitter:title"]', twitterTitle ?? ogTitle ?? title);
    setMeta('meta[name="twitter:description"]', twitterDescription ?? ogDescription ?? description);
    setMeta('meta[name="twitter:image"]', ogImage);
    setMeta('meta[name="twitter:url"]', canonical);

    // ── JSON-LD Schema ───────────────────────────────────────────
    // Remove any previous schema injected by this hook
    document
      .querySelectorAll('script[data-seo-hook="true"]')
      .forEach((el) => el.remove());

    const pageSchemas = schema ? (Array.isArray(schema) ? schema : [schema]) : [];
    const schemas = [...globalSchemas, ...pageSchemas];

    schemas.forEach((s) => {
      const script = document.createElement("script");
      script.type = "application/ld+json";
      script.setAttribute("data-seo-hook", "true");
      script.textContent = JSON.stringify(s);
      document.head.appendChild(script);
    });

    // ── Cleanup: restore home defaults on unmount ────────────────
    return () => {
      document.querySelectorAll('script[data-seo-hook="true"]').forEach((el) => el.remove());
    };
  }, [title, description, canonical, ogTitle, ogDescription, ogImage, ogType, twitterTitle, twitterDescription, schema]);
}
