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
              Share happiness with loved ones when you make transfers with our easy and reliable payment options. Send money abroad and have it delivered instantly to your beneficiary. Try it now! 
              </p>
            </div>
          </div>
        </div>
      </section>  );
}

export default MobileBanner;