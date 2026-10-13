import { useEffect, useState } from "react";
import { ArrowRight, ExternalLink, Lock } from "lucide-react";
import { Dialog, DialogContent, DialogDescription, DialogTitle } from "@/components/ui/dialog";
import { EXTERNAL_FORM_URL } from "@/config";

const EVENT = "blezex:open-consultation";
/** Any consultation CTA calls this; <ConsultationModal /> (mounted in Contact) listens. */
export const openConsultation = () => window.dispatchEvent(new Event(EVENT));

const supportPhone = "9059634555";
const inputClass =
  "w-full h-12 rounded-full border border-border bg-white px-5 text-sm text-foreground placeholder:text-muted-foreground outline-none transition-colors focus-visible:border-foreground";

const emptyForm = { name: "", email: "", company: "", phone: "", details: "" };

const ConsultationModal = () => {
  const [open, setOpen] = useState(false);
  const [form, setForm] = useState(emptyForm);

  useEffect(() => {
    const show = () => setOpen(true);
    window.addEventListener(EVENT, show);
    return () => window.removeEventListener(EVENT, show);
  }, []);

  const update = (field: string, value: string) => setForm((prev) => ({ ...prev, [field]: value }));

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const msg = `
Hi BlezeX 👋

Name: ${form.name}
Company: ${form.company || "N/A"}
Email: ${form.email}
Phone: ${form.phone}

${form.details}
`;
    window.open(`https://wa.me/91${supportPhone}?text=${encodeURIComponent(msg)}`, "_blank", "noopener,noreferrer");
    setOpen(false);
    setForm(emptyForm);
  };

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogContent
        data-lenis-prevent
        className="max-h-[92dvh] max-w-2xl gap-0 overflow-y-auto rounded-[24px] border-foreground bg-white p-6 shadow-[6px_6px_0_#111] sm:rounded-[24px] md:p-8"
      >
        <div className="mb-6 pr-8">
          <DialogTitle className="mb-1.5 font-display text-2xl font-extrabold text-foreground md:text-3xl">
            Let's Talk Growth
          </DialogTitle>
          <DialogDescription className="font-body text-sm leading-relaxed text-muted-foreground">
            We're just a message away. Share a few details and our team will reply within 2 hours.
          </DialogDescription>
        </div>

        {EXTERNAL_FORM_URL ? (
          <>
            <iframe
              title="BlezeX consultation form"
              src={EXTERNAL_FORM_URL}
              loading="lazy"
              className="h-[60dvh] w-full rounded-xl border border-border"
            />
            <a
              href={EXTERNAL_FORM_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-4 inline-flex items-center justify-center gap-2 self-start font-body text-sm text-muted-foreground transition-colors hover:text-primary"
            >
              <ExternalLink size={14} /> Form not loading? Open in a new tab
            </a>
          </>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-3">
            <input aria-label="Name" placeholder="Name" required autoComplete="name" value={form.name} onChange={(e) => update("name", e.target.value)} className={inputClass} />
            <input aria-label="Email" placeholder="Email" required type="email" autoComplete="email" value={form.email} onChange={(e) => update("email", e.target.value)} className={inputClass} />
            <input aria-label="Company name" placeholder="Company name" autoComplete="organization" value={form.company} onChange={(e) => update("company", e.target.value)} className={inputClass} />
            <input aria-label="Phone number" placeholder="Phone number" required type="tel" autoComplete="tel" value={form.phone} onChange={(e) => update("phone", e.target.value)} className={inputClass} />
            <textarea aria-label="What can we help you with?" placeholder="What can we help you with?" required rows={4} value={form.details} onChange={(e) => update("details", e.target.value)} className={`${inputClass} h-auto resize-none rounded-[24px] py-3.5`} />

            <button
              type="submit"
              className="flex h-12 w-full items-center justify-center gap-2 rounded-full bg-foreground font-display text-sm font-semibold uppercase tracking-wide text-background transition-colors hover:bg-primary focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-foreground"
            >
              Get In Touch
              <ArrowRight size={16} strokeWidth={1.75} />
            </button>

            <p className="flex items-center justify-center gap-1.5 text-center font-body text-xs text-muted-foreground">
              <Lock size={11} /> Your information is secure and confidential.
            </p>
          </form>
        )}
      </DialogContent>
    </Dialog>
  );
};

export default ConsultationModal;
