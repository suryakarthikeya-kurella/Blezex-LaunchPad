import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Sun, Moon, Menu, X, Phone, ChevronDown, Briefcase } from "lucide-react";
import { Link, useLocation, useNavigate } from "react-router-dom";

/* ─── Nav link data ──────────────────────────────────────────── */
const navLinks = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  {
    label: "Services",
    href: "#services",
    dropdown: [
      "Web Development",
      "Mobile Apps",
      "AI & Automation",
      "Software & SaaS",
      "Digital Marketing",
      "Creative & Branding",
    ],
  },
  { label: "Portfolio", href: "#portfolio" },
  { label: "Packages", href: "#packages" },
  { label: "Contact", href: "#contact" },
];

/* ─── Helper: navigate to a hash section from any page ──────── */
function useHashNav() {
  const navigate = useNavigate();
  const location = useLocation();

  return (hash: string) => {
    if (location.pathname === "/") {
      // Already on home — just scroll
      const el = document.querySelector(hash);
      if (el) el.scrollIntoView({ behavior: "smooth" });
    } else {
      // Navigate home first, then browser will anchor-scroll
      navigate("/" + hash);
    }
  };
}

/* ─── Component ──────────────────────────────────────────────── */
const Header = () => {
  const [dark, setDark] = useState(false);
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

  /* Theme init */
  useEffect(() => {
    const saved = localStorage.getItem("theme");
    const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
    const isDark = saved ? saved === "dark" : prefersDark;
    setDark(isDark);
    document.documentElement.classList.toggle("dark", isDark);
  }, []);

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
    const isReload = window.performance && 
      (window.performance.navigation.type === 1 || 
       window.performance.getEntriesByType("navigation")[0]?.type === "reload");

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

  /* Close mobile menu on Escape */
  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    document.addEventListener("keydown", handler);
    return () => document.removeEventListener("keydown", handler);
  }, []);

  const toggleTheme = () => {
    const next = !dark;
    setDark(next);
    document.documentElement.classList.toggle("dark", next);
    localStorage.setItem("theme", next ? "dark" : "light");
  };

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
            className="fixed inset-0 z-40 bg-black/30 backdrop-blur-sm lg:hidden"
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
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled || open ? "glass shadow-lg" : "bg-transparent"
        }`}
      >
        <div className="container mx-auto flex items-center justify-between px-4 py-4">

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
                className="h-12 w-auto object-contain drop-shadow-[0_8px_15px_rgba(0,0,0,0.35)]"
              />
              <span className="text-2xl md:text-3xl font-heading font-semibold leading-none">
                <span className="text-black dark:text-white">Bleze</span>
                <span className="text-[#FF8A00]">X</span>
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
                className="h-12 w-auto object-contain drop-shadow-[0_8px_15px_rgba(0,0,0,0.35)]"
              />
              <span className="text-2xl md:text-3xl font-heading font-semibold leading-none">
                <span className="text-black dark:text-white">Bleze</span>
                <span className="text-[#FF8A00]">X</span>
              </span>
            </Link>
          )}

          {/* ── Desktop Nav ──────────────────────────────────── */}
          <nav className="hidden lg:flex items-center gap-8" aria-label="Main navigation">
            {navLinks.map((link) =>
              link.dropdown ? (
                /* Services with hover dropdown */
                <div
                  key={link.label}
                  className="relative"
                  onMouseEnter={() => setDropdownOpen(true)}
                  onMouseLeave={() => setDropdownOpen(false)}
                >
                  <button
                    onClick={() => handleNavClick(link.href)}
                    className="flex items-center gap-1 font-heading font-semibold text-base text-foreground hover:text-primary transition-colors"
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
                        className="absolute top-full left-0 mt-2 w-56 glass rounded-xl p-2 shadow-xl"
                        role="menu"
                      >
                        {link.dropdown.map((item) => (
                          <a
                            key={item}
                            href="#services"
                            role="menuitem"
                            onClick={(e) => { e.preventDefault(); handleNavClick("#services"); setDropdownOpen(false); }}
                            className="block px-4 py-2 rounded-lg text-sm font-body text-body-text hover:bg-hover-surface transition-colors"
                          >
                            {item}
                          </a>
                        ))}
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              ) : (
                /* Regular nav link */
                <button
                  key={link.label}
                  onClick={() => handleNavClick(link.href)}
                  className="font-heading font-semibold text-base text-foreground hover:text-primary transition-colors bg-transparent border-0 cursor-pointer"
                >
                  {link.label}
                </button>
              )
            )}

            {/* Careers */}
            <Link
              to="/careers"
              className="flex items-center gap-1.5 font-heading font-semibold text-base text-foreground hover:text-primary transition-colors"
            >
              <Briefcase size={15} className="text-primary" />
              Careers
            </Link>
          </nav>

          {/* ── Desktop Action Buttons ───────────────────────── */}
          <div className="hidden lg:flex items-center gap-3">
            <a
              href="tel:+918099655099"
              className="flex items-center gap-2 px-4 py-2 rounded-xl border border-border text-sm font-heading font-semibold text-foreground hover:border-primary/50 transition-colors"
            >
              <Phone size={16} /> Call Us
            </a>

            <a
              href={`https://wa.me/918099655099?text=${auditMessage}`}
              target="_blank"
              rel="noopener noreferrer"
              className="gradient-bg px-5 py-2 rounded-xl text-sm font-heading font-semibold text-primary-foreground glow-hover transition-all"
            >
              Get Free Audit
            </a>

            <button
              onClick={toggleTheme}
              aria-label={dark ? "Switch to light mode" : "Switch to dark mode"}
              className="p-2 rounded-xl border border-border hover:border-primary/50 transition-colors"
            >
              {dark ? <Sun size={18} /> : <Moon size={18} />}
            </button>
          </div>

          {/* ── Mobile Controls ──────────────────────────────── */}
          <div className="flex lg:hidden items-center gap-2">
            <button
              onClick={toggleTheme}
              aria-label={dark ? "Switch to light mode" : "Switch to dark mode"}
              className="p-2 rounded-xl border border-border"
            >
              {dark ? <Sun size={18} /> : <Moon size={18} />}
            </button>

            <button
              onClick={() => setOpen((prev) => !prev)}
              aria-label={open ? "Close navigation menu" : "Open navigation menu"}
              aria-expanded={open}
              aria-controls="mobile-menu"
              className="p-2 rounded-xl border border-border"
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
              className="lg:hidden glass border-t border-border"
            >
              <nav
                className="flex flex-col p-4 gap-1 max-h-[calc(100vh-80px)] overflow-y-auto"
                aria-label="Mobile navigation"
              >
                {navLinks.map((link) =>
                  link.dropdown ? (
                    /* Services accordion on mobile */
                    <div key={link.label}>
                      <button
                        onClick={() => setMobileServicesOpen((prev) => !prev)}
                        aria-expanded={mobileServicesOpen}
                        className="w-full flex items-center justify-between px-4 py-3 rounded-xl font-heading font-semibold text-foreground hover:bg-hover-surface transition-colors text-left"
                      >
                        {link.label}
                        <motion.span
                          animate={{ rotate: mobileServicesOpen ? 180 : 0 }}
                          transition={{ duration: 0.2 }}
                        >
                          <ChevronDown size={16} />
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
                              <button
                                key={item}
                                onClick={() => handleNavClick("#services")}
                                className="w-full text-left block px-4 py-2.5 rounded-lg text-sm font-body text-muted-foreground hover:text-foreground hover:bg-hover-surface transition-colors"
                              >
                                {item}
                              </button>
                            ))}
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  ) : (
                    <button
                      key={link.label}
                      onClick={() => handleNavClick(link.href)}
                      className="w-full text-left px-4 py-3 rounded-xl font-heading font-semibold text-foreground hover:bg-hover-surface transition-colors"
                    >
                      {link.label}
                    </button>
                  )
                )}

                {/* Careers */}
                <Link
                  to="/careers"
                  onClick={() => setOpen(false)}
                  className="flex items-center gap-2 px-4 py-3 rounded-xl font-heading font-semibold text-foreground hover:bg-hover-surface transition-colors"
                >
                  <Briefcase size={15} className="text-primary" />
                  Careers
                </Link>

                {/* Divider */}
                <div className="my-2 border-t border-border" />

                {/* Call Us */}
                <a
                  href="tel:+918099655099"
                  onClick={() => setOpen(false)}
                  className="flex items-center gap-2 px-4 py-3 rounded-xl font-heading font-semibold text-foreground hover:bg-hover-surface transition-colors"
                >
                  <Phone size={16} className="text-primary" /> Call Us
                </a>

                {/* Get Free Audit */}
                <a
                  href={`https://wa.me/918099655099?text=${auditMessage}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => setOpen(false)}
                  className="gradient-bg mt-1 px-5 py-3 rounded-xl text-center text-sm font-heading font-semibold text-primary-foreground"
                >
                  Get Free Audit
                </a>

              </nav>
            </motion.div>
          )}
        </AnimatePresence>

      </motion.header>
    </>
  );
};

export default Header;