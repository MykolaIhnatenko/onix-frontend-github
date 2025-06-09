import { ITableBlock } from '../interfaces/ITableBlock';
import MainTitle from '../../../components/MainTitle/MainTitle';
import VRARContent from '../../../components/VRARContent/VRARContent';
import ItemList from 'components/ItemList/ItemList';

import styles from '../sass/NowWhatTableBlock.module.scss';

function NowWhatTableBlock({ content }: ITableBlock) {
  return (
    <div className={styles.tableBlock}>
      {Object.keys(content).map((title, index) => (
        <div key={title} className={styles.item}>
          <div className={styles.list}>
            <VRARContent>
              <MainTitle className={styles.itemTitle} tag="p">{title}</MainTitle>
            </VRARContent>
            <ItemList
              list={content[title]}
              marginBottomAbsent
              withAnimate
            />
          </div>
          <VRARContent className={styles.number}>
            <p>{`0${index + 1}`}</p>
          </VRARContent>
        </div>
      ))}
    </div>
  );
}

export default NowWhatTableBlock;
