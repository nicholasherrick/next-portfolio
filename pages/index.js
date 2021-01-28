import { useEffect } from 'react';
import Meta from '../components/Meta';
import styles from '../styles/Home.module.scss';

export default function Home() {
  useEffect(() => {
    document.querySelector('video').playbackRate = 0.5;
  }, []);

  return (
    <>
      <Meta title='Welcome | NicholasHerrick.com' />
      <div className={styles.showcase} data-aos='flip-up'>
        <div className={styles.videoContainer}>
          <video src='video.mp4' autoPlay muted loop height='600'></video>
        </div>
        <div className={styles.content}>
          <h1 data-aos='zoom-in-down' data-aos-delay='300'>
            Welcome to Nick's Portfolio
          </h1>
          <div>
            <a href='' data-aos='fade-right' data-aos-delay='500'>
              <h2>Projects</h2>
            </a>
            <a href='' data-aos='fade-up' data-aos-delay='500'>
              <h2>Skills</h2>
            </a>
            <a href='' data-aos='fade-down' data-aos-delay='500'>
              <h2>Experience</h2>
            </a>
            <a href='' data-aos='fade-left' data-aos-delay='500'>
              <h2>About</h2>
            </a>
          </div>
        </div>
      </div>
    </>
  );
}
