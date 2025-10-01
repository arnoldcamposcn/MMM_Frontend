import React from "react";
// import background from "@/assets/cover/Background-Breadcrum.png";
import backgroundCTA from "@/assets/cover/background-cta.png";
import { Button } from "../atoms/Button";
import SendIcon from "@/assets/icons/arrow.svg";

interface InformativeBoxProps {
  title: React.ReactNode;
  description: string;
  additionalInfo: string;
  primaryButton: { label: string };
  secondaryButton?: { label: string };
}

export const InformativeBox: React.FC<InformativeBoxProps> = ({
  title,
  additionalInfo,
  description,
  primaryButton,
  secondaryButton,
}) => {
  return (
    <div className="relative w-full">
      {/* Imagen de fondo */}
      <img src={backgroundCTA} alt="background" className="w-full object-cover" />

      {/* Contenido centrado en la imagen */}
      <div className="absolute inset-0 flex flex-col items-center justify-center text-white text-center px-4">
        <div className="flex flex-col justify-center items-center gap-6 px-40">

          <div className="flex flex-col gap-6">
          <h1 className="text-3xl md:text-3xl font-bold ">{title}</h1>
        <p className="text-paragraph">{description}</p>
        <span className="text-base uppercase font-bold tracking-wider text-gradient">
          {additionalInfo}
        </span>
          </div>
        

        <div className="flex flex-row gap-4">
          {/* Botón principal SIEMPRE con icono */}
          <Button variant="gradient">
            <span className="flex items-center gap-2">
              {primaryButton.label}
              <img src={SendIcon} alt="icono enviar" className="w-3 h-3" />
            </span>
          </Button>

          {/* Botón secundario opcional */}
          {secondaryButton && (
            <Button variant="outline">{secondaryButton.label}</Button>
          )}

        </div>
        
        </div>
      </div>
    </div>
  );
};
