import * as React from "react";

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary";
}

export const Button: React.FC<ButtonProps> = ({
  variant = "primary",
  children,
  ...rest
}) => {
  const base =
    "px-4 py-2 rounded-md font-medium inline-flex items-center justify-center";

  const variants: Record<string, string> = {
    primary: `${base} bg-blue-600 text-white hover:bg-blue-700`,
    secondary: `${base} bg-gray-200 text-gray-900 hover:bg-gray-300`
  };

  return (
    <p className={variants[variant]} >
      {children}
    </p>
  );
};
