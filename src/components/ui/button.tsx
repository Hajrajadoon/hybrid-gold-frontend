import React from "react";

interface ButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
  className?: string;
}

export const Button: React.FC<ButtonProps> = ({ children, onClick, className = "" }) => (
  <button
    onClick={onClick}
    className={`px-4 py-2 rounded-xl bg-yellow-600 text-white font-semibold shadow-md hover:scale-105 transition ${className}`}
  >
    {children}
  </button>
);
