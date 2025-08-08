import Link from "next/link";
import { FaArrowsAlt, FaHandshake, FaMagnet } from "react-icons/fa";
import { FaComputer } from "react-icons/fa6";

export default function Page() {
    return (
      <div className="bg-[#fbfef5]">
        <div className="bg-[#0A0A2A]  text-white py-20 px-6 lg:px-20">
          <div className="max-w-7xl mx-auto flex flex-col-reverse lg:flex-row justify-end items-center pt-4 sm:pt-10">
            {/* Left Text Section - Shifted Right */}
            <div className="w-full lg:w-7/12 flex justify-end   ">
              <div className="max-w-3xl">
                <h1 className="text-4xl sm:text-[80px] font-bold leading-tight ">
                  Eliminate Chaos,<br />Embrace Clarity
                </h1>
                <p className="text-lg text-center text-gray-300 mt-6">
                  Experience the Full AcademyKit Advantage.
                </p>
                <div className="flex items-center justify-center">
                <button className="mt-8   bg-[#c3e192] text-gray-900 border-3 border-gray-900 hover:border-lime-600 font-semibold px-6 py-2 rounded-md transition">
                  Try Now!
                </button>
                </div>
              </div>
            </div>
  
            {/* Right Image Section */}
            <div className="w-full lg:w-5/12 mb-12 lg:mb-0 flex justify-center">
              <img
                src="https://cdn.prod.website-files.com/65aa7210793f3233f5dc51e7/6629d366f1728214096b4458_solutions-p-2000.png"
                alt="AcademyKit Dashboard"
                className="w-full h-auto max-w-xs md:max-w-md"
              />
            </div>
          </div>
        </div>

        <section className=" py-20 px-6 lg:px-20">

          <h2 className="text-3xl font-semibold sm:text-5xl max-w-3xl mx-auto leading-tight
          ">Discover How AcademyKit Can Empower You in Various Ways</h2>

          <p className="py-6  text-gray-700 text-center">Take Control of Your Learning Journey with AcademyKit</p>

        </section>
    <div className="flex flex-wrap justify-center gap-8"> {/* Changed to stretch for equal height */}
    {/* Card 1 */}
    <div className="bg-[#0b0c2a] text-white rounded-2xl px-7 py-9 w-full max-w-2xl flex flex-col items-center"> {/* Increased padding slightly */}
      <div className="mb-5 border-2 bg-[#aad390] p-4 rounded-full">
        <FaHandshake/>
        
      </div>
      <h3 className="text-[30px] font-semibold mb-3.5">On Boarding</h3>  {/* Between xl and 2xl */}
      <p className="text-center text-[16px] py-4 mb-5 leading-snug">  {/* Slightly larger than base */}
      Both HR teams and workforces often find the hiring and onboarding of new employees to be a daunting task. AcademyKit provides a solution by facilitating the development of a highly efficient onboarding experience that improves workforce learning and performance
      </p>
      <Link
        href="/on-boarding"
    className="text-[#aad390] font-semibold inline-flex items-center gap-1 hover:text-[#5e862a] transition text-[15px]"
      >
        Learn more <span>&rarr;</span>
      </Link>
    </div>

    {/* Card 2 */}
    <div className="bg-[#0b0c2a] text-white rounded-2xl px-7 py-9 w-full max-w-2xl flex flex-col items-center">
      <div className="mb-5 border-2 bg-[#aad390] p-4 rounded-full">
        <FaMagnet/>
        
      </div>
      <h3 className="text-[30px] font-semibold mb-3.5">Customer Success</h3>
      <p className="text-center text-[16px] py-3 mb-5 leading-snug">
      Begin an adventure where your customers, employees, and partners engage deeply with your product ecosystem through captivating and interactive courses. With AcademyKit, creating these immersive learning experiences is seamless, ensuring participants not only understand your product intricacies but also earn valuable certifications upon completion.
      </p>
      <Link
        href="/customer-success"
        className="text-[#aad390] font-semibold inline-flex items-center gap-1 hover:text-[#5e862a] transition text-[15px]"
      >
        Learn more <span>&rarr;</span>
      </Link>
    </div>
    <div className="flex flex-wrap justify-center gap-8">
    <div className="bg-[#0b0c2a] text-white rounded-2xl px-7 py-9 w-full max-w-2xl flex flex-col items-center">
      <div className="mb-5 border-2 bg-[#aad390] p-4 rounded-full">
        <FaComputer/>
      </div>
      <h3 className="text-[30px] font-semibold mb-3.5">Employee Training</h3>
      <p className="text-center text-[16px] py-3 mb-5 leading-snug">
      In the ever-evolving landscape of business today, success requires embracing a growth-oriented mindset. Empower your team with ongoing upskilling and reskilling, essential for sustainable growth and maintaining industry leadership.
      </p>
      <Link
        href="#"
        className="text-[#aad390] font-semibold inline-flex items-center gap-1 hover:text-[#5e862a] transition text-[15px]"
      >
        Learn more <span>&rarr;</span>
      </Link>
    </div>
    <div className="bg-[#0b0c2a] text-white rounded-2xl px-7 py-9 w-full max-w-2xl flex flex-col items-center">
      <div className="mb-5 border-2 bg-[#aad390] p-4 rounded-full">
        <FaArrowsAlt/>
        
      </div>
      <h3 className="text-[30px] font-bold mb-3.5">Sales Training</h3>
      <p className="text-center text-[16px] py-3 mb-5 leading-snug">
      AcademyKit ensures a thorough understanding of your solutions for your sales team. Access all details about your products and services in one central platform, effortlessly share learning materials, and conveniently track progress.
      </p>
      <Link
        href="/sales-training"
        className="text-[#aad390] font-semibold inline-flex items-center gap-1 hover:text-[#5e862a] transition text-[15px]"
      >
        Learn more <span>&rarr;</span>
      </Link>
    </div>
    


    </div>
    
  </div>


        <section className="py-20 px-6 lg:px-20 mt-10">

          <h2 className="text-3xl md:text-5xl font-semibold text-center">Start Today!</h2> 

          <p className="py-3 mt-3 text-gray-700 text-center">Join startups already growing with AcademyKit.</p>


          <div className="flex gap-3 justify-center py-4">



            <button className="px-4 py-2 rounded-md bg-gray-900 text-white hover:text-gray-900 hover:bg-white border-3 border-gray-900 transition duration-300 ease-in-out">Download Now</button>
            <button className="border-3 border-gray-900 text-gray-900 bg-[#c3e192] px-4 py-2 rounded-md hover:border-lime-600 transition duration-300 ease-in-out">Learn How</button>
          </div>


        </section>
      </div>
    );
  }
  