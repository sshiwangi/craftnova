"use client";
import { Paintbrush, Sparkles, Headphones } from "lucide-react";
import type { LucideIcon } from "lucide-react";

interface Feature {
  icon: LucideIcon;
  title: string;
  description: string;
  iconBgColor: string;
}

const features: Feature[] = [
  {
    icon: Paintbrush,
    title: "Just Describe It",
    description:
      "Tell us what you want to create - from logos to social media posts. Our AI understands and brings your vision to life",
    iconBgColor: "bg-lightgreen",
  },
  {
    icon: Sparkles,
    title: "AI Makes it Perfect",
    description:
      "Get professional-quality designs instantly. Our AI refines every detail to match your description with precision",
    iconBgColor: "bg-saffron",
  },
  {
    icon: Headphones,
    title: "Instant Iterations",
    description:
      "Not quite right? Just tell us what to change. Refine your design with natural language until it's exactly what you want",
    iconBgColor: "bg-primary-800",
  },
];

const Features = () => {
  return (
    <section id="features" className="relative mb-32 py-32 bg-primary-50">
      {/* Decorative lines with squares */}
      <div
        className="absolute inset-0 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
        aria-hidden="true"
      >
        {/* Horizontal Lines */}
        <div className="absolute left-8 right-8 top-0 h-px bg-primary-100" />
        <div className="absolute left-8 right-8 top-1/2 h-px bg-primary-100" />
        <div className="absolute left-8 right-8 bottom-0 h-px bg-primary-100" />

        {/* Vertical Lines */}
        <div className="absolute left-8 top-0 bottom-0 w-px bg-primary-100" />
        {/* <div className="absolute left-1/2 top-0 bottom-0 w-px bg-primary-100 -translate-x-px" /> */}
        <div className="absolute right-8 top-0 bottom-0 w-px bg-primary-100" />

        {/* Intersection Squares - Top */}
        <div className="absolute -top-4 left-6 w-8 h-8 rounded-lg bg-primary-100" />
        <div className="absolute -top-4 left-1/2 -translate-x-1/2 w-8 h-8 rounded-lg bg-primary-100" />
        <div className="absolute -top-4 right-6 w-8 h-8 rounded-lg bg-primary-100" />

        {/* Intersection Squares - Middle */}
        <div className="absolute top-1/2 -translate-y-1/2 left-6 w-8 h-8 rounded-lg bg-primary-100" />
        <div className="absolute top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2 w-8 h-8 rounded-lg bg-primary-100" />
        <div className="absolute top-1/2 -translate-y-1/2 right-6 w-8 h-8 rounded-lg bg-primary-100" />

        {/* Intersection Squares - Bottom */}
        <div className="absolute -bottom-4 left-6 w-8 h-8 rounded-lg bg-primary-100" />
        <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 w-8 h-8 rounded-lg bg-primary-100" />
        <div className="absolute -bottom-4 right-6 w-8 h-8 rounded-lg bg-primary-100" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Badge */}
        <div className="flex justify-center mb-8">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary-100">
            <Sparkles className="w-4 h-4 text-primary-800" />
            <span className="text-sm font-medium text-primary-800">
              Features
            </span>
          </div>
        </div>

        {/* Heading */}
        <h2 className="text-5xl font-bold text-center text-primary-800 mb-24">
          Design anything with AI,
          <br />
          no skills required
        </h2>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-x-8 gap-y-16">
          {features.map((feature, index) => (
            <div key={index} className="relative">
              <div
                className={`w-14 h-14 rounded-2xl ${feature.iconBgColor} flex items-center justify-center mb-6 mx-auto`}
              >
                <feature.icon className="w-7 h-7 text-primary-50" />
              </div>
              <div className="text-center">
                <h3 className="text-2xl font-bold text-primary-800 mb-4">
                  {feature.title}
                </h3>
                <p className="text-primary-700 leading-relaxed">
                  {feature.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
