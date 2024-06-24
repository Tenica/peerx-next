
import styles from './transaction.module.css'
import TransactionIcons from '../transactionIcon/transactionIcon';
import TransactionBody from '../transactionBody/transactionBody';

function Transaction()  {

  const transactionBody = [
    { title:"Convenient Transactions", body:"Seamless  payment options that are easy and tension free", src: '/images/Vector.png', width: 100, height: 100, alt: 'Vector 1'},
    { title:"Always Protected", body:"Safe and super secure transactions that are fully encrypted.", transActive:"transActive",  src: '/images/Vector1.png', width: 100, height: 100, alt: 'Vector 2'},
    { title:"Get Rewards", body:"Take advantage of our exclusive discounts and bonuses whenever you refer your friends!",  src: '/images/Vector2.png', width: 100, height: 100, alt: 'Vector 3' },
    { title:"No hidden charges", body:"Make easy and quick transfers without any extra or hidden charges.", src: '/images/Vector3.png', width: 100, height: 100, alt: 'Vector 3' },
  ];

  return (
    <>
    <div className={styles.transaction}>
     
   
    <section className={styles.transactionBodyContainer} >

    <TransactionBody className={styles.transactionBody} transactionArray={transactionBody}/>
   
   
   
     
   
      </section>
    </div>

    </>
    
  );
};

export default Transaction;
