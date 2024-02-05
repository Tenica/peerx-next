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
              Lorem ipsum dolor sit amet, <br />
              consectetur adipiscing elit. Feugiat nulla suspendisse tortor aenean dis
              placerat.
              <br />
              Scelerisque imperdiet vitae dolor non aliquam. Malesuada.
            </p>
          </div>
        </section>

        <section className={styles.peerXMotivationContainer}>
          <div className={styles.peerXDriveContainer}>
            <div className={styles.peerXDriveTitleContainer}>
              <h1 className={styles.peerXDriveTitle}>What drives PeerX?</h1>
            </div>
            <div className={styles.peerXDriveSubtitleContainer}>
              <p className={styles.peerXDriveSubtitle}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Feugiat nulla
                suspendisse tortor aene.
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
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Et nibh
                  urna in proin dui purus bibendum cras. Morbi cursus nunc.
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
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Et nibh
                  urna in proin dui purus bibendum cras. Morbi cursus nunc.
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
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Et nibh
                  urna in proin dui purus bibendum cras. Morbi cursus nunc.
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
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Et nibh
                  urna in proin dui purus bibendum cras. Morbi cursus nunc.
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
                  Vulputate pellentesque proin facilisis dignissim gravida sed
                  faucibus nunc. Nunc eget pharetra, in vitae porta lacus. Elit in
                  nisl, in quis nulla tellus suscipit id. Semper velit odio cras
                  pretium tristique habitant. Elit eu penatibus congue orci turpis.
                  Enim diam id.
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