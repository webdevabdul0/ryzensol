"use client"
import React, { useRef, useEffect } from "react";
import Marquee from "react-fast-marquee";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

const Partners = () => {
  const headingRef = useRef<HTMLHeadingElement | null>(null);
  const sectionRef = useRef(null);
  const contentRef = useRef(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
  
    // Heading animation
    if (headingRef.current) {
      gsap.fromTo(
        headingRef.current,
        { opacity: 0, y: 60 },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: headingRef.current,
            start: "top 85%",
            toggleActions: "play none none none",
          },
        }
      );
    }
  
    // Parallax scroll-up animation for section content
    if (sectionRef.current && contentRef.current) {
      gsap.fromTo(
        contentRef.current,
        {
          opacity: 0,
          y: 100,
        },
        {
          opacity: 1,
          y: 0,
          duration: 1.2,
          ease: "power3.out",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 90%", // triggers when 10% of section is visible
            toggleActions: "play none none reverse",
          },
        }
      );
    }
  
    return () => {
      ScrollTrigger.getAll().forEach((st) => st.kill());
    };
  }, []);
  
  return (
    <div  ref={sectionRef} className="relative mt-12 md:mt-36  mx-5">
      
      <div ref={contentRef}>

           <div className="flex flex-col items-center ">
        <h2
          ref={headingRef}
          className="text-2xl md:text-5xl  font-semibold text-center mb-2 sm:mb-5 text-black max-w-5xl"
        >
          We're Passionate About Helping Businesses
          Grow Online. With Years Of Experience In Web Design, Digital
          Marketing, And Branding.
        </h2>
      </div>

    {/* Marquee of partner logos using react-fast-marquee */}
    <div  className="w-full mt-8 relative">
      {/* Left and right gradient overlays for fade effect */}
      <div className="pointer-events-none absolute left-0 top-0 h-full w-5 sm:w-16 z-10" style={{background: 'linear-gradient(to right, #f9fafb 80%, transparent)'}} />
      <div className="pointer-events-none absolute right-0 top-0 h-full w-5  sm:w-16 z-10" style={{background: 'linear-gradient(to left, #f9fafb 80%, transparent)'}} />
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
                  className={`${partner.height} w-auto  `}
                />
              ))}
            </div>
          ));
        })()}
      </Marquee>
    </div>

      </div>
      
   

      
      
    </div>
  );
};

export default Partners;
