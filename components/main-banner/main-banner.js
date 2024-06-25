"use client"

import { useEffect, useState } from 'react';
import styles from './main-banner.module.css'
import { motion,  AnimatePresence } from 'framer-motion';





function MainBanner() {
  const [activeIndex, setActiveIndex] = useState(0);
  
  const [direction, setDirection] = useState('left');

  const [transitionDirection, setTransitionDirection] = useState("next");

  const handleNext = () => {
    setDirection("right");
    setCurrentIndex((prevIndex) =>
      prevIndex + 1 === images.length ? 0 : prevIndex + 1
    );
  };

  const handlePrevious = () => {
    setDirection("left");

    setCurrentIndex((prevIndex) =>
      prevIndex - 1 < 0 ? images.length - 1 : prevIndex - 1
    );
  };

  const handleDotClick = (index) => {
    setDirection(index > currentIndex ? "right" : "left");
    setCurrentIndex(index);
  };

  // const handleNext  = () => {
  //   setTransitionDirection('next')
  //   setActiveIndex((prevIndex) =>
  //    prevIndex === 2 ? prevIndex : prevIndex + 1
  //   )
  // }

  // const handlePrevious  = () => {
  //   setTransitionDirection('previous')
  //   setActiveIndex((prevIndex) =>
  //    prevIndex === 0 ? prevIndex : prevIndex - 1
  //   )
  // }

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prevIndex) => {
        const newIndex = (prevIndex === 0) ? 1 : 0;
        setTransitionDirection(newIndex === 0 ? 'previous' : 'next');
        return newIndex;
      });
    }, 6000);

    // Cleanup interval on component unmount
    return () => clearInterval(interval);
  }, []);


  const handleSliderChange = (event) => {
    const value = parseInt(event.target.value, 10);
    if (value <= 50) {
      if (activeIndex !== 0) {
        setTransitionDirection('previous');
        setActiveIndex(0);
        
      }
    } else {
      if (activeIndex !== 1) {
        setTransitionDirection('next');
        setActiveIndex(1);
     
      }
    }
  };


  //
  const slides = [
    {
  
      description: "Share happiness with loved ones when you make transfers with our easy and reliable payment options. Send money abroad and have it delivered instantly to your beneficiary. Try it now!",
      button: "Start Sending",
      image: "/images/image1.png"
    },
    {
     
      description: "Create offers to buy or sell currencies directly from other PEER X users at a rate determined by you with our Peer to Peer payment options. There’s no better time to do it but now!",
       button: "Create Offer",
      image: "/images/image2.png"
    }
  ];

  const textVariants = {
    hidden: {
      opacity: 0,
      x: transitionDirection === 'next' ? '100' : -100,
      transition: {duration: 0.5, ease: 'easeInOut'}
    },
    visible: {
      opacity: 1,
      x: transitionDirection === 'next' ? '100' : -100,
      transition: {duration: 0.5, ease: 'easeInOut'}
    }
  };

  const slideVariants = {
    hiddenRight: {
      x: "100%",
      opacity: 0,
    },
    hiddenLeft: {
      x: "-100%",
      opacity: 0,
    },
    visible: {
      x: "0",
      opacity: 1,
      transition: {
        duration: 1,
      },
    },
    exit: {
      opacity: 0,
      scale: 0.8,
      transition: {
        duration: 0.5,
      },
    },
  };

  const textContainerVariant = {
    hidden: {},
    visible: {
      transition: {staggerChildren: 0.1}
    }
  }

    return ( 
      <>
      <section className={styles.headContainer}>
    
      <motion.div className={styles.headContent} key={activeIndex} variants={textContainerVariant} initial='hidden' animate='visible'>
      <div className={styles.headContainerText}>
      
      {activeIndex === 0 ? 
        <> 
        <h1 variants={textVariants} className={styles.header}>
         International <span className={styles.italic}>money</span>
        
      </h1>
      <h1 variants={textVariants} className={styles.header}>transfer made easy</h1>
      <p variants={textVariants} className={styles.text}>
      {slides[activeIndex].description}
      </p>
      </>
     :  <>
     <h1 variants={textVariants} className={styles.header}>
     Quick Money
  </h1>
  <h1 variants={textVariants} className={styles.header}><span className={styles.italic}>exchange</span> options</h1>
  

     
      <p variants={textVariants} className={styles.text}>
      {slides[activeIndex].description}
      </p>
      </>}
      


     

      <div className={styles.startButton}>
      <p className= {styles.startButtonText}>{slides[activeIndex].button}</p>
    
      </div>
    </div>
    {activeIndex !== 0 ? <div className={styles.headContainerImage} >
      <div className={styles.circle}></div>
      <AnimatePresence>
      <motion.img 
       key={activeIndex}
       src={slides[activeIndex].image}  
       className={styles.image} 
       alt="" 
       variants={slideVariants}
       initial={direction === "right" ? "hiddenRight" : "hiddenLeft"}
       animate="visible"
       exit="exit" />
    </AnimatePresence>
     
    </div> : 
    
    <div className={styles.headContainerImage}>
      <div className={styles.circle}></div>
      <AnimatePresence>
      <motion.img 
      key={activeIndex} 
      src={slides[activeIndex].image} 
      className={styles.image} 
      alt="" 
      variants={slideVariants}
      initial={direction === "right" ? "hiddenRight" : "hiddenLeft"}
      animate="visible"
      exit="exit"  
       />
    </AnimatePresence>
    
   
    </div>
    }

      </motion.div>
      
      </section> 

      <div>
   
      </div>
      </>);
}

export default MainBanner;




