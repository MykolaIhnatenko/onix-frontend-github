import { useAppSelector } from '../../../hook/reduxToolkit';
import ImageComponent from 'components/Image/Image';
import VRARContent from 'components/VRARContent/VRARContent';
import GuideSection from './GuideSection';
import upperPlacedIcons from '../data/upperPlacedIcons';
import lowerPlacedIcons from '../data/lowerPlacedIcons';
import ImageSolution from '@/images/MarineSafetyPage/img_solution-img.webp';
import ImageSolutionTablet from '@/images/MarineSafetyPage/img_solution-tablet.webp';

import styles from '../sass/MarineSafety.module.scss';

function SolutionSection() {
  const {
    isLGDevice,
    isXLDevice,
    isXXLDevice,
    isXXXLDevice,
  } = useAppSelector((state) => state.app.screenSizes);

  const isDesktop = isLGDevice || isXLDevice || isXXLDevice || isXXXLDevice;

  return (
    <GuideSection>
      <div className={styles.solutionContainer}>
        <div className={styles.contentContainer}>
          <VRARContent className={styles.subtitleContainer}>
            <h2 className={styles.subtitle}>Solution</h2>
          </VRARContent>
          <VRARContent className={styles.mainTextContainer}>
            <p className={styles.mainText}>
              Onix’s client envisioned a person/object location and alert system.
              It incorporates wearable water-proof beacons working as location
              alert transmitters, individuals’ mobile devices, and optionally,
              a full-function control device suitable for bigger vessels.
              A designated mobile application turns everyone’s smartphone
              or tablet into a person-tracking and alarm system.
            </p>
          </VRARContent>
          <VRARContent className={styles.iconsContainer}>
            {upperPlacedIcons.map((item, index) => (
              <div key={['upperIcons', index].join('_')} className={styles.iconContainer}>
                {item}
              </div>
            ))}
          </VRARContent>
          <VRARContent className={`${styles.mainTextContainer} ${styles.bigger}`}>
            <p className={styles.mainText}>
              Each individual in a group, e.g., crew and guests on board,
              including children and pets, would get a wristband or tag
              that can be securely attached to their body and assigned
              their name. Through the app, the safety system
              would integrate their personal smartphone or tablet and
              link it to one or several wearables. Tags may be attached to objects as well.
            </p>
          </VRARContent>
          <VRARContent className={`${styles.iconsContainer} ${styles.narrow}`}>
            {lowerPlacedIcons.map((item, index) => (
              <div key={['lowerIcons', index].join('_')} className={styles.iconContainer}>
                {item}
              </div>
            ))}
          </VRARContent>
          <VRARContent className={styles.mainTextContainer}>
            <p className={styles.mainText}>
              The system would be constantly tracking all
              beacons around the vessel. If one of the beacon
              wearers moves away from the control device or main
              mobile device in the group, such as the captain’s
              or guide’s, the system would detect it and automatically
              alarm the rest of the group through their mobile devices.
              Having recorded the missing person’s last coordinates,
              the system would direct the crew back to the point of loss, promoting rapid recovery.
            </p>
            <p className={styles.mainText}>
              The wearables are also equipped with
              a water-activated strobe light that
              increases the lost person’s visibility at night.
            </p>
          </VRARContent>
        </div>
        <div className={styles.imageContainer}>
          <ImageComponent
            fill
            src={isDesktop ? ImageSolution : ImageSolutionTablet}
            alt="Solution"
            sizes="(max-width: 768px) 100vw, (min-width: 768px) 100vw"
          />
        </div>
      </div>
    </GuideSection>
  );
}

export default SolutionSection;
