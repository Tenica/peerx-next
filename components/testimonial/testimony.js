"use client"
import { useState } from 'react';
import styles from './testimonial.module.css';


import Image from 'next/image';



const Testimony = ({title, body, image, alt}) => {
  const [accordion, setAccordion]  = useState(false)
   

    const iconChangeHandler = () => {
      setAccordion(!accordion)
      
    }

    return ( <li className={styles.faqList}>
        <div className={styles.faqListContainer}>
          <div className={styles.faqListHeaderContainer}>
          <div className={styles.circularImageContainer}>
          <img src={image} alt={alt} className={styles.circularImage} />
          </div>
            <p className={styles.faqListHeader}>{title}</p>

    
           
          </div>
          <div className={styles.faqListBodyContainer}>
           <div className={styles.faqListBody}>
              {body}
            </div>  
          </div>
        </div>
      </li> );
}
 
export default Testimony;