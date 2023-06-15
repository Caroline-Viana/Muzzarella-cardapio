import React from 'react';
import styles from './Header.module.scss';
import { Outlet } from 'react-router-dom';

function Header() {
  return (
    <>
      <header className={styles.header}>
        <h2 className={styles.header__text}>
            A casa com a melhor massa de São Paulo!
        </h2>
      </header>
      <div>
        <Outlet/>
      </div>
    </>
  );
}

export default Header;