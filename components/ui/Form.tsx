import React, {
  forwardRef,
  type InputHTMLAttributes,
  type TextareaHTMLAttributes,
  type SelectHTMLAttributes,
  type ReactNode,
} from "react";

// --- FormLabel ---
export type FormLabelProps = React.LabelHTMLAttributes<HTMLLabelElement> & {
  children: ReactNode;
  required?: boolean;
  optional?: boolean;
};

export function FormLabel({
  children,
  required,
  optional,
  className = "",
  ...props
}: FormLabelProps) {
  return (
    <label
      className={`mb-1.5 block text-[11px] font-bold uppercase tracking-wider text-gray-700 ${className}`}
      {...props}
    >
      {children}
      {required && (
        <span className="ml-0.5 text-[#b10017]" aria-hidden="true">
          *
        </span>
      )}
      {optional && (
        <span className="ml-1 font-normal normal-case tracking-normal text-gray-500">
          (optional)
        </span>
      )}
    </label>
  );
}

// --- Common Input Style Utility ---
const baseFieldClasses =
  "w-full rounded-input border bg-white px-4 py-3.5 text-sm font-sans text-gray-900 transition-colors placeholder:text-gray-400 focus:outline-none focus:ring-2 disabled:cursor-not-allowed disabled:bg-gray-100 disabled:text-gray-400";

const defaultStateClasses =
  "border-gray-300 focus:border-[#b10017] focus:ring-[#b10017]/20";
const errorStateClasses =
  "border-[#b10017] text-gray-900 focus:border-[#b10017] focus:ring-[#b10017]/30";

// --- TextInput ---
export type TextInputProps = InputHTMLAttributes<HTMLInputElement> & {
  hasError?: boolean;
};

export const TextInput = forwardRef<HTMLInputElement, TextInputProps>(
  function TextInput({ hasError, className = "", ...props }, ref) {
    const stateClasses = hasError ? errorStateClasses : defaultStateClasses;
    return (
      <input
        ref={ref}
        className={`${baseFieldClasses} ${stateClasses} ${className}`}
        {...props}
      />
    );
  }
);

// --- TextArea ---
export type TextAreaProps = TextareaHTMLAttributes<HTMLTextAreaElement> & {
  hasError?: boolean;
};

export const TextArea = forwardRef<HTMLTextAreaElement, TextAreaProps>(
  function TextArea({ hasError, className = "", ...props }, ref) {
    const stateClasses = hasError ? errorStateClasses : defaultStateClasses;
    return (
      <textarea
        ref={ref}
        className={`${baseFieldClasses} resize-y ${stateClasses} ${className}`}
        {...props}
      />
    );
  }
);

// --- Select ---
export type SelectProps = SelectHTMLAttributes<HTMLSelectElement> & {
  hasError?: boolean;
};

export const Select = forwardRef<HTMLSelectElement, SelectProps>(
  function Select({ hasError, className = "", children, ...props }, ref) {
    const stateClasses = hasError ? errorStateClasses : defaultStateClasses;
    return (
      <select
        ref={ref}
        className={`${baseFieldClasses} bg-white ${stateClasses} ${className}`}
        {...props}
      >
        {children}
      </select>
    );
  }
);

// --- FormError ---
export type FormErrorProps = React.HTMLAttributes<HTMLParagraphElement> & {
  children?: ReactNode;
};

export function FormError({ children, className = "", ...props }: FormErrorProps) {
  if (!children) return null;
  return (
    <p
      className={`mt-1.5 flex items-center gap-1 text-xs font-semibold text-[#b10017] ${className}`}
      {...props}
    >
      <svg
        className="h-3.5 w-3.5 shrink-0"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
        aria-hidden="true"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
        />
      </svg>
      <span>{children}</span>
    </p>
  );
}

// --- FormHelperText ---
export type FormHelperTextProps = React.HTMLAttributes<HTMLParagraphElement> & {
  children?: ReactNode;
};

export function FormHelperText({ children, className = "", ...props }: FormHelperTextProps) {
  if (!children) return null;
  return (
    <p className={`mt-1.5 text-[11px] text-gray-500 leading-relaxed ${className}`} {...props}>
      {children}
    </p>
  );
}
