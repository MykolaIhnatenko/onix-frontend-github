import ImageComponent from '../../../components/Image/Image';
import ImageMicroCase from '../../../components/ImageMicroCase/ImageMicroCase';
import VRARContent from '../../../components/VRARContent/VRARContent';
import ISalesforceChallengesSectionProps from '../interfaces/ISalesforceChallengesSection';

import styles from '../sass/salesforceChallengesSection.module.scss';

function SalesforceChallengesSection({
  classes, content, picture, shadowColor, boxShadowClass = 'imageBig',
}: ISalesforceChallengesSectionProps) {
  return (
    <div className={`${styles.challengesSection} ${classes ? styles[classes] : ''}`}>
      <div className={`${styles.container} salesforceContainer`}>
        <VRARContent>
          <h2>Challenges</h2>
        </VRARContent>
        <VRARContent>
          {content}
        </VRARContent>
        <div className={`image ${boxShadowClass}`}>
          <ImageComponent
            src={picture}
            fill
            className="borderRadius secondSectionImg"
            alt="Sales force"
            sizes="(max-width: 768px) 100vw, (min-width: 768px) 100vw"
          />
          <ImageMicroCase
            className="imgWrapper"
            shadowColor={shadowColor}
          />
        </div>
      </div>
    </div>
  );
}

export default SalesforceChallengesSection;
