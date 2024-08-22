import React from 'react';
import styles from './navTop.module.css';
import Search from '../../Search/Search';
import { INavTopProps } from '../../../interfaces/INavTopProps';
import { navTopItems } from '../../../const/navTopItems';
import { MenuType } from '../../../types/menuType';

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
