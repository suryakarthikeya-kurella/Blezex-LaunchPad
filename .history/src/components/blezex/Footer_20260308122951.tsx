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

const Footer = () => {
  return (
    <footer className="bg-section-alt border-t border-border py-16">
      <div className="container mx-auto px-4">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">

          {/* Company */}
          <div>
            <a href="#home" className="flex items-center gap-3 mb-4">
              <img
                src="/logo.png"
                alt="BlezeX Logo"
                className="h-12 w-auto object-contain"
              />
              <span className="text-xl font-heading font-semibold leading-none">
                <span className="text-black dark:text-white">Bleze</span>
                <span className="text-orange-500">X</span>
              </span>
            </a>

            <p className="text-muted-foreground text-sm font-body leading-relaxed mb-4">
              Fast & Innovative Technology Solutions. Helping businesses grow with modern technology and intelligent automation.
            </p>

            {/* Social Media */}
            <div className="flex items-center gap-4">
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors">
                <Linkedin size={24} />
              </a>

              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors">
                <Instagram size={24} />
              </a>

              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors">
                <Facebook size={24} />
              </a>

              <a href="https://youtube.com" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors">
                <Youtube size={24} />
              </a>

              <a href="https://x.com" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors">
                <Twitter size={24} />
              </a>

              <a href="https://wa.me/918099655099" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-green-500 transition-colors">
                <MessageCircle size={24} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-heading font-bold text-foreground mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {["Home", "About", "Services", "Portfolio", "Packages", "Contact"].map((l) => (
                <li key={l}>
                  <a
                    href={`#${l.toLowerCase()}`}
                    className="text-sm text-muted-foreground font-body hover:text-primary transition-colors"
                  >
                    {l}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-heading font-bold text-foreground mb-4">Services</h4>
            <ul className="space-y-2">
              {[
                "Web Development",
                "Mobile Apps",
                "AI & Automation",
                "Digital Marketing",
                "Custom Software",
                "Creative & Branding",
              ].map((s) => (
                <li key={s}>
                  <a
                    href="#services"
                    className="text-sm text-muted-foreground font-body hover:text-primary transition-colors"
                  >
                    {s}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-heading font-bold text-foreground mb-4">Contact</h4>
            <ul className="space-y-3">

              <li className="flex items-center gap-3">
                <Phone size={16} className="text-primary" />
                <a
                  href="tel:+918099655099"
                  className="text-sm text-muted-foreground font-body hover:text-primary transition-colors"
                >
                  +91 8099655099
                </a>
              </li>

              <li className="flex items-center gap-3">
                <Mail size={16} className="text-primary" />
                <a
                  href="mailto:lezex.com"
                  className="text-sm text-muted-foreground font-body hover:text-primary transition-colors"
                >
                  contact@blezex.com
                </a>
              </li>

              <li className="flex items-center gap-3">
                <Globe size={16} className="text-primary" />
                <a
                  href="https://www.blezex.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-muted-foreground font-body hover:text-primary transition-colors"
                >
                  www.blezex.com
                </a>
              </li>

              <li className="flex items-center gap-3">
                <MessageCircle size={16} className="text-primary" />
                <a
                  href="https://wa.me/918099655099"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-muted-foreground font-body hover:text-primary transition-colors"
                >
                  WhatsApp
                </a>
              </li>

            </ul>
          </div>

        </div>

        <div className="border-t border-border pt-6 text-center">
          <p className="text-sm text-muted-foreground font-body">
            © 2026{" "}
            <span className="font-heading font-semibold">
              <span className="text-black dark:text-white">Bleze</span>
              <span className="text-orange-500">X</span>
            </span>. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;