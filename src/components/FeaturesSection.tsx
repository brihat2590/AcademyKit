"use client";

import React from "react";
import { ArrowRight } from "lucide-react";
import { FaServer } from "react-icons/fa";
import { SiSololearn } from "react-icons/si";
import { GiProgression } from "react-icons/gi";
import { LuComputer } from "react-icons/lu";
import Link from "next/link";
import { motion } from "framer-motion";

const features = [
  {
    title: "Self Hosted",
    description:
      "Host AcademyKit on your servers, giving you complete control over data privacy, security, and customization.",
    icon: <FaServer size={20} />,
    href: "/self-hosted-lms",
  },
  {
    title: "Learning Management",
    description:
      "Streamline learning management with AcademyKit's intuitive tools for course creation, organization, and scheduling.",
    icon: <SiSololearn size={20} />,
    href: "/training-management",
  },
  {
    title: "Progress Tracking and Reporting",
    description:
      "Gain real-time insights into learner progress and performance, empowering you to make informed decisions.",
    icon: <GiProgression size={20} />,
    href: "/analytics",
  },
  {
    title: "AI Integrated",
    description:
      "Designed to cater to both instructors and students, equipped with user-friendly functionalities and an intuitive interface.",
    icon: <LuComputer size={20} />,
    href: "/ai-integrated",
  },
];

const FeaturesSection: React.FC = () => {
  return (
    <section className="bg-[#fbfef5] py-20 px-6 text-center">
      <div className="max-w-7xl mx-auto">
        <motion.h3
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "backIn" }}
          className="text-lg font-semibold text-gray-800 mb-2 text-left"
        >
          Why AcademyKit?
        </motion.h3>

        <div className="flex flex-col md:flex-row items-start justify-between gap-8 text-left mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "backIn" }}
            className="text-4xl font-semibold text-[#0f103f] leading-tight"
          >
            Maximize Control and <br /> Flexibility
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: "backIn" }}
            className="text-lg text-gray-700 max-w-xl mt-2"
          >
            Harness the Power of Self-Hosting and Comprehensive <br />
            Learning Management with AcademyKit
          </motion.p>
        </div>

        <div className="grid md:grid-cols-4 gap-10 mb-12">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.7,
                delay: 0.3 + index * 0.15,
                ease: "backIn",
              }}
              className="flex flex-col items-center text-center bg-transparent h-full"
            >
              <div className="bg-[#c2e193] p-5 rounded-full mb-4">
                {feature.icon}
              </div>
              <h4 className="font-semibold text-[19px] text-[#0f103f] m-3 p-2">
                {feature.title}
              </h4>
              <p className="text-sm text-[#3a3a53] mb-3">
                {feature.description}
              </p>
              <Link
                href={feature.href}
                className="text-[#0f103f] font-medium flex items-center gap-1 hover:underline"
              >
                Learn more <ArrowRight className="w-4 h-4" />
              </Link>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.5, ease: "backIn" }}
          className="flex gap-4"
        >
          <Link
            href="/why"
            className="bg-[#0f103f] text-white ml-2 px-4 py-2 rounded-md font-semibold hover:opacity-90 border-gray-900 border-3 hover:text-gray-900 hover:border-gray-900 hover:bg-white"
          >
            Discover Features
          </Link>
          <a
            href="https://hub.docker.com/r/vurilo/tmis"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-[#c2e092] text-[#0f103f] px-6 py-2 rounded-md font-semibold hover:opacity-90 border-3 border-[#0c0c3d] hover:border-[#97cb45]"
          >
            Get started
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default FeaturesSection;
