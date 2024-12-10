"use client";
import React from "react";
import DescribeStep from "./describe";
import GenerateStep from "./generate";
import DownloadStep from "./download";

interface TimelineItem {
  title: string;
  content: React.ReactNode;
}

// Data array containing all steps
const timelineData: TimelineItem[] = [
  {
    title: "Step 1: Describe Your Vision",
    content: <DescribeStep />,
  },
  {
    title: "Step 2: AI Generation",
    content: <GenerateStep />,
  },
  {
    title: "Step 3: Export & Use",
    content: <DownloadStep />,
  },
];

const Timeline: React.FC<{ data: TimelineItem[] }> = ({ data }) => {
  return (
    <div className="relative">
      {/* Timeline line */}
      <div className="absolute left-12 top-0 bottom-0 w-px bg-primary-100" />

      {/* Timeline items */}
      <div className="space-y-20">
        {data.map((item, index) => (
          <div key={index} className="relative">
            {/* Timeline dot */}
            <div className="absolute left-12 -translate-x-1/2 w-6 h-6 rounded-full border-4 border-primary-100 bg-primary-50" />

            {/* Content */}
            <div className="ml-24">
              <h3 className="text-xl font-semibold text-primary-800 mb-8">
                {item.title}
              </h3>
              {item.content}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

const FeaturesSection: React.FC = () => {
  return (
    <section className="bg-primary-50 py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <h2 className="text-4xl font-bold text-primary-800 mb-4">
            How CraftNova Works
          </h2>
          <p className="text-xl text-primary-700">
            Transform your ideas into stunning designs with our AI-powered
            platform. No design skills required.
          </p>
        </div>

        {/* Timeline Component */}
        <Timeline data={timelineData} />
      </div>
    </section>
  );
};

export default FeaturesSection;
