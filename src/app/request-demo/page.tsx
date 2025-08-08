import Image from "next/image";

export default function page(){
    return(
        <div className=" h-full pt-5   px-6 mb-10 bg-[#fbfef5]">


<iframe src='https://outlook.office365.com/owa/calendar/RequestDemo@sursatech.com/bookings/' width='100%' height='950' scrolling='yes' className="border-0"></iframe>
<section className="relative bg-[#fbfef5] pb-10 md:py-20 px-4 overflow-visible mt-20">
  <div className="relative max-w-7xl mx-auto bg-[#0a0b34] text-white rounded-3xl px-8 py-24 text-center overflow-visible z-10">
    <h2 className="text-2xl sm:text-3xl md:text-5xl font-bold mb-4">
      Start Today!
    </h2>
    <p className="text-xs sm:text-sm max-w-2xl mx-auto text-gray-300 mb-8">
      Join businesses that have taken advantage of AcademyKit For their product success.
    </p>
    <div className="flex justify-center gap-4">
      <a
        href="https://hub.docker.com/r/academykit/academy"
        target="_blank"
        rel="noopener noreferrer"
        className="px-5 py-2 rounded-md bg-white text-[#0c0c3d] font-semibold shadow transition hover:border-[#6a9b29] border-3 border-[#0c0c3d]"
      >
        Get Started
      </a>
      <a
        href="https://vurilo-69.mintlify.app/introduction"
        target="_blank"
        rel="noopener noreferrer"
        className="px-5 py-2 rounded-md bg-[#c2e092] text-[#0c0c3d] font-semibold shadow transition border-3 hover:border-[#6a9b29] border-[#0c0c3d]"
      >
        Learn how
      </a>
    </div>

    {/* Left Image */}
    <img
      src="https://cdn.prod.website-files.com/65aa7210793f3233f5dc51e7/6649acb817674d171c616308_AK%20admin-1-p-500.png"
      alt="Left Panel"
      className="hidden md:block absolute -left-5 top-1/3 -translate-y-1/2 w-[250px] rotate-[-20deg] z-20"
    />

    {/* Right Image */}
    <img
      src="https://cdn.prod.website-files.com/65aa7210793f3233f5dc51e7/6649ad123391c37b394830dc_AK%20training-p-500.png"
      alt="Right Panel"
      className="hidden md:block absolute -right-3 top-2/3 -translate-y-1/2 w-[250px] rotate-[20deg] z-20"
    />
  </div>
</section>




        
        </div>
    )
}