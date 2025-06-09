import VRARContent from '../../../components/VRARContent/VRARContent';
import ImageComponent from '../../../components/Image/Image';
import Icon from '../../../assets/icon';
import HeadPhone from '../../../assets/images/EdplusPage/img_phone.webp';

import styles from '../sass/edplusMainSection.module.scss';

function EdplusMainSection() {
  return (
    <div className={styles.edplusStudySmarter}>
      <Icon.IconEdplusArrow className={styles.arrowImage} />
      <div className={styles.edplusWrap}>
        <div className={styles.header}>
          <div className={styles.leftCol}>
            <Icon.IconEdplusLogo className={styles.logo} />
            <h1 className={styles.title}>
              Edplus - study smarter
            </h1>
            <p className={styles.subtitle}>
              Mobile application for self-learning
            </p>
          </div>
          <div className={styles.rightCol}>
            <VRARContent
              translate="translateX"
              triggerOnce
              className={styles.backgroundPhoneLogo}
            >
              <div />
            </VRARContent>
            <VRARContent
              translate="translateX"
              triggerOnce
              className={styles.headPhone}
              delay={0.5}
            >
              <ImageComponent
                src={HeadPhone}
                priority
                alt="phone"
              />
            </VRARContent>
          </div>
        </div>
      </div>
    </div>
  );
}

export default EdplusMainSection;
