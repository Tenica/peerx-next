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
          </div>
        </section>
        <section className={styles.serviceBodyContainer}>
          <div className={styles.serviceContentContainer}>
            <div className={styles.serviceImageContainer}></div>
            <div className={styles.serviceFeaturesContainer}>
              <div className={styles.serviceFeatures}>
                <div className={styles.serviceHeaderTextContainer}>
                  <h1 className={styles.serviceHeader}>Light, Fast &amp; Powerful</h1>
                </div>
                <div className={styles.serviceTextsContainer}>
                  <p className={styles.serviceTexts}>
                  Distance should not be a hurdle when it comes to moving your money. 
                  Conveniently send and receive money across borders with efficient speed and great ease.
                  
                  </p>
                  <p className={styles.serviceTexts}>
                  With a totally free sign up process, you’re able to own a PEER X multi-currency account 
                  that allows you to instantly send money abroad in record time.
                  </p>
                </div>
              </div>
              <div className={styles.serviceCardsContainer}>
                <div className={styles.serviceCardSection}>
                  <div className={styles.serviceCard}>
                    <div className={styles.serviceCardSvg}>
                    <Image
                       height={100}
                       width={100}
                        src="images/s/service-icon1.svg"
                        className={styles.serviceSvg}
                        alt=""
                      />
                    </div>
                    <h5 className={styles.serviceCardTitle}>Title Goes Here</h5>
                    <p className={styles.serviceCardBody}>
                      Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean
                      commodo ligula eget dolor.
                    </p>
                  </div>
                  <div className={styles.serviceCard}>
                    <div className={styles.serviceCardSvg}>
                    <Image
                    height={100}
                    width={100}
                        src="images/s/service-icon2.svg"
                        className={styles.serviceSvg}
                        alt=""
                      />
                    </div>
                    <h5 className={styles.serviceCardTitle}>Title Goes Here</h5>
                    <p className={styles.serviceCardBody}>
                      Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean
                      commodo ligula eget dolor.
                    </p>
                  </div>
                </div>
                <div className={styles.serviceCardSection}>
                  <div className={styles.serviceCard}>
                    <div className={styles.serviceCardSvg}>
                    <Image
                    height={100}
                    width={100}
                        src="images/s/service-icon1.svg"
                        className={styles.serviceSvg}
                        alt=""
                      />
                    </div>
                    <h5 className={styles.serviceCardTitle}>Title Goes Here</h5>
                    <p className={styles.serviceCardBody}>
                      Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean
                      commodo ligula eget dolor.
                    </p>
                  </div>
                  <div className={styles.serviceCard}>
                    <div className={styles.serviceCardSvg}>
                      <Image
                        height={100}
                        width={100}
                        src="images/s/service-icon1.svg"
                        className={styles.serviceSvg}
                        alt=""
                      />
                    </div>
                    <h5 className={styles.serviceCardTitle}>Title Goes Here</h5>
                    <p className={styles.serviceCardBody}>
                      Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean
                      commodo ligula eget dolor.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className={styles.serviceQuoteContainer}>
          <div className={styles.serviceQuoteContent}>
            <p className={styles.serviceQuote}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
              tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
              veniam
            </p>
          </div>
        </section>
        <section className={styles.serviceFinalContainer}>
          <div className={styles.serviceFinalContent}>
            <div className={styles.serviceFinalHeaderContainer}>
              <h1 className={styles.serviceFinalTitle}>
                Learn what you need to know before you invest in a virtual currency
              </h1>
            </div>
            <div className={styles.serviceFinalBodyContainer}>
              <p className={styles.serviceFinalBody}>
                Duis aute irure dolor in reprehenderit in voluptate velit esse cillum
                dolore eu fugiat nulla pariatur. Excepteur sint{" "}
                <span className={styles.serviceFinalSpan}>occaecat cupidatat</span> non
                proident, sunt in culpa qui officia deserunt mollit anim id est
                laborum.
              </p>
              <p className={styles.serviceFinalBody}>
                Excepteur sint occaecat cupidatat non proident, sunt in culpa qui
                officia deserunt mollit anim id est laborum. Lorem ipsum dolor sit
                amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut{" "}
                <span className={styles.serviceFinalSpan1}>labore et dolore</span> magna
                aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
                laboris nisi ut aliquip ex ea commodo consequat.
              </p>
            </div>
          </div>
        </section>
      </main>
      <Footer />
      </Fragment>
       );
}

export default Services;