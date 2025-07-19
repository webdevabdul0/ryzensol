import React from "react";
import Header from "./Layout/Header";
import Hero from "./Landing/Hero";
import Services from "./Landing/Services";
import Footer from "./Layout/Footer";
import Testimonials from "./Landing/Testimonials";
import Contact from "./Landing/Contact";
import Portfolio from "./Landing/Portfolio";
import Partners from "./Landing/Partners";
import ExclusiveServices from "./Landing/ExclusiveServices";
const Page: React.FC = () => {
  return (
    <div className="w-full overflow-hidden bg-gray-50">
      <div className=" flex flex-col items-center  relative w-full">
        <header className="w-full relative                        ">
          <Header />
        </header>
        <main id="main-content" className="w-full">
          <Hero />
          <section id="Partners">
            <Partners />
          </section>
          <section id="Services">
            <ExclusiveServices />
          </section>
          <section id="Portfolio">
            <Portfolio />
          </section>
          <section id="Testimonials">
            <Testimonials />
          </section>
          <section className="w-full flex flex-col items-center">
            <Services />
          </section>
          <section id="Contact" className="w-full flex flex-row items-center mt-20 ">
            <Contact />
          </section>
        </main>
      </div>
      <footer className="w-full relative">
        <Footer />
      </footer>
    </div>
  );
};

export default Page;
