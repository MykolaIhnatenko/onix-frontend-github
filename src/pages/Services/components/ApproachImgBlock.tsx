import ImageComponent from '../../../components/Image/Image';
import { ApproachImgBlockType } from '../interfaces/IApproachImgBlock';
import useBackground from '../../../hook/useBackground';
import ContentText from '../../../components/ContentText/ContentText';

import styles from '../sass/approachImgBlock.module.scss';

function ApproachImgBlock({
  img, imgTablet, imgText, imgMobile, variant,
}: ApproachImgBlockType) {
  const background = useBackground(
    img,
    imgTablet,
    imgMobile,
  );
  return (
    <div className={`${styles.approachImgBlock} ${styles[variant]}`}>
      {background && (
        <div className={styles.imgContainer}>
          <ImageComponent
            src={background}
            width={520}
            height={600}
            alt="figures"
          />
        </div>
      )}
      <div className={styles.borderText}>
        <ContentText className={styles.text}>
          {imgText}
        </ContentText>
      </div>
    </div>
  );
}

export default ApproachImgBlock;
