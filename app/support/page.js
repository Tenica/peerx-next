import Footer from "@/components/footer";
import Header from "@/components/header";
import styles from './support.module.css'
import { Fragment } from "react";
import Image from "next/image";
import Script from "next/script";
import SupportAccordion from "@/components/support/support-accordion";




function Support() {
    return ( 
        <Fragment>
        <Header />
        <main>
        <section className={styles.feedbackContainer}>
          <div className={styles.feedbackContent}>
            <div className={styles.feedbackHeaderContainer}>
              <h1 className={styles.feedbackHeader}>Feedback</h1>
            </div>
            <div className={styles.feedbackMainContainer}>
              <div className={styles.feedbackMainFormContainer}>
                <form>
                  <div className={styles.formInnerContainer}>
                    <div className={`${styles.formGroup} ${styles.name}`}>
                      <label className={styles.nameLabel} htmlFor="name">Name</label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        placeholder="full Name"
                        required=""
                      />
                    </div>
                    <div className={`${styles.formGroup} ${styles.email}`}>
                      <label className={styles.emailLabel} htmlFor="email">Email</label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        placeholder="email@example.com"
                        required=""
                      />
                    </div>
                  </div>
                  <div className={styles.formGroup} >
                    <label className={styles.subjectLabel} htmlFor="subject">Subject</label>
                    <input
                      type="text"
                      id="subject"
                      name="subject"
                      list="subjectList"
                      placeholder="Enter the subject"
                      required=""
                    />
                    <datalist id="subjectList">
                      <option value="Fraud Alert"></option>
                      <option value="Inquiry"></option>
                      <option value="Complaint">
                        {/* Add more options as needed */}
                      </option>
                    </datalist>
                  </div>
                  <div className={styles.formGroup} >
                    <label className={styles.messageLabel} htmlFor="message">Message</label>
                    <textarea
                      id="message"
                      name="message"
                      placeholder="Enter your message"
                      required=""
                      defaultValue={""}
                    />
                  </div>
                  <div className={styles.formGroup}>
                    <label className={styles.attachmentLabel} htmlFor="attachment">Attach file</label>
                    <div className={styles.customFileInput}>
                      <div className={styles.fileLabelContainer}>
                        <div className={styles.formLabelSvgContainer}>
                          <Image
                            width={50}
                            height={40}
                            src="images/su/material-symbols-light_upload.svg"
                            alt=""
                            className={styles.formSvg}
                          />
                        </div>
                        <p className={styles.fileLabel}>
                          Drag or click to upload file
                          <br />
                          <span className={styles.supportedFormat}>
                            Supported format: .jpg, .png, .pdf
                          </span>
                        </p>
                      </div>
                      <div className={styles.fileInputContainer}>
                        <input type="file" id="attachment" name="attachment" />
                      </div>
                    </div>
                  </div>
                  <div className={styles.formGroup}>
                    <div className={styles.formButtonContainer}>
                      <div className={styles.submitButton}>
                        <p>send message</p>
                      </div>
                    </div>
                  </div>
                </form>
              </div>
              <div className={styles.feedbackMainContactContainer}>
                <div className={styles.feedbackMainContactContent}>
                  <div className={styles.feedbackMainContactHeadingContainer}>
                    <p className={styles.feedbackMainContactHeading}>
                      Want to reach us directly?
                    </p>
                  </div>
                  <div className={styles.feedbackMainContactBodyContainer}>
                    <p className={styles.feedbackMainContactBody}>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Id dui
                      pharetra elementum sit id sagittis non donec egestas.
                    </p>
                  </div>
                  <div className={styles.feedbackMainContactListContainer}>
                    <div className={styles.feedbackMainContactLists}>
                      <div className={styles.feedbackMainContactList}>
                        <div className={styles.contactListSvg}>
                          <Image
                           width={30}
                           height={30}
                            src="images/su/5fad8b388a5b8b9f75c21b2b_image-icon-contact-crypto-template.svg.svg"
                            alt=""
                          />
                        </div>
                        <div className={styles.contactListText}>
                          <p>contact@example.com</p>
                        </div>
                      </div>
                      <div className={styles.feedbackMainContactList}>
                        <div className={styles.contactListSvg}>
                          <Image
                          width={30}
                           height={30}
                            src="images/su/5fad8b388a5b8b9f75c21b2b_image-icon-contact-crypto-template.svg.svg"
                            alt=""
                          />
                        </div>
                        <div className={styles.contactListText}>
                          <p>contact@example.com</p>
                        </div>
                      </div>
                      <div className={styles.feedbackMainContactList}>
                        <div className={styles.contactListSvg}>
                          <Image
                          width={30}
                           height={30}
                            src="images/su/5fad8b388a5b8b9f75c21b2b_image-icon-contact-crypto-template.svg.svg"
                            alt=""
                          />
                        </div>
                        <div className={styles.contactListText}>
                          <p>contact@example.com</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className={styles.supportFaqMainContainer}>
          <div className={styles.supportFaqContainer}>
            <div className={styles.supportFaqHeaderContainer}>
              <p className={styles.supportFaqHeader}>FAQ</p>
            </div>
            <div className={styles.supportFaqListsContainer}>
            <SupportAccordion title={"Question 1"} body={` Lorem ipsum dolor sit amet, consectetur adipiscing elit. Id dui
            pharetra elementum sit id sagittis non donec egestas.`}/>

            <SupportAccordion title={"Question 2"} body={` Lorem ipsum dolor sit amet, consectetur adipiscing elit. Id dui
            pharetra elementum sit id sagittis non donec egestas.`}/>

            <SupportAccordion title={"Question 3"} body={` Lorem ipsum dolor sit amet, consectetur adipiscing elit. Id dui
            pharetra elementum sit id sagittis non donec egestas.`}/>

            <SupportAccordion title={"Question 4"} body={` Lorem ipsum dolor sit amet, consectetur adipiscing elit. Id dui
            pharetra elementum sit id sagittis non donec egestas.`}/>

            <SupportAccordion title={"Question 5"} body={` Lorem ipsum dolor sit amet, consectetur adipiscing elit. Id dui
            pharetra elementum sit id sagittis non donec egestas.`}/>

            </div>
          </div>
        </section>
      </main>
      <Footer />
      <Script type="module" src="https://unpkg.com/ionicons@7.1.0/dist/ionicons/ionicons.esm.js" />
      <Script nomodule src="https://unpkg.com/ionicons@7.1.0/dist/ionicons/ionicons.js" />
      </Fragment>
       );
}

export default Support;