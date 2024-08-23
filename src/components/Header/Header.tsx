import React from 'react';
import styles from './Header.module.css';
import Logo from '../Logo/Logo';
import { FaTelegram } from 'react-icons/fa';
import { IoIosMail } from 'react-icons/io';

const Header: React.FC = (): JSX.Element => {
  return (
    <header className={styles['header']}>
      <Logo />
      <div className={styles['contacts']}>
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
    </header>
  );
};

export default Header;
