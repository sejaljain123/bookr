import styles from './Footer.module.scss';

function Footer() {
  return (
    <div className={styles.footer}>
      <p>
        Made with 💕 at{' '}
        <a href="https://github.com/manishprivet/bookr" target="_blank" rel="noreferrer">
          {' '}
          Github!
        </a>
      </p>
    </div>
  );
}

export default Footer;
