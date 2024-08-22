import React from 'react';
import styles from './Header.module.css';
import { FaTelegram } from 'react-icons/fa';
import { IoIosMail } from 'react-icons/io';

const Header: React.FC = (): JSX.Element => {
  return (
    <header className={styles['header']}>
      <h1 className={styles['logo']}>
        <span className={styles['news']}>NEWS</span>
        <span className={styles['app']}>APP</span>
      </h1>
      <nav className={styles['nav']}></nav>
      <div className={styles['socialMedia']}>
        <a href="https://t.me/DmitryKrymsky" target="_blank" rel="noreferrer">
          <FaTelegram />
        </a>
        <a
          href="mailto:dmitrijkrymskij6@gmail.com"
          target="_blank"
          rel="noreferrer"
        >
          <IoIosMail />
        </a>
      </div>
      <div className={styles['border']}></div>
    </header>
  );
};

export default Header;
