"use client";
import React, { useRef, useEffect } from "react";
import { items } from "../constants";
import { HoverEffect } from "../components/ui/card-hover-effect";
import GradientBlob from "../components/GradientBlob";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

const Portfolio = () => {
  // Only show all items, no filters
  const projects = items.map((item) => ({
    title: item.name,
    description: item.desc,
    link: item.href,
    image: item.image,
    technologies: item.technologies || [],
    githubUrl: item.githubUrl,
  }));

  const headingRef = useRef<HTMLHeadingElement | null>(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    // Animate heading
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
    // Animate cards with stagger and reversal
    const cards = document.querySelectorAll<HTMLElement>(".portfolio-card");
    if (cards.length > 0) {
      gsap.fromTo(
        cards,
        { opacity: 0, y: 60 },
        {
          opacity: 1,
          y: 0,
          duration: 1.2,
          stagger: 0.2,
          ease: "power3.out",
          scrollTrigger: {
            trigger: cards[0].parentElement,
            start: "top 80%",
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
    <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 md:py-24 relative">
   <div ref={headingRef} className="flex flex-col items-center">
   <h2
        
        className="text-3xl sm:text-4xl md:text-5xl font-bold text-center text-gray-900 mb-8"
      >
        Our Portfolio
      </h2>

      <p
            
              className="text-base md:text-lg lg:text-2xl text-center text-gray-800 mb-12 max-w-3xl"
            >
              We Provide Innovative Marketing And Design Solutions That Make A Real Impact. Our Team Of Creative Experts Collaborates With You To Craft Strategies And Visuals That Elevate Your Brand And Drive Meaningful Results.
            </p>
    
    </div>


      {/* No filters */}
      {/* Cards with staggered animation */}
      <HoverEffect items={projects} />
    </div>
  );
};

export default Portfolio; 