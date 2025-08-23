import React from "react";

export const Button: React.FC<React.ButtonHTMLAttributes<HTMLButtonElement> & { variant?: "outline" }> = ({ children, variant, ...props }) => {
  const className = variant === "outline" ? "border px-3 py-1 rounded" : "px-3 py-1 rounded";
  return <button {...props} className={className}>{children}</button>;
};
