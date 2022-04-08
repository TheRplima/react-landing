// import Swiper core and required modules
import { Mousewheel, Navigation, Pagination, A11y } from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

// import "./Style.scss";
import { Title } from "../Title/Index";

type TestimonialCardProps = {
  avatar: string | boolean;
  name: string | boolean;
  text: string | boolean;
}

export type TestimonialsProps = {
  model: string;
  title: string | boolean;
  subtitle: string | boolean;
  testimonials: TestimonialCardProps[] | boolean ;
};

export function Testimonials({ model, title, subtitle, testimonials }: TestimonialsProps) {
  return (
    <> 
      <header>
        {typeof(title) !== "boolean" && (
          <Title size={2}>{title}</Title>
        )}
        {typeof(subtitle) !== "boolean" && (
          <p className="subtitle">{subtitle}</p>
        )}
      </header>
      {typeof(testimonials) !== "boolean" && (
        <Swiper
          // install Swiper modules
          modules={[Mousewheel, Navigation, Pagination, A11y]}
          spaceBetween={10}
          slidesPerView={2}
          mousewheel={true}
          navigation
          pagination={{ clickable: true }}
          breakpoints={{
            "@0.00": {
              slidesPerView: 1,
              spaceBetween: 10,
            },
            "@0.75": {
              slidesPerView: 2,
              spaceBetween: 20,
            },
            "@1.00": {
              slidesPerView: 3,
              spaceBetween: 40,
            }
          }}
        >
          {testimonials.map((testimonial:TestimonialCardProps, index) => (
            <SwiperSlide key={index}>
              <blockquote>
                {typeof(testimonial.text) !== "boolean" && (
                  <p>
                    <span>&ldquo;</span>
                    {testimonial.text}
                  </p>
                )}
                {typeof(testimonial.name) !== "boolean" && typeof(testimonial.avatar) !== "boolean" && (
                  <cite>
                      <img
                      src={testimonial.avatar}
                      alt={`Foto de ${testimonial.name}`}
                      />
                      {testimonial.name}
                  </cite>
                )}
              </blockquote>
            </SwiperSlide>
          ))}
        </Swiper>
      )}      
    </>
  );
}
