"use client";
import React, { useEffect, useState } from "react";
import {
  Clock,
  Rocket,
  BarChart3,
  Users,
} from "lucide-react";

export default function AnalyticsTimeline() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 100); // adjust scroll threshold as needed
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section className="bg-[#f9fdf3] py-16 px-6">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12">
        {/* Left Section */}
        <div>
          <h4 className="text-[#0c0c3d] font-semibold text-sm mb-2">
            Benefits
          </h4>
          <h2 className="text-3xl md:text-4xl font-bold text-[#0c0c3d]">
            Beautiful analytics to grow smarter
          </h2>
        </div>

        {/* Right Section - Timeline */}
        <div className="relative space-y-12">
          {/* Animated vertical black line */}
          <div
            className={`absolute left-4 top-0 bottom-0 w-0.5 transition-all duration-700 ease-in-out z-0 ${
              scrolled ? "bg-black opacity-100" : "opacity-0"
            }`}
            style={{ marginLeft: "14px" }}
          />

          {/* Timeline Items */}
          {[
            {
              icon: <Clock className="text-[#0c0c3d]" size={20} />,
              title: "Save time and resources",
              desc: "Simplify administration and free up valuable time.",
            },
            {
              icon: <Rocket className="text-[#0c0c3d]" size={20} />,
              title: "Improve training delivery",
              desc:
                "Ensure smooth course delivery and access for all learners.",
            },
            {
              icon: <BarChart3 className="text-[#0c0c3d]" size={20} />,
              title: "Gain actionable insights",
              desc:
                "Use data to make informed decisions about your training programs.",
            },
            {
              icon: <Users className="text-[#0c0c3d]" size={20} />,
              title: "Boost communication and collaboration",
              desc:
                "Improve communication between administrators, instructors, and learners.",
            },
          ].map((item, i) => (
            <div key={i} className="flex items-start gap-4 relative z-10">
              <div className="shrink-0 bg-[#eaf5cd] p-3 rounded-full">
                {item.icon}
              </div>
              <div>
                <h3 className="text-lg font-bold text-[#0c0c3d]">
                  {item.title}
                </h3>
                <p className="text-[#3d3d3d] mt-1">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
