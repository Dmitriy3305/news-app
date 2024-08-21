import { SwiperItem } from '../types/swiperType';

export interface ISwiperComponentProps {
  items: SwiperItem[];
  onItemClick: (item: SwiperItem) => void;
}
