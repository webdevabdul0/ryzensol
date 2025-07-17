import React from "react";
import Image from "next/image";

interface AvatarProps {
  src: string;
  alt: string;
  fallback: string;
}

const Avatar: React.FC<AvatarProps> = ({ src, alt, fallback }) => (
  <div className="w-10 h-10 rounded-full border-2 border-white overflow-hidden bg-gray-200 flex items-center justify-center text-lg font-semibold text-gray-600">
    {src ? (
      <Image src={src} alt={alt} width={40} height={40} className="object-cover w-full h-full" />
    ) : (
      <span>{fallback}</span>
    )}
  </div>
);

interface AvatarGroupProps {
  avatars: { src: string; alt: string; fallback: string }[];
  max?: number;
}

export const AvatarGroup: React.FC<AvatarGroupProps> = ({ avatars, max = 3 }) => {
  const visible = avatars.slice(0, max);
  const extra = avatars.length - max;
  return (
    <div className="flex -space-x-4 items-center">
      {visible.map((a, i) => (
        <Avatar key={i} {...a} />
      ))}
      {extra > 0 && (
        <div className="w-8 h-8 md:w-10 md:h-10 rounded-full border-2 border-white bg-gray-300 flex items-center justify-center text-base font-semibold text-gray-700">
          +{extra}
        </div>
      )}
    </div>
  );
}; 