import { mkdirSync, readFileSync, writeFileSync } from "node:fs";
import { dirname, join, resolve } from "node:path";
import type { Plugin } from "vite";
import { SITE_URL, pageMetadata, serviceMetadata, servicePages } from "../src/seo";

/**
 * The app is a client-rendered SPA, so every route would otherwise ship the homepage's
 * <title>/canonical/OG tags in its initial HTML (what Google's first pass and social
 * crawlers read). After the build this writes one copy of dist/index.html per route with
 * that route's head tags; netlify.toml rewrites each URL to its copy. Body stays client-rendered.
 */
export interface HeadMeta {
  title: string;
  description: string;
  canonical: string;
  ogTitle?: string;
  ogDescription?: string;
  robots?: string;
}

const esc = (value: string) => value.replace(/&/g, "&amp;").replace(/"/g, "&quot;").replace(/</g, "&lt;");

export function injectHead(html: string, meta: HeadMeta) {
  const { title, description, canonical, ogTitle = title, ogDescription = description, robots } = meta;
  const swap = (pattern: RegExp, replacement: string) => {
    if (!pattern.test(html)) throw new Error(`prerenderHead: index.html has no ${pattern}`);
    html = html.replace(pattern, () => replacement);
  };
  const content = (attr: string, value: string) => ({
    pattern: new RegExp(`<meta ${attr} content="[^"]*" ?/>`),
    tag: `<meta ${attr} content="${esc(value)}" />`,
  });

  swap(/<title>[^<]*<\/title>/, `<title>${esc(title)}</title>`);
  swap(/<link rel="canonical" href="[^"]*" ?\/>/, `<link rel="canonical" href="${esc(canonical)}" />`);
  const tags: [string, string][] = [
    ['name="title"', title],
    ['name="description"', description],
    ['property="og:title"', ogTitle],
    ['property="og:description"', ogDescription],
    ['property="og:url"', canonical],
    ['name="twitter:title"', ogTitle],
    ['name="twitter:description"', ogDescription],
    ['name="twitter:url"', canonical],
  ];
  if (robots) tags.push(['name="robots"', robots]);
  for (const [attr, value] of tags) {
    const { pattern, tag } = content(attr, value);
    swap(pattern, tag);
  }
  return html;
}

/** Route path -> head tags. Keep in sync with src/App.tsx (netlify.toml guard test enforces the file names). */
export const prerenderRoutes: Record<string, HeadMeta> = {
  "/contact": pageMetadata.contact,
  ...Object.fromEntries(
    servicePages.map((service) => [`/services/${service.slug}`, serviceMetadata(service)]),
  ),
  "/404": {
    title: "404 - Page Not Found | BlezeX Technologies",
    description: "The page you are looking for does not exist.",
    canonical: `${SITE_URL}/404`,
    robots: "noindex, nofollow",
  },
};

export default function prerenderHead(): Plugin {
  let outDir = "dist";
  return {
    name: "prerender-head",
    apply: "build",
    configResolved(config) {
      outDir = resolve(config.root, config.build.outDir);
    },
    closeBundle() {
      const template = readFileSync(join(outDir, "index.html"), "utf8");
      for (const [route, meta] of Object.entries(prerenderRoutes)) {
        const file = join(outDir, "_prerender", `${route}.html`);
        mkdirSync(dirname(file), { recursive: true });
        writeFileSync(file, injectHead(template, meta));
      }
    },
  };
}
