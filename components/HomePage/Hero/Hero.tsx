import styles from './Hero.module.scss';
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
        <img className={styles.booksContainer} src="images/hero.png" alt="logo" />
      </div>
    </div>
  );
};

export default Hero;
