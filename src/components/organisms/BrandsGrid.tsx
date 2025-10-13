import { StarIcon } from "../atoms/StarIcon";

interface Brand {
  src: string;
  alt: string;
}

const logos: Brand[] = [
  { src: "/brands/BRAND-FLANDERS.svg", alt: "Brand 1" },
  { src: "/brands/BRAND-INITIMINING.svg", alt: "Brand 2" },
  { src: "/brands/BRAND-EDF.svg", alt: "Brand 3" },
  { src: "/brands/BRAND-MREL.svg", alt: "Brand 4" },
];

export const BrandsGrid = () => {
  return (
    <section className="py-4 md:py-6">
      <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
        {/* Caja de estrellas - aparece abajo en móvil, arriba en desktop */}
        <div className="relative mb-8 md:order-1 order-2">
          <div className="absolute inset-0 flex items-center" aria-hidden="true">
            <div className="w-full border-t border-white" />
          </div>
          <div className="relative flex justify-between items-center">
            <div className="w-12 h-1 bg-white" />
            <span className="bg-black px-4 text-base font-regular leading-6 text-white flex items-center gap-2 font-abeezee rounded-2xl">
              5.0
              <span className="flex items-center">
                {[...Array(5)].map((_, i) => (
                  <StarIcon key={i} className="h-5 w-5 fill-gradient" />
                ))}
              </span>
            </span>
          </div>
        </div>

        {/* Grid de logos - aparece arriba en móvil, abajo en desktop */}
        <div className="flex items-center justify-center md:flex-row flex-col gap-12 md:gap-16 md:order-2 order-1">
          {logos.map((logo, index) => (
            <img
              key={index}
              src={logo.src}
              alt={logo.alt}
              className="h-10 w-auto object-contain"
            />
          ))}
        </div>
      </div>
    </section>
  );
};