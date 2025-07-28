// components/FeaturesSection.tsx
import React from "react";
import { ArrowRight } from "lucide-react";

const features = [
  {
    title: "Self Hosted",
    description:
      "Host AcademyKit on your servers, giving you complete control over data privacy, security, and customization.",
    icon: "/icons/self-hosted.svg",
  },
  {
    title: "Learning Management",
    description:
      "Streamline learning management with AcademyKit's intuitive tools for course creation, organization, and scheduling.",
    icon: "/icons/learning-management.svg",
  },
  {
    title: "Progress Tracking and Reporting",
    description:
      "Gain real-time insights into learner progress and performance, empowering you to make informed decisions.",
    icon: "/icons/progress-tracking.svg",
  },
  {
    title: "AI Integrated",
    description:
      "Designed to cater to both instructors and students, equipped with user-friendly functionalities and an intuitive interface.",
    icon: "/icons/ai-integrated.svg",
  },
];

const FeaturesSection: React.FC = () => {
  return (
    <section className="bg-[#fbfef5] py-20 px-6 text-center">
      <div className="max-w-7xl mx-auto">
        <h3 className="text-lg font-semibold text-gray-800 mb-2 text-left">
          Why AcademyKit?
        </h3>

        <div className="flex flex-col md:flex-row items-start justify-between gap-8 text-left mb-16">
          <h2 className="text-4xl font-semibold text-[#0f103f] leading-tight">
            Maximize Control and <br /> Flexibility
          </h2>
          <p className="text-lg text-gray-700 max-w-xl mt-2">
            Harness the Power of Self-Hosting and Comprehensive <br />
            Learning Management with AcademyKit
          </p>
        </div>

        <div className="grid md:grid-cols-4 gap-10 mb-12 ">
          {features.map((feature, index) => (
            <div key={index} className="flex flex-col items-center text-center bg-transparent h-full">
              <div className="bg-[#d7f281] p-4 rounded-full mb-4">
                <img src={feature.icon} alt={feature.title} className="w-8 h-8" />
              </div>
              <h4 className="font-semibold text-[19px] text-[#0f103f] m-3 p-2">
                {feature.title}
              </h4>
              <p className="text-sm text-[#3a3a53] mb-3">{feature.description}</p>
              <a
                href="#"
                className="text-[#0f103f] font-medium flex items-center gap-1 hover:underline"
              >
                Learn more <ArrowRight className="w-4 h-4" />
              </a>
            </div>
          ))}
        </div>

        <div className="flex  gap-4">
          <button className="bg-[#0f103f] text-white px-6 py-2 rounded-md font-semibold hover:opacity-90 border-3 hover:border-[#30325c] hover:text-[#30325c] hover:bg-[#fefefe]">
            Discover Features
          </button>
          <button className="bg-[#c2e092] text-[#0f103f] px-6 py-2 rounded-md font-semibold hover:opacity-90 border-3 border-[#0c0c3d]   hover:border-[#97cb45]">
            Get started
          </button>
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
