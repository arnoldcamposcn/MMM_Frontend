// src/components/molecules/PortfolioCard.tsx
import React, { useState } from "react";
import { ImageModal } from "../organisms/ImageModal";

interface PortfolioCardProps {
  image: string;
  title: string;
}

export const PortfolioCard: React.FC<PortfolioCardProps> = ({ image, title }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
      <div className="flex flex-col items-center justify-center gap-4">
        <div 
            className="w-full max-w-[280px] md:max-w-[280px] mx-auto aspect-square overflow-hidden cursor-pointer"
            onClick={() => setIsModalOpen(true)}
        >
          <img
            src={image}
            alt={title}
            className="w-full h-full object-cover rounded-lg"
          />
        </div>
        <h1 className="text-base md:text-base font-medium uppercase">{title}</h1>
      </div>
      
      <ImageModal 
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        imageUrl={image}
      />
    </>
  );
};
