"use client";

import { useEffect, useRef, useState } from "react";

const features = [
  {
    title: "Self Hosted",
    description:
      "Experience Unmatched Empowerment to Safeguard Sensitive Data, Ensure Compliance, and Enjoy Secure Learning Environments.",
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
    id: "Introduction",
    title: "Introduction",
    src: "https://cdn.prod.website-files.com/65aa7210793f3233f5dc51e7/6629d98683efd5de5e896dc7_training-management-p-500.png",
  },
  {
    id: "Features",
    title: "Features",
    src: "https://cdn.prod.website-files.com/65aa7210793f3233f5dc51e7/6629f34f1e8805c27f489df3_AI%20Integrated-1-p-500.png",
  },
  {
    id: "Pricing",
    title: "Pricing",
    src: "https://cdn.prod.website-files.com/65aa7210793f3233f5dc51e7/6629d4c4dffe912a16555c14_self-hosted-p-1080.png",
  },
  {
    id: "Testimonials",
    title: "Testimonials",
    src: "https://cdn.prod.website-files.com/65aa7210793f3233f5dc51e7/6629f44049ce5b43a6e0e185_AI%20Integrated-2-p-500.png",
  },
];

export default function AIIntegrated() {
  const [activeId, setActiveId] = useState("introduction");
  const [isScrolled, setIsScrolled] = useState(false);
  

  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const observer = useRef<IntersectionObserver | null>(null);
  const isManualScroll = useRef(false); // Track manual scroll state

  const handleNavClick = (id: string, e: React.MouseEvent) => {
    e.preventDefault();
    const element = document.getElementById(id);
    if (element) {
      isManualScroll.current = true; // Flag manual scroll
      setActiveId(id);
      element.scrollIntoView({ behavior: "smooth", block: "start" });
      
      // Clear flag after scroll completes
      setTimeout(() => {
        isManualScroll.current = false;
      }, 1000);
    }
  };

  // ✅ Detect section in view
  useEffect(() => {
    const sectionIds = ["home", "features", "wishlist"];
    const sections = sectionIds.map((id) => document.getElementById(id));

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveId(entry.target.id);
          }
        });
      },
      {
        root: null,
        rootMargin: "0px",
        threshold: 0.6,
      }
    );

    sections.forEach((section) => {
      if (section) observer.observe(section);
    });

    return () => {
      sections.forEach((section) => {
        if (section) observer.unobserve(section);
      });
    };
  }, []);

  // ✅ Detect scroll for navbar background
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll(); // initial check on mount

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

//   useEffect(() => {
//     const container = scrollContainerRef.current;
//     if (!container) return;

//     const handleIntersect = (entries: IntersectionObserverEntry[]) => {
//       // Skip updates during manual scroll
//       if (isManualScroll.current) return;
      
//       entries.forEach(entry => {
//         if (entry.isIntersecting) {
//           setActiveId(entry.target.id);
//         }
//       });
//     };

//     observer.current = new IntersectionObserver(handleIntersect, {
//       root: container,  // Observe within scroll container
//       rootMargin: "0px",  // Trigger when top 10% visible
//       threshold: 0.6,
//     });

//     const sections = container.querySelectorAll("section");
//     sections.forEach(section => {
//       observer.current?.observe(section);
//     });

//     return () => {
//       if (observer.current) {
//         sections.forEach(section => {
//           observer.current?.unobserve(section);
//         });
//       }
//     };
//   }, []);

  return (
    <div className="min-h-screen w-full bg-[#fbfef5] px-6 py-20">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center justify-between gap-10">
        {/* Left Content */}
        <div className="w-full lg:w-1/2 space-y-6">
          <p className="text-green-700 font-semibold text-sm">Powered by AI</p>

          <h1 className="text-4xl md:text-6xl font-extrabold text-[#0A0A2C] leading-tight">
            Simplify the <br /> Complex, Amplify <br /> Your Potential
          </h1>

          <p className="text-green-700 text-lg">
            Built for both trainers and learners, with intuitive features and a user-friendly interface.
          </p>

          <div className="flex items-center gap-6 pt-4">
            <button className="bg-[#0A0A2C] text-white px-6 py-2.5 rounded-md text-sm font-medium hover:bg-white hover:text-[#0A0A2C] hover:border hover:border-[#0A0A2C] transition duration-300">
              Get started
            </button>
            <button className="text-[#0A0A2C] font-semibold flex items-center gap-2 text-sm">
              Learn more <span>→</span>
            </button>
          </div>
        </div>

        {/* Right Image */}
        <div className="w-full lg:w-1/2 flex justify-center">
          <img
            src="https://cdn.prod.website-files.com/65aa7210793f3233f5dc51e7/6629f1e0a1231b0ce6ad5bce_AI%20settings%20-2-p-1080.webp"
            alt="AI Dashboard"
            className="w-full max-w-xl object-contain rounded-xl shadow-lg rotate-[-6deg]"
          />
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
              {/* Image */}
              <div className="bg-lime-100 p-4 flex justify-center items-center">
                <img
                  src={feature.image}
                  alt={feature.title}
                  className="rounded-md w-full object-cover"
                />
              </div>

              {/* Content */}
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
                  ? "text-white bg-green-500"
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
          className="w-4/5 overflow-y-auto px-8 py-12 space-y-32"
        >
          {sections.map((s) => (
            <section key={s.id} id={s.id} className="scroll-mt-24 py-10">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">{s.title}</h2>
              <p className="text-gray-700 mb-6">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer
                nec odio. Praesent libero. Sed cursus ante dapibus diam. Sed nisi.
                Nulla quis sem at nibh elementum imperdiet.
              </p>
              <img
                src={s.src}
                alt={s.title}
                className="rounded-lg shadow-md w-full"
              />
            </section>
          ))}
        </div>
      </div>
    </div>
  );
}