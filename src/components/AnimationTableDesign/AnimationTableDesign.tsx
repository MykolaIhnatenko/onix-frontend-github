import VRARMainTitle from 'components/VRARMainTitle/VRARMainTitle';
import ImageComponent from '../Image/Image';
import ItemSide from './components/ItemSide';
import IAnimationTableDesign from './interfaces/IAnimationTableDesign';

import styles from './sass/AnimationTableDesign.module.scss';

function AnimationTableDesign({
  bg, title, titleLeft, titleRight, contentLeft, contentRight,
}: IAnimationTableDesign) {
  return (
    <div className={styles.container}>
      {bg && (
        <div className={styles.bgContainer}>
          <ImageComponent
            src={bg}
            fill
            sizes="100vw"
            alt="black-background"
          />
        </div>
      )}
      {title && (
        <div className={styles.titleBox}>
          <VRARMainTitle title={title} />
        </div>
      )}
      <div className={styles.content}>
        <div className={styles.left}>
          <ItemSide
            title={titleLeft}
            content={contentLeft}
          />
        </div>
        <div className={styles.right}>
          <ItemSide
            title={titleRight}
            content={contentRight}
          />
        </div>
      </div>
    </div>
  );
}

export default AnimationTableDesign;
