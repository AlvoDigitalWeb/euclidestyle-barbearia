import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "../../lib/utils";

const headingVariants = cva(
  "font-bold leading-tight tracking-tight text-white",
  {
    variants: {
      variant: {
        h1: "text-4xl sm:text-5xl lg:text-6xl xl:text-7xl",
        h2: "text-4xl md:text-5xl lg:text-6xl",
        h3: "text-3xl md:text-4xl",
        h4: "text-lg md:text-xl font-semibold",
      },
      gradient: {
        true: "text-gold-gradient",
        false: "",
      },
    },
    defaultVariants: {
      variant: "h2",
      gradient: false,
    },
  }
);

interface HeadingProps
  extends React.HTMLAttributes<HTMLHeadingElement>,
  VariantProps<typeof headingVariants> {
  as?: "h1" | "h2" | "h3" | "h4" | "h5" | "h6";
}

const Heading = ({ className, variant, gradient, as: Tag = "h2", ...props }: HeadingProps) => {
  return (
    <Tag
      className={cn(headingVariants({ variant, gradient, className }))}
      {...props}
    />
  );
};

export { Heading, headingVariants };
