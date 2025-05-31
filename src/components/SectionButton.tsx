import React from "react";

type SectionButtonProps = React.ComponentPropsWithoutRef<"a"> & {
  variant?: "solid" | "outline";
  children: React.ReactNode;
};

const base =
  "px-8 py-3 font-extrabold rounded-lg shadow transition text-lg inline-block";

const solid =
  "bg-renicaa-gold text-white hover:bg-renicaa-gold/90 border border-renicaa-gold";

const outline =
  "bg-transparent text-renicaa-gold border border-renicaa-gold hover:bg-renicaa-gold hover:text-white";

const SectionButton = ({
  variant = "solid",
  className = "",
  children,
  ...props
}: SectionButtonProps) => (
  <a
    className={`${base} ${variant === "solid" ? solid : outline} ${className}`}
    {...props}
  >
    {children}
  </a>
);

export default SectionButton;