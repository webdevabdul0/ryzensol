"use client";

import React, { useState, useEffect, useRef } from "react";




import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

const testimonial = [
  {
    quote:
      "Ryzen Solutions delivered an outstanding job on our app design! The visual appeal and attention to detail were top-notch, showcasing incredible creativity. Working with their team was a breeze due to prompt delivery, fluent communication, and professionalism.",
    name: "awmccloud ",
    title: "Outstanding job!",
  },
  {
    quote:
      "Ryzen Solutions truly exceeded our expectations with their outstanding professionalism in app design. Their high level of cooperation made the process smooth and enjoyable. Delivery was swift and top-notch—HIGHLY RECOMMEND! 👍",
    name: "yousifroh",
    title: "HIGHLY RECOMMEND!",
  },
  {
    quote:
      "Very professional service and communication. The work was done perfectly, of very high quality. Definitely will work with Ryzen Solutions again in the future!",
    name: "orkhen",
    title: "Very professional service",
  },
  {
    quote:
      "Ryzen Solutions is an impressive agency and it was a pleasure to work with their team. They provided great ideas for our concept and understood suggestions in the best way to deliver top-quality UX/UI. Definitely will work again with them in the future, 10/10 recommended!",
    name: "adrian_castro_9",
    title: "10/10 recommended!",
  },
];

const AVATARS = [
  "https://cdn.rareblocks.xyz/collection/clarity/images/testimonial/4/avatar-male-1.png",
  "https://cdn.rareblocks.xyz/collection/clarity/images/testimonial/4/avatar-male-2.png",
  "https://cdn.rareblocks.xyz/collection/clarity/images/testimonial/4/avatar-female.png",
  "https://cdn.rareblocks.xyz/collection/clarity/images/testimonial/4/avatar-male-1.png",
];

const getResponsiveSettings = () => {
  if (typeof window === "undefined") return { visibleCount: 1, cardWidth: 320 };
  const width = window.innerWidth;
  if (width < 640) return { visibleCount: 1, cardWidth: 320 }; // mobile
  if (width < 1024) return { visibleCount: 2, cardWidth: 380 }; // tablet
  return { visibleCount: 3, cardWidth: 460 }; // desktop
};

const Testimonials = () => {
  const [mounted, setMounted] = useState(false);
  const [settings, setSettings] = useState({ visibleCount: 1, cardWidth: 320 });
  const { visibleCount, cardWidth } = settings;
  const gap = 24;
  const totalSlides = testimonial.length;

  // Clone slides for infinite effect
  const extendedTestimonials = [
    ...testimonial.slice(-visibleCount),
    ...testimonial,
    ...testimonial.slice(0, visibleCount),
  ];
  const [current, setCurrent] = useState(visibleCount); // Start at first real slide
  const [isTransitioning, setIsTransitioning] = useState(false);
  const transitionRef = useRef<HTMLDivElement>(null);

  // Touch state for swipe
  const [touchStartX, setTouchStartX] = useState<number | null>(null);
  const [touchEndX, setTouchEndX] = useState<number | null>(null);
  const autoAdvanceRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    setMounted(true);
    setSettings(getResponsiveSettings());
    const handleResize = () => setSettings(getResponsiveSettings());
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // When visibleCount changes, reset current to visibleCount
  useEffect(() => {
    setCurrent(visibleCount);
  }, [visibleCount]);

  // Handle transition end for infinite effect
  useEffect(() => {
    if (!isTransitioning) return;
    const handle = () => {
      setIsTransitioning(false);
      if (current >= totalSlides + visibleCount) {
        setCurrent(visibleCount);
      } else if (current < visibleCount) {
        setCurrent(totalSlides + visibleCount - 1);
      }
    };
    const node = transitionRef.current;
    if (node) {
      node.addEventListener("transitionend", handle);
      return () => node.removeEventListener("transitionend", handle);
    }
  }, [isTransitioning, current, totalSlides, visibleCount]);

  const canScroll = totalSlides > visibleCount;

  // --- Swipe handlers ---
  const handleTouchStart = (e: React.TouchEvent) => {
    setTouchStartX(e.touches[0].clientX);
    setTouchEndX(null);
    // Pause auto-advance on user interaction
    if (autoAdvanceRef.current) clearInterval(autoAdvanceRef.current);
  };
  const handleTouchMove = (e: React.TouchEvent) => {
    setTouchEndX(e.touches[0].clientX);
  };
  const handleTouchEnd = () => {
    if (touchStartX !== null && touchEndX !== null) {
      const diff = touchStartX - touchEndX;
      if (Math.abs(diff) > 50) {
        if (diff > 0) {
          handleNext(); // swipe left
        } else {
          handlePrev(); // swipe right
        }
      }
    }
    setTouchStartX(null);
    setTouchEndX(null);
    // Resume auto-advance
    startAutoAdvance();
  };

  // --- Auto-advance every 10 seconds ---
  const startAutoAdvance = () => {
    if (autoAdvanceRef.current) clearInterval(autoAdvanceRef.current);
    autoAdvanceRef.current = setInterval(() => {
      handleNext();
    }, 10000);
  };
  useEffect(() => {
    startAutoAdvance();
    return () => {
      if (autoAdvanceRef.current) clearInterval(autoAdvanceRef.current);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [current, visibleCount]);

  const handlePrev = () => {
    if (!canScroll) return;
    setIsTransitioning(true);
    setCurrent((prev) => prev - 1);
  };
  const handleNext = () => {
    if (!canScroll) return;
    setIsTransitioning(true);
    setCurrent((prev) => prev + 1);
  };

  const translateX = -(current * (cardWidth + gap));

  if (!mounted) {
    return null;
  }





  return (
    <section className="relative py-24 ">
      {/* Gradient blobs */}
      
      {/* Testimonial content */}
      <div className="relative z-10">
        <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
          <div className="flex flex-col items-center">
            <div className="text-center">
            <div className="flex flex-col items-center">
   <h2
        
        className="text-3xl sm:text-4xl md:text-5xl font-bold text-center text-gray-900 mb-8"
      >
        What Our Clients Say
      </h2>

      <p
              
              className="text-base md:text-lg lg:text-2xl text-center text-gray-800 mb-4 max-w-3xl"
            >
              Discover how our creative solutions and dedicated service have made a real impact for our clients. Here’s what they have to say about working with Ryzen Solutions.
            </p>
    
    </div>
    </div>
           

            <div className="relative mt-10 md:mt-24 md:order-2 w-full">
              <div className="absolute -inset-x-1 inset-y-16 md:-inset-x-2 md:-inset-y-6 pointer-events-none">
                <div
                  className="w-full h-full max-w-5xl mx-auto rounded-3xl opacity-30 blur-lg filter"
                  style={{
                    background:
                      "linear-gradient(90deg, #44ff9a -0.55%, #44b0ff 22.86%, #8b44ff 48.36%, #ff6644 73.33%, #ebff70 99.34%)",
                  }}
                ></div>
              </div>
              <div className="relative flex items-center justify-center">
                {canScroll && (
                  <button
                    onClick={handlePrev}
                    className={`z-10 p-2 absolute left-0 sm:-left-10 rounded-full bg-white shadow-md border border-gray-200 mr-4 transition-opacity hover:bg-gray-100`}
                    aria-label="Previous testimonials"
                  >
                    <svg className="w-6 h-6 text-gray-700" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
                    </svg>
                  </button>
                )}
                <div
                  className="overflow-hidden w-full"
                  style={{ maxWidth: cardWidth * visibleCount + gap * (visibleCount - 1) }}
                  onTouchStart={handleTouchStart}
                  onTouchMove={handleTouchMove}
                  onTouchEnd={handleTouchEnd}
                >
                  <div
                    ref={transitionRef}
                    className={`flex ${isTransitioning ? "transition-transform duration-500 ease-in-out" : ""}`}
                    style={{
                      transform: `translateX(${translateX}px)`,
                      minWidth: cardWidth * extendedTestimonials.length + gap * (extendedTestimonials.length - 1),
                    }}
                  >
                    {extendedTestimonials.map((item, idx) => (
                      <div
                        key={idx + item.name}
                        className="flex flex-col overflow-hidden shadow-xl bg-white rounded-2xl"
                        style={{
                          minWidth: cardWidth,
                          maxWidth: cardWidth,
                          marginRight: idx !== extendedTestimonials.length - 1 ? gap : 0,
                        }}
                      >
                        <div className="flex flex-col justify-between flex-1 p-6 lg:py-8 lg:px-7">
                          <div className="flex-1">
                            <div className="flex items-center">
                              {[...Array(5)].map((_, i) => (
                                <svg
                                  key={i}
                                  className="w-5 h-5 text-[#FDB241]"
                                  xmlns="http://www.w3.org/2000/svg"
                                  viewBox="0 0 20 20"
                                  fill="currentColor"
                                >
                                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                                </svg>
                              ))}
                            </div>
                            <blockquote className="flex-1 mt-8">
                              <p className="text-lg leading-relaxed text-gray-900 font-pj">{item.quote}</p>
                            </blockquote>
                          </div>
                          <div className="flex items-center mt-8">
                            <img
                              className="flex-shrink-0 object-cover rounded-full w-11 h-11"
                              src={AVATARS[idx % AVATARS.length]}
                              alt={item.name}
                            />
                            <div className="ml-4">
                              <p className="text-base font-bold text-gray-900 font-pj">{item.name}</p>
                              <p className="mt-0.5 text-sm font-pj text-gray-600">{item.title}</p>
                            </div>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
                {canScroll && (
                  <button
                    onClick={handleNext}
                    className={`z-10 p-2 absolute right-0  sm:-right-10 rounded-full bg-white shadow-md border border-gray-200 ml-4 transition-opacity hover:bg-gray-100`}
                    aria-label="Next testimonials"
                  >
                    <svg className="w-6 h-6 text-gray-700" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                    </svg>
                  </button>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
