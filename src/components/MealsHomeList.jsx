import { MealsItem } from './MealsItem';
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Navigation, Pagination } from 'swiper';
import 'swiper/swiper-bundle.css';

SwiperCore.use([Navigation, Pagination]);

function MealsHomeList({ meals = [] }) {
  return (
    <Swiper
      spaceBetween={50}
      slidesPerView={1}
      navigation
      pagination
      onInit
      onSlideChange
      breakpoints={{
        300: { slidesPerView: 1 },
        550: { slidesPerView: 2 },
        1000: { slidesPerView: 3 },
      }}
    >
      <div className='list'>
        {meals.map((el) => (
          <SwiperSlide>
            <MealsItem key={el.idMeal} {...el} />
          </SwiperSlide>
        ))}
      </div>
    </Swiper>
  );
}

export { MealsHomeList };
