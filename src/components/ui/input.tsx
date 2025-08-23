import React from "react";

interface InputProps {
  type?: string;
  value: number | string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  min?: number;
  className?: string;
}

export const Input: React.FC<InputProps> = ({ type = "text", value, onChange, min, className }) => (
  <input
    type={type}
    value={value}
    min={min}
    onChange={onChange}
    className={`border rounded px-2 py-1 ${className}`}
  />
);
