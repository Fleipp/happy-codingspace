import React from "react";
import { cn } from "../../lib/utils";

interface CTAButtonProps extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
  variant?: "primary" | "secondary";
}

export const CTAButton = ({ className, variant = "primary", ...props }: CTAButtonProps) => {
  return (
    <a
      className={cn(
        "inline-block px-10 py-5 rounded-full font-bold text-lg transition-all shadow-[0_10px_30px_rgba(184,102,98,0.2)] hover:shadow-[0_15px_40px_rgba(184,102,98,0.3)] hover:-translate-y-1 active:scale-95 tracking-wide",
        variant === "primary" 
          ? "bg-[#B86662] text-white hover:bg-[#A35853]" 
          : "bg-white text-[#B86662] border-2 border-[#B86662] hover:bg-[#F8ECE8]",

        className
      )}
      {...props}
    />
  );
};
