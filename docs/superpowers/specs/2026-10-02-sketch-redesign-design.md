# BlezeX Sketch/Wireframe Redesign — Design

Date: 2026-10-02. Status: approved by user in chat.

## Goal
Restyle the existing BlezeX site (Vite + React 18 + Tailwind 3 + framer-motion) into a premium light-only creative-tech agency look: editorial type, sketch/wireframe SVG illustrations, polished motion. Restyle in place. No rewrite.

## Hard constraints
- Preserve routes, forms, WhatsApp links, SEO/metadata/schema, analytics, all existing content.
- Remove dark mode fully: `.dark` CSS vars, `dark:` classes, Header theme toggle + localStorage, `next-themes` (sonner), `darkMode` in tailwind config, dependency.
- No Testimonials section, no fake/placeholder testimonials.
- Add Process section (generic: Discovery, Strategy, Design, Development, Launch).
- New deps: `lenis` only. No GSAP.
- `header-navigation.test.tsx` keeps passing; `lint` and `build` clean.
- Reference design unavailable (Pinterest link login-gated); the user's written brief is source of truth.

## Design system
- Palette: white `#fff`, paper `#F7F6F2`, ink `#111`, hairline `#E7E5DF`, accent orange `#FF4D1C`. No gradients/glass/glow. Single `:root`.
- Fonts: Bricolage Grotesque (display), DM Sans (body), Caveat (annotations only).
- Cards: white, 1px hairline, 20px radius, soft shadow, hover lift + ink border. Sketch accents: dashed borders, corner ticks, offset outline.
- Layout: 1280 container, 12-col grid, 96-160px section rhythm.

## Motion kit — `src/components/motion/`
`SmoothScroll` (Lenis, anchor + hash links work), `Reveal` (fade-up, stagger), `SplitText`, `SketchPath` (framer `pathLength`), `Magnetic`, `CursorFollower`, `FloatCard`, `PageTransition`.
All honor `prefers-reduced-motion`. Cursor and magnetic disabled on coarse pointers.

## Illustrations — `src/components/sketch/`
Inline optimized SVG: hero wireframe composition (browser, phone, flow arrows, floating UI cards), animated line icons per service, blueprint grid, Caveat annotation arrows. Polished, not rough.

## Sections
Header (sticky, hairline on scroll, same menu/routes), Hero (strongest visual), ServicesHighlight/Services/Packages (numbered cards, animated icons), Stats/About (editorial, counters), new Process (SVG connector draws on scroll, placed after Packages), Portfolio (large cards, hover reveal), FAQ, Contact (same submit logic), CTA, Footer. Service detail pages, Contact page, 404 inherit tokens/primitives.

## Order
1. Strip dark mode, tokens, fonts.
2. Motion kit + SmoothScroll/PageTransition/Cursor mounted in `App`.
3. Sketch illustrations.
4. Sections top to bottom.
5. Detail pages.
6. `vitest`, `lint`, `build`, check at desktop/tablet/mobile widths.
