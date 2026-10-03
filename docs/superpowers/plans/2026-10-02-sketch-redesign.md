# BlezeX Sketch Redesign Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Restyle the BlezeX site in place into a light-only, sketch/wireframe-style creative-tech agency look with premium motion.

**Architecture:** Replace CSS tokens and fonts, add a small motion kit (`src/components/motion/`) and sketch SVG kit (`src/components/sketch/`), then restyle each existing section file using those primitives. Content, routes, forms, SEO untouched.

**Tech Stack:** Vite, React 18, Tailwind 3, framer-motion 12 (already installed), `lenis` (new), vitest + Testing Library.

Spec: `docs/superpowers/specs/2026-10-02-sketch-redesign-design.md`

## Global Constraints

- Light theme only. No `dark:` classes, no `.dark` vars, no theme toggle/localStorage, no `next-themes`, no `darkMode` in tailwind config.
- Preserve all routes, forms, WhatsApp links, SEO (`src/seo.ts`, `SEO.tsx`, `useSEO.ts`, schema, `index.html` meta), analytics, and all existing text content.
- NO testimonials section, NO fake/placeholder testimonials.
- Add Process section with steps: Discovery, Strategy, Design, Development, Launch.
- New dependency: `lenis` only. No GSAP.
- Fonts: Bricolage Grotesque (display), DM Sans (body), Caveat (handwritten annotations only).
- Palette: white `#FFFFFF`, paper `#F7F6F2`, ink `#111111`, hairline `#E7E5DF`, accent orange `#FF4D1C`. No gradients, glass, or glow.
- Motion: respect `prefers-reduced-motion`; disable cursor follower and magnetic effect on coarse pointers; animate only `transform`/`opacity`.
- Sketch art must look polished (consistent 1.75px stroke, round caps/joins, even geometry), never rough.
- `npx vitest run`, `npm run lint`, `npm run build` must pass at the end of every task that touches code.
- Before editing any component file: read it fully. Keep its props, handlers, hrefs, IDs (`#home`, `#contact` etc.), and copy exactly.

## File Structure

Create:
- `src/components/motion/{SmoothScroll,Reveal,SplitText,SketchPath,Magnetic,CursorFollower,FloatCard,PageTransition}.tsx`
- `src/hooks/useFinePointer.ts`
- `src/components/sketch/{Annotation,BlueprintGrid,ServiceIcon,HeroWireframe,SketchCard}.tsx`
- `src/components/blezex/Process.tsx`
- `src/test/motion.test.tsx`

Modify: `index.html` (fonts link only), `tailwind.config.ts`, `src/index.css`, `src/App.tsx`, `src/App.css` (delete Vite boilerplate), `src/components/ui/sonner.tsx`, `package.json`, all of `src/components/blezex/*.tsx`, `src/pages/**`.

---

### Task 1: Strip dark mode, new tokens, fonts, lenis dependency

**Files:**
- Modify: `tailwind.config.ts`, `src/index.css`, `index.html:216-220`, `src/components/ui/sonner.tsx`, `src/components/blezex/Header.tsx` (theme code only), `src/components/blezex/Footer.tsx`, `Hero.tsx`, plus any file `grep -rn "dark" src` reports, `package.json`
- Delete contents of: `src/App.css` (Vite boilerplate; file may be emptied; remove its import if present)

**Interfaces:**
- Produces: Tailwind tokens `ink`, `paper`, `hairline`, `accent`; font families `font-display`, `font-body`, `font-hand`; utility classes `.sketch-border`, `.sketch-card`, `.annotation`; shadcn vars (`--background`, `--foreground`, `--primary` etc.) retained so `components/ui/*` keep working.

- [ ] **Step 1: Baseline**

Run: `npx vitest run && npm run build`
Expected: pass (record any pre-existing failures).

- [ ] **Step 2: Remove dark mode code**

In `tailwind.config.ts` delete `darkMode: ["class"],`.
In `src/index.css` delete the whole `.dark { ... }` block.
In `sonner.tsx` remove `useTheme` import and use; pass `theme="light"`:

```tsx
import { Toaster as Sonner, toast } from "sonner";
type ToasterProps = React.ComponentProps<typeof Sonner>;
const Toaster = ({ ...props }: ToasterProps) => (
  <Sonner theme="light" className="toaster group" {...props} />
);
export { Toaster, toast };
```
(Keep the existing `toastOptions` classNames from the file if present.)
In `Header.tsx` delete: `dark` state, the "Theme init" effect, `toggleTheme`, the toggle button and its icon imports.
Run `grep -rn "dark" src --include=*.tsx --include=*.ts --include=*.css` and remove every `dark:` utility and `dark` branch (keep the light value). Then `npm uninstall next-themes`.

- [ ] **Step 3: Replace tokens in `src/index.css`**

Replace the `:root` values (keep variable names; HSL triplets):

```css
:root {
  --background: 0 0% 100%;
  --foreground: 0 0% 7%;
  --card: 0 0% 100%;
  --card-foreground: 0 0% 7%;
  --popover: 0 0% 100%;
  --popover-foreground: 0 0% 7%;
  --primary: 11 100% 55%;
  --primary-foreground: 0 0% 100%;
  --secondary: 48 22% 96%;
  --secondary-foreground: 0 0% 7%;
  --muted: 48 22% 96%;
  --muted-foreground: 0 0% 38%;
  --accent: 11 100% 55%;
  --accent-foreground: 0 0% 100%;
  --destructive: 0 72% 51%;
  --destructive-foreground: 0 0% 100%;
  --border: 45 14% 89%;
  --input: 45 14% 89%;
  --ring: 0 0% 7%;
  --radius: 1.25rem;
  --section-alt: 48 22% 96%;
  --hover-surface: 48 22% 94%;
  --body-text: 0 0% 20%;
  --sidebar-background: 0 0% 98%;
  --sidebar-foreground: 240 5.3% 26.1%;
  --sidebar-primary: 240 5.9% 10%;
  --sidebar-primary-foreground: 0 0% 98%;
  --sidebar-accent: 240 4.8% 95.9%;
  --sidebar-accent-foreground: 240 5.9% 10%;
  --sidebar-border: 220 13% 91%;
  --sidebar-ring: 217.2 91.2% 59.8%;
}
```

Replace the `@layer base` heading rule and `@layer utilities` block with:

```css
@layer base {
  * { @apply border-border; }
  body { @apply bg-background text-foreground font-body antialiased; }
  h1, h2, h3, h4, h5, h6 { @apply font-display tracking-tight; }
  ::selection { background: #FF4D1C; color: #fff; }
}

@layer utilities {
  .sketch-border { border: 1.5px solid #111; }
  .sketch-card {
    @apply bg-white border border-border rounded-[20px] transition-all duration-300;
    box-shadow: 0 1px 2px rgba(17,17,17,.04), 0 8px 24px -12px rgba(17,17,17,.08);
  }
  .sketch-card:hover {
    @apply border-foreground;
    transform: translateY(-4px);
    box-shadow: 6px 6px 0 #111;
  }
  .annotation { @apply font-hand text-primary text-xl leading-none select-none; }
  .blueprint {
    background-image:
      linear-gradient(to right, hsl(var(--border) / .7) 1px, transparent 1px),
      linear-gradient(to bottom, hsl(var(--border) / .7) 1px, transparent 1px);
    background-size: 48px 48px;
  }
}
```
Remove `html { scroll-behavior: smooth; }` (Lenis owns scrolling). Add at end:

```css
@media (prefers-reduced-motion: reduce) {
  *, *::before, *::after { animation-duration: .01ms !important; transition-duration: .01ms !important; scroll-behavior: auto !important; }
}
```
Because components currently use `gradient-text`, `gradient-bg`, `glass`, `glass-hover`, `grid-bg`, `glow`, `glow-hover`, `gradient-border`: keep these class names temporarily as light-safe aliases so the build never breaks mid-migration; they are deleted in Task 10:

```css
.gradient-text { color: hsl(var(--primary)); }
.gradient-bg { background: hsl(var(--primary)); }
.gradient-border { border-color: hsl(var(--foreground)); }
.glass { @apply bg-white border border-border; }
.glass-hover { @apply hover:border-foreground transition-all duration-300; }
.grid-bg { @apply blueprint; }
.glow, .glow-hover:hover { box-shadow: none; }
```
(Place inside `@layer utilities`.)

- [ ] **Step 4: Tailwind fonts + colors**

In `tailwind.config.ts` `fontFamily`: 
```ts
display: ["Bricolage Grotesque", "sans-serif"],
heading: ["Bricolage Grotesque", "sans-serif"],
body: ["DM Sans", "sans-serif"],
hand: ["Caveat", "cursive"],
```
Add colors `ink: "#111111"`, `paper: "#F7F6F2"`, `hairline: "#E7E5DF"`.

- [ ] **Step 5: Fonts link in `index.html`** (line ~220)

```html
<link href="https://fonts.googleapis.com/css2?family=Bricolage+Grotesque:opsz,wght@12..96,500;12..96,700;12..96,800&family=Caveat:wght@500;600&family=DM+Sans:wght@400;500;700&display=swap" rel="stylesheet" />
```

- [ ] **Step 6: Add lenis, empty App.css**

Run: `npm install lenis`. Empty `src/App.css` (and remove its import if `main.tsx`/`App.tsx` imports it).

- [ ] **Step 7: Verify**

Run: `grep -rniE "dark|next-themes|useTheme|localStorage.*theme" src index.html tailwind.config.ts package.json`
Expected: no matches (ignore the word inside unrelated copy; if a match is copy text, leave it).
Run: `npx vitest run && npm run lint && npm run build`
Expected: pass.

- [ ] **Step 8: Commit**

```bash
git add -A && git commit -m "refactor: remove dark mode, add light sketch tokens and fonts"
```

---

### Task 2: Motion kit

**Files:**
- Create: `src/hooks/useFinePointer.ts`, `src/components/motion/{SmoothScroll,Reveal,SplitText,SketchPath,Magnetic,CursorFollower,FloatCard,PageTransition}.tsx`, `src/test/motion.test.tsx`
- Modify: `src/App.tsx`

**Interfaces:**
- Produces:
  - `useFinePointer(): boolean` — true only for `(hover:hover) and (pointer:fine)`.
  - `<SmoothScroll />` — mounts Lenis, renders null.
  - `<Reveal delay?: number y?: number className?: string>` — fade-up on view, once.
  - `<SplitText text: string as?: "h1"|"h2"|"h3"|"p" className?: string delay?: number>` — word mask reveal; wrapper has `aria-label={text}`.
  - `<SketchPath d: string className?: string delay?: number duration?: number strokeWidth?: number />` — must be rendered inside an `<svg>`; draws via `pathLength`.
  - `<Magnetic strength?: number className?: string>` — wraps children, pulls toward cursor.
  - `<CursorFollower />` — dot + ring, fine pointers only.
  - `<FloatCard depth?: number delay?: number className?: string>` — idle float + mouse parallax.
  - `<AnimatedRoutes>` wrapper = `PageTransition` default export `({ children }) => JSX` keyed on pathname.

- [ ] **Step 1: Write failing test `src/test/motion.test.tsx`**

```tsx
import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import Reveal from "@/components/motion/Reveal";
import SplitText from "@/components/motion/SplitText";
import Magnetic from "@/components/motion/Magnetic";
import SketchPath from "@/components/motion/SketchPath";

describe("motion kit", () => {
  it("Reveal renders children", () => {
    render(<Reveal><p>hello</p></Reveal>);
    expect(screen.getByText("hello")).toBeInTheDocument();
  });
  it("SplitText exposes full text to assistive tech", () => {
    render(<SplitText text="Build. Automate. Scale." as="h1" />);
    expect(screen.getByRole("heading", { name: "Build. Automate. Scale." })).toBeInTheDocument();
  });
  it("Magnetic renders children", () => {
    render(<Magnetic><button>go</button></Magnetic>);
    expect(screen.getByRole("button", { name: "go" })).toBeInTheDocument();
  });
  it("SketchPath renders a path", () => {
    const { container } = render(<svg><SketchPath d="M0 0 L10 10" /></svg>);
    expect(container.querySelector("path")).toBeTruthy();
  });
});
```
Run: `npx vitest run src/test/motion.test.tsx` → FAIL (modules missing). If `window.matchMedia` is undefined in jsdom, add the standard mock to `src/test/setup.ts`.

- [ ] **Step 2: Implement hook + components**

`src/hooks/useFinePointer.ts`:
```ts
import { useEffect, useState } from "react";

export const useFinePointer = () => {
  const [fine, setFine] = useState(false);
  useEffect(() => {
    const mq = window.matchMedia("(hover: hover) and (pointer: fine)");
    setFine(mq.matches);
    const on = () => setFine(mq.matches);
    mq.addEventListener("change", on);
    return () => mq.removeEventListener("change", on);
  }, []);
  return fine;
};
export default useFinePointer;
```

`SmoothScroll.tsx`:
```tsx
import { useEffect } from "react";
import Lenis from "lenis";
import "lenis/dist/lenis.css";

const SmoothScroll = () => {
  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const lenis = new Lenis({ lerp: 0.1, anchors: true, syncTouch: false });
    let id = requestAnimationFrame(function raf(t) {
      lenis.raf(t);
      id = requestAnimationFrame(raf);
    });
    return () => { cancelAnimationFrame(id); lenis.destroy(); };
  }, []);
  return null;
};
export default SmoothScroll;
```

`Reveal.tsx`:
```tsx
import { motion, useReducedMotion } from "framer-motion";
import type { ReactNode } from "react";

type Props = { children: ReactNode; delay?: number; y?: number; className?: string };

const Reveal = ({ children, delay = 0, y = 24, className }: Props) => {
  const reduce = useReducedMotion();
  return (
    <motion.div
      className={className}
      initial={reduce ? false : { opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.7, delay, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </motion.div>
  );
};
export default Reveal;
```

`SplitText.tsx`:
```tsx
import { motion, useReducedMotion } from "framer-motion";

type Props = { text: string; as?: "h1" | "h2" | "h3" | "p"; className?: string; delay?: number };

const SplitText = ({ text, as = "h2", className, delay = 0 }: Props) => {
  const reduce = useReducedMotion();
  const Tag = motion[as];
  return (
    <Tag className={className} aria-label={text}>
      {text.split(" ").map((w, i) => (
        <span key={i} aria-hidden className="inline-block overflow-hidden align-bottom pb-[0.12em] mr-[0.25em]">
          <motion.span
            className="inline-block"
            initial={reduce ? false : { y: "110%" }}
            whileInView={{ y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: delay + i * 0.06, ease: [0.22, 1, 0.36, 1] }}
          >
            {w}
          </motion.span>
        </span>
      ))}
    </Tag>
  );
};
export default SplitText;
```

`SketchPath.tsx`:
```tsx
import { motion, useReducedMotion } from "framer-motion";

type Props = { d: string; className?: string; delay?: number; duration?: number; strokeWidth?: number };

const SketchPath = ({ d, className, delay = 0, duration = 1.4, strokeWidth = 1.75 }: Props) => {
  const reduce = useReducedMotion();
  return (
    <motion.path
      d={d}
      className={className}
      fill="none"
      stroke="currentColor"
      strokeWidth={strokeWidth}
      strokeLinecap="round"
      strokeLinejoin="round"
      initial={reduce ? false : { pathLength: 0, opacity: 0 }}
      whileInView={{ pathLength: 1, opacity: 1 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration, delay, ease: "easeInOut" }}
    />
  );
};
export default SketchPath;
```

`Magnetic.tsx`:
```tsx
import { motion, useMotionValue, useReducedMotion, useSpring } from "framer-motion";
import { useRef, type ReactNode } from "react";
import useFinePointer from "@/hooks/useFinePointer";

type Props = { children: ReactNode; strength?: number; className?: string };

const Magnetic = ({ children, strength = 0.3, className }: Props) => {
  const ref = useRef<HTMLDivElement>(null);
  const fine = useFinePointer();
  const reduce = useReducedMotion();
  const x = useSpring(useMotionValue(0), { stiffness: 220, damping: 18 });
  const y = useSpring(useMotionValue(0), { stiffness: 220, damping: 18 });
  const on = fine && !reduce;
  return (
    <motion.div
      ref={ref}
      className={className ?? "inline-block"}
      style={{ x, y }}
      onMouseMove={(e) => {
        if (!on || !ref.current) return;
        const r = ref.current.getBoundingClientRect();
        x.set((e.clientX - (r.left + r.width / 2)) * strength);
        y.set((e.clientY - (r.top + r.height / 2)) * strength);
      }}
      onMouseLeave={() => { x.set(0); y.set(0); }}
    >
      {children}
    </motion.div>
  );
};
export default Magnetic;
```

`CursorFollower.tsx`:
```tsx
import { motion, useMotionValue, useSpring } from "framer-motion";
import { useEffect, useState } from "react";
import useFinePointer from "@/hooks/useFinePointer";

const CursorFollower = () => {
  const fine = useFinePointer();
  const [hot, setHot] = useState(false);
  const mx = useMotionValue(-100);
  const my = useMotionValue(-100);
  const rx = useSpring(mx, { stiffness: 300, damping: 28 });
  const ry = useSpring(my, { stiffness: 300, damping: 28 });
  useEffect(() => {
    if (!fine) return;
    const move = (e: MouseEvent) => {
      mx.set(e.clientX); my.set(e.clientY);
      setHot(!!(e.target as HTMLElement)?.closest?.("a,button,[data-cursor]"));
    };
    window.addEventListener("mousemove", move, { passive: true });
    return () => window.removeEventListener("mousemove", move);
  }, [fine, mx, my]);
  if (!fine) return null;
  return (
    <>
      <motion.div aria-hidden className="pointer-events-none fixed left-0 top-0 z-[100] h-2 w-2 -translate-x-1/2 -translate-y-1/2 rounded-full bg-primary" style={{ x: mx, y: my }} />
      <motion.div aria-hidden className="pointer-events-none fixed left-0 top-0 z-[100] h-9 w-9 -translate-x-1/2 -translate-y-1/2 rounded-full border border-foreground" style={{ x: rx, y: ry }} animate={{ scale: hot ? 1.8 : 1, opacity: hot ? 0.5 : 1 }} transition={{ duration: 0.2 }} />
    </>
  );
};
export default CursorFollower;
```

`FloatCard.tsx`:
```tsx
import { motion, useMotionValue, useReducedMotion, useSpring } from "framer-motion";
import { useEffect, type ReactNode } from "react";
import useFinePointer from "@/hooks/useFinePointer";

type Props = { children: ReactNode; depth?: number; delay?: number; className?: string };

const FloatCard = ({ children, depth = 20, delay = 0, className }: Props) => {
  const reduce = useReducedMotion();
  const fine = useFinePointer();
  const px = useSpring(useMotionValue(0), { stiffness: 80, damping: 20 });
  const py = useSpring(useMotionValue(0), { stiffness: 80, damping: 20 });
  useEffect(() => {
    if (!fine || reduce) return;
    const move = (e: MouseEvent) => {
      px.set((e.clientX / window.innerWidth - 0.5) * depth);
      py.set((e.clientY / window.innerHeight - 0.5) * depth);
    };
    window.addEventListener("mousemove", move, { passive: true });
    return () => window.removeEventListener("mousemove", move);
  }, [fine, reduce, depth, px, py]);
  return (
    <motion.div className={className} style={{ x: px, y: py }}>
      <motion.div
        animate={reduce ? undefined : { y: [0, -10, 0] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay }}
      >
        {children}
      </motion.div>
    </motion.div>
  );
};
export default FloatCard;
```

`PageTransition.tsx`:
```tsx
import { AnimatePresence, motion } from "framer-motion";
import { useEffect, type ReactNode } from "react";
import { useLocation } from "react-router-dom";

const PageTransition = ({ children }: { children: ReactNode }) => {
  const { pathname, hash } = useLocation();
  useEffect(() => { if (!hash) window.scrollTo(0, 0); }, [pathname, hash]);
  return (
    <AnimatePresence mode="wait" initial={false}>
      <motion.div
        key={pathname}
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
      >
        {children}
      </motion.div>
    </AnimatePresence>
  );
};
export default PageTransition;
```
Note: `AnimatePresence` exit needs the routed element, so in App pass `<Routes location={location} key={...}>`; see Step 3.

- [ ] **Step 3: Mount in `App.tsx`**

Add an inner component and use it in place of bare `<Routes>`:
```tsx
import { useLocation } from "react-router-dom";
import SmoothScroll from "@/components/motion/SmoothScroll";
import CursorFollower from "@/components/motion/CursorFollower";
import PageTransition from "@/components/motion/PageTransition";

const AnimatedRoutes = () => {
  const location = useLocation();
  return (
    <PageTransition>
      <Routes location={location}>{/* existing <Route> children unchanged */}</Routes>
    </PageTransition>
  );
};
```
Render `<SmoothScroll /><CursorFollower />` inside `<BrowserRouter>` above `<AnimatedRoutes />`. Keep every existing Route.

- [ ] **Step 4: Verify**

Run: `npx vitest run && npm run lint && npm run build`
Expected: all pass, including `motion.test.tsx` and `header-navigation.test.tsx`.
Run `npm run dev`, open `/`, then click a service link: page fades; `#contact` anchor link scrolls smoothly; on a touch emulation no cursor shows.

- [ ] **Step 5: Commit**

```bash
git add -A && git commit -m "feat: add motion kit, lenis smooth scroll, page transitions"
```

---

### Task 3: Sketch illustration kit

**Files:**
- Create: `src/components/sketch/{Annotation,BlueprintGrid,ServiceIcon,HeroWireframe,SketchCard}.tsx`

**Interfaces:**
- Consumes: `SketchPath` (Task 2), `FloatCard`.
- Produces:
  - `<Annotation text: string arrow?: "down-left"|"down-right"|"left"|"right" className?: string />` — Caveat label plus drawn curved arrow.
  - `<BlueprintGrid className? />` — absolutely positioned faint grid background layer.
  - `<ServiceIcon name: ServiceIconName className? />` with `type ServiceIconName = "web"|"mobile"|"saas"|"ai"|"marketing"|"design"|"corporate"|"support"` — 64x64 line icon, strokes animate on hover of nearest `.group` parent.
  - `<HeroWireframe />` — full hero composition (see below).
  - `<SketchCard className? children />` — `div.sketch-card` with 4 corner ticks.

All strokes `currentColor`, `strokeWidth 1.75`, `strokeLinecap/Join round`. Accent elements use `text-primary`.

- [ ] **Step 1: Implement `Annotation.tsx`**

```tsx
import SketchPath from "@/components/motion/SketchPath";

const ARROWS = {
  "down-left": { d: "M58 4 C 40 6, 20 14, 8 40 M8 40 L6 28 M8 40 L19 34", box: "0 0 64 48" },
  "down-right": { d: "M6 4 C 24 6, 44 14, 56 40 M56 40 L58 28 M56 40 L45 34", box: "0 0 64 48" },
  left: { d: "M60 24 C 44 8, 24 8, 6 24 M6 24 L18 16 M6 24 L18 30", box: "0 0 64 48" },
  right: { d: "M4 24 C 20 8, 40 8, 58 24 M58 24 L46 16 M58 24 L46 30", box: "0 0 64 48" },
} as const;

type Props = { text: string; arrow?: keyof typeof ARROWS; className?: string };

const Annotation = ({ text, arrow = "down-left", className = "" }: Props) => (
  <div aria-hidden className={`pointer-events-none inline-flex flex-col items-start gap-1 -rotate-3 ${className}`}>
    <span className="annotation">{text}</span>
    <svg viewBox={ARROWS[arrow].box} className="h-10 w-14 text-primary">
      <SketchPath d={ARROWS[arrow].d} duration={0.9} />
    </svg>
  </div>
);
export default Annotation;
```

- [ ] **Step 2: `BlueprintGrid.tsx` and `SketchCard.tsx`**

```tsx
// BlueprintGrid.tsx
const BlueprintGrid = ({ className = "" }: { className?: string }) => (
  <div aria-hidden className={`blueprint pointer-events-none absolute inset-0 [mask-image:radial-gradient(ellipse_at_center,black_30%,transparent_75%)] ${className}`} />
);
export default BlueprintGrid;
```
```tsx
// SketchCard.tsx
import type { ReactNode } from "react";

const Tick = ({ pos }: { pos: string }) => (
  <span aria-hidden className={`absolute h-2.5 w-2.5 border-foreground ${pos}`} />
);

const SketchCard = ({ children, className = "" }: { children: ReactNode; className?: string }) => (
  <div className={`sketch-card group relative p-6 md:p-8 ${className}`}>
    <Tick pos="-left-px -top-px border-l-2 border-t-2 rounded-tl-[20px]" />
    <Tick pos="-right-px -top-px border-r-2 border-t-2 rounded-tr-[20px]" />
    <Tick pos="-bottom-px -left-px border-b-2 border-l-2 rounded-bl-[20px]" />
    <Tick pos="-bottom-px -right-px border-b-2 border-r-2 rounded-br-[20px]" />
    {children}
  </div>
);
export default SketchCard;
```

- [ ] **Step 3: `ServiceIcon.tsx`**

Each icon: one `<svg viewBox="0 0 64 64" className="h-14 w-14 text-foreground group-hover:text-primary transition-colors">` with 2–4 `<path>`s drawn on a 64 grid, `fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round"`, plus CSS-driven hover motion via `className="origin-center transition-transform duration-500 group-hover:-translate-y-1"` on an inner `<g>`. Shapes (implement exactly these):
- web: browser frame `M8 14h48v36H8z`, bar `M8 24h48`, dots `M14 19h.01 M20 19h.01`, content `M16 32h20 M16 39h32`.
- mobile: `M22 6h20a4 4 0 0 1 4 4v44a4 4 0 0 1-4 4H22a4 4 0 0 1-4-4V10a4 4 0 0 1 4-4z`, `M28 12h8`, `M29 52h6`.
- saas: three stacked layers `M32 8 L56 20 L32 32 L8 20z`, `M8 30 L32 42 L56 30`, `M8 40 L32 52 L56 40`.
- ai: chip `M20 20h24v24H20z`, pins `M28 20v-8 M36 20v-8 M28 44v8 M36 44v8 M20 28h-8 M20 36h-8 M44 28h8 M44 36h8`, core `M28 28h8v8h-8z`.
- marketing: axes `M10 8v46h46`, rising line `M16 44 L28 32 L38 38 L54 18`, arrow head `M44 18h10v10`.
- design: pen nib `M12 52 L16 38 L42 12 L52 22 L26 48z`, `M38 16 L48 26`, `M12 52 L24 48`.
- corporate: building `M14 54V12h24v42`, `M38 54V26h12v28`, `M8 54h48`, windows `M22 20h8 M22 30h8 M22 40h8`.
- support: headset `M12 36v-6a20 20 0 0 1 40 0v6`, ear cups `M12 34h6v14h-6z M46 34h6v14h-6z`, mic `M52 48 C 52 56, 44 56, 36 56`.
Export the `ServiceIconName` type and a lookup so `<ServiceIcon name="web" />` renders the right glyph.

- [ ] **Step 4: `HeroWireframe.tsx`**

A responsive composition (container `relative aspect-[5/4] w-full max-w-[640px]`) containing:
1. Back layer: SVG (`viewBox="0 0 640 512"`, `text-foreground`) drawn with `SketchPath`s: a large browser window (rounded rect path with top bar, 3 dots, nav lines, hero block lines, 3 card outlines), staggered `delay` 0.1–1.2s.
2. A phone outline offset bottom-right (separate SVG, drawn after browser, delay 1.0s).
3. Three `FloatCard`s (white `sketch-card` mini UIs, absolutely positioned, each `depth` 14/24/34, `delay` 0/1.2/2.4): "AI Automation" chip with `ServiceIcon ai`-style glyph and a progress bar; a small chart card (inline 5-bar SVG); a "Launch ✓" status pill in `bg-primary text-white`.
4. A dashed orange flow path (`text-primary`, `strokeDasharray="6 8"`) connecting browser → phone → chip, drawn with `SketchPath`.
5. Two `Annotation`s: "your idea" (arrow `down-right`, top-left) and "shipped!" (arrow `left`, bottom-right).
Hide the two annotations below `md`. Keep total inline SVG under ~6KB.

- [ ] **Step 5: Verify**

Temporarily render `<HeroWireframe />` and a grid of 8 `ServiceIcon`s in `Index.tsx` via dev server; confirm drawing animation plays and icons are crisp at 56px. Remove temp code.
Run: `npm run lint && npm run build` → pass.

- [ ] **Step 6: Commit**

```bash
git add -A && git commit -m "feat: add sketch illustration kit"
```

---

### Task 4: Header and Footer

**Files:**
- Modify: `src/components/blezex/Header.tsx`, `src/components/blezex/Footer.tsx`
- Test: `src/test/header-navigation.test.tsx` (must keep passing unchanged)

**Interfaces:**
- Consumes: `Magnetic`, tokens. Produces: nothing new.

- [ ] **Step 1: Header**

Read file fully. Keep: nav items, dropdown data, routes/hash targets, roles/aria-labels (`"Open navigation menu"`, Services `button`, `menuitem`s), mobile menu logic. Restyle only:
- Bar: `fixed top-0 inset-x-0 z-50 bg-white/90 backdrop-blur` → on scroll add `border-b border-border`; height shrinks 88px → 68px via existing scroll state (add one if missing, passive listener).
- Logo: unchanged asset; "Bleze" ink + "X" `text-primary`, `font-display font-extrabold`.
- Links: `font-body text-sm font-medium text-foreground`, underline that slides in (`after:` pseudo, `scale-x-0 → scale-x-100`, origin-left, 300ms).
- Dropdown panel: `sketch-card` look, 20px radius, items with hover `bg-secondary` and arrow nudge.
- Primary CTA button (existing one): ink pill `bg-foreground text-white rounded-full px-5 py-2.5`, wrapped in `Magnetic`, hover `bg-primary`.
- Mobile menu: white full-height sheet, large `font-display text-3xl` links, hairline separators.
- Theme toggle already removed in Task 1.

- [ ] **Step 2: Footer**

Read fully; keep every link/href/contact detail. Restyle: `bg-paper border-t border-border`, giant outlined "BlezeX" wordmark row (`font-display font-extrabold text-[18vw] md:text-[12rem] leading-none text-transparent [-webkit-text-stroke:1.5px_#111]` low opacity decorative, `aria-hidden`), 4-column grid (`grid-cols-2 md:grid-cols-4`), headings `font-display text-sm uppercase tracking-widest`, links `text-foreground/70 hover:text-primary` with sliding underline, a dashed hairline above the bottom copyright bar. Remove all `dark:` leftovers.

- [ ] **Step 3: Verify and commit**

Run: `npx vitest run src/test/header-navigation.test.tsx && npm run lint && npm run build` → pass.
Dev-check widths 375 / 768 / 1280: no horizontal scroll, dropdown works with keyboard (Tab/Enter).

```bash
git add -A && git commit -m "feat: restyle header and footer"
```

---

### Task 5: Hero (strongest statement)

**Files:**
- Modify: `src/components/blezex/Hero.tsx`

**Interfaces:**
- Consumes: `SplitText`, `Reveal`, `Magnetic`, `HeroWireframe`, `Annotation`, `BlueprintGrid`.

- [ ] **Step 1: Rewrite markup, keep content**

Keep: section `id="home"`, WhatsApp `message` and `href` (`https://wa.me/919059634555?text=...`, `target="_blank"` plus add `rel="noopener noreferrer"`), `#contact` link, badge copy ("BlezeX — Build. Automate. Scale."), headline "Transforming Businesses With BlezeX", description paragraph, 5 service chips, "Trusted by 50+ businesses", Startup India + MSME badges, stats (50+ Businesses, 100+ Projects, 24/7 Support). Remove: mouse-glow, particles (`Math.random` in render), glow orbs, `mousePosition` state and listener.

Layout: `section#home relative overflow-hidden bg-white pt-32 pb-20 md:pt-40`; `BlueprintGrid` behind. Container grid `lg:grid-cols-12 gap-12 items-center`:
- Left (`lg:col-span-7`): badge as hairline pill with orange dot; `SplitText as="h1"` `text="Transforming Businesses With BlezeX"` at `text-[clamp(3rem,8vw,7.5rem)] font-extrabold leading-[0.95]` (the final word "BlezeX" with orange X: render headline as `SplitText` for the first part and a separate `motion` span for "Bleze<span class=text-primary>X</span>" so the heading's accessible name remains the full phrase via `aria-label` on the `h1` wrapper); description `text-lg text-muted-foreground max-w-xl`; chips as hairline pills (replace emoji with the matching `ServiceIcon`-style small glyph or keep emoji text exactly if icon mapping is unclear); CTA row: primary "Get Free Audit" ink pill + arrow in `Magnetic`, secondary "Contact Us" outlined pill in `Magnetic`.
- Right (`lg:col-span-5`): `HeroWireframe`. On `<lg` it renders below the copy at full width.
- Bottom strip: trust text, badges, stats in a dashed-top `border-t border-dashed` row with a hand-drawn underline `SketchPath` under "50+ businesses".

- [ ] **Step 2: Verify**

Run: `npm run lint && npm run build && npx vitest run` → pass.
Dev-check 375/768/1280. Headline never overflows at 375. Lighthouse/DevTools: CLS ≈ 0 (wireframe container has fixed aspect-ratio).

- [ ] **Step 3: Commit**

```bash
git add -A && git commit -m "feat: sketch hero with wireframe composition"
```

---

### Task 6: ServicesHighlight, Services, Packages

**Files:**
- Modify: `src/components/blezex/ServicesHighlight.tsx`, `Services.tsx`, `Packages.tsx`

**Interfaces:**
- Consumes: `SketchCard`, `ServiceIcon`, `Reveal`, `SplitText`, `Annotation`, `Magnetic`.

- [ ] **Step 1: Shared section header pattern**

Each section: `py-24 md:py-36`, header block = small mono-ish eyebrow (`font-body text-xs uppercase tracking-[0.2em] text-primary` with a leading `01 /` index), `SplitText as="h2"` at `text-[clamp(2.25rem,5vw,4.5rem)] font-extrabold leading-none`, paragraph in `Reveal`.

- [ ] **Step 2: Restyle the three files**

Read each fully; keep data arrays, hrefs (service page links), prices, feature lists, button targets.
- ServicesHighlight: horizontal numbered strip (01–04…), each item a `SketchCard` with `ServiceIcon`, title, short text, arrow link; staggered `Reveal` (`delay = i * 0.08`).
- Services: 8 services in `grid md:grid-cols-2 xl:grid-cols-4 gap-6`, each `SketchCard` (icon via mapping service→`ServiceIconName`; if a service has no clear match use `"corporate"`), large index number `text-6xl font-display text-border` top-right, hover reveals "Explore →" with arrow translate. Preserve `Link to` targets. Add one `Annotation text="pick one!"` near header (hidden `<md`).
- Packages: 3 cards; featured package gets `border-foreground` + `shadow-[6px_6px_0_#111]` + orange "Popular" tag in `font-hand`; CTA buttons in `Magnetic`; checkmarks replaced with 1.75px drawn check icons (`lucide-react` `Check` with `strokeWidth={1.75}`).

- [ ] **Step 3: Verify and commit**

Run: `npm run lint && npm run build && npx vitest run` → pass. Check cards stack cleanly at 375, 2-col at 768.

```bash
git add -A && git commit -m "feat: restyle services highlight, services, packages"
```

---

### Task 7: Stats, About, Process (new), Portfolio

**Files:**
- Modify: `src/components/blezex/Stats.tsx`, `About.tsx`, `Portfolio.tsx`, `src/pages/Index.tsx`
- Create: `src/components/blezex/Process.tsx`

**Interfaces:**
- Consumes: sketch + motion kits. Produces: `<Process />` default export (no props), `id="process"`.

- [ ] **Step 1: Stats and About**

Read both. Keep all numbers/copy. Stats: big `font-display` numbers `text-[clamp(3rem,7vw,6rem)]`, `border-t border-dashed` dividers, count-up using `useInView` + `animate` from framer-motion (respect reduced motion: show final value immediately). About: asymmetric `lg:grid-cols-12`; copy left (7), right (5) a `SketchCard`-framed wireframe of a team/org diagram built from `SketchPath` boxes + connector lines and an `Annotation`.

- [ ] **Step 2: Create `Process.tsx`**

```tsx
import SketchPath from "@/components/motion/SketchPath";
import Reveal from "@/components/motion/Reveal";
import SplitText from "@/components/motion/SplitText";
import SketchCard from "@/components/sketch/SketchCard";
import BlueprintGrid from "@/components/sketch/BlueprintGrid";

const STEPS = [
  { title: "Discovery", text: "We learn your business, goals, users and constraints before writing a line of code." },
  { title: "Strategy", text: "We map scope, architecture and a clear roadmap with milestones." },
  { title: "Design", text: "Wireframes and interface design you can review, refine and approve." },
  { title: "Development", text: "Clean, tested builds delivered in short cycles with regular demos." },
  { title: "Launch", text: "Deployment, handover and ongoing support so you keep growing." },
];

const Process = () => (
  <section id="process" className="relative overflow-hidden bg-paper py-24 md:py-36">
    <BlueprintGrid />
    <div className="container relative">
      <p className="mb-4 text-xs uppercase tracking-[0.2em] text-primary">Process</p>
      <SplitText as="h2" text="From idea to launch, step by step" className="max-w-3xl font-extrabold leading-none text-[clamp(2.25rem,5vw,4.5rem)]" />
      <div className="relative mt-16">
        {/* desktop connector: curved dashed path behind the cards */}
        <svg aria-hidden viewBox="0 0 1200 120" preserveAspectRatio="none" className="absolute left-0 top-10 hidden h-24 w-full text-primary lg:block">
          <SketchPath d="M20 60 C 200 0, 300 120, 300 60 S 500 0, 600 60 S 800 120, 900 60 S 1100 0, 1180 60" duration={2.2} />
        </svg>
        <ol className="relative grid gap-6 lg:grid-cols-5">
          {STEPS.map((s, i) => (
            <li key={s.title}>
              <Reveal delay={i * 0.1}>
                <SketchCard className="h-full">
                  <span className="font-display text-5xl font-extrabold text-primary">{String(i + 1).padStart(2, "0")}</span>
                  <h3 className="mt-4 text-xl font-bold">{s.title}</h3>
                  <p className="mt-2 text-sm text-muted-foreground">{s.text}</p>
                </SketchCard>
              </Reveal>
            </li>
          ))}
        </ol>
      </div>
    </div>
  </section>
);
export default Process;
```
On mobile (`<lg`) the connector is hidden; cards stack, each with a short vertical dashed line `before:` between them (`before:absolute before:-top-6 before:left-8 before:h-6 before:border-l before:border-dashed before:border-foreground/40`, skip on first).

In `Index.tsx` add `import Process from "@/components/blezex/Process";` and render `<Process />` directly after `<Packages />`. Do not touch SEO/schema props.

- [ ] **Step 3: Portfolio**

Read fully; keep project data, links, images. Large cards: `grid lg:grid-cols-2 gap-8`, first card spans 2 columns at `lg`; image area `aspect-[16/10] overflow-hidden rounded-[20px]` with `group-hover:scale-105` (800ms), a "View project ↗" pill sliding up on hover, tag chips hairline pills, index number outlined text; `Reveal` stagger. Images keep `loading="lazy"` and explicit width/height or aspect box.

- [ ] **Step 4: Verify and commit**

Run: `npm run lint && npm run build && npx vitest run` → pass. Dev-check Process connector draws on scroll and mobile stack is clean.

```bash
git add -A && git commit -m "feat: restyle stats, about, portfolio; add process section"
```

---

### Task 8: FAQ, Contact, CTA

**Files:**
- Modify: `src/components/blezex/FAQ.tsx`, `Contact.tsx`, `CTA.tsx`

- [ ] **Step 1: FAQ**

Read fully; keep Q&A text and any accordion primitive. Style: items separated by hairlines, question `font-display text-xl md:text-2xl`, trigger icon is a plus whose vertical bar rotates/scales away when open (CSS transform), answer reveals with height animation (Radix accordion already handles; only restyle classes).

- [ ] **Step 2: Contact**

Read fully (311 lines). Keep: all fields, `name`s, validation, submit handler, endpoints/WhatsApp/mailto logic, success/error toasts, contact details. Restyle only: two-column layout (info left with `SketchCard`s for phone/email/location, form right in a large `sketch-card`), inputs `h-12 rounded-xl border-border bg-white focus-visible:border-foreground focus-visible:ring-0 focus-visible:shadow-[3px_3px_0_#111] transition`, labels `text-xs uppercase tracking-widest`, submit as ink pill in `Magnetic` with arrow nudge on hover, drawn underline on focus is optional. Maintain label–input association and error text with `aria-live="polite"`.

- [ ] **Step 3: CTA**

Read fully. Keep text/link. Full-bleed ink panel is NOT allowed (light theme); use `bg-paper` with huge `font-display` headline via `SplitText`, orange hand-drawn scribble circle (`SketchPath`) around one key word, `Annotation`, magnetic primary button.

- [ ] **Step 4: Verify and commit**

Run: `npm run lint && npm run build && npx vitest run` → pass. Manually submit the contact form in dev and confirm behavior identical to before (network call or redirect).

```bash
git add -A && git commit -m "feat: restyle faq, contact, cta"
```

---

### Task 9: Service detail pages, Contact page, NotFound

**Files:**
- Modify: `src/components/blezex/ServiceDetailPage.tsx`, `ServicePageShared.tsx`, `src/pages/Contact.tsx`, `src/pages/NotFound.tsx`; the 8 `src/pages/services/*.tsx` only if they carry style classes

- [ ] **Step 1: Restyle shared detail page**

Read `ServiceDetailPage.tsx` (395 lines) and `ServicePageShared.tsx`. Keep all props, SEO, schema, copy, links. Apply: hero with eyebrow + `SplitText h1`, `ServiceIcon` large on right inside `SketchCard` with `BlueprintGrid`, sections using the Task 6 header pattern, feature/benefit/FAQ cards as `SketchCard`, CTA buttons in `Magnetic`. Replace every leftover `gradient-*`, `glass*`, `grid-bg`, `glow*` usage.

- [ ] **Step 2: NotFound and Contact page**

NotFound: giant outlined "404" `font-display`, drawn sketch of a broken browser (`SketchPath`), link back home as ink pill (keep the existing `<a href="/">`/Link behavior and any `console.error`).
Contact page: unchanged structure, now inherits Header/Contact/Footer styles; ensure top padding clears the fixed header.

- [ ] **Step 3: Verify and commit**

Run: `npm run lint && npm run build && npx vitest run && npx vitest run src/test/seo.test.tsx` → pass. Visit all 8 service routes + `/contact` + `/nope` in dev.

```bash
git add -A && git commit -m "feat: restyle service detail pages, contact page, 404"
```

---

### Task 10: Cleanup and final verification

**Files:**
- Modify: `src/index.css` (delete temp aliases), any remaining users.

- [ ] **Step 1: Remove alias classes**

Run: `grep -rnE "gradient-text|gradient-bg|gradient-border|glass|glass-hover|grid-bg|glow" src`
Replace each remaining use with the new tokens (`text-primary`, `bg-primary`, `sketch-card`, `blueprint`, none), then delete the aliases block from `src/index.css`. Delete unused deps only if now unreferenced (`react-parallax-tilt`, `react-tsparticles`): `grep -rn "tilt\|tsparticles" src`; if none, `npm uninstall react-parallax-tilt react-tsparticles`.

- [ ] **Step 2: Hard checks**

Run each, expect pass / no output:
- `grep -rniE "dark:|\.dark|next-themes|prefers-color-scheme" src index.html tailwind.config.ts`
- `grep -rniE "testimonial" src` (no section created; SEO strings untouched)
- `npx vitest run && npm run lint && npm run build`
- `ls -la dist/assets` — note JS gzip size; flag if increase over previous build > 80KB gzipped.

- [ ] **Step 3: Manual QA (dev + `npm run preview`)**

At 375 / 768 / 1280 on `/`, `/contact`, one service page, `/nope`: no horizontal scroll; keyboard Tab order logical with visible focus ring; `prefers-reduced-motion` emulation (DevTools Rendering) shows content immediately with no drawing/float; touch emulation shows no cursor follower and no magnetic shift; anchor links (`#contact`, `#process`) scroll smoothly; WhatsApp links open with correct text; contact form submits as before.

- [ ] **Step 4: Commit**

```bash
git add -A && git commit -m "chore: remove temp aliases and unused deps, final QA"
```
