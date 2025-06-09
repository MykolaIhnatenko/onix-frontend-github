import { ibmPlexMono, generalSans } from '../../../fonts/MainFonts';

import styles from '../sass/OnlineBooking.module.scss';

function OnlineBooking() {
  return (
    <div className={styles.onlineBooking}>
      <div className={styles.content}>
        <span className={`${styles.titleAbout} ${ibmPlexMono.variable}`}>
          [ Online booking system development services we offer ]
        </span>
        <div className={`${styles.contentBox} ${generalSans.variable}`}>
          <span className={`${styles.textWhite}`}>
            We provide a full range of online booking system development services to digitize your internal
            and external processes and help your business thrive and grow.
          </span>
          <span className={`${styles.textWhite}`}>
            The Onix team builds secure, scalable, and high-performing custom online booking
            solutions that reduce administrative work, provide your customers with an exceptional
            booking experience, and, as a result, level up your business!
          </span>
        </div>
      </div>
    </div>
  );
}

export default OnlineBooking;
