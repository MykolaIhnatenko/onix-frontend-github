import Link from 'next/link';

import VRARContent from 'components/VRARContent/VRARContent';
import ImageComponent from 'components/Image/Image';
import GuideSection from './GuideSection';
import PageLinks from 'constants/PageLinks';
import IPageStatus from '../../../interfaces/IPageStatus';
import ProjectImage from '@/images/MarineSafetyPage/img_project-img-tablet.webp';

import styles from '../sass/MarineSafety.module.scss';

function ProjectSection({ saleUrl }: IPageStatus) {
  return (
    <GuideSection>
      <div className={styles.projectContainer}>
        <div className={styles.contentContainer}>
          <VRARContent className={styles.subtitleContainer}>
            <h2 className={styles.subtitle}>Project</h2>
          </VRARContent>
          <VRARContent className={styles.mainTextContainer}>
            <p className={styles.mainText}>
              The client approached Onix with the MOB location system concept and the
              task of writing a stand-alone mobile application to operate brand hardware: wristbands and
              float-on tags with Bluetooth Low Energy (BLE) beacons, and control hubs. Onix’s as a
              {' '}
              {!saleUrl ? (
                <Link
                  prefetch={false}
                  href={PageLinks.TRAVEL_SOFTWARE_DEVELOPMENT_SERVICES}
                  legacyBehavior
                >
                  travel software development company
                </Link>
              ) : (<>travel software development company</>)}
              {' '}
              implemented the entire application logic.
            </p>
            <p className={styles.mainText}>
              The client also provided the visual design for the first phase of the project - the
              development of a system incorporating only BLE beacons.
            </p>
            <p className={styles.mainText}>
              The second phase included external hardware and a list of commands.
            </p>
          </VRARContent>
        </div>
        <div className={styles.imageContainer}>
          <ImageComponent
            fill
            src={ProjectImage}
            alt="Team"
            sizes="(max-width: 768px) 100vw, (min-width: 768px) 100vw"
          />
        </div>
        <div className={styles.semicircle} />
      </div>
    </GuideSection>
  );
}

export default ProjectSection;
