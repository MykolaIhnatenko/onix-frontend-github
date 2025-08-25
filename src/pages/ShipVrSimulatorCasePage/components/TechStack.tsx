import ImageComponent from '../../../components/Image/Image';
import VRARContent from '../../../components/VRARContent/VRARContent';
import { ITechStackProps } from '../interfaces/IShipVRSimulatorPage';
import technologies from '../data/technologiesData';

import BottomVideo from '@/images/shipVrSimulatorCasePage/img_introduction-video@2x.webp';
import styles from '../sass/shipVrSimulatorCasePage.module.scss';

function TechStack({ bottomVideoClicked, handleVideoClick, isBigTablet }: ITechStackProps) {
  return (
    <>
      <div className={`${styles.row} ${styles.techStack} ${styles.ma}`}>
        <div className={styles.itemText}>
          <VRARContent>
            <h2>Technology stack and solutions</h2>
          </VRARContent>
          <VRARContent>
            <p>
              The AHTS VR Simulator was developed for HTC Vive. Our team used Unity, Blender for 3D
              modeling and 3dMax.
            </p>
          </VRARContent>
        </div>
      </div>
      <div className={`${styles.row} ${styles.techStackSoft} ${styles.ma} ${styles.justify} ${styles.logos}`}>
        {technologies.map(({ alt, delay, src }) => (
          <VRARContent
            key={alt}
            className={styles.logoItem}
            delay={delay}
            offset={10}
          >
            <ImageComponent
              src={src}
              width={131}
              height={34}
              alt={alt}
            />
          </VRARContent>
        ))}
      </div>
      <div className={`${styles.row} ${styles.bottomContent} ${styles.justify}`}>
        <div
          className={`${styles.item} ${styles.itemImage} ${styles.bottomVideo}`}
          onClick={(event) => handleVideoClick(event, 'bottom')}
          role="presentation"
        >
          <ImageComponent
            src={BottomVideo}
            className={styles.videoCover}
            alt="video cover"
            width={734}
            height={423}
          />
          <div className={styles.bottomVideoWr}>
            <ImageComponent
              src={BottomVideo}
              className={bottomVideoClicked ? styles.bottomVideoBgClicked : ''}
              alt="video cover"
              width={isBigTablet ? 412 : 750}
              height={isBigTablet ? 288 : 523}
            />
            {bottomVideoClicked && (
              <iframe
                width="100%"
                height="100%"
                src="https://www.youtube-nocookie.com/embed/rmXK38Tmu3o?autoplay=1"
                allow="autoplay; encrypted-media"
                title="bottomVideo"
              />
            )}
          </div>
        </div>
      </div>
      <div className={`${styles.row} ${styles.result} ${styles.justify}`}>
        <div className={`${styles.item} ${styles.itemText}`}>
          <VRARContent>
            <h2 className={`${styles.white} ${styles.resultTitle}`}>Result</h2>
          </VRARContent>
          <VRARContent>
            <p className={styles.white}>
              The simulator game was a great success during the display at CeBit 2017. Our customer is
              <br />
              planning to improve the AHTS VR Simulator over time, including making ergonomic changes to
              <br />
              the bridge, adding more monitors and new working instruments, enriching weather effects and
              <br />
              optimizing the ship motion model.
            </p>
          </VRARContent>
        </div>
      </div>
    </>
  );
}
export default TechStack;
