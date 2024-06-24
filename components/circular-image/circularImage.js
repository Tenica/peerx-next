

import React from 'react';
import styles from './circularImage.module.css'; 
import Image from 'next/image';

const CircularImage = ({ src, alt }) => {
  return (
    <div className={styles.circularImageContainer}>
      <Image height={100} width={100} src={src} alt={alt} className={styles.circularImage} />
    </div>
  );
};

export default CircularImage;
