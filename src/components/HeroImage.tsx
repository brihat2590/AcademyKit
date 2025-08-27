// components/HeroImage.tsx
import React from "react";
 


const HeroImage: React.FC = () => {
  return (
    <section className="flex flex-col items-center justify-center py-8 bg-[#fbfef5]">
      <div className="max-w-4xl w-full px-4">
        <img
          src={"https://s3.sursatech.com/api/v1/buckets/academykit/objects/download?preview=true&prefix=landing.jpg&version_id=null"}
          alt="Hero Screenshot"
          className="rounded-xl shadow-lg border border-gray-200"
          
          width={1120}
          height={630}
        />
      </div>
    </section>
  );
};

export default HeroImage;
