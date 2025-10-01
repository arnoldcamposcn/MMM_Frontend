import { Carousel } from "../libraries/carousel/Carousel";
import SendIcon from "@/assets/icons/arrow.svg";
import servicio3dImg from "@/assets/services/servicio3d.png";
import { BrandsGrid } from "./BrandsGrid";


interface HeroSlide {
  subtitle: string;
  title: string;
  description: string;
  image: string;
  primaryButton: { label: string; icon?: string };
  secondaryButton?: { label: string };
}

const heroSlides: HeroSlide[] = [
  {
    subtitle: "Creatividad única",
    title: "Minería con Visión",
    description:
      "Creamos campañas, contenidos y experiencias para minería. Audiovisual, marketing, eventos, gráfica, VR y data — con visión técnica y foco en resultados.",
    image: servicio3dImg,
    primaryButton: { label: "Cotiza tu proyecto", icon: SendIcon },
    secondaryButton: { label: "Explorar servicios" },
  },
 
];

export const HeroCarousel = () => {
  const slides = heroSlides.map((slide, index) => (
    <div
      key={index}
      className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center px-0 ">
      <div className="flex flex-col gap-6 text-white">
        <span className="text-lg font-bold uppercase">{slide.subtitle}</span>
        <h1 className="text-[88px] leading-[90px] font-bold uppercase">{slide.title}</h1>
        <p className="text-base pb-2">{slide.description}</p>

        <div className="flex gap-[14px]">
          <button className="btn-gradient text-[14px] font-medium flex items-center gap-2">
            {slide.primaryButton.label}
            {slide.primaryButton.icon && (
              <img
                src={slide.primaryButton.icon}
                alt={slide.primaryButton.label}
                className="w-3 h-3"
              />
            )}
          </button>

          {slide.secondaryButton && (
            <button className="btn-outline text-[14px] font-medium">
              {slide.secondaryButton.label}
            </button>
          )}
        </div>
      </div>

      {/* Columna derecha */}
      <div className="flex justify-center">
        <img src={slide.image} alt={slide.title} className="w-full h-full" />
      </div>
    </div>
  ));

  return (
    <div>
      <Carousel
        slides={slides}
        options={{
          loop: true,
          pagination: { clickable: true },
          autoplay: { delay: 5000 },
        }}
        className="w-full h-screen"
      />
      <BrandsGrid />
    </div>
  );
};
