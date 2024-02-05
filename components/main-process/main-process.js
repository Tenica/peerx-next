import Image from 'next/image';
import styles from './main-process.module.css'

function MainProcess() {
    return ( <section className={styles.processMainContainer}>
        <div className={styles.processContainer}>
          <div className={styles.processSvgTitleContainer}>
            <div className={styles.processSvgLineContainer}>
              <img src="images/Vector 41.svg" alt="" />
            </div>
            <p className={styles.processHeaderTitle}>Process</p>
          </div>
          <div className={styles.processHowItWorksContainer}>
            <div className={styles.processHowItWorksHeaderContainer}>
              <p className={styles.howItWorksTitle}>How it works</p>
            </div>
            <div className={styles.processHowItWorksBodyContainer}>
              <div className={styles.processHowItWorks}>
                <div className={styles.processHeaderContainer}>
                  <p className={styles.number}>1</p>
                  <Image  width={50} height={50} src="images/Ellipse 24 (1).svg" alt="" />
                  <h5 className={styles.processHowItWorksBodyTitle}>Register</h5>
                </div>
                <p className={styles.processHowItWorksBody}>
                  Download peerX from the apple app store or google play store
                </p>
              </div>
              
              <div  className={styles.lineSvgContainer}>
              <img  src="/images/Vector 42.svg" alt="" className={styles.lineSvg} />
              </div>
             
              <div className={styles.processHowItWorks}>
                <div className={styles.processHeaderContainer}>
                  <p className={styles.number}>2</p>
                  <Image  width={50} height={50} src="images/Ellipse 24 (1).svg" alt="" />
                  <h5 className={styles.processHowItWorksBodyTitle}>Verify</h5>
                </div>
                <p className={styles.processHowItWorksBody}>
                  Complete the sign up process, confirm your phone number
                </p>
              </div>
              <div className={styles.lineSvgContainer}>
              <img  src="/images/Vector 42.svg" alt="" className={styles.lineSvg} />
              </div>
              <div className={styles.processHowItWorks}>
                <div className={styles.processHeaderContainer}>
                  <p className={styles.number}>3</p>
                  <Image  width={50} height={50} src="/images/Ellipse 24 (1).svg" alt="" />
                  <h5 className={styles.processHowItWorksBodyTitle}>Explore</h5>
                </div>
                <p className={styles.processHowItWorksBody}>
                  Get your wallet account and enjoy your fast transaction all in
                  one app
                </p>
              </div>
            </div>
          </div>
        </div>
      </section> );
}

export default MainProcess;