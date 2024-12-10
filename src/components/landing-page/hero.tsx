"use client";
import Link from "next/link";
import { Sparkles, CircleDollarSign } from "lucide-react";
import { PlaceholdersAndVanishInput } from "../ui/placeholders-and-vanish-input";

const Hero = () => {
  const placeholders = [
    "Design an instagram post",
    "Design a youtube banner",
    "Design a youtube thumbnail",
    "Design a linkedin banner",
  ];

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    console.log(e.target.value);
  };
  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("submitted");
  };
  return (
    <div className="relative min-h-[700px] flex items-center justify-center  overflow-hidden">
      {/* Left decorative squares */}
      <div className="absolute md:left-40 lg:left-60 top-[55%] -translate-y-1/2">
        <div className="relative w-[180px]">
          {/* Top row */}
          <div className="w-8 h-8 rounded-lg bg-primary-100 absolute left-[44px] top-0" />
          <div className="w-8 h-8 rounded-lg bg-lightgreen absolute left-[88px] top-0 flex items-center justify-center">
            <Sparkles className="w-5 h-5 text-primary-50" />
          </div>

          {/* Middle row */}
          <div className="w-8 h-8 rounded-lg bg-primary-100 absolute left-0 top-[44px]" />

          {/* Bottom cluster */}
          <div className="w-8 h-8 rounded-lg bg-primary-100 absolute left-0 top-[88px]" />
          <div className="w-8 h-8 rounded-lg bg-saffron absolute left-[44px] top-[88px] flex items-center justify-center">
            <CircleDollarSign className="w-5 h-5 text-primary-50" />
          </div>
          <div className="w-8 h-8 rounded-lg bg-primary-100 absolute left-[88px] top-[88px]" />

          {/* Last square */}
          <div className="w-8 h-8 rounded-lg bg-primary-100 absolute left-[44px] top-[132px]" />
        </div>
      </div>

      {/* Right decorative squares */}
      <div className="absolute md:right-40 lg:right-60 top-[55%] -translate-y-1/2">
        <div className="relative w-[180px]">
          <div className="w-8 h-8 rounded-lg bg-primary-100 absolute left-0 top-0" />
          <div className="w-8 h-8 rounded-lg bg-primary-100 absolute left-[44px] top-0" />

          <div className="w-8 h-8 rounded-lg bg-primary-100 absolute left-0 top-[44px]" />
          <div className="w-8 h-8 rounded-lg bg-primary-100 absolute left-[44px] top-[44px]" />

          <div className="w-8 h-8 rounded-lg bg-primary-100 absolute left-[88px] top-[44px]" />
          <div className="w-8 h-8 rounded-lg bg-lightgreen absolute left-[44px] top-[88px] flex items-center justify-center">
            <Sparkles className="w-5 h-5 text-primary-50" />
          </div>

          <div className="w-8 h-8 rounded-lg bg-saffron absolute left-[88px] top-[132px] flex items-center justify-center">
            <CircleDollarSign className="w-5 h-5 text-primary-50" />
          </div>
          <div className="w-8 h-8 rounded-lg bg-primary-100 absolute left-[132px] top-[132px]" />
        </div>
      </div>

      {/* Main content */}
      <div className="text-center w-full px-4 sm:px-6 lg:px-8 max-w-6xl  z-10">
        <h1 className="text-6xl font-bold text-primary-800 mb-6 tracking-tight leading-tight">
          Design your ideas
          <br />
          with AI
        </h1>
        <p className="text-xl text-primary-700 mb-8 leading-relaxed">
          No design skills needed,
          <br />
          just describe what you want
        </p>

        <PlaceholdersAndVanishInput
          placeholders={placeholders}
          onChange={handleChange}
          onSubmit={onSubmit}
        />
        {/* <Link
          href="/get-started"
          className="inline-flex items-center justify-center px-6 py-3 bg-primary-800 text-primary-50 rounded-full text-lg font-medium hover:bg-opacity-90 transition-colors"
        >
          Get Started
        </Link> */}
      </div>
    </div>
  );
};

export default Hero;
