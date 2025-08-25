import List from './List';
import VRARContent from 'components/VRARContent/VRARContent';
import ImageComponent from 'components/Image/Image';
import GuideSection from './GuideSection';
import icons from '../data/icons';
import listItems from '../data/listItems.json';

import ImageKiller from '@/images/MarineSafetyPage/img_killer-future-img.webp';
import styles from '../sass/MarineSafety.module.scss';

function KillerFutureSection() {
  return (
    <GuideSection>
      <div className={styles.killerFutureContainer}>
        <div className={styles.contentContainer}>
          <VRARContent className={styles.subtitleContainer}>
            <h2 className={styles.subtitle}>Killer feature</h2>
          </VRARContent>
          <VRARContent className={styles.mainTextContainer}>
            <p className={styles.mainText}>
              Through the app, a virtual tether is formed between
              each beacon and mobile device in the system.
              Multiple beacons can be connected to a single mobile
              device, and vice versa, one beacon can be connected
              to multiple phones, tablets, and in the case of Apple devices, also iPod Touch and Mac.
            </p>
            <p className={styles.mainText}>
              The mobile app technology can detect a break in the virtual
              tether, e.g., when a person or pet falls overboard,
              within 8 seconds; no cell phone signal is required.
            </p>
          </VRARContent>
          <VRARContent className={styles.iconsContainer}>
            {icons.map((chainIcons, index) => (
              <div
                key={['iconsArray', index].join('_')}
                className={`${styles.iconsChainContainer} ${index === 2 ? styles.iconsChainContainer2 : ''}`}
              >
                {chainIcons.map((item, i) => (
                  <div key={['chain-icon', i].join('_')} className={styles.iconContainer}>
                    {item}
                  </div>
                ))}
              </div>
            ))}
          </VRARContent>
          <VRARContent className={`${styles.mainTextContainer} ${styles.esp}`}>
            <p className={styles.mainText}>
              This would trigger the system that will automatically:
            </p>
          </VRARContent>
          <VRARContent>
            <List className={styles.listContainer} items={listItems} />
          </VRARContent>
          <VRARContent className={styles.biggerTextContainer}>
            <p className={styles.biggerText}>
              The system will display the main group’s current
              GPS location and the missing person’s last known
              GPS position, and will show the direction, in a compass format, back to the point of loss.
            </p>
          </VRARContent>
        </div>
        <div className={styles.imageContainer}>
          <ImageComponent
            fill
            src={ImageKiller}
            alt="Feature image"
            sizes="(max-width: 768px) 100vw, (min-width: 768px) 100vw"
          />
        </div>
      </div>
    </GuideSection>
  );
}

export default KillerFutureSection;
