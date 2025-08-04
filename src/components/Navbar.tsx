"use client";

import { ChevronRight, ChevronDown, ChevronUp, Menu, X } from "lucide-react";
import React, { useState } from "react";

export default function Navbar() {
  const [hoveredDropdown, setHoveredDropdown] = useState<"resources" | "solutions" | null>(null);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [mobileDropdownOpen, setMobileDropdownOpen] = useState<"resources" | "solutions" | null>(null);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
    setMobileDropdownOpen(null);
  };

  const toggleMobileDropdown = (dropdown: "resources" | "solutions") => {
    setMobileDropdownOpen(mobileDropdownOpen === dropdown ? null : dropdown);
  };

  return (
    <div className="relative">
      <nav className="w-full sticky top-0 bg-white shadow-lg z-50 font-poppins">
        <div className="max-w-7xl mx-auto py-3 flex items-center justify-between cursor-pointer px-4 md:px-0">
          <div className="flex items-center space-x-10">
            <img src="/logo.png" alt="AcademyKit Logo" className="h-9" />

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-8 text-md font-semibold text-indigo-950 pt-2">
              {/* Solutions Hover */}
              <div
                className="flex items-center space-x-1 relative group"
                onMouseEnter={() => setHoveredDropdown("solutions")}
              >
                <span>Solutions</span>
                {hoveredDropdown === "solutions" ? (
                  <ChevronUp className="w-4 h-4" />
                ) : (
                  <ChevronDown className="w-4 h-4" />
                )}
              </div>

              {/* Resources Hover */}
              <div
                className="flex items-center space-x-1 relative group"
                onMouseEnter={() => setHoveredDropdown("resources")}
              >
                <span>Resources</span>
                {hoveredDropdown === "resources" ? (
                  <ChevronUp className="w-4 h-4" />
                ) : (
                  <ChevronDown className="w-4 h-4" />
                )}
              </div>

              <span className="cursor-pointer transition-colors duration-300">Pricing</span>
            </div>
          </div>

          {/* Desktop Contact Button */}
          <button
            className="hidden md:flex bg-indigo-950 text-white font-medium sm:mr-5  md:px-6 py-3.5 rounded-md items-center space-x-2 
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

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={toggleMobileMenu}
              className="text-indigo-950 hover:text-indigo-700 focus:outline-none focus:text-indigo-700"
            >
              {mobileMenuOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Navigation Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden bg-[#eef7d4] border-t border-gray-200 shadow-lg">
            <div className="px-4 pt-2 pb-3 space-y-1">
              {/* Solutions Mobile Dropdown */}
              <div className="block">
                <button
                  onClick={() => toggleMobileDropdown("solutions")}
                  className="flex items-center justify-between w-full px-3 py-2 text-md font-semibold text-indigo-950 hover:bg-gray-50 rounded-md"
                >
                  <span>Solutions</span>
                  {mobileDropdownOpen === "solutions" ? (
                    <ChevronUp className="w-4 h-4" />
                  ) : (
                    <ChevronDown className="w-4 h-4" />
                  )}
                </button>

                {mobileDropdownOpen === "solutions" && (
                  <div className="mt-2 bg-[#eef7d4] rounded-lg p-4">
                    <div className="space-y-4">
                      <div>
                        <div className="font-semibold text-sm text-indigo-950 mb-3">Why AcademyKit?</div>
                        {[
                          ["🧠", "Self-Hosted LMS", "Use beautiful self hosted free LMS."],
                          ["🗂️", "Training Management", "Manage your trainer, trainee and admin."],
                          ["📊", "Progress Reporting", "Reports and analytics for improved decisions"],
                          ["🤖", "AI Integrated", "Smart tools for enhanced learning experiences"],
                        ].map(([icon, title, desc]) => (
                          <div key={title} className="flex items-start gap-3 mb-3 p-2 hover:bg-white rounded-xl cursor-pointer">
                            <div className="bg-[#b6df87] p-2 rounded-full min-w-[2.5rem] min-h-[2.5rem] flex items-center justify-center">
                              <span className="text-lg">{icon}</span>
                            </div>
                            <div>
                              <p className="text-sm font-semibold text-indigo-950">{title}</p>
                              <p className="text-xs font-light text-gray-600 mt-1">{desc}</p>
                            </div>
                          </div>
                        ))}
                      </div>
                      
                      <div>
                        <div className="font-semibold text-sm text-indigo-950 mb-3">Use Cases</div>
                        {[
                          ["💼", "Sales Training", "Enhance sales team effectiveness"],
                          ["🚀", "On-boarding", "Simplify employee onboarding"],
                          ["🎓", "Employee Training", "Empower workforce with continuous learning"],
                          ["💬", "Customer Success", "Elevate customer engagement"],
                        ].map(([icon, title, desc]) => (
                          <div key={title} className="flex items-start gap-3 mb-3 p-2 hover:bg-white rounded-xl cursor-pointer">
                            <div className="bg-[#b6df87] p-2 rounded-full min-w-[2.5rem] min-h-[2.5rem] flex items-center justify-center">
                              <span className="text-lg">{icon}</span>
                            </div>
                            <div>
                              <p className="text-sm font-semibold text-indigo-950">{title}</p>
                              <p className="text-xs font-light text-gray-600 mt-1">{desc}</p>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                )}
              </div>

              {/* Resources Mobile Dropdown */}
              <div className="block">
                <button
                  onClick={() => toggleMobileDropdown("resources")}
                  className="flex items-center justify-between w-full px-3 py-2 text-md font-semibold text-indigo-950 hover:bg-gray-50 rounded-md"
                >
                  <span>Resources</span>
                  {mobileDropdownOpen === "resources" ? (
                    <ChevronUp className="w-4 h-4" />
                  ) : (
                    <ChevronDown className="w-4 h-4" />
                  )}
                </button>

                {mobileDropdownOpen === "resources" && (
                  <div className="mt-2 bg-[#eef7d4] rounded-lg p-4">
                    <div className="space-y-4">
                      <div>
                        <div className="font-semibold text-sm text-indigo-950 mb-3">Company</div>
                        {[
                          ["🐾", "About Us", "Learn what inspired AcademyKit."],
                          ["💬", "FAQs", "Get answers to all your questions."],
                        ].map(([icon, title, desc]) => (
                          <div key={title} className="flex items-start gap-3 mb-3 p-2 hover:bg-white rounded-xl cursor-pointer">
                            <div className="bg-[#b6df87] p-2 rounded-full min-w-[2.5rem] min-h-[2.5rem] flex items-center justify-center">
                              <span className="text-lg">{icon}</span>
                            </div>
                            <div>
                              <p className="text-sm font-semibold text-indigo-950">{title}</p>
                              <p className="text-xs font-light text-gray-600 mt-1">{desc}</p>
                            </div>
                          </div>
                        ))}
                      </div>
                      
                      <div>
                        <div className="font-semibold text-sm text-indigo-950 mb-3">Get Started</div>
                        {[
                          ["💵", "Pricing", "Start free and upgrade after you are happy."],
                          ["🔍", "Documentation", "Get started here for all help and guides"],
                        ].map(([icon, title, desc]) => (
                          <div key={title} className="flex items-start gap-3 mb-3 p-2 hover:bg-white rounded-xl cursor-pointer">
                            <div className="bg-[#b6df87] p-2 rounded-full min-w-[2.5rem] min-h-[2.5rem] flex items-center justify-center">
                              <span className="text-lg">{icon}</span>
                            </div>
                            <div>
                              <p className="text-sm font-semibold text-indigo-950">{title}</p>
                              <p className="text-xs font-light text-gray-600 mt-1">{desc}</p>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                )}
              </div>

              {/* Pricing */}
              <a
                href="#"
                className="block px-3 py-2 text-md font-semibold text-indigo-950 hover:bg-gray-50 rounded-md"
              >
                Pricing
              </a>

              {/* Mobile Contact Button */}
              <div className="pt-4">
                <button className="w-full bg-indigo-950 text-white font-medium px-6 py-3.5 rounded-md flex items-center justify-center space-x-2 
                  border-3 border-transparent hover:border-indigo-950 
                  hover:bg-white hover:text-indigo-950 
                  transition-all duration-300 hover:font-semibold">
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
            </div>
          </div>
        )}
      </nav>

      {/* Desktop Dropdown Panel */}
      {(hoveredDropdown === "solutions" || hoveredDropdown === "resources") && (
        <div
          className="hidden md:block absolute top-full left-0 w-full z-40 bg-white border-t border-gray-200 shadow-md"
          onMouseEnter={() => setHoveredDropdown(hoveredDropdown)}
          onMouseLeave={() => setHoveredDropdown(null)}
        >
          {hoveredDropdown === "solutions" ? (
            // --- SOLUTIONS CONTENT ---
            <div className="w-full ">
              <div className="flex">
              <div className="w-1/2 bg-[#eef7d4]  pr-4 pt-10 text-indigo-950 flex justify-end">
                  <div className="flex  w-full max-w-2xl justify-end">
                    <div className="flex flex-col items-start">
                      <h3 className="font-semibold text-lg text-indigo-950 mb-4">Why AcademyKit?</h3>
                      {[
                        ["🧠", "Self-Hosted LMS", "Use beautiful self hosted free LMS."],
                        ["🗂️", "Training Management", "Manage your trainer, trainee and admin."],
                        ["📊", "Progress Reporting", "Reports and analytics for improved decisions"],
                        ["🤖", "AI Integrated", "Smart tools for enhanced learning experiences"],
                      ].map(([icon, title, desc]) => (
                        <div 
                          key={title} 
                          className="flex items-start gap-4 hover:bg-white transition rounded-xl p-2 cursor-pointer w-full"
                        >
                          <div className="bg-[#b6df87] p-3 rounded-full min-w-[3rem] min-h-[3rem] flex items-center justify-center">
                            <span className="text-xl">{icon}</span>
                          </div>
                          <div>
                            <p className="font-semibold text-base text-indigo-950">{title}</p>
                            <p className="text-sm font-light leading-relaxed text-gray-600 mt-1">{desc}</p>
                          </div>
                        </div>
                      ))}
                    </div>

                    <div className="flex flex-col items-start">
                      <h3 className="font-semibold text-lg  text-indigo-950 mb-4">Use Cases</h3>
                      {[
                        ["💼", "Sales Training", "Enhance sales team effectiveness"],
                        ["🚀", "On-boarding", "Simplify employee onboarding"],
                        ["🎓", "Employee Training", "Empower workforce with continuous learning"],
                        ["💬", "Customer Success", "Elevate customer engagement"],
                      ].map(([icon, title, desc]) => (
                        <div 
                          key={title} 
                          className="flex items-start gap-4 hover:bg-white transition rounded-xl p-2 cursor-pointer w-full"
                        >
                          <div className="bg-[#b6df87] p-3 rounded-full min-w-[3rem] min-h-[3rem] flex items-center justify-center">
                            <span className="text-xl">{icon}</span>
                          </div>
                          <div>
                            <p className="font-semibold text-base text-indigo-950">{title}</p>
                            <p className="text-sm font-light leading-relaxed text-gray-600 mt-1">{desc}</p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="w-1/2 bg-gray-50 px-10 py-12 text-indigo-950 flex flex-col items-start">
                <h3 className="font-light text-md mb-6">Resources</h3>
                {[
                  {
                    title: "How to get started",
                    desc: "Jump right in - Get an overview of the basics and start building.",
                    img: "https://cdn.prod.website-files.com/65aa7210793f3233f5dc51e7/65aa74211fa1ac0857a92f91_nav-image-06.jpg",
                  },
                  {
                    title: "Advanced features",
                    desc: "Explore advanced analytics, shortcuts, and more.",
                    img: "https://cdn.prod.website-files.com/65aa7210793f3233f5dc51e7/65aa74211fa1ac0857a92f8a_image-06.jpeg",
                  },
                ].map(({ title, desc, img }) => (
                  <div key={title} className="flex items-start gap-6 mb-8 hover:bg-white rounded-xl px-2 py-2 cursor-pointer">
                    <img src={img} className="w-45 h-25 rounded object-cover" />
                    <div>
                      <p className="font-semibold">{title}</p>
                      <p className="font-extralight text-sm">{desc}</p>
                      <p className="text-indigo-950 font-semibold text-sm mt-1">Learn More</p>
                    </div>
                  </div>
                ))}
                <div className="py-6 flex items-center gap-1 text-[#0f103f] font-light cursor-pointer hover:underline">
                  See all <ChevronRight className="w-4 h-4" />
                </div>
              </div>
              
              </div>
            </div>
          ) : (
            // --- RESOURCES CONTENT - GREEN PANEL ALIGNED RIGHT ---
            <div className="flex max-w-full mx-auto">
              <div className="w-8/14 bg-[#eef7d4] pr-4 pt-10 text-indigo-950 flex justify-end">
                <div className="flex  w-full  justify-end">
                  <div className="flex flex-col items-start">
                    <h3 className="font-semibold text-lg mb-4 pl-3">Company</h3>
                    {[
                      ["🐾", "About Us", "Learn what inspired AcademyKit."],
                      ["💬", "FAQs", "Get answers to all your questions."],
                    ].map(([icon, title, desc]) => (
                      <div key={title} className="flex items-start gap-4 hover:bg-white transition rounded-xl p-3 cursor-pointer">
                        <div className="bg-[#b6df87] p-3 rounded-full">{icon}</div>
                        <div>
                          <p className="font-semibold">{title}</p>
                          <p className="text-sm font-extralight leading-relaxed">{desc}</p>
                        </div>
                      </div>
                    ))}
                  </div>

                  <div className="flex flex-col items-start ">
                    <h3 className="font-semibold text-lg pt-1 pl-3 mb-4 ">Get Started</h3>
                    {[
                      ["💵", "Pricing", "Start free and upgrade after you are happy."],
                      ["🔍", "Documentation", "Get started here for all help and guides"],
                    ].map(([icon, title, desc]) => (
                      <div key={title} className="flex items-start gap-4 hover:bg-white transition rounded-xl p-3 cursor-pointer">
                        <div className="bg-[#b6df87] p-3 rounded-full">{icon}</div>
                        <div>
                          <p className="font-semibold">{title}</p>
                          <p className="text-sm font-extralight leading-relaxed">{desc}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              <div className="w-6/14 bg-gray-50 px-10 py-12 text-indigo-950 flex flex-col items-start">
                <h3 className="font-light text-md mb-6">Resources</h3>
                {[
                  {
                    title: "How to get started",
                    desc: "Jump right in - Get an overview of the basics and start building.",
                    img: "https://cdn.prod.website-files.com/65aa7210793f3233f5dc51e7/65aa74211fa1ac0857a92f91_nav-image-06.jpg",
                  },
                  {
                    title: "Advanced features",
                    desc: "Explore advanced analytics, shortcuts, and more.",
                    img: "https://cdn.prod.website-files.com/65aa7210793f3233f5dc51e7/65aa74211fa1ac0857a92f8a_image-06.jpeg",
                  },
                ].map(({ title, desc, img }) => (
                  <div key={title} className="flex items-start gap-6 mb-8 hover:bg-white rounded-xl px-2 py-2 cursor-pointer">
                    <img src={img} className="w-45 h-25 rounded object-cover" />
                    <div>
                      <p className="font-semibold">{title}</p>
                      <p className="font-extralight text-sm">{desc}</p>
                      <p className="text-indigo-950 font-semibold text-sm mt-1">Learn More</p>
                    </div>
                  </div>
                ))}
                <div className="py-6 flex items-center gap-1 text-[#0f103f] font-light cursor-pointer hover:underline">
                  See all <ChevronRight className="w-4 h-4" />
                </div>
              </div>
            </div>
          )}

          {/* Footer under dropdown */}
          <div className="w-full bg-[#0000f0]">
            <div className="max-w-7xl mx-auto text-white px-6 py-6 flex items-center justify-between text-sm md:text-base">
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
    </div>
  );
}