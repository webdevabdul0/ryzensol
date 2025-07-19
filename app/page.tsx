import React from "react";
import Header from "./Layout/Header";
import Services from "./Landing/Services";
import Footer from "./Layout/Footer";
import Testimonials from "./Landing/Testimonials";
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
         
       
        </main>
      </div>
      <footer className="w-full relative">
        <Footer />
      </footer>
    </div>
  );
};

export default Page;
