import React from 'react';
import styles from './navTop.module.css';
import { INavTopProps } from '@/interfaces/INavTopProps';
import { MenuType } from '@/types/menuType';
import Search from '../Search/Search';
import { navTopItems } from '@/const/navTopItems';

const NavTop: React.FC<INavTopProps & { activeMenu: MenuType }> = ({
  onMenuHover,
  activeMenu,
}): JSX.Element => {
  return (
    <nav className={styles['nav']}>
      <ul className={styles['menu']}>
        {navTopItems.map((item, index) => (
          <li
            key={index}
            className={`${styles['item']} ${activeMenu === item ? styles['active'] : ''}`}
            onMouseEnter={() => onMenuHover(item as MenuType)}
          >
            {item}
          </li>
        ))}
      </ul>
      <Search />
    </nav>
  );
};

export default NavTop;
