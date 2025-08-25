import Phone1 from '@/images/Photowhy/img_phone1.webp';
import Phone2 from '@/images/Photowhy/img_phone2.webp';
import Phone3 from '@/images/Photowhy/img_phone3.webp';
import styles from '../sass/photowhyAboutSection.module.scss';

const aboutContent = [
  {
    id: 1,
    imgContainer: {
      src: Phone1,
      blur: (
        <>
          <div className={`${styles.orangeBlur} ${styles.firstOrangeBlurBlock}`} />
          <div className={`${styles.redBlur} ${styles.firstRedBlurBlock}`} />
          <div className={styles.firstPeachBlock} />
        </>
      ),
    },
    title: 'Live event',
    content: (
      <p>
        Watch daily live streams where the world&apos;s best photographers share their experience and tips
        on how to compose and take better photos
      </p>
    ),
  },
  {
    id: 2,
    imgContainer: {
      src: Phone2,
      blur: (
        <>
          <div className={`${styles.orangeBlur} ${styles.secondOrangeBlurBlock}`} />
          <div className={`${styles.redBlur} ${styles.secondRedBlurBlock}`} />
        </>
      ),
    },
    title: 'Get feedback',
    content: (
      <p>
        Receive constructive feedback on their particular shots or full portfolio from a chosen professional
      </p>
    ),
  },
  {
    id: 3,
    imgContainer: {
      src: Phone3,
      blur: (
        <>
          <div className={`${styles.orangeBlur} ${styles.thirdOrangeBlurBlock}`} />
          <div className={`${styles.redBlur} ${styles.thirdRedBlurBlock}`} />
        </>
      ),
    },
    title: 'Mentorship',
    content: (
      <p>
        Book a one-on-one mentoring session/masterclass where they can get answers to their most
        <br />
        burning questions or even work with
        <br />
        the best photographers
      </p>
    ),
  },
];

export default aboutContent;
