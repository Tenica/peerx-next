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
              Ab dolores tenetur sit laborum sunt ad quis nisi et repellat
              veritatis.
            </p>
          </div>
        </div>

        <div className={`${styles.manyMoreThingsSection} ${styles.centerSection}`}>
          <div className={styles.card3}>
            <h1 className={styles.cardHeader}>Business Transfers</h1>
            <p className={styles.cardBody}>
              Ab dolores tenetur sit laborum sunt ad quis nisi et repellat
              veritatis.
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
              Ab dolores tenetur sit laborum sunt ad quis nisi et repellat
              veritatis.
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