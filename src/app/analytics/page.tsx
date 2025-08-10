"use client";

import { FeatureCard } from "@/components/ui/FeatureCard";

import { BrainCog, SearchCheck, Globe, Check, ArrowRight } from "lucide-react";
import Link from "next/link";
const features2 = [
    {
      icon: <BrainCog size={40} />,
      title: "Empower Effective Learning Experiences",
      description:
        "Boost learner retention rates through actionable insights from AcademyKit's Learning Analytics data and reports, enabling timely interventions to improve performance and reduce dropout rates.",
    },
    {
      icon: <SearchCheck size={40} />,
      title: "Actionable Data-Driven  Learning Insights",
      description:
        "Utilize AcademyKit's effective analytics to predict individual and collective learner performance, facilitating informed decisions throughout eLearning courses.",
    },
    {
      icon: <Globe size={40} />,
      title: "Build Courses that Adapt and Engage",
      description:
        "Enhance future eLearning courses with AcademyKit's comprehensive learning analytics solution, leveraging metrics to redesign existing programs and benefit both current and future learners.",
    },
  ]

const features = [
  {
    title: "Self Hosted",
    description:
      "Experience Unmatched Empowerment to Safeguard Sensitive Data, Ensure Compliance, and Enjoy Secure Learning Environments.",
    image:
      "https://cdn.prod.website-files.com/65aa7210793f3233f5dc51e7/6629db56b8a3b236ee55c8fc_6.png",

      href:"/self-hosted-lms"
  },
  {
    title: "Training Management",
    description:
      "Conduct your training symphony. Plan, deliver, track, report – all for efficient skill development & data-driven success.",
    image:
      "https://cdn.prod.website-files.com/65aa7210793f3233f5dc51e7/6629d8f873d8cc09bdc56fa4_4.png",
      href:"/training-management"
  },
  {
    title: "Progress Tracking & Reporting",
    description:
      "Maximize Learning with Data-Driven Insights. Tailor Courses for Personalized eLearning Experiences with Academy Kit.",
    image:
      "https://cdn.prod.website-files.com/65aa7210793f3233f5dc51e7/6629d8f8e9ec66e7544a390d_5.png",
      href:"/analytics"
  },
];

const sections = [
  {
    id: "knowledge",
    title: "Knowledge Repository",
  },
  {
    id: "intelligent",
    title: "Intelligent Automation",
  },
  {
    id: "ai",
    title: "AI-Enhanced Insights",
  },
  {
    id: "train",
    title:`Trainning  Assistantance
    `,
  },
];

export default function AIIntegrated() {
  

  
  
 

  return (
    <div className="min-h-screen w-full bg-[#fbfef5] px-6 pt-10 pb-20">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center justify-between gap-10 mb-10">
        {/* Left Content */}
        <div className="w-full lg:w-1/2 space-y-2">
          <p className="text-[#6b9a1e] font-semibold text-sm pl-2">Analytics</p>
          <h1 className="text-4xl md:text-6xl font-extrabold text-[#0A0A2C] leading-tight">
          Drive Learning <br /> Success with Data- <br /> Driven Analytics
          </h1>
          <p className="text-[#6b9a1e] text-lg py-4">
          Achieve personalized eLearning experiences with AcademyKit, tailoring courses to each learner's preferences and needs based on their interests, abilities, and learning styles.
          </p>
          <div className="flex items-center gap-6 pt-4">
            <a href="https://hub.docker.com/r/academykit/academy" target="_blank" rel="noopener noreferrer" className="bg-[#0A0A2C] text-white px-6 py-2.5 rounded-md text-sm font-medium hover:bg-white hover:text-[#0A0A2C] border-3 border-[#0A0A2C] hover:border-[#0A0A2C]  transition duration-300">
              Get started
            </a>
            <a href="https://docs.academykit.co/app-documentation/introduction" target="_blank" rel="noopener noreferrer" className="text-[#0A0A2C] font-semibold flex items-center gap-2 text-md">
              Learn more <span><ArrowRight/></span>
            </a>
          </div>
        </div>

        {/* Right Image */}
        <div className="w-full lg:w-1/2 flex justify-center">
          <img
            src="https://cdn.prod.website-files.com/65aa7210793f3233f5dc51e7/65e0cf119c10b5eb39c08c4f_Vurilo%20LMS%20center%20combo%20mockup-final-3.png"
            alt="AI Dashboard"
            className="w-full max-w-xl object-contain rounded-xl shadow-lg rotate-[-6deg]"
          />
        </div>
      </div>
      <section className="bg-[#FAFFF7] py-16 md:pt-20 flex justify-center ">
      <div className="flex flex-wrap justify-center gap-8 px-4 ">
        {features2.map((feature, index) => (
          <FeatureCard
            key={index}
            icon={feature.icon}
            title={feature.title}
            description={feature.description}
          />
        ))}
      </div>
    </section>
    <section className="bg-[#fafff4] py-16 px-6">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
        {/* Left Text */}
        <div>
          <h2 className="text-3xl md:text-5xl font-semibold text-[#0c0c3d] mb-4">
            Turn Insights into Impact
          </h2>
          <p className="text-[#4a4a68] mb-6 text-xl leading-relaxed p-2">
            Measure what matters with AcademyKit&apos;s Analytics. You can filter,
            export, and drill down on the data in a couple clicks.
          </p>

          <ul className="space-y-4 mb-8">
            <li className="flex items-start space-x-3">
              <Check className="w-6 h-6 text-[#0c0c3d]   rounded-md p-0.5" />
              <span className="text-[#0c0c3d] text-base ">
                Filter, export, and drilldown on the data quickly
              </span>
            </li>
            <li className="flex items-start space-x-3">
              <Check className="w-6 h-6 text-[#0c0c3d]  rounded-md p-0.5" />
              <span className="text-[#0c0c3d] text-base ">
                Multiple Data Sets for Comparison
              </span>
            </li>
            <li className="flex items-start space-x-3">
              <Check className="w-6 h-6 text-[#0c0c3d]  rounded-md p-0.5" />
              <span className="text-[#0c0c3d] text-base ">
                Diverse Analytics Reports (Tailored in the format you want)
              </span>
            </li>
          </ul>

          <a href="https://hub.docker.com/r/academykit/academy" target="_blank" rel="noopener noreferrer" className="bg-[#0c0c3d] text-white font-semibold px-4 py-2 rounded-md shadow hover:text-[#1a1a4c] transition
          
          border-3 border-[#0c0c3d] hover:border-[#1a1a4c] hover:bg-white  duration-300">
            Start Today!
          </a>
        </div>

        {/* Right Image */}
        <div className="flex justify-center">
          <div className="bg-[#c5ea9b] p-4 rounded-2xl">
            <img
              src="https://cdn.prod.website-files.com/65aa7210793f3233f5dc51e7/6629f4ecfbc797fc942beaea_Analytics-p-1080.png"
              alt="Analytics Screenshot"
              width={600}
              height={400}
              className="rounded-xl "
            />
          </div>
        </div>
      </div>
    </section>

      {/* Feature Cards */}
      <section className="w-full bg-[#fbfef5] py-16 px-6">
        <div className="max-w-7xl mx-auto grid md:grid-cols-3 gap-8">
          {features.map((feature, idx) => (
            <div
              key={idx}
              className="rounded-xl overflow-hidden border border-gray-200 shadow-sm hover:shadow-lg transition duration-300 bg-white"
            >
              <div className="bg-[#c3e192] p-4 flex justify-center items-center">
                <img
                  src={feature.image}
                  alt={feature.title}
                  className="rounded-md w-full object-cover"
                />
              </div>
              <div className="bg-[#0A0A2C] text-white px-6 py-6 flex flex-col justify-between h-full">
                <div>
                  <h3 className="text-lg text-center font-bold mb-3">{feature.title}</h3>
                  <p className="text-sm text-center text-gray-200">{feature.description}</p>
                  <div className="mt-6">
                  <Link
                    href={feature.href}
                    className="flex justify-center items-center gap-2 text-[#c3e192] font-semibold text-sm hover:underline"
                  >
                    Learn more <span>→</span>
                  </Link>
                </div>
                </div>
                
              </div>
            </div>
          ))}
        </div>
      </section>
      
      

      
      
    </div>
  );
}
