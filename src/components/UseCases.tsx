"use client";
import { useState } from "react";

const UseCases = () => {
  const [activeSection, setActiveSection] = useState("Employee Training");
  const sections = [
    {
      title: "Customer Success",
      description: "Enable customers to get most of your product. Reduce churn and increase loyalty.",
      image: "https://cdn.prod.website-files.com/65aa7210793f3233f5dc51e7/6628f617b3f4736d8eb4c7c0_4-p-500.png" 
    },
    {
      title: "Employee Training", 
      description: "Onboard new hires, upskill existing employees, and ensure compliance with mandatory training.",
      image: "https://cdn.prod.website-files.com/65aa7210793f3233f5dc51e7/6629f6353e4626fcb405cc44_capacity%20building-p-800.png" 
    },
    {
      title: "Capacity Building",
      description: "Train partners resellers, or franchises to improve product knowledge and sales skills",
      image: "https://cdn.prod.website-files.com/65aa7210793f3233f5dc51e7/6629d26437d7c761e392542d_customer%20success-p-800.png" // Replace with your image path
    }
  ];

  
  const activeImage = sections.find(section => section.title === activeSection)?.image;

  return (
    <div className="w-full bg-[#fbfef5]">
      <div className="max-w-7xl mx-auto py-8 px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-12">
          <p className="font-medium mb-2 text-sm tracking-wide text-gray-900">
            Use Cases
          </p>
          <h1 className="text-3xl sm:text-4xl font-semibold text-gray-900 mb-4">
            See how you can get real value
          </h1>
          <p className="text-gray-900 text-lg">
            Use cases you can start to start with your team
          </p>
        </div>

        {/* Main Content */}
        <div className="flex flex-col lg:flex-row gap-8 items-start">
          {/* Left Side - Use Cases */}
          <div className="w-full lg:w-1/2">
            {sections.map((section) => (
              <div key={section.title} className="relative">
                {activeSection === section.title && (
                  <div className="absolute left-0 top-0 bottom-0 w-1 bg-black"></div>
                )}
                
                <div 
                  className={`pl-6 pb-8 cursor-pointer ${
                    activeSection === section.title ? 'opacity-100' : 'opacity-100'
                  }`}
                  onClick={() => setActiveSection(section.title)}
                >
                  <h2 className="text-xl sm:text-2xl font-semibold text-gray-900 mb-3">
                    {section.title}
                  </h2>
                  <p className="text-gray-900 text-base leading-relaxed max-w-md">
                    {section.description}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Right Side - Responsive Image */}
           {/* Right Side - Fixed Size Images */}
           <div className="w-full lg:w-1/2 flex justify-center">
            <div className="relative w-full max-w-md">
              {/* Mobile Image - Fixed Dimensions */}
              <div className="lg:hidden w-full flex justify-center">
                <div className="w-64 h-96 rounded-lg overflow-hidden">
                  <img 
                    src={activeImage} 
                    alt={activeSection} 
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>

              {/* Desktop Image - Fixed Dimensions */}
              <div className="hidden lg:block w-full">
                <div className="w-96 h-72 rounded-lg overflow-hidden">
                  <img 
                    src={activeImage} 
                    alt={activeSection} 
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </div>
        </div>
          
          
        </div>
      </div>
    </div>
  );
};

export default UseCases;