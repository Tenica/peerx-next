
import React from "react";
import styles from './faq.module.css'
import Image from "next/image";
import Accordion from "../accordion";


function Faq() {
   

    return ( 
    <React.Fragment>
    <section className={styles.faqsContainer}>
      <div className={styles.faqHeaderContainer}>
        <div className={styles.faqHeader}>
          <div className={styles.faqSubtitleContainer}>
            <small className={styles.faqSubtitle}>
              Frequently Asked questions 🙋‍♀️
            </small>
          </div>
          <h1 className={styles.faqTitle}>Got questions? We got answers!</h1>
          <p className={styles.faqBody}>
            Feel free to reach out to us if you have more questions for us.
          </p>
        </div>
        <div className={styles.faqContactButton}>
          <p className={styles.buttonText}>Contact Us</p>
          <Image  width={30} height={30} src="/images/ArrowNarrowUpOutline.svg" alt="" />
        </div>
      </div>
      <div className={styles.faqsListContainer}>
        <ul className={styles.faqLists}>

         <Accordion title={"What is PeerX"} body={`Lorem ipsum dolor sit amet consectetur. Diam nunc at elit
          adipiscing vivamus quisque.`} />

          <Accordion title={"What do I need to sign up?"} body={`Lorem ipsum dolor sit amet consectetur. Diam nunc at elit
          adipiscing vivamus quisque.`} />

          <Accordion title={"How fast is onboarding?"} body={`Lorem ipsum dolor sit amet consectetur. Diam nunc at elit
          adipiscing vivamus quisque.`} />

          
          <Accordion title={" How many accounts can i create?"} body={`Lorem ipsum dolor sit amet consectetur. Diam nunc at elit
          adipiscing vivamus quisque.`} />

          <Accordion title={"What tech stack do you support?"} body={`Lorem ipsum dolor sit amet consectetur. Diam nunc at elit
          adipiscing vivamus quisque.`} />
      
        </ul>
      </div>
    </section> 
    </React.Fragment>);
}

export default Faq;