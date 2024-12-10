"use client";
import React from "react";
import { MessageSquare } from "lucide-react";
import Window from "./window";

const DescribeStep: React.FC = () => {
  return (
    <div className="flex flex-col w-full">
      <div className="flex items-center gap-3 mb-4">
        <div className="flex items-center justify-center w-8 h-8 rounded-lg bg-lightgreen/10 text-primary-800 text-sm">
          01
        </div>
        <MessageSquare className="w-6 h-6 text-lightgreen" />
      </div>

      <h3 className="text-2xl font-bold text-primary-800 mb-2">
        Describe your post
      </h3>
      <p className="text-primary-700 mb-6">
        Tell us what kind of social media post you want to create
      </p>

      <Window>
        <div className="bg-primary-100/50 rounded-lg p-4 font-mono text-sm text-primary-800 space-y-3">
          <div className="flex items-start gap-2">
            <span className="text-lightgreen mt-1">→</span>
            <span>
              Create an Instagram post about a summer sale with a modern,
              minimalist design
            </span>
          </div>
          <div className="flex items-start gap-2">
            <span className="text-saffron mt-1">→</span>
            <span>
              Use bright summer colors, include palm trees, and add text "Summer
              Sale - Up to 50% off"
            </span>
          </div>
          <div className="flex items-start gap-2">
            <span className="text-lightgreen mt-1">→</span>
            <span>Make it eye-catching and trendy</span>
          </div>
        </div>
      </Window>
    </div>
  );
};

export default DescribeStep;
