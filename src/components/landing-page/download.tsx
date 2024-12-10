"use client";
import React from "react";
import { Download } from "lucide-react";
import Window from "./window";

const DownloadStep: React.FC = () => {
  return (
    <div className="flex flex-col w-full">
      <div className="flex items-center gap-3 mb-4">
        <div className="flex items-center justify-center w-8 h-8 rounded-lg bg-lightgreen/10 text-primary-800 text-sm">
          03
        </div>
        <Download className="w-6 h-6 text-lightgreen" />
      </div>

      <h3 className="text-2xl font-bold text-primary-800 mb-2">
        Export & share
      </h3>
      <p className="text-primary-700 mb-6">
        Download your design in various formats and sizes
      </p>

      <Window>
        <div className="space-y-4">
          <p className="text-sm text-primary-700">Available formats</p>
          <div className="space-y-3">
            <div className="flex items-center justify-between p-3 rounded-lg bg-primary-100/50 text-primary-800">
              <div className="flex items-center gap-3">
                <span className="text-sm font-medium">
                  Instagram Post (1080 x 1080)
                </span>
                <span className="text-xs text-primary-700">PNG</span>
              </div>
              <Download className="w-5 h-5" />
            </div>
            <div className="flex items-center justify-between p-3 rounded-lg bg-primary-100/50 text-primary-800">
              <div className="flex items-center gap-3">
                <span className="text-sm font-medium">
                  Instagram Story (1080 x 1920)
                </span>
                <span className="text-xs text-primary-700">PNG</span>
              </div>
              <Download className="w-5 h-5" />
            </div>
            <div className="flex items-center justify-between p-3 rounded-lg bg-primary-100/50 text-primary-800">
              <div className="flex items-center gap-3">
                <span className="text-sm font-medium">
                  Facebook Post (1200 x 630)
                </span>
                <span className="text-xs text-primary-700">PNG</span>
              </div>
              <Download className="w-5 h-5" />
            </div>
          </div>
        </div>
      </Window>
    </div>
  );
};

export default DownloadStep;
