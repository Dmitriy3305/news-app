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
      slidesPerView={3}
      navigation
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
