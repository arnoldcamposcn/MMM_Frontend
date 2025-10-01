import { useTranslation } from 'react-i18next';
import { Carousel } from "../libraries/carousel/Carousel";
import SendIcon from "@/assets/icons/arrow.svg";
import servicio3dImg from "@/assets/services/servicio3d.png";
import { Button } from "../atoms/Button";


interface HeroSlide {
  subtitle: string;
  title: string;
  description: string;
  image: string;
  primaryButton: { label: string; icon?: string };
  secondaryButton?: { label: string };
}

export const HeroSection = () => {
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
      className="flex items-center justify-center h-full"
    >
      <div className="grid grid-cols-1 md:grid-cols-[5.4fr_5fr] gap-8 items-center w-full max-w-7xl px-0">
        <div className="flex flex-col gap-5 text-white pt-8">
          <span className="text-base font-bold uppercase">{slide.subtitle}</span>
          <h1 className="text-[85px] leading-[90px] font-bold uppercase">{slide.title}</h1>
          <p className="text-base pb-2">{slide.description}</p>

          <div className="flex gap-[14px]">
            <Button variant="gradient">
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
              <Button variant="outline">
                {slide.secondaryButton.label}
              </Button>
            )}
          </div>
        </div>

        {/* Columna derecha */}
        <div className="flex justify-center">
          <img src={slide.image} alt={slide.title} className="w-auto h-auto" />
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
