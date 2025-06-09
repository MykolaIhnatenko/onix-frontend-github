import styles from '../sass/testimonials.module.scss';

const testimonialsClientsSayData = [
  {
    id: 1,
    text: (
      <p className={styles.text}>
        “We&apos;ve had a fantastic experience working with the team at Onix.
        They&apos;ve delivered the vision we had for our platform. Communication has been
        great, they go the extra mile to make sure work is done to a high standard and
        delivered on time. It&apos;s been a pleasure to have them on board highly recommend them.”
      </p>
    ),
    author: (
      <>
        <p className={styles.position}>CEO, Stridist</p>
        <p className={styles.name}>Sukh Sidhu</p>
      </>
    ),
  },
  {
    id: 2,
    text: (
      <p className={styles.text}>
        “They provided us with amazing UI/UX design — it was exactly what we had envisioned.”
      </p>
    ),
    author: (
      <>
        <p className={styles.position}>Business Analyst, QoreNext</p>
        <p className={styles.name}>Gary Kwan</p>
      </>
    ),
  },
  {
    id: 3,
    text: (
      <p className={styles.text}>
        “They always went above and beyond and really viewed themselves as an extension of our company&apos;s team.”
      </p>
    ),
    author: (
      <>
        <p className={styles.position}>CEO, Bracketology, LLC</p>
        <p className={styles.name}>Jonah Fialkow</p>
      </>
    ),
  },
  {
    id: 4,
    text: (
      <p className={styles.text}>
        “We are impressed with their professionalism and transparency in their work.”
      </p>
    ),
    author: (
      <>
        <p className={styles.position}>CEO, MiPaddle</p>
        <p className={styles.name}>Mark Innes</p>
      </>
    ),
  },
  {
    id: 5,
    text: (
      <p className={styles.text}>
        “Their outstanding ability to solve extreme technical challenges
        distinguishes them from their competitors.”
      </p>
    ),
    author: (
      <>
        <p className={styles.position}>CEO, messageLOUD</p>
        <p className={styles.name}>Garin Toren</p>
      </>
    ),
  },
  {
    id: 6,
    text: (
      <p className={styles.text}>
        “The Onix team is extremely reliable, hard-working, and intelligent.”
      </p>
    ),
    author: (
      <>
        <p className={styles.position}>CEO, ROI Genius</p>
        <p className={styles.name}>Andrew Cramer</p>
      </>
    ),
  },
];

export default testimonialsClientsSayData;
