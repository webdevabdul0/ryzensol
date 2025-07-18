"use client"


import React, { useRef, useEffect } from "react";
import Image from "next/image";
import Image1 from "../../public/Services/1.png";
import Image2 from "../../public/Services/2.png";
import Image3 from "../../public/Services/3.png"; // Using an existing image as a placeholder
import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

// Utility to detect mobile
const isMobile = () =>
  typeof window !== "undefined" && window.innerWidth < 640;

const Services = () => {
  const sectionRefs = useRef<(HTMLDivElement | null)[]>([]);
  const imageRefs = useRef<(HTMLDivElement | null)[]>([]);
  const contentRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    const mobile = isMobile();
    sectionRefs.current.forEach((section, idx) => {
      const image = imageRefs.current[idx];
      const content = contentRefs.current[idx];
      if (section && image && content) {
        // Parallax effect for image
        gsap.fromTo(
          image,
          { opacity: 0, y: mobile ? 20 : 80 }, // Less movement on mobile
          {
            opacity: 1,
            y: 0,
            duration: mobile ? 0.5 : 1.2, // Faster on mobile
            ease: "power3.out",
            scrollTrigger: {
              trigger: section,
              start: "top 90%",
              toggleActions: "play none none reverse",
            },
          }
        );
        // Parallax effect for content (slower)
        gsap.fromTo(
          content,
          { opacity: 0, y: mobile ? 30 : 120 }, // Less movement on mobile
          {
            opacity: 1,
            y: 0,
            duration: mobile ? 0.7 : 1.5, // Faster on mobile
            ease: "power3.out",
            scrollTrigger: {
              trigger: section,
              start: "top 90%",
              toggleActions: "play none none reverse",
            },
            delay: 0.1,
            onStart: () => {
              // Stagger text reveal inside content
              const textEls = content.querySelectorAll(
                "h5, h2, p, ul > li"
              );
              gsap.fromTo(
                textEls,
                { opacity: 0, y: mobile ? 10 : 40 }, // Less movement on mobile
                {
                  opacity: 1,
                  y: 0,
                  duration: mobile ? 0.3 : 0.7, // Faster on mobile
                  stagger: mobile ? 0.05 : 0.12, // Less stagger on mobile
                  ease: "power3.out",
                }
              );
            },
          }
        );
      }
    });
    // Cleanup
    return () => {
      ScrollTrigger.getAll().forEach((st) => st.kill());
    };
  }, []);

  return (
    <div className="mt-16 md:mt-32 flex flex-col gap-16 mx-5 text-black max-w-[1440px]">
      <div
        className="flex flex-col-reverse md:flex-row w-full justify-between gap-8 md:gap-0"
        ref={el => { sectionRefs.current[0] = el; }}
      >
        <div
          className="basis-1/2 flex flex-col items-center md:items-start "
          ref={el => { contentRefs.current[0] = el; }}
        >
          <h5 className="mb-3 sm:mb-5 text-[#6366F1] text-base sm:text-lg font-semibold">
            UI/UX Design
          </h5>
          <h2 className="text-3xl  md:text-5xl font-bold text-center md:text-start mb-3 sm:mb-5">
            Designing Intuitive & Engaging User Experiences
          </h2>
          <p className="text-lg md:text-xl text-center md:text-start  font-light text-black/80 mb-3 sm:mb-5">
            We craft visually stunning and user-centric interfaces that balance
            aesthetics with functionality. Our approach focuses on clean UX,
            accessibility, and seamless interactions to enhance engagement and
            usability.
          </p>

          <ul className="mb-3 sm:mb-5">
            <li className="flex flex-row items-baseline gap-4">
              <div className="size-2 md:size-3 bg-black rounded-full" />
              <p className="text-base md:text-lg text-black/80 font-medium mb-2">
                Pixel-perfect UI design with Figma & Adobe XD.
              </p>
            </li>

            <li className="flex flex-row items-baseline gap-4">
              <div className="size-2 md:size-3 bg-black rounded-full" />
              <p className="text-base md:text-lg text-black/80 font-medium mb-2">
                Digitize text from scanned documents and images effortlessly.
              </p>
            </li>

            <li className="flex flex-row items-baseline gap-4">
              <div className="size-2 md:size-3 bg-black rounded-full" />
              <p className="text-base md:text-lg text-black/80 font-medium mb-2">
                User-centered UX research & wireframing for intuitive
                navigation.
              </p>
            </li>

            <li className="flex flex-row items-baseline gap-4">
              <div className="size-2 md:size-3 bg-black rounded-full" />
              <p className="text-base md:text-lg text-black/80 font-medium mb-2">
                Prototyping & animations to bring interfaces to life.
              </p>
            </li>
          </ul>

          <a href="#Contact">
            <button className="p-[3px] relative">
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-blue-700 rounded-2xl" />
              <div className="px-8 py-3  bg-white rounded-2xl  relative group hover:bg-primary/20 hover:text-white transition duration-300 text-black ">
                Contact Us
              </div>
            </button>
          </a>
        </div>
        <div
          className="basis-1/2  sm:pl-8"
          ref={el => { imageRefs.current[0] = el; }}
        >
          <Image src={Image1} alt="UI/UX Design service illustration" />
        </div>
      </div>

      <div
        className="flex flex-col md:flex-row w-full justify-between gap-8 md:gap-0"
        ref={el => { sectionRefs.current[1] = el; }}
      >
        <div
          className="basis-1/2 sm:pr-8"
          ref={el => { imageRefs.current[1] = el; }}
        >
          <Image src={Image2} alt="Full-Stack Web Development service illustration" />
        </div>
        <div
          className="basis-1/2 flex flex-col items-center md:items-start"
          ref={el => { contentRefs.current[1] = el; }}
        >
          <h5 className="mb-3 sm:mb-5 text-[#6366F1] text-base sm:text-lg font-semibold">
            Full-Stack Web Development
          </h5>
          <h2 className="text-3xl  md:text-5xl font-bold text-center md:text-start mb-3 sm:mb-5">
            Building Scalable & High-Performance Web Apps
          </h2>
          <p className="text-lg md:text-xl text-center md:text-start  font-light text-black/80 mb-3 sm:mb-5">
            We specialize in modern web development, creating fast, scalable, and
            AI-powered applications using the latest web technologies. From
            intuitive frontends to robust backends, we build products that
            deliver seamless digital experiences.
          </p>

          <ul className="mb-3 sm:mb-5">
            <li className="flex flex-row items-baseline gap-4">
              <div className="size-2 md:size-3 bg-black rounded-full" />
              <p className="text-base md:text-lg text-black/80 font-medium mb-2">
                Frontend: Next.js, React, TailwindCSS for stunning, responsive
                UIs.
              </p>
            </li>

            <li className="flex flex-row items-baseline gap-4">
              <div className="size-2 md:size-3 bg-black rounded-full" />
              <p className="text-base md:text-lg text-black/80 font-medium mb-2">
                Backend: Node.js, Express.js, Firebase for scalable performance.
              </p>
            </li>

            <li className="flex flex-row items-baseline gap-4">
              <div className="size-2 md:size-3 bg-black rounded-full" />
              <p className="text-base md:text-lg text-black/80 font-medium mb-2">
                AI & APIs: Integration of AI-powered features & API-driven
                automation.
              </p>
            </li>

            <li className="flex flex-row items-baseline gap-4">
              <div className="size-2 md:size-3 bg-black rounded-full" />
              <p className="text-base md:text-lg text-black/80 font-medium mb-2">
                Optimization: SEO, performance tuning & accessibility best
                practices.
              </p>
            </li>
          </ul>

          <a href="#Contact">
            <button className="p-[3px] relative">
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-blue-700 rounded-2xl" />
              <div className="px-8 py-3  bg-white rounded-2xl  relative group hover:bg-primary/20 hover:text-white transition duration-300 text-black ">
                Contact Us
              </div>
            </button>
          </a>
        </div>
      </div>
      
      <div
        className="flex flex-col-reverse md:flex-row w-full justify-between gap-8 md:gap-0"
        ref={el => { sectionRefs.current[2] = el; }}
      >
        <div
          className="basis-1/2 flex flex-col items-center md:items-start -mt-20 md:mt-0"
          ref={el => { contentRefs.current[2] = el; }}
        >
          <h5 className="mb-3 sm:mb-5 text-[#6366F1] text-base sm:text-lg font-semibold ">
            AI & Automation
          </h5>
          <h2 className="text-3xl  md:text-5xl font-bold text-center md:text-start mb-3 sm:mb-5">
            Building Intelligent Systems & Workflows
          </h2>
          <p className="text-lg md:text-xl text-center md:text-start  font-light text-black/80 mb-3 sm:mb-5">
            We specialize in creating smart, automated solutions that leverage cutting-edge AI. From intelligent chatbots to complex workflow automation, we build systems that think, learn, and perform.
          </p>

          <ul className="mb-3 sm:mb-5">
            <li className="flex flex-row items-baseline gap-4">
              <div className="size-2 md:size-3 bg-black rounded-full" />
              <p className="text-base md:text-lg text-black/80 font-medium mb-2">
                RAG pipeline development for context-aware AI applications.
              </p>
            </li>

            <li className="flex flex-row items-baseline gap-4">
              <div className="size-2 md:size-3 bg-black rounded-full" />
              <p className="text-base md:text-lg text-black/80 font-medium mb-2">
                Custom AI agent and bot creation for automated tasks.
              </p>
            </li>

            <li className="flex flex-row items-baseline gap-4">
              <div className="size-2 md:size-3 bg-black rounded-full" />
              <p className="text-base md:text-lg text-black/80 font-medium mb-2">
                n8n workflow design and integration for process automation.
              </p>
            </li>

            <li className="flex flex-row items-baseline gap-4">
              <div className="size-2 md:size-3 bg-black rounded-full" />
              <p className="text-base md:text-lg text-black/80 font-medium mb-2">
                Integration with OpenAI, LangChain, and other AI frameworks.
              </p>
            </li>
          </ul>

          <a href="#Contact">
            <button className="p-[3px] relative">
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-blue-700 rounded-2xl" />
              <div className="px-8 py-3  bg-white rounded-2xl  relative group hover:bg-primary/20 hover:text-white transition duration-300 text-black ">
                Contact Us
              </div>
            </button>
          </a>
        </div>
        <div
          className="basis-1/2  sm:pl-8"
          ref={el => { imageRefs.current[2] = el; }}
        >
          <Image src={Image3} alt="AI Automation service illustration" />
        </div>
      </div>
    </div>
  );
};

export default Services;
