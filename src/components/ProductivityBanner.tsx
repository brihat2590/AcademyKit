"use client";

import Image from "next/image";

export default function ProductivityBanner() {
  return (
    <section className="relative bg-[#fbfef5] py-20 px-4 ">
      <div className="relative max-w-7xl mx-auto bg-[#0a0b34] text-white rounded-3xl px-8 py-25 text-center overflow-hidden">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4">
          Transform your productivity
        </h2>
        <p className="text:xs sm:text-sm max-w-2xl mx-auto text-[#d1d1f5] mb-8">
          Join the ranks of forward-thinking businesses that are transforming training with AcademyKit.<br />
          Streamline tasks and boost productivity effortlessly.
        </p>
        <div className="flex justify-center gap-4">
          <button className="px-5 py-2 rounded-md bg-white text-[#0c0c3d] font-semibold shadow  transition  hover:border-[#6a9b29] border-3">
            Learn how
          </button>
          <button className="px-5 py-2 rounded-md bg-[#d5f5a2] text-[#0c0c3d] font-semibold shadow transition border-3 hover:border-[#6a9b29]">
            Get started
          </button>
        </div>

        {/* Floating shapes */}
        <Image
          src="/shapes/shape1.png"
          alt="shape1"
          width={150}
          height={150}
          className="absolute bottom-[-40px] left-[-40px] w-32 h-32"
        />
        <Image
          src="/shapes/shape2.png"
          alt="shape2"
          width={120}
          height={120}
          className="absolute top-[-40px] right-[10%] w-28 h-28"
        />
        <Image
          src="/shapes/shape3.png"
          alt="shape3"
          width={120}
          height={120}
          className="absolute bottom-[-30px] right-[-30px] w-32 h-32"
        />
      </div>
    </section>
  );
}
