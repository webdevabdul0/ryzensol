"use client";
import React from "react";
import Header from "../Layout/Header";
import Footer from "../Layout/Footer";
import Hero from "./Hero";
import FAQ from "./FAQ";
import About from "./About";
import Contact from "./Contact";

const AboutClient = () => {
  return (
    <div className="bg-gray-50">
      <Header/>
      <Hero/>
      <About/>
      <div id="Faq" className="text-black w-full flex flex-col items-center">
        <FAQ />
      </div>
      <div id="Contact">
        <Contact/>  
      </div>
      <Footer/>
    </div>
  );
};

export default AboutClient; 