import * as React from "react";

import { LoaderFour } from "@/components/ui/loader";

export function Loader() {
  return (
    <div className="fixed inset-0 z-[9999] flex items-center justify-center bg-background">
      {/* Animated Loader Icon */}
     <div className="flex flex-col items-center">
    
      {/* Center Logo/Text */}


      <LoaderFour />



   
     </div>
    </div>
  );
}

export function LoaderFive({ text }: { text?: string }) {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-background">
      <div className="w-16 h-16 border-4 border-primary border-t-transparent rounded-full animate-spin mb-4"></div>
      
    </div>
  );
}
