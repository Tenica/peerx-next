import Footer from "@/components/footer";
import Header from "@/components/header";
import styles from "./services.module.css"
import { Fragment } from "react";
import Image from "next/image";




function Services() {
    return ( 
        <Fragment>
        <Header />
        <main>
        <section className={styles.serviceHeaderContainer}>
          <div className={styles.mainHeaderServiceTitle}>
            <p className={styles.mainServiceTitle}>Our Services</p>
          </div>
          <div className={styles.serviceHeaderSubtitle}>
            <p className={styles.mainServiceSubtitle}>
            
            Visiting countries for fun, seeking better opportunities or creating diverse business 
            environments <br /> abroad should not bear extra financial hurdles. Enjoy instant international money transfers,<br />
            quick money exchange transactions at fair rates and complete access to funds anywhere you go. 
             
            </p>

            <p className={styles.mainServiceSubtitleMobile}>
            
            Visiting countries for fun, seeking better opportunities or creating diverse business 
            environments  abroad should not bear extra financial hurdles. Enjoy instant international money transfers,
            quick money exchange transactions at fair rates and complete access to funds anywhere you go. 
             
            </p>
          </div>
        </section>
        <section className={styles.serviceBodyContainer}>
          <div className={styles.serviceContentContainer}>
            <div className={styles.serviceImageContainer}></div>
            <div className={styles.serviceFeaturesContainer}>
              <div className={styles.serviceFeatures}>
                <div className={styles.serviceHeaderTextContainer}>
                  <h1 className={styles.serviceHeader}>Money Transfers Across<br/>Borders At the Best<br/>Conversion Rates</h1>
                  <h1 className={styles.serviceHeaderMobile}>Money Transfers Across Borders At the Best Conversion Rates</h1>
                </div>
                <div className={styles.serviceTextsContainer}>
                  <p className={styles.serviceTexts}>
                  Distance should not be a hurdle when it comes to moving your money. 
                  Conveniently send and receive money across borders with efficient speed and great ease.
                  
                  </p>
                 
                </div>

                <div className={styles.serviceHeaderTextContainer}>
                  <h5 className={styles.serviceHeaderMobile1}>International Money Transfers</h5>
                  <h5 className={styles.serviceHeader1}>International Money Transfers</h5>
                </div>

                <div className={styles.serviceTextsContainerMobile}>
                  <p className={styles.serviceTexts}>
                  Distance should not be a hurdle when it comes to moving your money. 
                  Conveniently send and receive money across borders with efficient speed and great ease.
                  
                  </p>
                 
                </div>

                

                
              
              </div>

             
            </div>
           
          </div>
          
        </section>
        <section className={styles.serviceBodyContainer}>
        <div className={styles.serviceContentContainer}>
         <div className={styles.serviceFinalFeaturesContainer}>
         <h5 className={styles.serviceHeaderMobile1}>PeerX Money Exchange</h5>
         <h5 className={styles.serviceHeader1}>PeerX Money Exchange</h5>
         <p className={styles.serviceTexts}>Buy or sell  currencies directly from other PEER X  users at your own determined rate and have the funds delivered straight to your PEER X wallet.</p>
         </div>

         <div className={styles.serviceFinalFeaturesContainer}>
         <h5 className={styles.serviceHeaderMobile1}>Swift Payment</h5>
         <h5 className={styles.serviceHeader1}>Swift Payment</h5>
         <p className={styles.serviceTexts}>Get rid of the financial delays that plague personal and business transactions with an even faster transfer option that is reliable and well protected.</p>
         </div>

         </div>
         
        </section>

        <section className={styles.serviceSingleBodyContainer}>
        <div className={styles.serviceFinalContentContainer}>
         <div className={styles.serviceFinalSingleFeaturesContainer}>
         <h5 className={styles.serviceHeaderMobile1}>Secure Transactions</h5>
         <h5 className={styles.serviceHeader1}>Secure Transactions</h5>
         
         <p className={styles.serviceTexts}>Every step of your transfer process is backed with a well protected encryption that keeps you and your funds safe.</p>
         
         </div>

         </div>
         
        </section>


        <section className={styles.serviceQuoteContainer}>
          <div className={styles.serviceQuoteContent}>
            <p className={styles.serviceQuote}>
            A world without financial borders, you imagine it, we create it.
            </p>
          </div>
        </section>

      </main>
      <Footer />
      </Fragment>
       );
}

export default Services;