import styles from './Header.module.scss';
import Image from 'next';
import Hamburger from './Hamburger/Hamburger';
function Header() {
  return (
    <nav className={styles.header}>
      <div className={styles.logo}>
        <img src="/images/logo.png" alt="logo" />
        <span>BOOK-R</span>
      </div>
      <ul className={styles.navbar}>
        <li className={styles.register}>Register</li>
        <li className={styles.signin}>SIGN IN</li>
      </ul>

      <div className={styles.hamburger}>
        <Hamburger />
      </div>
    </nav>
  );
}

export default Header;
