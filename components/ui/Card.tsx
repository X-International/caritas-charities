import React from "react";

export type CardVariant = "content" | "info";

export interface CardProps extends React.HTMLAttributes<HTMLElement> {
  /** Visual variant. "content" = white bg card, "info" = beige bg card. Default: "content" */
  variant?: CardVariant;
  /** HTML element to render. Default: "div". Use "article", "section", etc. as needed. */
  as?: React.ElementType;
  /** Additional Tailwind classes merged onto the card container. */
  className?: string;
  children: React.ReactNode;
}

const variantClasses: Record<CardVariant, string> = {
  content:
    "bg-white rounded-subcard border border-gray-100 shadow-sm hover:shadow-md transition-shadow p-6 sm:p-8",
  info:
    "bg-caritas-beige rounded-subcard border border-[#e8dfd1] p-6 sm:p-8",
};

/**
 * Reusable card container providing consistent background, radius, border,
 * shadow and padding. Internal content (headings, text, footers) is composed
 * by the consumer.
 *
 * @example
 * ```tsx
 * <Card variant="content" as="article">
 *   <h3>Title</h3>
 *   <p>Body text…</p>
 * </Card>
 * ```
 */
export function Card({
  variant = "content",
  as: Component = "div",
  className = "",
  children,
  ...props
}: CardProps) {
  const computedClasses = [variantClasses[variant], className]
    .filter(Boolean)
    .join(" ");

  return (
    <Component className={computedClasses} {...props}>
      {children}
    </Component>
  );
}

export default Card;
