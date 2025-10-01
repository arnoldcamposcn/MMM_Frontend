import type { ReactNode } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay, Navigation } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

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








