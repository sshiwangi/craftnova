"use client";
import React from "react";

interface WindowProps {
  children: React.ReactNode;
  className?: string;
}

const Window: React.FC<WindowProps> = ({ children, className = "" }) => {
  return (
    <div
      className={`relative rounded-2xl bg-primary-50 overflow-hidden shadow-lg ${className}`}
    >
      {/* Window Header */}
      <div className="px-4 py-3 bg-primary-100 border-b border-primary-100">
        <div className="flex items-center gap-2">
          <div className="w-3 h-3 rounded-full bg-lightgreen" />
          <div className="w-3 h-3 rounded-full bg-saffron" />
          <div className="w-3 h-3 rounded-full bg-primary-100" />
        </div>
      </div>

      {/* Window Content */}
      <div className="p-6">{children}</div>

      {/* Gradient Border Effect */}
      <div className="absolute inset-0 rounded-2xl border border-primary-100" />
      <div className="absolute inset-[-1px] rounded-2xl bg-gradient-to-b from-white to-transparent -z-10" />
    </div>
  );
};

export default Window;
