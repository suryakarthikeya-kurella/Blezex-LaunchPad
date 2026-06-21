import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

import Index from "./pages/Index";
import Careers from "./pages/Careers";

// Service Detail Pages
import WebDevelopmentPage from "./pages/services/WebDevelopment";
import MobileAppDevelopmentPage from "./pages/services/MobileAppDevelopment";
import CustomSoftwareSaaSPage from "./pages/services/CustomSoftwareSaaS";
import AIAutomationPage from "./pages/services/AIAutomation";
import DigitalMarketingPage from "./pages/services/DigitalMarketing";
import GraphicDesigningBrandingPage from "./pages/services/GraphicDesigningBranding";
import CorporateStartupServicesPage from "./pages/services/CorporateStartupServices";
import SupportMaintenancePage from "./pages/services/SupportMaintenance";

import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/careers" element={<Careers />} />
          <Route path="/contact" element={<Navigate to="/" replace />} />

          {/* Service Detail Pages */}
          <Route path="/services/web-development" element={<WebDevelopmentPage />} />
          <Route path="/services/mobile-app-development" element={<MobileAppDevelopmentPage />} />
          <Route path="/services/custom-software-saas" element={<CustomSoftwareSaaSPage />} />
          <Route path="/services/ai-automation" element={<AIAutomationPage />} />
          <Route path="/services/digital-marketing" element={<DigitalMarketingPage />} />
          <Route path="/services/graphic-designing-branding" element={<GraphicDesigningBrandingPage />} />
          <Route path="/services/corporate-startup-services" element={<CorporateStartupServicesPage />} />
          <Route path="/services/support-maintenance" element={<SupportMaintenancePage />} />

          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
