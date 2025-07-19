"use client";
import React from "react";
import { useRef } from "react";
import gsap from "gsap";
import Image from "next/image";

import { useEffect } from "react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);




const Hero = () => {
  const buttonContainer = useRef<HTMLDivElement>(null);
  const headerText = useRef<HTMLHeadingElement>(null);
  const headerContent = useRef<HTMLHeadingElement>(null);
  const heroSectionRef = useRef<HTMLElement>(null);
  const videoRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    if (videoRef.current && heroSectionRef.current) {
      gsap.fromTo(
        videoRef.current,
        { opacity: 1, y: 0 },
        {
          opacity: 0,
          y: 250,
          ease: "power3.inOut",
          scrollTrigger: {
            trigger: heroSectionRef.current,
            start: "bottom bottom",
            end: "bottom-=50 top",
            scrub: true,
          },
        }
      );
    }
    return () => {
      ScrollTrigger.getAll().forEach((st) => st.kill());
    };
  }, []);

  return (
    <section
      id="hero-section"
      ref={heroSectionRef}
      className="relative min-h-[80vh] w-full flex flex-col justify-between bg-background text-primaryText sm:pt-12  overflow-hidden"
    >
      {/* Background Video (clipped to section) */}
      <div ref={videoRef} className="absolute inset-0 w-full h-full pointer-events-none z-0">
       
       <Image
         src="/Hero/about.jpg"
         alt="About Hero"
         fill
         style={{ objectFit: "cover" }}
         priority
       />
      </div>
      {/* Black Overlay */}
      <div className="absolute inset-0 bg-black/70 z-10 pointer-events-none " />
      {/* Content */}
      <div className="flex flex-col flex-1 w-full max-w-[1600px] mx-auto px-4 sm:px-6 md:px-10 xl:px-20 pt-12 pb-20 sm:pb-24 md:pb-36 relative z-20">
        {/* Top: Tagline + Heading */}
        <div className="flex-1 flex flex-col items-start justify-start mt-8 sm:mt-12 md:mt-16">
          <div ref={headerContent} className="w-full">
            <div ref={headerText} className="flex flex-col items-start">
              <h3 className="text-sm md:text-lg uppercase text-textMuted tracking-widest text-left mb-2 sm:mb-3 animate-fade-in-down">
                About Us
              </h3>
              <h1
                className="
                  text-4xl
                  sm:text-5xl
                  md:text-6xl
                  xl:text-7xl
                  font-semibold
                  text-left
                  mb-3
                  sm:mb-4
                  md:mb-5
                  animate-fade-in-down
                  leading-tight
                "
              >
                Meet Our Team & Vision
                
              </h1>
            </div>
          </div>
        </div>
        {/* Paragraph + Buttons */}
        <div className="flex flex-col items-end justify-end w-full max-w-2xl ml-0 sm:ml-auto mt-3 sm:mt-4 md:mt-6">
        <p className="text-base sm:text-base md:text-lg xl:text-2xl text-right font-light text-textMuted mb-3 sm:mb-4 md:mb-5 animate-fade-in-up">
  We’re a creative team building smart, scalable digital solutions. Our mission is to help brands grow with design, tech, and strategy. Let’s create something great together.
</p>


          <div
            className="flex flex-row justify-end mt-2 sm:mt-3 md:mt-4 gap-2 sm:gap-4 w-full sm:w-auto"
            ref={buttonContainer}
          >
           
            <a href="#Contact" className="w-full sm:w-auto">
              <button className="p-[2px] sm:p-[3px] relative rounded-full w-full sm:w-auto">
                <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-blue-700 rounded-full" />
                <div className="
                  px-3 sm:px-7 md:px-8
                  py-3 sm:py-3
                  bg-background
                  rounded-full
                  relative
                  group
                  hover:bg-primary/20
                  transition
                  duration-300
                  text-primaryText
                  text-sm
                  sm:text-sm
                  md:text-base
                  lg:text-lg
                  w-full
                  sm:w-auto
                ">
                  Get in Touch
                </div>
              </button>
            </a>
          </div>
        </div>
      </div>
     
      
 
    </section>
  );
};

export default Hero;
