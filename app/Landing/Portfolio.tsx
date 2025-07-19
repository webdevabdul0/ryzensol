"use client";
import React, { useRef, useEffect } from "react";
import { items } from "../constants";
import { HoverEffect } from "../components/ui/card-hover-effect";
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
    const isMobile = typeof window !== 'undefined' && window.innerWidth < 768;
    // Animate heading
    if (headingRef.current) {
      gsap.fromTo(
        headingRef.current,
        { opacity: 0, y: 60 },
        {
          opacity: 1,
          y: 0,
          duration: isMobile ? 0.6 : 1,
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
          duration: isMobile ? 0.7 : 1.2,
          stagger: isMobile ? 0.08 : 0.2,
          ease: "power3.out",
          scrollTrigger: {
            trigger: headingRef.current,
            start: "top 85%",
            toggleActions: "play none none none",
          },
        }
      );
    }
    return () => {
      ScrollTrigger.getAll().forEach((st) => st.kill());
    };
  }, [projects.length]);

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