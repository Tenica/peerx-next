import Image from "next/image";
import styles from './footer-main-banner.module.css'



function FooterMainBanner() {
    return ( <section className={styles.downloadMobileContainer}>
        <div className={styles.downloadMobileDescription}>
          
          <div className={styles.downloadMobileDescriptionHeader}>
            <h1 className={styles.mobileTitle}>
              The future of <span>money</span>
              <br /> exchange
            </h1>
            <p className={styles.mobileBody}>Lorem ipsum dolor sit amet consectetur.</p>
          </div>
          <div className={styles.downloadMobileSvgs}>
            <div className={styles.downloadMobileAndroid}>
              <img  src="images/android.svg" className={styles.android} alt="" />
            </div>
            <div className={styles.downloadMobileIos}>
              <img src="images/ios.svg" className={styles.ios} alt="" />
            </div>
          </div>
        </div>
        <div className={styles.downloadMobileImage}>
          
          <div className={styles.peerxImageContainer}>
            {/* <Image  width={100} height={100} src="/images/PeerX.png" class="peerx" alt=""> */}
          </div>
        </div>
      </section> );
}

export default FooterMainBanner;