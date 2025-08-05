import { Check } from "lucide-react";
import Image from "next/image";
function FeatureItem({ text }: { text: string }) {
  return (
    <div className="flex items-start gap-6">
      <Check className="w-6 h-6 stroke-[3] text-[#0c0c3d]" />
      <span>{text}</span>
    </div>
  );
}
const AboutSection = () => {
  return (
    <section className="bg-[#fbfef5] text-[#0c0636] px-6 md:px-20 py-16 space-y-24">
      {/* Header */}
      <div className="text-center max-w-3xl mx-auto space-y-4">
        <h2 className="text-4xl md:text-5xl font-semibold mb-5">About the company</h2>
        <p className="text-lg md:text-xl leading-relaxed pt-5">
          At Sursa, we are driven by a singular mission: to empower businesses through cutting-edge technology. Our flagship product, AcademyKit Learning Management System (LMS), stands at the forefront of this vision, offering unparalleled solutions to streamline learning processes and elevate user experiences.
        </p>
      </div>

      {/* Section 1 - Image Left, Text Right */}
      <div className="flex flex-col md:flex-row items-center justify-center gap-20">
        <div className="max-w-md flex-shrink-0">
          <img
            src="https://cdn.prod.website-files.com/65aa7210793f3233f5dc51e7/6629db56b8a3b236ee55c8fc_6.png"
            alt="Profile Section"
            width={600}
            height={400}
            className="w-full h-auto"
          />
        </div>
        <div className="max-w-2xl">
          <h3 className="text-4xl font-semibold">Empowering Control, Amplifying Performance</h3>
          <p className="text-lg mt-5">
            AcademyKit LMS isn't just another software – it's a paradigm shift in how businesses approach learning. With our self-hosted model, powered by Docker Hub, users gain unprecedented control over their data. No more compromises on privacy or security. It's your data, your rules.
          </p>
        </div>
      </div>

      {/* Section 2 - Text Left, Image Right */}
      <div className="flex flex-col-reverse md:flex-row items-center justify-center gap-6">
        <div className="max-w-2xl">
          <h3 className="text-4xl font-semibold">Unleashing the Power of AI</h3>
          <p className="text-lg mt-5">
            Say hello to efficiency with AI integration. AcademyKit LMS leverages artificial intelligence to enhance usability, making every interaction intuitive and seamless. Say goodbye to clunky interfaces and hello to a smarter, more intuitive learning experience.
          </p>
        </div>
        <div className="max-w-md flex-shrink-0">
          <img
            src="https://cdn.prod.website-files.com/65aa7210793f3233f5dc51e7/6629f1e0a1231b0ce6ad5bce_AI%20settings%20-2-p-500.webp"
            alt="AI Integration"
            width={800}
            height={600}
            className="w-full h-auto"
          />
        </div>
      </div>
      {/* Section 1 - Image Left, Text Right */}
      <div className="flex flex-col md:flex-row items-center justify-center gap-20">
        <div className="max-w-md flex-shrink-0">
          <img
            src="https://cdn.prod.website-files.com/65aa7210793f3233f5dc51e7/662a0aba8f6b04cee2902a88_about-us.png"
            alt="Profile Section"
            width={600}
            height={400}
            className="w-full h-auto"
          />
        </div>
        <div className="max-w-2xl">
          <h3 className="text-4xl font-semibold">Tailored Solutions for Every Business Need</h3>
          <p className="text-lg mt-5">
          Whether it's employee onboarding, upskilling, or customer success, AcademyKit LMS has you covered. We understand that training needs vary across industries and organizations. That's why our platform offers unparalleled flexibility, catering to diverse training requirements with ease.
          </p>
        </div>
      </div>

      {/* Section 2 - Text Left, Image Right */}
      <div className="flex flex-col-reverse md:flex-row items-center justify-center gap-6">
        <div className="max-w-2xl">
          <h3 className="text-4xl font-semibold">Transforming Customer Success</h3>
          <p className="text-lg mt-5">
            
Unlock the full potential of your products with AcademyKit LMS. Our platform empowers businesses to cultivate customer success by providing comprehensive product knowledge and support. Say goodbye to underutilization and hello to satisfied, engaged customers.
          </p>
        </div>
        <div className="max-w-md flex-shrink-0">
          <img
            src="https://cdn.prod.website-files.com/65aa7210793f3233f5dc51e7/6629d9d643eea5400f881174_3.png"
            alt="AI Integration"
            width={800}
            height={600}
            className="w-full h-auto"
          />
        </div>
      </div>
      {/* Section 1 - Image Left, Text Right */}
      <div className="flex flex-col md:flex-row items-center justify-center gap-20">
        <div className="max-w-md flex-shrink-0">
          <img
            src="https://cdn.prod.website-files.com/65aa7210793f3233f5dc51e7/662a081337944f4cf8275cf3_2.png"
            alt="Profile Section"
            width={600}
            height={400}
            className="w-full h-auto"
          />
        </div>
        <div className="max-w-2xl">
          <h3 className="text-4xl font-semibold">Certify with Confidence</h3>
          <p className="text-lg mt-5">
          With AcademKit LMS, validation is just a click away. Our digital certification feature allows businesses to customize certificates to their brand identity, issuing industry-recognized credentials to customers. Build trust, credibility, and loyalty with ease.
          </p>
        </div>
      </div>
      <div className="flex flex-col md:flex-row items-center justify-center gap-20">
        <div className="max-w-md flex-shrink-0">
          <img
            src="https://cdn.prod.website-files.com/65aa7210793f3233f5dc51e7/662a0c7cb5daaabe3bacfd5f_about-us-1-p-800.png"
            alt="Profile Section"
            width={600}
            height={400}
            className="w-full h-auto"
          />
        </div>
        <div className="max-w-2xl">
          <h3 className="text-4xl font-semibold">Driving Business Success, One Training at a Time</h3>
          <p className="text-lg mt-5">

            At Sursa, we're more than just a software company – we're your partners in success. By digitizing training and mitigating its associated challenges, we enable businesses to:
          
          </p>
          <div className="flex flex-col justify-end h-full text-[#0c0c3d] text-lg gap-3 mt-10">
          <FeatureItem text="Reduce support costs" />
          <FeatureItem text="Faster platform adoption and user engagement" />
          <FeatureItem text="Enhance customer satisfaction" />
          <FeatureItem text="Cultivate loyalty through gamified learning and certification" />
        </div>

          
        </div>
      </div>

      
    </section>
  );
};

export default AboutSection;
