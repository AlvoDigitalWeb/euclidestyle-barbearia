import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { AlertTriangle, CheckCircle2 } from "lucide-react";
import { Heading } from "./Heading";
import { Text } from "./DataDisplay";
import { Button } from "./Button";

export const TemplateWarning = () => {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    // Show after a small delay
    const timer = setTimeout(() => {
      setIsOpen(true);
    }, 500);
    return () => clearTimeout(timer);
  }, []);

  // Block scrolling when open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  const handleClose = () => {
    setIsOpen(false);
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-[9999] flex items-center justify-center p-4 backdrop-blur-md bg-black/60"
        >
          <motion.div
            initial={{ scale: 0.9, opacity: 0, y: 20 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            exit={{ scale: 0.9, opacity: 0, y: 20 }}
            className="w-full max-w-lg bg-surface border border-primary/30 p-8 rounded-2xl shadow-[0_0_50px_rgba(212,175,55,0.2)] text-center space-y-6 relative overflow-hidden"
          >
            {/* Decorative Gold Light */}
            <div className="absolute -top-24 -left-24 w-48 h-48 bg-primary/10 rounded-full blur-[60px] pointer-events-none" />
            
            <div className="flex justify-center">
              <div className="w-20 h-20 bg-primary/10 rounded-full flex items-center justify-center">
                <AlertTriangle className="w-10 h-10 text-primary animate-pulse" />
              </div>
            </div>

            <div className="space-y-2">
              <Heading variant="h2" className="text-3xl font-black italic">
                AVISO DE <span className="text-gold-gradient">SISTEMA</span>
              </Heading>
              <div className="w-12 h-1 bg-primary mx-auto" />
            </div>

            <Text className="text-gray-300 text-lg leading-relaxed font-bold">
              ESTE SITE É APENAS UM TEMPLATE DEMONSTRATIVO.
            </Text>
            
            <Text className="text-gray-400 text-sm italic">
              Este conteúdo não deve ser utilizado como um site oficial. Trata-se de uma vitrine tecnológica para apresentação de design e funcionalidades.
            </Text>

            <div className="pt-4">
              <Button 
                onClick={handleClose}
                className="w-full group py-6 text-lg tracking-widest font-black flex items-center justify-center gap-3"
              >
                <CheckCircle2 className="w-5 h-5 group-hover:scale-110 transition-transform" />
                ENTENDI E ACEITO
              </Button>
            </div>
            
            <div className="pt-4 border-t border-white/5 opacity-50">
              <Text className="text-[8px] text-gray-500 font-medium">
                Desenvolvido por{" "}
                <a 
                  href="https://alvodigitalweb.pt" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-primary transition-colors hover:underline"
                >
                  Alvo Digital Web
                </a>
              </Text>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
