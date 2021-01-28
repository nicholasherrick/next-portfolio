import { useEffect } from 'react';
import AOS from 'aos';
import Layout from '../components/Layout';
import 'aos/dist/aos.css';
import '../styles/globals.scss';

function MyApp({ Component, pageProps }) {
  useEffect(() => {
    AOS.init({
      duration: 600,
    });
  }, []);

  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
}

export default MyApp;
