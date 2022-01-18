// import Head from 'next/head'
// import Feedback from '../../../pages/Feedback'
// import Image from 'next/image'
import styles from './Feedback.module.css';

const Feedback = () => {
  return (
    <>
      {/* <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head> */}

      <div className={styles.container}>
        <div className={styles.feedbackContainer}>
          <button className={styles.feedbackButton}>Feedback</button>
        </div>
        <div>
          <p className={styles.text}>
            Please tell us what do you think, any kind of feedback is highly
            appreciated.
          </p>
          <textarea
            className={styles.textarea}
            placeholder="Your Feedback"
          ></textarea>
          <div className={styles.sendFeedbackContainer}>
            <button className={styles.sendFeedbackButton}>Send Feedback</button>
          </div>
        </div>

        <div className={styles.contactUsContainer}>
          <button className={styles.contactUs}>Contact Us</button>
        </div>
        {/* <div className={styles.icons}>
          <div className={styles.box}>
            <img className={styles.icon} src="/mail.png" alt="icon" />
            <span className={styles.span}>we will give email@gmail.com</span>
          </div>
          <img className={styles.icon} src="../public/images/homepage/Facebook.png" alt="icon" />
          <img className={styles.icon} src="/instagram.svg" alt="icon" />
          <img className={styles.icon} src="/linkedin.svg" alt="icon" />
        </div> */}
      </div>
    </>
  );
};
export default Feedback;
