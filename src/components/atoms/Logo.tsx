import React from 'react';
import LogoImg from '@/assets/logo/logo.png';
interface LogoProps {
  className?: string;
}

const Logo: React.FC<LogoProps> = ({ className = '' }) => {
  return (
    <div className={`flex items-center ${className}`}>
      <img src={LogoImg} alt="Logo" className="w-auto h-9 lg:h-11" />
    </div>
  );
};

export default Logo;
