import React from "react";

export const Progress: React.FC<{ value?: number; className?: string }> = ({ value = 0, className }) => (
  <div className={`bg-gray-200 rounded ${className}`} style={{ width: "100%", height: "10px" }}>
    <div className="bg-yellow-500 h-full rounded" style={{ width: `${value}%` }} />
  </div>
);
