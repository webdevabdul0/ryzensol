"use client"
import React, { useRef, useEffect } from "react";
import Qna from "../components/Qna";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

const QuestionsAnswers = [
  {
    id: 1,
    question: "Who are you and what do you do?",
    answer:
      "We are Ryzen Solutions, a full-service digital agency specializing in UI/UX Design, AI Automation, Web Development, WordPress, Branding, SEO, Digital Marketing, and Hosting & Maintenance. Our team builds scalable web apps, intuitive designs, and AI-driven digital products for businesses of all sizes.",
  },
  {
    id: 2,
    question: "What technologies do you specialize in?",
    answer:
      "Our team works with frontend technologies like React.js, Next.js, and TailwindCSS, backend technologies like Node.js, Express.js, and Firebase, AI tools, and UI/UX design tools like Figma and Adobe XD. We also offer expertise in WordPress, SEO, and digital marketing platforms.",
  },
  {
    id: 3,
    question: "What types of projects have you worked on?",
    answer:
      "We’ve delivered AI-powered applications, dashboards, SaaS products, business websites, and branding solutions. Our projects focus on AI integration, seamless UX, and high-performance web development for a variety of industries.",
  },
  {
    id: 4,
    question: "Do you take on freelance or contract work?",
    answer:
      "We work with businesses and organizations on both project-based and ongoing contracts. If you have an exciting project or need a reliable digital partner, our team is ready to help!",
  },
  {
    id: 5,
    question: "Do you develop both frontend and backend?",
    answer:
      "Yes! Ryzen Solutions specializes in full-stack web development, ensuring smooth integration between frontend and backend, and incorporating AI-driven features to enhance functionality.",
  },
  {
    id: 6,
    question: "How can I contact you?",
    answer:
      "You can reach us via email at contact@ryzensolutions.com or connect with us through our website’s contact form.",
  },
];

const FAQ = () => {
  const headingRef = useRef<HTMLHeadingElement | null>(null);
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    // Setup scrollerProxy for Lenis smooth scroll
    if (!window.ScrollTriggerProxySet) {
      ScrollTrigger.scrollerProxy(window, {
        scrollTop(value) {
          if (value !== undefined) {
            window.scrollTo(0, value);
          }
          return window.scrollY;
        },
        getBoundingClientRect() {
          return {
            top: 0,
            left: 0,
            width: window.innerWidth,
            height: window.innerHeight,
          };
        },
      });
      window.ScrollTriggerProxySet = true;
    }
    if (headingRef.current) {
      gsap.fromTo(
        headingRef.current,
        { opacity: 0, y: 20 },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: headingRef.current,
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
    <div className="my-12 mx-5  max-w-[1440px]">
      <div className="flex flex-col items-start">
        <h2 ref={headingRef} className="text-2xl md:text-5xl font-bold text-start mb-8 sm:mb-16 ">
          Frequently Asked Questions
        </h2>
        <Qna items={QuestionsAnswers} />
      </div>
    </div>
  );
};

export default FAQ;

declare global {
  interface Window {
    ScrollTriggerProxySet?: boolean;
  }
}
