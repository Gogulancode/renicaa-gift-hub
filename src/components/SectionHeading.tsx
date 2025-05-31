import React from "react";

interface SectionHeadingProps {
  children: React.ReactNode;
  className?: string;
}

const SectionHeading = ({ children, className = "" }: SectionHeadingProps) => (
  <h2
    className={`text-3xl md:text-4xl font-extrabold font-sans text-foreground mb-4 ${className}`}
  >
    {children}
  </h2>
);

export default SectionHeading;