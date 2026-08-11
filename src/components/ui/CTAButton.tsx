import React from "react";
import { cn } from "../../lib/utils";

interface CTAButtonProps extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
  variant?: "primary" | "secondary";
}

export const CTAButton = ({ className, variant = "primary", ...props }: CTAButtonProps) => {
  return (
    <a
      className={cn(
        "inline-block px-8 py-4 rounded-full font-medium text-lg transition-all shadow-lg hover:shadow-xl hover:scale-105",
        variant === "primary" 
          ? "bg-[#B86662] text-white hover:bg-[#A35853]" 
          : "bg-white text-[#B86662] border-2 border-[#B86662] hover:bg-[#F8ECE8]",
        className
      )}
      {...props}
    />
  );
};
