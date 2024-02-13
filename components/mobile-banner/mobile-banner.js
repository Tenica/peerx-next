import Image from 'next/image';
import styles from './mobile-banner.module.css'


function MobileBanner() {
    return ( <section className={styles.mobileMainHeaderContainer}>
        <div className={styles.mobileMainHeaderContent}>
         <div className={styles.mobileCircle}></div>
          <div className={styles.mobileHeaderImageContainer}></div>
          <div className={styles.mobileHeaderTextContainer}>
            <div className={styles.mobileHeaderTitleHeaderContainer}>
              <p className={styles.mobileHeaderTitle}>
                Sending <span className={styles.mobileItalics}>abroad</span> money made
                easy.
              </p>
            </div>
            <div className={styles.mobileHeaderTitleSubtitleContainer}>
              <p className={styles.mobileHeaderSubtitle}>
                Lorem ipsum dolor sit amet consectetur. Scelerisque urna ac
                scelerisque sit sed lectus. Augue vestibulum donec malesuada
                aenean natoque lacinia convallis. Ipsum pharetra vel pulvinar
                vitae. Proin dis sem sit morbi lorem aliquam ac.
              </p>
            </div>
          </div>
        </div>
      </section>  );
}

export default MobileBanner;