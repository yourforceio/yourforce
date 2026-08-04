import React from "react";

type ButtonVariant = "primary" | "secondary";

type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: ButtonVariant;
};

const baseClasses =
  "inline-flex items-center justify-center rounded-xl px-6 py-3 font-medium transition duration-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:ring-offset-slate-950 disabled:opacity-60 disabled:cursor-not-allowed";

const variants: Record<ButtonVariant, string> = {
  primary: "bg-blue-600 text-white hover:bg-blue-500",

  secondary:
    "border border-slate-700 bg-slate-900 text-white hover:border-blue-500 hover:bg-slate-800",
};

export default function Button({
  variant = "primary",
  children,
  className = "",
  type = "button",
  ...props
}: ButtonProps) {
  return (
    <button
      type={type}
      className={`${baseClasses} ${variants[variant]} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
}
