import Image from 'next/image';
import styles from './main-banner.module.css'


function MainBanner() {
    return ( <section className={styles.headContainer}>
      <div className={styles.headContent}>
      <div className={styles.headContainerText}>
      <h1 className={styles.header}>
        Sending <span className={styles.italic}>abroad</span>
      </h1>
      <h1 className={styles.header}>money made easy</h1>
      <p className={styles.text}>
      Share happiness with loved ones when you make transfers with our easy and reliable payment options. 
      </p>
      <p className={styles.text}>
      Send money abroad and have it delivered instantly to your beneficiary. Try it now!
      </p>


     

      <div className={styles.startButton}>
        <p className={styles.startButtonText}>Start Sending</p>
      </div>
    </div>
    <div className={styles.headContainerImage}>
      <div className={styles.circle}></div>
      <img src="/images/image1.png"  className={styles.image} alt="" />
    </div>
      </div>
        
      </section> );
}

export default MainBanner;