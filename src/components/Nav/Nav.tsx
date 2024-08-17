import React, { useState } from 'react';
import NavTop from './NavTop/NavTop';
import NavBottom from './NavBottom/NavBottom';
import { MenuType } from '../../types/menuType';
import { INavProps } from '../../interfaces/navProps';

const Nav: React.FC<INavProps> = ({ countries, languages }): JSX.Element => {
  const [activeMenu, setActiveMenu] = useState<MenuType>('COUNTRIES');

  const handleMouseEnter = (menu: MenuType) => {
    setActiveMenu(menu);
  };

  const handleMouseLeave = () => {
    setActiveMenu('COUNTRIES');
  };
  console.log(languages);

  return (
    <>
      <div onMouseLeave={handleMouseLeave}>
        <NavTop onMenuHover={handleMouseEnter} />
        <NavBottom
          activeMenu={activeMenu}
          countries={countries}
          languages={languages}
        />
      </div>
    </>
  );
};

export default Nav;
