import MainTitle from '../../../../components/MainTitle/MainTitle';
import IDragSliderItem from '../interfaces/IDragSliderItem';

import styles from '../sass/dragSliderItem.module.scss';

function DragSliderItem({ id, title, tag }: IDragSliderItem) {
  return (
    <div key={id} className={styles.item}>
      <span className={styles.id}>{id}</span>
      <MainTitle className={styles.itemTitle} tag={tag}>
        {title}
      </MainTitle>
    </div>
  );
}

export default DragSliderItem;
