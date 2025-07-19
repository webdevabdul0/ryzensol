"use client";
import { motion } from "framer-motion";
import React, { useState, useRef, useEffect } from "react";
import { FaPlus, FaMinus } from "react-icons/fa";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

// Utility to detect mobile
const isMobile = () =>
  typeof window !== "undefined" && window.innerWidth < 640;

const Qna = ({
  items,
}: {
  items: {
    id: number;
    question: string;
    answer: string;
  }[];
}) => {
  const [openAnswers, setOpenAnswers] = useState<{ [key: number]: boolean }>({});
  const itemRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    const mobile = isMobile();
    const elements = itemRefs.current.filter(Boolean);
    const container = elements.length > 0 && elements[0]?.parentElement ? elements[0].parentElement : null;
    if (elements.length > 0 && container) {
      gsap.fromTo(
        elements,
        { opacity: 0, y: mobile ? 20 : 60 }, // Less movement on mobile
        {
          opacity: 1,
          y: 0,
          duration: mobile ? 0.5 : 1.2, // Faster on mobile
          stagger: mobile ? 0.08 : 0.2, // Less stagger on mobile
          ease: "power3.out",
          scrollTrigger: {
            trigger: container,
            start: "top 80%",
            toggleActions: "play none none reverse",
          },
        }
      );
    }
    return () => {
      ScrollTrigger.getAll().forEach((st) => st.kill());
    };
  }, [items.length]);

  const toggleAnswer = (id: number) => {
    setOpenAnswers((prev) => ({
      ...prev,
      [id]: !prev[id], // Toggle the specific question
    }));
  };

  return (
    <>
      {items.map(({ id, question, answer }, idx) => (
        <div
          key={id}
          ref={el => { itemRefs.current[idx] = el; }}
          className="w-full border-b-2 border-b-black/20 flex flex-col py-5 mb-5"
        >
          <div
            className="w-full flex flex-row justify-between cursor-pointer"
            onClick={() => setOpenAnswers((prev) => ({ ...prev, [id]: !prev[id] }))}
          >
            <h3 className="text-base md:text-2xl font-semibold text-start mb-3 sm:mb-5 text-black select-none">
              {question}
            </h3>
            {openAnswers[id] ? (
              <FaMinus color="black" className="ml-5   size-5 md:size-6 " />
            ) : (
              <FaPlus color="black" className="ml-5   size-5 md:size-6" />
            )}
          </div>

          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{
              height: openAnswers[id] ? "auto" : 0,
              opacity: openAnswers[id] ? 1 : 0,
            }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="overflow-hidden"
          >
            <p className="text-base sm:text-lg text-black/80 font-medium select-none">
              {answer}
            </p>
          </motion.div>
        </div>
      ))}
    </>
  );
};

export default Qna;
