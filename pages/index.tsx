import Header from '../components/Header/Header';
import styles from '../styles/Home.module.css';
import Head from 'next/head';
import HomePage from '../components/HomePage/HomePage';
import Footer from '../components/Footer/Footer';

export default function Home() {
  return (
    <div>
      <Head>
        <title>Bookr</title>
      </Head>
      <Header />
      <HomePage />
      <Footer />
    </div>
  );
}
