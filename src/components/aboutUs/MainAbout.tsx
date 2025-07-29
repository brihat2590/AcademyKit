// components/AboutSection.tsx

import Image from "next/image";

const AboutSection = () => {
  return (
    <section className="bg-[#f9fcec] text-[#0c0636] px-6 md:px-20 py-16 space-y-24">
      {/* Header */}
      <div className="text-center max-w-3xl mx-auto space-y-4">
        <h2 className="text-4xl md:text-5xl font-bold">About the company</h2>
        <p className="text-lg md:text-xl leading-relaxed">
          At Sursa, we are driven by a singular mission: to empower businesses through cutting-edge technology. Our flagship product, AcademyKit Learning Management System (LMS), stands at the forefront of this vision, offering unparalleled solutions to streamline learning processes and elevate user experiences.
        </p>
      </div>

      {/* Section 1 - Image Left, Text Right */}
      <div className="flex flex-col md:flex-row items-center gap-10">
        <div className="w-full md:w-1/2">
          <Image
            src="/663f77dd-0c21-480d-b031-172d59fe4ff1.png"
            alt="Profile Section"
            width={800}
            height={600}
            className="w-full h-auto"
          />
        </div>
        <div className="w-full md:w-1/2 space-y-4">
          <h3 className="text-3xl font-bold">Empowering Control, Amplifying Performance</h3>
          <p className="text-lg">
            AcademyKit LMS isn't just another software – it's a paradigm shift in how businesses approach learning. With our self-hosted model, powered by Docker Hub, users gain unprecedented control over their data. No more compromises on privacy or security. It's your data, your rules.
          </p>
        </div>
      </div>

      {/* Section 2 - Text Left, Image Right */}
      <div className="flex flex-col-reverse md:flex-row items-center gap-10">
        <div className="w-full md:w-1/2 space-y-4">
          <h3 className="text-3xl font-bold">Unleashing the Power of AI</h3>
          <p className="text-lg">
            Say hello to efficiency with AI integration. AcademyKit LMS leverages artificial intelligence to enhance usability, making every interaction intuitive and seamless. Say goodbye to clunky interfaces and hello to a smarter, more intuitive learning experience.
          </p>
        </div>
        <div className="w-full md:w-1/2">
          <Image
            src="/348ef080-51e2-40fa-ae62-91db64ddb7e5.png"
            alt="AI Integration"
            width={800}
            height={600}
            className="w-full h-auto"
          />
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
