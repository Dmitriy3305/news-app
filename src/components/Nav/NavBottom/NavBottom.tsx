import React from 'react';
import styles from './navBottom.module.css';
import { INavBottomProps } from '../../../interfaces/INavBottomProps';
import { MenuType } from '../../../types/menuType';
import { categories } from '../../../const/categories';

const NavBottom: React.FC<INavBottomProps> = ({
  activeMenu,
  countries,
  languages,
}): JSX.Element => {
  const menuItems: Record<Exclude<MenuType, null>, string[]> = {
    COUNTRIES: countries,
    CATEGORIES: categories,
    LANGUAGES: languages,
  };

  return (
    <nav className={styles['nav']}>
      <ul className={styles['menu']}>
        {activeMenu &&
          menuItems[activeMenu]?.map((item: string, index: number) => (
            <li key={index} className={styles['item']}>
              {item}
            </li>
          ))}
      </ul>
    </nav>
  );
};

export default NavBottom;
