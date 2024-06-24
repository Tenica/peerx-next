
import TransactionIcons from '../transactionIcon/transactionIcon';
import Image from 'next/image';
import styles from './transactionBody.module.css'



function TransactionBody({transactionArray}) {
  
    return ( 
     <>

     {transactionArray.map((instance, index) => (
        <div key={index} className={index === 1 && `${styles.transactionCard} ${styles.transActive}` || `${styles.transactionCard}`}>
        <div key={index} className={index === 1 && `${styles.activeIcon} ${styles.icon}` || index === 2 && `${styles.icon} ${styles.icon2}`  || `${styles.icon}`}>
        <Image
        width={instance.width}
        height={instance.height}
        src={instance.src}
        className={styles.transSvg}
        alt={instance.alt || ''}
      />
      </div>
    
      <div className={styles.transactionCardBody}>
      <h5  className={index === 2 && `${styles.transTitle} ${styles.title2}` || index === 3 && `${styles.transTitle} ${styles.title3}` || `${styles.transTitle}`}>{instance.title}</h5>
        <p className={index === 1 && `${styles.transBody} ${styles.transActiveBody}` || `${styles.transBody}`}>
       {instance.body}
        </p>
         
</div>
        </div>
      ))}
        
</>
        
        );
}

export default TransactionBody;


