import React from 'react';
import background from "@/assets/cover/Background-Breadcrum.png";

interface BreadcrumbProps {
  title: React.ReactNode;
  path: string;
  // description: string;
}

export const Breadcrumb: React.FC<BreadcrumbProps> = ({ title, path }) => {
  return (
    <div className="relative w-full">
      {/* Imagen de fondo */}
      <img
        src={background}
        alt="background"
        className="w-full object-cover py-4"
      />

      {/* Contenido centrado en la imagen */}
      <div className="absolute inset-0 flex flex-col items-center justify-center text-white text-center px-4">
        <h1 className="text-2xl md:text-[28px] font-bold uppercase">{title}</h1>
        <span className="text-sm md:text-[15px] font-medium uppercase tracking-wider mt-2 md:mt-4">{path}</span>
        {/* <span className="text-sm md:text-base mt-2 md:mt-4 max-w-2xl">{description}</span> */}
      </div>
    </div>
  );
};
