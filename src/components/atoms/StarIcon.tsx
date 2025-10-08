// src/components/atoms/StarIcon.tsx
import React from "react";

interface StarIconProps extends React.SVGProps<SVGSVGElement> {
  className?: string;
}

export const StarIcon: React.FC<StarIconProps> = ({ className, ...props }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="currentColor"
      className={className}
      {...props}
    >
      <defs>
      <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="0%">
      <stop offset="0%" style={{ stopColor: "#FFF8DC" }} /> {/* Blanco dorado */}
      <stop offset="25%" style={{ stopColor: "#FFD700" }} /> {/* Oro clásico */}
      <stop offset="75%" style={{ stopColor: "#FFA500" }} /> {/* Naranja-dorado */}
      <stop offset="100%" style={{ stopColor: "#B8860B" }} /> {/* Oro oscuro */}
    </linearGradient>


      </defs>
      <path
        d="M12 2 L15.09 8.26 L22 9.27 L17 14.14 L18.18 21.02 L12 17.77 L5.82 21.02 L7 14.14 L2 9.27 L8.91 8.26 Z"
        className="fill-gradient"
      />
    </svg>
  );
};
