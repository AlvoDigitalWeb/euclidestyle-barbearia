import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "../../lib/utils";

const cardVariants = cva(
  "rounded-lg overflow-hidden transition-all duration-300",
  {
    variants: {
      variant: {
        default: "bg-surface border border-white/10",
        ghost: "bg-transparent",
        elevated: "bg-surface shadow-xl shadow-black/40",
      },
      hover: {
        true: "card-hover",
        false: "",
      },
    },
    defaultVariants: {
      variant: "default",
      hover: false,
    },
  }
);

interface CardProps
  extends React.HTMLAttributes<HTMLDivElement>,
  VariantProps<typeof cardVariants> { }

const Card = ({ className, variant, hover, ...props }: CardProps) => (
  <div
    className={cn(cardVariants({ variant, hover, className }))}
    {...props}
  />
);

const textVariants = cva("leading-relaxed", {
  variants: {
    variant: {
      p: "text-gray-400 text-base md:text-lg",
      lead: "text-gray-300 text-lg md:text-xl font-light tracking-wide",
      small: "text-xs uppercase tracking-widest text-gray-500",
      muted: "text-gray-500",
    },
  },
  defaultVariants: {
    variant: "p",
  },
});

interface TextProps
  extends React.HTMLAttributes<HTMLParagraphElement>,
  VariantProps<typeof textVariants> {
  as?: "p" | "span" | "div";
}

const Text = ({ className, variant, as: Tag = "p", ...props }: TextProps) => (
  <Tag className={cn(textVariants({ variant, className }))} {...props} />
);

export { Card, Text };
