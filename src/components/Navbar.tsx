"use client";

import { ChevronRight } from "lucide-react";
import React, { useState, useRef, useEffect } from "react";

export default function Navbar() {
  const [showResources, setShowResources] = useState(false);
  const [showSolutions, setShowSolutions] = useState(false);
  const panelRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (
        panelRef.current &&
        !panelRef.current.contains(event.target as Node)
      ) {
        setShowResources(false);
        setShowSolutions(false);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <>
      <nav className="w-full sticky top-0 bg-white shadow-lg z-50 font-poppins">
        <div className="max-w-7xl mx-auto py-3 flex items-center justify-between cursor-pointer">
          <div className="flex items-center space-x-10">
            <img src="/logo.png" alt="AcademyKit Logo" className="h-9" />

            <div className="flex items-center space-x-8 text-md font-semibold text-indigo-950 pt-2">
              <div
                onClick={() => {
                  setShowSolutions(!showSolutions);
                  setShowResources(false);
                }}
                className="flex items-center space-x-1 cursor-pointer transition-colors duration-300"
              >
                <span>Solutions</span>
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                  <path
                    fillRule="evenodd"
                    d="M5.23 7.21a.75.75 0 011.06.02L10 11.188l3.71-3.958a.75.75 0 111.08 1.04l-4.25 4.533a.75.75 0 01-1.08 0L5.21 8.27a.75.75 0 01.02-1.06z"
                    clipRule="evenodd"
                  />
                </svg>
              </div>

              <div
                onClick={() => {
                  setShowResources(!showResources);
                  setShowSolutions(false);
                }}
                className="flex items-center space-x-1 cursor-pointer transition-colors duration-300"
              >
                <span>Resources</span>
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                  <path
                    fillRule="evenodd"
                    d="M5.23 7.21a.75.75 0 011.06.02L10 11.188l3.71-3.958a.75.75 0 111.08 1.04l-4.25 4.533a.75.75 0 01-1.08 0L5.21 8.27a.75.75 0 01.02-1.06z"
                    clipRule="evenodd"
                  />
                </svg>
              </div>

              <span className="cursor-pointer transition-colors duration-300">
                Pricing
              </span>
            </div>
          </div>

          <button
            className="bg-indigo-950 text-white font-medium px-6 py-3.5 rounded-md flex items-center space-x-2 
              border-3 border-transparent hover:border-indigo-950 
              hover:bg-white hover:text-indigo-950 
              transition-all duration-300 hover:font-semibold mt-2"
          >
            <span>Contact Us</span>
            <svg
              className="w-5 h-5"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              viewBox="0 0 24 24"
            >
              <path d="M21 15a2 2 0 01-2 2H7l-4 4V5a2 2 0 012-2h14a2 2 0 012 2z" />
            </svg>
          </button>
        </div>
      </nav>

      {(showSolutions || showResources) && (
        <div
          ref={panelRef}
          className="absolute top-[90px] left-0 w-full z-40 bg-white border-t border-gray-200 shadow-md transition-all duration-300"
        >
          {showSolutions ? (
            <div className="w-full ">
            <div className="flex   ">
              <div className="w-1/2  bg-[#eef7d4] px-12 flex  gap-12 text-indigo-950 py-12    ">
                <div className="">
                  <h3 className="font-bold text-lg mb-6">Why AcademyKit?</h3>
                  {[
                    ["🧠", "Self-Hosted LMS", "Use beautiful self hosted free LMS."],
                    ["🗂️", "Training Management", "Manage your trainer, trainee and admin."],
                    ["📊", "Progress Reporting and Tracking", "Reports and analytics for improved decision making"],
                    ["🤖", "AI Integrated", "Reports and analytics for improved decision making"],
                  ].map(([icon, title, desc]) => (
                    <div key={title} className="mb-6 flex gap-4 items-start">
                      <div className="text-xl">{icon}</div>
                      <div>
                        <p className="font-bold">{title}</p>
                        <p className="text-sm">{desc}</p>
                      </div>
                    </div>
                  ))}
                </div>

                <div>
                  <h3 className="font-bold text-lg mb-6">Use Cases</h3>
                  {[
                    ["💼", "Sales Training", "Enhance sales team effectiveness."],
                    ["🚀", "On-boarding", "Simplify employee onboarding process."],
                    ["🎓", "Employee Training", "Empower workforce with continuous learning."],
                    ["💬", "Customer Success", "Elevate customer engagement and satisfaction."],
                  ].map(([icon, title, desc]) => (
                    <div key={title} className="mb-6 flex gap-4 items-start">
                      <div className="text-xl">{icon}</div>
                      <div>
                        <p className="font-bold">{title}</p>
                        <p className="text-sm">{desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="w-1/2 bg-white px-12 py-12 text-indigo-950">
                <h3 className="font-bold text-lg mb-6 ">Resources</h3>
                {[
                  {
                    title: "How to get started",
                    desc: `Jump right in — get an overview of the basics and get started on building.`,
                    img: "https://cdn.prod.website-files.com/65aa7210793f3233f5dc51e7/65aa74211fa1ac0857a92f91_nav-image-06.jpg",
                  },
                  {
                    title: "Advanced features",
                    desc: "Once you’re ready, learn more about advanced analytics, features and shortcuts.",
                    img: "https://cdn.prod.website-files.com/65aa7210793f3233f5dc51e7/65aa74211fa1ac0857a92f8a_image-06.jpeg",
                  },
                ].map(({ title, desc, img }) => (
                  <div key={title} className="flex items-start gap-6 mb-8 max-w-md">
                    <img src={img} className="w-24 h-16 rounded object-cover" />
                    <div>
                      <p className="font-bold">{title}</p>
                      <p className="text-sm">{desc}</p>
                      <p className="text-indigo-950 font-semibold text-sm mt-1">Learn More</p>
                    </div>
                  </div>
                ))}
                <p className="text-indigo-950 font-semibold text-sm mt-4 cursor-pointer hover:underline">See all →</p>
              </div>
            </div>
            </div>
          ) : (
            // Your original Resources dropdown content
            <div className="flex max-w-full mx-auto">
              <div className="w-1/2 bg-[#eef7d4] px-16 py-16 text-indigo-950 flex justify-end gap-10">
  {/* Company Section */}
  <div className="flex flex-col items-start">
    <h3 className="font-semibold text-lg mb-8">Company</h3>

    <div className="flex items-start gap-4  hover:bg-white transition rounded-xl p-5 cursor-pointer">
      <div className="bg-[#b6df87] p-3 rounded-full">🐾</div>
      <div>
        <p className="font-semibold">About Us</p>
        <p className="text-sm font-extralight leading-relaxed">
          Learn what inspired <br /> AcademyKit.
        </p>
      </div>
    </div>

    <div className="flex items-start gap-4 hover:bg-white transition rounded-xl p-5 cursor-pointer">
      <div className="bg-[#b6df87] p-3 rounded-full">💬</div>
      <div>
        <p className="font-semibold">FAQs</p>
        <p className="text-sm font-extralight leading-relaxed">
          Get answers to all <br /> your questions.
        </p>
      </div>
    </div>
  </div>

  {/* Get Started Section */}
  <div className="flex flex-col items-start">
    <h3 className="font-semibold text-lg mb-8">Get Started</h3>

    <div className="flex items-start gap-4  hover:bg-white transition rounded-xl p-5 cursor-pointer">
      <div className="bg-[#b6df87] p-3 rounded-full">💵</div>
      <div>
        <p className="font-semibold">Pricing</p>
        <p className="text-sm font-extralight leading-relaxed">
          Start free and upgrade<br></br> after you are happy.
        </p>
      </div>
    </div>

    <div className="flex items-start gap-4 hover:bg-white transition rounded-xl p-5 cursor-pointer">
      <div className="bg-[#b6df87] p-3 rounded-full">🔍</div>
      <div>
        <p className="font-semibold">Documentation</p>
        <p className="text-sm font-extralight leading-relaxed">
          Get started here for <br></br>all help and guides
        </p>
      </div>
    </div>
  </div>
</div>


              


              <div className="w-1/2 bg-gray-50 px-10 py-12 text-indigo-950 flex flex-col items-start  ">
                <h3 className="font-light text-md mb-6 ">Resources</h3>

                <div className="flex items-start gap-6 mb-8 hover:bg-white rounded-xl px-2 py-2 cursor-pointer">
                  <img
                    src="https://cdn.prod.website-files.com/65aa7210793f3233f5dc51e7/65aa74211fa1ac0857a92f91_nav-image-06.jpg"
                    className="w-45 h-25 rounded object-cover"
                    alt="Get started"
                  />
                  <div>
                    <p className="font-semibold ">How to get started</p>
                    <p className=" font-extralight text-sm ">Jump right in - Get an overview of the basics and<br></br> start building.</p>
                    <p className="text-indigo-950 font-semibold text-sm mt-1">Learn More</p>
                  </div>
                </div>

                <div className="flex items-start gap-6 hover:bg-white rounded-xl px-2 py-2 cursor-pointer">
                  <img
                    src="https://cdn.prod.website-files.com/65aa7210793f3233f5dc51e7/65aa74211fa1ac0857a92f8a_image-06.jpeg"
                    className="w-45 h-25 rounded object-cover"
                    alt="Advanced features"
                  />
                  <div className="">
                    <p className="font-semibold">Advanced features</p>
                    <p className="text-sm font-extralight">Explore advanced analytics, shortcuts, and more.</p>
                    <p className="text-indigo-950 font-semibold text-sm mt-1">Learn More</p>
                  </div>
                </div>
                <div className="py-6 flex items-center gap-1 text-[#0f103f] font-light cursor-pointer hover:underline">
  See all <ChevronRight className="w-4 h-4" />
</div>
              </div>
              
            </div>
          )}
          <div className="w-full bg-[#0000f0]">
          <div className="max-w-7xl mx-auto text-white px-6 py-6 flex items-center justify-between text-sm md:text-base ">
            <div className="font-medium">
              Ready to get started?{" "}
              <span className="font-bold underline cursor-pointer">Request for Demo</span>
            </div>
            <div className="flex items-center space-x-8 font-semibold">
              <span className="cursor-pointer hover:underline">Learn More</span>
              <span className="flex items-center gap-2 cursor-pointer hover:underline">
                <svg
                  className="w-5 h-5"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                >
                  <path d="M21 15a2 2 0 01-2 2H7l-4 4V5a2 2 0 012-2h14a2 2 0 012 2z" />
                </svg>
                Chat to sales
              </span>
            </div>
          </div>
        </div>
        </div>
      )}
    </>
  );
}
