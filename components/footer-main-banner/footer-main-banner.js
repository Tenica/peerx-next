import Image from "next/image";
import styles from './footer-main-banner.module.css'
import React from "react";



function FooterMainBanner() {
    return ( <div className={styles.doRight}>
      <section className={styles.downloadMobileContainer}>
        <div className={styles.downloadMobileDescription}>
          
          <div className={styles.downloadMobileDescriptionHeader}>
            <h1 className={styles.mobileTitle}>
              The future of <span className={styles.italic}>money</span>
              <br /> exchange and transfer.
            </h1>
            <p className={styles.mobileBody}>Give us a try to today and see for how fast,<br/>
            reliable, secure our app can be.</p>
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
      </section> 
      </div>
    );
}

export default FooterMainBanner;