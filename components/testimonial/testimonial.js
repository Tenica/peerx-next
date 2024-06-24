
import React from "react";
import styles from './testimonial.module.css'
import Image from "next/image";
import Link from "next/link";
import Testimony from "./testimony";


function Testimonial() {
   

    return ( 
    <React.Fragment>
    <section className={styles.faqsContainer}>
      <div className={styles.faqHeaderContainer}>
        <div className={styles.faqHeader}>
          <div className={styles.faqSubtitleContainer}>
            <small className={styles.faqSubtitle}>
            Testimony 🙋‍♀️
            </small>
          </div>
          <h1 className={styles.faqTitle}>Were trusted by many to <br />do the job right!</h1>
          <p className={styles.faqBody}>
          Here’s what other PeerX users have to say
          </p>
        </div>
        
      </div>
      <div className={styles.faqsListContainer}>
        <ul className={styles.faqLists}>

         <Testimony title={"Timothy Brown"}  image={"images/test1.png"} alt={"test1"} body={`The Peer X app is literally a life saver! I can send money to my family without hassles and in the shortest time ever.`} />

          <Testimony title={"Sade Adewuyi"}  image={"images/test2.png"} alt={"test2"} body={`“The Peer X app is literally a life saver! I can send money to my family without hassles and in the shortest time ever.`} />

      
      
        </ul>
      </div>
    </section> 
    </React.Fragment>);
}

export default Testimonial;