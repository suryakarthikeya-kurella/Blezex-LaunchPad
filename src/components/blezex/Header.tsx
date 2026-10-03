import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Phone, Mail, ChevronDown, ArrowUpRight, Linkedin, Instagram, Facebook, Youtube, Twitter } from "lucide-react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import Magnetic from "@/components/motion/Magnetic";

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

  /* Close menu on route change */
  useEffect(() => {
    setOpen(false);
    setMobileServicesOpen(false);
  }, [location.pathname]);

  /* Scroll to hash on page load or location change */
  useEffect(() => {
    // Check if page was loaded via a browser reload
    const navigationEntry = window.performance?.getEntriesByType("navigation")[0] as
      | PerformanceNavigationTiming
      | undefined;
    const legacyNavigation = window.performance?.navigation;
    const isReload =
      legacyNavigation?.type === 1 || navigationEntry?.type === "reload";

    if (isInitialMount.current) {
      isInitialMount.current = false;
      if (isReload) {
        if (window.location.hash) {
          window.history.replaceState(null, "", window.location.pathname);
        }
        window.scrollTo(0, 0);
        return;
      }
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

  /* Close desktop dropdown & mobile menu on outside click / touch */
  useEffect(() => {
    const handler = (e: MouseEvent | TouchEvent) => {
      if (menuRef.current && !menuRef.current.contains(e.target as Node)) {
        setOpen(false);
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
            className="fixed inset-0 z-40 bg-foreground/20 lg:hidden"
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
              <a href="mailto:connect.blezex@gmail.com" tabIndex={scrolled ? -1 : undefined} className="flex items-center gap-1.5 hover:text-primary transition-colors">
                <Mail size={13} className="text-primary" /> connect.blezex@gmail.com
              </a>
              <a href="tel:+919059634555" tabIndex={scrolled ? -1 : undefined} className="flex items-center gap-1.5 hover:text-primary transition-colors">
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
                  className="text-foreground/70 hover:text-primary transition-colors"
                >
                  <Icon size={14} />
                </a>
              ))}
            </div>
          </div>
        </div>

        <div
          className={`flex items-center justify-between px-4 md:px-6 transition-[height] duration-300 motion-reduce:transition-none ${
            scrolled || open ? "h-[56px] md:h-[60px]" : "h-[60px] md:h-16"
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
                src="/logo.png"
                alt="BlezeX Logo"
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
                src="/logo.png"
                alt="BlezeX Logo"
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
                            <ArrowUpRight size={14} className="text-primary opacity-0 -translate-x-1 transition-all duration-200 group-hover:opacity-100 group-hover:translate-x-0" />
                          </Link>
                        ))}
                       </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
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

        {/* ── Mobile Menu Panel ────────────────────────────────── */}
        <AnimatePresence>
          {open && (
            <motion.div
              id="mobile-menu"
              key="mobile-menu"
              initial={{ opacity: 0, y: -8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              transition={{ duration: 0.22, ease: "easeOut" }}
              className="lg:hidden absolute inset-x-0 top-full mt-2 max-h-[calc(100dvh-96px)] overflow-hidden rounded-[20px] border border-border bg-white shadow-[0_8px_30px_-12px_rgba(17,17,17,.15)]"
            >
              <nav
                data-lenis-prevent
                className="flex max-h-[calc(100dvh-96px)] flex-col px-4 pb-6 overflow-y-auto overscroll-contain"
                aria-label="Mobile navigation"
              >
                {navLinks.map((link) =>
                  link.dropdown ? (
                    /* Services accordion on mobile */
                    <div key={link.label}>
                      <button
                        onClick={() => setMobileServicesOpen((prev) => !prev)}
                        aria-expanded={mobileServicesOpen}
                        className="w-full flex items-center justify-between px-2 py-4 border-b border-border font-display text-3xl font-semibold text-foreground hover:text-primary transition-colors text-left"
                      >
                        {link.label}
                        <motion.span
                          animate={{ rotate: mobileServicesOpen ? 180 : 0 }}
                          transition={{ duration: 0.2 }}
                        >
                          <ChevronDown size={22} />
                        </motion.span>
                      </button>

                      <AnimatePresence>
                        {mobileServicesOpen && (
                          <motion.div
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: "auto", opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            transition={{ duration: 0.2 }}
                            className="overflow-hidden pl-4"
                          >
                            {link.dropdown.map((item) => (
                              <Link
                                key={item.href}
                                to={item.href}
                                onClick={() => {
                                  setOpen(false);
                                  setMobileServicesOpen(false);
                                }}
                                className="w-full text-left block px-2 py-3 text-base font-body text-foreground/70 hover:text-primary transition-colors"
                              >
                                {item.label}
                              </Link>
                            ))}
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  ) : (
                    <button
                      key={link.label}
                      onClick={() => handleNavClick(link.href)}
                      className="w-full text-left px-2 py-4 border-b border-border font-display text-3xl font-semibold text-foreground hover:text-primary transition-colors"
                    >
                      {link.label}
                    </button>
                  )
                )}

                <div className="mt-4" />

                {/* Call Us */}
                <a
                  href="tel:+919059634555"
                  onClick={() => setOpen(false)}
                  className="flex items-center gap-2 px-2 py-3 font-body font-medium text-foreground hover:text-primary transition-colors"
                >
                  <Phone size={16} className="text-primary" /> Call Us
                </a>

                {/* Get Free Audit */}
                <a
                  href={`https://wa.me/919059634555?text=${auditMessage}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => setOpen(false)}
                  className="mt-2 px-5 py-3.5 rounded-full bg-primary text-white text-center text-sm font-body font-semibold hover:bg-primary/90 transition-colors"
                >
                  Get Free Audit
                </a>

                {/* Contact + socials */}
                <div className="mt-4 flex flex-col gap-2 border-t border-border pt-4 text-sm font-body text-foreground/70">
                  <a href="mailto:connect.blezex@gmail.com" className="flex items-center gap-2 px-2 hover:text-primary">
                    <Mail size={16} className="text-primary" /> connect.blezex@gmail.com
                  </a>
                  <div className="mt-2 flex items-center gap-4 px-2">
                    {socials.map(({ label, href, Icon }) => (
                      <a key={label} href={href} target="_blank" rel="noopener noreferrer" aria-label={label} className="hover:text-primary">
                        <Icon size={20} />
                      </a>
                    ))}
                  </div>
                </div>

              </nav>
            </motion.div>
          )}
        </AnimatePresence>
       </div>
      </motion.header>
    </>
  );
};

export default Header;
