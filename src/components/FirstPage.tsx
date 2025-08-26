"use client";

import { Check } from "lucide-react";
import Link from "next/link";
import { motion } from "framer-motion";

export default function Firstpage() {
  return (
    <section className="bg-[#fbfef5] py-10 px-6">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-[70%_30%] gap-10 items-start">
        {/* Left Content */}
        <div>
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeInOut" }}
            className="inline-block bg-[#82c324] text-[#253238] text-xs font-medium px-1 py-1 rounded-full my-2"
          >
            Self-hosted solution
          </motion.span>

          {/* Animated Title */}
          <motion.h2
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1, ease: "easeInOut" }}
            className="text-[#0c0c3d] text-4xl sm:text-6xl font-semibold md:tracking-normal md:leading-18 mb-6"
          >
            Beyond just training: Join <br className="hidden md:block" />
            us for an immersive<br />
            experience that<br />
            empowers you.
          </motion.h2>

          {/* Animated Description */}
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeInOut" }}
            className="text-[#222344] text-[20px] mb-8"
          >
            Self-hosted solution designed to customize and optimize training
            programs<br />
            across various sectors, aiming to enhance learning outcomes for
            participants.
          </motion.p>

          {/* Animated Buttons */}
          <motion.div
            className="flex flex-wrap gap-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3, ease: "easeInOut" }}
          >
            <a
              href={"https://hub.docker.com/r/academykit/academy"}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-[#0c0c3d] text-white px-6 py-2.5 rounded-md font-semibold shadow transition border-3 mt-4 border-gray-900 hover:bg-[#fefefe] hover:text-[#30325c]"
            >
              Download Now
            </a>
            <a
              href={"https://docs.academykit.co/introduction"}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-[#c2e092] text-[#0c0c3d] px-6 py-2.5 rounded-md font-semibold shadow transition border-[#0c0c3d] border-3 mt-4 hover:border-[#97cb45]"
            >
              Learn more <span>→</span>
            </a>
          </motion.div>
        </div>

        {/* Right Feature List aligned to bottom */}
        <motion.div
          className="flex flex-col justify-end h-full text-[#0c0c3d] text-lg gap-6"
          initial="hidden"
          animate="visible"
          variants={{
            hidden: { opacity: 0, y: 20 },
            visible: {
              opacity: 1,
              y: 0,
              transition: {
                ease: "easeInOut",
                duration: 0.8,
                delayChildren: 0.4,
                staggerChildren: 0.15,
              },
            },
          }}
        >
          <FeatureItem text="Take control from the start." />
          <FeatureItem text="Smart learning, driven by AI" />
          <FeatureItem text="Your brand, your System" />
          <FeatureItem text="Easy Deployment" />
        </motion.div>
      </div>
    </section>
  );
}

function FeatureItem({ text }: { text: string }) {
  return (
    <motion.div
      className="flex items-start gap-3"
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "backIn" }}
    >
      <Check className="w-6 h-6 stroke-[3] text-[#0c0c3d]" />
      <span>{text}</span>
    </motion.div>
  );
}
