 




"use client";

import {
  ArrowDownWideNarrowIcon,
  CheckCircleIcon,
  FileUser,
  Recycle,
} from "lucide-react";
import Link from "next/link";
import React from "react";
import {
  FaNetworkWired,
  FaUserShield,
  FaClipboardList,
  FaChartLine,
} from "react-icons/fa";

const features2 = [
  {
    icon: <Recycle size={24} />,
    title: "Reduced employee turnover",
    description:
      "Investing in onboarding decreases turnover rates by keeping employees engaged and valued.",
  },
  {
    icon: <ArrowDownWideNarrowIcon size={24} />,
    title: "Quicker transition to productivity",
    description:
      "Efficient onboarding shortens the time to proficiency, enhancing your team's performance sooner.",
  },
  {
    icon: <FileUser size={24} />,
    title: "Reduced onboarding training costs",
    description:
      "Online onboarding optimizes training processes and conserves resources, resulting in reduced costs typically associated with traditional onboarding methods.",
  },
  {
    icon: <CheckCircleIcon size={24} />,
    title: "Improved employee satisfaction",
    description:
      "Prioritize onboarding to establish a positive first impression and enhance long-term employee satisfaction.",
  },
];

const features = [
  {
    icon: <FaNetworkWired className="text-[#01002A]" size={24} />,
    title: "Process Preservation",
    desc: `Onboarding isn't just about paperwork anymore. It quickly builds happy, productive employees, reducing turnover, speeding up work, and saving on training costs. Think of engaged team members making a difference from the start – a win for everyone.`,
  },
  {
    icon: <FaUserShield className="text-[#01002A]" size={24} />,
    title: "Role-Based Access",
    desc: `Streamlining the onboarding process for employees based on their specific roles has never been more effortless. Generate tailored courses and initiate specialized training aligned with their respective positions.`,
  },
  {
    icon: <FaClipboardList className="text-[#01002A]" size={24} />,
    title: "Interactive Sessions",
    desc: `Enhance new employee involvement by leveraging interactive functionalities, including quizzes, surveys, and gamification elements. Develop an onboarding experience that captivates and motivates newcomers, fostering their active engagement in the work process right from the start.`,
  },
  {
    icon: <FaChartLine className="text-[#01002A]" size={24} />,
    title: "Performance Tracking",
    desc: `Easily track the progress of your new hires through a dynamic reports dashboard, allowing you to quickly assess their advancements. Additionally, utilize course completion surveys to gather feedback, gaining valuable insights into what aspects are effective and what areas may need improvement.`,
  },
];

export default function HeroSection() {
  return (
    <div className="bg-[#fbfef5]">
      {/* Hero Section */}
      <section className=" bg-[#01002A] text-[#f4e26d] flex  md:px-16 md:py-40 px-8 py-10">

<div className="w-[70%] max-w-3xl mx-auto ">
  <h1 className="text-5xl  md:text-[84px] font-light leading-tight mb-12">
    Optimize The New <br /> Hire Experience
  </h1>
  <p className="text-sm tracking-widest text-white/80 uppercase">
    Streamline onboarding, and boost <br />
    productivity from day one.
  </p>
</div>

{/* Right: Get A Demo Circle */}
<div className="w-[30%] flex justify-start items-center relative -ml-16">
  {/* Shifted left using -ml-16 */}
  <div className="hidden lg:flex    relative group w-64 h-64 items-center justify-center">
    {/* Big Circle (centered) */}
    <div className="absolute w-64 h-64 rounded-full border border-lime-300" />

    {/* Small Circle (starts left, moves right on hover) */}
    <div className="absolute w-44 h-44 rounded-full border border-lime-300 transform -translate-x-20 transition-transform duration-500 ease-in-out group-hover:translate-x-0" />

    {/* Button */}
    <Link href={"/request-demo"} className="relative z-10 text-white tracking-widest text-sm transform -translate-x-20 transition-transform duration-500 ease-in-out group-hover:translate-x-0 pl-2">
      GET A DEMO
    </Link>
  </div>
</div>
</section> 

      {/* Description & Image Section */}
      <section className="bg-[#fbfef5] flex flex-col md:px-16 md:py-24 px-6 py-10">
        <div className="max-w-7xl mx-auto flex flex-col items-center text-center">
          <h2 className="text-2xl sm:text-3xl md:text-5xl font-semibold">
            The power of effective
            <br /> onboarding
          </h2>
          <p className="p-2 font-light text-[19px] mt-4 max-w-[720px] mb-6">
            For HR teams and workforces alike, the process of hiring and
            onboarding new employees can be overwhelming. AcademyKit offers a
            solution by enabling the creation of a highly effective onboarding
            experience that enhances the learning and performance of the
            workforce.
          </p>
          <img
            src="https://s3.sursatech.com/api/v1/buckets/academykit/objects/download?preview=true&prefix=onBoarding.png&version_id=null"
            alt="onboarding"
            className="rounded-lg w-full sm:max-w-xl mx-auto mt-8 mb-5"
          />
        </div>
        <div className="max-w-7xl mx-auto mt-4">
          <img
            src="https://s3.sursatech.com/api/v1/buckets/academykit/objects/download?preview=true&prefix=QA%20big.png&version_id=null"
            alt="onboarding"
            className="w-full rounded-lg"
          />
        </div>
      </section>

      {/* Features Grid Section */}
      <section className="bg-[#fbfef5] py-20 px-6 md:px-16">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-7xl mx-auto">
          {features.map((item, index) => (
            <div key={index} className="flex items-start gap-6">
              <div className="h-10 flex items-center justify-center">
                {item.icon}
              </div>
              <div>
                <h3 className="text-xl font-semibold text-[#01002A] mb-2">
                  {item.title}
                </h3>
                <p className="text-[#01002A]/80 leading-relaxed text-md">
                  {item.desc}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* CTA Button */}
        <div className="flex justify-center mt-12">
          <button className="bg-gray-900 border-3 border-gray-900 text-white hover:bg-white hover:text-gray-900 font-semibold text-sm py-2 px-6 rounded transition duration-300 ease-in-out">
            Get started
          </button>
        </div>
      </section>

      {/* ROI Section */}
      <section className="bg-[#fbfef5] px-6 py-20">
        <div className="max-w-7xl mx-auto text-center md:text-left">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold">
            Onboard well, retain well.
          </h2>
          <p className="py-2 font-light text-md mb-10">
            The ROI of quality employee onboarding.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {features2.map((item, index) => (
              <div
                key={index}
                className="flex items-start gap-4 border shadow rounded-lg py-6 px-4"
              >
                <div className="w-12 h-12 flex items-center justify-center">
                  {item.icon}
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-[#01002A] mb-1">
                    {item.title}
                  </h3>
                  <p className="text-[#01002A]/80 text-sm">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="bg-[#f9fcf1] px-6 py-16">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Self Hosted */}
          <div className="text-center md:text-left flex flex-col items-start">
            <img
              src="https://cdn.prod.website-files.com/65aa7210793f3233f5dc51e7/65c8f34e509232756502678c_Vurilo%20website%20icons.svg"
              alt="placeholder"
              className="w-32 md:w-1/2 mb-4"
            />
            <h3 className="text-xl font-semibold text-[#0c0c3d]">
              Self Hosted
            </h3>
            <p className="text-3xl font-bold text-[#0c0c3d] mt-2">
              $999.00{" "}
              <span className="text-base font-normal">/ year</span>
            </p>
            <p className="text-[#0c0c3d] mt-4">Gain Control Over your Data.</p>
          </div>

          {/* Feature Box */}
          <div className="bg-[#aad751] rounded-lg px-6 py-8 flex flex-col justify-between min-h-[480px]">
            <div>
              <h4 className="text-[#0c0c3d] font-light text-sm mb-2">
                Features
              </h4>
              <h3 className="text-[#0c0c3d] font-extrabold text-xl mb-6">
                Quick look at all the features
              </h3>

              <ul className="space-y-2 text-[#0c0c3d] mt-6">
                <li>✓ Access to all standard features</li>
                <li>✓ Unlimited storage space</li>
                <li>✓ Priority email and phone support</li>
                <li>✓ Advanced analytics and reporting</li>
                <li>✓ Custom branding options</li>
                <li>✓ Team management and user roles</li>
              </ul>
            </div>
            <div className="mt-6">
              <button className="w-full bg-[#0c0c3d] text-white hover:bg-white hover:text-gray-900 py-2 rounded-md font-semibold transition duration-300">
                Try Now
              </button>
              <p className="text-sm text-[#0c0c3d] mt-2 text-center">
                No credit card required. Deploy on your own
              </p>
            </div>
          </div>

          {/* Business Box */}
          <div className="bg-[#0c0c3d] text-white rounded-lg px-6 py-8 flex flex-col justify-between min-h-[480px]">
            <div>
              <h4 className="text-sm mb-2">Business</h4>
              <h3 className="text-xl font-extrabold mb-6">
                Technical Support and Add on
              </h3>
              <p className="text-[#f4e26c] flex items-start">
                <span className="mr-2">→</span>
                Take your business to the next level with a custom mobile app.
                Invest in a personalized solution that drives results.
                (Additional charges apply.)
              </p>
            </div>
            <div className="mt-6">
              <button className="w-full bg-white text-[#0c0c3d] py-2 rounded-md font-semibold hover:bg-gray-200 transition border-2 hover:border-green-600 border-gray-900">
                Contact Us
              </button>
              <p className="text-sm mt-4 text-center">
                Get personalized demo and custom plan
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}


