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
  "Under ₹10,000",
  "₹10,000 - ₹18,000",
  "₹18,000 - ₹30,000",
  "₹30,000 - ₹50,000",
  "₹50,000 - ₹75,000",
  "₹75,000+",
];

const contacts = [
  { name: "Surya", phone: "8099655099" },
  { name: "Raju Mokara", phone: "9885803448" },
  { name: "", phone: "9885803448" },
  { name: "Durga Prasad", phone: "9573308774" },
  { name: "Hari Kumar", phone: "7660900361" },
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

  const update = (field, value) => {
    setForm({ ...form, [field]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const msg = `
Hi BlezeX 👋

Name: ${form.name}
Company: ${form.company || "N/A"}

Service: ${form.service}
Budget: ${form.budget || "Not specified"}

Email: ${form.email}
Phone: ${form.phone}

Project Details:
${form.details}
`;

    const encodedMsg = encodeURIComponent(msg);

    window.open(
      `https://wa.me/918099655099?text=${encodedMsg}`,
      "_blank"
    );
  };

  const inputClass =
    "w-full rounded-xl border border-border bg-card px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground outline-none focus:ring-2 focus:ring-primary/50 transition";

  return (
    <>
      {/* CONTACT SECTION */}
      <section id="contact" className="py-24" ref={ref}>
        <div className="container mx-auto px-4">

          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-extrabold mb-4">
              Start Your <span className="gradient-text">Project</span> With Us
            </h2>

            <p className="text-muted-foreground max-w-xl mx-auto">
              Share your project details and our team will get back to you with
              the best solution for your business.
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">

            {/* CONTACT INFO */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              className="space-y-6"
            >

              <h3 className="text-2xl font-bold">Contact Information</h3>

              {/* Phone */}
              <div className="space-y-2">
                <p className="font-semibold text-primary flex items-center gap-2">
                  <Phone size={18}/> Phone
                </p>

                {contacts.map((c) => (
                  <a
                    key={c.phone}
                    href={`tel:${c.phone}`}
                    className="block hover:text-primary transition"
                  >
                    👤 {c.name} • 📞 {c.phone}
                  </a>
                ))}
              </div>

              {/* Email */}
              <div>
                <p className="font-semibold text-primary flex items-center gap-2">
                  <Mail size={18}/> Email
                </p>

                <a
                  href="mailto:blezex.vibe@gmail.com"
                  className="hover:text-primary"
                >
                  blezex.vibe@gmail.com
                </a>
              </div>

              {/* Location */}
              <div>
                <p className="font-semibold text-primary flex items-center gap-2">
                  <MapPin size={18}/> Location
                </p>
                Hyderabad • Visakhapatnam
              </div>

              {/* Hours */}
              <div>
                <p className="font-semibold text-primary flex items-center gap-2">
                  <Clock size={18}/> Working Hours
                </p>
                Mon – Sat: 9:00 AM – 6:00 PM <br/>
                24/7 WhatsApp Support
              </div>

            </motion.div>

            {/* FORM */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
            >

              <div className="glass rounded-2xl p-8">

                <h3 className="text-2xl font-bold mb-6">
                  Send Your Requirements
                </h3>

                <form onSubmit={handleSubmit} className="space-y-5">

                  <div className="grid sm:grid-cols-2 gap-4">

                    <input
                      required
                      placeholder="Full Name"
                      value={form.name}
                      onChange={(e)=>update("name",e.target.value)}
                      className={inputClass}
                    />

                    <input
                      required
                      type="email"
                      placeholder="Email"
                      value={form.email}
                      onChange={(e)=>update("email",e.target.value)}
                      className={inputClass}
                    />

                  </div>

                  <div className="grid sm:grid-cols-2 gap-4">

                    <input
                      required
                      placeholder="Phone Number"
                      value={form.phone}
                      onChange={(e)=>update("phone",e.target.value)}
                      className={inputClass}
                    />

                    <input
                      placeholder="Company"
                      value={form.company}
                      onChange={(e)=>update("company",e.target.value)}
                      className={inputClass}
                    />

                  </div>

                  <div className="grid sm:grid-cols-2 gap-4">

                    <select
                      required
                      value={form.service}
                      onChange={(e)=>update("service",e.target.value)}
                      className={inputClass}
                    >
                      <option value="">Select Service</option>
                      {serviceOptions.map((s)=>(
                        <option key={s}>{s}</option>
                      ))}
                    </select>

                    <select
                      value={form.budget}
                      onChange={(e)=>update("budget",e.target.value)}
                      className={inputClass}
                    >
                      <option value="">Budget Range</option>
                      {budgetOptions.map((b)=>(
                        <option key={b}>{b}</option>
                      ))}
                    </select>

                  </div>

                  <textarea
                    required
                    rows={5}
                    placeholder="Tell us about your project..."
                    value={form.details}
                    onChange={(e)=>update("details",e.target.value)}
                    className={`${inputClass} resize-none`}
                  />

                  <button
                    type="submit"
                    className="gradient-bg w-full py-4 rounded-xl font-semibold flex items-center justify-center gap-2"
                  >
                    Submit Inquiry <Send size={18}/>
                  </button>

                </form>
              </div>
            </motion.div>

          </div>
        </div>
      </section>

      {/* FLOATING WHATSAPP BUTTON */}
      <a
        href="https://wa.me/918099655099"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 w-14 h-14 rounded-full bg-green-500 flex items-center justify-center shadow-lg hover:scale-110 transition z-50"
      >
        <MessageCircle className="text-white" size={26}/>
      </a>

      {/* STICKY CONTACT BAR (Mobile) */}
      <div className="fixed bottom-0 left-0 right-0 bg-card border-t border-border flex md:hidden z-40">

        <a
          href="https://wa.me/918099655099"
          className="flex-1 py-3 flex flex-col items-center text-sm"
        >
          <MessageCircle size={20}/>
          WhatsApp
        </a>

        <a
          href="tel:+918099655099"
          className="flex-1 py-3 flex flex-col items-center text-sm"
        >
          <Phone size={20}/>
          Call
        </a>

        <a
          href="mailto:blezex.vibe@gmail.com"
          className="flex-1 py-3 flex flex-col items-center text-sm"
        >
          <Mail size={20}/>
          Email
        </a>

      </div>
    </>
  );
};

export default Contact;