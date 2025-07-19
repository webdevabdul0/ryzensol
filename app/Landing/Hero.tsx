
import React from "react";
import dynamic from "next/dynamic";
import Link from "next/link";
import { AvatarGroup } from "../components/ui/avatar-group";



const HeroVideoBg = dynamic(() => import("../components/HeroVideoBg"));

const AVATARS = [
  { src: "/Contact/1.png", alt: "Client 1", fallback: "A" },
  { src: "/Contact/5.png", alt: "Client 5", fallback: "E" },
];

const Hero = () => {


  return (
    <section
      id="hero-section"
     
      className="relative min-h-screen w-full flex flex-col justify-between bg-background text-primaryText sm:pt-12 rounded-b-3xl overflow-hidden"
    >
      {/* Background Video (clipped to section) */}
      <div className="absolute inset-0 w-full h-full pointer-events-none z-0">
        <HeroVideoBg className="w-full h-full" />
      </div>
      {/* Black Overlay */}
      <div className="absolute inset-0 bg-black/70 z-10 pointer-events-none backdrop-blur-sm" />
      {/* Content */}
      <div className="flex flex-col flex-1 w-full max-w-[1600px] mx-auto px-4 sm:px-6 md:px-10 xl:px-20 pt-12 pb-20 sm:pb-24 md:pb-36 relative z-20">
        {/* Top: Tagline + Heading */}
        <div className="flex-1 flex flex-col items-start justify-start mt-8 sm:mt-12 md:mt-16">
          <div  className="w-full">
            <div  className="flex flex-col items-start">
              <h3 className="text-sm md:text-lg uppercase text-textMuted tracking-widest text-left mb-2 sm:mb-3 animate-fade-in-down">
                Full-Service Digital Agency
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
                Empowering Brands with Innovation
                <br className="hidden sm:block" />
                & Digital Excellence
              </h1>
            </div>
          </div>
        </div>
        {/* Paragraph + Buttons */}
        <div className="flex flex-col items-end justify-end w-full max-w-2xl ml-0 sm:ml-auto mt-3 sm:mt-4 md:mt-6">
          <p className="text-base sm:text-base md:text-lg xl:text-2xl text-right font-light text-textMuted mb-3 sm:mb-4 md:mb-5 animate-fade-in-up">
            Welcome to Ryzen Solutions – our team delivers cutting-edge UI/UX Design, AI Automation, Web Development, WordPress, Branding, SEO, Digital Marketing, and Hosting & Maintenance. We help businesses thrive in the digital era with creative, scalable, and results-driven solutions.
          </p>
          <div
            className="flex flex-row justify-end mt-2 sm:mt-3 md:mt-4 gap-2 sm:gap-4 w-full sm:w-auto"
          
          >
            <Link
              href="/about"
              className="
                shadow-[0_4px_14px_0_rgb(0,118,255,39%)]
                hover:shadow-[0_6px_20px_rgba(0,118,255,23%)]
                hover:bg-[rgba(0,118,255,0.9)]
                px-3 sm:px-7 md:px-8
                py-3
                bg-[#0070f3]
                rounded-full
                text-white
                font-light
                transition
                duration-200
                ease-linear
                text-sm
                sm:text-sm
                md:text-base
                lg:text-lg
                flex
                justify-center
                items-center
                w-full
                sm:w-auto
              "
            >
              About Us
            </Link>
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
      {/* Stacked Avatars Bottom Left */}
      <div className="w-full flex flex-col items-center md:items-start md:w-auto md:absolute md:left-8 md:bottom-36 mb-8 sm:mb-10 md:mb-0 z-20">
        <AvatarGroup avatars={AVATARS} max={3} />
        <span className="mt-3 text-white/70  text-sm sm:text-base font-medium drop-shadow-lg text-center md:text-left">
          Driving Results For 1,500+ Leading Brands
        </span>
      </div>
     
      
    </section>
  );
};

export default Hero;
