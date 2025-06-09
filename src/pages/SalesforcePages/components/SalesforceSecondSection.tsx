import ProjectDescriptionMicroCase from 'components/ProjectDescriptionMicroCase/ProjectDescriptionMicroCase';
import ImageComponent from '../../../components/Image/Image';
import ImageMicroCase from '../../../components/ImageMicroCase/ImageMicroCase';
import VRARContent from '../../../components/VRARContent/VRARContent';
import ISalesforceSecondSectionProps from '../interfaces/ISalesforceSecondSection';

import styles from '../sass/salesforceSecondSection.module.scss';

function SalesforceSecondSection({
  secondSectionContent, picture, content, shadowColor, color, classes,
}: ISalesforceSecondSectionProps) {
  return (
    <div className={`${styles.secondSection} ${classes ? styles[classes] : ''}`}>
      <div className={`${styles.container} salesforceContainer`}>
        <VRARContent>
          <div className={styles.contentContainer}>
            <p>
              {content}
            </p>
            <div className={styles.items}>
              {secondSectionContent.map((item) => (
                <ProjectDescriptionMicroCase key={item.id} item={item} color={color} />
              ))}
            </div>
          </div>
        </VRARContent>
        <div className="image imageMedium">
          <ImageComponent
            src={picture}
            alt="Sales force"
            className="borderRadius secondSectionImg"
            fill
            sizes="(max-width: 768px) 100vw, (min-width: 768px) 100vw"
          />
          <ImageMicroCase
            className="videoImgWrapper"
            shadowColor={shadowColor}
          />
        </div>
      </div>
    </div>
  );
}

export default SalesforceSecondSection;
