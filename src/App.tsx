import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import { Layout } from "./components/Layout";
import Platform from "./pages/Platform";
import Solutions from "./pages/Solutions";
import Pricing from "./pages/Pricing";
import Success from "./pages/Success";
import Resources from "./pages/Resources";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Demo from "./pages/Demo";
import Terms from "./pages/Terms";
import { ScrollToTop } from "./components/ScrollToTop";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <ScrollToTop />
        <Layout>
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/platform" element={<Platform />} />
            <Route path="/solutions" element={<Solutions />} />
            <Route path="/pricing" element={<Pricing />} />
            <Route path="/success" element={<Success />} />
            <Route path="/resources" element={<Resources />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/demo" element={<Demo />} />
            <Route path="/terms" element={<Terms />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Layout>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
