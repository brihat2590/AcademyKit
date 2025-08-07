"use client";

import Image from "next/image";

export default function ProductivityBanner() {
  return (
    <section className="relative bg-[#fbfef5] pb-10 md:py-20 px-4 overflow-visible">
      <div className="relative max-w-7xl mx-auto bg-[#0a0b34] text-white rounded-3xl px-8 py-24 text-center overflow-visible z-10">
        <h2 className="text-2xl sm:text-3xl md:text-5xl font-bold mb-4">
          Transform your productivity
        </h2>
        <p className="text:xs sm:text-[14px] max-w-2xl mx-auto text-gray-300 mb-8">
          Join the ranks of forward-thinking businesses that are transforming training with AcademyKit.<br />
          Streamline tasks and boost productivity effortlessly.
        </p>
        <div className="flex justify-center gap-4">
          <button className="px-5 py-2 rounded-md bg-white text-[#0c0c3d] font-semibold shadow transition hover:border-[#6a9b29] border-3 border-[#0c0c3d]">
            Learn how
          </button>
          <button className="px-5 py-2 rounded-md bg-[#c2e092] text-[#0c0c3d] font-semibold shadow transition border-3 hover:border-[#6a9b29] border-[#0c0c3d]">
            Get started
          </button>
        </div>

        {/* Floating shapes – large + popped out further */}
        <Image
          src="/shapes/shape1.png"
          alt="shape1"
          width={220}
          height={220}
          className="hidden md:block absolute bottom-[-60px] left-[-40px] w-60 h-60 z-20"
        />
        <Image
          src="/shapes/shape2.png"
          alt="shape2"
          width={200}
          height={200}
          className="hidden md:block absolute top-[-60px] right-[10%] w-50 h-50 z-20"
        />
        <Image
          src="/shapes/shape3.png"
          alt="shape3"
          width={210}
          height={210}
          className="hidden md:block absolute bottom-[-60px] right-[-60px] w-56 h-56 z-20"
        />
      </div>
    </section>
  );
}
