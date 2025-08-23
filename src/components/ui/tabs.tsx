import React from "react";

export const Tabs: React.FC<{ children: React.ReactNode }> = ({ children }) => (
  <div>{children}</div>
);

export const TabsList: React.FC<{ children: React.ReactNode }> = ({ children }) => (
  <div className="flex space-x-2 mb-2">{children}</div>
);

export const TabsTrigger: React.FC<{
  value: string;
  children: React.ReactNode;
  onClick?: () => void;
}> = ({ children, onClick }) => (
  <button
    onClick={onClick}
    className="px-3 py-1 rounded-md bg-gray-200 hover:bg-gray-300 transition"
  >
    {children}
  </button>
);

export const TabsContent: React.FC<{ value: string; children: React.ReactNode }> = ({
  children,
}) => <div>{children}</div>;
