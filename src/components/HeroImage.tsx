// components/HeroImage.tsx
import React from "react";
import Image from "next/image";


const HeroImage: React.FC = () => {
  return (
    <section className="flex flex-col items-center justify-center py-8 bg-[#fbfef5]">
      <div className="max-w-4xl w-full px-4">
        <Image
          src={"/hero.png"}
          alt="Hero Screenshot"
          className="rounded-xl shadow-lg border border-gray-200"
          layout="responsive"
          width={1120}
          height={630}
        />
      </div>
    </section>
  );
};

export default HeroImage;
