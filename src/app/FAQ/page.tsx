'use client'

import { useState } from 'react';
import { Plus, Minus } from 'lucide-react';
import Image from 'next/image';

const faqs = [
  {
    question: 'Is it really free?',
    answer: 'Yes, if your team is small, then AcademyKit is free for you for a lifetime. You may download and use it within your premises with your own resources.',
  },
  {
    question: 'How many users can the free version accommodate?',
    answer: 'Currently, the free version can support up to 20 users. If you require the involvement of more people, you\'ll need to upgrade your plan.',
  },
  {
    question: 'How is data security and privacy ensured within AcademyKit LMS?',
    answer: 'AcademyKit takes data security and privacy seriously. The platform implements industry-standard security measures to protect user data and ensure privacy.',
  },
  {
    question: 'Can you provide technical support?',
    answer: 'Yes, we provide comprehensive technical support to help you get the most out of AcademyKit.',
  },
  {
    question: 'Can I customize AcademyKit to fit my branding?',
    answer: 'Absolutely! AcademyKit offers extensive customization options to match your organization\'s branding.',
  },
  {
    question: 'Is AcademyKit suitable for my organization?',
    answer: 'AcademyKit is designed to be flexible and scalable, making it suitable for organizations of all sizes.',
  },
  {
    question: 'How easy is it to set up AcademyKit on my server?',
    answer: 'Setting up AcademyKit is straightforward with our detailed documentation and setup guides.',
  },
  {
    question: 'What kind of analytics and reporting does AcademyKit provide?',
    answer: 'AcademyKit provides comprehensive analytics and reporting features to track learner progress and engagement.',
  },
  {
    question: 'How does billing work?',
    answer: 'Our billing is transparent and flexible, with various plans to suit different organizational needs.',
  },
  {
    question: 'What kind of support does AcademyKit LMS offer?',
    answer: 'We offer multiple support channels including documentation, community forums, and direct technical support.',
  },
];

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFaq = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (

    <div className='min-h-screen w-full border bg-[#fbfef5]'>


<div className=" w-full max-w-7xl mx-auto px-6 py-10">
      {/* Header Section */}
      <div className="text-center mb-16">
        <p className="text-md font-semibold text-gray-600 mb-4">Support</p>
        <h2 className="text-4xl font-semibold text-foreground mb-4">
          Frequently asked questions
        </h2>
        <p className="text-lg text-gray-800 mb-2">
          Everything you need to know about the product and billing.
        </p>
      </div>

      {/* FAQ Flex Wrap */}
      <div className="columns-1 md:columns-2 gap-10 space-y-10 p-10">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;

            return (
              <div
                key={index}
                className="break-inside-avoid border-b border-gray-300 pb-6"
              >
                <button
                  onClick={() => toggleFaq(index)}
                  className="w-full flex justify-between items-start gap-4 group text-left"
                >
                  <h3 className="text-lg text-gray-900  transition-colors duration-200">
                    {faq.question}
                  </h3>
                  <div
                    className={`w-8 h-8 flex items-center justify-center rounded-full bg-gray-100 text-gray-900 shrink-0 transition-all duration-200 ease-out transform ${
                      isOpen
                        ? "rotate-180 bg-[#85c226] text-white"
                        : "hover:bg-[#85c226]/10 hover:scale-105"
                    }`}
                  >
                    {isOpen ? (
                      <Minus className="w-4 h-4 text-black" />
                    ) : (
                      <Plus className="w-4 h-4" />
                    )}
                  </div>
                </button>

                {isOpen && (
                  <div className="mt-4 pr-2">
                    <p className="text-gray-600 leading-relaxed">{faq.answer}</p>
                  </div>
                )}
              </div>
            );
          })}
        </div>

      
      
    </div>

    <section className="relative bg-[#fbfef5] pb-10 md:py-20 px-4 overflow-visible">
          <div className="relative max-w-7xl mx-auto bg-[#0a0b34] text-white rounded-3xl px-8 py-24 text-center overflow-visible z-10">
            <h2 className="text-2xl sm:text-3xl md:text-5xl font-bold mb-4">
              Have a question not answered here?
            </h2>
            <p className="text:xs sm:text-[14px] max-w-2xl mx-auto text-gray-300 mb-8">
              Contact us directly!
            </p>
            <div className="flex justify-center gap-4">
              
              <button className="px-5 py-2 rounded-md bg-[#c2e092] text-[#0c0c3d] font-semibold shadow transition border-3 hover:border-[#6a9b29] border-[#0c0c3d]">
                Contact us
              </button>
            </div>
    
            {/* Floating shapes – large + popped out further */}
            <Image
              src="/shapes/shape1.png"
              alt="shape1"
              width={220}
              height={220}
              className="hidden md:block absolute bottom-[-60px] left-[-40px] w-60 h-60 z-20"
            />
            <Image
              src="/shapes/shape2.png"
              alt="shape2"
              width={200}
              height={200}
              className="hidden md:block absolute top-[-60px] right-[10%] w-50 h-50 z-20"
            />
            <Image
              src="/shapes/shape3.png"
              alt="shape3"
              width={210}
              height={210}
              className="hidden md:block absolute bottom-[-60px] right-[-60px] w-56 h-56 z-20"
            />
          </div>
        </section>
    </div>
    
  );
};

export default FAQ;
