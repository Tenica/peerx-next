import Link from "next/link";
import { Fragment } from "react";


function Footer() {
    return ( 
        <Fragment>
  <footer className="footer-container">
    <div className="newsletter-container">
      <p className="newsletter-header">Subscribe To Our Newsletter</p>
      <div id="newsletter-form">
        <div className="newsletter-form-group">
          <input type="email" id="newsletter-input" placeholder="Enter email" />
        </div>
        <div id="subscribe-btn">
          <p className="btn-text">Subscribe</p>
        </div>
      </div>
    </div>
    <div className="footer-links-container">
      <div className="footer-links__logo">
        <div className="footer-logo-container">
          <Link href="../index.html">
            <img
              src="../images/footer-logo.svg"
              className="footer-logo"
              alt="footer-logo"
            />
          </Link>
        </div>
        <p className="footer-logo-text">PeerX</p>
      </div>
      <div className="footer-links__section-one">
        <ul className="footer-list-links">
          <li className="footer-link">
            <p className="link-text">
              <Link href="/">Home</Link>
            </p>
          </li>
          <li className="footer-link">
            <p className="link-text">
              <Link href="about">About</Link>
            </p>
          </li>
          <li className="footer-link">
            <p className="link-text">
              <Link href="services">Services</Link>
            </p>
          </li>
        </ul>
      </div>
      <div className="footer-links__section-two">
        <ul className="footer-list-links">
          <li className="footer-link">
            <p className="link-text">
              <Link href="privacy">Privacy Policy</Link>
            </p>
          </li>
          <li className="footer-link">
            <p className="link-text">
              <Link href="">Legal</Link>
            </p>
            <p />
          </li>
          <li className="footer-link">
            <p className="link-text">
              <Link href="terms">Terms of Service</Link>
            </p>
          </li>
        </ul>
      </div>
      <div className="footer-links__section-three">
        <ul className="footer-list-links">
          <li className="footer-link">
            <p className="link-text">Help Center</p>
          </li>
        </ul>
      </div>
      <div className="footer-links__social-media">
        <div className="social-media-title">
          <p className="social-title">Social Media</p>
        </div>
        <div className="social-media-container">
          <img src="../images/instagram.svg" className="insta" alt="" />
          <img src="../images/facebook.svg" className="facebook" alt="" />
          <img src="../images/youTube.svg" className="youTube" alt="" />
        </div>
      </div>
    </div>
    <div className="copyright-container">
      <p className="copyright-text">© NovaPeerX 2023. All rights reserved.</p>
    </div>
  </footer>
  <footer className="mobile-footer-container">
    <div className="newsletter-container">
      <p className="newsletter-header">Subscribe To Our Newsletter</p>
      <div id="newsletter-form">
        <div className="newsletter-form-group">
          <input type="email" id="newsletter-input" placeholder="Enter email" />
        </div>
        <div id="subscribe-btn">
          <p className="btn-text">Subscribe</p>
        </div>
      </div>
    </div>
    <div className="mobile-footer-section">
      <div className="footer-links-container">
        <div className="footer-links__logo">
          <div className="footer-logo-container">
            <Link href="../index.html">
              <img
                src="../images/footer-logo.svg"
                className="footer-logo"
                alt="footer-logo"
              />
            </Link>
          </div>
          <p className="footer-logo-text">PeerX</p>
        </div>
        <div className="footer-links__section-one">
          <ul className="footer-list-links">
            <li className="footer-link">
              <p className="link-text">
                <Link href="/">Home</Link>
              </p>
            </li>
            <li className="footer-link">
              <p className="link-text">
                <Link href="about">About</Link>
              </p>
            </li>
            <li className="footer-link">
              <p className="link-text">
                <Link href="services">Services</Link>
              </p>
            </li>
          </ul>
        </div>
      </div>
    </div>
    <div className="mobile-footer-section">
      <div className="footer-links-container">
        <div className="footer-links__section-two">
          <ul className="footer-list-links">
            <li className="footer-link">
              <p className="link-text">
                <Link href="privacy">Privacy Policy</Link>
              </p>
            </li>
            <li className="footer-link">
              <p className="link-text">
                <Link href="">Legal</Link>
              </p>
              <p />
            </li>
            <li className="footer-link">
              <p className="link-text">
                <Link href="terms">
                  Terms of Service
                </Link>
              </p>
            </li>
            <li className="footer-link">
              <p className="link-text">Help Center</p>
            </li>
          </ul>
        </div>
        <div className="footer-links__social-media">
          <div className="mobile-social-media-title">
            <p className="social-title">Social Media</p>
          </div>
          <div className="social-media-container">
            <img src="../images/instagram.svg" className="insta" alt="" />
            <img src="../images/facebook.svg" className="facebook" alt="" />
            <img src="../images/youTube.svg" className="youTube" alt="" />
          </div>
        </div>
      </div>
    </div>
    <div className="copyright-container">
      <p className="copyright-text">© NovaPeerX 2023. All rights reserved.</p>
    </div>
  </footer>
</Fragment>

     );
}

export default Footer;