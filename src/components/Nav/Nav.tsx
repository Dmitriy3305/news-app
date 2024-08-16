import React, { useState } from "react";
import NavTop from "./NavTop/NavTop";
import NavBottom from "./NawBottom/NavBottom";
import { MenuType } from "../../types/menuType";

const Nav: React.FC = (): JSX.Element => {
  const [activeMenu, setActiveMenu] = useState<MenuType>("COUNTRIES");

  const handleMouseEnter = (menu: MenuType) => {
    setActiveMenu(menu);
  };

  const handleMouseLeave = () => {
    setActiveMenu("COUNTRIES");
  };

  return (
    <>
      <div onMouseLeave={handleMouseLeave}>
        <NavTop onMenuHover={handleMouseEnter} />
        <NavBottom activeMenu={activeMenu} />
      </div>
    </>
  );
};

export default Nav;
