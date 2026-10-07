import React from "react";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "outline" | "text" | "cognac";
  size?: "sm" | "md" | "lg";
  href?: string;
  icon?: boolean;
  children: React.ReactNode;
  className?: string;
}

export const Button: React.FC<ButtonProps> = ({
  variant = "primary",
  size = "md",
  href,
  icon = false,
  children,
  className = "",
  ...props
}) => {
  const baseStyles =
    "inline-flex items-center justify-center font-medium transition-all duration-300 select-none group relative overflow-hidden tracking-tight cursor-pointer btn-shimmer";

  const sizeStyles = {
    sm: "text-xs px-4 py-2 gap-1.5",
    md: "text-sm px-6 py-3 gap-2",
    lg: "text-base px-8 py-3.5 gap-2.5",
  };

  const variantStyles = {
    primary:
      "bg-[#2B211E] text-[#FAF7F2] hover:bg-[#1A1412] hover:shadow-[0_8px_20px_-6px_rgba(43,33,30,0.3)] border border-[#2B211E] active:scale-[0.98]",
    cognac:
      "bg-[#B87333] text-white hover:bg-[#9E5F27] hover:shadow-[0_8px_20px_-6px_rgba(184,115,51,0.35)] border border-[#B87333] active:scale-[0.98]",
    secondary:
      "bg-[#F4EFEA] text-[#2B211E] hover:bg-[#EAE2D8] border border-[#E8E0D8] active:scale-[0.98]",
    outline:
      "bg-transparent text-[#2B211E] border border-[#D5C9BE] hover:border-[#2B211E] hover:bg-[#2B211E] hover:text-[#FAF7F2] active:scale-[0.98]",
    text: "bg-transparent text-[#2B211E] p-0 hover:text-[#B87333] underline-offset-4 hover:underline",
  };

  const combinedStyles = `${baseStyles} ${sizeStyles[size]} ${variantStyles[variant]} ${className}`;

  if (href) {
    return (
      <Link href={href} className={combinedStyles}>
        <span>{children}</span>
        {icon && (
          <ArrowUpRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1 text-current" />
        )}
      </Link>
    );
  }

  return (
    <button className={combinedStyles} {...props}>
      <span>{children}</span>
      {icon && (
        <ArrowUpRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1 text-current" />
      )}
    </button>
  );
};

export default Button;
