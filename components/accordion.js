"use client"
import React, { useState } from "react";
import styles from './faq/faq.module.css'

function Accordion({title, body}) {
    const [accordion, setAccordion]  = useState(false)
   

    const iconChangeHandler = () => {
      setAccordion(!accordion)
      
    }

    return (  <li className={styles.faqList}>
        <div className={styles.faqListContainer}  onClick={iconChangeHandler}>
          <div className={styles.faqListHeaderContainer}>
            <p className={styles.faqListHeader}>{title}</p>
            <div className={styles.plusIconContainer}>
            {accordion ?  <i className="fa-solid fa-minus faMinus" /> : <i className="fa-solid fa-plus faPlus" />}
            </div>
          </div>
          <div className={styles.faqListBodyContainer}>
          {accordion && <div className={styles.faqListBody}>
              {body}
            </div>  }
          </div>
        </div>
      </li> );
}

export default Accordion;