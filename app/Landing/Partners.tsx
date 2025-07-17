"use client"
import React, { useRef, useEffect } from "react";
import { HoverEffect } from "../components/ui/card-hover-effect";
import Marquee from "react-fast-marquee";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

const Partners = () => {
  const headingRef = useRef<HTMLHeadingElement | null>(null);
  const logoRefs = useRef<(HTMLImageElement | null)[]>([]);

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
    // Partner logos fade in/out
    logoRefs.current.forEach((logo, idx) => {
      if (logo) {
        gsap.fromTo(
          logo,
          { opacity: 0, x: -40 },
          {
            opacity: 1,
            x: 0,
            duration: 0.8,
            ease: "power3.out",
            scrollTrigger: {
              trigger: logo,
              start: "left 90%",
              end: "right 10%",
              scrub: true,
              onLeave: () => gsap.to(logo, { opacity: 0, x: 40, duration: 0.5 }),
              onEnterBack: () => gsap.to(logo, { opacity: 1, x: 0, duration: 0.5 }),
              onLeaveBack: () => gsap.to(logo, { opacity: 0, x: -40, duration: 0.5 }),
            },
          }
        );
      }
    });
    return () => {
      ScrollTrigger.getAll().forEach((st) => st.kill());
    };
  }, []);

  return (
    <div className="relative mt-12 md:mt-36  mx-5">
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
    <div className="w-full mt-8 relative">
      {/* Left and right gradient overlays for fade effect */}
      <div className="pointer-events-none absolute left-0 top-0 h-full w-16 z-10" style={{background: 'linear-gradient(to right, #f9fafb 80%, transparent)'}} />
      <div className="pointer-events-none absolute right-0 top-0 h-full w-16 z-10" style={{background: 'linear-gradient(to left, #f9fafb 80%, transparent)'}} />
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
                  ref={el => { logoRefs.current[idx + batchIdx * partners.length] = el; }}
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
