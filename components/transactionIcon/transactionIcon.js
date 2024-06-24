import React from 'react';
import Image from 'next/image';
import styles from './transactionIcons.module.css'; // Update the path as needed

const TransactionIcons = ({ images }) => {
  return (
    
      <div className={styles.transactionIcon}>
        {images.map((image, index) => (
          

          <div key={index} className={index === 1 && `${styles.activeIcon} ${styles.icon}` || `${styles.icon}`}>
            <Image
              width={image.width}
              height={image.height}
              src={image.src}
              className={styles.transSvg}
              alt={image.alt || ''}
            />
          </div>
        ))}
      </div>

  );
};

export default TransactionIcons;
