import React from 'react';
import LogoImg from '@/assets/logo/logo.png';
import { useNavigate } from 'react-router-dom';

interface LogoProps {
  className?: string;
}

const Logo: React.FC<LogoProps> = ({ className = '' }) => {
  const navigate = useNavigate();
  return (
    <div className={`flex items-center ${className}`}>
      <img src={LogoImg} alt="Logo" className="w-auto h-9 lg:h-11 cursor-pointer" onClick={() => navigate('/')} />
    </div>
  );
};

export default Logo;
