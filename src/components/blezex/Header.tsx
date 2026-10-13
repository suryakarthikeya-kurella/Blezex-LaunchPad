import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Phone, Mail, ChevronDown, ArrowUpRight, Linkedin, Instagram, Facebook, Youtube, Twitter } from "lucide-react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import Magnetic from "@/components/motion/Magnetic";

export const CAREERS_URL = "https://blezexcareers.netlify.app/";

/* ─── Nav link data ──────────────────────────────────────────── */
const navLinks = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  {
    label: "Services",
    href: "#services",
    dropdown: [
      { label: "Web Development", href: "/services/web-development" },
      { label: "AI & Automation", href: "/services/ai-automation" },
      { label: "Software & SaaS", href: "/services/custom-software-saas" },
      { label: "Digital Marketing", href: "/services/digital-marketing" },
      { label: "Creative & Branding", href: "/services/graphic-designing-branding" },
    ],
  },
  { label: "Portfolio", href: "#portfolio" },
  { label: "Packages", href: "#packages" },
  { label: "Contact", href: "#contact" },
  { label: "Careers", href: CAREERS_URL, external: true },
];

const socials = [
  { label: "LinkedIn", href: "https://www.linkedin.com/company/blezex/", Icon: Linkedin },
  { label: "Instagram", href: "https://www.instagram.com/blezex_ai/", Icon: Instagram },
  { label: "Facebook", href: "https://www.facebook.com/profile.php?id=61586205163889", Icon: Facebook },
  { label: "YouTube", href: "https://www.youtube.com/@BlezeX_Ai", Icon: Youtube },
  { label: "X", href: "https://x.com/x_blezex", Icon: Twitter },
];

const linkCls =
  "relative font-body text-sm font-medium text-foreground transition-colors hover:text-primary after:absolute after:left-0 after:-bottom-1 after:h-px after:w-full after:origin-left after:scale-x-0 after:bg-primary after:transition-transform after:duration-300 hover:after:scale-x-100 focus-visible:after:scale-x-100";

/* ─── Helper: navigate to a hash section from any page ──────── */
function useHashNav() {
  const navigate = useNavigate();
  const location = useLocation();

  return (href: string) => {
    if (location.pathname === "/") {
      // Already on home — just scroll
      const el = document.querySelector(href);
      if (el) el.scrollIntoView({ behavior: "smooth" });
    } else {
      // Navigate home first, then browser will anchor-scroll
      navigate("/" + href);
    }
  };
}

/* ─── Component ──────────────────────────────────────────────── */
const Header = () => {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false);

  const location = useLocation();
  const isHome = location.pathname === "/";
  const goToHash = useHashNav();
  const menuRef = useRef<HTMLDivElement>(null);
  const isInitialMount = useRef(true);
  const closeRef = useRef<HTMLButtonElement>(null);

  const auditMessage = encodeURIComponent(
    `Hello BlezeX 👋\n\nI came from your website and would like to request a FREE business audit.\n\nName:\nBusiness Name:\nWebsite (if any):\nService Interested In:\n`
  );

  /* Scroll detection */
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  /* Lock body scroll when mobile menu is open */
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [open]);

  /* Move focus into the drawer when it opens */
  useEffect(() => {
    if (open) closeRef.current?.focus();
  }, [open]);

  /* Close menu on route change */
  useEffect(() => {
    setOpen(false);
    setMobileServicesOpen(false);
  }, [location.pathname]);

  /* Scroll to hash on page load or location change */
  useEffect(() => {
    // First render (incl. refresh): keep the URL and let the browser restore scroll;
    // only an explicit #hash is scrolled to.
    if (isInitialMount.current) {
      isInitialMount.current = false;
      if (!location.hash) return;
    }

    if (location.hash) {
      const timer = setTimeout(() => {
        const el = document.querySelector(location.hash);
        if (el) {
          el.scrollIntoView({ behavior: "smooth" });
        }
      }, 100);
      return () => clearTimeout(timer);
    } else if (location.pathname === "/") {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  }, [location.pathname, location.hash]);

  /* Close desktop dropdown on outside click / touch (mobile drawer closes via its backdrop) */
  useEffect(() => {
    const handler = (e: MouseEvent | TouchEvent) => {
      if (menuRef.current && !menuRef.current.contains(e.target as Node)) {
        setDropdownOpen(false);
      }
    };
    document.addEventListener("mousedown", handler);
    document.addEventListener("touchstart", handler);
    return () => {
      document.removeEventListener("mousedown", handler);
      document.removeEventListener("touchstart", handler);
    };
  }, []);

  /* Close mobile menu & desktop dropdown on Escape */
  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setOpen(false);
        setDropdownOpen(false);
      }
    };
    document.addEventListener("keydown", handler);
    return () => document.removeEventListener("keydown", handler);
  }, []);

  const handleNavClick = (href: string) => {
    setOpen(false);
    setMobileServicesOpen(false);
    goToHash(href);
  };

  return (
    <>
      {/* Full-screen backdrop — closes menu on tap outside (mobile) */}
      <AnimatePresence>
        {open && (
          <motion.div
            key="backdrop"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-[55] bg-foreground/30 lg:hidden"
            data-lenis-prevent
            onClick={() => setOpen(false)}
            aria-hidden="true"
          />
        )}
      </AnimatePresence>

      <motion.header
        ref={menuRef}
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.4, ease: "easeOut" }}
        className="fixed top-3 inset-x-3 md:inset-x-6 z-50"
      >
       <div className="relative mx-auto max-w-[80rem] rounded-[20px] border border-border bg-white shadow-[0_8px_30px_-12px_rgba(17,17,17,.15)]">
        {/* ── Utility strip (md+; collapses on scroll) ─────────── */}
        <div
          className={`hidden md:block overflow-hidden rounded-t-[20px] bg-[#FFF3EE] transition-[max-height,opacity] duration-300 motion-reduce:transition-none ${
            scrolled ? "max-h-0 opacity-0" : "max-h-8 opacity-100"
          }`}
          aria-hidden={scrolled}
        >
          <div className="flex h-8 items-center justify-between px-6 text-xs font-body text-foreground/70">
            <div className="flex items-center gap-6">
              <a href="mailto:connect.blezex@gmail.com" tabIndex={scrolled ? -1 : undefined} className="flex items-center gap-1.5 py-1.5 hover:text-primary transition-colors">
                <Mail size={13} className="text-primary" /> connect.blezex@gmail.com
              </a>
              <a href="tel:+919059634555" tabIndex={scrolled ? -1 : undefined} className="flex items-center gap-1.5 py-1.5 hover:text-primary transition-colors">
                <Phone size={13} className="text-primary" /> +91 9059634555
              </a>
            </div>
            <div className="flex items-center gap-3">
              <span>Follow us:</span>
              {socials.map(({ label, href, Icon }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  tabIndex={scrolled ? -1 : undefined}
                  className="p-1.5 -m-1.5 text-foreground/70 hover:text-primary transition-colors"
                >
                  <Icon size={14} />
                </a>
              ))}
            </div>
          </div>
        </div>

        <div
          className={`flex items-center justify-between px-4 md:px-6 transition-[height] duration-300 motion-reduce:transition-none ${
            scrolled ? "h-[56px] md:h-[60px]" : "h-[60px] md:h-16"
          }`}
        >

          {/* ── Logo ─────────────────────────────────────────── */}
          {isHome ? (
            <a
              href="#home"
              onClick={(e) => { e.preventDefault(); handleNavClick("#home"); }}
              className="flex items-center gap-3 shrink-0"
              aria-label="BlezeX — Go to top"
            >
              <img
                src="/logo-96.png"
                alt="BlezeX Logo"
                width={96}
                height={96}
                className="h-9 w-auto object-contain"
              />
              <span className="flex flex-col">
                <span className="text-2xl font-display font-extrabold leading-none tracking-tight">
                  <span className="text-foreground">Bleze</span>
                  <span className="text-primary">X</span>
                </span>
                <span className="hidden sm:block mt-1 text-[10px] font-body leading-none text-foreground/60">Technology Solutions</span>
              </span>
            </a>
          ) : (
            <Link
              to="/"
              className="flex items-center gap-3 shrink-0"
              aria-label="BlezeX — Go home"
            >
              <img
                src="/logo-96.png"
                alt="BlezeX Logo"
                width={96}
                height={96}
                className="h-9 w-auto object-contain"
              />
              <span className="flex flex-col">
                <span className="text-2xl font-display font-extrabold leading-none tracking-tight">
                  <span className="text-foreground">Bleze</span>
                  <span className="text-primary">X</span>
                </span>
                <span className="hidden sm:block mt-1 text-[10px] font-body leading-none text-foreground/60">Technology Solutions</span>
              </span>
            </Link>
          )}

          {/* ── Desktop Nav ──────────────────────────────────── */}
          <nav className="hidden lg:flex items-center gap-6 xl:gap-8" aria-label="Main navigation">
            {navLinks.map((link) =>
              link.dropdown ? (
                /* Services with hover dropdown */
                <div
                  key={link.label}
                  className="relative"
                  onMouseEnter={() => setDropdownOpen(true)}
                  onMouseLeave={() => setDropdownOpen(false)}
                  onFocus={() => setDropdownOpen(true)}
                  onBlur={(e) => {
                    if (!e.currentTarget.contains(e.relatedTarget as Node)) setDropdownOpen(false);
                  }}
                >
                  <button
                    onClick={() => handleNavClick(link.href)}
                    className={`flex items-center gap-1 ${linkCls}`}
                    aria-expanded={dropdownOpen}
                    aria-haspopup="true"
                  >
                    {link.label}
                    <motion.span
                      animate={{ rotate: dropdownOpen ? 180 : 0 }}
                      transition={{ duration: 0.2 }}
                    >
                      <ChevronDown size={14} />
                    </motion.span>
                  </button>

                  <AnimatePresence>
                    {dropdownOpen && (
                      <motion.div
                        initial={{ opacity: 0, y: 8 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 8 }}
                        transition={{ duration: 0.18 }}
                        className="absolute top-full left-0 pt-4"
                      >
                       <div role="menu" className="w-60 p-2 rounded-2xl border border-border bg-white shadow-[0_8px_30px_-12px_rgba(17,17,17,.15)]">
                        {link.dropdown.map((item) => (
                          <Link
                            key={item.href}
                            to={item.href}
                            role="menuitem"
                            onClick={() => setDropdownOpen(false)}
                            className="group flex items-center justify-between px-4 py-2.5 rounded-xl text-sm font-body font-medium text-foreground hover:bg-secondary transition-colors"
                          >
                            {item.label}
                            <ArrowUpRight size={14} className="text-primary opacity-0 transition-opacity duration-200 group-hover:opacity-100" />
                          </Link>
                        ))}
                       </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              ) : link.external ? (
                <a
                  key={link.label}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={linkCls}
                >
                  {link.label}
                </a>
              ) : (
                /* Regular nav link */
                <button
                  key={link.label}
                  onClick={() => handleNavClick(link.href)}
                  className={`bg-transparent border-0 cursor-pointer ${linkCls}`}
                >
                  {link.label}
                </button>
              )
            )}
          </nav>

          {/* ── Desktop Action Buttons ───────────────────────── */}
          <div className="hidden lg:flex items-center gap-2 xl:gap-3">
            <a
              href="tel:+919059634555"
              aria-label="Call Us"
              className="flex items-center gap-2 px-3 xl:px-4 py-2.5 rounded-full border border-border text-sm font-body font-medium text-foreground hover:border-foreground transition-colors"
            >
              <Phone size={16} /> <span className="hidden xl:inline">Call Us</span>
            </a>

            <Magnetic>
              <a
                href={`https://wa.me/919059634555?text=${auditMessage}`}
                target="_blank"
                rel="noopener noreferrer"
                className="block bg-primary text-white rounded-full px-6 py-3 text-sm font-body font-semibold hover:bg-primary/90 transition-colors"
              >
                Get Free Audit
              </a>
            </Magnetic>
          </div>

          {/* ── Mobile Controls ──────────────────────────────── */}
          <div className="flex lg:hidden items-center gap-2">
            <button
              onClick={() => setOpen((prev) => !prev)}
              aria-label={open ? "Close navigation menu" : "Open navigation menu"}
              aria-expanded={open}
              aria-controls="mobile-menu"
              className="p-2 rounded-full border border-border bg-white"
            >
              <AnimatePresence mode="wait" initial={false}>
                {open ? (
                  <motion.span
                    key="close"
                    initial={{ rotate: -90, opacity: 0 }}
                    animate={{ rotate: 0, opacity: 1 }}
                    exit={{ rotate: 90, opacity: 0 }}
                    transition={{ duration: 0.15 }}
                  >
                    <X size={20} />
                  </motion.span>
                ) : (
                  <motion.span
                    key="menu"
                    initial={{ rotate: 90, opacity: 0 }}
                    animate={{ rotate: 0, opacity: 1 }}
                    exit={{ rotate: -90, opacity: 0 }}
                    transition={{ duration: 0.15 }}
                  >
                    <Menu size={20} />
                  </motion.span>
                )}
              </AnimatePresence>
            </button>
          </div>

        </div>

       </div>
      </motion.header>

      {/* ── Mobile drawer (outside the header: its transform would break position:fixed) ── */}
      <AnimatePresence>
        {open && (
          <motion.aside
            id="mobile-menu"
            key="mobile-menu"
            role="dialog"
            aria-modal="true"
            aria-label="Navigation menu"
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ duration: 0.28, ease: [0.22, 1, 0.36, 1] }}
            className="fixed inset-y-0 right-0 z-[60] flex w-[min(88vw,22rem)] flex-col rounded-l-[24px] border-l border-border bg-white shadow-[-12px_0_40px_-16px_rgba(17,17,17,.25)] sm:w-96 lg:hidden"
          >
            {/* Brand row */}
            <div className="flex h-[60px] shrink-0 items-center justify-between border-b border-border px-5">
              <span className="font-display text-xl font-extrabold leading-none tracking-tight">
                <span className="text-foreground">Bleze</span>
                <span className="text-primary">X</span>
              </span>
              <button
                ref={closeRef}
                onClick={() => setOpen(false)}
                aria-label="Close menu"
                className="flex h-9 w-9 items-center justify-center rounded-full border border-border bg-white text-foreground transition-colors hover:border-foreground"
              >
                <X size={18} />
              </button>
            </div>

            {/* Links */}
            <nav
              data-lenis-prevent
              className="flex-1 overflow-y-auto overscroll-contain px-5 py-2"
              aria-label="Mobile navigation"
            >
              {navLinks.map((link) => {
                const rowCls =
                  "flex w-full items-center justify-between border-b border-border py-3.5 text-left font-display text-[1.0625rem] font-semibold text-foreground transition-colors hover:text-primary sm:text-lg";
                if (link.dropdown) {
                  return (
                    <div key={link.label}>
                      <button
                        onClick={() => setMobileServicesOpen((prev) => !prev)}
                        aria-expanded={mobileServicesOpen}
                        className={rowCls}
                      >
                        {link.label}
                        <ChevronDown
                          size={18}
                          className={`transition-transform duration-200 ${mobileServicesOpen ? "rotate-180" : ""}`}
                        />
                      </button>
                      <AnimatePresence initial={false}>
                        {mobileServicesOpen && (
                          <motion.div
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: "auto", opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            transition={{ duration: 0.2 }}
                            className="overflow-hidden"
                          >
                            <div className="my-2 ml-1 border-l border-border pl-4">
                              {link.dropdown.map((item) => (
                                <Link
                                  key={item.href}
                                  to={item.href}
                                  onClick={() => {
                                    setOpen(false);
                                    setMobileServicesOpen(false);
                                  }}
                                  className="block py-2.5 font-body text-[0.9375rem] text-foreground/70 transition-colors hover:text-primary"
                                >
                                  {item.label}
                                </Link>
                              ))}
                            </div>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  );
                }
                if (link.external) {
                  return (
                    <a
                      key={link.label}
                      href={link.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={() => setOpen(false)}
                      className={rowCls}
                    >
                      {link.label}
                      <ArrowUpRight size={18} className="text-primary" />
                    </a>
                  );
                }
                return (
                  <button key={link.label} onClick={() => handleNavClick(link.href)} className={rowCls}>
                    {link.label}
                  </button>
                );
              })}
            </nav>

            {/* Pinned footer: CTA + contact + socials */}
            <div className="shrink-0 border-t border-border bg-white px-5 pb-[calc(1rem+env(safe-area-inset-bottom))] pt-4">
              <a
                href={`https://wa.me/919059634555?text=${auditMessage}`}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setOpen(false)}
                className="block w-full rounded-full bg-primary px-5 py-3.5 text-center font-body text-sm font-semibold text-white transition-colors hover:bg-primary/90"
              >
                Get Free Audit
              </a>
              <div className="mt-4 flex items-center justify-between gap-3 text-foreground/70">
                <div className="flex min-w-0 flex-col text-[0.8125rem] font-body">
                  <a href="tel:+919059634555" className="flex min-h-9 items-center gap-2 transition-colors hover:text-primary">
                    <Phone size={14} className="shrink-0 text-primary" /> +91 9059634555
                  </a>
                  <a href="mailto:connect.blezex@gmail.com" className="flex min-h-9 items-center gap-2 transition-colors hover:text-primary">
                    <Mail size={14} className="shrink-0 text-primary" />
                    <span className="truncate">connect.blezex@gmail.com</span>
                  </a>
                </div>
              </div>
              <div className="mt-2 flex items-center gap-1">
                {socials.map(({ label, href, Icon }) => (
                  <a key={label} href={href} target="_blank" rel="noopener noreferrer" aria-label={label} className="-m-1 flex h-10 w-10 items-center justify-center transition-colors hover:text-primary">
                    <Icon size={18} />
                  </a>
                ))}
              </div>
            </div>
          </motion.aside>
        )}
      </AnimatePresence>
    </>
  );
};

export default Header;
