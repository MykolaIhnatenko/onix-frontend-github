import ImageComponent from '../../../components/Image/Image';
import VRARContent from '../../../components/VRARContent/VRARContent';
import { IHeroProps } from '../interfaces/IShipVRSimulatorPage';
import introductionVideo2x from '@/images/shipVrSimulatorCasePage/img_introduction-video@2x.webp';
import banner from '@/images/shipVrSimulatorCasePage/img_banner@2x.webp';
import heroContent from '../data/heroContentData';

import styles from '../sass/shipVrSimulatorCasePage.module.scss';

function Hero({ topVideoClicked, handleVideoClick }: IHeroProps) {
  return (
    <div className={`${styles.column} ${styles.headerBanner}`}>
      <ImageComponent
        src={banner}
        fill
        className={styles.headerBannerImg}
        quality={100}
        sizes="(max-width: 450px) 50vw, 100vw"
        alt="banner"
      />
      <div className={`${styles.row} ${styles.intTitle}`}>
        <div className={styles.itemText}>
          <h1 className={styles.white}>AHTS VR Simulator</h1>
          <p className={`${styles.subhending} ${styles.white} ${styles.mb15}`}>
            Commanding Anchor Handling and Tugging Ship for HTC Vive
          </p>
        </div>
      </div>
      <div className={`${styles.column} ${styles.intWrapper}`}>
        <div className={`${styles.row} ${styles.introduction} ${styles.mb15Center}`}>
          <div className={`${styles.itemText} ${styles.intContent}`}>
            <VRARContent>
              <h2 className={`${styles.white} ${styles.mb15Center}`}>Introduction</h2>
            </VRARContent>
            {heroContent.map(({ id, content }) => (
              <VRARContent key={id}>
                {content}
              </VRARContent>
            ))}
          </div>
          <div
            className={`${styles.itemImage} ${styles.introductionVideo}`}
            onClick={(event) => handleVideoClick(event, 'top')}
            role="presentation"
          >
            <ImageComponent
              src={introductionVideo2x}
              className={styles.videoCover}
              alt="video cover"
              width={586}
              height={409}
            />
            <div
              className={`${styles.videowrapper} ${topVideoClicked ? 'clicked' : ''}`}
            >
              <ImageComponent
                src={introductionVideo2x}
                alt="video cover"
                width={586}
                height={409}
                className={topVideoClicked ? `${styles.topVideoBgClicked} ${styles.topVideoBg}` : styles.topVideoBg}
              />
              {topVideoClicked && (
                <iframe
                  src="https://player.vimeo.com/video/221645792?autoplay=1&title=0&byline=0&portrait=0"
                  width="100%"
                  height="100%"
                  title="topVideo"
                  allow="autoplay; encrypted-media"
                  style={{ border: 'none' }}
                />
              )}
            </div>
          </div>
        </div>
        <div className={styles.triangle} />
        <div className={`${styles.row} ${styles.introduction}`}>
          <VRARContent className={`${styles.itemText} ${styles.intBotContent}`}>
            <p className={styles.white}>
              Our task was to study the supporting material and make sure we had all the information that
              <br />
              would help us recreate moves of a real 3,000-ton vessel navigating in high seas.
            </p>
          </VRARContent>
        </div>
      </div>
    </div>
  );
}
export default Hero;
