import Container from '../layouts/Container';
import left from '@/assets/icons/arrow-left.png';
import right from '@/assets/icons/arrow-right.png';
import TestimonialCard from '../molecules/TestimonialCard';
import { Carousel } from '../libraries/carousel/Carousel';
import { useFetch } from '../../hooks/useFetch';
import { getTestimonials } from '../../services/articles/article.service';
import type { testimonials } from '../../schema/mmm/types';
import { type TestimonialCardType } from '../../data/testimonials.data';

const TestimonialsSection = () => {
  const { data, loading, error } = useFetch<testimonials[]>(getTestimonials);

  const cardTypes: TestimonialCardType[] = ['dark', 'gradient', 'light'];

  if (loading) return <p>Cargando testimonios...</p>;
  if (error) return <p>Hubo un error al cargar los testimonios.</p>;
  return (
    <section>
      <Container>
        <div className="flex flex-col gap-6 md:gap-12 px-6 md:px-12">
          <div className="flex flex-col md:flex-col lg:flex-row items-center justify-between gap-6 md:gap-14">
            <div>
              <h1 className="text-2xl md:text-3xl font-bold text-white text-center md:text-left">TESTIMONIOS DE <br />
                NUESTROS CLIENTES</h1>
            </div>
            <div className="flex flex-row items-center justify-end gap-4">
              <div><img src={left} alt="testimonio" className="testimonial-prev-btn cursor-pointer w-h-16 h-16" /></div>
              <div><img src={right} alt="testimonio" className="testimonial-next-btn cursor-pointer w-h-16 h-16" /></div>
            </div>
          </div>

            <div>
                <div className="items-stretch justify-center gap-6">
                <Carousel slides={data?.map((testimonial, index) => (
                <TestimonialCard key={index} data={{
                  category: testimonial.company_name,
                  text: testimonial.comment,
                  author: {
                    name: testimonial.manager_name,
                    title: testimonial.manager_position,
                    avatar: testimonial.manager_image
                  },
                  type: cardTypes[index % cardTypes.length]
                }} />
                )) || []} 
                options={{
                  loop: true,
                  slidesPerView: 1,
                  spaceBetween: 16,
                  navigation: {
                    nextEl: '.testimonial-next-btn',
                    prevEl: '.testimonial-prev-btn',
                  },
                  autoplay: { delay: 5000 },
                  breakpoints: {
                    768: {
                      slidesPerView: 2,
                      spaceBetween: 18,
                    },
                    1024: {
                      slidesPerView: 3,
                      spaceBetween: 18,
                    },
                  },
                }}
                className="w-full h-full" />
                </div>
            </div>
        </div>
       
      </Container>
    </section>
  );
};

export default TestimonialsSection;
