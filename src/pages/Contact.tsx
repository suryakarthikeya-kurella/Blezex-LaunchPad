import Header from "@/components/blezex/Header";
import ContactSection from "@/components/blezex/Contact";
import CTA from "@/components/blezex/CTA";
import Footer from "@/components/blezex/Footer";
import SEO from "@/components/SEO";
import { LOGO_URL, SITE_URL, pageMetadata } from "@/seo";

const ContactPage = () => {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <SEO
        title={pageMetadata.contact.title}
        description={pageMetadata.contact.description}
        canonical={pageMetadata.contact.canonical}
        ogTitle={pageMetadata.contact.title}
        ogDescription={pageMetadata.contact.description}
        ogType="website"
        schema={{
          "@context": "https://schema.org",
          "@type": "ContactPage",
          "@id": `${SITE_URL}/contact#contactpage`,
          name: "Contact BlezeX",
          url: pageMetadata.contact.canonical,
          image: LOGO_URL,
          about: {
            "@type": "Organization",
            "@id": `${SITE_URL}/#organization`,
            name: "BlezeX",
          },
        }}
      />
      <Header />
      <main className="pt-20">
        <ContactSection />
        <CTA />
      </main>
      <Footer />
    </div>
  );
};

export default ContactPage;
