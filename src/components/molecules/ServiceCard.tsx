import React, { useState } from 'react';
import iconService from '@/assets/icons/icon-more.svg';
import { Link } from 'react-router-dom';

interface SubService {
  title: string;
  slug: string;
}

interface ServiceCardProps {
  title: string;
  subServices: SubService[];
}

export const ServiceCard: React.FC<ServiceCardProps> = ({ title, subServices }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="flex flex-col">
      {/* Card principal */}
      <div
        className={`flex flex-col justify-between p-8 bg-white min-h-[200px] transition-all duration-300 ease-in-out cursor-pointer z-10 ${isOpen ? 'rounded-t-2xl' : 'rounded-2xl'}`}
        onClick={() => setIsOpen(!isOpen)}
      >
        <div className="service-title-wrapper">
          <h1 className="text-black text-2xl font-semibold uppercase">
            {title}
          </h1>
        </div>
        <span className="text-black font-regular text-xl flex items-center gap-2 mt-auto pt-4">
          <img
            src={iconService}
            alt={isOpen ? "Ver menos" : "Ver más"}
            className={`w-9 h-9 transition-transform duration-300 ease-in-out ${isOpen ? 'rotate-180' : ''}`}
          />
          {isOpen ? "Ver menos" : "Ver más"}
        </span>
      </div>

      {/* Dropdown "lengua" */}
      <div
        className={`transition-all duration-500 ease-in-out overflow-hidden ${isOpen ? 'max-h-96' : 'max-h-0'}`}
      >
        <div className="bg-white border-t border-gray-200 p-8 rounded-b-2xl">
          <ul className="space-y-2 list-disc list-inside">
            {subServices.map((sub, index) => (
              <Link to={`/servicios/${sub.slug}`} key={index}>
                <li className="text-gray-700">{sub.title}</li>
              </Link>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};
