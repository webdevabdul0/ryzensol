import React from "react";

interface GradientBlobProps {
  className?: string;
  style?: React.CSSProperties;
  colors?: string; // CSS gradient string
}

const GradientBlob: React.FC<GradientBlobProps> = ({
  className = "",
  style = {},
  colors = "linear-gradient(135deg, #44ff9a 0%, #44b0ff 25%, #8b44ff 50%, #ff6644 75%, #ebff70 100%)",
}) => (
  <div
    className={`absolute rounded-full blur-[150px] opacity-70 pointer-events-none ${className}`}
    style={{
      background: colors,
      ...style,
    }}
  />
);

export default GradientBlob; 