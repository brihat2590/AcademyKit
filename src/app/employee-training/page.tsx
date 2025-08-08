import { FeatureCard } from "@/components/ui/FeatureCard"
import { BrainCog, DiamondMinus, Globe, GraduationCap, SearchCheck } from "lucide-react"
import Link from "next/link";
import { MdOutlineModelTraining } from "react-icons/md";

export default function page(){


    const features = [
        {
          number: "01",
          title: "Analysis tools",
          description:
            "Data-driven insights reveal employee strengths and skill gaps, powering targeted training.",
        },
        {
          number: "02",
          title: "Targeted training",
          description:
            "Training tailored to specific roles ensures your diverse workforce is equipped to excel.",
        },
        {
          number: "03",
          title: "Skill gap reports",
          description:
            "Provide comprehensive and organized skill gap reports to assist management, project planning, and future resource allocation.",
        },
        {
          number: "04",
          title: "Evaluation and Feedback",
          description:
            "Conduct on-the-job evaluations and offer real-time feedback to pinpoint areas for enhancement and refine skills.",
        },
        {
          number: "05",
          title: "Tracking Effectiveness",
          description:
            "Offer a variety of assessments to gauge the efficacy of training programs.",
        },
        {
          number: "06",
          title: "Interactive tools",
          description:
            "Learning can also be enjoyable! Incorporate elements like games, videos, and hands-on activities to make it both engaging and impactful.",
        },
      ];
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
    return(
    <div className="bg-[#fbfef5]">


    <section className=" bg-[#01002A] text-[#f4e26d] flex  md:px-16 md:py-40 px-8 py-10">
      {/* Left: Headings */}
      <div className="w-[70%] max-w-3xl mx-auto ">
        <h1 className="text-5xl  md:text-[84px] font-light leading-tight mb-12">
          Take Your Team <br /><span className="text-white">To The Next Level</span> 
        </h1>
        <p className="text-sm tracking-widest text-white/80 uppercase">
            JOIN US FOR THE TRAINING, AND STICK<br />
          AROUND FOR THE EXCEPTIONAL EXPERIENCE.
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
          <Link href={"/request-demo"} className="relative z-10 text-white tracking-widest text-sm transform -translate-x-20 transition-transform duration-500 ease-in-out group-hover:translate-x-0 pl-2">
            GET A DEMO
          </Link>
        </div>
      </div>
    </section>
    <section className="bg-[#fbfef5] flex flex-col px-6 sm:px-8 md:px-16 py-10 md:py-24">
  <div className="max-w-7xl mx-auto flex flex-col items-center text-center">
    <h2 className="text-2xl sm:text-3xl md:text-5xl font-semibold leading-tight">
      Stay ahead of the curve
      <br />
      in business.
    </h2>

    <p className="px-2 font-light text-base sm:text-lg md:text-[19px] mt-4 max-w-2xl mb-6">
      In today's dynamic business environment, thriving demands a growth mindset.
      Empower your team with continuous upskilling and reskilling – the cornerstone
      of sustainable growth and industry leadership.
    </p>

    <img
      src="https://cdn.prod.website-files.com/65aa7210793f3233f5dc51e7/6628a431cfef95a289ff175b_mock-2-p-800.webp"
      alt="onboarding"
      className="rounded-lg border-4 border-gray-900 w-full max-w-xl mt-8 mb-5"
    />
  </div>
</section>

    <section className="bg-[#f9fcf1] py-12 px-6 mb-10">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-10 text-center md:text-left">
        {/* Card 1 */}
        <div className="flex flex-col items-center md:items-start">
          {/* Icon Placeholder */}
          <div className="w-12 h-12 rounded-full  flex items-center justify-center mb-4">
            <DiamondMinus size={30}></DiamondMinus>
            
          </div>
          <h3 className="text-[#0c0c3d] text-lg font-bold mb-2">
            Reduce training expenses
          </h3>
          <p className="text-[#0c0c3d] text-sm">
            Eliminate costs associated with travel, venue rentals, and instructors by transitioning to an online employee training program
          </p>
        </div>

        {/* Card 2 */}
        <div className="flex flex-col items-center md:items-start">
          {/* Icon Placeholder */}
          <div className="w-12 h-12 rounded-full  flex items-center justify-center mb-4">

            <MdOutlineModelTraining size={30}></MdOutlineModelTraining>
            
          </div>
          <h3 className="text-[#0c0c3d] text-lg font-bold mb-2">
            Flexible training options
          </h3>
          <p className="text-[#0c0c3d] text-sm mb-4">
            Empower your teams with self-paced online training that can be accessed anytime, anywhere, saving valuable focus time.
          </p>

          {/* Buttons */}
          <div className="flex space-x-3 mt-10 py-4 mb-10">
            <a href="https://hub.docker.com/r/academykit/academy" target="_blank" rel="noopener noreferrer" className="bg-[#0c0c3d] text-white px-5 py-2 rounded-md font-semibold border-3 border-gray-900 hover:bg-white hover:text-gray-900 transition duration-300 ease-in-out">
              Get started
            </a>
            <a href="https://docs.academykit.co/app-documentation/introduction" target="_blank" rel="noopener noreferrer" className="bg-[#aad751] text-[#0c0c3d] border-3 border-[#0c0c3d] px-5 py-2 rounded-md font-semibold hover:border-green-700">
              Learn more
            </a>
          </div>
        </div>

        {/* Card 3 */}
        <div className="flex flex-col items-center md:items-start">
          {/* Icon Placeholder */}
          <div className="w-12 h-12 rounded-full  flex items-center justify-center mb-4">

            <GraduationCap size={30}/>
            
          </div>
          <h3 className="text-[#0c0c3d] text-lg font-bold mb-2">
            Continuous learning
          </h3>
          <p className="text-[#0c0c3d] text-sm">
            Motivate employees to embrace new challenges and acquire additional skills to remain pertinent in the ever-changing workplace.
          </p>
        </div>
      </div>
      
    </section> 
    <section className="max-w-7xl mx-auto bg-[#fbfef5] py-12 px-6 ">



        <h2 className="text-3xl  md:text-4xl font-semibold">Optimize your team performance for greater impact.</h2>

        <p className="py-8 mb-5 font-light text-md  ">AcademyKit prioritizes performance and offers in-depth analytics. Our Training Information Management System (TIMS) harnesses AI-driven learning techniques to enhance your sales performance and business results.

</p>

<div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-10">
        {features.map((feature) => (
          <div
            key={feature.number}
            className="bg-[#c2e092]  p-6 rounded-xl shadow-sm text-center flex flex-col items-center"
          >
            <div className="w-16 h-16 rounded-full bg-[#9cce50] flex items-center justify-center text-[#0c0c3d] font-bold text-lg mb-4">
              {feature.number}
            </div>
            <h3 className="text-[#0c0c3d] font-bold text-lg mb-2">
              {feature.title}
            </h3>
            <p className="text-[#0c0c3d] text-sm">{feature.description}</p>
          </div>
        ))}
      </div>

    </section>


    <section className="max-w-7xl mx-auto py-10 my-10  bg-[#fbfef5]">

        <div>

            <img src='https://cdn.prod.website-files.com/65aa7210793f3233f5dc51e7/662a07cef64ed9bae11c0138_on-boarding-1-p-2000.png'
            alt="hero"
            className="w-full"
            
            />
        </div>

    </section> 
    <section className="bg-[#f9fcf1] py-20 px-6 mt-10">
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
            <a href="https://docs.academykit.co/app-documentation/introduction" className="w-full bg-[#0c0c3d] text-white border-3 border-gray-900 hover:bg-white hover:text-gray-900 py-2 rounded-md font-semibold  transition ease-in-out duration-300 flex justify-center">
              Try Now
            </a >
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
            <Link href={"/contact"} className="w-full bg-white text-[#0c0c3d] py-2 rounded-md font-semibold hover:bg-gray-200 transition border-2 flex justify-center hover:border-green-600 border-gray-900">
              Contact Us
            </Link>
            <p className="text-sm mt-4 text-center text-white">
              Get personalized demo and custom plan
            </p>
          </div>
        </div>
      </div>
    </section>


    
    

    
   
    
    
    



    </div>)

}