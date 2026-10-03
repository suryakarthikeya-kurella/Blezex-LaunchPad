import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import SmoothScroll from "@/components/motion/SmoothScroll";
import PageTransition from "@/components/motion/PageTransition";

import Index from "./pages/Index";
import ContactPage from "./pages/Contact";

// Service Detail Pages
import WebDevelopmentPage from "./pages/services/WebDevelopment";
import CustomSoftwareSaaSPage from "./pages/services/CustomSoftwareSaaS";
import AIAutomationPage from "./pages/services/AIAutomation";
import DigitalMarketingPage from "./pages/services/DigitalMarketing";
import GraphicDesigningBrandingPage from "./pages/services/GraphicDesigningBranding";

import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const AnimatedRoutes = () => {
  const location = useLocation();
  return (
    <PageTransition>
      <Routes location={location}>
        <Route path="/" element={<Index />} />
        <Route path="/contact" element={<ContactPage />} />

        {/* Service Detail Pages */}
        <Route path="/services/web-development" element={<WebDevelopmentPage />} />
        <Route path="/services/custom-software-saas" element={<CustomSoftwareSaaSPage />} />
        <Route path="/services/ai-automation" element={<AIAutomationPage />} />
        <Route path="/services/digital-marketing" element={<DigitalMarketingPage />} />
        <Route path="/services/graphic-designing-branding" element={<GraphicDesigningBrandingPage />} />

        {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
        <Route path="*" element={<NotFound />} />
      </Routes>
    </PageTransition>
  );
};

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <SmoothScroll />
        <AnimatedRoutes />
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
