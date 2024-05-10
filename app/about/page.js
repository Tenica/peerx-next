import { Fragment } from "react";
import styles from './about.module.css';
import Header from "@/components/header";
import Footer from "@/components/footer";

function About() {
    return (
        <Fragment>
        <Header />
        <main>
        <section className={styles.aboutHeaderContainer}>
          <div className={styles.mainHeaderAboutTitle}>
            <p className={styles.mainAboutTitle}>About PeerX</p>
          </div>
          <div className={styles.aboutHeaderSubtitle}>
            <p className={styles.mainAboutSubtitle}>
         
              
              PEER X is a financial service Company founded to aid immigrants resident in
              Canada <br /> 
              and other parts of the world make monetary transfers and payments across borders..
              <br />
            </p>

            <p className={styles.mainAboutSubtitle}>The company employs the use of cutting edge technology to drive innovative payment   
           <br/>solutions thereby ensuring safe and reliable financial transactions.</p>
          </div>
        </section>

        <section className={styles.peerXMotivationContainer}>
          <div className={styles.peerXDriveContainer}>
            <div className={styles.peerXDriveTitleContainer}>
              <h1 className={styles.peerXDriveTitle}>What drives PeerX?</h1>
            </div>
            <div className={styles.peerXDriveSubtitleContainer}>
              <p className={styles.peerXDriveSubtitle}>
              The essence of international money transfers lies in fostering stronger family ties 
              and community relationships. Achieving financial inclusion and empowerment globally 
              necessitates a seamless structure for money exchange, ensuring easy access to cross-border
               payment solutions with swift transactions.
              </p>
            </div>
          </div>
          <div className={styles.peerXMotivationCardContainer}>
            <div className={styles.peerXMotivationCard}>
              <div className={styles.peerXMotivationCardSvgContainer}>
                <img
                  src="images/a/60e4a1e738075608ade7fbc4_icon-about-drive-1-crypto-template.svg.svg"
                  className={styles.peerXSvg}
                  alt=""
                />
              </div>
              <div className={styles.peerXMotivationCardBodyContainer}>
                <div className={styles.peerXMotivationTitleContainer}>
                  <p className={styles.peerXMotivationCardTitle}>Open Source</p>
                </div>
                <p className={styles.peerXMotivationCardBody}>
                We cater to millions of individuals across the globe and aid them to make hassle 
                free money transfers to their loved ones anywhere, anytime. 
                </p>
              </div>
            </div>
            <div className={styles.peerXMotivationCard}>
              <div className={styles.peerXMotivationCardSvgContainer}>
                <img
                  src="images/a/60e4a1e73807561d83e7fbc5_icon-about-drive-3-crypto-template.svg.svg"
                  className={styles.peerXSvg}
                  alt=""
                />
              </div>
              <div className={styles.peerXMotivationCardBodyContainer}>
                <div className={styles.peerXMotivationTitleContainer}>
                  <p className={styles.peerXMotivationCardTitle}>worldwide</p>
                </div>
                <p className={styles.peerXMotivationCardBody}>
                With a security that never sleeps, we ensure that your personal
                 information and transactions are closely encrypted to protect you and your transactions. 
                </p>
              </div>
            </div>
          </div>
          <div className={styles.peerXMotivationCardContainer}>
            <div className={styles.peerXMotivationCard}>
              <div className={styles.peerXMotivationCardSvgContainer}>
                <img
                  src="images/a/60e4a1e7380756dbbae7fbc6_icon-about-drive-2-crypto-template.svg.svg"
                  className={styles.peerXSvg}
                  alt=""
                />
              </div>
              <div className={styles.peerXMotivationCardBodyContainer}>
                <div className={styles.peerXMotivationTitleContainer}>
                  <p className={styles.peerXMotivationCardTitle}>Transparent</p>
                </div>
                <p className={styles.peerXMotivationCardBody}>
                Our support team is readily available 24/7 to give you the required assistance whenever you need it. 
                </p>
              </div>
            </div>
            <div className={styles.peerXMotivationCard}>
              <div className={styles.peerXMotivationCardSvgContainer}>
                <img
                  src="images/a/60e4a1e73807566bf2e7fbc7_icon-about-drive-4-crypto-template.svg.svg"
                  className={styles.peerXSvg}
                  alt=""
                />
              </div>
              <div className={styles.peerXMotivationCardBodyContainer}>
                <div className={styles.peerXMotivationTitleContainer}>
                  <p className={styles.peerXMotivationCardTitle}>Community Driven</p>
                </div>
                <p className={styles.peerXMotivationCardBody}>
                We are community driven and our customers are the reason we exist. 
                Join our amazing community of customers and influencers to create an 
                exciting financial experience for yourself and your loved ones. 

              
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className={styles.missionStatementContainer}>
          <div className={styles.missionStatementTextContainer}>
            <div className={styles.missionStatementTextGroup}>
              <div className={styles.missionStatementTitleContainer}>
                <p className={styles.missionStatementTitle}>Our Mission</p>
              </div>
              <div className={styles.missionStatementBodyContainer}>
                <p className={styles.missionStatementBody}>
                We are dedicated to offering an exceptional user experience that grants you Easy, 
                safe and conveniently quick transfer options across the world. We seek to get rid of 
                the barriers that exist between individuals and their ability to optimally make financial 
                transactions across borders. 
                </p>
                <p className={styles.missionStatementBody2}>
                In creating easy, quick and reliable payment options,
                we offer people in all parts of the world an opportunity to stay financially connected 
                with their families, communities and passion. 
                </p>
              </div>
            </div>
          </div>
          <div className={styles.missionStatementImageContainer}>
            <img src="images/a/mission.png" className={styles.missionImg} alt="" />
          </div>
        </section>
        
        <section className={styles.visionStatementContainer}>
          <div className={styles.visionStatementImageContainer}>
            <img src="images/a/mission.png" className={styles.missionImg} alt="" />
          </div>
          <div className={styles.visionStatementTextContainer}>
            <div className={styles.visionStatementTextGroup}>
              <div className={styles.visionStatementTitleContainer}>
                <p className={styles.visionStatementTitle}>Our Vision</p>
              </div>
              <div className={styles.visionStatementBodyContainer}>
                <p className={styles.visionStatementBody}>
                To become the world’s premium provider of a simplified, secure and 
                efficient global remittance service, enriched by innovative payment 
                solutions and driving financial inclusion and empowerment across the globe. 
                </p>
                <p className={styles.visionStatementBody2}>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Parturient
                  lorem purus justo, ultricies. Sollicitudin odio elementum urna
                  placerat lacus, vulputate. Non malesuada viverra et ultrices cras.
                  Tincidunt tempor, blandit augue ac feugiat. Praesent arcu tempus
                  ullamcorper quisque in. Magna fermentum, lacus, fermentum arcu.
                </p>
              </div>
            </div>
          </div>
        </section>
        <section className={styles.missionStatementContainer}>
          <div className={styles.missionStatementTextContainer}>
            <div className={styles.missionStatementTextGroup}>
              <div className={styles.missionStatementTitleContainer}>
                <p className={styles.missionStatementTitle}>Our Story</p>
              </div>
              <div className={styles.missionStatementBodyContainer}>
                <p className={styles.missionStatementBody}>
                  Vulputate pellentesque proin facilisis dignissim gravida sed
                  faucibus nunc. Nunc eget pharetra, in vitae porta lacus. Elit in
                  nisl, in quis nulla tellus suscipit id. Semper velit odio cras
                  pretium tristique habitant. Elit eu penatibus congue orci turpis.
                  Enim diam id.
                </p>
                <p className={styles.missionStatementBody2}>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Parturient
                  lorem purus justo, ultricies. Sollicitudin odio elementum urna
                  placerat lacus, vulputate. Non malesuada viverra et ultrices cras.
                  Tincidunt tempor, blandit augue ac feugiat. Praesent arcu tempus
                  ullamcorper quisque in. Magna fermentum, lacus, fermentum arcu.
                </p>
              </div>
            </div>
          </div>
          <div className={styles.missionStatementImageContainer}>
            <img src="images/a/story.png" className={styles.missionImg} alt="" />
          </div>
        </section>
      </main>
      <Footer />
      </Fragment>
       );
}

export default About;