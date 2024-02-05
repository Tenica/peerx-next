import Image from 'next/image';
import styles from './transaction.module.css'


function Transaction() {
    return (       <section className={styles.transactionContainer}>
        <div className={styles.transactionHeaderContainer}>
          <h1 className={styles.transactionHeaderTitle}>
            Safe &amp; Convenient Transaction
          </h1>
          <p className={styles.transactionTitleBody}>
            Sed fugiat praesentium aut cumque explicabo eum
           
            expedita recusandae et cumque velit.
          </p>
        </div>
        <div className={styles.transactionsContainerCards}>
          <div className={`${styles.transactionCard} ${styles.transOne}`}>
            <div className={styles.transactionSvg}>
              <Image  width={100} height={200} src="/images/Vector 4.svg" className={styles.transSvg} alt="" />
            </div>
            <h5>Always Protected</h5>
            <div className={styles.transactionCardBody}>
              <p>
                Ab corrupti maxime quo mollitia voluptas ab culpa quia. Aut culpa
                galisum nam nobis labore est quia necessitatibus.
              </p>
            </div>
          </div>
          <div className={`${styles.transactionCard} ${styles.transActive}`}>
            <div className={styles.transactionSvg}>
              <div className={styles.svg1}>
                {" "}
                <Image  width={100} height={100} src="/images/Vector 9.svg" className={styles.transSvg} alt="" />
              </div>
              <div className={styles.svg2}>
                <Image  width={100} height={100} src="/images/Rectangle 1.svg" className={styles.transSvg} alt="" />
              </div>
            </div>
            <h5>Get Reward</h5>
            <div className={styles.transactionCardBody}>
              <p id="transActiveBody">
                Ab corrupti maxime quo mollitia voluptas ab culpa quia. Aut culpa
                galisum nam nobis labore est quia necessitatibus.
              </p>
            </div>
          </div>
          <div className={styles.transactionCard}>
            <div className={styles.transactionSvg}>
              <Image  width={100} height={100} src="/images/Vector 122.svg" className={styles.transSvg} alt="" />
            </div>
            <h5>No Hidden fees</h5>
            <div className={styles.transactionCardBody}>
              <p>
                Ab corrupti maxime quo mollitia voluptas ab culpa quia. Aut culpa
                galisum nam nobis labore est quia necessitatibus.
              </p>
            </div>
          </div>
          <div className={`${styles.transactionCard} ${styles.transLast}`}>
            <div className={styles.transactionSvg}>
              <Image  width={100} height={100} src="/images/Ellipse 47.svg" className={styles.transSvg} alt="" />
            </div>
            <h5>Trade on your team</h5>
            <div className={styles.transactionCardBody}>
              <p>
                Ab corrupti maxime quo mollitia voluptas ab culpa quia. Aut culpa
                galisum nam nobis labore est quia necessitatibus.
              </p>
            </div>
          </div>
        </div>
      </section> );
}

export default Transaction;