import React from "react";
import Header from "./Layout/Header";
import Hero from "./Landing/Hero";
import Services from "./Landing/Services";
import Footer from "./Layout/Footer";
import dynamic from "next/dynamic";

const Testimonials = dynamic(() => import("./Landing/Testimonials"), { ssr: false });
const Contact = dynamic(() => import("./Landing/Contact"), { ssr: false });
const Portfolio = dynamic(() => import("./Landing/Portfolio"), { ssr: false });
const Partners = dynamic(() => import("./Landing/Partners"), { ssr: false });
const ExclusiveServices = dynamic(() => import("./Landing/ExclusiveServices"), { ssr: false });

const Page: React.FC = () => {
  return (
    <div className="w-full overflow-hidden bg-gray-50">
      <div className=" flex flex-col items-center  relative w-full">
        <header className="w-full relative                        ">
          <Header />
        </header>
        <main id="main-content" className="w-full">
          <Hero />
         
         <div id="Partners">
          <Partners />
         </div>
         
          <div id="Services">
            <ExclusiveServices />
          </div>
          
        
          <div id="Portfolio" >
            <Portfolio />
          </div>

          <div id="Testimonials">
            <Testimonials />
          </div>

          <div  className="w-full flex flex-col items-center">
            <Services />
          </div>
         
          <div id="Contact" className="w-full flex flex-row items-center mt-20 ">
            <Contact />
          </div>
        </main>
      </div>
      <footer className="w-full relative">
        <Footer />
      </footer>
    </div>
  );
};

export default Page;
