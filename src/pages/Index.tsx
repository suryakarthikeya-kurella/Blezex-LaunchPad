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
import { ORG_NAME, SITE_NAME, SITE_URL, buildFaqSchema, homeFaqs, homeSchemaOnlyFaqs, pageMetadata } from "@/seo";

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
            name: ORG_NAME,
            alternateName: SITE_NAME,
            url: SITE_URL,
            inLanguage: "en-IN",
            publisher: { "@id": `${SITE_URL}/#organization` },
          },
          buildFaqSchema([...homeFaqs, ...homeSchemaOnlyFaqs]),
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
