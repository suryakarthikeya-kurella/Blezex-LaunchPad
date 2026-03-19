import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Sun, Moon, Menu, X, Phone, ChevronDown } from "lucide-react";
import logo from "../assets/logo.png";

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

const Header = () => {
  const [dark, setDark] = useState(false);
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);

  useEffect(() => {
    const saved = localStorage.getItem("theme");
    const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
    const isDark = saved ? saved === "dark" : prefersDark;
    setDark(isDark);
    document.documentElement.classList.toggle("dark", isDark);
  }, []);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const toggleTheme = () => {
    const next = !dark;
    setDark(next);
    document.documentElement.classList.toggle("dark", next);
    localStorage.setItem("theme", next ? "dark" : "light");
  };

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "glass shadow-lg" : "bg-transparent"
      }`}
    >
      <div className="container mx-auto flex items-center justify-between px-4 py-4">

        {/* Logo */}
        <a href="#home" className="flex items-center gap-2">
          <img
            src="/logo.png"
            alt="BlezeX Logo"
            className="h-10 w-auto"
          />
          <span className="text-xl font-heading font-extrabold gradient-text">
            BlezeX
          </span>
        </a>

        {/* Desktop Nav */}
        <nav className="hidden lg:flex items-center gap-8">
          {navLinks.map((link) =>
            link.dropdown ? (
              <div
                key={link.label}
                className="relative"
                onMouseEnter={() => setDropdownOpen(true)}
                onMouseLeave={() => setDropdownOpen(false)}
              >
                <a
                  href={link.href}
                  className="flex items-center gap-1 font-heading font-semibold text-sm text-foreground hover:text-primary transition-colors"
                >
                  {link.label} <ChevronDown size={14} />
                </a>
                <AnimatePresence>
                  {dropdownOpen && (
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 10 }}
                      className="absolute top-full left-0 mt-2 w-56 glass rounded-xl p-2 shadow-xl"
                    >
                      {link.dropdown.map((item) => (
                        <a
                          key={item}
                          href="#services"
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
              <a
                key={link.label}
                href={link.href}
                className="font-heading font-semibold text-sm text-foreground hover:text-primary transition-colors"
              >
                {link.label}
              </a>
            )
          )}
        </nav>

        <div className="hidden lg:flex items-center gap-3">
          <a
            href="tel:+918099655099"
            className="flex items-center gap-2 px-4 py-2 rounded-xl border border-border text-sm font-heading font-semibold text-foreground hover:border-primary/50 transition-colors"
          >
            <Phone size={16} /> Call Us
          </a>
          <a
            href="https://wa.me/918099655099"
            target="_blank"
            rel="noopener noreferrer"
            className="gradient-bg px-5 py-2 rounded-xl text-sm font-heading font-semibold text-primary-foreground glow-hover transition-all"
          >
            Get Free Consultation
          </a>
          <button
            onClick={toggleTheme}
            className="p-2 rounded-xl border border-border hover:border-primary/50 transition-colors"
            aria-label="Toggle theme"
          >
            {dark ? <Sun size={18} /> : <Moon size={18} />}
          </button>
        </div>

        {/* Mobile */}
        <div className="flex lg:hidden items-center gap-2">
          <button onClick={toggleTheme} className="p-2 rounded-xl border border-border" aria-label="Toggle theme">
            {dark ? <Sun size={18} /> : <Moon size={18} />}
          </button>
          <button onClick={() => setOpen(!open)} className="p-2 rounded-xl border border-border" aria-label="Menu">
            {open ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="lg:hidden glass border-t border-border overflow-hidden"
          >
            <nav className="flex flex-col p-4 gap-1">
              {navLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className="px-4 py-3 rounded-xl font-heading font-semibold text-foreground hover:bg-hover-surface transition-colors"
                >
                  {link.label}
                </a>
              ))}
              <a
                href="https://wa.me/918099655099"
                target="_blank"
                rel="noopener noreferrer"
                className="gradient-bg mt-2 px-5 py-3 rounded-xl text-center text-sm font-heading font-semibold text-primary-foreground"
              >
                Get Free Consultation
              </a>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
};

export default Header;