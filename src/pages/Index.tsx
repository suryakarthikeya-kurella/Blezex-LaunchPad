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

const Index = () => {
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
