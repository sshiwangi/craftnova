"use client";
import React from "react";
import { Sparkles } from "lucide-react";
import Window from "./window";
import Image from "next/image";

const GenerateStep: React.FC = () => {
  return (
    <div className="flex flex-col w-full">
      <div className="flex items-center gap-3 mb-4">
        <div className="flex items-center justify-center w-8 h-8 rounded-lg bg-saffron/10 text-primary-800 text-sm">
          02
        </div>
        <Sparkles className="w-6 h-6 text-saffron" />
      </div>

      <h3 className="text-2xl font-bold text-primary-800 mb-2">
        AI generates options
      </h3>
      <p className="text-primary-700 mb-6">
        Choose from multiple design variations
      </p>

      <Window>
        <div className="space-y-3">
          <div className="grid grid-cols-2 gap-6">
            {/* Initial Concept */}
            <div className="space-y-2">
              <p className="text-sm text-primary-700">Initial concept</p>
              <div className="aspect-square rounded-lg bg-primary-100/50 p-3">
                <div className="relative h-full rounded-md overflow-hidden bg-[#F8F8F8] flex">
                  <div className="w-1/2 p-6 flex flex-col justify-between">
                    <div className="space-y-1">
                      <h3 className="font-serif text-4xl tracking-wide text-primary-800">
                        NEW
                      </h3>
                      <p className="font-light text-lg text-primary-700">
                        ARRIVALS
                      </p>
                    </div>
                    <div className="space-y-2">
                      <div className="h-px w-12 bg-primary-800"></div>
                      <p className="text-sm text-primary-700">FW 2024</p>
                    </div>
                  </div>
                  <div className="w-1/2 relative">
                    <Image
                      src="https://images.pexels.com/photos/1926769/pexels-photo-1926769.jpeg?auto=compress&cs=tinysrgb&w=800"
                      alt="Fashion model"
                      width={400}
                      height={400}
                      className="object-cover h-full"
                    />
                  </div>
                </div>
              </div>
            </div>

            {/* Final Version */}
            <div className="space-y-2">
              <p className="text-sm text-primary-700">Final design</p>
              <div className="aspect-square rounded-lg bg-primary-100/50 p-3">
                <div className="relative h-full rounded-md overflow-hidden">
                  <Image
                    src="https://images.pexels.com/photos/1926769/pexels-photo-1926769.jpeg?auto=compress&cs=tinysrgb&w=800"
                    alt="Fashion model"
                    width={800}
                    height={800}
                    className="object-cover w-full h-full"
                  />
                  <div className="absolute inset-0 flex flex-col justify-between p-8 bg-gradient-to-b from-white/50 to-transparent">
                    <div className="space-y-4">
                      <h2 className="font-serif text-5xl tracking-wide leading-tight text-primary-800">
                        NEW
                        <br />
                        <span className="font-light italic">Release</span>
                      </h2>
                      <div className="bg-primary-800 text-primary-50 py-2 px-4 inline-block">
                        <span className="font-light tracking-wider">
                          AUTUMN COLLECTION
                        </span>
                      </div>
                    </div>
                    <div className="self-end text-right">
                      <p className="font-mono text-sm text-primary-800">
                        @craftnova
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Window>
    </div>
  );
};

export default GenerateStep;
