import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, ChevronLeft, ChevronRight } from "lucide-react";

interface LightboxProps {
  images: { url: string; alt: string }[];
  index: number | null;
  onClose: () => void;
  onNext: () => void;
  onPrev: () => void;
}

export const Lightbox = ({ images, index, onClose, onNext, onPrev }: LightboxProps) => {
  if (index === null) return null;

  const currentImage = images[index];

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 z-[100] flex items-center justify-center bg-black/95 backdrop-blur-sm p-4 md:p-10"
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-6 right-6 z-[110] text-white/50 hover:text-white transition-colors p-2 cursor-pointer"
        >
          <X className="w-8 h-8" />
        </button>

        {/* Navigation - Prev */}
        <button
          onClick={onPrev}
          className="absolute left-4 md:left-10 z-[110] text-white/50 hover:text-white transition-colors p-2 md:p-4 bg-white/5 hover:bg-white/10 rounded-full cursor-pointer"
        >
          <ChevronLeft className="w-8 h-8 md:w-10 md:h-10" />
        </button>

        {/* Image Container */}
        <motion.div
          key={index}
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ type: "spring", damping: 25, stiffness: 300 }}
          className="relative max-w-5xl w-full h-full flex items-center justify-center pointer-events-none"
          onClick={(e) => e.stopPropagation()}
        >
          <img
            src={currentImage.url}
            alt={currentImage.alt}
            className="max-w-full max-h-[85vh] object-contain shadow-2xl rounded-sm pointer-events-auto"
          />
          <div className="absolute -bottom-10 left-0 right-0 text-center">
            <p className="text-white/40 text-sm tracking-widest uppercase font-light">
              {index + 1} / {images.length}
            </p>
          </div>
        </motion.div>

        {/* Navigation - Next */}
        <button
          onClick={onNext}
          className="absolute right-4 md:right-10 z-[110] text-white/50 hover:text-white transition-colors p-2 md:p-4 bg-white/5 hover:bg-white/10 rounded-full cursor-pointer"
        >
          <ChevronRight className="w-8 h-8 md:w-10 md:h-10" />
        </button>

        {/* Backdrop click to close */}
        <div className="absolute inset-0 z-[105]" onClick={onClose} />
      </motion.div>
    </AnimatePresence>
  );
};
