"use client";

import { useEffect, useRef, useState } from "react";

const features = [
  {
    title: "AI Integrated",
    description:
      "Designed to cater to both instructors and students, equipped with user-friendly functionalities and an intuitive interface",
    image:
      "https://s3.sursatech.com/api/v1/buckets/academykit/objects/download?preview=true&prefix=aiIntegrated.png&version_id=null",
  },
  {
    title: "Training Management",
    description:
      "Conduct your training symphony. Plan, deliver, track, report – all for efficient skill development & data-driven success.",
    image:
      "https://s3.sursatech.com/api/v1/buckets/academykit/objects/download?preview=true&prefix=TrainigManagement.png&version_id=null",
  },
  {
    title: "Progress Tracking & Reporting",
    description:
      "Maximize Learning with Data-Driven Insights. Tailor Courses for Personalized eLearning Experiences with Academy Kit.",
    image:
      "https://s3.sursatech.com/api/v1/buckets/academykit/objects/download?preview=true&prefix=progressTracking.png&version_id=null",
  },
];

const sections = [
  {
    id: "private",
    title: "Private Cloud Deployment",
  },
  {
    id: "on",
    title: "On-Premise Deployment",
  },
  {
    id: "enterprise",
    title: "Enterprise-Grade Hosting",
  },
  {
    id: "fast",
    title: "Custom Deployment Solution",
  },
  {
    id: "customization",
    title: "Customization and Branding",
  },
];

export default function SelfHostedLms() {
  const [activeId, setActiveId] = useState("private");
  const [isScrolled, setIsScrolled] = useState(false);
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const observer = useRef<IntersectionObserver | null>(null);
  const isManualScroll = useRef(false);

  const handleNavClick = (id: string, e: React.MouseEvent) => {
    e.preventDefault();
    const element = document.getElementById(id);
    if (element) {
      isManualScroll.current = true;
      setActiveId(id);
      element.scrollIntoView({ behavior: "smooth", block: "start" });

      setTimeout(() => {
        isManualScroll.current = false;
      }, 1000);
    }
  };

  // ✅ Detect scroll-based section visibility
  useEffect(() => {
    const sectionIds = sections.map((s) => s.id);
    const sectionElements = sectionIds
      .map((id) => document.getElementById(id))
      .filter((el): el is HTMLElement => el !== null);

    if (observer.current) {
      observer.current.disconnect();
    }

    observer.current = new IntersectionObserver(
      (entries) => {
        if (isManualScroll.current) return;
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const currentId = entry.target.id;
            setActiveId(currentId);
          }
        });
      },
      {
        root: null,
        rootMargin: "0px 0px -40% 0px",
        threshold: 0.6,
      }
    );

    sectionElements.forEach((section) => {
      observer.current?.observe(section);
    });

    return () => {
      sectionElements.forEach((section) => {
        observer.current?.unobserve(section);
      });
    };
  }, []);

  // ✅ Optional: Detect general page scroll
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className="min-h-screen w-full bg-[#fbfef5] px-6 pb-20 pt-10">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center justify-between gap-10">
        {/* Left Content */}
        <div className="w-full lg:w-1/2 space-y-2">
          <p className="text-green-700 font-semibold text-sm">Self-hosted</p>

          <h1 className="text-4xl md:text-6xl font-extrabold text-[#0A0A2C] leading-tight">
            Drive Results <br /> through Effective <br /> Data Control
          </h1>

          <p className="text-[#4c9c6a] text-lg">
            Empowering Control for an Unrivaled Experience. Safeguard sensitive data, ensure compliance, and enjoy a secure learning environment.
          </p>

          <div className="flex items-center gap-6 pt-4 mt-5 md:mt-10">
            <a href="https://hub.docker.com/r/academykit/academy" target="_blank" rel="noopener noreferrer"  className="bg-gray-900 text-white px-6 py-2.5 rounded-md text-sm font-medium hover:bg-white hover:text-[#0A0A2C] border-3 border-gray-900 hover:border-[#0A0A2C] transition duration-300 ease-in-out">
              Get started
            </a>
            <a href="https://docs.academykit.co/introduction" target="_blank" rel="noopener noreferrer" className="text-gray-900 font-bold flex items-center gap-2 text-md py-2">
              Learn more <span>→</span>
            </a>
          </div>
        </div>

        {/* Right Image */}
        <div className="w-full lg:w-1/2 flex justify-center">
          <img
            src="https://s3.sursatech.com/api/v1/buckets/academykit/objects/download?preview=true&prefix=session.jpg&version_id=null"
            alt="AI Dashboard"
            className="w-full max-w-xl object-contain rounded-xl shadow-lg rotate-[-6deg]"
          />
        </div>
      </div>

      

      {/* Scroll Sync Section */}
      <div className="flex min-h-screen bg-[#fbfef5] max-w-7xl mx-auto mt-10 md:mt-30 ">
        {/* Left Nav */}
        <nav className="w-1/4 p-6 hidden md:flex sticky top-20 h-screen  flex-col gap-4 border-r mt-12">
          {sections.map((s) => (
            <a
              key={s.id}
              href={`#${s.id}`}
              onClick={(e) => handleNavClick(s.id, e)}
              className={`px-10 py-3 rounded-md text-sm font-medium transition-colors ${
                activeId === s.id
                  ? "text-gray-900 bg-[#c2e092]"
                  : "text-gray-700 hover:bg-gray-100"
              }`}
            >
              <p className="text-xl font-light">{s.title}</p>
            </a>
          ))}
        </nav>

        {/* Right Scrollable Content */}
        <div
          ref={scrollContainerRef}
          className="w-full md:w-4/5 overflow-y-auto px-4 md:px-8 py-6 md:py-12 space-y-12 md:space-y-32"
        >
  <section id="private" className="scroll-mt-24 py-6 md:py-10">
    <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">Secure & Private Cloud Hosting</h2>
    <p className="text-gray-700 mb-6">
    Elevate your data security and control with our private cloud deployment option. Your data remains yours alone, housed within your organization's private cloud infrastructure. This means heightened security and the freedom to customize the app to fit your unique needs and preferences.
    </p>
    <img
      src="https://s3.sursatech.com/api/v1/buckets/academykit/objects/download?preview=true&prefix=academySetup.png&version_id=null"
      alt="private"
      className="max-w-3xl  rounded-lg w-full"
    />
  </section>

  <section id="on" className="scroll-mt-24 py-6 md:py-10">
    <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">Your Data, Your Rules</h2>
    <p className="text-gray-700 mb-6">
    Take the reins of your data management. With on-premises control, you have the power to manage the app within your IT environment, ensuring full data sovereignty and compliance with your organization's policies and regulations. Rest easy, knowing your data is in your hands.
    </p>
    <img
      src="https://s3.sursatech.com/api/v1/buckets/academykit/objects/download?preview=true&prefix=dataRules.png&version_id=null"
      alt="on"
      className="max-w-3xl rounded-lg w-full"
    />
  </section>

  <section id="enterprise" className="scroll-mt-24 py-6 md:py-10">
    <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">Unwavering Performance</h2>
    <p className="text-gray-700 mb-6">
    Our enterprise-grade hosting delivers the reliability, security, and scalability you need to support even the most demanding workloads. No more downtime or performance bottlenecks as your business grows.
    </p>
    <img
      src="https://s3.sursatech.com/api/v1/buckets/academykit/objects/download?preview=true&prefix=RolesBased.png&version_id=null"
      alt="enterprise"
      className="max-w-3xl rounded-lg w-full"
    />
  </section>
  <section id="fast" className="scroll-mt-24 py-6 md:py-10">
    <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">Fast Deployment Complete Control</h2>
    <p className="text-gray-700 mb-6">
    Take Control of Your Deployment Process. Download and deploy on your server for complete control and security. Manage user access, configure security settings, and customize the platform to your specific requirements.
    </p>
    <img
      src="https://s3.sursatech.com/api/v1/buckets/academykit/objects/download?preview=true&prefix=fastDeploymet.png&version_id=null"
      alt="enterprise"
      className="max-w-3xl rounded-lg w-full"
    />
  </section>

  <section id="customization" className="scroll-mt-24 py-6 md:py-10">
    <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">Tailor Your Experience</h2>
    <p className="text-gray-700 mb-6">
    Customize your app beyond standard templates to perfectly reflect your brand identity. With the ability to modify elements such as logos, colors, fonts, and layouts, you can create a unique and consistent visual representation of your brand. Go beyond generic designs and personalize the look and feel of your app to align with your brand's style and values. By doing so, you can establish a strong brand presence and ensure a cohesive user experience that resonates.
    </p>
    <img
      src="https://s3.sursatech.com/api/v1/buckets/academykit/objects/download?preview=true&prefix=RolesBased.png&version_id=null"
      alt="customization"
      className="max-w-3xl rounded-lg w-full"
    />
  </section>
  
</div>
      </div>
      {/* Feature Cards */}
      <section className="w-full bg-[#fbfef5] py-16 px-6">
        <div className="max-w-7xl mx-auto grid md:grid-cols-3 gap-8">
          {features.map((feature, idx) => (
            <div
              key={idx}
              className="rounded-xl overflow-hidden border border-gray-200 shadow-sm hover:shadow-lg transition duration-300 bg-white"
            >
              <div className="bg-lime-100 p-4 flex justify-center items-center">
                <img
                  src={feature.image}
                  alt={feature.title}
                  className="rounded-md w-full object-cover"
                />
              </div>

              <div className="bg-[#0A0A2C] text-white px-6 py-6 flex flex-col justify-between h-full">
                <div>
                  <h3 className="text-lg font-bold mb-3">{feature.title}</h3>
                  <p className="text-sm text-gray-200">{feature.description}</p>
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
    </div>
  );
}
