import React from 'react';
import { NavLink } from 'react-router-dom';
import styles from './Navigation.module.css';

const Navigation = () => (
  <nav>
    <NavLink to="/signup" className={styles.link}>
      Форма
    </NavLink>

    <NavLink to="/colorpicker" className={styles.link}>
      Колорпікер
    </NavLink>

    <NavLink to="/counter" className={styles.link}>
      Лічильник
    </NavLink>

    <NavLink to="/clock" className={styles.link}>
      Часи
    </NavLink>
  </nav>
);

export default Navigation;
