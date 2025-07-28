"use client";

import { Check } from "lucide-react";

export default function Firstpage() {
  return (
    <section className="bg-[#fbfef5] py-10 px-6">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-[70%_30%] gap-10 items-start">
        {/* Left Content */}
        <div>
          <span className="inline-block bg-[#82c324] text-[#253238] text-xs font-medium px-1 py-1 rounded-full my-2 ">
            Self-hosted solution
          </span>

          <h2 className="text-[#0c0c3d] text-4xl sm:text-6xl font-semibold tracking-normal leading-18 mb-6">
            Beyond just training: Join <br />
            us for an immersive<br />
            experience that<br />
            empowers you.
          </h2>

          <p className="text-[#222344] text-[20px] mb-8">
            Self-hosted solution designed to customize and optimize training
            programs<br />
            across various sectors, aiming to enhance learning outcomes for
            participants.
          </p>

          <div className="flex flex-wrap gap-4 ">
            <button className="bg-[#0c0c3d] text-white px-6 py-2.5 rounded-md font-semibold shadow transition border-3 mt-4 hover:border-[#30325c] hover:bg-[#fefefe] hover:text-[#30325c]">
              Download Now
            </button>
            <button className="bg-[#c2e092] text-[#0c0c3d] px-6 py-2.5 rounded-md font-semibold shadow transition border-[#0c0c3d] border-3 mt-4 hover:border-[#97cb45]">
              Learn more <span className="">→</span>

            </button>
          </div>
        </div>

        {/* Right Feature List aligned to bottom */}
        <div className="flex flex-col justify-end h-full text-[#0c0c3d] text-lg gap-6">
          <FeatureItem text="Take control from the start." />
          <FeatureItem text="Smart learning, driven by AI" />
          <FeatureItem text="Your brand, your System" />
          <FeatureItem text="Easy Deployment" />
        </div>
      </div>
    </section>
  );
}

function FeatureItem({ text }: { text: string }) {
  return (
    <div className="flex items-start gap-3">
      <Check className="w-6 h-6 stroke-[3] text-[#0c0c3d]" />
      <span>{text}</span>
    </div>
  );
}
