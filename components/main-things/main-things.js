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
            Create exciting financial memories when you send and receive money 
            using the best exchange rates from the comfort of your home or office
             to the other end of the world. Move funds between wallets in seconds 
             with our peer exchange transfer option and have your money received directly to your Peer X account. 
            </p>
          </div>
        </div>

        <div className={`${styles.manyMoreThingsSection} ${styles.centerSection}`}>
          <div className={styles.card3}>
            <h1 className={styles.cardHeader}>Business Transfers</h1>
            <p className={styles.cardBody}>
            Nothing seals a business deal better than an efficient payment transaction. 
            Our innovative fintech solutions ensures a detailed and well protected transaction 
            process that keeps you updated with every step of your payment. Enjoy peace of mind knowing that your money is right where it should be! 
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
            You can rely on our efficient money transfer options to move funds across borders easily with the best conversion rates and at the quickest time possible
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