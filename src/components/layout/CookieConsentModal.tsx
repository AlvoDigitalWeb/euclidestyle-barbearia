import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, Shield, BarChart3, Target, Check } from "lucide-react";
import { Button } from "../ui/Button";
import { Text } from "../ui/DataDisplay";
import { Heading } from "../ui/Heading";

interface CookieConsentProps {
  isOpen: boolean;
  onClose: () => void;
}

export const CookieConsentModal = ({ isOpen, onClose }: CookieConsentProps) => {
  const [preferences, setPreferences] = useState({
    essential: true,
    analytics: false,
    marketing: false,
  });

  const handleSave = () => {
    // In a real app, save to localStorage or cookie
    localStorage.setItem("cookie-preferences", JSON.stringify(preferences));
    onClose();
  };

  if (!isOpen) return null;

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/80 backdrop-blur-sm"
          />

          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            className="relative w-full max-w-2xl bg-secondary border border-white/10 rounded-lg shadow-2xl overflow-hidden"
          >
            {/* Header */}
            <div className="p-6 border-b border-white/5 flex justify-between items-center bg-surface/50">
              <Heading variant="h4" className="text-xl uppercase tracking-widest font-black">Gestão de Preferências</Heading>
              <button onClick={onClose} className="p-2 hover:bg-white/5 rounded-full transition-colors text-gray-400">
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Content */}
            <div className="p-8 space-y-8 max-h-[70vh] overflow-y-auto">
              <Text className="text-gray-400 text-sm italic leading-relaxed">
                Respeitamos a sua privacidade. Pode escolher quais as categorias de cookies que deseja permitir. Alguns são necessários para o funcionamento básico do site.
              </Text>

              <div className="space-y-4">
                {/* Essential */}
                <div className="p-5 bg-surface/30 rounded-lg border border-white/5 flex items-start gap-5">
                  <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                    <Shield className="w-5 h-5 text-primary" />
                  </div>
                  <div className="flex-1 space-y-2">
                    <div className="flex justify-between items-center">
                      <Text className="font-bold text-white uppercase tracking-wider text-sm">Cookies Essenciais</Text>
                      <span className="text-[10px] font-black text-primary uppercase tracking-widest bg-primary/10 px-2 py-1 rounded-sm">Sempre Ativo</span>
                    </div>
                    <Text className="text-xs text-gray-500 leading-relaxed">
                      Necessários para o funcionamento do site, segurança e ferramentas básicas. Não podem ser desativados.
                    </Text>
                  </div>
                </div>

                {/* Statutory / Analytics */}
                <div className="p-5 bg-surface/30 rounded-lg border border-white/5 flex items-start gap-5">
                  <div className="w-10 h-10 rounded-lg bg-white/5 flex items-center justify-center shrink-0">
                    <BarChart3 className="w-5 h-5 text-gray-400" />
                  </div>
                  <div className="flex-1 space-y-2">
                    <div className="flex justify-between items-center">
                      <Text className="font-bold text-white uppercase tracking-wider text-sm">Estatísticas</Text>
                      <label className="relative inline-flex items-center cursor-pointer">
                        <input
                          type="checkbox"
                          className="sr-only peer"
                          checked={preferences.analytics}
                          onChange={(e) => setPreferences({ ...preferences, analytics: e.target.checked })}
                        />
                        <div className="w-11 h-6 bg-white/10 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-gray-400 after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-primary/50 peer-checked:after:bg-primary"></div>
                      </label>
                    </div>
                    <Text className="text-xs text-gray-500 leading-relaxed">
                      Permitem-nos analisar o tráfego do site e melhorar a experiência do utilizador de forma anónima (ex: Google Analytics).
                    </Text>
                  </div>
                </div>

                {/* Marketing */}
                <div className="p-5 bg-surface/30 rounded-lg border border-white/5 flex items-start gap-5">
                  <div className="w-10 h-10 rounded-lg bg-white/5 flex items-center justify-center shrink-0">
                    <Target className="w-5 h-5 text-gray-400" />
                  </div>
                  <div className="flex-1 space-y-2">
                    <div className="flex justify-between items-center">
                      <Text className="font-bold text-white uppercase tracking-wider text-sm">Marketing</Text>
                      <label className="relative inline-flex items-center cursor-pointer">
                        <input
                          type="checkbox"
                          className="sr-only peer"
                          checked={preferences.marketing}
                          onChange={(e) => setPreferences({ ...preferences, marketing: e.target.checked })}
                        />
                        <div className="w-11 h-6 bg-white/10 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-gray-400 after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-primary/50 peer-checked:after:bg-primary"></div>
                      </label>
                    </div>
                    <Text className="text-xs text-gray-500 leading-relaxed">
                      Utilizados para apresentar anúncios mais relevantes para si e limitar a frequência com que os vê.
                    </Text>
                  </div>
                </div>
              </div>
            </div>

            {/* Footer */}
            <div className="p-6 border-t border-white/5 bg-surface/50 grid grid-cols-2 gap-4">
              <Button variant="outline" onClick={onClose} className="border-white/10 hover:bg-white/5 text-xs">
                CANCELAR
              </Button>
              <Button onClick={handleSave} className="flex items-center justify-center gap-2 text-xs">
                <Check className="w-4 h-4" />
                GUARDAR
              </Button>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};
