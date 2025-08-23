import React from "react";

export const Badge: React.FC<{ children: React.ReactNode; className?: string }> = ({ children, className }) => (
  <span className={`px-2 py-1 rounded-full text-xs font-semibold border ${className}`}>{children}</span>
);
