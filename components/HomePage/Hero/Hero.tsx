import styles from './Hero.module.scss';
import Image from 'next/image';
const Hero = () => {
  return (
    <div className={styles.hero}>
      <p className={styles.text}>
        CHANGE YOUR
        <br /> READING <br />
        EXPERIENCE
        <br />
        <span className={styles.tagline}>WITH THE POWER OF CLOUD</span>
      </p>
      <div className={styles.booksContainer}>
        <Image height="400px" width="400px" src="/images/hero.png" alt="logo" />
      </div>
    </div>
  );
};

export default Hero;
