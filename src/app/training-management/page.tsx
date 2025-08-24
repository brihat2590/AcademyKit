"use client";

import { ArrowRight, BarChart3, Briefcase, CheckCircle, ChevronRight, ClipboardList, Clock, Footprints, Icon, IdCard, Megaphone, Rocket, ShieldCheck, Sparkles, Users2 } from "lucide-react";
import {
  LayoutDashboard,
  Globe,
  FolderKanban,
  Users,
} from "lucide-react";
import Link from "next/link";
import { useEffect, useState } from "react";
import { BiRightArrow, BiSolidReport, BiSolidRightArrow } from "react-icons/bi";
import { FaDatabase, FaFolder } from "react-icons/fa";
import { MdDataExploration } from "react-icons/md";



const features = [

  {
    title: "Self Hosted",
    description:
      "xperience Unmatched Empowerment to Safeguard Sensitive Data, Ensure Compliance, and Enjoy Secure Learning Environments.",
    image:
      "https://s3.sursatech.com/api/v1/buckets/academykit/objects/download?preview=true&prefix=selfHosted.png&version_id=null",
      href:"/self-hosted-lms"
  },
  {
    title: "AI Integrated",
    description:
      "Designed to cater to both instructors and students, equipped with user-friendly functionalities and an intuitive interface",
    image:
      "https://s3.sursatech.com/api/v1/buckets/academykit/objects/download?preview=true&prefix=aiIntegrated.png&version_id=null",
      href:"/ai-integrated"
  },
  
  {
    title: "Progress Tracking & Reporting",
    description:
      "Maximize Learning with Data-Driven Insights. Tailor Courses for Personalized eLearning Experiences with Academy Kit.",
    image:
      "https://s3.sursatech.com/api/v1/buckets/academykit/objects/download?preview=true&prefix=progressTracking.png&version_id=null",
      href:"/analytics"
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
const NextFeatures2=[
  {
    icon:BiSolidReport,
    title:"Report Generator",
    description:" Generate reports on learner performance and course effectiveness"

  },
  {
    icon:FaDatabase,
    title:"Data Visualization",
    description:"Analyze data with charts, graphs, and other visual aids."

  },
  {
    icon:FaFolder,
    title:"Identify trends",
    description:"Gain insights into learning patterns and make informed decisions."

  },
  {
    icon:MdDataExploration,
    title:"Export data",
    description:"Share reports with stakeholders in csv formats."

  }
]



export default function TrainingManagement() {
  const[scrolled,setScrolled]=useState(false);
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 100); // adjust scroll threshold as needed
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  

  return (
    <div className="min-h-screen w-full bg-[#fbfef5] px-6 pt-10 pb-20">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center justify-between gap-10">
        {/* Left Content */}
        <div className="w-full lg:w-1/2 ">
          <p className="text-green-700 font-semibold text-sm pl-2 pt-2">Plan you trainnings</p>
          <h1 className="text-4xl md:text-6xl font-extrabold text-[#0A0A2C] leading-tight py-2">
            Simplify Training <br /> Operations <br /> 
          </h1>


          <p className="text-gray-900 font-semibold text-md ml-2 py-2">Deliver, Track, and Analyze with Ease.</p>
          <p className="text-[#52a15c] text-lg p-2 pb-5">
          Streamline your training delivery, manage users effortlessly, and gain actionable insights with our comprehensive LMS tools.
          </p>
          <div className="flex items-center gap-6 pt-4 mt-5 md:mt-10">
            <a href="https://hub.docker.com/r/academykit/academy" target="_blank" rel="noopener noreferrer"  className="bg-[#0A0A2C] text-white px-6 py-2 border-gray-900 rounded-md text-sm font-medium hover:bg-white hover:text-[#0A0A2C] border-3 hover:border-gray-900 transition duration-300">
              Get started
            </a>
            <a href="https://docs.academykit.co/app-documentation/training/general-setup" target="_blank" rel="noopener noreferrer" className="text-[#0A0A2C] font-bold flex items-center gap-2 text-md">
              Learn more <ArrowRight/>
            </a>
          </div>
        </div>

        {/* Right Image */}
        <div className="w-full lg:w-1/2 flex justify-center pt-4">
          <img
            src="https://s3.sursatech.com/api/v1/buckets/academykit/objects/download?preview=true&prefix=session.jpg&version_id=null"
            alt="AI Dashboard"
            className="w-full max-w-xl object-contain rounded-xl shadow-lg rotate-[-6deg]"
          />
        </div>
      </div>
      


      <section className="w-full bg-[#fbfef5] py-16 md:py-20 mt-3 px-4 sm:px-6 md:px-10 lg:px-16 xl:px-20">
  <h1 className="text-center font-semibold text-xl sm:text-2xl md:text-4xl text-[#0f103f] pb-4 md:pb-10">
    Centralized Training Hub
  </h1>

  <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-10 mt-12">
    {NextFeatures.map((feature, index) => {
      const Icon = feature.icon;
      return (
        <div
          key={index}
          className="flex flex-col items-center text-center bg-transparent h-full px-2 pt-3"
        >
          <div className="bg-[#c3e192] p-4 rounded-full mb-4">
            <Icon className="w-8 h-8 text-[#0f103f]" />
          </div>
          <h4 className="font-semibold text-[20px] text-[#0f103f] m-3 p-2">
            {feature.title}
          </h4>
          <p className="text-md text-gray-800 mb-3">{feature.description}</p>
          
        </div>
      );
    })}
  </div>
</section>
<section className="w-full bg-[#fbfef5] py-16 px-6">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 grid lg:grid-cols-2 gap-12 items-center">
        {/* Left Image */}
        <div className="bg-[#B8DB94] p-4 rounded-3xl">
          <div className="bg-white rounded-lg overflow-hidden shadow-md">
            <img
              src="https://s3.sursatech.com/api/v1/buckets/academykit/objects/download?preview=true&prefix=landing.jpg&version_id=null" // replace with your image path
              alt="AcademyKit Dashboard"
              width={800}
              height={500}
              className="w-full h-auto"
            />
          </div>
        </div>

        {/* Right Content */}
        <div>
          <h2 className="text-3xl font-semibold py-2 text-gray-900 mb-8">
            Efficient Course Creation
          </h2>

          {/* Feature 1 */}
          <div>
          <div className="sm:flex">
          <div className="flex flex-col items-start p-3  w-full">
            <div className="bg-[#D5EDB3] p-3 rounded-full">
              <ClipboardList className="w-6 h-6 text-gray-900" />
            </div>
            <div>
              <h3 className="font-semibold text-lg py-2 text-gray-900">
                Content Management
              </h3>
              <p className="text-gray-600">
                Build engaging courses with various media (text, video, audio).
              </p>
            </div>
          </div>

          {/* Feature 2 */}
          <div className="flex flex-col items-start p-3">
            <div className="bg-[#D5EDB3] p-3 rounded-full">
              <Briefcase className="w-6 h-6 text-gray-900" />
            </div>
            <div>
              <h3 className="font-semibold text-lg py-2 text-gray-900">
                Content libraries
              </h3>
              <p className="text-gray-600">
                Store reusable learning objects and uploaded media for faster
                course development.
              </p>
            </div>
            </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <section className="bg-[#F7FAF0] py-16">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 text-center">
        {/* Title */}
        <h2 className="text-4xl font-semibold text-gray-900 mb-12">
          User Management
        </h2>

        {/* Features Grid */}
        <div className="grid md:grid-cols-3 gap-10 pt-5">
          {/* Feature 1 */}
          <div className="flex flex-col items-center text-center">
            <div className="bg-[#C2E18F] p-4 rounded-lg mb-4">
              <ShieldCheck className="w-6 h-6 text-gray-900" />
            </div>
            <h3 className="font-semibold text-lg py-2 text-gray-900">
              Role-based access
            </h3>
            <p className="text-gray-600 mt-1">
              Assign different access levels (trainee, trainer, admin,
              super-admin) for control.
            </p>
          </div>

          {/* Feature 2 */}
          <div className="flex flex-col items-center text-center">
            <div className="bg-[#C2E18F] p-4 rounded-lg mb-4">
              <Users className="w-6 h-6 text-gray-900" />
            </div>
            <h3 className="font-semibold text-lg py-2 text-gray-900">User groups</h3>
            <p className="text-gray-600 mt-1">
              Facilitate group-based training and targeted communication.
            </p>
          </div>

          {/* Feature 3 */}
          <div className="flex flex-col items-center text-center">
            <div className="bg-[#C2E18F] p-4 rounded-lg mb-4">
              <IdCard className="w-6 h-6 text-gray-900" />
            </div>
            <h3 className="font-semibold text-lg py-2 text-gray-900">
              Detailed profiles
            </h3>
            <p className="text-gray-600 mt-1">
              Manage user information, skills, and training history
              efficiently.
            </p>
          </div>
        </div>
      </div>
    </section>

    <section className=" py-16">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 text-center">
        {/* Title */}
        <h2 className="text-4xl font-semibold text-gray-900 mb-10 md:mb-20">
          Progress Tracking
        </h2>

        {/* Features Grid */}
        <div className="grid md:grid-cols-4 gap-10 ">
          {/* Card 1 */}
          <div>
            <div className="bg-[#B8DB94] rounded-2xl p-4 mb-4 flex items-center justify-center">
              <img
                src="https://s3.sursatech.com/api/v1/buckets/academykit/objects/download?preview=true&prefix=individualDashboard.png&version_id=null" // dummy path
                alt="Individual dashboards"
                width={300}
                height={200}
                className="rounded-lg"
              />
            </div>
            <h3 className="font-semibold text-lg text-gray-900">
              Individual dashboards
            </h3>
            <p className="text-gray-600 mt-1">
              Learners can track their progress, completion status, and scores.
            </p>
          </div>

          {/* Card 2 */}
          <div>
            <div className="bg-[#B8DB94] rounded-2xl p-4 mb-4 flex items-center justify-center">
              <img
                src="https://s3.sursatech.com/api/v1/buckets/academykit/objects/download?preview=true&prefix=reportsAdminister.png&version_id=null" // dummy path
                alt="Reports for administrators"
                width={300}
                height={200}
                className="rounded-lg"
              />
            </div>
            <h3 className="font-semibold text-lg text-gray-900">
              Reports for administrators
            </h3>
            <p className="text-gray-600 mt-1">
              Monitor learner progress across courses, groups, and departments.
            </p>
          </div>

          {/* Card 3 */}
          <div>
            <div className="bg-[#B8DB94] rounded-2xl p-4 mb-4 flex items-center justify-center">
              <img
                src="https://s3.sursatech.com/api/v1/buckets/academykit/objects/download?preview=true&prefix=DataInsight.png&version_id=null" // dummy path
                alt="Data Insights"
                width={300}
                height={200}
                className="rounded-lg"
              />
            </div>
            <h3 className="font-semibold text-lg text-gray-900">Data Insights</h3>
            <p className="text-gray-600 mt-1">
              Gain insights into learner engagement and identify areas for
              improvement.
            </p>
          </div>

          {/* Card 4 */}
          <div>
            <div className="bg-[#B8DB94] rounded-2xl p-4 mb-4 flex items-center justify-center">
              <img
                src="https://s3.sursatech.com/api/v1/buckets/academykit/objects/download?preview=true&prefix=gamification.png&version_id=null" // dummy path
                alt="Gamification"
                width={300}
                height={200}
                className="rounded-lg"
              />
            </div>
            <h3 className="font-semibold text-lg text-gray-900">Gamification</h3>
            <p className="text-gray-600 mt-1">
              Incentivize learning with leaderboards and certification rewards.
            </p>
          </div>
        </div>
      </div>
    </section>
    <section className="bg-[#f9fdf3] py-16 px-6">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        {/* Left Content */}
        <div>
          <h2 className="text-3xl md:text-4xl font-semibold text-[#0c0c3d] mb-8">
            Efficient Course Creation
          </h2>

          <ul className="space-y-10">
            <li className="flex items-start gap-4">
              <div className="bg-[#c3e192] p-3 rounded-full">
                <CheckCircle className="text-[#0c0c3d]" />
              </div>
              <div>
                <h3 className="text-lg font-semibold text-[#0c0c3d]">
                  Variety of question types
                </h3>
                <p className="text-[#3d3d3d] mt-1">
                  Create Single-choice, multiple-choice and subjective exams and
                  assessments.
                </p>
              </div>
            </li>

            <li className="flex items-start gap-4">
              <div className="bg-[#c3e192] p-3 rounded-full">
                <Sparkles className="text-[#0c0c3d]" />
              </div>
              <div>
                <h3 className="text-lg font-semibold text-[#0c0c3d]">
                  Automatic grading
                </h3>
                <p className="text-[#3d3d3d] mt-1">
                  Simplify assessment and feedback processes.
                </p>
              </div>
            </li>

            <li className="flex items-start gap-4">
              <div className="bg-[#c3e192] p-3 rounded-full">
                <Footprints className="text-[#0c0c3d]" />
              </div>
              <div>
                <h3 className="text-lg font-semibold text-[#0c0c3d]">
                  Competency-based learning
                </h3>
                <p className="text-[#3d3d3d] mt-1">
                  Measure mastery of specific skills and knowledge.
                </p>
              </div>
            </li>
          </ul>
        </div>

        {/* Right Image */}
        <div className="w-full">
          <img
            src="https://s3.sursatech.com/api/v1/buckets/academykit/objects/download?preview=true&prefix=landing.jpg&version_id=null"
            alt="Course Creation Screenshot"
            className="rounded-xl w-full shadow-lg"
          />
        </div>
      </div>
    </section>

      <section className="w-full bg-[#fbfef5] py-16 md:py-20 mt-3 px-4 sm:px-6 md:px-10 lg:px-16 xl:px-20">
  <h1 className=" font-semibold text-xl sm:text-2xl md:text-4xl text-[#0f103f] pb-4 md:pb-10 max-w-7xl  mx-auto  ">
    Detailed Reporting
  </h1>

  <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-10 mt-12">
    {NextFeatures2.map((feature, index) => {
      const Icon = feature.icon;
      return (
        <div
          key={index}
          className="flex flex-col items-center text-center bg-transparent h-full px-2 pt-3"
        >
          <div className="bg-[#c3e192] p-4 rounded-full mb-4">
            <Icon className="w-8 h-8 text-[#0f103f]" />
          </div>
          <h4 className="font-semibold text-[20px] text-[#0f103f] m-3 p-2">
            {feature.title}
          </h4>
          <p className="text-md text-gray-800 mb-3">{feature.description}</p>
         
        </div>
      );
    })}
  </div>
</section>
<section className="w-full bg-[#fbfef5] py-16 px-6">

  <h2 className="text-center font-semibold text-3xl md:text-4xl mb-2">Join us today!</h2>

  <p className="py-2 text-[18px] text-gray-800 text-center">See how we can simplify your training administration.</p>


  <div className="flex justify-center mt-10">
    <Link href={"/request-demo"} className="px-4 py-1 bg-gray-900 border-3 border-gray-900  hover:text-gray-900 transition duration-300 ease-in-out rounded-md hover:bg-white text-white">Request Demo</Link>

  </div>
</section>
<section className="bg-[#f9fdf3] py-16 px-6">
      <div className="max-w-7xl mx-auto block sm:flex justify-between  ">
        {/* Title */}
        <div className="md:col-span-1">
          <h2 className="text-2xl md:text-4xl text-center font-semibold text-[#0c0c3d] mt-10">
            Communication Tools
          </h2>
        </div>

        {/* Feature Cards */}
        <div className="flex flex-col md:flex-row md:col-span-2 gap-10 mt-10">
          {/* Card 1 */}
          <div className="flex flex-col items-center text-center md:text-left md:items-start max-w-xs">
            <div className="bg-[#c3e192] rounded-full p-4 mb-4 relative">
              <div className="">
                <Users2 className="text-[#0c0c3d]" size={20} />
              </div>
            </div>
            <h3 className="font-semibold text-[#0c0c3d] text-lg mb-1">
              Discussion forums
            </h3>
            <p className="text-[#3d3d3d]">
              Foster collaboration and knowledge sharing among learners.
            </p>
          </div>

          {/* Card 2 */}
          <div className="flex flex-col items-center text-center md:text-left md:items-start max-w-xs">
            <div className="bg-[#c3e192] rounded-full p-4 mb-4 relative">
              <div className="">
                <Megaphone className="text-[#0c0c3d]" size={20} />
              </div>
            </div>
            <h3 className="font-semibold text-[#0c0c3d] text-lg mb-1">
              Announcements
            </h3>
            <p className="text-[#3d3d3d]">
              Broadcast important alerts and reminders to all users or specific
              groups.
            </p>
          </div>
        </div>
      </div>
    </section>

   
   
    
    

    {/* timeline wala */}
    <section className="bg-[#f9fdf3] py-16 px-6">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12">
        {/* Left Section */}
        <div>
          <h4 className="text-[#0c0c3d] font-semibold text-sm mb-2">
            Benefits
          </h4>
          <h2 className="text-3xl md:text-4xl font-semibold text-[#0c0c3d]">
            Beautiful analytics to grow smarter
          </h2>
        </div>

        {/* Right Section - Timeline */}
        <div className="relative space-y-20">
          {/* Animated vertical black line */}
          <div
            className={`absolute left-4 top-0 bottom-0 w-0.5 transition-all duration-700 ease-in-out z-0 ${
              scrolled ? "bg-black opacity-100" : "opacity-0"
            }`}
            style={{ marginLeft: "14px" }}
          />

          {/* Timeline Items */}
          {[
            {
              icon: <Clock
               className="text-[#0c0c3d]" size={20} />,
              title: "Save time and resources",
              desc: "Simplify administration and free up valuable time.",
            },
            {
              icon: <Rocket className="text-[#0c0c3d]" size={20} />,
              title: "Improve training delivery",
              desc:
                "Ensure smooth course delivery and access for all learners.",
            },
            {
              icon: <BarChart3 className="text-[#0c0c3d]" size={20} />,
              title: "Gain actionable insights",
              desc:
                "Use data to make informed decisions about your training programs.",
            },
            {
              icon: <Users className="text-[#0c0c3d]" size={20} />,
              title: "Boost communication and collaboration",
              desc:
                "Improve communication between administrators, instructors, and learners.",
            },
          ].map((item, i) => (
            <div key={i} className="flex items-start gap-4 relative z-10">
              <div className="shrink-0 bg-[#c3e192] p-5 rounded-full">
                {item.icon}
              </div>
              <div>
                <h3 className="text-xl font-semibold text-[#0c0c3d]">
                  {item.title}
                </h3>
                <p className="text-[#3d3d3d] mt-1">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
    
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
