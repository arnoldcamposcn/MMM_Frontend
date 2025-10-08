import React from 'react';

export type SocialPlatform = 'facebook' | 'twitter' | 'instagram' | 'linkedin' | 'youtube' | 'github';

interface SocialIconProps {
  platform: SocialPlatform;
  href: string;
  className?: string;
  size?: 'sm' | 'md' | 'lg';
}

const SocialIcon: React.FC<SocialIconProps> = ({
  platform,
  href,
  className = '',
  size = 'md'
}) => {
  const sizeClasses = {
    sm: 'w-4.1 h-4.1',
    md: 'w-6 h-6',
    lg: 'w-7 h-7'
  };

  // Mapeo de plataforma a nombre de archivo
  const iconPaths: Record<SocialPlatform, string> = {
    facebook: '/socialIcon/Facebook.svg',
    twitter: '/socialIcon/twitter.svg',
    instagram: '/socialIcon/Instagram.svg',
    linkedin: '/socialIcon/Linkedin.svg',
    youtube: '/socialIcon/youtube.svg', // Si no existe, puedes mantener el SVG inline o agregarlo
    github: '/socialIcon/github.svg', // Si no existe, puedes mantener el SVG inline o agregarlo
  };

  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={`text-gray-400 hover:text-white transition-colors duration-200 ${className}`}
      aria-label={`Ir a ${platform}`}
    >
      <img
        src={iconPaths[platform]}
        alt={`${platform} icon`}
        className={`${sizeClasses[size]} object-contain`}
      />
    </a>
  );
};

export default SocialIcon;
