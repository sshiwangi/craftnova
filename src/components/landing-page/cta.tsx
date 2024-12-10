"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Sparkles, CircleDollarSign } from "lucide-react";

interface AvatarProps {
  src: string;
  alt: string;
  className?: string;
}

interface SquareProps {
  type: "default" | "green" | "yellow";
  icon?: React.ReactNode;
  className?: string;
}

const Avatar: React.FC<AvatarProps> = ({ src, alt, className = "" }) => (
  <div
    className={`w-16 h-16 rounded-full border-4 border-primary-900 overflow-hidden ${className}`}
  >
    <Image
      src={src}
      alt={alt}
      width={64}
      height={64}
      className="w-full h-full object-cover"
    />
  </div>
);

const Square: React.FC<SquareProps> = ({ type, icon, className = "" }) => {
  const baseStyles = `
    w-8 h-8 
    rounded-lg 
    relative 
    before:absolute 
    before:inset-0 
    before:rounded-lg 
    before:bg-gradient-to-b 
    before:from-white/10 
    before:to-transparent 
    after:absolute 
    after:inset-[1px] 
    after:rounded-lg 
    after:bg-gradient-to-b 
    after:from-white/5 
    after:to-black/5
  `;

  const typeStyles = {
    default: `
      bg-primary-900
      shadow-[inset_0_0_0_1px_rgba(255,255,255,0.1)]
      before:opacity-5
    `,
    green: `
      bg-lightgreen/90
      shadow-[0_0_30px_rgba(119,234,150,0.3)]
      before:opacity-100
    `,
    yellow: `
      bg-saffron/90
      shadow-[0_0_30px_rgba(244,203,69,0.3)]
      before:opacity-100
    `,
  };

  return (
    <div
      className={`${baseStyles} ${typeStyles[type]} backdrop-blur-sm ${className}`}
    >
      {icon && (
        <div className="absolute inset-0 flex items-center justify-center z-10">
          {icon}
        </div>
      )}
    </div>
  );
};

const CommunityCTA: React.FC = () => {
  return (
    <div className="w-full bg-primary-50 p-8 flex justify-center items-center">
      <div className="relative w-full max-w-6xl bg-primary-900 rounded-[32px] px-8 py-16 overflow-hidden">
        {/* Main Content */}
        <div className="text-center">
          <div className="flex justify-center gap-[-8px] mb-8">
            {[1, 2, 3].map((num) => (
              <Avatar
                key={num}
                src={`/images/community-member.jpg`}
                alt="Community member"
                className={num > 1 ? "-ml-2" : ""}
              />
            ))}
          </div>

          <h2 className="text-primary-50 text-5xl font-bold mb-4">
            Join thousands of creators
          </h2>
          <p className="text-primary-700 text-xl mb-8">
            Transform your ideas into stunning designs with AI
          </p>
          <Link
            href="/get-started"
            className="inline-block bg-success text-primary-50 px-8 py-4 rounded-full text-lg font-medium hover:opacity-90 transition-opacity"
          >
            Get Started
          </Link>
        </div>

        {/* Left Square Pattern */}
        <div className="absolute left-24 top-1/2 -translate-y-1/2">
          <div className="relative w-[140px] h-[140px]">
            {/* Top two squares */}
            <Square type="default" className="absolute top-0 left-0" />
            <Square
              type="green"
              className="absolute top-0 left-[44px]"
              icon={<Sparkles className="w-4 h-4 text-primary-50" />}
            />

            {/* Middle square */}
            <Square
              type="default"
              className="absolute top-[44px] left-[22px]"
            />

            {/* Bottom three squares */}
            <div className="absolute bottom-0 left-0 flex gap-[12px]">
              <Square type="default" />
              <Square type="default" />
              <Square type="default" />
            </div>
          </div>
        </div>

        {/* Right Square Pattern - mirrored */}
        <div className="absolute right-24 top-1/2 -translate-y-1/2">
          <div className="relative w-[140px] h-[140px]">
            {/* Top two squares */}
            <Square
              type="yellow"
              className="absolute top-0 right-[44px]"
              icon={<CircleDollarSign className="w-4 h-4 text-primary-50" />}
            />
            <Square type="default" className="absolute top-0 right-0" />

            {/* Middle square */}
            <Square
              type="default"
              className="absolute top-[44px] right-[22px]"
            />

            {/* Bottom three squares */}
            <div className="absolute bottom-0 right-0 flex gap-[12px]">
              <Square type="default" />
              <Square type="default" />
              <Square type="default" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CommunityCTA;
