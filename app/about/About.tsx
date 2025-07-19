"use client";

import React, {  useRef , useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";



const About = () => {

    const headerTitleRef = useRef<HTMLHeadingElement | null>(null);
const headerDescRef = useRef<HTMLParagraphElement | null>(null);
const teamSectionRef = useRef<HTMLElement | null>(null);
const visionSectionRef = useRef<HTMLElement | null>(null);
const missionSectionRef = useRef<HTMLElement | null>(null);


useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    // Header animation
    if (headerTitleRef.current && headerDescRef.current) {
      gsap.fromTo(
        headerTitleRef.current,
        { opacity: 0, x: -80 },
        {
          opacity: 1,
          x: 0,
          duration: 1,
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
        { opacity: 0, x: 80 },
        {
          opacity: 1,
          x: 0,
          duration: 1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: headerDescRef.current,
            start: "top 85%",
            toggleActions: "play none none reverse",
          },
        }
      );
    }
   
    // Animate Our Team, Our Vision, and Our Mission sections with stagger
    const sectionRefs = [teamSectionRef, visionSectionRef, missionSectionRef];
    gsap.set(sectionRefs.map(ref => ref.current), { opacity: 0, y: 40 });
    gsap.to(sectionRefs.map(ref => ref.current), {
      opacity: 1,
      y: 0,
      duration: 1,
      stagger: 0.2,
      ease: "power3.out",
      scrollTrigger: {
        trigger: teamSectionRef.current,
        start: "top 85%",
      },
    });

    
    return () => {
      ScrollTrigger.getAll().forEach((st) => st.kill());
    };
  }, []);


  return (
<div className="max-w-[1440px] mx-auto py-24 px-5 text-black ">



<div className="flex flex-col md:flex-row  w-full justify-between">
            <h2
              ref={headerTitleRef}
              className="text-3xl sm:text-5xl md:text-6xl font-bold text-black mb-4 md:w-1/2"
            >
              About Ryzen Solutions
            </h2>
            <p
              ref={headerDescRef}
              className="text-base md:text-lg lg:text-2xl text-gray-800 mb-8 md:w-1/2"
            >
              At Ryzen Solutions, we empower startups, small businesses, and growing brands with smart design, powerful code, and scalable digital strategies. As a full-service creative and tech agency, we specialize in UI/UX design, AI automation, web development, WordPress solutions, SEO, and digital marketing—everything you need to thrive in today’s digital landscape.
            </p>
          </div>


<section className="mt-12 mb-12" ref={teamSectionRef}>
  <h2 className="text-4xl font-semibold mb-4">Our Team</h2>
  <p className="text-xl text-black/80 mb-2">
  Our team is made up of passionate designers, developers, marketers, and automation experts who thrive on innovation and problem-solving. With diverse skills across UI/UX design, web development, AI automation, and digital marketing, we work together to deliver <b>high-impact solutions</b> tailored to your unique business goals.
<br/><br/>
Our collaborative approach ensures every project benefits from strategic thinking, creative execution, and technical precision. Whether you're launching a startup or scaling a SaaS product, our experts are here to turn ideas into scalable digital success.
  </p>
</section>
<section className="mb-12" ref={visionSectionRef}>
  <h2 className="text-4xl font-semibold mb-4">Our Vision</h2>
  <p className="text-xl text-black/80 mb-2">

  
  Our vision is to be a leading force in digital innovation—making design, development, and automation accessible and impactful for businesses of all sizes. We aim to <b>bridge the gap between creativity and technology</b>, helping brands thrive in a fast-evolving digital world.
<br/><br/>
We envision a future where startups and businesses no longer struggle with tech complexity but instead harness it with confidence through smart, scalable solutions.
  </p>
</section>
<section className="mb-12" ref={missionSectionRef}>
  <h2 className="text-4xl font-semibold mb-4">Our Mission</h2>
  <p className="text-xl text-black/80 mb-2">
  At Ryzen Solutions, our mission is to deliver user-centric, performance-driven solutions that fuel growth, boost engagement, and drive measurable results. We are committed to creating <b>digital experiences</b> that are not only visually striking but also strategically aligned with your business goals.
<br/><br/>
We strive to build long-term relationships with our clients by focusing on <b>transparency</b>, collaboration, and excellence in everything we do—from concept to launch and beyond.
  </p>
</section>



</div>
   
  );
};

export default About; 
