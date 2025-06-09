import EdplusText from './EdplusText';
import VRARContent from '../../../components/VRARContent/VRARContent';
import ImageComponent from '../../../components/Image/Image';
import Icon from '../../../assets/icon';
import { EdplusTextVariant } from '../../../constants/enums';
import resultDescription from '../data/resultDescription';
import ImagePhons from '../../../assets/images/EdplusPage/img_case-result-phones@2x.webp';

import styles from '../sass/edplusResult.module.scss';

function EdplusResult() {
  return (
    <div className={styles.result}>
      <div className={styles.container}>
        <div className={styles.colLeft}>
          <VRARContent
            translate="translateX"
            offset={-4}
            className={styles.imageBlock}
          >
            <div className={styles.background} />
            <div className={styles.phoneImage}>
              <ImageComponent
                src={ImagePhons}
                alt="phones"
              />
            </div>
            <div className={styles.abstractImage}>
              <Icon.IconEdplusResultAbstraction />
            </div>
          </VRARContent>
        </div>
        <div className={`${styles.colRight} ${styles.colRightNotCenter}`}>
          <VRARContent
            translate="translateX"
            className={styles.textBlock}
          >
            <h2 className={styles.edplusTitleStyle}>Result</h2>
            {resultDescription.map(({ id, content }) => (
              <EdplusText key={id} content={content} variant={EdplusTextVariant.TOP_MARGIN24} />
            ))}
          </VRARContent>
        </div>
      </div>
    </div>
  );
}

export default EdplusResult;
