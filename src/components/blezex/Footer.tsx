import {
  Phone,
  Mail,
  Globe,
  MessageCircle,
  Linkedin,
  Instagram,
  Facebook,
  Youtube,
  Twitter
} from "lucide-react";
import { Link, useLocation, useNavigate } from "react-router-dom";

const linkCls =
  "relative inline-block text-sm font-body text-foreground/70 hover:text-primary transition-colors duration-200 after:absolute after:left-0 after:-bottom-0.5 after:h-px after:w-full after:origin-left after:scale-x-0 after:bg-primary after:transition-transform after:duration-300 hover:after:scale-x-100";
const iconCls = "text-foreground/70 hover:text-primary transition-colors duration-200";

const Footer = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    if (location.pathname === "/") {
      const el = document.querySelector(href);
      if (el) el.scrollIntoView({ behavior: "smooth" });
    } else {
      navigate("/" + href);
    }
  };

  return (
    <footer className="relative overflow-hidden bg-paper border-t border-border pt-12 pb-16 md:pb-0">
      <div className="container mx-auto px-6 lg:px-10">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-8">

          {/* Company */}
          <div className="col-span-2 md:col-span-1">
            <a
              href="#home"
              onClick={(e) => handleNavClick(e, "#home")}
              className="flex items-center gap-3 mb-4"
            >
              <img
                src="/logo.png"
                alt="BlezeX Logo"
                className="h-12 w-auto object-contain"
              />
              <span className="text-xl font-display font-extrabold leading-none tracking-tight">
                <span className="text-foreground">Bleze</span>
                <span className="text-primary">X</span>
              </span>
            </a>

            <p className="text-foreground/70 text-sm font-body leading-relaxed mb-4">
              Fast & Innovative Technology Solutions. Helping businesses grow with modern technology and intelligent automation.
            </p>

            {/* Social Media */}
            <div className="flex items-center gap-4">

              <a
                href="https://www.linkedin.com/company/blezex/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className={iconCls}
              >
                <Linkedin size={24} />
              </a>

              <a
                href="https://www.instagram.com/blezex_ai/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className={iconCls}
              >
                <Instagram size={24} />
              </a>

              <a
                href="https://www.facebook.com/profile.php?id=61586205163889"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
                className={iconCls}
              >
                <Facebook size={24} />
              </a>

              <a
                href="https://www.youtube.com/@BlezeX_Ai"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="YouTube"
                className={iconCls}
              >
                <Youtube size={24} />
              </a>

              <a
                href="https://x.com/x_blezex"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="X (Twitter)"
                className={iconCls}
              >
                <Twitter size={24} />
              </a>

              <a
                href="https://wa.me/919059634555"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="WhatsApp"
                className={iconCls}
              >
                <MessageCircle size={24} />
              </a>

            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-display text-sm font-semibold uppercase tracking-widest text-foreground mb-4">
              Quick Links
            </h4>

            <ul className="space-y-2">
              {["Home", "About", "Services", "Portfolio", "Packages", "Contact"].map((l) => (
                <li key={l}>
                  <a
                    href={`#${l.toLowerCase()}`}
                    onClick={(e) => handleNavClick(e, `#${l.toLowerCase()}`)}
                    className={linkCls}
                  >
                    {l}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-display text-sm font-semibold uppercase tracking-widest text-foreground mb-4">
              Services
            </h4>

            <ul className="space-y-2">
              {[
                { label: "Web Development", to: "/services/web-development" },
                { label: "AI & Automation", to: "/services/ai-automation" },
                { label: "Digital Marketing", to: "/services/digital-marketing" },
                { label: "Custom Software", to: "/services/custom-software-saas" },
                { label: "Creative & Branding", to: "/services/graphic-designing-branding" },
              ].map((s) => (
                <li key={s.to}>
                  <Link
                    to={s.to}
                    className={linkCls}
                  >
                    {s.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-display text-sm font-semibold uppercase tracking-widest text-foreground mb-4">
              Contact
            </h4>

            <ul className="space-y-3">

              <li className="flex items-center gap-3">
                <Phone size={16} className="shrink-0 text-primary" />
                <a
                  href="tel:+919059634555"
                  className={linkCls}
                >
                  +91 9059634555
                </a>
              </li>

              <li className="flex items-center gap-3">
                <Mail size={16} className="shrink-0 text-primary" />
                <a
                  href="mailto:connect.blezex@gmail.com"
                  className={linkCls}
                >
                  connect.blezex@gmail.com
                </a>
              </li>

              <li className="flex items-center gap-3">
                <Globe size={16} className="shrink-0 text-primary" />
                <a
                  href="https://www.blezex.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={linkCls}
                >
                  www.blezex.com
                </a>
              </li>

              <li className="flex items-center gap-3">
                <MessageCircle size={16} className="shrink-0 text-primary" />
                <a
                  href="https://wa.me/919059634555"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={linkCls}
                >
                  WhatsApp
                </a>
              </li>

            </ul>
          </div>

        </div>

        {/* Wordmark */}
        <div
          aria-hidden="true"
          className="select-none text-center font-display font-extrabold text-[14vw] md:text-[8.5rem] leading-none text-[#111]/[0.06] -mb-[0.12em]"
        >
          BlezeX
        </div>

        {/* Bottom */}
        <div className="border-t border-dashed border-border py-4 text-center relative bg-paper">
          <p className="text-sm text-foreground/70 font-body">
            © 2026{" "}
            <span className="font-display font-semibold">
              <span className="text-foreground">Bleze</span>
              <span className="text-primary">X</span>
            </span>. All rights reserved.
          </p>
        </div>

      </div>
    </footer>
  );
};

export default Footer;
