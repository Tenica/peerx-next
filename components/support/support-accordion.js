"use client";
import React, { useState } from "react";
import styles from "./support-accordion.module.css";

function SupportAccordion({title, body}) {
  const [accordion, setAccordion] = useState(false);

  const iconChangeHandler = () => {
    setAccordion(!accordion);
  };
  return (
    <React.Fragment>
      
        
          
          <div className={styles.supportFaqListContainer} onClick={iconChangeHandler}>
            <div className={styles.supportFaqListHeaderContainer}>
              <p className={styles.supportFaqListHeader}>{title}</p>
              <div className={styles.iconContainer} >
              {accordion ? (
                <i className="fa-solid fa-minus faMinus" />
              ) : (
                <i className="fa-solid fa-plus faPlus" />
              )}
              </div>
            </div>

            {accordion && (
              <div className={styles.supportFaqListBodyContainer}>{body}</div>
            )}
          </div>
     
    </React.Fragment>
  );
}

export default SupportAccordion;
