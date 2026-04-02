import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Cookie, X, Settings } from "lucide-react";
import { Button } from "../ui/Button";
import { Text } from "../ui/DataDisplay";
import { Heading } from "../ui/Heading";

export const CookieBanner = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem("cookie-consent-given");
    if (!consent) {
      const timer = setTimeout(() => setIsVisible(true), 1500);
      return () => clearTimeout(timer);
    }
  }, []);

  useEffect(() => {
    const handleShowBanner = () => setIsVisible(true);
    window.addEventListener('show-cookie-banner', handleShowBanner);
    return () => window.removeEventListener('show-cookie-banner', handleShowBanner);
  }, []);

  const handleAcceptAll = () => {
    localStorage.setItem("cookie-consent-given", "all");
    localStorage.setItem("cookie-preferences", JSON.stringify({ essential: true, analytics: true, marketing: true }));
    setIsVisible(false);
  };

  const handleRejectAll = () => {
    localStorage.setItem("cookie-consent-given", "rejected");
    localStorage.setItem("cookie-preferences", JSON.stringify({ essential: true, analytics: false, marketing: false }));
    setIsVisible(false);
  };

  const handleOpenSettings = () => {
    window.dispatchEvent(new CustomEvent('open-cookie-settings'));
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 100, opacity: 0 }}
          className="fixed bottom-6 left-6 right-6 md:left-10 md:right-auto md:max-w-xl z-[90]"
        >
          <div className="bg-secondary/95 backdrop-blur-md border border-white/10 p-6 md:p-8 rounded-lg shadow-2xl space-y-6">
            <div className="flex items-start gap-4">
              <div className="bg-primary/20 p-3 rounded-lg shrink-0">
                <Cookie className="w-6 h-6 text-primary" />
              </div>
              <div className="space-y-2">
                <Heading variant="h4" className="text-sm uppercase tracking-widest font-black text-white">Nós usamos cookies</Heading>
                <Text variant="muted" className="text-xs leading-relaxed max-w-sm">
                  Utilizamos cookies para melhorar a sua experiência, analisar o tráfego do site e apresentar conteúdos personalizados. Ao continuar, concorda com a nossa <a href="/cookies" className="text-primary hover:underline">Política de Cookies</a>.
                </Text>
              </div>
            </div>

            <div className="flex flex-wrap gap-3 pt-2">
              <Button onClick={handleAcceptAll} size="sm" className="text-[10px] h-10 px-6 cursor-pointer">
                ACEITAR TODOS
              </Button>
              <Button onClick={handleRejectAll} size="sm" variant="outline" className="text-[10px] h-10 px-6 border-white/5 cursor-pointer">
                REJEITAR
              </Button>
              <button 
                onClick={handleOpenSettings}
                className="text-[10px] font-black text-gray-500 hover:text-primary uppercase tracking-widest flex items-center gap-2 ml-auto transition-colors cursor-pointer"
              >
                <Settings className="w-4 h-4" />
                CONFIGURAR
              </button>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
