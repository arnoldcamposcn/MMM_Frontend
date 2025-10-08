// src/components/molecules/PortfolioCard.tsx
import React, { useState } from "react";
import { ImageModal } from "../organisms/ImageModal";

interface PortfolioCardProps {
  image: string;
  title: string;
  description?: string;
}

export const PortfolioCard: React.FC<PortfolioCardProps> = ({ image, title, description }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
      <div className="flex flex-col h-full">
        {/* Contenedor de imagen con altura fija y overlay hover */}
        <div 
            className="w-full max-w-[280px] md:max-w-[290px] mx-auto aspect-square overflow-hidden cursor-pointer flex-shrink-0 relative group"
            onClick={() => setIsModalOpen(true)}
        >
          <img
            src={image}
            alt={title}
            className="w-full h-full object-cover rounded-sm transition-transform duration-300 group-hover:scale-105"
          />
          
          {/* Overlay que aparece en hover */}
          {description && (
            <div className="absolute inset-0 bg-white opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center p-4 rounded-sm">
              <p className="text-black text-sm text-center leading-relaxed font-medium normal-case">
                {description}
              </p>
            </div>
          )}
        </div>
        
        {/* Contenedor de texto flexible que se expande hacia abajo */}
        <div className="flex-1 flex flex-col justify-start pt-4">
          <h1 className="text-[15px] md:text-[15px] font-medium normal-case text-center leading-tight">{title}</h1>
          {/* <p className="text-sm md:text-sm font-normal whitespace-pre-wrap mt-2">{description}</p> */}
        </div>
      </div>
      
      <ImageModal 
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        imageUrl={image}
      />
    </>
  );
};
