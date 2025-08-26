"use client";
import Link from "next/link";
import { useState } from "react";

const UseCases = () => {
  const [activeSection, setActiveSection] = useState("Employee Training");

  const sections = [
    {
      title: "Customer Success",
      description:
        "Enable customers to get most of your product. Reduce churn and increase loyalty.",
      image:
        "https://s3.sursatech.com/api/v1/buckets/academykit/objects/download?preview=true&prefix=useCases1.png&version_id=null",
      href: "/customer-success",
    },
    {
      title: "Employee Training",
      description:
        "Onboard new hires, upskill existing employees, and ensure compliance with mandatory training.",
      image:
        "https://s3.sursatech.com/api/v1/buckets/academykit/objects/download?preview=true&prefix=useCases2.png&version_id=null",
      href: "/employee-training",
    },
    {
      title: "Capacity Building",
      description:
        "Train partners resellers, or franchises to improve product knowledge and sales skills",
      image:
        "https://s3.sursatech.com/api/v1/buckets/academykit/objects/download?preview=true&prefix=useCases3.png&version_id=null",
      href: "/capacity-building",
    },
  ];

  const activeData = sections.find(
    (section) => section.title === activeSection
  );

  return (
    <div className="w-full bg-[#fbfef5] py-10">
      <div className="max-w-7xl mx-auto py-8 px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-12">
          <p className="font-medium mb-2 text-sm tracking-wide text-gray-900">
            Use Cases
          </p>
          <h1 className="text-3xl sm:text-4xl py-2 font-semibold text-gray-900 mb-4">
            See how you can get real value
          </h1>
          <p className="text-gray-900 text-lg">
            Use cases you can start to start with your team
          </p>
        </div>

        {/* Main Content */}
        <div className="flex flex-col lg:flex-row gap-8 items-start py-6">
          {/* Left Side - Use Cases */}
          <div className="w-full lg:w-1/2">
            {sections.map((section) => (
              <div key={section.title} className="relative">
                {activeSection === section.title && (
                  <div className="absolute left-0 top-0 bottom-0 w-1 bg-black"></div>
                )}

                <div
                  className="pl-6 pb-8 cursor-pointer"
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

          {/* Right Side - Image with Button */}
          <div className="w-full lg:w-1/2 flex flex-col items-center">
            <div className="relative w-full max-w-md">
              {/* Image */}
              <div className="w-full rounded-lg overflow-hidden mb-4">
                <img
                  src={activeData?.image}
                  alt={activeSection}
                  className="w-full h-full object-contain"
                />
              </div>

              {/* Learn More Button */}
              {activeData && (
                <Link
                  href={activeData.href}
                  className="flex justify-center items-center max-w-[140px] mx-auto  py-3  text-sm font-medium text-white bg-black rounded-md  transition mt-8 border-3 border-gray-900 hover:bg-white hover:text-gray-900 "
                >
                  Learn More
                </Link>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UseCases;
