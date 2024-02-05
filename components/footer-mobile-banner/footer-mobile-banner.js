import Image from 'next/image';
import styles from './footer-mobile-banner.module.css'



function FooterMobileBanner() {
    return (       
        <section className={styles.responsiveDownloadMobileContainer}>
        <div className={styles.responsiveDownloadMobileContent}>
          <div className={styles.responsiveMobileDescriptionHeader}>
            <h1 className={styles.responsiveMobileTitle}>
              The future of <span>money</span> exchange
            </h1>
            <p className={styles.responsiveMobileBody}>
              Lorem ipsum dolor sit amet consectetur.
            </p>
          </div>
          
          <div className={styles.responsiveDownloadMobileSvgs}>
            <div className={styles.responsiveDownloadMobileAndroid}>
              <Image width={100} height={100} src="images/android.svg" className={styles.android} alt="" />
            </div>
            <div className={styles.responsiveDownloadMobileIos}>
              <Image width={100} height={100} src="images/ios.svg" className={styles.ios} alt="" />
            </div>
          </div>
        </div>
      </section> );
}

export default FooterMobileBanner;