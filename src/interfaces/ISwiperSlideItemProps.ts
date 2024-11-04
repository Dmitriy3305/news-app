import ISources from './ISources';

export interface ISwiperSlideItemProps {
  item: ISources | string;
  onClick: () => void;
}
