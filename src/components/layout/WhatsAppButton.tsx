import { MessageCircle } from "lucide-react";
import { siteConfig } from "../../config/site";
import { motion } from "framer-motion";

export const WhatsAppButton = () => {
  const whatsappLink = `https://wa.me/${siteConfig.whatsapp}?text=${encodeURIComponent(siteConfig.whatsappMessage)}`;

  return (
    <motion.a
      href={whatsappLink}
      target="_blank"
      rel="noopener noreferrer"
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
      className="fixed bottom-8 right-8 z-50 bg-[#25d366] text-white p-4 rounded-full shadow-2xl flex items-center justify-center hover:bg-[#20ba59] transition-colors"
      aria-label="Agendar via WhatsApp"
    >
      <MessageCircle className="w-8 h-8" />
    </motion.a>
  );
};
