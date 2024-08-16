import React from "react";
import styles from "./navBottom.module.css";
import { INavBottomProps } from "../../../interfaces/navBottomProps";
import { MenuType } from "../../../types/menuType";

const menuItems: Record<Exclude<MenuType, null>, string[]> = {
  COUNTRIES: ["Country 1", "Country 2", "Country 3"],
  CATEGORIES: ["Category 1", "Category 2", "Category 3"],
  LANGUAGES: ["Tag 1", "Tag 2", "Tag 3"],
};

const NavBottom: React.FC<INavBottomProps> = ({ activeMenu }): JSX.Element => {
  return (
    <nav className={styles["nav"]}>
      <ul className={styles["menu"]}>
        {activeMenu &&
          menuItems[activeMenu]?.map((item: string, index: number) => (
            <li key={index} className={styles["item"]}>
              {item}
            </li>
          ))}
      </ul>
    </nav>
  );
};

export default NavBottom;
