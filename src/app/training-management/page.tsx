"use client";

import { ArrowRight } from "lucide-react";
import {
  LayoutDashboard,
  Globe,
  FolderKanban,
  Users,
} from "lucide-react";



const features = [
  {
    title: "AI Integrated",
    description:
      "Designed to cater to both instructors and students, equipped with user-friendly functionalities and an intuitive interface",
    image:
      "https://cdn.prod.website-files.com/65aa7210793f3233f5dc51e7/6629db56b8a3b236ee55c8fc_6.png",
  },
  {
    title: "Training Management",
    description:
      "Conduct your training symphony. Plan, deliver, track, report – all for efficient skill development & data-driven success.",
    image:
      "https://cdn.prod.website-files.com/65aa7210793f3233f5dc51e7/6629d8f873d8cc09bdc56fa4_4.png",
  },
  {
    title: "Progress Tracking & Reporting",
    description:
      "Maximize Learning with Data-Driven Insights. Tailor Courses for Personalized eLearning Experiences with Academy Kit.",
    image:
      "https://cdn.prod.website-files.com/65aa7210793f3233f5dc51e7/6629d8f8e9ec66e7544a390d_5.png",
  },
];
const NextFeatures=[
  {
    icon:LayoutDashboard,
    title:"Single platform",
    description:"Host all training materials, courses, assessments, and learner data in one place."

  },
  {
    icon:Globe,
    title:"Easy Access",
    description:"Learners and administrators can readily access resources anytime, anywhere."

  },
  {
    icon:FolderKanban,
    title:"Improved Organization",
    description:"Streamline training processes and eliminate document clutter"

  },
  {
    icon:Users,
    title:"Simplified Collaboration",
    description:"Trainers can share resources and communicate efficiently"

  }
]



export default function TrainingManagement() {
  

  return (
    <div className="min-h-screen w-full bg-[#fbfef5] px-6 py-20">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center justify-between gap-10">
        {/* Left Content */}
        <div className="w-full lg:w-1/2 ">
          <p className="text-green-700 font-semibold text-sm pl-2">Plan you trainnings</p>
          <h1 className="text-4xl md:text-6xl font-extrabold text-[#0A0A2C] leading-tight">
            Simplify Training <br /> Operations <br /> 
          </h1>


          <p className="text-gray-900 font-semibold text-md ml-2 py-2">Deliver, Track, and Analyze with Ease.</p>
          <p className="text-green-700 text-lg p-2">
          Streamline your training delivery, manage users effortlessly, and gain actionable insights with our comprehensive LMS tools.
          </p>
          <div className="flex items-center gap-6 pt-4">
            <button className="bg-[#0A0A2C] text-white px-6 py-2.5 rounded-md text-sm font-medium hover:bg-white hover:text-[#0A0A2C] hover:border hover:border-[#0A0A2C] transition duration-300">
              Get started
            </button>
            <button className="text-[#0A0A2C] font-semibold flex items-center gap-2 text-sm">
              Learn more <span>→</span>
            </button>
          </div>
        </div>

        {/* Right Image */}
        <div className="w-full lg:w-1/2 flex justify-center">
          <img
            src="https://cdn.prod.website-files.com/65aa7210793f3233f5dc51e7/6629d4c4dffe912a16555c14_self-hosted-p-1080.png"
            alt="AI Dashboard"
            className="w-full max-w-xl object-contain rounded-xl shadow-lg rotate-[-6deg]"
          />
        </div>
      </div>
      <section className="w-full bg-[#fbfef5] py-16 px-6">
        <div className="max-w-7xl mx-auto grid md:grid-cols-3 gap-8">
          {features.map((feature, idx) => (
            <div
              key={idx}
              className="rounded-xl overflow-hidden border border-gray-200 shadow-sm hover:shadow-lg transition duration-300 bg-white"
            >
              <div className="bg-lime-100 p-4 flex justify-center items-center">
                <img
                  src={feature.image}
                  alt={feature.title}
                  className="rounded-md w-full object-cover"
                />
              </div>
              <div className="bg-[#0A0A2C] text-white px-6 py-6 flex flex-col justify-between h-full">
                <div>
                  <h3 className="text-lg font-bold mb-3">{feature.title}</h3>
                  <p className="text-sm text-gray-200">{feature.description}</p>
                </div>
                <div className="mt-6">
                  <a
                    href="#"
                    className="text-green-400 font-semibold text-sm flex items-center gap-2 hover:underline"
                  >
                    Learn more <span>→</span>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>


      <section className="w-full bg-[#fbfef5] py-16 px-4 sm:px-6 md:px-10 lg:px-16 xl:px-20">
  <h1 className="text-center font-semibold text-xl sm:text-2xl md:text-4xl text-[#0f103f]">
    Centralized Training Hub
  </h1>

  <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-10 mt-12">
    {NextFeatures.map((feature, index) => {
      const Icon = feature.icon;
      return (
        <div
          key={index}
          className="flex flex-col items-center text-center bg-transparent h-full px-2"
        >
          <div className="bg-[#d7f281] p-4 rounded-full mb-4">
            <Icon className="w-8 h-8 text-[#0f103f]" />
          </div>
          <h4 className="font-semibold text-[20px] text-[#0f103f] m-3 p-2">
            {feature.title}
          </h4>
          <p className="text-md text-gray-800 mb-3">{feature.description}</p>
          <a
            href="#"
            className="text-[#0f103f] font-medium flex items-center gap-1 hover:underline"
          >
            Learn more <ArrowRight className="w-4 h-4" />
          </a>
        </div>
      );
    })}
  </div>
</section>


      
      
    </div>
  );
}
