import Image from "next/image";
import React from "react";
import styles from './main-things.module.css'




function MainThings() {
    return (  
        <React.Fragment>    
        <section className={styles.manyMoreThingsHeaderContainer}>
        <div className={styles.manyMoreThingsHeader}>
          <h5>many more things</h5>
          <h1 className={styles.manyMoreThingsTitle}>
            Just <span className={styles.manyMoreThingsHeaderItalic}>enough</span>{" "}
            to get you going everyday
          </h1>
        </div>
      </section>
      <section className={styles.manyMoreThingsContainer}>
        <div className={`${styles.manyMoreThingsSection} ${styles.first}`}>
          <div className={styles.card1}>
            
          </div>
          <div className={styles.card2}>
            <h1 className={styles.cardHeader}>Personal Transfers</h1>
            <p className={styles.cardBody}>
            Create exciting financial memories when you make transfers with our easy and reliable payment options. 
            <br/>Move funds between wallets with our peer to peer transfer option and have your money delivered in seconds!
            </p>
          </div>
        </div>

        <div className={`${styles.manyMoreThingsSection} ${styles.centerSection}`}>
          <div className={styles.card3}>
            <h1 className={styles.cardHeader}>Business Transfers</h1>
            <p className={styles.cardBody}>
            Nothing seals a business deal better than an efficient payment transaction. We provide a well detailed and protected transaction process that keeps you updated every step of the way! Have peace of mind knowing your money is right where it should be!
            </p>
          </div>
          <div className={styles.card4}>
           
          </div>
        </div>

        <div className={`${styles.manyMoreThingsSection} ${styles.third}`}>
          <div className={styles.card5}>
            
          </div>
          <div className={styles.card6}>
            <h1 className={styles.cardHeader}>Currency exchange</h1>
            <p className={styles.cardBody}>
            You can rely on our efficient money transfer options to move funds across borders easily with the best conversion rates and at the quickest time possible.
            </p>
          </div>
        </div>
      </section>
      <div className={styles.manyMoreThingsSectionButton}>
        <div className="button">Start sending</div>
      </div>
      </React.Fragment> 
      );
}

export default MainThings;