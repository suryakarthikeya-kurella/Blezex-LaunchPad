import { lazy, Suspense } from "react";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import SmoothScroll from "@/components/motion/SmoothScroll";
import PageTransition from "@/components/motion/PageTransition";

import Index from "./pages/Index";
// Home is eager (landing page); every other route is its own chunk.
const ContactPage = lazy(() => import("./pages/Contact"));
const WebDevelopmentPage = lazy(() => import("./pages/services/WebDevelopment"));
const CustomSoftwareSaaSPage = lazy(() => import("./pages/services/CustomSoftwareSaaS"));
const AIAutomationPage = lazy(() => import("./pages/services/AIAutomation"));
const DigitalMarketingPage = lazy(() => import("./pages/services/DigitalMarketing"));
const GraphicDesigningBrandingPage = lazy(() => import("./pages/services/GraphicDesigningBranding"));
const NotFound = lazy(() => import("./pages/NotFound"));

const AnimatedRoutes = () => {
  const location = useLocation();
  return (
    <PageTransition>
      <Suspense fallback={null}>
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
      </Suspense>
    </PageTransition>
  );
};

const App = () => (
  <BrowserRouter>
    <SmoothScroll />
    <AnimatedRoutes />
  </BrowserRouter>
);

export default App;
