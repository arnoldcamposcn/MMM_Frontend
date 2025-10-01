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
          <stop offset="0%" style={{ stopColor: "rgba(16, 185, 129, 0.8)" }} />
          <stop offset="100%" style={{ stopColor: "rgba(6, 182, 212, 0.4)" }} />
        </linearGradient>
      </defs>
      <path
        d="M12 2 L15.09 8.26 L22 9.27 L17 14.14 L18.18 21.02 L12 17.77 L5.82 21.02 L7 14.14 L2 9.27 L8.91 8.26 Z"
        className="fill-gradient"
      />
    </svg>
  );
};
