import { Check } from "lucide-react";
import Link from "next/link";

export default function page(){
    const certifications = [
        {
          name: "Webflow University",
          description:
            "Webflow offers a certification program where users can showcase their proficiency through their project portfolio and completion of Webflow University courses.",
          image: "https://cdn.prod.website-files.com/65aa7210793f3233f5dc51e7/65d17687bba003f13e0958bb_Logo%20Webflow.png", // place this in your /public/images folder
        },
        {
          name: "Google Skillshop",
          description:
            "Google certifications focus on Google products such as Google Ads, Google Analytics, and Google Cloud. They assess proficiency in advertising, analytics, and cloud computing using these platforms.",
          image: "https://cdn.prod.website-files.com/65aa7210793f3233f5dc51e7/65d17687d6ab41d1de2f483f_Google%20logo.png",
        },
        {
          name: "Microsoft Learn",
          description:
            "Microsoft certifications validate proficiency in Microsoft products like Azure, Microsoft 365, and Dynamics 365. They cover roles like cloud computing, productivity, and business applications.",
          image: "https://cdn.prod.website-files.com/65aa7210793f3233f5dc51e7/65d17687d1823f89c6533194_Logo%20microsoft.png",
        },
        {
          name: "Adobe Learn and Support",
          description:
            "Adobe certifications assess proficiency in Adobe Creative Cloud products like Photoshop, Illustrator, InDesign, and Premiere Pro. They validate skills in digital design, photo editing, video production, and other creative tasks.",
          image: "https://cdn.prod.website-files.com/65aa7210793f3233f5dc51e7/65d17687fcc333b3a566920f_Adobe%20Logo.png",
        },
      ];

    const features = [
        {
          title: "Gamified Learning",
          description:
            "Transform mundane training sessions into exciting adventures. Engage learners with interactive elements, quizzes, challenges, points, badges, and leaderboards for knowledge retention.",
          image:
            "https://cdn.prod.website-files.com/65aa7210793f3233f5dc51e7/665017a9db6877d106f674b6_Gamified%20Learning.png",
        },
        {
          title: "Powerful Certifications",
          description:
            "Validate skills with industry-recognized or company-specific certifications. Empower users to showcase their achievements to employers or colleagues, validating their skills and expertise. Reward achievements for enhanced motivation and retention.",
          image:
            "https://cdn.prod.website-files.com/65aa7210793f3233f5dc51e7/662a081337944f4cf8275cf3_2.png",
        },
        {
          title: "Collective Knowledge Exchange",
          description:
            "Discover the power of collaborative learning and knowledge sharing. Foster collaboration among users, unlocking the collective expertise of your product. Create a loyal customer base through gamified learning and certification.",
          image:
            "https://cdn.prod.website-files.com/65aa7210793f3233f5dc51e7/662a08d4b943c6a5bce9b826_8.png",
        },
        {
            title:"Self Hosted",
            description:"Simplify the setup process, improve your ability to handle growth, and enhance the protection of your data. Gain the freedom to host and manage your applications yourself, giving you complete control over your data and its security.",
            image:"https://cdn.prod.website-files.com/65aa7210793f3233f5dc51e7/6649978c6d16eb946c05ec16_Vurilo%20LMS%20center%20combo%20mockup-final%20(500%20x%20333%20px).png"
        },
        {
            title:"Scalability & Security",
            description:"Scale effortlessly for small teams or large enterprises. Robust infrastructure and cutting-edge security measures ensure top performance and data protection.",
            image:"https://cdn.prod.website-files.com/65aa7210793f3233f5dc51e7/662a08ebf9eb4f1167a8ccbf_9.png"
        },
        {
            title:"AI-Powered Insights & Analytics",
            description:"Leverage artificial intelligence, and provide users with valuable insights and analytics regarding their learning progress and performance. Let them track their achievements, identify areas for improvement, and receive personalized recommendations for further learning.",
            image:"https://cdn.prod.website-files.com/65aa7210793f3233f5dc51e7/6629d9d643eea5400f881174_3.png"
        },
        
      ];
      
    return(
        <div className="w-full">
        <div className="bg-[#fbfef5] px-25 py-25">

<div className="flex flex-col md:flex-row w-full justify-center  bg-gray-900 text-white rounded-xl shadow-lg overflow-hidden px-12 py-10 mb-5 ">
        <div className="p-8 md:p-12  w-full md:w-1/2">
          <p className="text-[#c3e192] text-sm mb-6">Get Started Today</p>
          <h1 className="text-4xl md:text-7xl font-semibold mb-4">
            Turn Customer Confusion Into Product Confidence
          </h1>
          <p className="text-[#c3e192] text-sm mb-6">
            Gamified training, personalized learning paths, and powerful certifications - all in one platform.
          </p>
          <a href="https://hub.docker.com/r/academykit/academy" target="_blank" rel="noopener noreferrer" className="bg-white text-indigo-900 px-6 py-2 rounded-lg font-semibold hover:bg-gray-200 border-3 border-indigo-900 hover:border-green-600">
            Try Now!
          </a>
        </div>
        <div className="w-full md:w-1/2 bg-gray-900 p-4 flex justify-center items-center">
          <img
            src="https://cdn.prod.website-files.com/65aa7210793f3233f5dc51e7/65caf9e1272ad5a4d6939fb2_Media%2520Ratios-p-800.jpg" // Replace with actual image URL
            alt="Person with laptop"
            className="w-150 h-full object-cover rounded-xl"
          />
        </div>
      </div>

      <section className="max-w-7xl mx-auto" >



        <div className="max-w-4xl mx-auto px-6 py-8">
        <h2 className="mb-2 py-4 mt-10  text-[26px] font-semibold text-center">Crafting Immersive Product Learning Experiences</h2>

            <p className="text-[18px] py-4 text-center ">Embark on a seamless journey with AcademyKit, where customers, employees, and partners delve into captivating courses within your product ecosystem. Effortlessly craft immersive experiences that ensure a thorough understanding of your product while earning valuable certifications.
            </p>

        </div>
      </section>
      <section className="w-full bg-[#fbfef5] py-16 px-6">
        <div className="max-w-7xl mx-auto grid md:grid-cols-3 gap-8">
          {features.map((feature, idx) => (
            <div
              key={idx}
              className="rounded-xl overflow-hidden border border-gray-200 shadow-sm hover:shadow-lg transition duration-300 bg-white"
            >
              <div className="bg-[#c2e092] p-4 flex justify-center items-center">
                <img
                  src={feature.image}
                  alt={feature.title}
                  className="rounded-md w-full object-cover"
                />
              </div>

              <div className="bg-white text-gray-900 px-6 py-6 flex flex-col justify-between h-full">
                <div>
                  <h3 className="text-lg font-bold mb-3">{feature.title}</h3>
                  <p className="text-sm text-gray-900">{feature.description}</p>
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

      <section className="max-w-7xl mx-auto bg-[#fbfef5] py-16 px-6">

        <h2 className="text-center py-2 text-4xl font-semibold mb-5">Companies that have been using a<br></br>similar approach to generate product<br></br>value.</h2>


        <div className="mt-15 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {certifications.map((item, index) => (
            <div
              key={index}
              className="relative bg-white rounded-xl shadow-md px-6 pt-16 pb-6 text-center group hover:shadow-lg transition-all "
            >
              {/* Image "popped out" above the card */}
              <div className="absolute -top-10 left-1/2 transform -translate-x-1/2 w-16 h-16 bg-white rounded-xl shadow flex items-center justify-center">
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-10 h-10 object-contain"
                />
              </div>

              <h3 className="font-semibold text-lg text-[#0f172a] mb-6">
                {item.name}
              </h3>
              <p className="text-sm text-gray-600 mb-8">{item.description}</p>
              <div className=" font-medium flex justify-center items-center gap-1 cursor-pointer hover:underline mt-2">
                See how <span className="ml-1">→</span>
              </div>
            </div>
          ))}
        </div>



        </section>
        <section className=" py-16 px-6">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
        {/* Left Text */}
        <div>
            <p className="py-4 text-md">Benefits</p>
          <h2 className="text-3xl md:text-4xl font-semibold text-[#0c0c3d] mb-4">
            Manange your team with reports
          </h2>
          <p className="text-[#4a4a68] mb-6 text-xl leading-relaxed p-2">
          Immerse your stakeholders in your product ecosystem with AcademyKit's captivating courses. Give knowledge and certifications effortlessly.
          </p>

          <ul className="space-y-4 mb-8">
            <li className="flex items-start space-x-3">
              <Check className="w-6 h-6 text-[#0c0c3d]   rounded-md p-0.5" />
              <span className="text-[#0c0c3d] text-base ">
                Reduce supports costs
              </span>
            </li>
            <li className="flex items-start space-x-3">
              <Check className="w-6 h-6 text-[#0c0c3d]  rounded-md p-0.5" />
              <span className="text-[#0c0c3d] text-base ">
                Promote platform adoption and user engagement
              </span>
            </li>
            <li className="flex items-start space-x-3">
              <Check className="w-6 h-6 text-[#0c0c3d]  rounded-md p-0.5" />
              <span className="text-[#0c0c3d] text-base ">
                Increase customer satisfaction 
              </span>
            </li>
            <li className="flex items-start space-x-3">
              <Check className="w-6 h-6 text-[#0c0c3d]  rounded-md p-0.5" />
              <span className="text-[#0c0c3d] text-base ">
                Build Loyalty Through Gamified Learning & Certification.
              </span>
            </li>
          </ul>

          
        </div>

        {/* Right Image */}
        <div className="flex justify-center">
          <div className="  rounded-2xl">
            <img
              src="https://cdn.prod.website-files.com/65aa7210793f3233f5dc51e7/6650113dd8f61520ebd53c59_Mockup-%20on%20boarding-p-2000.png"
              alt="Analytics Screenshot"
              width={600}
              height={400}
              className="rounded-xl "
            />
          </div>
        </div>
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
            <a href="https://hub.docker.com/r/academykit/academy" target="_blank" rel="noopener noreferrer" className="w-full bg-[#0c0c3d] text-white border-3 border-gray-900 hover:bg-white hover:text-gray-900 py-2 rounded-md font-semibold  transition ease-in-out duration-300 flex justify-center">
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

          <div className="mt-8">
            <Link href={"/contact"} className="w-full bg-white text-[#0c0c3d] py-2 rounded-md font-semibold hover:bg-gray-200 transition border-2 flex justify-center hover:border-green-600 border-gray-900 ">
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
        <section className="relative bg-[#f9fcf4] pb-40 pt-20 px-6 ">
      {/* Bottom dark background */}
      <div className="absolute inset-x-0 bottom-0 h-1/2 bg-[#0b0c2a] z-0 " />

      {/* Green box */}
      <div className="relative max-w-7xl mx-auto bg-[#a0d64b] rounded-xl py-20 px-8 md:px-16 flex flex-col md:flex-row justify-between items-center gap-6 z-10 shadow-xl">
        {/* Left Content */}
        <div className="text-center md:text-left max-w-xl">
          <h2 className="text-3xl md:text-4xl font-extrabold text-[#0b0c2a] mb-4">
            Build your Product <br></br>University now!
          </h2>
          <p className="text-[#0b0c2a] text-base md:text-lg">
            Join businesses that have been increasing their product value with AcademyKit.
          </p>
        </div>

        {/* Right Buttons */}
        <div className="flex gap-4">
          <button className="bg-[#0b0c2a] text-white font-semibold px-6 py-2 rounded hover:text-[#1a1b4a] hover:bg-white transition border-3 border-[#0b0c2a]">
            Get Started
          </button>
          <button className="bg-white text-[#0b0c2a] border-2 border-[#0b0c2a] font-semibold px-6 py-2 rounded hover:bg-gray-100 transition brder-3 hover:border-[#6a9b29]">
            Learn More
          </button>
        </div>
      </div>
    </section>
        

        </div>
    )
}