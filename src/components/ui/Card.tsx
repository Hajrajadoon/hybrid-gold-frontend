import React from "react";

export function Card({ children, className }: { children: React.ReactNode; className?: string }) {
  return <div className={`border rounded p-4 shadow ${className}`}>{children}</div>;
}

export function CardHeader({ children }: { children: React.ReactNode }) {
  return <div className="font-bold mb-2">{children}</div>;
}
export function CardTitle({ children }: { children: React.ReactNode }) {
  return <h2 className="text-lg">{children}</h2>;
}
export function CardContent({ children }: { children: React.ReactNode }) {
  return <div className="my-2">{children}</div>;
}
export function CardFooter({ children }: { children: React.ReactNode }) {
  return <div className="mt-2">{children}</div>;
}
