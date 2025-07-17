import React from "react";
import { HoverEffect } from "../components/ui/card-hover-effect";
import Marquee from "react-fast-marquee";


const Partners = () => {
  return (
    <div className="relative mt-12 md:mt-36  mx-5">
      <div className="flex flex-col items-center ">
      <h2 className="text-2xl md:text-5xl  font-semibold text-center mb-2 sm:mb-5 text-black max-w-5xl">
  We're Passionate About Helping Businesses
  Grow Online. With Years Of Experience In Web Design, Digital
  Marketing, And Branding.
</h2>

      </div>

    {/* Marquee of partner logos using react-fast-marquee */}
    <div className="w-full mt-8">
      {/* 
        If you have not installed react-fast-marquee, run:
        npm install react-fast-marquee
        and import Marquee at the top:
        import Marquee from "react-fast-marquee";
        For this insertion, we assume Marquee is available.
      */}
      {/* Example partner logos, replace src with your actual logo paths */}
      {/* You may want to move the import statement for Marquee to the top of the file */}
      {/* @ts-ignore */}
      <Marquee
        gradient={false}
        speed={40}
        pauseOnHover={true}
        className="py-4"
      >
        {(() => {
          const partners = [
            { src: "/partners/logo (1).png", height: "h-16" },
            { src: "/partners/logo (2).png", height: "h-10" },
            { src: "/partners/logo (3).png", height: "h-16" },
            { src: "/partners/logo (4).png", height: "h-14" },
            { src: "/partners/logo (5).png", height: "h-12" },
            { src: "/partners/logo (6).png", height: "h-10" },
            { src: "/partners/logo (7).png", height: "h-24" },
          ];
          return Array(2).fill(0).map((_, batchIdx) => (
            <div key={batchIdx} className="flex items-center gap-10 mr-10  md:mr-14 md:gap-14 ">
              {partners.map((partner, idx) => (
                <img
                  key={idx + batchIdx * partners.length}
                  src={partner.src}
                  alt={`Partner ${idx + 1}`}
                  className={`${partner.height} w-auto grayscale hover:grayscale-0 transition duration-300 `}
                />
              ))}
            </div>
          ));
        })()}
      </Marquee>
    </div>

      
      
    </div>
  );
};

export default Partners;
