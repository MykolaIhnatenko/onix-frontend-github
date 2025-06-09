import VRARMainTitle from 'components/VRARMainTitle/VRARMainTitle';
import { IItemSide } from '../interfaces/IAnimationTableDesign';
import VRARContentText from 'components/VRARContentText/VRARContentText';

import styles from '../sass/AnimationTableDesign.module.scss';

function ItemSide({ title, content }: IItemSide) {
  return (
    <div className={styles.contentContainer}>
      <div className={styles.titleSide}>
        <VRARMainTitle
          tag="h3"
          title={title}
          classes={{ title: '!text-[30px]/[40px] screen-md:!text-[20px]/[28px]' }}
        />
      </div>
      {content?.map((item, index) => (
        <div
          key={[item.id, index].join('_')}
          className={styles.item}
        >
          <div className={styles.titleItem}>
            <VRARMainTitle
              tag="p"
              title={item.title}
              classes={{ title: '!text-[24px]/[34px] screen-md:!text-[16px]/[24px]' }}
            />
          </div>
          <VRARContentText text={item.content} />
        </div>
      )) }
    </div>
  );
}

export default ItemSide;
