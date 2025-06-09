import IDevopsSolutionsDragSliderItem from '../interfaces/IDevopsSolutionsDragSliderItem';
import ImageComponent from '../../../components/Image/Image';
import MainTitle from '../../../components/MainTitle/MainTitle';

import styles from '../sass/devopsSolutionsDragSliderItem.module.scss';

function DevopsSolutionsDragSliderItem({
  image, number, title, priority = false,
}: IDevopsSolutionsDragSliderItem) {
  return (
    <div className={styles.container}>
      <div className={styles.background}>
        <ImageComponent
          src={image}
          alt="background"
          priority={priority}
        />
      </div>
      <div className={styles.content}>
        <MainTitle tag="p" className={styles.number}>
          {number}
        </MainTitle>
        <MainTitle tag="h3" className={styles.title}>
          {title}
        </MainTitle>
      </div>
    </div>
  );
}

export default DevopsSolutionsDragSliderItem;
