import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import SwiperSlideItem from '../swiperSlideItem/SwiperSlideItem';
import 'swiper/css/bundle';
import styles from './swiperComponent.module.css';
import { ISwiperComponentProps } from '../../../interfaces/ISwiperComponentProps';

const SwiperComponent: React.FC<ISwiperComponentProps> = ({
  items,
  onItemClick,
}) => {
  return (
    <Swiper
      className={styles.swiper}
      modules={[Navigation]}
      navigation
      breakpoints={{
        320: {
          slidesPerView: 1,
        },
        640: {
          slidesPerView: 2,
        },
        768: {
          slidesPerView: 3,
        },
        1024: {
          slidesPerView: 4,
        },
        1440: {
          slidesPerView: 5,
        },
      }}
    >
      {items.map((item, index) => (
        <SwiperSlide key={index}>
          <SwiperSlideItem item={item} onClick={() => onItemClick(item)} />
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default SwiperComponent;
