import React from "react";
import Link from "next/link";

export type ButtonVariant = "primary" | "secondary" | "outline" | "text";
export type ButtonSize = "sm" | "md" | "lg";

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant;
  size?: ButtonSize;
  href?: string;
  target?: string;
  rel?: string;
  isLoading?: boolean;
  leftIcon?: React.ReactNode;
  rightIcon?: React.ReactNode;
  children?: React.ReactNode;
  className?: string;
}

const variantClasses: Record<ButtonVariant, string> = {
  primary:
    "bg-[#b10017] text-white hover:bg-[#8e0a20] focus-visible:ring-[#b10017] rounded-full font-bold uppercase tracking-wider shadow-xs transition-colors",
  secondary:
    "bg-white text-[#b10017] hover:bg-gray-100 focus-visible:ring-white rounded-full font-bold uppercase tracking-wider shadow-xs transition-colors",
  outline:
    "border-2 border-[#b10017] text-[#b10017] bg-transparent hover:bg-[#b10017] hover:text-white focus-visible:ring-[#b10017] rounded-full font-bold uppercase tracking-wider transition-colors",
  text:
    "text-[#b10017] hover:underline font-bold uppercase tracking-wider transition-colors p-0 rounded-none bg-transparent",
};

const sizeClasses: Record<ButtonVariant, Record<ButtonSize, string>> = {
  primary: {
    sm: "px-4 py-2 text-[11px] sm:text-xs min-h-9",
    md: "px-6 py-3 text-xs sm:text-sm min-h-11",
    lg: "px-7 py-3.5 sm:px-8 sm:py-4 text-xs sm:text-sm min-h-12 sm:min-h-14",
  },
  secondary: {
    sm: "px-4 py-2 text-[11px] sm:text-xs min-h-9",
    md: "px-6 py-3 text-xs sm:text-sm min-h-11",
    lg: "px-7 py-3.5 sm:px-8 sm:py-4 text-xs sm:text-sm min-h-12 sm:min-h-14",
  },
  outline: {
    sm: "px-4 py-2 text-[11px] sm:text-xs min-h-9",
    md: "px-6 py-3 text-xs sm:text-sm min-h-11",
    lg: "px-7 py-3.5 sm:px-8 sm:py-4 text-xs sm:text-sm min-h-12 sm:min-h-14",
  },
  text: {
    sm: "text-[11px] sm:text-xs",
    md: "text-xs sm:text-sm",
    lg: "text-sm sm:text-base",
  },
};

export default function Button({
  variant = "primary",
  size = "md",
  href,
  target,
  rel,
  isLoading = false,
  leftIcon,
  rightIcon,
  children,
  className = "",
  disabled,
  ...props
}: ButtonProps) {
  const baseClasses =
    "inline-flex items-center justify-center gap-2 cursor-pointer text-center font-sans focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none aria-disabled:opacity-50 aria-disabled:pointer-events-none select-none";

  const computedClasses = [
    baseClasses,
    variantClasses[variant],
    sizeClasses[variant][size],
    className,
  ]
    .filter(Boolean)
    .join(" ");

  const content = (
    <>
      {isLoading && (
        <svg
          className="w-4 h-4 animate-spin shrink-0"
          fill="none"
          viewBox="0 0 24 24"
          aria-hidden="true"
        >
          <circle
            className="opacity-25"
            cx="12"
            cy="12"
            r="10"
            stroke="currentColor"
            strokeWidth="4"
          />
          <path
            className="opacity-75"
            fill="currentColor"
            d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
          />
        </svg>
      )}
      {!isLoading && leftIcon && <span className="shrink-0">{leftIcon}</span>}
      {children}
      {!isLoading && rightIcon && <span className="shrink-0">{rightIcon}</span>}
    </>
  );

  if (href && !disabled) {
    return (
      <Link href={href} target={target} rel={rel} className={computedClasses}>
        {content}
      </Link>
    );
  }

  return (
    <button
      type="button"
      disabled={disabled || isLoading}
      aria-disabled={disabled || isLoading}
      className={computedClasses}
      {...props}
    >
      {content}
    </button>
  );
}
