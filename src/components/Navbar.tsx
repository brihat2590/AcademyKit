"use client";

import React from "react";
 
export default function Navbar() {
  return (
    <nav className="w-full bg-white shadow-lg">
      <div className="max-w-7xl mx-auto  py-3 flex items-center justify-between mt-2">
        
        {/* Left: Logo and Links */}
        <div className="flex items-center space-x-10">
          
          {/* Logo */}
          <div className="flex items-center ">
            <img src="/logo.png" alt="AcademyKit Logo" className="h-9" />
            
          </div>

          {/* Navigation Links */}
          <div className="flex items-center space-x-8 text-md font-semibold text-indigo-950 pt-2 ">
            
            <div className="flex items-center space-x-1 cursor-pointer  transition-colors duration-300">
              <span>Solutions</span>
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                <path
                  fillRule="evenodd"
                  d="M5.23 7.21a.75.75 0 011.06.02L10 11.188l3.71-3.958a.75.75 0 111.08 1.04l-4.25 4.533a.75.75 0 01-1.08 0L5.21 8.27a.75.75 0 01.02-1.06z"
                  clipRule="evenodd"
                />
              </svg>
            </div>

            <div className="flex items-center space-x-1 cursor-pointer   transition-colors duration-300">
              <span>Resources</span>
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                <path
                  fillRule="evenodd"
                  d="M5.23 7.21a.75.75 0 011.06.02L10 11.188l3.71-3.958a.75.75 0 111.08 1.04l-4.25 4.533a.75.75 0 01-1.08 0L5.21 8.27a.75.75 0 01.02-1.06z"
                  clipRule="evenodd"
                />
              </svg>
            </div>

            <span className="cursor-pointer   transition-colors duration-300">
              Pricing
            </span>
          </div>
        </div>

        {/* Right: Contact Us Button */}
        <div>
          <button
            className="bg-indigo-950 text-white font-medium px-6 py-3.5 rounded-md flex items-center space-x-2 
            border-2 border-transparent hover:border-indigo-950 
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
      </div>
    </nav>
  );
}
