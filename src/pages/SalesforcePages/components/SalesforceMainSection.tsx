import ImageComponent from '../../../components/Image/Image';
import VRARContent from '../../../components/VRARContent/VRARContent';
import { muktaVaaniFont } from '../../../fonts/MainFonts';
import ISalesforceMainSectionProps from '../interfaces/ISalesforceMainSection';

import styles from '../sass/salesforceMainSection.module.scss';

function SalesforceMainSection({
  mainBg, title, description, classes,
}:ISalesforceMainSectionProps) {
  return (
    <div className={`${styles.mainSection} ${classes ? styles[classes] : ''} ${muktaVaaniFont.variable}`}>
      <div className={styles.imgContainer}>
        <ImageComponent
          fill
          sizes="(max-width: 768px) 100vw, (min-width: 768px) 100vw"
          className={styles.mainBgImg}
          src={mainBg}
          alt="Sales force"
          priority
        />
        <div className={styles.overlay} />
        <div className={`${styles.container} salesforceContainer`}>
          <VRARContent>
            {title}
          </VRARContent>
          <VRARContent>
            <p className={styles.mainDescription}>
              {description}
            </p>
          </VRARContent>
        </div>
      </div>
    </div>
  );
}

export default SalesforceMainSection;
