import AboutSection from "@/components/aboutUs/MainAbout";
import { Check } from "lucide-react";
import Image from "next/image";


export default function AboutUs(){
    return(
        <div>

            <section className="w-full bg-[#0a0a32] py-25 flex flex-col items-center text-center">
                <h2 className="mt-8 text-white text-4xl md:text-7xl font-extrabold leading-tight">
                    Start working with us{" "}<br></br>
                    <span className="text-[#b1ebb8] relative inline-block">
                    today
                    <span className="absolute -bottom-2 left-1/2 transform -translate-x-1/2">
                        {/* Decorative lines below the word "today" */}
                        <svg
                        className="w-12 h-4"
                        viewBox="0 0 100 20"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                        >
                        <path d="M10 10 L15 15" stroke="#FF6B6B" strokeWidth="2" />
                        <path d="M20 10 L25 15" stroke="#FF6B6B" strokeWidth="2" />
                        <path d="M30 10 L35 15" stroke="#FF6B6B" strokeWidth="2" />
                        </svg>
                    </span>
                    </span>
                </h2>
                <a href="https://hub.docker.com/r/academykit/academy" target="_blank" rel="noopener noreferrer"  className="mt-10 px-6 py-1.5 bg-[#c3e192] text-[#0a0a32] font-semibold rounded-md shadow border-3 border-gray-900 hover:border-green-700 transition">
                    Get Started
                </a>
                </section>


                <AboutSection/>
                <section className="relative bg-[#fbfef5] py-20 px-4 overflow-visible">
                      <div className="relative max-w-7xl mx-auto bg-[#0a0b34] text-white rounded-3xl px-8 py-24 text-center overflow-visible z-10">
                        <h2 className="text-2xl sm:text-3xl md:text-5xl font-bold mb-4">
                          YOur Journey to Success Starts Here
                        </h2>
                        <p className="text:xs sm:text-[14px] max-w-2xl mx-auto text-gray-300 mb-8">
                        Join the ranks of forward-thinking businesses that are transforming training with AcademyKit LMS. Say goodbye to complexity and hello to simplicity. Say goodbye to inefficiency and hello to productivity.
                        Say hello to AcademyKit– where training meets innovation.
                          
                        </p>
                        <div className="flex justify-center gap-4">
                          
                          <a href="https://hub.docker.com/r/academykit/academy" target="_blank" rel="noopener noreferrer" className="px-5 py-2 rounded-md bg-[#c2e092] text-[#0c0c3d] font-semibold shadow transition border-3 hover:border-[#6a9b29] border-[#0c0c3d]">
                            Try Now!
                          </a>
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
                          className="hidden md:block absolute top-[-80px] right-[8%] w-50 h-50 z-20"
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
        
    )
}