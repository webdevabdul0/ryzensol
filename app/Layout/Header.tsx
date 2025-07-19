"use client";
import React from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { navLinks, socialLinks } from "../../app/constants";
import Link from "next/link";

const Header = () => {
  const [menu, setMenu] = useState(false);

  const toggleMenu = () => {
    setMenu(!menu);
  };

  return (
    <div className="w-full bg-black ">

<div className="max-w-[1440px] mx-auto pt-12 pb-6 ">

 <div className=" flex flex-row justify-between lg:hidden mx-4 sm:mx-8 ">
        <Link href="/" className="flex items-center">
          <h3 className="text-xl text-primaryText tracking-wide uppercase font-bold">
            Ryzen Solutions
          </h3>
        </Link>
        <FaBars size={24} color="white" onClick={toggleMenu} className="z-20" />
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
                <div className="flex flex-row items-center gap-5 mt-10">
                  <a href="https://www.linkedin.com/company/ryzensolutions" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                    <svg fill="white" viewBox="0 0 24 24" className="w-6 h-6"><path d="M19 0h-14c-2.76 0-5 2.24-5 5v14c0 2.76 2.24 5 5 5h14c2.76 0 5-2.24 5-5v-14c0-2.76-2.24-5-5-5zm-11 19h-3v-9h3v9zm-1.5-10.29c-.97 0-1.75-.79-1.75-1.75s.78-1.75 1.75-1.75 1.75.79 1.75 1.75-.78 1.75-1.75 1.75zm13.5 10.29h-3v-4.5c0-1.08-.02-2.47-1.5-2.47-1.5 0-1.73 1.17-1.73 2.39v4.58h-3v-9h2.89v1.23h.04c.4-.75 1.38-1.54 2.84-1.54 3.04 0 3.6 2 3.6 4.59v4.72z"/></svg>
                  </a>
                  <a href="mailto:global.business@ryzensol.com" aria-label="Email">
                    <svg fill="white" viewBox="0 0 24 24" className="w-6 h-6"><path d="M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 2v.01L12 13 4 6.01V6h16zM4 20V8.99l8 7 8-7V20H4z"/></svg>
                  </a>
                  <a href="#Contact">
                    <button className="px-5 py-2 rounded-full bg-primary text-white font-semibold hover:bg-opacity-90 transition">
                      Get in Touch
                    </button>
                  </a>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      <div className=" flex-row justify-center gap-5 hidden lg:flex mx-4 xl:mx-0 ">
        <div className="flex flex-row justify-center items-center rounded-tl-3xl rounded-lg   px-5 py-3">
          <Link href="/" className="flex items-center">
            <h3 className="text-xl text-primaryText tracking-wide uppercase font-bold">
              Ryzen Solutions
            </h3>
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
              <a href="https://www.linkedin.com/company/ryzensolutions" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                <svg fill="white" viewBox="0 0 24 24" className="w-6 h-6"><path d="M19 0h-14c-2.76 0-5 2.24-5 5v14c0 2.76 2.24 5 5 5h14c2.76 0 5-2.24 5-5v-14c0-2.76-2.24-5-5-5zm-11 19h-3v-9h3v9zm-1.5-10.29c-.97 0-1.75-.79-1.75-1.75s.78-1.75 1.75-1.75 1.75.79 1.75 1.75-.78 1.75-1.75 1.75zm13.5 10.29h-3v-4.5c0-1.08-.02-2.47-1.5-2.47-1.5 0-1.73 1.17-1.73 2.39v4.58h-3v-9h2.89v1.23h.04c.4-.75 1.38-1.54 2.84-1.54 3.04 0 3.6 2 3.6 4.59v4.72z"/></svg>
              </a>
            </li>
            <li>
              <a href="mailto:global.business@ryzensol.com" aria-label="Email">
                <svg fill="white" viewBox="0 0 24 24" className="w-6 h-6"><path d="M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 2v.01L12 13 4 6.01V6h16zM4 20V8.99l8 7 8-7V20H4z"/></svg>
              </a>
            </li>
          </ul>
          <a href="#Contact">
            <button className="px-5 py-2 rounded-full bg-primary text-white font-semibold hover:bg-opacity-90 transition">
              Get in Touch
            </button>
          </a>
        </div>
      </div>

</div>


     
    </div>
  );
};

export default Header;
