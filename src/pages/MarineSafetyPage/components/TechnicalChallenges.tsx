import Link from 'next/link';

import VRARContent from 'components/VRARContent/VRARContent';
import technologies from '../data/technologies';
import technicalList from '../data/technicalList.json';
import PageLinks from 'constants/PageLinks';
import IPageStatus from '../../../interfaces/IPageStatus';

import styles from '../sass/MarineSafety.module.scss';

function TechnicalChallenges({ saleUrl }: IPageStatus) {
  return (
    <section className={styles.technicalOuterContainer}>
      <div className={styles.technicalInnerContainer}>
        <VRARContent className={styles.subtitleContainer}>
          <h2 className={styles.subtitle}>Technical challenges and technology stack</h2>
        </VRARContent>
        <div className={styles.challengesContainer}>
          <VRARContent className={styles.mainTextContainer}>
            <p className={styles.mainText}>The iOS version of the application was coded in Swift. </p>
            <p className={styles.mainText}>The Android app was written in Kotlin.</p>
            <p className={styles.mainText}>
              The project included simultaneous work with both BLE beacons using
              Core Location and external devices (hardware) through commands via Core Bluetooth.
            </p>
          </VRARContent>
          <VRARContent className={styles.technologiesContainer}>
            {technologies.map((item, index) => (
              <div key={['technologies', index].join('_')} className={styles.technology}>
                {item}
              </div>
            ))}
          </VRARContent>
        </div>
        <VRARContent className={styles.mainTextContainer}>
          <p className={styles.mainText}>
            The most challenging parts were:
          </p>
        </VRARContent>
        <VRARContent>
          <ul className={styles.listContainer}>
            {technicalList.map(({ id, text }) => (
              <li key={id} className={styles.item}>
                <span className={styles.itemCircle} />
                <p className={styles.itemText}>{text}</p>
              </li>
            ))}
          </ul>
        </VRARContent>
        <VRARContent>
          <div className={styles.biggerTextContainer}>
            <p className={styles.biggerText}>
              Particularly, the
              {' '}
              {!saleUrl ? (
                <Link
                  prefetch={false}
                  href={PageLinks.SPORTS_AND_FITNESS_DEVELOPMENT_SERVICES}
                  legacyBehavior
                >
                  sports app developers
                </Link>
              ) : (<>sports app developers</>)}
              {' '}
              worked on an asynchronous method of polling devices. The method features
              subscriptions to events, such as the appearance of a new device, its disappearance, or changing
              parameters.
            </p>
          </div>
        </VRARContent>
      </div>
      <div className={styles.semicircle} />
    </section>
  );
}

export default TechnicalChallenges;
