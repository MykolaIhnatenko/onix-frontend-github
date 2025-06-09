import VRARContent from '../../../components/VRARContent/VRARContent';
import INeedContent from '../interfaces/INeedContent';

import styles from '../sass/coloradoSportsVideoNumberList.module.scss';

function ColoradoSportVideoNumberList({ list }: { list : INeedContent[] }) {
  return (
    <ul className={styles.list}>
      {list.map(({ id, content, src }) => (
        <li key={id}>
          <VRARContent className={styles.itemContainer}>
            <div className={styles.imgContainer}>
              {src}
            </div>
            {content}
          </VRARContent>
        </li>
      ))}
    </ul>
  );
}

export default ColoradoSportVideoNumberList;
