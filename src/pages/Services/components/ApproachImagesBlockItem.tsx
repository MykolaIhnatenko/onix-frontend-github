import { ApproachImagesBlockItemType } from '../interfaces/IApproachImgBlock';
import ContentText from '../../../components/ContentText/ContentText';
import ApproachImgBlock from './ApproachImgBlock';

import styles from '../sass/approachImagesBlockItem.module.scss';

function ApproachImagesBlockItem({
  img, imgTablet, imgText, imgMobile, variant, textTop, textBottom,
}: ApproachImagesBlockItemType) {
  return (
    <li className={styles.imagesBlockItem}>
      <ApproachImgBlock
        img={img}
        imgMobile={imgMobile}
        imgTablet={imgTablet}
        imgText={imgText}
        variant={variant}
      />
      <div className={styles.texts}>
        <ContentText tag="p" className={styles.text}>
          {textTop}
        </ContentText>
        <ContentText tag="p" className={styles.text}>
          {textBottom}
        </ContentText>
      </div>
    </li>
  );
}

export default ApproachImagesBlockItem;
