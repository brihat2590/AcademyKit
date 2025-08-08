"use client";

import { ArrowRight } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import { BiRightArrow } from "react-icons/bi";

const features = [
  {
    title: "AI Integrated",
    description:
      "Designed to cater to both instructors and students, equipped with user-friendly functionalities and an intuitive interface",
    image:
      "https://cdn.prod.website-files.com/65aa7210793f3233f5dc51e7/6629db56b8a3b236ee55c8fc_6.png",
  },
  {
    title: "Training Management",
    description:
      "Conduct your training symphony. Plan, deliver, track, report – all for efficient skill development & data-driven success.",
    image:
      "https://cdn.prod.website-files.com/65aa7210793f3233f5dc51e7/6629d8f873d8cc09bdc56fa4_4.png",
  },
  {
    title: "Progress Tracking & Reporting",
    description:
      "Maximize Learning with Data-Driven Insights. Tailor Courses for Personalized eLearning Experiences with Academy Kit.",
    image:
      "https://cdn.prod.website-files.com/65aa7210793f3233f5dc51e7/6629d8f8e9ec66e7544a390d_5.png",
  },
];

const sections = [
  {
    id: "knowledge",
    title: "Knowledge Repository",
  },
  {
    id: "intelligent",
    title: "Intelligent Automation",
  },
  {
    id: "ai",
    title: "AI-Enhanced Insights",
  },
  {
    id: "train",
    title:`Trainning  Assistantance
    `,
  },
];

export default function AIIntegrated() {
  const [activeId, setActiveId] = useState("knowledge");
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
            setActiveId(entry.target.id);
          }
        });
      },
      {
        root: null,
        rootMargin: "0px 0px -20% 0px",
        threshold: 0.3,
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
    <div className="min-h-screen w-full bg-[#fbfef5] px-6 pt-10 pb-20">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center justify-between gap-10">
        {/* Left Content */}
        <div className="w-full lg:w-1/2 space-y-2">
          <p className="text-[#78a434] font-semibold text-sm">Powered by AI</p>
          <h1 className="text-4xl md:text-6xl font-extrabold text-[#0A0A2C] leading-tight">
            Simplify the <br /> Complex, Amplify <br /> Your Potential
          </h1>
          <p className="text-[#78a434] text-lg">
            Built for both trainers and learners, with intuitive features and a user-friendly interface.
          </p>
          <div className="flex items-center gap-6 pt-4">
            <a href="https://hub.docker.com/r/academykit/academy" target="_blank" rel="noopener noreferrer" className="bg-[#0A0A2C] text-white px-6 py-2.5 rounded-md text-sm font-medium hover:bg-white hover:text-[#0A0A2C] border-3 border-gray-900 transition duration-300 ease-in-out">
              Get started
            </a>
            <a href="https://docs.academykit.co/introduction" target="_blank" rel="noopener noreferrer" className="text-[#0A0A2C] font-semibold flex items-center gap-2 text-md">
              Learn more <span><ArrowRight/></span>
            </a>
          </div>
        </div>

        {/* Right Image */}
        <div className="w-full lg:w-1/2 flex justify-center">
          <img
            src="https://cdn.prod.website-files.com/65aa7210793f3233f5dc51e7/6629d4c4dffe912a16555c14_self-hosted-p-1080.png"
            alt="AI Dashboard"
            className="w-full max-w-xl object-contain rounded-xl shadow-lg rotate-[-6deg]"
          />
        </div>
      </div>

      

      {/* Scroll Sync Section */}
      <div className="flex min-h-screen bg-[#fbfef5] max-w-7xl mx-auto">
        {/* Left Nav */}
        <nav className="w-1/4 p-6 sticky top-20 h-screen flex flex-col gap-4 border-r mt-12">
          {sections.map((s) => (
            <a
              key={s.id}
              href={`#${s.id}`}
              onClick={(e) => handleNavClick(s.id, e)}
              className={`px-6 py-3 rounded-md text-sm font-medium transition-colors ${
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
        <div ref={scrollContainerRef} className="w-4/5 overflow-y-auto px-8 py-12 space-y-32">
          <section id="knowledge" className="scroll-mt-24 py-10">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Efficiency Through Knowledge Base</h2>
            <p className="text-gray-700 mb-6">
              AcademyKit features a comprehensive knowledge base, enhancing efficiency by providing easy access to essential learning resources and information.
            </p>
            <img
              src="https://cdn.prod.website-files.com/65aa7210793f3233f5dc51e7/6629d98683efd5de5e896dc7_training-management-p-500.png"
              alt="knowledge"
              className="rounded-lg w-full"
            />
          </section>

          <section id="intelligent" className="scroll-mt-24 py-10">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Intelligent Automation with AcademyKit</h2>
            <p className="text-gray-700 mb-6">
              AcademyKit's intelligent automation, powered by AI technology, simplifies various tasks within its system. This automation ensures that processes are streamlined, reducing manual effort and the likelihood of errors.
            </p>
            <img
              src="https://cdn.prod.website-files.com/65aa7210793f3233f5dc51e7/6629f34f1e8805c27f489df3_AI%20Integrated-1-p-500.png"
              alt="automation"
              className="rounded-lg w-full"
            />
          </section>

          <section id="ai" className="scroll-mt-24 py-10">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Get the Answers You Need</h2>
            <p className="text-gray-700 mb-6">
              AcademyKit's AI capabilities extend to data analysis, providing users with valuable insights into their training programs.
            </p>
            <img
              src="https://cdn.prod.website-files.com/65aa7210793f3233f5dc51e7/6629d4c4dffe912a16555c14_self-hosted-p-1080.png"
              alt="insights"
              className="rounded-lg w-full"
            />
          </section>

          <section id="train" className="scroll-mt-24 py-10 ">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Never Get Stuck</h2>
            <p className="text-gray-700 mb-6">
              Serving as a virtual mentor, AcademyKit's Cognitive Training Assistant offers personalized guidance and feedback to users.
            </p>
            <img
              src="https://cdn.prod.website-files.com/65aa7210793f3233f5dc51e7/6629f44049ce5b43a6e0e185_AI%20Integrated-2-p-500.png"
              className="rounded-lg w-full"
              alt="train"
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
