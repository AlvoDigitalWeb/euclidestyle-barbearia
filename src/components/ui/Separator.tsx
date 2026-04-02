import React from "react";
import { motion } from "framer-motion";
import { Scissors } from "lucide-react";
import { cn } from "../../lib/utils";

interface SeparatorProps {
  className?: string;
  variant?: "scissors" | "dot" | "line";
  rotate?: number;
}

export const Separator = ({ className, variant = "scissors", rotate = 45 }: SeparatorProps) => {
  return (
    <div className={cn("relative w-full flex items-center justify-center py-4", className)}>
      <div className="h-[1px] w-[20%] md:w-[30%] bg-gradient-to-r from-transparent to-primary/30" />
      
      <motion.div 
        initial={{ opacity: 0, scale: 0.8 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        className="mx-4 md:mx-6 text-primary/40 flex items-center justify-center"
      >
        {variant === "scissors" && (
          <motion.div 
            whileInView={{ rotate }}
            transition={{ duration: 1, delay: 0.2 }}
          >
            <Scissors className="w-5 h-5 md:w-6 md:h-6" />
          </motion.div>
        )}
        
        {variant === "dot" && (
          <div className="w-1.5 h-1.5 md:w-2 md:h-2 rounded-full bg-primary/40" />
        )}
        
        {variant === "line" && (
          <div className="w-px h-6 bg-primary/40 rotate-[30deg]" />
        )}
      </motion.div>
      
      <div className="h-[1px] w-[20%] md:w-[30%] bg-gradient-to-l from-transparent to-primary/30" />
    </div>
  );
};
