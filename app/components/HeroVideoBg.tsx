import React from "react";

interface HeroVideoBgProps {
  videoSrc?: string;
  posterSrc?: string;
  className?: string;
}

const HeroVideoBg: React.FC<HeroVideoBgProps> = ({ videoSrc = "/Hero/video/2.mp4", posterSrc = "/Hero/project (1).jpg", className = "" }) => {
  return (
    <video
      key={videoSrc}
      className={`absolute inset-0 w-full h-full object-cover z-0 ${className}`}
      src={videoSrc}
      autoPlay
      loop
      muted
      playsInline
      preload="auto"
      poster={posterSrc}
      aria-hidden="true"
    />
  );
};

export default HeroVideoBg; 