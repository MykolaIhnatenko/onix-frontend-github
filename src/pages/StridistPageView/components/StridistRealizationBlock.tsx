import ImageComponent from '../../../components/Image/Image';
import IRealizationBlockProps from '../interfaces/IRealizationBlock';
import VRARContent from '../../../components/VRARContent/VRARContent';

import styles from '../sass/stridistRealizationBlock.module.scss';

function StridistRealizationBlock({
  title, content, imgHeight, imgSrc, imgWidth,
}:IRealizationBlockProps) {
  return (
    <div className={styles.wrapper}>
      <div className={styles.image}>
        <ImageComponent
          src={imgSrc}
          width={imgWidth}
          height={imgHeight}
          alt="screens"
        />
      </div>
      <div className={styles.content}>
        <VRARContent>
          {title}
        </VRARContent>
        <VRARContent>
          {content}
        </VRARContent>
      </div>
    </div>
  );
}

export default StridistRealizationBlock;
