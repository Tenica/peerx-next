import Image from 'next/image';
import styles from './main-banner.module.css'


function MainBanner() {
    return ( <section className={styles.headContainer}>
        <div className={styles.headContainerText}>
          <h1 className={styles.header}>
            Sending <span className={styles.italic}>abroad</span> money made easy
          </h1>
          <p className={styles.text}>
            Lorem ipsum dolor sit amet consectetur. Scelerisque urna ac
            scelerisque sit sed lectus. Augue vestibulum donec malesuada aenean
            natoque lacinia convallis. Ipsum pharetra vel pulvinar vitae. Proin
            dis sem sit morbi lorem aliquam ac.
          </p>
          <p className={styles.text}>
            Natoque lacinia convallis. Ipsum pharetra vel pulvinar vitae. Proin
            dis sem sit morbi lorem aliquam ac.
          </p>
          <div className={styles.startButton}>
            <p className={styles.startButtonText}>Start Sending</p>
          </div>
        </div>
        <div className={styles.headContainerImage}>
          <div className={styles.circle}></div>
          <Image src="/images/image1.png" width={400} height={400} className={styles.image} alt="" />
        </div>
      </section> );
}

export default MainBanner;