import Image from 'next/image';
import styles from './calculator.module.css'

function Calculator() {
    return ( 

        <section className={styles.calculatorContainer}>
        <div className={styles.calculatorContainerCalculator}>
          <div className={styles.calculatorContainerHeader}>
            <h1 className={styles.calculatorHeader}>
              Get quick conversion{" "}
              <span className={styles.calculatorItalic}>rates</span> and
              <br /> send your money now
            </h1>
          </div>
          <div className={styles.calculatorContainerForm}>
            <div className={styles.formContainer}>
              <form className={styles.sideBySideForm}>
                <div className={styles.formGroup}>
                  <input
                    type="text"
                    id="Nigeria"
                    name="firstName"
                    className={styles.Nig}
                    placeholder="NGN"
                    required=""
                  />
                </div>
                <div className={styles.arrowContainer}>
                  <Image
                    src="images/swap-horizontal-outline.svg"
                    className={styles.arrowSvg}
                    alt=""
                    width={50}
                    height={50}
                  />
                </div>
                <div className={styles.formGroup}>
                  <input
                    type="text"
                    id="Canada"
                    name="lastName"
                    className={styles.Ca}
                    placeholder="CAD"
                    required=""
                  />
                </div>
              </form>
            </div>
          </div>
          <div className={styles.calculatorContainerLogo}>

            <div className={styles.calculatorContainerText}>
            <p className={styles.getPeerXApp}>Get the PeerX app</p>
            </div>
            
            
            <div className={styles.svgContainer1}>
            <Image width={500} height={500} src="images/Group (2).svg" alt="android" className={styles.svgApp} />
            </div>

            <div className={styles.svgContainer}>
            <Image width={500} height={500} src="images/Group (1).svg" alt="ios"  className={styles.svgApp2} />
            </div>
           
            
          </div>
        </div>
      </section> );
}

export default Calculator;