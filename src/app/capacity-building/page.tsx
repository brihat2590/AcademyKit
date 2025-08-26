import Link from "next/link";
import { AiOutlineProduct } from "react-icons/ai";
import { GiProcessor, GiSkills } from "react-icons/gi";


export default function page(){
    const CheckIcon = () => (
        <svg
          className="w-5 h-5 text-[#0d0c3d] flex-shrink-0 mt-1"
          fill="none"
          stroke="currentColor"
          strokeWidth={2.5}
          viewBox="0 0 24 24"
        >
          <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
        </svg>
      );

    const steps = [
        {
          number: "01",
          title: "Identify Training Needs",
          description:
            "Leverage performance data and AI insights to precisely identify individual training needs, ensuring laser-focused skill development.",
          arrow: "https://s3.sursatech.com/api/v1/buckets/academykit/objects/download?preview=true&prefix=down.svg&version_id=null", // ← dummy arrow path
        },
        {
          number: "02",
          title: "Deliver Targeted Learning",
          description:
            "Trigger relevant training content and notifications only for those who need them, streamlining learning and saving time.",
          arrow: "https://s3.sursatech.com/api/v1/buckets/academykit/objects/download?preview=true&prefix=up.svg&version_id=null",
        },
        {
          number: "03",
          title: "Boost Sales Enablement",
          description:
            "Provide on-demand access to training modules, ensuring salespeople are equipped before each pitch.",
          arrow: "https://s3.sursatech.com/api/v1/buckets/academykit/objects/download?preview=true&prefix=down.svg&version_id=null",
        },
        {
          number: "04",
          title: "Link Learning to Performance",
          description:
            "Integrate training with performance goals, helping learners achieve measurable results.",
        },
      ];

    return(
        <div className="bg-[#fbfef5] border-b border-gray-200 pb-10">

<section className="bg-[#01002A] text-[#f4e26d] flex flex-col md:flex-row md:px-16 md:py-40 px-8 py-10">
  {/* Left: Headings */}
  <div className="w-full md:w-[70%] max-w-3xl mx-auto text-center md:text-left mb-10 md:mb-0">
    <h1 className="text-4xl md:text-[84px] font-light leading-tight mb-6 md:mb-12">
      Don't Just Sell <br /> Sell Smart!
    </h1>
    <p className="text-sm tracking-widest text-white/80 uppercase">
      INVEST IN TRAINING THAT ELEVATES YOUR <br />SALES GAME
    </p>
  </div>

  {/* Right: Get A Demo Circle */}
  <div className="w-full md:w-[30%] flex justify-center md:justify-start items-center relative md:-ml-16">
    {/* Circle container (hidden on small, visible on md+) */}
    <div className="hidden md:flex relative group w-64 h-64 items-center justify-center">
      {/* Big Circle */}
      <div className="absolute w-64 h-64 rounded-full border border-lime-300" />

      {/* Small Circle (moves on hover) */}
      <div className="absolute w-44 h-44 rounded-full border border-lime-300 transform -translate-x-20 transition-transform duration-500 ease-in-out group-hover:translate-x-0" />

      {/* Button */}
      <Link
        href="/request-demo"
        className="relative z-10 text-white tracking-widest text-sm transform -translate-x-20 transition-transform duration-500 ease-in-out group-hover:translate-x-0 pl-2"
      >
        GET A DEMO
      </Link>
    </div>
  </div>
</section>

    
    <section className="bg-[#fbfef5]  flex flex-col  md:px-16 md:py-24  py-10 overflow-hidden ">
        <div className="max-w-7xl  flex flex-col md:mx-auto">


            <h2 className=" text-center text-2xl sm:text-3xl  md:text-5xl font-semibold">Product Knowledge to Sales<br></br>Mastery</h2>


            <p className=" p-2 text-center font-light text-[19px] mt-2 sm:mt-4 max-w-[720px] mb-4">
            Build strategic thinkers, not just salespeople. Empower your team with in-depth product understanding and watch your sales magic unfold.

            </p>
            <img src="https://s3.sursatech.com/api/v1/buckets/academykit/objects/download?preview=true&prefix=mordernDevelopment.png&version_id=null"
            alt="onboarding"
            className="h-full w-full rounded-lg max-w-xl md:max-w-2xl mx-auto mt-8 sm:mt-15 mb-5 px-3"
            />  


        </div>
        


    </section>
    <section className="bg-[#fcfff5] py-16 px-6">
      <div className="max-w-7xl mx-auto text-center mb-12">
        <h2 className="text-3xl sm:text-4xl font-semibold text-gray-900">Our Training Programs</h2>
      </div>

      <div className="grid md:grid-cols-3 gap-10 max-w-6xl mx-auto place-items-center ">
        {/* Product Training */}
        <div>
          <div className="flex justify-center mb-4">
            <div className="w-12 h-12 bg-[#c3e192] rounded-full flex items-center justify-center">
              <AiOutlineProduct size={20}/>
            </div>
          </div>
          <h3 className="text-xl font-semibold text-gray-900 mb-4 text-center pb-3">Product Training</h3>
          <ul className="space-y-4 text-left text-md text-gray-800">
            <li className="flex gap-3 items-start  ">
              <CheckIcon />
              <span>Introducing the product effectively</span>
            </li>
            <li className="flex gap-3 items-start">
              <CheckIcon />
              <span>Comprehending its unique selling points (USPs) and advantages</span>
            </li>
            <li className="flex gap-3 items-start">
              <CheckIcon />
              <span>Comparing its features to those of competitors offerings</span>
            </li>
            <li className="flex gap-3 items-start">
              <CheckIcon />
              <span>Mastering the art of positioning the product</span>
            </li>
          </ul>
        </div>

        {/* Process Training */}
        <div>
          <div className="flex justify-center mb-4">
            <div className="w-12 h-12 bg-[#c3e192] rounded-full flex items-center justify-center">
              <GiProcessor size={20}/>
              
            </div>
          </div>
          <h3 className="text-xl font-semibold text-gray-900 mb-4 text-center pb-3">Process Training</h3>
          <ul className="space-y-4 text-left text-gray-800">
            <li className="flex gap-3 ">
              <CheckIcon />
              <span>Getting familiar with the sales process</span>
            </li>
            <li className="flex gap-3 items-start">
              <CheckIcon />
              <span>Monitoring and tracking data and information</span>
            </li>
            <li className="flex gap-3 items-start">
              <CheckIcon />
              <span>Leveraging tools for process streamlining and automation</span>
            </li>
          </ul>
        </div>

        {/* Soft Skills Training */}
        <div>
          <div className="flex justify-center mb-4">
            <div className="w-12 h-12 bg-[#c3e192] rounded-full flex items-center justify-center">
              <GiSkills size={20}/>
            </div>
          </div>
          <h3 className="text-xl font-semibold text-gray-900 mb-4 text-center pb-3">Soft Skills Training</h3>
          <ul className="space-y-4 text-left text-gray-800">
            <li className="flex gap-3 items-start">
              <CheckIcon />
              <span>Enhancing communication and presentation abilities</span>
            </li>
            <li className="flex gap-3 items-start">
              <CheckIcon />
              <span>Practicing empathy to understand customers and their challenges</span>
            </li>
            <li className="flex gap-3 items-start">
              <CheckIcon />
              <span>Cultivating negotiation skills to secure more successful deals</span>
            </li>
          </ul>
        </div>
      </div>

      {/* Buttons */}
      <div className="flex justify-center gap-4 mt-12">
        <a href="https://hub.docker.com/r/academykit/academy" target="_blank" rel="noopener noreferrer" className="bg-[#0d0c3d] text-white px-6 py-3 rounded-md font-semibold border-3 border-gray-900 hover:bg-white hover:text-gray-900 transition duration-300 ease-in-out">
          Get started
        </a>
        <a href="https://docs.academykit.co/introduction" target="_blank" rel="noopener noreferral" className="bg-[#d2f1a3] text-[#0d0c3d] px-6 py-3 rounded-md font-semibold hover:bg-[#c8e596] transition border-3 hover:border-green-600">
          Learn more
        </a>
      </div>
    </section>
    
    <section className="bg-[#f9fcef] py-20 px-4">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-[#0f172a] mb-4">
          Seamless knowledge sharing on AcademyKit
        </h2>
        <p className="text-center text-gray-600 text-lg max-w-3xl mx-auto mb-16">
          Turn product rookies into confident pros with AcademyKit: one-stop solution for deep dives, easy content sharing, and data-driven insights.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 text-center">
          {steps.map((step, index) => {
            const showArrow = !!step.arrow;
            const arrowAbove = index === 1; // Step 2 → arrow on top
            const arrowBelow = index === 0 || index === 2; // Step 1 or 3 → arrow on bottom

            return (
              <div
                key={index}
                className={`flex flex-col items-center px-2 py-4 ${
                  index % 2 !== 0 ? "md:mt-16" : "mt-0"
                }`}
              >
                {/* Arrow ABOVE */}
                {showArrow && arrowAbove && (
                  <img
                    src={step.arrow}
                    alt="arrow"
                    className=" md:mb-4 w-full hidden md:block h-auto "
                  />
                )}

                {/* Content */}
                <h3 className="text-blue-600 font-semibold text-xl">
                  {step.number}
                </h3>
                <h4 className="text-[#0f172a] font-bold text-xl my-2">
                  {step.title}
                </h4>
                <p className="text-gray-600 text-md max-w-sm">{step.description}</p>

                {/* Arrow BELOW */}
                {showArrow && arrowBelow && (
                  <img
                    src={step.arrow}
                    alt="arrow"
                    className=" md:mt-4 w-full hidden md:block"
                  />
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>

    <section>
        <div className="max-w-7xl mx-auto bg-[#fbfef5] py-20 px-4">


            <img src="https://s3.sursatech.com/api/v1/buckets/academykit/objects/download?preview=true&prefix=assessment.png&version_id=null"
            alt="hero"
            className="w-full px-4 py-"
            />
        </div>
    </section>
    <section className="bg-[#f9fcf1] py-12 px-6 mt-10">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 items-stretch">
        {/* Left Section (Image and Pricing) */}
        <div className="text-center md:text-left flex flex-col justify-center items-start ">
          {/* Placeholder for Image */}
          <img src={"https://s3.sursatech.com/api/v1/buckets/academykit/objects/download?preview=true&prefix=selfHostedIcon.svg&version_id=null"} alt="placholder"
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
            <a href="https://hub.docker.com/r/academykit/academy" target="_blank" rel="noopener noreferrer" className="w-full bg-[#0c0c3d] text-white border-3 border-gray-900 hover:bg-white hover:text-gray-900 py-2 rounded-md font-semibold  transition ease-in-out duration-300 flex justify-center ">
              Try Now
            </a>
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

          <div className="mt-8 ">
            <Link href={
              "/contact"
            } className="w-full bg-white text-[#0c0c3d] py-2 rounded-md font-semibold hover:bg-gray-200 transition border-2 hover:border-green-600 border-gray-900 flex justify-center">
              Contact Us
            </Link>
            <p className="text-sm mt-4 text-center text-white">
              Get personalized demo and custom plan
            </p>
          </div>
        </div>
      </div>
    </section>
    



        </div>
    )

}