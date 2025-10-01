import { Carousel } from "../libraries/carousel/Carousel"

interface CarouselSliderProps {
  image: string
}

const carouselSlides: CarouselSliderProps[] = [
  {
    image: "https://metaforavisual.com/wp-content/uploads/2019/03/postproducci%C3%B3n.jpg",
  }
]

export const CarouselSlider = () => {
  const slides = carouselSlides.map((slide, index) => (
    <div key={index} className="w-full h-full">
      <img src={slide.image} alt={`Slide ${index + 1}`} className="w-full h-full object-cover rounded-2xl" />
    </div>
  ))
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
  )
}






