import React, { useState } from 'react';
import styles from './Hamburger.module.scss';
import Image from 'next/image';

const Hamburger = () => {
  const [menu, setMenu] = useState<String>('close');
  const openMenu = () => {
    setMenu('open');
  };
  const closeMenu = () => {
    setMenu('close');
  };
  return (
    <div className={styles.hamburger}>
      {menu === 'close' ? (
        <img className={styles.icon} src="/images/menu.svg" alt="menu" onClick={openMenu} />
      ) : (
        <ul className={styles.navbar}>
          <img className={styles.item} src="/images/back.png" alt="back" onClick={closeMenu} />
          <li className={styles.item}>Register</li>
          <li className={styles.item}>SIGN IN</li>
        </ul>
      )}
    </div>
  );
};

export default Hamburger;
