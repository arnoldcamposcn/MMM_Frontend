import iconflanders from "@/assets/brands/flanders-logo_bN 1.png";
import iconIMSS from "@/assets/brands/logotipo_IMSS.png";
import iconEDF from "@/assets/brands/edf-logo BN.png";
import iconMREL from "@/assets/brands/MREL.png";
import { StarIcon } from "../atoms/StarIcon";

interface Brand {
    src: string;
    alt: string;
  }
  
  const logos: Brand[] = [
    { src: iconflanders, alt: "Brand 1" },
    { src: iconIMSS, alt: "Brand 2" },
    { src: iconEDF, alt: "Brand 3" },
    { src: iconMREL, alt: "Brand 4" },
  ];
  
  export const BrandsGrid = () => {
    return (
      <section className="py-6">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <div className="relative mb-8">
            <div className="absolute inset-0 flex items-center" aria-hidden="true">
              <div className="w-full border-t border-white" />
            </div>
            <div className="relative flex justify-between items-center">
              <div className="w-12 h-1 bg-white" />
              <span className="bg-gray-900 px-4 text-base font-regular leading-6 text-white flex items-center gap-2 font-abeezee">
                5.0
                <span className="flex items-center">
                  {[...Array(5)].map((_, i) => (
                    <StarIcon key={i} className="h-5 w-5 fill-gradient" />
                  ))}
                </span>
              </span>
            </div>
          </div>
    
          {/* Grid de logos */}
          <div className="flex items-center justify-center gap-16">
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
  