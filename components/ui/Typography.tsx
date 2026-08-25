import React from "react";

// Heading Component
export type HeadingVariant = "page" | "hero" | "article" | "section" | "subsection" | "card";
export type HeadingColor = "red" | "white" | "dark" | "inherit";

export interface HeadingProps extends React.HTMLAttributes<HTMLHeadingElement> {
  level?: 1 | 2 | 3 | 4;
  variant?: HeadingVariant;
  color?: HeadingColor;
  as?: React.ElementType;
  children: React.ReactNode;
}

const variantStyles: Record<HeadingVariant, string> = {
  page: "text-3xl sm:text-4xl lg:text-5xl font-extrabold font-serif tracking-tight",
  hero: "text-4xl sm:text-5xl lg:text-[56px] font-serif font-bold tracking-tight",
  article: "font-serif text-3xl sm:text-4xl lg:text-[44px] leading-[1.15]",
  section: "text-3xl sm:text-4xl lg:text-5xl font-extrabold font-serif tracking-tight",
  subsection: "text-2xl sm:text-3xl font-serif font-bold",
  card: "text-xl font-serif font-bold",
};

const headingColorStyles: Record<HeadingColor, string> = {
  red: "text-[#b10017]",
  white: "text-white",
  dark: "text-gray-900",
  inherit: "",
};

export function Heading({
  level = 2,
  variant = "section",
  color = "red",
  as,
  className = "",
  children,
  ...props
}: HeadingProps) {
  const Component = as || (`h${level}` as React.ElementType);
  const colorClass = headingColorStyles[color];
  const variantClass = variantStyles[variant];

  const computedClasses = [variantClass, colorClass, className]
    .filter(Boolean)
    .join(" ");

  return (
    <Component className={computedClasses} {...props}>
      {children}
    </Component>
  );
}

// Lead Component
export type LeadVariant = "hero" | "article";

export interface LeadProps extends React.HTMLAttributes<HTMLParagraphElement> {
  variant?: LeadVariant;
  children: React.ReactNode;
}

const leadVariantStyles: Record<LeadVariant, string> = {
  hero: "text-base sm:text-lg text-red-100 max-w-2xl font-light leading-relaxed font-sans",
  article: "text-xl sm:text-2xl font-serif text-gray-700 leading-snug",
};

export function Lead({
  variant = "hero",
  className = "",
  children,
  ...props
}: LeadProps) {
  const computedClasses = [leadVariantStyles[variant], className]
    .filter(Boolean)
    .join(" ");

  return (
    <p className={computedClasses} {...props}>
      {children}
    </p>
  );
}

// Eyebrow Component
export type EyebrowColor = "gray" | "red" | "white" | "muted";

export interface EyebrowProps extends React.HTMLAttributes<HTMLSpanElement> {
  color?: EyebrowColor;
  children: React.ReactNode;
}

const eyebrowColorStyles: Record<EyebrowColor, string> = {
  gray: "text-gray-600",
  red: "text-[#b10017]",
  white: "text-white",
  muted: "text-[#585858]",
};

export function Eyebrow({
  color = "muted",
  className = "",
  children,
  ...props
}: EyebrowProps) {
  const baseClasses = "uppercase tracking-widest text-[11px] sm:text-xs font-semibold font-sans";
  const computedClasses = [baseClasses, eyebrowColorStyles[color], className]
    .filter(Boolean)
    .join(" ");

  return (
    <span className={computedClasses} {...props}>
      {children}
    </span>
  );
}

// Text (Body) Component
export type TextSize = "sm" | "base" | "lg";
export type TextColor = "default" | "dark" | "muted" | "white";

export interface TextProps extends React.HTMLAttributes<HTMLParagraphElement> {
  size?: TextSize;
  color?: TextColor;
  as?: React.ElementType;
  children: React.ReactNode;
}

const textSizeStyles: Record<TextSize, string> = {
  sm: "text-xs sm:text-sm leading-relaxed",
  base: "text-sm sm:text-base leading-relaxed",
  lg: "text-[16px] sm:text-[17px] leading-[1.7]",
};

const textColorStyles: Record<TextColor, string> = {
  default: "text-gray-700",
  dark: "text-gray-900",
  muted: "text-[#4f4f4f]",
  white: "text-white",
};

export function Text({
  size = "base",
  color = "default",
  as: Component = "p",
  className = "",
  children,
  ...props
}: TextProps) {
  const baseClasses = "font-sans";
  const computedClasses = [
    baseClasses,
    textSizeStyles[size],
    textColorStyles[color],
    className,
  ]
    .filter(Boolean)
    .join(" ");

  return (
    <Component className={computedClasses} {...props}>
      {children}
    </Component>
  );
}
