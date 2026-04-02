import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "../../lib/utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap text-sm font-semibold transition-all duration-300 disabled:pointer-events-none disabled:opacity-50 uppercase tracking-widest leading-none cursor-pointer",
  {
    variants: {
      variant: {
        primary: "bg-primary text-secondary hover:bg-white shadow-xl",
        secondary: "bg-surface text-white hover:bg-surface-hover border border-white/10",
        outline: "border-2 border-primary text-primary hover:bg-primary hover:text-secondary",
        ghost: "hover:bg-primary/10 text-primary",
      },
      size: {
        sm: "h-9 px-4 text-xs",
        md: "h-12 px-8 py-3",
        lg: "h-14 px-10 text-lg",
        icon: "h-10 w-10",
      },
      radius: {
        none: "rounded-none",
        sm: "rounded-sm",
        md: "rounded-md",
        lg: "rounded-lg",
        full: "rounded-full",
      },
    },
    defaultVariants: {
      variant: "primary",
      size: "md",
      radius: "sm", // The site uses small radius
    },
  }
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, radius, asChild = false, ...props }, ref) => {
    return (
      <button
        className={cn(buttonVariants({ variant, size, radius, className }))}
        ref={ref}
        {...props}
      />
    );
  }
);
Button.displayName = "Button";

export { Button, buttonVariants };
