import Header from "@/components/blezex/Header";
import Hero from "@/components/blezex/Hero";
import ServicesHighlight from "@/components/blezex/ServicesHighlight";
import Stats from "@/components/blezex/Stats";
import About from "@/components/blezex/About";
import Services from "@/components/blezex/Services";
import Packages from "@/components/blezex/Packages";
import Portfolio from "@/components/blezex/Portfolio";
import FAQ from "@/components/blezex/FAQ";
import Contact from "@/components/blezex/Contact";
import CTA from "@/components/blezex/CTA";
import Footer from "@/components/blezex/Footer";
import { useSEO } from "@/hooks/useSEO";

const Index = () => {
  useSEO({
    title: "BlezeX | AI Automation & Technology Solutions",
    description:
      "BlezeX helps businesses grow with AI automation, web development, custom software, SaaS platforms and digital marketing solutions. Based in Hyderabad & Visakhapatnam, India.",
    canonical: "https://blezex.com/",
    ogTitle: "BlezeX | AI Automation & Technology Solutions",
    ogDescription:
      "BlezeX provides AI automation, web development, custom software and digital growth solutions for businesses.",
    ogType: "website",
  });

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Header />
      <Hero />
      <ServicesHighlight />
      <Stats />
      <About />
      <Services />
      <Packages />
      <Portfolio />
      <FAQ />
      <Contact />
      <CTA />
      <Footer />
    </div>
  );
};

export default Index;
