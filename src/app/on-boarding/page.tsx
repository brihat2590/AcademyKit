"use client";

import { ArrowDownWideNarrowIcon, CheckCircleIcon, FileUser, Recycle } from "lucide-react";
import React from "react";
import { FaNetworkWired, FaUserShield, FaClipboardList, FaChartLine } from "react-icons/fa";

const features2=[
    {
        icon:<Recycle size={24}/>,
        title:"Reduced employee turnover",
        description:"Investing in onboarding decreases turnover rates by keeping employees engaged and valued."
    },
    {
        icon:<ArrowDownWideNarrowIcon size={24}/>,
        title:"Quicker transition to productivity",
        description:"Efficient onboarding shortens the time to proficiency, enhancing your team's performance sooner."
    },{
        icon:<FileUser size={24}/>,
        title:"Reduced onboarding training costs",
        description:"Online onboarding optimizes training processes and conserves resources, resulting in reduced costs typically associated with traditional onboarding methods."
    },{
        icon:<CheckCircleIcon size={24}/>,
        title:"Improved employee satisfaction",
        description:"Prioritize onboarding to establish a positive first impression and enhance long-term employee satisfaction."
    }

    
]
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
  ]
export default function HeroSection() {
  return (
    <div className="bg-[#fbfef5]">
    <section className=" bg-[#01002A] text-[#f4e26d] flex  md:px-16 md:py-40 px-8 py-10">
      {/* Left: Headings */}
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
        <div className="hidden md:flex    relative group w-64 h-64 items-center justify-center">
          {/* Big Circle (centered) */}
          <div className="absolute w-64 h-64 rounded-full border border-lime-300" />

          {/* Small Circle (starts left, moves right on hover) */}
          <div className="absolute w-44 h-44 rounded-full border border-lime-300 transform -translate-x-20 transition-transform duration-500 ease-in-out group-hover:translate-x-0" />

          {/* Button */}
          <button className="relative z-10 text-white tracking-widest text-sm transform -translate-x-20 transition-transform duration-500 ease-in-out group-hover:translate-x-0 pl-2">
            GET A DEMO
          </button>
        </div>
      </div>
    </section>
    <section className="bg-[#fbfef5]  flex flex-col  md:px-16 md:py-24 px-8 py-10 ">
        <div className="max-w-7xl mx-auto flex flex-col">


            <h2 className=" text-center text-2xl sm:text-3xl  md:text-5xl font-semibold">The power of effective<br></br>onboarding</h2>


            <p className=" p-2 text-center font-light text-[19px] mt-2 sm:mt-4 max-w-[720px] mb-4">
            For HR teams and workforces alike, the process of hiring and onboarding new employees can be overwhelming. AcademyKit offers a solution by enabling the creation of a highly effective onboarding experience that enhances the learning and performance of the workforce.

            </p>
            <img src="https://cdn.prod.website-files.com/65aa7210793f3233f5dc51e7/662a05196e1404d06a1a6388_on-boarding-p-800.png"
            alt="onboarding"
            className="rounded-lg max-w-xl mx-auto mt-8 sm:mt-15 mb-5"
            />


        </div>
        <div className="max-w-7xl mx-auto">
            <img src='https://cdn.prod.website-files.com/65aa7210793f3233f5dc51e7/6650113dd8f61520ebd53c59_Mockup-%20on%20boarding-p-2000.png'
            alt="onboarding"/>

        </div>


    </section>
    <section className="bg-[#fbfef5] py-20 px-8 md:px-16">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-14 max-w-7xl mx-auto">
        {features.map((item, index) => (
          <div key={index} className="flex items-start gap-6">
            <div className="w-16 h-12 rounded-full bg-[#f1ecff] flex items-center justify-center">
              {item.icon}
            </div>
            <div>
              <h3 className="text-[20px] font-semibold text-[#01002A] mb-2">{item.title}</h3>
              <p className="text-[#01002A]/80 leading-relaxed text-md">{item.desc}</p>
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

    <section className="max-w-7xl mx-auto  bg-[#fbfef5]">


        <h2 className="text-3xl md:text-4xl font-semibold">Onboard well,retain well.</h2>
        <p className="py-2 font-light text-md mb-5 md:mb-10">The ROI of quality employee onboarding.</p>


        <div className="grid grid-cols-1 md:grid-cols-2 gap-14 max-w-7xl mx-auto">
        {features2.map((item, index) => (
          <div key={index} className="flex items-start gap-6 border-1 shadow-mg rounded-lg py-8 px-3">
            <div className="w-16 h-12 rounded-full bg-[#f1ecff] flex items-center justify-center ">
              {item.icon}
            </div>
            <div>
              <h3 className="text-[20px] font-semibold text-[#01002A] mb-2">{item.title}</h3>
              <p className="text-[#01002A]/80 leading-relaxed text-md">{item.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
    <section className="bg-[#f9fcf1] py-12 px-6">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 items-stretch">
        {/* Left Section (Image and Pricing) */}
        <div className="text-center md:text-left flex flex-col justify-center items-start ">
          {/* Placeholder for Image */}
          <img src={"https://cdn.prod.website-files.com/65aa7210793f3233f5dc51e7/65c8f34e509232756502678c_Vurilo%20website%20icons.svg"} alt="placholder"
          className="md:w-1/2 "
          />

          <h3 className="text-xl font-semibold text-[#0c0c3d]">Self Hosted</h3>
          <p className="text-3xl font-bold text-[#0c0c3d] mt-2">
            $999.00 <span className="text-base font-normal">/ year</span>
          </p>
          <p className="text-[#0c0c3d] mt-4">Gain Control Over your Data.</p>
        </div>

        {/* Center Features Box */}
        <div className="bg-[#aad751] rounded-lg px-8 py-8 flex flex-col justify-between min-h-[480px]">
          <div>
            <h4 className="text-[#0c0c3d] font text-md font-light mb-2">Features</h4>
            <h3 className="text-[#0c0c3d] font-extrabold text-xl mb-6">
              Quick look at all the features
            </h3>

            <ul className="space-y-2 text-[#0c0c3d] mt-10">
              <li className="flex items-start">
                ✓ <span className="ml-2">Access to all standard features</span>
              </li>
              <li className="flex items-start">
                ✓ <span className="ml-2">Unlimited storage space</span>
              </li>
              <li className="flex items-start">
                ✓ <span className="ml-2">Priority email and phone support</span>
              </li>
              <li className="flex items-start">
                ✓ <span className="ml-2">Advanced analytics and reporting</span>
              </li>
              <li className="flex items-start">
                ✓ <span className="ml-2">Custom branding options</span>
              </li>
              <li className="flex items-start">
                ✓ <span className="ml-2">Team management and user roles</span>
              </li>
            </ul>
          </div>

          <div className="mt-6">
            <button className="w-full bg-[#0c0c3d] text-white border-3 border-gray-900 hover:bg-white hover:text-gray-900 py-2 rounded-md font-semibold  transition ease-in-out duration-300">
              Try Now
            </button>
            <p className="text-sm text-[#0c0c3d] mt-2 text-center">
              No credit card required. Deploy on your own
            </p>
          </div>
        </div>

        {/* Right Business Box */}
        <div className="bg-[#0c0c3d] text-white rounded-lg px-8 py-8 flex flex-col justify-between min-h-[480px]">
          <div>
            <h4 className="text-white text-sm mb-2">Business</h4>
            <h3 className="text-white text-xl font-extrabold mb-6">
              Technical Support and Add on
            </h3>

            <p className="flex items-start text-[#f4e26c]">
              <span className="mr-2">→</span>
              <span>
                Take your business to the next level with a custom mobile app.
                Invest in a personalized solution that drives results.
                (Additional charges apply.)
              </span>
            </p>
          </div>

          <div className="mt-8">
            <button className="w-full bg-white text-[#0c0c3d] py-2 rounded-md font-semibold hover:bg-gray-200 transition border-2 hover:border-green-600 border-gray-900">
              Contact Us
            </button>
            <p className="text-sm mt-4 text-center text-white">
              Get personalized demo and custom plan
            </p>
          </div>
        </div>
      </div>
    </section>
    

    </div>
  );
}
