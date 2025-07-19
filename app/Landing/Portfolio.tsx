"use client";
import React, { useRef, useEffect } from "react";
import { items } from "../constants";
import { HoverEffect } from "../components/ui/card-hover-effect";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

// Utility to detect mobile
const isMobile = () =>
  typeof window !== "undefined" && window.innerWidth < 640;

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
    const mobile = isMobile();
    // Animate heading
    if (headingRef.current) {
      gsap.fromTo(
        headingRef.current,
        { opacity: 0, y: mobile ? 20 : 60 }, // Less movement on mobile
        {
          opacity: 1,
          y: 0,
          duration: mobile ? 0.5 : 1, // Faster on mobile
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
        { opacity: 0, y: mobile ? 20 : 60 }, // Less movement on mobile
        {
          opacity: 1,
          y: 0,
          duration: mobile ? 0.5 : 1.2, // Faster on mobile
          stagger: mobile ? 0.08 : 0.2, // Less stagger on mobile
          ease: "power3.out",
          scrollTrigger: {
            trigger: cards[0]?.parentElement,
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
Explore a curated selection of projects where strategy, design, and technology come together. From UI/UX design to AI automation and web development, our work reflects the results we deliver for startups, SaaS platforms, and growing brands.            </p>
    
    </div>


      {/* No filters */}
      {/* Cards with staggered animation */}
      <HoverEffect items={projects} />
    </div>
  );
};

export default Portfolio; 