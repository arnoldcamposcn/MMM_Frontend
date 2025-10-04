import type { ReactNode } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay, Navigation } from "swiper/modules";

// CSS imports moved to main.tsx to avoid build issues

interface CarouselProps {
  slides: ReactNode[];
  options?: any; // <-- usar "any" evita conflictos de tipos entre versiones de Swiper
  modules?: any[]; // opcional: permitir pasar módulos desde fuera
  className?: string;
}

export const Carousel = ({
  slides,
  options = {},
  modules = [Pagination, Autoplay, Navigation],
  className,
}: CarouselProps) => {
  return (
    <Swiper modules={modules} {...options} className={className}>
      {slides.map((slide, index) => (
        <SwiperSlide key={index}>{slide}</SwiperSlide>
      ))}
    </Swiper>
  );
};








