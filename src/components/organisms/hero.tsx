import { useTranslation } from 'react-i18next';
import { Carousel } from "../libraries/carousel/Carousel";
import SendIcon from "@/assets/icons/arrow.svg";
import { Button } from "../atoms/Button";
import { motion, AnimatePresence } from 'framer-motion';
import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';


interface HeroSlide {
  subtitle: string;
  title: string;
  description: string;
  image: string;
  primaryButton: { label: string; icon?: string };
  secondaryButton?: { label: string };
}

// Componente para el loop de imágenes
const ImageLoop = () => {
  const images = [
    "/slider/merchandising.webp", 
    "/slider/servicio3d.webp",
    "/slider/produccion.webp",
  ];
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000); // Cambia cada 3 segundos

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative w-full h-full min-h-[380px] md:min-h-[500px] flex items-center justify-center">
      <AnimatePresence mode="wait">
        <motion.img
          key={currentImageIndex}
          src={images[currentImageIndex]}
          alt={`Hero image ${currentImageIndex + 1}`}
          className="max-w-full max-h-full object-contain"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 1.1 }}
          transition={{ duration: 0.8, ease: "easeInOut" }}
        />
      </AnimatePresence>
    </div>
  );
};

export const HeroSection = () => {
  const { t } = useTranslation();
  const navigate = useNavigate();
  const heroSlides: HeroSlide[] = [
    {
      subtitle: t("hero.slides.0.subtitle"),
      title: t("hero.slides.0.title"),
      description: t("hero.slides.0.description"),
      image: "",
      primaryButton: { label: t("hero.slides.0.primaryButton"), icon: SendIcon },
      secondaryButton: { label: t("hero.slides.0.secondaryButton") },
    },
  ];
  const slides = heroSlides.map((slide, index) => (
    <div
      key={index}
      className="flex items-center justify-center h-full"
    >
      <div className="grid grid-cols-1 md:grid-cols-[5.4fr_5fr] gap-4 md:gap-8 items-center w-full max-w-7xl px-0 md:px-0 min-h-[500px] md:min-h-[600px]">
        {/* Imagen - Primera en móvil */}
        <div className="flex justify-center order-first md:order-last px-4 md:px-0 h-full">
          <ImageLoop />
        </div>

        {/* Contenido de texto - Segundo en móvil */}
        <div className="flex flex-col gap-3 md:gap-5 text-white pt-4 md:pt-8 text-center md:text-left">
          <span className="text-sm md:text-base font-bold uppercase">{slide.subtitle}</span>
          <h1 className="text-4xl md:text-[85px] leading-tight md:leading-[90px] font-bold uppercase">{slide.title}</h1>
          <p className="text-sm md:text-base pb-2">{slide.description}</p>

          <div className="flex flex-col sm:flex-row md:flex-row gap-3 md:gap-[14px] items-center md:items-start">
            
            <Button variant="gradient" className="w-full sm:w-auto" onClick={() => navigate("/contacto")}>
              {slide.primaryButton.label}
              {slide.primaryButton.icon && (
                <img
                  src={slide.primaryButton.icon}
                  alt={slide.primaryButton.label}
                  className="w-3 h-3"
                />
              )}
            </Button>
            

            {slide.secondaryButton && (
              <Button variant="outline" className="w-full sm:w-auto" onClick={() => navigate("/servicios")}>
                {slide.secondaryButton.label}
              </Button>
            )}
          </div>
        </div>
      </div>
    </div>
  ));

  return (
    <Carousel
      slides={slides}
      options={{
        loop: true,
        pagination: { clickable: true },
        autoplay: { delay: 5000 },
      }}
      className="w-full h-full"
    />
  );
};
