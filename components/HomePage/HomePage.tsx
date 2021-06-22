import Hero from './Hero/Hero';
import Register from '../HomePage/Forms/Register/Register';
import Signin from '../HomePage/Forms/Signin/Signin';
import styles from './Homepage.module.scss';

function HomePage() {
  return (
    <>
      <Hero />
      <div className={styles.Forms}>
        <Signin />
        <Register />
      </div>
    </>
  );
}

export default HomePage;
