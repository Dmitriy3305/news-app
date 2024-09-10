import React from 'react';
import styles from './navBottom.module.css';
import { INavBottomProps } from '@/interfaces/INavBottomProps';
import { MenuType } from '@/types/menuType';
import { useAppDispatch, useAppSelector } from '@/store/store';
import { selectCountries } from '@/store/slices/countriesSlice';
import { selectLanguages } from '@/store/slices/languagesSlice';
import { selectCategories } from '@/store/slices/categoriesSlice';
import SwiperComponent from '../Swiper/swiperComponent/swiperComponent';
import { handleClickOnNav } from '@/utils/handleClickOnNav';

const NavBottom: React.FC<INavBottomProps> = ({ activeMenu }): JSX.Element => {
  const dispatch = useAppDispatch();
  const countries = useAppSelector(selectCountries);
  const languages = useAppSelector(selectLanguages);
  const categories = useAppSelector(selectCategories);
  const menuItems: Record<Exclude<MenuType, null>, string[]> = {
    COUNTRIES: countries,
    CATEGORIES: categories,
    LANGUAGES: languages,
  };

  return (
    <nav className={styles['nav']}>
      {activeMenu && (
        <SwiperComponent
          items={menuItems[activeMenu] || []}
          onItemClick={(item) =>
            handleClickOnNav(dispatch, activeMenu, item.toString())
          }
        />
      )}
    </nav>
  );
};

export default NavBottom;
