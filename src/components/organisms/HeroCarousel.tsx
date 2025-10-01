import { useTranslation } from 'react-i18next';
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

export const HeroCarousel = () => {
  const { t } = useTranslation();
  
  const heroSlides: HeroSlide[] = [
    {
      subtitle: t("hero.slides.0.subtitle"),
      title: t("hero.slides.0.title"),
      description: t("hero.slides.0.description"),
      image: servicio3dImg,
      primaryButton: { label: t("hero.slides.0.primaryButton"), icon: SendIcon },
      secondaryButton: { label: t("hero.slides.0.secondaryButton") },
    },
  ];
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
