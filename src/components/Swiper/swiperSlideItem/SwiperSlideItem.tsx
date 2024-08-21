import React from 'react';
import styles from './swiperSlideItem.module.css';
import { ISwiperSlideItemProps } from '../../../interfaces/ISwiperSlideItemProps';

const SwiperSlideItem: React.FC<ISwiperSlideItemProps> = ({
  item,
  onClick,
}) => {
  return (
    <div className={styles['swiper-slide']} onClick={onClick}>
      {typeof item === 'string' ? (
        <a className={styles['item']}>{item}</a>
      ) : (
        <div>
          <h2 className={styles['description']}>{item.description}</h2>
          <p className={styles['name']}>{item.name}</p>
        </div>
      )}
    </div>
  );
};

export default SwiperSlideItem;
