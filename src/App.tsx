import { Routes, Route, BrowserRouter } from "react-router"; // react-router as specified
import { useState, useEffect } from "react";
import Home from "./pages/Home";
import Services from "./pages/Services";
import About from "./pages/About";
import Contact from "./pages/Contact";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import CookiesPolicy from "./pages/CookiesPolicy";
import { Navbar } from "./components/layout/Navbar";
import { Footer } from "./components/layout/Footer";
import { WhatsAppButton } from "./components/layout/WhatsAppButton";
import { CookieConsentModal } from "./components/layout/CookieConsentModal";
import { CookieBanner } from "./components/layout/CookieBanner";
import { ScrollToTop } from "./components/layout/ScrollToTop";

function App() {
  const [isCookieModalOpen, setIsCookieModalOpen] = useState(false);

  useEffect(() => {
    const handleOpenSettings = () => setIsCookieModalOpen(true);
    window.addEventListener('open-cookie-settings', handleOpenSettings);
    return () => window.removeEventListener('open-cookie-settings', handleOpenSettings);
  }, []);

  return (
    <BrowserRouter>
      <ScrollToTop />
      <div className="relative min-h-screen bg-bg">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/servicos" element={<Services />} />
          <Route path="/sobre" element={<About />} />
          <Route path="/contato" element={<Contact />} />
          <Route path="/privacidade" element={<PrivacyPolicy />} />
          <Route path="/cookies" element={<CookiesPolicy />} />
        </Routes>
        <Footer />
        <CookieBanner />
        <WhatsAppButton />
        <CookieConsentModal 
          isOpen={isCookieModalOpen} 
          onClose={() => setIsCookieModalOpen(false)} 
        />
      </div>
    </BrowserRouter>
  );
}

export default App;
