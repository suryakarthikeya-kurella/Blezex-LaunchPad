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

            <p className="text-black dark:text-gray-300 text-sm font-body leading-relaxed mb-4">
              Fast & Innovative Technology Solutions. Helping businesses grow with modern technology and intelligent automation.
            </p>

            {/* Social Media */}
            <div className="flex items-center gap-4">

              <a
                href="https://www.linkedin.com/in/blezex/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-black dark:text-gray-300 hover:text-orange-500 dark:hover:text-orange-400 transition-colors duration-200"
              >
                <Linkedin size={24} />
              </a>

              <a
                href="https://www.instagram.com/blezex_ai/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-black dark:text-gray-300 hover:text-orange-500 dark:hover:text-orange-400 transition-colors duration-200"
              >
                <Instagram size={24} />
              </a>

              <a
                href="https://www.facebook.com/profile.php?id=61586205163889"
                target="_blank"
                rel="noopener noreferrer"
                className="text-black dark:text-gray-300 hover:text-orange-500 dark:hover:text-orange-400 transition-colors duration-200"
              >
                <Facebook size={24} />
              </a>

              <a
                href="https://www.youtube.com/blezex"
                target="_blank"
                rel="noopener noreferrer"
                className="text-black dark:text-gray-300 hover:text-orange-500 dark:hover:text-orange-400 transition-colors duration-200"
              >
                <Youtube size={24} />
              </a>

              <a
                href="https://x.com/x_blezex"
                target="_blank"
                rel="noopener noreferrer"
                className="text-black dark:text-gray-300 hover:text-orange-500 dark:hover:text-orange-400 transition-colors duration-200"
              >
                <Twitter size={24} />
              </a>

              <a
                href="https://wa.me/918099655099"
                target="_blank"
                rel="noopener noreferrer"
                className="text-black dark:text-gray-300 hover:text-green-500 transition-colors duration-200"
              >
                <MessageCircle size={24} />
              </a>

            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-heading font-bold text-black dark:text-white mb-4">
              Quick Links
            </h4>

            <ul className="space-y-2">
              {["Home", "About", "Services", "Portfolio", "Packages", "Contact"].map((l) => (
                <li key={l}>
                  <a
                    href={`#${l.toLowerCase()}`}
                    className="text-sm font-body text-black dark:text-gray-300 hover:text-orange-500 dark:hover:text-orange-400 transition-colors duration-200"
                  >
                    {l}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-heading font-bold text-black dark:text-white mb-4">
              Services
            </h4>

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
                    className="text-sm font-body text-black dark:text-gray-300 hover:text-orange-500 dark:hover:text-orange-400 transition-colors duration-200"
                  >
                    {s}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-heading font-bold text-black dark:text-white mb-4">
              Contact
            </h4>

            <ul className="space-y-3">

              <li className="flex items-center gap-3">
                <Phone size={16} className="text-primary" />
                <a
                  href="tel:+918099655099"
                  className="text-sm font-body text-black dark:text-gray-300 hover:text-orange-500 dark:hover:text-orange-400 transition-colors duration-200"
                >
                  +91 8099655099
                </a>
              </li>

              <li className="flex items-center gap-3">
                <Mail size={16} className="text-primary" />
                <a
                  href="mailto:blezex.vibe@gmail.com"
                  className="text-sm font-body text-black dark:text-gray-300 hover:text-orange-500 dark:hover:text-orange-400 transition-colors duration-200"
                >
                  blezex.vibe@gmail.com
                </a>
              </li>

              <li className="flex items-center gap-3">
                <Globe size={16} className="text-primary" />
                <a
                  href="https://www.blezex.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm font-body text-black dark:text-gray-300 hover:text-orange-500 dark:hover:text-orange-400 transition-colors duration-200"
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
                  className="text-sm font-body text-black dark:text-gray-300 hover:text-orange-500 dark:hover:text-orange-400 transition-colors duration-200"
                >
                  WhatsApp
                </a>
              </li>

            </ul>
          </div>

        </div>

        {/* Bottom */}
        <div className="border-t border-border pt-6 text-center">
          <p className="text-sm text-black dark:text-gray-300 font-body">
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