"use client";
import React from "react";
import dynamic from "next/dynamic";
import { useRef } from "react";
import gsap from "gsap";
import { useState, useEffect } from "react";

import { AvatarGroup } from "../components/ui/avatar-group";
import { ScrollTrigger } from "gsap/ScrollTrigger";

// Utility to detect mobile
const isMobile = () => typeof window !== "undefined" && window.innerWidth < 640;

gsap.registerPlugin(ScrollTrigger);

const HeroVideoBg = dynamic(() => import("../components/HeroVideoBg"), {
  ssr: false,
});

const AVATARS = [
  { src: "/Contact/1.png", alt: "Client 1", fallback: "Q" },
  { src: "/Contact/2.png", alt: "Client 5", fallback: "P" },
  { src: "/Contact/3.png", alt: "Client 5", fallback: "B" },
];

// CalendlyEmbed component for inline widget
const CalendlyEmbed = ({ url }: { url: string }) => {
  // Utility to detect mobile
  const getResponsiveMinHeight = () => {
    if (typeof window === "undefined") return 450;
    if (window.innerHeight < 600) return window.innerHeight * 0.33;
    return window.innerHeight * 0.7;
  };
  useEffect(() => {
    const scriptId = "calendly-widget-script";
    if (!document.getElementById(scriptId)) {
      const script = document.createElement("script");
      script.id = scriptId;
      script.src = "https://assets.calendly.com/assets/external/widget.js";
      script.async = true;
      document.head.appendChild(script);
    }
  }, []);
  return (
    <div
      className="calendly-inline-widget"
      data-url={url}
      style={{ minHeight: getResponsiveMinHeight(), width: "100%" }}
    />
  );
};

const Hero = () => {
  const buttonContainer = useRef<HTMLDivElement>(null);
  const headerText = useRef<HTMLHeadingElement>(null);
  const headerContent = useRef<HTMLHeadingElement>(null);
  const heroSectionRef = useRef<HTMLElement>(null);
  const videoRef = useRef<HTMLDivElement>(null);
  const [isCalendlyOpen, setCalendlyOpen] = useState(false);
  const [calendlyKey, setCalendlyKey] = useState(0);

  const openCalendly = () => {
    setCalendlyKey((prev) => prev + 1);
    setCalendlyOpen(true);
  };

  // Remove Calendly script when modal closes
  useEffect(() => {
    if (!isCalendlyOpen) {
      const script = document.getElementById("calendly-widget-script");
      if (script) {
        script.remove();
      }
    }
  }, [isCalendlyOpen]);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    const mobile = isMobile();
    if (videoRef.current && heroSectionRef.current) {
      gsap.fromTo(
        videoRef.current,
        { opacity: 1, y: 0 },
        {
          opacity: mobile ? 1 : 0, // Less fade on mobile
          y: mobile ? 80 : 250, // Less movement on mobile
          ease: "power3.inOut",
          duration: mobile ? 0.6 : 1.2, // Faster on mobile
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
    <main>
      {/* Calendly Modal */}
      {isCalendlyOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 backdrop-blur-sm">
          <div className="bg-background overflow-hidden rounded-2xl shadow-2xl p-2 sm:p-4 relative max-w-3xl w-full mx-2 sm:mx-0 flex flex-col items-center min-h-[60vh] sm:min-h-[70vh] h-[70vh] sm:h-[80vh]">
            {/* Modal Header */}
            <div className="w-full flex flex-row items-center justify-between mb-4 px-2 sm:px-4">
              <h2 className="text-lg sm:text-2xl font-semibold text-primaryText">
                Schedule a Call with us
              </h2>
              <button
                className="text-3xl sm:text-4xl text-textMuted hover:text-primary transition z-[9999] bg-background/90 rounded-full p-2 sm:p-3 ml-4"
                onClick={() => setCalendlyOpen(false)}
                aria-label="Close"
              >
                &times;
              </button>
            </div>
            <CalendlyEmbed
              key={calendlyKey}
              url="https://calendly.com/webdevabdul/30min"
            />
          </div>
        </div>
      )}
      <section
        id="hero-section"
        ref={heroSectionRef}
        className="relative min-h-screen w-full flex flex-col justify-between bg-background text-primaryText sm:pt-12 overflow-hidden"
      >
        {/* Background Video (clipped to section) */}
        <div
          ref={videoRef}
          className="absolute inset-0 w-full h-full pointer-events-none z-0"
        >
          <HeroVideoBg className="w-full h-full" />
        </div>
        {/* Black Overlay */}
        <div className="absolute inset-0 bg-black/70 z-10 pointer-events-none backdrop-blur-sm" />
        {/* Content */}
        <div className="flex flex-col flex-1 w-full max-w-[1600px] mx-auto px-4 sm:px-6 md:px-10 xl:px-20 pt-12 pb-20 sm:pb-24 md:pb-36 relative z-20">
          {/* Top: Tagline + Heading */}
          <div className="flex-1 flex flex-col items-start justify-start mt-8 sm:mt-12 md:mt-16">
            <div ref={headerContent} className="w-full">
              <div ref={headerText} className="flex flex-col items-start">
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
                  <br className="hidden sm:block" />& Digital Excellence
                </h1>
              </div>
            </div>
          </div>
          {/* Paragraph + Buttons */}
          <div className="flex flex-col items-end justify-end w-full max-w-2xl ml-0 sm:ml-auto mt-3 sm:mt-4 md:mt-6">
            <p className="text-base sm:text-base md:text-lg xl:text-2xl text-right font-light text-textMuted mb-3 sm:mb-4 md:mb-5 animate-fade-in-up">
              Welcome to Ryzen Solutions – our team delivers cutting-edge UI/UX
              Design, AI Automation, Web Development, WordPress, Branding, SEO,
              Digital Marketing, and Hosting & Maintenance. We help businesses
              thrive in the digital era with creative, scalable, and
              results-driven solutions.
            </p>
            <div
              className="flex flex-row justify-end mt-2 sm:mt-3 md:mt-4 gap-2 sm:gap-4 w-full sm:w-auto"
              ref={buttonContainer}
            >
              <button
                onClick={openCalendly}
                className="shadow-[0_4px_14px_0_rgb(0,118,255,39%)] hover:shadow-[0_6px_20px_rgba(0,118,255,23%)] hover:bg-[rgba(0,118,255,0.9)] px-3 sm:px-7 md:px-8 py-3 bg-[#0070f3] rounded-full text-white font-light transition duration-200 ease-linear text-sm sm:text-sm md:text-base lg:text-lg flex justify-center items-center w-full sm:w-auto"
              >
                Book a Free Call
              </button>
              <a href="#Contact" className="w-full sm:w-auto">
                <button className="p-[2px] sm:p-[3px] relative rounded-full w-full sm:w-auto">
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-blue-700 rounded-full" />
                  <div
                    className="
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
                "
                  >
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
            Driving Results For 100+ Leading Brands
          </span>
        </div>
      </section>
    </main>
  );
};

export default Hero;
