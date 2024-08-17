import React from "react";
import styles from "./Header.module.css";

const Header: React.FC = (): JSX.Element => {
  return (
    <header className={styles["header"]}>
      <h1 className={styles["logo"]}>
        <span className={styles["news"]}>NEWS</span>
        <span className={styles["app"]}>APP</span>
      </h1>
      <div className={styles["border"]}></div>
    </header>
  );
};

export default Header;