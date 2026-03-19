import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import { Send, Phone, Mail, MapPin, Clock, MessageCircle } from "lucide-react";

const serviceOptions = [
  "Web Development",
  "Mobile App Development",
  "Custom Software & SaaS",
  "AI & Automation",
  "Digital Marketing",
  "Creative & Branding",
  "Support & Maintenance",
];

const budgetOptions = [
  "Under ₹25,000",
  "₹25,000 - ₹50,000",
  "₹50,000 - ₹1,00,000",
  "₹1,00,000 - ₹5,00,000",
  "₹5,00,000+",
];

const Contact = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    service: "",
    budget: "",
    details: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const name = encodeURIComponent(form.name);
    const company = encodeURIComponent(form.company || "N/A");
    const service = encodeURIComponent(form.service);
    const email = encodeURIComponent(form.email);
    const phone = encodeURIComponent(form.phone);
    const budget = encodeURIComponent(form.budget || "Not specified");
    const details = encodeURIComponent(form.details);

    const msg = `Hi BlezeX! I'm ${name} from ${company}.%0A%0AService: ${service}%0ABudget: ${budget}%0AEmail: ${email}%0APhone: ${phone}%0A%0ADetails: ${details}`;

    window.open(`https://wa.me/918099655099?text=${msg}`, "_blank");
  };

  const update = (field: string, value: string) =>
    setForm({ ...form, [field]: value });

  const inputClass =
    "w-full rounded-xl border border-border bg-card px-4 py-3 text-sm font-body text-foreground placeholder:text-muted-foreground outline-none focus:ring-2 focus:ring-primary/50 transition-colors";

  return (
    <section id="contact" className="py-24" ref={ref}>
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-heading font-extrabold mb-4">
            Get In <span className="gradient-text">Touch</span>
          </h2>

          <p className="text-muted-foreground max-w-xl mx-auto font-body">
            Ready to start your project? Reach out to us today.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.5 }}
            className="space-y-6"
          >

            <h3 className="text-2xl font-heading font-bold text-foreground">
              Contact Information
            </h3>

            <div className="space-y-5">

              {/* Phone Numbers */}
              <div className="flex items-start gap-4">

                <div className="w-10 h-10 rounded-xl gradient-bg flex items-center justify-center flex-shrink-0">
                  <Phone size={18} className="text-primary-foreground" />
                </div>

                <div>
                  <p className="text-sm font-body text-primary font-medium mb-2">
                    Phone
                  </p>

                  <div className="space-y-1 font-heading font-semibold">

                    <a
                      href="tel:+918099655099"
                      className="block text-foreground hover:text-primary transition-colors"
                    >
                      Surya Karthikeya — +91 8099655099
                    </a>

                    <a
                      href="tel:+919573308774"
                      className="block text-foreground hover:text-primary transition-colors"
                    >
                      Durga Prasad — +91 9573308774
                    </a>

                    <a
                      href="tel:+917660900361"
                      className="block text-foreground hover:text-primary transition-colors"
                    >
                      Hari Kumar — +91 7660900361
                    </a>

                  </div>
                </div>
              </div>

              {/* Email */}
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-xl gradient-bg flex items-center justify-center flex-shrink-0">
                  <Mail size={18} className="text-primary-foreground" />
                </div>

                <div>
                  <p className="text-sm font-body text-primary font-medium">
                    Email
                  </p>

                  <a
                    href="mailto:blezexvibe@gmail.com"
                    className="text-foreground font-heading font-semibold hover:text-primary transition-colors"
                  >
                    blezex.vibe@gmail.com
                  </a>
                </div>
              </div>

              {/* Location */}
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-xl gradient-bg flex items-center justify-center flex-shrink-0">
                  <MapPin size={18} className="text-primary-foreground" />
                </div>

                <div>
                  <p className="text-sm font-body text-primary font-medium">
                    Locations
                  </p>

                  <p className="text-foreground font-heading font-semibold">
                    Visakhapatnam | Hyderabad
                  </p>
                </div>
              </div>

              {/* Working Hours */}
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-xl gradient-bg flex items-center justify-center flex-shrink-0">
                  <Clock size={18} className="text-primary-foreground" />
                </div>

                <div>
                  <p className="text-sm font-body text-primary font-medium">
                    Working Hours
                  </p>

                  <p className="text-foreground font-heading font-semibold">
                    Mon-Sat: 9:00 AM - 6:00 PM
                  </p>
                </div>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="space-y-3 pt-2">

              <a
                href="https://wa.me/918099655099"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 px-5 py-3 rounded-xl border border-border bg-card hover:bg-hover-surface transition-colors font-body text-foreground"
              >
                <MessageCircle size={20} className="text-green-500" />
                Chat on WhatsApp
              </a>

              <a
                href="tel:+918099655099"
                className="flex items-center gap-3 px-5 py-3 rounded-xl border border-border bg-card hover:bg-hover-surface transition-colors font-body text-foreground"
              >
                <Phone size={20} className="text-primary" />
                Quick Call
              </a>

            </div>

            {/* Map */}
            <div className="rounded-2xl overflow-hidden border border-border mt-4">
              <iframe
                title="BlezeX Location"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d243647.31700652826!2d83.09654509550049!3d17.72312795498498!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a39431389e6973f%3A0x92d9c20395498468!2sVisakhapatnam%2C%20Andhra%20Pradesh!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin"
                width="100%"
                height="200"
                style={{ border: 0 }}
                loading="lazy"
              />
            </div>

          </motion.div>

          {/* FORM SECTION (UNCHANGED) */}

        </div>
      </div>
    </section>
  );
};

export default Contact;