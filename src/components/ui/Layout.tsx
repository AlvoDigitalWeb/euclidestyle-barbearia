import * as React from "react";
import { cn } from "../../lib/utils";

const Container = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn("max-w-7xl mx-auto px-4 sm:px-6 lg:px-8", className)}
    {...props}
  />
));
Container.displayName = "Container";

const Section = React.forwardRef<
  HTMLElement,
  React.HTMLAttributes<HTMLElement>
>(({ className, ...props }, ref) => (
  <section
    ref={ref}
    className={cn("pt-10 md:pt-20 overflow-hidden", className)}
    {...props}
  />
));
Section.displayName = "Section";

export { Container, Section };
