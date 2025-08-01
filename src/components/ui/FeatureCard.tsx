import React from "react";

interface FeatureCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

export const FeatureCard: React.FC<FeatureCardProps> = ({ icon, title, description }) => (
  <div className="bg-[#0E0E35] text-white rounded-xl shadow-md p-8 flex flex-col items-center text-center max-w-md">
    <div className="bg-[#FFEFAF] rounded-full w-28 h-28 flex items-center justify-center mb-6 text-[#0E0E35] text-4xl">
      {icon}
    </div>
    <h3 className="text-2xl font-bold mb-4">{title}</h3>
    <p className="text-md text-gray-300">{description}</p>
  </div>
);
