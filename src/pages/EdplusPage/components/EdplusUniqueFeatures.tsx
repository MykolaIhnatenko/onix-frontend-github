import EdplusUniqueFeaturesItem from './EdplusUniqueFeaturesItem';
import EdplusText from './EdplusText';
import ImageComponent from '../../../components/Image/Image';
import VRARContent from '../../../components/VRARContent/VRARContent';
import Icon from '../../../assets/icon';
import { EdplusTextVariant } from '../../../constants/enums';
import uniqueFeaturesList1 from '../data/uniqueFeaturesList1';
import uniqueFeaturesList2 from '../data/uniqueFeaturesList2';
import technicalChallengeDescription from '../data/technicalChallengeDescription';
import ImagePhone1 from '../../../assets/images/EdplusPage/img_case-unique-mob-1@2x.webp';
import ImagePhone2 from '../../../assets/images/EdplusPage/img_case-unique-mob-2@2x.webp';
import ImageGirl from '../../../assets/images/EdplusPage/img_case-unique-girl@2x.webp';

import styles from '../sass/edplusUniqueFeatures.module.scss';

function EdplusUniqueFeatures() {
  return (
    <div className={styles.uniqueFeature}>
      <div className={styles.edplusWrap}>
        <div className={styles.background}>
          <div className={styles.abstractionImage}>
            <Icon.IconEdplusUniqueAbstraction />
          </div>
          <div className={styles.container}>
            <div className={styles.col}>
              <VRARContent
                translate="translateX"
                offset={-4}
                className={styles.description}
              >
                <h2 className={styles.edplusTitleStyle}>Unique Feature</h2>
                <p className={`${styles.edplusTextStyleBold} ${styles.subtitle}`}>
                  The application promotes the users’&ensp;
                  <span className={styles.subtitleText}>self-development </span>
                  in three ways:
                </p>
                <ul className={styles.itemList}>
                  {uniqueFeaturesList1.map(({
                    id,
                    content,
                  }) => (
                    <EdplusUniqueFeaturesItem key={id} content={content} />
                  ))}
                </ul>
                <p className={styles.edplusTextStyle}>
                  The ability to lock third-party applications is the killer feature of EdPlus.
                  In the application settings, users can select from the list the applications they want
                  to block: YouTube, Instagram, Snapchat, and Facebook. Every time they try to open one of
                  these, EdPlus will display educational content instead.
                </p>
                <p className={styles.edplusTextStyleBold}>
                  Users can:
                </p>
                <ul className={styles.itemList}>
                  {uniqueFeaturesList2.map(({
                    id,
                    content,
                  }) => (
                    <EdplusUniqueFeaturesItem key={id} content={content} />
                  ))}
                </ul>
              </VRARContent>
            </div>
            <div className={styles.col}>
              <VRARContent
                translate="translateX"
                className={styles.imageBlock}
              >
                <div className={styles.firstImg}>
                  <ImageComponent
                    src={ImagePhone1}
                    fill
                    sizes="100vw"
                    alt="phone-screen"
                  />
                </div>
                <div className={styles.secondImg}>
                  <ImageComponent
                    src={ImagePhone2}
                    fill
                    sizes="100vw"
                    alt="phone-screen"
                  />
                </div>
              </VRARContent>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.technicalChallenges}>
        <div className={styles.girlImage}>
          <ImageComponent
            src={ImageGirl}
            fill
            sizes="100vw"
            alt="girl"
          />
        </div>
        <VRARContent className={styles.technicalChallengesBackground}>
          <h2 className={styles.edplusTitleStyle}>
            Technical Challenges
          </h2>
          {technicalChallengeDescription.map(({
            id,
            content,
          }) => (
            <EdplusText key={id} content={content} variant={EdplusTextVariant.TOP_MARGIN_FIRST_CHILD} />
          ))}
        </VRARContent>
        <div className={styles.technicalChallengesImageBlock}>
          <div className={styles.technicalChallengesImages}>
            <Icon.IconEdplusTechicalChanllenges />
          </div>
        </div>
      </div>
    </div>
  );
}

export default EdplusUniqueFeatures;
