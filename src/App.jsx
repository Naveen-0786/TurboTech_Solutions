import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import Lenis from 'lenis';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import ChatWidget from './components/ChatWidget';
import Home from './pages/Home';
import Products from './pages/Products';
import Solutions from './pages/Solutions';
import Pricing from './pages/Pricing';
import About from './pages/About';
import Contact from './pages/Contact';

// New International Pages
import Developers from './pages/Developers';
import Security from './pages/Security';
import Resources from './pages/Resources';
import Login from './pages/Login';
import GetDemo from './pages/GetDemo';

// Product Pages
import WhatsAppAutomation from './pages/WhatsAppAutomation';
import AIChatbot from './pages/AIChatbot';
import WebsiteBots from './pages/WebsiteBots';
import Integrations from './pages/Integrations';

// Solution Pages
import SolutionMarketing from './pages/SolutionMarketing';
import SolutionSales from './pages/SolutionSales';
import SolutionSupport from './pages/SolutionSupport';
import SolutionLeadGen from './pages/SolutionLeadGen';
import SolutionEngagement from './pages/SolutionEngagement';
import SolutionAutomotive from './pages/SolutionAutomotive';
import SolutionAgency from './pages/SolutionAgency';

// Resource Pages
import Academy from './pages/Academy';
import Blog from './pages/Blog';
import Community from './pages/Community';
import Whitepapers from './pages/Whitepapers';
import KnowledgeCenter from './pages/KnowledgeCenter';
import HelpDocs from './pages/HelpDocs';
import ServiceStatus from './pages/ServiceStatus';
import Experts from './pages/Experts';
import Templates from './pages/Templates';
import ApiDocs from './pages/ApiDocs';

// Scroll to top on route change
const ScrollToTop = () => {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
};

const queryClient = new QueryClient();

function App() {
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smoothWheel: true,
    });

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    return () => lenis.destroy();
  }, []);

  return (
    <QueryClientProvider client={queryClient}>
      <Router>
        <ScrollToTop />
        <div className="min-h-screen relative isolate bg-white overflow-x-hidden">
          {/* Global Background Glows - Turbo Tech Solutions Style */}
          <div className="glow-spot top-0 right-[-10%] w-[800px] h-[800px] bg-primary/10" />
          <div className="glow-spot bottom-0 left-[-10%] w-[600px] h-[600px] bg-secondary/5" />
          
          <Navbar />
          <main className="relative z-10">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/products" element={<Products />} />
              <Route path="/products/ai-agents" element={<AIChatbot />} />
              <Route path="/products/whatsapp" element={<WhatsAppAutomation />} />
              <Route path="/products/website" element={<WebsiteBots />} />
              <Route path="/products/integrations" element={<Integrations />} />
              
              <Route path="/solutions" element={<Solutions />} />
              <Route path="/solutions/marketing" element={<SolutionMarketing />} />
              <Route path="/solutions/sales" element={<SolutionSales />} />
              <Route path="/solutions/support" element={<SolutionSupport />} />
              <Route path="/solutions/lead-generation" element={<SolutionLeadGen />} />
              <Route path="/solutions/customer-engagement" element={<SolutionEngagement />} />
              <Route path="/solutions/automotive" element={<SolutionAutomotive />} />
              <Route path="/solutions/agency-consulting" element={<SolutionAgency />} />
              
              <Route path="/resources" element={<Resources />} />
              <Route path="/resources/academy" element={<Academy />} />
              <Route path="/resources/blog" element={<Blog />} />
              <Route path="/resources/community" element={<Community />} />
              <Route path="/resources/whitepapers" element={<Whitepapers />} />
              <Route path="/resources/knowledge-center" element={<KnowledgeCenter />} />
              <Route path="/resources/help-docs" element={<HelpDocs />} />
              <Route path="/resources/service-status" element={<ServiceStatus />} />
              <Route path="/resources/experts" element={<Experts />} />
              <Route path="/resources/templates" element={<Templates />} />
              <Route path="/resources/api-docs" element={<ApiDocs />} />
              
              <Route path="/pricing" element={<Pricing />} />
              <Route path="/about" element={<About />} />
              <Route path="/contact" element={<Contact />} />
              
              {/* Global/International Routes */}
              <Route path="/developers" element={<Developers />} />
              <Route path="/security" element={<Security />} />
              <Route path="/login" element={<Login />} />
              <Route path="/get-demo" element={<GetDemo />} />

              {/* Legacy/Shortcut routes */}
              <Route path="/whatsapp" element={<WhatsAppAutomation />} />
              <Route path="/ai-agents" element={<AIChatbot />} />
              <Route path="/academy" element={<Academy />} />
              <Route path="/blog" element={<Blog />} />
              <Route path="/community" element={<Community />} />
              <Route path="/templates" element={<Templates />} />
              <Route path="/api-docs" element={<ApiDocs />} />
            </Routes>
          </main>
          <Footer />
          <ChatWidget />
        </div>
      </Router>
    </QueryClientProvider>
  );
}

export default App;
