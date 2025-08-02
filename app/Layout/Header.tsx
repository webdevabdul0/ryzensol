"use client";
import React from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { navLinks } from "../../app/constants";
import Link from "next/link";
import Image from "next/image";
import {
  FaFacebookF,
  FaInstagram,
  FaXTwitter,
  FaLinkedinIn,
} from "react-icons/fa6";

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

const Header = () => {
  const [menu, setMenu] = useState(false);
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

  const toggleMenu = () => {
    setMenu(!menu);
  };

  return (
    <div className="w-full bg-black ">
      {/* Calendly Modal */}
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

      <div className="max-w-[1440px] mx-auto pt-12 pb-6 ">
        <div className=" flex flex-row justify-between lg:hidden mx-4 sm:mx-8 ">
          <Link href="/" className="flex items-center">
            <Image
              src="/logo.png"
              alt="Ryzen Solutions Logo"
              width={170} // adjust as needed
              height={40} // adjust as needed
              className="object-contain"
            />
          </Link>
          <FaBars
            size={24}
            color="white"
            onClick={toggleMenu}
            className="z-20"
          />
          <AnimatePresence>
            {menu && (
              <motion.div
                initial={{ opacity: 0, x: "100%" }} // Start completely off-screen
                animate={{
                  opacity: 1,
                  x: 0,
                }} // Slide into view
                exit={{ opacity: 0, x: "100%" }} // Slide out when hidden
                transition={{ duration: 0.4, ease: "easeInOut" }}
                className="fixed inset-0 z-50 w-full h-screen bg-black/90 flex flex-col items-center justify-center"
                onClick={toggleMenu}
              >
                <FaTimes
                  size={24}
                  color="white"
                  onClick={toggleMenu}
                  className="absolute top-10 right-4"
                />

                <div
                  className=" flex flex-col items-center justify-center"
                  onClick={(e) => e.stopPropagation()}
                >
                  <nav>
                    <ul className="flex flex-col  items-center gap-8 ">
                      {navLinks.map((link) => (
                        <li key={link.href}>
                          <Link
                            href={link.href}
                            onClick={toggleMenu}
                            className="text-textMuted hover:text-white/50 transition duration-300 font-normal"
                          >
                            {link.title}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </nav>
                  {/* Social icons and button at the bottom of the menu */}
                  <div className="flex flex-col items-center gap-5 mt-10">
                    <ul className="flex flex-row gap-4 mr-2">
                      <li>
                        <a
                          href="https://www.instagram.com/ryzensol?igsh=MTFqOWlsZWRodDk4Nw=="
                          target="_blank"
                          rel="noopener noreferrer"
                          aria-label="Instagram"
                        >
                          <FaInstagram className="w-6 h-6 text-white hover:text-pink-500 transition" />
                        </a>
                      </li>
                      <li>
                        <a
                          href="https://web.facebook.com/profile.php?id=61578438821724"
                          target="_blank"
                          rel="noopener noreferrer"
                          aria-label="Facebook"
                        >
                          <FaFacebookF className="w-6 h-6 text-white hover:text-blue-600 transition" />
                        </a>
                      </li>
                      <li>
                        <a
                          href="https://x.com/RyzenSolution"
                          target="_blank"
                          rel="noopener noreferrer"
                          aria-label="Twitter"
                        >
                          <FaXTwitter className="w-6 h-6 text-white hover:text-gray-300 transition" />
                        </a>
                      </li>
                      <li>
                        <a
                          href="https://www.linkedin.com/company/ryzensol/?viewAsMember=true"
                          target="_blank"
                          rel="noopener noreferrer"
                          aria-label="LinkedIn"
                        >
                          <FaLinkedinIn className="w-6 h-6 text-white hover:text-blue-500 transition" />
                        </a>
                      </li>
                    </ul>
                    <button
                      className="px-5 py-2 rounded-full bg-primary text-white font-semibold hover:bg-opacity-90 transition"
                      onClick={openCalendly}
                    >
                      Book a Free Call
                    </button>
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        <div className=" flex-row justify-center gap-5 hidden lg:flex mx-4 xl:mx-0 ">
          <div className="flex flex-row justify-center items-center rounded-tl-3xl rounded-lg   px-5 py-3">
            <Link href="/" className="flex items-center">
              <Image
                src="/logo.png"
                alt="Ryzen Solutions Logo"
                width={170} // adjust as needed
                height={40} // adjust as needed
                className="object-contain"
              />
            </Link>
          </div>

          {/* Nav links left, social icons + button right */}
          <div className="flex-1 flex flex-row justify-start items-center rounded-br-3xl rounded-lg   px-5 py-3">
            <nav>
              <ul className="flex flex-row text-sm  xl:text-base items-center gap-8">
                {navLinks.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="text-textMuted hover:text-white/50 transition duration-300 font-normal"
                    >
                      {link.title}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
          </div>

          {/* Social icons and button on the right edge */}
          <div className="flex flex-row items-center gap-5 text-sm xl:text-base ml-auto">
            <ul className="flex flex-row gap-4 mr-2">
              <li>
                <a
                  href="https://www.instagram.com/ryzensol?igsh=MTFqOWlsZWRodDk4Nw=="
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Instagram"
                >
                  <FaInstagram className="w-6 h-6 text-white hover:text-pink-500 transition" />
                </a>
              </li>
              <li>
                <a
                  href="https://web.facebook.com/profile.php?id=61578438821724"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Facebook"
                >
                  <FaFacebookF className="w-6 h-6 text-white hover:text-blue-600 transition" />
                </a>
              </li>
              <li>
                <a
                  href="https://x.com/RyzenSolution"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Twitter"
                >
                  <FaXTwitter className="w-6 h-6 text-white hover:text-gray-300 transition" />
                </a>
              </li>
              <li>
                <a
                  href="https://www.linkedin.com/company/ryzensol/?viewAsMember=true"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="LinkedIn"
                >
                  <FaLinkedinIn className="w-6 h-6 text-white hover:text-blue-500 transition" />
                </a>
              </li>
            </ul>

            <button
              className="px-5 py-2 rounded-full bg-primary text-white font-semibold hover:bg-opacity-90 transition"
              onClick={openCalendly}
            >
              Book a Free Call
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
