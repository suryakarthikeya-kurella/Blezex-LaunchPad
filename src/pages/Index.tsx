import Header from "@/components/blezex/Header";
import Hero from "@/components/blezex/Hero";
import ServicesHighlight from "@/components/blezex/ServicesHighlight";
import Stats from "@/components/blezex/Stats";
import About from "@/components/blezex/About";
import Services from "@/components/blezex/Services";
import Packages from "@/components/blezex/Packages";
import Process from "@/components/blezex/Process";
import Portfolio from "@/components/blezex/Portfolio";
import FAQ from "@/components/blezex/FAQ";
import Contact from "@/components/blezex/Contact";
import CTA from "@/components/blezex/CTA";
import Footer from "@/components/blezex/Footer";
import SEO from "@/components/SEO";
import { SITE_URL, pageMetadata } from "@/seo";

const Index = () => {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <SEO
        title={pageMetadata.home.title}
        description={pageMetadata.home.description}
        canonical={pageMetadata.home.canonical}
        ogTitle={pageMetadata.home.title}
        ogDescription="BlezeX provides AI automation, web development, custom software and digital growth solutions for businesses."
        ogType="website"
        schema={[
          {
            "@context": "https://schema.org",
            "@type": "WebSite",
            "@id": `${SITE_URL}/#website`,
            name: "BlezeX",
            url: SITE_URL,
            description:
              "BlezeX provides AI automation, web development, custom software and SaaS, digital marketing, and graphic design and branding solutions.",
            publisher: {
              "@type": "Organization",
              "@id": `${SITE_URL}/#organization`,
              name: "BlezeX",
            },
          },
          {
            "@context": "https://schema.org",
            "@type": "FAQPage",
            mainEntity: [
              {
                "@type": "Question",
                name: "What services does BlezeX provide?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "BlezeX provides AI automation, web development, custom software and SaaS, digital marketing, and graphic design and branding.",
                },
              },
              {
                "@type": "Question",
                name: "Where is BlezeX located?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "BlezeX is located in Hyderabad, Telangana, India and serves clients across India and worldwide.",
                },
              },
              {
                "@type": "Question",
                name: "How can I contact BlezeX?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "You can contact BlezeX by phone at +91 9059634555, by email at connect.blezex@gmail.com, or through the contact page at https://blezex.com/contact.",
                },
              },
            ],
          },
        ]}
      />
      <Header />
      <Hero />
      <ServicesHighlight />
      <Stats />
      <About />
      <Services />
      <Packages />
      <Process />
      <Portfolio />
      <FAQ />
      <Contact />
      <CTA />
      <Footer />
    </div>
  );
};

export default Index;
