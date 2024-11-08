import { MenuType } from '@/types/menuType';
import React, { useState } from 'react';
import NavTop from '../NavTop/NavTop';
import NavBottom from '../NavBottom/NavBottom';
import styles from './nav.module.css';

const Nav: React.FC = (): JSX.Element => {
  const [activeMenu, setActiveMenu] = useState<MenuType>('COUNTRIES');

  const handleMouseEnter = (menu: MenuType) => {
    setActiveMenu(menu);
  };

  const handleMouseLeave = () => {
    setActiveMenu('COUNTRIES');
  };

  return (
    <>
      <div className={styles['nav-container']} onMouseLeave={handleMouseLeave}>
        <NavTop onMenuHover={handleMouseEnter} activeMenu={activeMenu} />
        <NavBottom activeMenu={activeMenu} />
      </div>
    </>
  );
};

export default Nav;
