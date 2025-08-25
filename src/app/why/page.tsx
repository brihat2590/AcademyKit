import { User } from "lucide-react";
import Link from "next/link";
import { FaBrain } from "react-icons/fa";
import { GiProgression } from "react-icons/gi";
import { MdSelfImprovement } from "react-icons/md";
import { WiTrain } from "react-icons/wi";


export default function page() {
  return (
    <div className="">
      <section className="bg-[#0a0b34] text-white py-30 px-6">
        <div className="container mx-auto flex flex-col lg:flex-row items-center justify-center ">
          {/* Left Side - Text Content */}
          <div className="text-center lg:text-left max-w-xl">
            <h1 className="text-5xl md:text-[70px] font-bold leading-tight mb-6">
              Accelerate Your <br />
              Progress Today
            </h1>
            <p className="text-lg text-[#84af49] mb-8 text-center">
              Explore AcademyKit's Powerful Features
            </p>
            <div className="flex justify-center  gap-4">
              <a  href="https://hub.docker.com/r/academykit/academy" target="_blank" rel="noopener noreferrer" className="bg-[#c2e092] text-black font-semibold px-6 py-2  border-3 border-[#0a0b34] hover:border-[#6a9b29] transition duration rounded-sm">
                Try Now!
              </a>
              <a href="https://docs.academykit.co/introduction" target="_blank" rel="noopener noreferrer" className="bg-white text-black font-semibold px-6 py-2  hover:bg-gray-200 transition border-3 border-[#0a0b34] hover:border-[#6a9b29] rounded-sm">
                Learn How
              </a>
            </div>
          </div>

          {/* Right Side - Image */}
          <div className="w-full max-w-xl pl-0 lg:pl-25 py-10 px-2  "> {/* Added margin-left here */}
            <img
              src="https://s3.sursatech.com/api/v1/buckets/academykit/objects/download?preview=true&prefix=access.png&version_id=null"
              alt="Laptop with AcademyKit dashboard"
              width={700}
              height={400}
              className="rounded-lg shadow-lg"
            />
          </div>
        </div>
      </section>
      <section className="bg-[#fbfef5]  py-20 px-6">
  <div className="max-w-6xl mx-auto text-center mb-16">
    <h2 className="text-[35px] font-semibold mb-4">Built for Your Training Success</h2>
    <p className="text-lg text-gray-700">
      Empower Your Training, Engage Learners, and Optimize Results with AcademyKit
    </p>
  </div>

  <div className="flex flex-wrap justify-center gap-8"> {/* Changed to stretch for equal height */}
    {/* Card 1 */}
    <div className="bg-[#0b0c2a] text-white rounded-2xl px-7 py-9 w-full max-w-xl flex flex-col items-center"> {/* Increased padding slightly */}
      <div className="mb-5 bg-[#c3e192] text-gray-900 p-4 rounded-full">
        <MdSelfImprovement size={25}/>
        
      </div>
      <h3 className="text-[30px] font-bold mb-3.5">Self Hosted</h3>  {/* Between xl and 2xl */}
      <p className="text-center text-[16px] mb-5 leading-snug">  {/* Slightly larger than base */}
        Experience Unmatched Empowerment to Safeguard Sensitive Data,
        Ensure Compliance, and Enjoy Secure Learning Environments.
      </p>
      <Link
        href="/self-hosted-lms"
    className="text-[#aad390] font-semibold inline-flex items-center gap-1 hover:text-[#5e862a] transition text-[15px]"
      >
        Learn more <span>&rarr;</span>
      </Link>
    </div>

    {/* Card 2 */}
    <div className="bg-[#0b0c2a] text-white rounded-2xl px-7 py-9 w-full max-w-xl flex flex-col items-center">
    <div className="mb-5 bg-[#c3e192] text-gray-900 p-4 rounded-full">
        <FaBrain size={25}/>
        
      </div>
      <h3 className="text-[30px] font-bold mb-3.5">AI Integrated</h3>
      <p className="text-center text-[16px] mb-5 leading-snug">
        Designed to cater to both instructors and students, equipped with
        user-friendly functionalities and an intuitive interface.
      </p>
      <Link
        href="/ai-integrated"
        className="text-[#aad390] font-semibold inline-flex items-center gap-1 hover:text-[#5e862a] transition text-[15px]"
      >
        Learn more <span>&rarr;</span>
      </Link>
    </div>
    <div className="flex flex-wrap justify-center gap-8">
    <div className="bg-[#0b0c2a] text-white rounded-2xl px-7 py-9 w-full max-w-xl flex flex-col items-center">
    <div className="mb-5 bg-[#c3e192] text-gray-900 p-4 rounded-full">
        <WiTrain size={25}/>
        
      </div>
      <h3 className="text-[30px] font-bold mb-3.5">Training Management
      </h3>
      <p className="text-center text-[16px] mb-5 leading-snug">
      Conduct your training symphony. Plan, deliver, track, report - all for efficient skill development & data-driven success.
      </p>
      <Link
        href="/training-management"
        className="text-[#aad390] font-semibold inline-flex items-center gap-1 hover:text-[#5e862a] transition text-[15px]"
      >
        Learn more <span>&rarr;</span>
      </Link>
    </div>
    <div className="bg-[#0b0c2a] text-white rounded-2xl px-7 py-9 w-full max-w-xl flex flex-col items-center">
    <div className="mb-5 bg-[#c3e192] text-gray-900 p-4 rounded-full">
        <GiProgression size={25}/>
        
      </div>
      <h3 className="text-[30px] font-bold mb-3.5">Progress Tracking and Reporting</h3>
      <p className="text-center text-[16px] mb-5 leading-snug">
      Maximize Learning with Data-Driven Insights. Tailor Courses for Personalized eLearning Experiences with AcademyKit.
      </p>
      <Link
        href="/analytics"
        className="text-[#aad390] font-semibold inline-flex items-center gap-1 hover:text-[#5e862a] transition text-[15px]"
      >
        Learn more <span>&rarr;</span>
      </Link>
    </div>
    


    </div>
    
  </div>
</section>
<section className="relative bg-[#f9fcf4] pb-40 pt-20 px-6">
      {/* Bottom dark background */}
      <div className="absolute inset-x-0 bottom-0 h-1/2 bg-[#0b0c2a] z-0" />

      {/* Green box */}
      <div className="relative max-w-7xl mx-auto bg-[#a0d64b] rounded-xl py-20 px-8 md:px-16 flex flex-col md:flex-row justify-between items-center gap-6 z-10 shadow-xl">
        {/* Left Content */}
        <div className="text-center md:text-left max-w-xl">
          <h2 className="text-3xl md:text-4xl font-extrabold text-[#0b0c2a] mb-4">
            Start Today!
          </h2>
          <p className="text-[#0b0c2a] text-base md:text-lg">
            Join businesses that have taken advantage of AcademyKit for their product success.
          </p>
        </div>

        {/* Right Buttons */}
        <div className="flex gap-4">
          <a href="https://hub.docker.com/r/academykit/academy" target="_blank" rel="noopener noreferrer" className="bg-[#0b0c2a] text-white font-semibold px-6 py-2 rounded hover:text-[#1a1b4a] hover:bg-white transition border-3 border-[#0b0c2a]">
            Get Started
          </a>
          <a href="https://docs.academykit.co/introduction" target="_blank" rel="noopener noreferrer"  className="bg-white text-[#0b0c2a]  border-[#0b0c2a] font-semibold px-6 py-2 rounded hover:bg-gray-100 transition border-3 hover:border-[#6a9b29]">
            Learn More
          </a>
        </div>
      </div>
    </section>

      

      
    </div>
  );
}