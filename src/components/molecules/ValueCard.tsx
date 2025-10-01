import React from 'react';

interface ValueCardProps {
  icon: string;
  title: string;
  description: string;
}

const ValueCard: React.FC<ValueCardProps> = ({ icon, title, description }) => {
  return (
    <div className="flex flex-col gap-1 justify-center text-center rounded-xl px-8 py-6 gradient-card">
      <div className="flex flex-col gap-3 justify-center">
      <img src={icon} alt={title} className="w-9 h-9 mx-auto" />
      <h1 className="text-lg font-semibold text-white ">{title}</h1>
      </div>

      <div>
      <p className="text-white">{description}</p>
      </div>
    </div>
  );
};

export default ValueCard;
