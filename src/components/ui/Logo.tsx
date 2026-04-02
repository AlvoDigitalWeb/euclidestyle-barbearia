import React from 'react';
import { cn } from '../../lib/utils';

export const Logo = ({ className, hideIcon = false }: { className?: string, hideIcon?: boolean }) => {
  return (
    <div className={cn("flex items-center", className)}>
      <svg
        width={hideIcon ? "270" : "600"}
        height={hideIcon ? "65" : "85"}
        viewBox={hideIcon ? "0 0 270 65" : "0 0 600 85"}
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className={hideIcon ? "h-10 lg:h-12 w-auto" : "h-10 sm:h-12 lg:h-16 w-auto"}
      >
        {!hideIcon && (
          /* Scissors Icon - Centered vertically relative to the two lines of text */
          <g transform="translate(0, 15) scale(1.35)" className="text-primary">
            <circle cx="10" cy="12" r="6" stroke="currentColor" strokeWidth="2.5" />
            <circle cx="10" cy="32" r="6" stroke="currentColor" strokeWidth="2.5" />
            <path d="M15 15L35 30" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" />
            <path d="M15 29L35 14" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" />
          </g>
        )}

        <text
          x={hideIcon ? "0" : "62"}
          y={hideIcon ? "32" : "42"}
          fill="white"
          style={{
            fontFamily: "'Playfair Display', serif",
            fontSize: hideIcon ? "32px" : "36px",
            fontWeight: "900",
            letterSpacing: "0.05em",
            textTransform: "uppercase"
          }}
        >
          EUCLIDESTYLE
        </text>

        <text
          x={hideIcon ? "250" : "358"}
          y={hideIcon ? "54" : "68"}
          fill="#d4af37"
          textAnchor="end"
          style={{ 
            fontFamily: "'EB Garamond', serif",
            fontSize: hideIcon ? "15px" : "18px", 
            fontWeight: "400",
            letterSpacing: "0.3em",
            textTransform: "uppercase"
          }}
        >
          BARBERSHOP
        </text>
      </svg>
    </div>
  );
};
