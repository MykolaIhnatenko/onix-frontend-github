import VRARContent from 'components/VRARContent/VRARContent';
import GuideSection from './GuideSection';
import ImageComponent from 'components/Image/Image';
import mobileTechnologies from '../data/mobileTechnologies';
import travelIcons from '../data/travelIcons';
import images from '../data/images';

import styles from '../sass/MarineSafety.module.scss';

function ResultSection() {
  return (
    <GuideSection>
      <div className={styles.resultContainer}>
        <div className={styles.contentContainer}>
          <VRARContent className={styles.subtitleContainer}>
            <h2 className={styles.subtitle}>Result and prospects</h2>
          </VRARContent>
          <VRARContent className={styles.mainTextContainer}>
            <p className={styles.mainText}>
              The application has been released on Apple’s App Store and Google Play. The apps are
              compatible with iOS 11.0 and up and Android 5.1 and up, respectively.
            </p>
          </VRARContent>
          <VRARContent>
            <ul className={styles.mobileTechnologies}>
              {mobileTechnologies.map((icon, index) => (
                <li key={['mobileTechnologies', index].join('_')} className={styles.mobileTechnology}>
                  {icon}
                </li>
              ))}
            </ul>
          </VRARContent>
          <VRARContent className={styles.mainTextContainer}>
            <p className={styles.mainText}>
              Currently, the free apps and the affordable portable systems that can be taken from vessel
              to vessel are primarily marketed to cruising sailors and boaters. However, the product has
              the potential for wider adoption, e.g., for organizers of guided tours, mountain hikes,
              extreme marathons, or other leisure and sports outdoor activities where there is a high risk
              of individuals getting lost and being exposed to extreme conditions. It may be useful even
              during routine travel, helping prevent theft at an airport, if tags are attached to luggage.
            </p>
          </VRARContent>
          <VRARContent>
            <ul className={styles.travelContainer}>
              {travelIcons.map((icon, index) => (
                <li key={['travelIcons', index].join('_')} className={styles.travelItem}>
                  {icon}
                </li>
              ))}
            </ul>
          </VRARContent>
        </div>
        <div className={styles.imageContainer}>
          <ul className={styles.resultImages}>
            {images.map(({
              src,
              width,
              height,
              className,
              alt,
            }) => (
              <li key={alt} className={`${styles.image} ${className}`}>
                <ImageComponent
                  src={src}
                  alt={alt}
                  width={width}
                  height={height}
                  quality={100}
                />
              </li>
            ))}
          </ul>
        </div>
      </div>
    </GuideSection>
  );
}

export default ResultSection;
