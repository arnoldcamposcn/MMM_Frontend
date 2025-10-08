// src/components/atoms/Button.tsx
import React from "react";

type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: "gradient" | "outline";
  children: React.ReactNode;
  className?: string;
};

export const Button: React.FC<ButtonProps> = ({
  variant = "gradient",
  children,
  className,
  ...props
}) => {
  const baseClasses = "text-[15px] font-medium flex items-center justify-center gap-2 cursor-pointer relative capitalize";
  
  const variantClasses = {
    gradient: "btn-gradient",
    outline: "btn-outline",
  };

  return (
    <button
      className={`${baseClasses} ${variantClasses[variant]} ${className}`}
      type="button"
      {...props}
    >
      {children}
    </button>
  );
};