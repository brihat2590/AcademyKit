"use client";

import { ChevronRight, ChevronDown, ChevronUp, Menu, X } from "lucide-react";
import Link from "next/link";
import React, { useState } from "react";
import { FaBrain, FaPlayCircle, FaSearchengin } from "react-icons/fa";
import { FaHotTubPerson, FaPersonCircleCheck, FaPersonSnowboarding } from "react-icons/fa6";
import { FiDollarSign } from "react-icons/fi";
import { GiProgression } from "react-icons/gi";
import { IoIosPerson } from "react-icons/io";
import { MdModelTraining, MdOnDeviceTraining } from "react-icons/md";

const Solutions=[
  {
    icon:<FaPersonCircleCheck size={22}/>,
    title:"Self-Hosted LMS",
    description:"Use beautiful self hosted free LMS.",
    href:"/self-hosted-lms"
  },
  {
    icon:<MdOnDeviceTraining size={22}/>,
    title:"Training Management",
    description:"Manage your trainer, trainee and admin.",
    href:"/training-management"
  },
  {
    icon:<GiProgression size={22}/>,
    title:"Progress Reporting",
    description:"Reports and analytics for improved decisions",
    href:"/analytics"
  },
  {
    icon:<FaBrain size={22}/>,
    title:"AI Integrated",
    description:"Smart tools for enhanced learning experiences",
    href:"/ai-integrated"
  },
   
]
const Solutions2=[
  {
    icon:<MdModelTraining size={22}/>,
    title:"Sales Training",
    description:"Enhance sales team effectiveness",
    href:"/capacity-building"
  },
  {
    icon:<FaPersonSnowboarding size={22}/>,
    title:"On-boarding",
    description:"Simplify employee onboarding",
    href:"/on-boarding"
  },
  {
    icon:<FaHotTubPerson size={22}/>,
    title:"Employee Training",
    description:"Empower workforce with continuous learning",
    href:"/employee-training"
  },
  {
    icon:<IoIosPerson size={22}/>,
    title:"Customer Success",
    description:"Elevate customer engagement",
    href:"/customer-success"
  }
]
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
    <div className="relative mb-15 sm:mb-20">
      <nav className="w-full fixed z-50  top-0  bg-white shadow-lg  font-poppins ">
        <div className="max-w-7xl mx-auto py-3 flex items-center justify-between cursor-pointer px-4 md:px-0">
          <div className="flex items-center space-x-10">
            <Link href={"/"}><img src="/logo.png" alt="AcademyKit Logo" className="h-9" /></Link>

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

              <Link href={"/pricing"} className="cursor-pointer transition-colors duration-300">Pricing</Link>
            </div>
          </div>

          {/* Desktop Contact Button */}
          <button
            className="hidden md:flex bg-indigo-950 text-white font-medium sm:mr-5  md:px-6 py-3.5 rounded-md items-center space-x-2 
              border-3 border-transparent hover:border-indigo-950 
              hover:bg-white hover:text-indigo-950 
              transition-all duration-300 hover:font-semibold mt-2"
          >
            <Link href={"/contact"}>Contact Us</Link>
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
                        {Solutions.map(({ icon: Icon, title, description, href }) => (
  <Link
    href={href}
    key={title}
    onClick={() => {
      setHoveredDropdown(null);
      setMobileDropdownOpen(null);
      setMobileMenuOpen(false);
    }}
    className="flex items-start gap-3 mb-3 p-2 hover:bg-white rounded-xl cursor-pointer"
  >
    <div className="p-2 rounded-full min-w-[2.5rem] min-h-[2.5rem] flex items-center justify-center ">
      {Icon}
    </div>
    <div>
      <p className="text-sm font-semibold text-indigo-950">{title}</p>
      <p className="text-xs font-light text-gray-600 mt-1">{description}</p>
    </div>
  </Link>
))}
                      </div>
                      
                      <div>
                        <div className="font-semibold text-sm text-indigo-950 mb-3">Use Cases</div>
                        {Solutions2.map(({ icon: Icon, title, description, href }) => (
  <Link
    href={href}
    key={title}
    onClick={() => {
      setHoveredDropdown(null);
      setMobileDropdownOpen(null);
      setMobileMenuOpen(false);
    }}
    className="flex items-start gap-3 mb-3 p-2 hover:bg-white rounded-xl cursor-pointer"
  >
    <div className="p-2 rounded-full min-w-[2.5rem] min-h-[2.5rem] flex items-center justify-center">
      {Icon}
    </div>
    <div>
      <p className="text-sm font-semibold text-indigo-950">{title}</p>
      <p className="text-xs font-light text-gray-600 mt-1">{description}</p>
    </div>
  </Link>
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
                        
                      </div>
                     {[
                          ["🐾", "About Us", "Learn what inspired AcademyKit.","/about-us"],
                          ["💬", "FAQs", "Get answers to all your questions.","/FAQ"],
                        ].map(([icon, title, desc,href]) => (
                          <Link href={href} key={title} onClick={()=>{
                            
                            setMobileMenuOpen(false)
                          }} className="flex items-start gap-3 mb-3 p-2 hover:bg-white rounded-xl cursor-pointer">
                            <div className="bg-[#b6df87] p-2 rounded-full min-w-[2.5rem] min-h-[2.5rem] flex items-center justify-center">
                              <span className="text-lg">{icon}</span>
                            </div>
                            <div>
                              <p className="text-sm font-semibold text-indigo-950">{title}</p>
                              <p className="text-xs font-light text-gray-600 mt-1">{desc}</p>
                            </div>
                          </Link>  
                        ))}
                    
                      
                      <div>
                        <div className="font-semibold text-sm text-indigo-950 mb-3">Get Started</div>
                        {/* {[
                          ["💵", "Pricing", "Start free and upgrade after you are happy.","/pricing"],
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
                        ))} */}
                        <Link href={"/pricing"} onClick={()=>{
                          setMobileMenuOpen(false);
                        }} className="flex items-start gap-3 mb-3 p-2 hover:bg-white rounded-xl cursor-pointer">
                            <div className=" p-2 rounded-full min-w-[2.5rem] min-h-[2.5rem] flex items-center justify-center">
                              <span className="text-lg"><FiDollarSign/></span>
                            </div>
                            <div>
                              <p className="text-sm font-semibold text-indigo-950">Pricing</p>
                              <p className="text-xs font-light text-gray-600 mt-1">Start free and upgrade after you are happy.</p>
                            </div>
                          </Link>
                          <a href={"https://docs.academykit.co/app-documentation/introduction"} className="flex items-start gap-3 mb-3 p-2 hover:bg-white rounded-xl cursor-pointer" onClick={()=>{
                            setMobileMenuOpen(false)
                          }}>
                            <div className=" p-2 rounded-full min-w-[2.5rem] min-h-[2.5rem] flex items-center justify-center">
                              <span className="text-lg"><FaSearchengin/></span>
                            </div>
                            <div>
                              <p className="text-sm font-semibold text-indigo-950">Documentation</p>
                              <p className="text-xs font-light text-gray-600 mt-1">Get Start here for all help and guides</p>
                            </div>
                          </a>
                      </div>
                    </div>
                  </div>
                )}
              </div>

              {/* Pricing */}
              <Link
                href="/pricing"
                className="block px-3 py-2 text-md font-semibold text-indigo-950 hover:bg-gray-50 rounded-md"
                onClick={()=>{
                  
                  setMobileMenuOpen(false)
                }}
              >
                Pricing
              </Link>

              {/* Mobile Contact Button */}
              <div className="pt-4">
                <button className="w-full bg-indigo-950 text-white font-medium px-6 py-3.5 rounded-md flex items-center justify-center space-x-2 
                  border-3 border-transparent hover:border-indigo-950 
                  hover:bg-white hover:text-indigo-950 
                  transition-all duration-300 hover:font-semibold">
                  <Link href={"/contact"} onClick={()=>{
                    
                    setMobileMenuOpen(false)
                  }}>Contact Us</Link>
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
              <div className="flex max-w-full mx-auto">
              <div className="w-8/14 bg-[#eef7d4]  pr-4 pt-10 text-indigo-950 flex justify-end">
                  <div className="flex  w-full max-w-2xl justify-end gap-8">
                    <div className="flex flex-col items-start">
                      <h3 className="font-semibold text-lg text-indigo-950 mb-4">Why AcademyKit?</h3>
                      {Solutions.map(({ icon: Icon, title, description, href }) => (
  <Link
    href={href}
    key={title}
    onClick={() => {
      setHoveredDropdown(null);
      setMobileDropdownOpen(null);
      setMobileMenuOpen(false);
    }}
    className="flex items-start gap-3 mb-3 p-2 hover:bg-white rounded-xl cursor-pointer"
  >
    <div className="p-2 rounded-full min-w-[2.5rem] min-h-[2.5rem] flex items-center justify-center">
      {Icon}
    </div>
    <div>
      <p className="text-md font-semibold text-indigo-950">{title}</p>
      <p className="text-sm font-light text-gray-600 mt-1">{description}</p>
    </div>
  </Link>
))}
            
                    </div>

                    <div className="flex flex-col items-start">
                      <h3 className="font-semibold text-lg  text-indigo-950 mb-4">Use Cases</h3>
                      {Solutions2.map(({ icon: Icon, title, description, href }) => (
  <Link
    href={href}
    key={title}
    onClick={() => {
      setHoveredDropdown(null);
      setMobileDropdownOpen(null);
      setMobileMenuOpen(false);
    }}
    className="flex items-start gap-3 mb-3 p-2 hover:bg-white rounded-xl cursor-pointer"
  >
    <div className="p-2 rounded-full min-w-[2.5rem] min-h-[2.5rem] flex items-center justify-center">
      {Icon}
    </div>
    <div>
      <p className="text-md font-semibold text-indigo-950">{title}</p>
      <p className="text-sm font-light text-gray-600 mt-1">{description}</p>
    </div>
  </Link>
))}
                    </div>
                  </div>
                </div>

                <div className="w-6/14 bg-gray-50 px-10 py-12 text-indigo-950 flex flex-col items-start">
                <h3 className="font-light text-md mb-6">Resources</h3>
                
                <a href={"https://docs.academykit.co/introduction"}  className="flex items-start gap-6 mb-8 hover:bg-white rounded-xl px-2 py-2 cursor-pointer">
                    <img src={"https://s3.sursatech.com/api/v1/buckets/academykit/objects/download?preview=true&prefix=howTo.jpg&version_id=null"} className="w-45 h-25 rounded object-cover" />
                    <div>
                      <p className="">How to get started</p>
                      <p className="font-extralight text-sm py-2">Jump right in - Get an overview of the basics and start building.</p>
                      <div className="flex items-center gap-2">
                        <p><FaPlayCircle/></p>

                      <p className="text-indigo-950 font-semibold  text-sm mt-1">Learn More</p>
                      </div>
                      
                    </div>
                  </a>
                  <Link href={"/why"}  className="flex items-start gap-6 mb-8 hover:bg-white rounded-xl px-2 py-2 cursor-pointer" onClick={()=>{
                    setHoveredDropdown(null)
                  }}>
                    <img src={"https://s3.sursatech.com/api/v1/buckets/academykit/objects/download?preview=true&prefix=advFeatures.jpeg&version_id=null"} className="w-45 h-25 rounded object-cover" />
                    <div>
                      <p className="">Advanced Features</p>
                      <p className="font-extralight text-sm py-2">Explore advanced analytics, shortcuts, and more.</p>
                      <div className="flex items-center gap-2">
                        <p><FaPlayCircle/></p>

                      <p className="text-indigo-950 font-semibold  text-sm mt-1">Learn More</p>
                      </div>
                    </div>
                  </Link>
                <Link href={"/why"} className="py-6 flex items-center gap-1 text-[#0f103f] font-light cursor-pointer hover:underline" onClick={()=>{
                  setHoveredDropdown(null)
                }}>
                  See all <ChevronRight className="w-4 h-4" />
                </Link>
              </div>
              
              </div>
            </div>
          ) : (
            // --- RESOURCES CONTENT - GREEN PANEL ALIGNED RIGHT ---
            <div className="flex max-w-full mx-auto">
              <div className="w-8/14 bg-[#eef7d4] pr-4 pt-10 text-indigo-950 flex justify-end">
                <div className="flex  w-full  justify-end ">
                  <div className="flex flex-col items-start gap-2">
                    <h3 className="font-semibold text-lg mb-4 pl-3">Company</h3>
                    {[
                      ["🐾", "About Us", "Learn what inspired AcademyKit.","/about-us"],
                      ["💬", "FAQs", "Get answers to all your questions.","/FAQ"],
                    ].map(([icon, title, desc,href]) => (
                      <Link href={href} key={title} className="flex items-start gap-4 hover:bg-white transition rounded-xl p-3 cursor-pointer" onClick={()=>{
                        setHoveredDropdown(null)
                      }}>
                        <div className="bg-[#b6df87] p-3 rounded-full">{icon}</div>
                        <div>
                          <p className="font-semibold">{title}</p>
                          <p className="text-sm font-extralight leading-relaxed">{desc}</p>
                        </div>
                      </Link>
                    ))}
                  </div>

                  <div className="flex flex-col items-start gap-3 ">
                    <h3 className="font-semibold text-lg pt-1 pl-5 mb-4 ">Get Started</h3>
                    {/* {[
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
                    ))} */}
                    <Link href={"/pricing"} className="flex items-start gap-4 hover:bg-white transition rounded-xl p-3 cursor-pointer" onClick={()=>{
                      setHoveredDropdown(null)
                    }}>
                        <div className=" p-2 rounded-full"><FiDollarSign size={20}/></div>
                        <div>
                          <p className="font-semibold">Pricing</p>
                          <p className="text-sm font-extralight leading-relaxed">Start free and upgrade after you are happy.</p>
                        </div>
                      </Link>
                      <a href={'https://docs.academykit.co/app-documentation/introduction'} className="flex items-center gap-4 hover:bg-white transition rounded-xl p-3 cursor-pointer">
                        <div className=" p-2 rounded-full"><FaSearchengin size={20}/></div>
                        <div>
                          <p className="font-semibold">Documentation</p>
                          <p className="text-sm font-extralight leading-relaxed">Get Start here for all help and guides</p>
                        </div>
                      </a>
                  </div>
                </div>
              </div>

              <div className="w-6/14 bg-gray-50 px-10 py-12 text-indigo-950 flex flex-col items-start">
                <h3 className="font-light text-md mb-6">Resources</h3>
                {/* {[
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
                ))} */}
                <a href={"https://docs.academykit.co/introduction"}  className="flex items-start gap-6 mb-8 hover:bg-white rounded-xl px-2 py-2 cursor-pointer">
                    <img src={"https://s3.sursatech.com/api/v1/buckets/academykit/objects/download?preview=true&prefix=howTo.jpg&version_id=null"} className="w-45 h-25 rounded object-cover" />
                    <div>
                      <p className="">How to get started</p>
                      <p className="font-extralight text-sm py-2">Jump right in - Get an overview of the basics and start building.</p>
                      <div className="flex items-center gap-2">
                        <p><FaPlayCircle/></p>

                      <p className="text-indigo-950 font-semibold  text-sm mt-1">Learn More</p>
                      </div>
                    </div>
                  </a>
                  <Link href={"/why"}  className="flex items-start gap-6 mb-8 hover:bg-white rounded-xl px-2 py-2 cursor-pointer" onClick={()=>{
                    setHoveredDropdown(null)
                  }}>
                    <img src={"https://s3.sursatech.com/api/v1/buckets/academykit/objects/download?preview=true&prefix=advFeatures.jpeg&version_id=null"} className="w-45 h-25 rounded object-cover" />
                    <div>
                      <p className="">Advanced Features</p>
                      <p className="font-extralight text-sm py-2">Explore advanced analytics, shortcuts, and more.</p>
                      <div className="flex items-center gap-2">
                        <p><FaPlayCircle/></p>

                      <p className="text-indigo-950 font-semibold  text-sm mt-1">Learn More</p>
                      </div>
                    </div>
                  </Link>
                <Link href={"/why"} onClick={()=>{
                  setHoveredDropdown(null)
                }}
             className="py-6 flex items-center gap-1 text-[#0f103f] font-light cursor-pointer hover:underline">
                  See all <ChevronRight className="w-4 h-4" />
                </Link>
              </div>
            </div>
          )}

          {/* Footer under dropdown */}
          <div className="w-full bg-[#0000f0]">
            <div className="max-w-7xl mx-auto text-white px-6 py-6 flex items-center justify-between text-sm md:text-base">
              <div className="font-medium">
                Ready to get started?{" "}
                <Link href={"/request-demo"} onClick={()=>{
                  setHoveredDropdown(null)
                }} className="font-bold underline cursor-pointer">Request for Demo</Link>
              </div>
              <div className="flex items-center space-x-8 font-semibold">
                <a href="https://docs.academykit.co/app-documentation/introduction" target="_blank" rel="noopener noreferrer" className="cursor-pointer hover:underline">Learn More</a>
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
                  <Link href={"/contact"} onClick={()=>{
                    setHoveredDropdown(null)
                  }} className="cursor-pointer transition-colors duration-300">Chat to sales</Link>
                </span>
              </div>
            </div>
          </div>
        </div>
      )}
      </nav>

      
    </div>
  );
}