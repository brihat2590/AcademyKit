import { Check } from "lucide-react";
import Link from "next/link";

export default function page(){
    const certifications = [
        {
          name: "Webflow University",
          description:
            "Webflow offers a certification program where users can showcase their proficiency through their project portfolio and completion of Webflow University courses.",
          image: "https://s3.sursatech.com/api/v1/buckets/academykit/objects/download?preview=true&prefix=webflow.png&version_id=null", // place this in your /public/images folder
          href:"https://university.webflow.com/"
        },
        {
          name: "Google Skillshop",
          description:
            "Google certifications focus on Google products such as Google Ads, Google Analytics, and Google Cloud. They assess proficiency in advertising, analytics, and cloud computing using these platforms.",
          image: "https://s3.sursatech.com/api/v1/buckets/academykit/objects/download?preview=true&prefix=google.png&version_id=null"
        },
        {
          name: "Microsoft Learn",
          description:
            "Microsoft certifications validate proficiency in Microsoft products like Azure, Microsoft 365, and Dynamics 365. They cover roles like cloud computing, productivity, and business applications.",
          image: "https://s3.sursatech.com/api/v1/buckets/academykit/objects/download?preview=true&prefix=microsoft.png&version_id=null"
        },
        {
          name: "Adobe Learn and Support",
          description:
            "Adobe certifications assess proficiency in Adobe Creative Cloud products like Photoshop, Illustrator, InDesign, and Premiere Pro. They validate skills in digital design, photo editing, video production, and other creative tasks.",
          image: "https://s3.sursatech.com/api/v1/buckets/academykit/objects/download?preview=true&prefix=adobe.png&version_id=null"
        },
      ];

    const features = [
        {
          title: "Gamified Learning",
          description:
            "Transform mundane training sessions into exciting adventures. Engage learners with interactive elements, quizzes, challenges, points, badges, and leaderboards for knowledge retention.",
          image:
            "https://s3.sursatech.com/api/v1/buckets/academykit/objects/download?preview=true&prefix=gamification.png&version_id=null",
        },
        {
          title: "Powerful Certifications",
          description:
            "Validate skills with industry-recognized or company-specific certifications. Empower users to showcase their achievements to employers or colleagues, validating their skills and expertise. Reward achievements for enhanced motivation and retention.",
          image:
            "https://s3.sursatech.com/api/v1/buckets/academykit/objects/download?preview=true&prefix=certificates1.png&version_id=null",
        },
        {
          title: "Collective Knowledge Exchange",
          description:
            "Discover the power of collaborative learning and knowledge sharing. Foster collaboration among users, unlocking the collective expertise of your product. Create a loyal customer base through gamified learning and certification.",
          image:
            "https://s3.sursatech.com/api/v1/buckets/academykit/objects/download?preview=true&prefix=collectiveKnowledge.png&version_id=null",
        },
        {
            title:"Self Hosted",
            description:"Simplify the setup process, improve your ability to handle growth, and enhance the protection of your data. Gain the freedom to host and manage your applications yourself, giving you complete control over your data and its security.",
            image:"https://s3.sursatech.com/api/v1/buckets/academykit/objects/download?preview=true&prefix=selfagain.png&version_id=null"
        },
        {
            title:"Scalability & Security",
            description:"Scale effortlessly for small teams or large enterprises. Robust infrastructure and cutting-edge security measures ensure top performance and data protection.",
            image:"https://s3.sursatech.com/api/v1/buckets/academykit/objects/download?preview=true&prefix=selfHosted.png&version_id=null"
        },
        {
            title:"AI-Powered Insights & Analytics",
            description:"Leverage artificial intelligence, and provide users with valuable insights and analytics regarding their learning progress and performance. Let them track their achievements, identify areas for improvement, and receive personalized recommendations for further learning.",
            image:"https://s3.sursatech.com/api/v1/buckets/academykit/objects/download?preview=true&prefix=assessmentAgain.png&version_id=null"
        },
        
      ];
      
    return(
        <div className="w-full">
        <div className="bg-[#fbfef5] px-4 sm:px-6 lg:px-25 py-8 sm:py-16 lg:py-25">

<div className="flex flex-col md:flex-row w-full justify-center bg-gray-900 text-white rounded-xl shadow-lg overflow-hidden px-6 sm:px-8 lg:px-12 py-8 lg:py-10 mb-5">
        <div className="p-4 sm:p-6 lg:p-8 xl:p-12 w-full md:w-1/2">
          <p className="text-[#c3e192] text-sm mb-4 sm:mb-6">Get Started Today</p>
          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-7xl font-semibold mb-4 leading-tight">
            Turn Customer Confusion Into Product Confidence
          </h1>
          <p className="text-[#c3e192] text-sm mb-6">
            Gamified training, personalized learning paths, and powerful certifications - all in one platform.
          </p>
          <a href="https://hub.docker.com/r/academykit/academy" target="_blank" rel="noopener noreferrer" className="inline-block bg-white text-indigo-900 px-6 py-2 rounded-lg font-semibold hover:bg-gray-200 border-3 border-indigo-900 hover:border-green-600">
            Try Now!
          </a>
        </div>
        <div className="w-full md:w-1/2 bg-gray-900 p-4 flex justify-center items-center mt-6 md:mt-0">
          <img
            src="https://s3.sursatech.com/api/v1/buckets/academykit/objects/download?preview=true&prefix=keti.webp&version_id=null" // Replace with actual image URL
            alt="Person with laptop"
            className="w-full max-w-md lg:w-150 h-auto object-cover rounded-xl"
          />
        </div>
      </div>

      <section className="max-w-7xl mx-auto px-4 sm:px-6" >



        <div className="max-w-4xl mx-auto px-4 sm:px-6 py-8">
        <h2 className="mb-2 py-4 mt-10 text-xl sm:text-2xl lg:text-[26px] font-semibold text-center">Crafting Immersive Product Learning Experiences</h2>

            <p className="text-base sm:text-lg lg:text-[18px] py-4 text-center">Embark on a seamless journey with AcademyKit, where customers, employees, and partners delve into captivating courses within your product ecosystem. Effortlessly craft immersive experiences that ensure a thorough understanding of your product while earning valuable certifications.
            </p>

        </div>
      </section>
      <section className="w-full bg-[#fbfef5] py-8 sm:py-12 lg:py-16 px-4 sm:px-6">
        <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
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

              <div className="bg-white text-gray-900 px-4 sm:px-6 py-6 flex flex-col justify-between h-full">
                <div>
                  <h3 className="text-lg font-bold mb-3">{feature.title}</h3>
                  <p className="text-sm text-gray-900">{feature.description}</p>
                </div>
                {/* <div className="mt-6">
                  <a
                    href=""
                    className="text-green-400 font-semibold text-sm flex items-center gap-2 hover:underline"
                  >
                    Learn more <span>→</span>
                  </a>
                </div> */}
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="max-w-7xl mx-auto bg-[#fbfef5] py-8 sm:py-12 lg:py-16 px-4 sm:px-6">

        <h2 className="text-center py-2 text-2xl sm:text-3xl lg:text-4xl font-semibold mb-5 leading-tight">Companies that have been using a<br className="hidden sm:block"></br>similar approach to generate product<br className="hidden sm:block"></br>value.</h2>


        <div className="mt-8 sm:mt-12 lg:mt-15 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {certifications.map((item, index) => (
            <div
              key={index}
              className="relative bg-white rounded-xl shadow-md px-4 sm:px-6 pt-16 mt-10 md:mt-0  pb-6 text-center group hover:shadow-lg transition-all "
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
              <a href={item.href} target="_blank" rel="noopener noreferral" className="font-medium flex justify-center items-center gap-1 cursor-pointer hover:underline mt-2">
                See how <span className="ml-1">→</span>
              </a>
            </div>
          ))}
        </div>



        </section>
        <section className="py-8 sm:py-12 lg:py-16 px-4 sm:px-6">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10 items-center">
        {/* Left Text */}
        <div className="order-2 md:order-1">
            <p className="py-4 text-md">Benefits</p>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-semibold text-[#0c0c3d] mb-4">
            Manange your team with reports
          </h2>
          <p className="text-[#4a4a68] mb-6 text-lg sm:text-xl leading-relaxed p-2">
          Immerse your stakeholders in your product ecosystem with AcademyKit's captivating courses. Give knowledge and certifications effortlessly.
          </p>

          <ul className="space-y-4 mb-8">
            <li className="flex items-start space-x-3">
              <Check className="w-6 h-6 text-[#0c0c3d] rounded-md p-0.5 flex-shrink-0 mt-0.5" />
              <span className="text-[#0c0c3d] text-base">
                Reduce supports costs
              </span>
            </li>
            <li className="flex items-start space-x-3">
              <Check className="w-6 h-6 text-[#0c0c3d] rounded-md p-0.5 flex-shrink-0 mt-0.5" />
              <span className="text-[#0c0c3d] text-base">
                Promote platform adoption and user engagement
              </span>
            </li>
            <li className="flex items-start space-x-3">
              <Check className="w-6 h-6 text-[#0c0c3d] rounded-md p-0.5 flex-shrink-0 mt-0.5" />
              <span className="text-[#0c0c3d] text-base">
                Increase customer satisfaction 
              </span>
            </li>
            <li className="flex items-start space-x-3">
              <Check className="w-6 h-6 text-[#0c0c3d] rounded-md p-0.5 flex-shrink-0 mt-0.5" />
              <span className="text-[#0c0c3d] text-base">
                Build Loyalty Through Gamified Learning & Certification.
              </span>
            </li>
          </ul>

          
        </div>

        {/* Right Image */}
        <div className="flex justify-center order-1 md:order-2">
          <div className="rounded-2xl">
            <img
              src="https://s3.sursatech.com/api/v1/buckets/academykit/objects/download?preview=true&prefix=QualityAssurance.png&version_id=null"
              alt="Analytics Screenshot"
              className="rounded-xl w-full max-w-md lg:max-w-none h-auto"
            />
          </div>
        </div>
      </div>
    </section>
    <section className="bg-[#f9fcf1] py-8 sm:py-12 px-4 sm:px-6">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-8 items-stretch">
        {/* Left Section (Image and Pricing) */}
        <div className="text-center lg:text-left flex flex-col justify-center items-center lg:items-start">
          {/* Placeholder for Image */}
          <img src={"https://s3.sursatech.com/api/v1/buckets/academykit/objects/download?preview=true&prefix=selfHostedIcon.svg&version_id=null"} alt="placholder"
          className="w-1/3 sm:w-1/4 lg:w-1/2"
          />

          <h3 className="text-xl font-semibold text-[#0c0c3d] mt-4">Self Hosted</h3>
          <p className="text-2xl sm:text-3xl font-bold text-[#0c0c3d] mt-2">
            $999.00 <span className="text-base font-normal">/ year</span>
          </p>
          <p className="text-[#0c0c3d] mt-4">Gain Control Over your Data.</p>
        </div>

        {/* Center Features Box */}
        <div className="bg-[#aad751] rounded-lg px-6 sm:px-8 py-8 flex flex-col justify-between min-h-[400px] sm:min-h-[480px]">
          <div>
            <h4 className="text-[#0c0c3d] text-md font-light mb-2">Features</h4>
            <h3 className="text-[#0c0c3d] font-extrabold text-xl mb-6">
              Quick look at all the features
            </h3>

            <ul className="space-y-3 text-[#0c0c3d] mt-6 sm:mt-10">
              <li className="flex items-start">
                ✓ <span className="ml-2 text-sm sm:text-base">Access to all standard features</span>
              </li>
              <li className="flex items-start">
                ✓ <span className="ml-2 text-sm sm:text-base">Unlimited storage space</span>
              </li>
              <li className="flex items-start">
                ✓ <span className="ml-2 text-sm sm:text-base">Priority email and phone support</span>
              </li>
              <li className="flex items-start">
                ✓ <span className="ml-2 text-sm sm:text-base">Advanced analytics and reporting</span>
              </li>
              <li className="flex items-start">
                ✓ <span className="ml-2 text-sm sm:text-base">Custom branding options</span>
              </li>
              <li className="flex items-start">
                ✓ <span className="ml-2 text-sm sm:text-base">Team management and user roles</span>
              </li>
            </ul>
          </div>

          <div className="mt-6">
            <a href="https://hub.docker.com/r/academykit/academy" target="_blank" rel="noopener noreferrer" className="w-full bg-[#0c0c3d] text-white border-3 border-gray-900 hover:bg-white hover:text-gray-900 py-2 rounded-md font-semibold transition ease-in-out duration-300 flex justify-center">
              Try Now
            </a>
            <p className="text-sm text-[#0c0c3d] mt-2 text-center">
              No credit card required. Deploy on your own
            </p>
          </div>
        </div>

        {/* Right Business Box */}
        <div className="bg-[#0c0c3d] text-white rounded-lg px-6 sm:px-8 py-8 flex flex-col justify-between min-h-[400px] sm:min-h-[480px]">
          <div>
            <h4 className="text-white text-sm mb-2">Business</h4>
            <h3 className="text-white text-xl font-extrabold mb-6">
              Technical Support and Add on
            </h3>

            <p className="flex items-start text-[#f4e26c]">
              <span className="mr-2 flex-shrink-0">→</span>
              <span className="text-sm sm:text-base">
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
    



        </div>
        <section className="relative bg-[#f9fcf4] pb-40 pt-20 px-4 sm:px-6">
      {/* Bottom dark background */}
      <div className="absolute inset-x-0 bottom-0 h-1/2 bg-[#0b0c2a] z-0" />

      {/* Green box */}
      <div className="relative max-w-7xl mx-auto bg-[#a0d64b] rounded-xl py-12 sm:py-16 lg:py-20 px-6 sm:px-8 lg:px-16 flex flex-col lg:flex-row justify-between items-center gap-6 z-10 shadow-xl">
        {/* Left Content */}
        <div className="text-center lg:text-left max-w-xl">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[#0b0c2a] mb-4 leading-tight">
            Build your Product <br className="hidden sm:block"></br>University now!
          </h2>
          <p className="text-[#0b0c2a] text-base lg:text-lg">
            Join businesses that have been increasing their product value with AcademyKit.
          </p>
        </div>

        {/* Right Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
          <a href="https://hub.docker.com/r/academykit/academy" target="_blank" rel="noopener noreferrer" className="bg-[#0b0c2a] text-white font-semibold px-6 py-2 rounded hover:text-[#1a1b4a] hover:bg-white transition border-3 border-[#0b0c2a] text-center">
            Get Started
          </a>
          <a href="https://docs.academykit.co/app-documentation/introduction" target="_blank" rel="noopener noreferrer" className="bg-white text-[#0b0c2a] border-2 border-[#0b0c2a] font-semibold px-6 py-2 rounded hover:bg-gray-100 transition border-3 hover:border-[#6a9b29] text-center">
            Learn More
          </a>
        </div>
      </div>
    </section>
        

        </div>
    )
}