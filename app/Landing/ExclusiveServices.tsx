"use client"
import React, { useState, useRef, useEffect } from "react";

import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

// Utility to detect mobile
const isMobile = () =>
  typeof window !== "undefined" && window.innerWidth < 640;

const SERVICES = [
  {
    title: "UI/UX Design",
    details: [
      "Web & App Interface Design",
      "Landing Page Design",
      "Dashboard & SaaS UX",
      "Prototyping & User Flow Mapping",
    ],
  },
  {
    title: "AI Integrations",
    details: [
      "Custom GPT Tools & Workflows",
      "n8n / Make.com Automations",
      "Lead Generation Bots",
      "Task Automation with APIs",
    ],
  },
  {
    title: "Web Development",
    details: [
      "Custom Frontend (React, Next.js, Vue)",
      "Backend APIs (Node.js, Express)",
      "Full-Stack Web Apps",
      "REST API & Database Integration",
    ],
  },
  {
    title: "WordPress Website",
    details: [
      "Business Websites & Blogs",
      "Theme Customization",
      "Speed Optimization",
      "Elementor & Gutenberg Builds",
    ],
  },
  {
    title: "Graphic Design",
    details: [
      "Logo & Brand Identity",
      "Social Media Creatives",
      "Pitch Decks & Marketing Collateral",
      "Business Cards & Print Design",
    ],
  },
  {
    title: "Digital Marketing",
    details: [
      "Social Media Marketing",
      "Email Campaigns",
      "Paid Ads (Meta, Google)",
      "Funnel & Content Strategy",
    ],
  },
  {
    title: "SEO Services",
    details: [
      "On-Page & Technical SEO",
      "Keyword Research",
      "Content Optimization",
      "SEO Audits & Reports",
    ],
  },
  {
    title: "Hosting ",
    details: [
      "VPS, Docker, PM2 Setup",
      "Website Monitoring & Backups",
      "Performance Optimization",
      "Domain, DNS, SSL Management",
    ],
  },
];

const SERVICE_PARAGRAPHS = [
  "Our UI/UX Design team crafts visually stunning and highly intuitive interfaces for web and mobile applications. We focus on user-centered design, ensuring every interaction is seamless and every journey is delightful. From landing pages to complex dashboards, we turn ideas into engaging digital experiences.",
  "We specialize in AI automation and integrations, building custom GPT tools, bots, and workflow automations that save you time and boost productivity. Our experts connect your business with the latest AI and automation platforms, streamlining operations and unlocking new growth opportunities.",
  "Our web development services cover everything from custom frontend interfaces to robust backend APIs. We build scalable, high-performance web apps using modern frameworks, ensuring your digital products are fast, secure, and easy to maintain. Let us bring your vision to life online.",
  "We create powerful WordPress websites and blogs tailored to your business needs. From theme customization to speed optimization, our team delivers responsive, SEO-friendly sites that are easy to manage and update. Whether you need a business site or a content platform, we’ve got you covered.",
  "Our graphic design and branding services help you stand out in a crowded market. We design memorable logos, cohesive brand identities, and eye-catching marketing materials that capture your brand’s essence. From social media creatives to print collateral, we make your brand unforgettable.",
  "We drive results with comprehensive digital marketing strategies, including social media, email campaigns, paid ads, and content funnels. Our team crafts targeted campaigns that grow your audience, boost engagement, and maximize ROI across all digital channels.",
  "Our SEO experts optimize your website for search engines, improving visibility and driving organic traffic. We handle on-page and technical SEO, keyword research, content optimization, and detailed audits to ensure your site ranks higher and attracts the right audience.",
  "We offer reliable hosting and maintenance solutions, including VPS, Docker, and PM2 setup. Our team manages website monitoring, backups, performance optimization, and domain/DNS/SSL management, so your site stays secure, fast, and always online.",
];

const ExclusiveServices = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);
  const serviceRefs = useRef<(HTMLLIElement | null)[]>([]);
  const headerTitleRef = useRef<HTMLHeadingElement | null>(null);
  const headerDescRef = useRef<HTMLParagraphElement | null>(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    const mobile = isMobile();
    // Header animation
    if (headerTitleRef.current && headerDescRef.current) {
      gsap.fromTo(
        headerTitleRef.current,
        { opacity: 0, x: mobile ? -30 : -80 }, // Less movement on mobile
        {
          opacity: 1,
          x: 0,
          duration: mobile ? 0.5 : 1, // Faster on mobile
          ease: "power3.out",
          scrollTrigger: {
            trigger: headerTitleRef.current,
            start: "top 85%",
            toggleActions: "play none none reverse",
          },
        }
      );
      gsap.fromTo(
        headerDescRef.current,
        { opacity: 0, x: mobile ? 30 : 80 }, // Less movement on mobile
        {
          opacity: 1,
          x: 0,
          duration: mobile ? 0.5 : 1, // Faster on mobile
          ease: "power3.out",
          scrollTrigger: {
            trigger: headerDescRef.current,
            start: "top 85%",
            toggleActions: "play none none reverse",
          },
        }
      );
    }
    // Animate li elements with stagger and reversal
    const lis = serviceRefs.current.filter((el): el is HTMLLIElement => !!el);
    const ul = lis.length > 0 ? lis[0].parentElement : null;
    if (lis.length) {
      gsap.fromTo(
        lis,
        { opacity: 0, y: mobile ? 20 : 60 }, // Less movement on mobile
        {
          opacity: 1,
          y: 0,
          duration: mobile ? 0.5 : 1.2, // Faster on mobile
          stagger: mobile ? 0.08 : 0.3, // Less stagger on mobile
          ease: "power3.out",
          scrollTrigger: {
            trigger: ul,
            start: "top 70%",
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
    <section className="w-full py-4  sm:py-24 px-4 sm:px-6 md:px-10 xl:px-20 mt-16 relative">



      <div className="max-w-[1440px] mx-auto z-20">
        <div className="flex flex-col gap-8">
          <div className="flex flex-col md:flex-row  w-full justify-between">
            <h2
              ref={headerTitleRef}
              className="text-3xl sm:text-5xl md:text-6xl font-bold text-black mb-4 md:w-1/2"
            >
              Services we Provide
            </h2>
            <p
              ref={headerDescRef}
              className="text-base md:text-lg lg:text-2xl text-gray-800 mb-8 md:w-1/2"
            >
              We Provide Innovative Marketing And Design Solutions That Make A Real Impact. Our Team Of Creative Experts Collaborates With You To Craft Strategies And Visuals That Elevate Your Brand And Drive Meaningful Results.
            </p>
          </div>
          <ul className="divide-y divide-gray-200">
            {SERVICES.map((service, idx) => {
              // Example images for each service (replace with your own as needed)
              const serviceImages = [
                "/exclusiveServices/uiux.png",
                "/exclusiveServices/ai.png",
                "/exclusiveServices/webdev.png",
                "/exclusiveServices/wordpress.png",
                "/exclusiveServices/branding.png",

                "/exclusiveServices/marketing.png",
                "/exclusiveServices/seo.png",
                "/exclusiveServices/hosting.png",
              ];
              const imageSrc = serviceImages[idx % serviceImages.length];
              const imgRef = useRef<HTMLImageElement | null>(null);
              useEffect(() => {
                if (!imgRef.current) return;
                const img = imgRef.current;
                const onEnter = () => {
                  gsap.to(img, {
                    
                    x: 10,
                    y: -10,
                    duration: 0.5,
                    ease: "power3.out",
                  });
                };
                const onLeave = () => {
                  gsap.to(img, {
                    
                    x: 0,
                    y: 0,
                    duration: 0.5,
                    ease: "power3.out",
                  });
                };
                img.addEventListener("mouseenter", onEnter);
                img.addEventListener("mouseleave", onLeave);
                return () => {
                  img.removeEventListener("mouseenter", onEnter);
                  img.removeEventListener("mouseleave", onLeave);
                };
              }, []);
              return (
                <li
                  key={service.title}
                  className="pt-3 md:pt-6"
                  ref={el => { serviceRefs.current[idx] = el; }}
                >
                  <button
                    className="flex items-center w-full text-left focus:outline-none group"
                    onClick={() => setOpenIndex(openIndex === idx ? null : idx)}
                    aria-expanded={openIndex === idx}
                  >
                    <span className="text-2xl md:text-3xl lg:text-5xl font-bold text-gray-400 mr-6 md:mr-10 flex-shrink-0 transition group-hover:text-primary/80" style={{ WebkitTextStroke: "1px #222", color: "transparent" }}>
                      {String(idx + 1).padStart(2, "0")}
                    </span>
                    <span className="text-2xl md:text-3xl lg:text-4xl font-semibold text-black group-hover:text-primary transition">
                      {service.title}
                    </span>
                    <span className="ml-auto text-gray-700 text-sm sm:text-lg md:text-xl font-medium  ">
                      {openIndex === idx ? "Hide" : "See More"}
                    </span>
                   
                  </button>
                  <div
                    className={` transition-all duration-500 ease-in-out`}
                    style={
                      openIndex === idx
                        ? {maxHeight:1000,  opacity: 1 }
                        : { maxHeight: 0, opacity: 0 }
                    }
                  >
                    <div className="flex flex-col md:flex-row gap-6 md:gap-12 items-start mt-6 md:mt-8">
                      <div className="flex-1">
                        <p className="text-gray-800 text-base md:text-lg font-medium">
                          {SERVICE_PARAGRAPHS[idx]}
                        </p>
                        <ul className="space-y-2">
                          {service.details.map((detail) => (
                            <li
                              key={detail}
                              className="flex items-center gap-2 text-gray-700 text-base md:text-lg"
                            >
                              <span className="mt-1 w-2 h-2 rounded-full bg-primary flex-shrink-0"></span>
                              <span>{detail}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                      <div className="w-full aspect-[4/3] md:w-[350px] lg:w-[500px] flex items-center justify-center">
                        <img
                          ref={imgRef}
                          src={imageSrc}
                          alt={service.title}
                          className="rounded-xl shadow-lg object-cover w-full h-full bg-gray-200"
                        />
                      </div>

                    </div>
                  </div>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default ExclusiveServices; 