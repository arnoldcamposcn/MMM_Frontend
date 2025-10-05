import { getInformationService } from "../../services/articles/article.service"
import type { informationService } from "../../schema/mmm/types";
import { useFetch } from "../../hooks/useFetch"
import { Carousel } from "../libraries/carousel/Carousel"

interface CarouselSliderProps {
  slug: string;
}

export const CarouselSlider = ({ slug }: CarouselSliderProps) => {
  const { data, loading, error } = useFetch<informationService>(
    () => getInformationService(slug),
    [slug]
  );

  if (loading) {
    return (
      <div className="relative w-full h-[420px] pb-10 flex items-center justify-center">
        <div className="text-white">Cargando media...</div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="relative w-full h-[420px] pb-10 flex items-center justify-center">
        <div className="text-white">Error al cargar media</div>
      </div>
    );
  }

  if (!data) {
    return (
      <div className="relative w-full h-[420px] pb-10 flex items-center justify-center">
        <div className="text-white">No hay datos disponibles</div>
      </div>
    );
  }

  if (!data.media || data.media.length === 0) {
    return (
      <div className="relative w-full h-[420px] pb-10 flex items-center justify-center">
        <div className="text-white">No hay media disponible</div>
      </div>
    );
  }

  console.log('Media data:', data.media); // Debug log

  const slides = data.media
    .sort((a, b) => a.order - b.order)
    .map((media, index) => {
      console.log('Processing media:', media); // Debug log
      return (
        <div key={index} className="w-full h-full">
          {media.media_type === "video" ? (
            <video 
              src={media.file} 
              controls 
              className="w-full h-full object-cover rounded-2xl"
              poster={data.image}
            >
              Tu navegador no soporta videos.
            </video>
          ) : (
            <img 
              src={media.file} 
              alt={`Media ${index + 1}`} 
              className="w-full h-full object-cover rounded-2xl" 
              onError={(e) => {
                console.error('Error loading image:', media.file);
                e.currentTarget.style.display = 'none';
              }}
              onLoad={() => {
                console.log('Image loaded successfully:', media.file);
              }}
            />
          )}
        </div>
      );
    });

  return (
    <div className="relative w-full h-[420px] pb-10">
      <Carousel 
        slides={slides}
        options={{
          loop: true,
          pagination: { clickable: true },
          autoplay: { delay: 5000 },
        }}
        className="w-full h-full"
      />
    </div>
  );
};